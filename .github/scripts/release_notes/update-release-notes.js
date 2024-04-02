/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const { fetchReleaseInfo } = require('./github-release');
const { fetchAndroidReleaseInfo } = require('./android-release');
const { capitalizeFirstLetter, convertISODateToRleaseDateFormat, extractReleaseNotes } = require('./utils');
const lodashTemplate = require('lodash.template');
const fs = require("fs");
const _ = require('lodash');

const repoNames = [
    "aepsdk-roku",
    "aepsdk-react-native",
    "aepsdk_flutter",
    "aepsdk-core-ios",
    "aepsdk-assurance-ios",
    "aepsdk-userprofile-ios",
    "aepsdk-edge-ios",
    "aepsdk-edgeconsent-ios",
    "aepsdk-edgeidentity-ios",
    "aepsdk-edgemedia-ios",
    "aepsdk-edgebridge-ios",
    "aepsdk-optimize-ios",
    "aepsdk-messaging-ios",
    "aepsdk-campaign-ios",
    "aepsdk-campaignclassic-ios",
    "aepsdk-media-ios",
    "aepsdk-audience-ios",
    "aepsdk-analytics-ios",
    "aepsdk-places-ios",
    "aepsdk-target-ios",
]

const releaseNoteTemplateGenerator = lodashTemplate(
    `
## <%= date %>

### <%= title %>

<%= note %>`
)

const releaseNoteWithoutDateTemplateGenerator = lodashTemplate(
    `
### <%= title %>

<%= note %>`
)

const BOMreleaseNoteTemplateGenerator = lodashTemplate(
    `
## <%= date %>

### <%= title %>

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

<%= note %>

</AccordionItem>

</Accordion>`
)

const BOMreleaseNoteWithoutDateTemplateGenerator = lodashTemplate(
    `
### <%= title %>

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

<%= note %>

</AccordionItem>

</Accordion>`
)

function extractBOMTableContent(releaseNote) {
    let lines = releaseNote.split('\n');
    let newLines = []
    for (const line of lines) {
        if (line.startsWith('|')) {
            newLines.push(line)
        }
    }
    return newLines
}

function cleanupReleaseContent(items) {
    // Find the index of the first non-empty item
    const firstNonEmptyIndex = _.findIndex(items, item => item.trim() !== '');

    // Find the index of the last non-empty item
    const lastNonEmptyIndex = _.findLastIndex(items, item => item.trim() !== '');

    // If no non-empty items are found, return an empty array
    if (firstNonEmptyIndex === -1 || lastNonEmptyIndex === -1) {
        return [];
    }

    // Return the array sliced from the first to the last non-empty item
    const trimmedItems = items.slice(firstNonEmptyIndex, lastNonEmptyIndex + 1);
    // If the first non-empty item is "-", replace it with "*"
    return trimmedItems.map(item => item.replace(/^\s*-/, '*'))
}

function generateReleaseNoteSection(ISODateString, platform, extension, version, releaseNote) {
    let array = extractReleaseNotes(releaseNote)
    array = cleanupReleaseContent(array)
    let releaseNoteSection = releaseNoteTemplateGenerator({
        date: convertISODateToRleaseDateFormat(ISODateString),
        title: `${platform} ${extension} ${version}`,
        note: array.join('\n')
    })
    return releaseNoteSection
}

function generateReleaseNoteSectionWithoutDateLine(platform, extension, version, releaseNote) {
    let array = extractReleaseNotes(releaseNote)
    array = cleanupReleaseContent(array)
    let releaseNoteSection = releaseNoteWithoutDateTemplateGenerator({
        title: `${platform} ${extension} ${version}`,
        note: array.join('\n')
    })
    return releaseNoteSection
}

function generateBOMReleaseNoteSection(ISODateString, platform, extension, version, releaseNote) {
    let array = extractBOMTableContent(releaseNote)
    let releaseNoteSection = BOMreleaseNoteTemplateGenerator({
        date: convertISODateToRleaseDateFormat(ISODateString),
        title: generateReleaseTitle(platform, extension, version),
        note: array.join('\n')
    })
    return releaseNoteSection
}

function generateBOMReleaseNoteSectionWithoutDateLine(platform, extension, version, releaseNote) {
    let array = extractBOMTableContent(releaseNote)
    let releaseNoteSection = BOMreleaseNoteWithoutDateTemplateGenerator({
        title: generateReleaseTitle(platform, extension, version),
        note: array.join('\n')
    })
    return releaseNoteSection
}

function generateReleaseTitle(platform, extension, version) {
    return `${platform} ${extension} ${version}`
}

function filterExistingReleaseInfo(releaseInfoArray, lines) {
    let result = releaseInfoArray.filter(releaseInfo => {
        let title = generateReleaseTitle(releaseInfo.platform, releaseInfo.extension, releaseInfo.version)
        let titleLine = `### ${title}`
        if (hasLineStartWith(titleLine, lines)) {
            return false
        }
        return true
    })
    return result
}

function generateReleaseNotesSection(releaseInfo) {
    let releaseNote = ''
    if (releaseInfo.extension == 'BOM') {
        releaseNote = generateBOMReleaseNoteSection(releaseInfo.published_at, releaseInfo.platform, releaseInfo.extension, releaseInfo.version, releaseInfo.body)
    } else {
        releaseNote = generateReleaseNoteSection(releaseInfo.published_at, releaseInfo.platform, releaseInfo.extension, releaseInfo.version, releaseInfo.body)
    }
    return releaseNote
}

function generateReleaseNotesSectionWithoutDateLine(releaseInfo) {
    let releaseNote = ''
    if (releaseInfo.extension == 'BOM') {
        releaseNote = generateBOMReleaseNoteSectionWithoutDateLine(releaseInfo.platform, releaseInfo.extension, releaseInfo.version, releaseInfo.body)
    } else {
        releaseNote = generateReleaseNoteSectionWithoutDateLine(releaseInfo.platform, releaseInfo.extension, releaseInfo.version, releaseInfo.body)
    }
    return releaseNote
}

async function updateReleaseNotesPage(filePath, releaseInfoArray) {
    // Read the contents of the markdown file.
    let contentLines = fs.readFileSync(filePath, "utf8").toString().split("\n")
    // Find the index of the release notes header.
    let releaseNotesHeader = "# Release notes"
    let releaseNotesHeaderIndex = contentLines.indexOf(releaseNotesHeader)
    if (releaseNotesHeaderIndex == -1) {
        console.error("Error: can't find the release notes header")
        return
    }
    let contentIsChanged = false
    for (const releaseInfo of releaseInfoArray) {
        console.log("Updating release notes with:", releaseInfo)
        let title = generateReleaseTitle(releaseInfo.platform, releaseInfo.extension, releaseInfo.version)
        let titleLine = `### ${title}`
        if (hasLineStartWith(titleLine, contentLines)) {
            console.error(`Already updated: ${titleLine}`)
            continue
        }
        let dateStr = convertISODateToRleaseDateFormat(releaseInfo.published_at)
        let dateLine = `## ${dateStr}`
        // If the date line exists in the file, find the index of the date line and add the release notes after it.
        if (hasLineStartWith(dateLine, contentLines)) {
            let releaseNote = generateReleaseNotesSectionWithoutDateLine(releaseInfo)
            // generate the release notes section to array
            let releaseNoteLines = releaseNote.split("\n");
            let dateLineIndex = contentLines.indexOf(dateLine);
            contentLines.splice(dateLineIndex + 1, 0, ...releaseNoteLines)
            contentIsChanged = true
        } else {
            let releaseNote = generateReleaseNotesSection(releaseInfo)
            // generate the release notes section to array
            let releaseNoteLines = releaseNote.split("\n");
            contentLines.splice(releaseNotesHeaderIndex + 1, 0, ...releaseNoteLines)
            contentIsChanged = true
        }
    }
    if (!contentIsChanged) {
        return
    }
    let content = contentLines.join("\n")
    fs.writeFileSync(filePath, content)
}

function hasLineStartWith(string, lineArray) {
    for (const line of lineArray) {
        if (line.trim().startsWith(string)) {
            return true
        }
    }
    return false
}

async function fetchNonAndroidReleaseInfo(token, timestampInMilliseconds) {
    let releaseInofArray = []
    for (const repoName of repoNames) {
        let releaseInfoList = await fetchReleaseInfo(token, "adobe", repoName)
        for (const releaseInfo of releaseInfoList) {
            let lastTimeStamp = Date.parse(releaseInfo.published_at)
            if (timestampInMilliseconds < lastTimeStamp) {
                releaseInofArray.push(releaseInfo)
            }
        }
    }
    return releaseInofArray
}

function updateNonAndroidReleaseInfo(releaseInfo) {
    switch (releaseInfo.repo_name) {
        case "aepsdk-roku":
            releaseInfo.platform = 'Roku'
            releaseInfo.extension = 'SDK'
            releaseInfo.version = releaseInfo.tag_name
            break;
        case "aepsdk-react-native":
            releaseInfo.platform = 'React Native'
            let tmArray = releaseInfo.tag_name.replace('@adobe/react-native-aep', '').split('@')
            releaseInfo.extension = capitalizeFirstLetter(tmArray[0])
            releaseInfo.version = tmArray[1]
            break;
        case "aepsdk-flutter":
            releaseInfo.platform = 'Flutter'
            let array = releaseInfo.tag_name.replace('flutter_aep', '').split('@')
            releaseInfo.extension = capitalizeFirstLetter(array[0])
            releaseInfo.version = array[1]
            break;
        case "aepsdk-edge-ios":
        case "aepsdk-media-ios":
        case "aepsdk-audience-ios":
        case "aepsdk-analytics-ios":
        case "aepsdk-places-ios":
        case "aepsdk-target-ios":
        case "aepsdk-optimize-ios":
        case "aepsdk-core-ios":
        case "aepsdk-messaging-ios":
        case "aepsdk-assurance-ios":
            releaseInfo.platform = 'iOS'
            releaseInfo.extension = capitalizeFirstLetter(releaseInfo.repo_name.replace('aepsdk-', '').replace('-ios', ''))
            releaseInfo.version = releaseInfo.tag_name
            break;
        case "aepsdk-edgeconsent-ios":
            releaseInfo.platform = 'iOS'
            releaseInfo.extension = 'EdgeConsent'
            releaseInfo.version = releaseInfo.tag_name
            break;
        case "aepsdk-edgeidentity-ios":
            releaseInfo.platform = 'iOS'
            releaseInfo.extension = 'EdgeIdentity'
            releaseInfo.version = releaseInfo.tag_name
            break;
        case "aepsdk-userprofile-ios":
            releaseInfo.platform = 'iOS'
            releaseInfo.extension = 'UserProfile'
            releaseInfo.version = releaseInfo.tag_name
            break;
        case "aepsdk-edgebridge-ios":
            releaseInfo.platform = 'iOS'
            releaseInfo.extension = 'EdgeBridge'
            releaseInfo.version = releaseInfo.tag_name
            break;
        case "aepsdk-edgemedia-ios":
            releaseInfo.platform = 'iOS'
            releaseInfo.extension = 'EdgeMedia'
            releaseInfo.version = releaseInfo.tag_name
            break;
        case "aepsdk-campaignclassic-ios":
            releaseInfo.platform = 'iOS'
            releaseInfo.extension = 'Campaign Classic'
            releaseInfo.version = releaseInfo.tag_name
            break;
        case "aepsdk-campaign-ios":
            releaseInfo.platform = 'iOS'
            releaseInfo.extension = 'Campaign Standard'
            releaseInfo.version = releaseInfo.tag_name
            break;
        default:
            console.log("unsupported repoName: " + releaseInfo.repoName)
    }
    return releaseInfo
}

async function fetchAllReleaseInfo(token, timestampInMilliseconds) {
    let releaseInfoArray = []
    let rawInfoArray = await fetchNonAndroidReleaseInfo(token, timestampInMilliseconds)

    for (const releaseInfo of rawInfoArray) {
        releaseInfoArray.push(updateNonAndroidReleaseInfo(releaseInfo))
    }

    let AndroidReleaseInfoArray = await fetchAndroidReleaseInfo(token, "com.adobe.marketing.mobile", timestampInMilliseconds);
    return releaseInfoArray.concat(AndroidReleaseInfoArray)
}

function sortReleaseInfoByDateASC(releaseInfoArray) {
    releaseInfoArray.sort((a, b) => {
        let dateA = new Date(a.published_at)
        let dateB = new Date(b.published_at)
        if (dateA < dateB) {
            return -1;
        }
        if (dateA > dateB) {
            return 1;
        }
        return 0;
    })
    return releaseInfoArray
}

module.exports = {
    fetchAllReleaseInfo,
    sortReleaseInfoByDateASC,
    generateReleaseNoteSection,
    generateBOMReleaseNoteSection,
    filterExistingReleaseInfo,
    updateReleaseNotesPage
}
