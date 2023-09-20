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

const timestamp = require('./timestamp.json')
const { fetchReleaseInfo } = require('./github-release');
const { fetchAndroidReleaseInfo } = require('./android-release');
const { capitalizeFirstLetter, convertIOSDateToRleaseDateFormat, extractReleaseNotes } = require('./utils');
const lodashTemplate = require('lodash.template');
const fs = require("fs");

const repoNames = [
    "aepsdk-roku",
    "aepsdk-react-native",
    "aepsdk_flutter",
    "aepsdk-edge-ios",
    "aepsdk-edgeconsent-ios",
    "aepsdk-edgeidentity-ios",
    "aepsdk-userprofile-ios",
    "aepsdk-campaign-ios",
    "aepsdk-edgemedia-ios",
    "aepsdk-media-ios",
    "aepsdk-audience-ios",
    "aepsdk-analytics-ios",
    "aepsdk-edgebridge-ios",
    "aepsdk-places-ios",
    "aepsdk-target-ios",
    "aepsdk-optimize-ios",
    "aepsdk-core-ios",
    "aepsdk-messaging-ios",
]

const releaseNoteTemplateGenerator = lodashTemplate(
    `
## <%= date %>

### <%= title %>

<%= note %>       
    `
)

const releaseNoteWithoutDateTemplateGenerator = lodashTemplate(
    `
### <%= title %>

<%= note %>       
    `
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

</Accordion>
`
)

const BOMreleaseNoteWithoutDateTemplateGenerator = lodashTemplate(
    `
### <%= title %>

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

<%= note %>

</AccordionItem>

</Accordion>
`
)

function extractBOMTableContent(releaseNote) {
    let lines = releaseNote.split('\n');
    let newLines = []
    for (let line of lines) {
        if (line.startsWith('|')) {
            newLines.push(line)
        }
    }
    return newLines
}

function generateReleaseNoteSection(IOSDateString, platform, extension, version, releaseNote) {
    var array = extractReleaseNotes(releaseNote)
    let releaseNoteSection = releaseNoteTemplateGenerator({
        date: convertIOSDateToRleaseDateFormat(IOSDateString),
        title: `${platform} ${extension} ${version}`,
        note: array.join('\n')
    })
    return releaseNoteSection
}

function generateReleaseNoteSectionWithoutDateLine(platform, extension, version, releaseNote) {
    var array = extractReleaseNotes(releaseNote)
    let releaseNoteSection = releaseNoteWithoutDateTemplateGenerator({
        title: `${platform} ${extension} ${version}`,
        note: array.join('\n')
    })
    return releaseNoteSection
}

function generateBOMReleaseNoteSection(IOSDateString, platform, extension, version, releaseNote) {
    var array = extractBOMTableContent(releaseNote)
    let releaseNoteSection = BOMreleaseNoteTemplateGenerator({
        date: convertIOSDateToRleaseDateFormat(IOSDateString),
        title: generateReleaseTitle(platform, extension, version),
        note: array.join('\n')
    })
    return releaseNoteSection
}

function generateBOMReleaseNoteSectionWithoutDateLine(platform, extension, version, releaseNote) {
    var array = extractBOMTableContent(releaseNote)
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
    // Generate the release notes section.
    var releaseNote = ''
    if (releaseInfo.extension == 'BOM') {
        releaseNote = generateBOMReleaseNoteSection(releaseInfo.published_at, releaseInfo.platform, releaseInfo.extension, releaseInfo.version, releaseInfo.body)
    } else {
        releaseNote = generateReleaseNoteSection(releaseInfo.published_at, releaseInfo.platform, releaseInfo.extension, releaseInfo.version, releaseInfo.body)
    }
    return releaseNote
}

function generateReleaseNotesSectionWithoutDateLine(releaseInfo) {
    // Generate the release notes section.
    var releaseNote = ''
    if (releaseInfo.extension == 'BOM') {
        releaseNote = generateBOMReleaseNoteSectionWithoutDateLine(releaseInfo.platform, releaseInfo.extension, releaseInfo.version, releaseInfo.body)
    } else {
        releaseNote = generateReleaseNoteSectionWithoutDateLine(releaseInfo.platform, releaseInfo.extension, releaseInfo.version, releaseInfo.body)
    }
    return releaseNote
}

function updateMainReleaseNotesPage(releaseInfoArray) {
    updateReleaseNotesPage("./src/pages/documentation/release-notes/index.md", releaseInfoArray)
}

function updateReleaseNotesPage(filePath, releaseInfoArray) {
    // Read the contents of the markdown file.
    let contentLines = fs.readFileSync(filePath, "utf8").toString().split("\n");
    // Find the index of the release notes header.
    let releaseNotesHeader = "# Release notes";
    let releaseNotesHeaderIndex = contentLines.indexOf(releaseNotesHeader);
    for (let releaseInfo of releaseInfoArray) {
        let titleLine = `### ${releaseInfo.title}`
        if (hasLineStartWith(titleLine, contentLines)) {
            console.error("already updated")
            continue
        }
        let dateStr = convertIOSDateToRleaseDateFormat(releaseInfo.published_at)
        let dateLine = `## ${dateStr}`
        // If the date line exists in the file, find the index of the date line and add the release notes after it.
        if (hasLineStartWith(dateLine, contentLines)) {
            let releaseNote = generateReleaseNotesSectionWithoutDateLine(releaseInfo)
            // generate the release notes section to array
            let releaseNoteLines = releaseNote.split("\n");
            let dateLineIndex = contentLines.indexOf(dateLine);
            contentLines = contentLines.splice(dateLineIndex + 1, 0, ...releaseNoteLines)
        } else {
            let releaseNote = generateReleaseNotesSection(releaseInfo)
            // generate the release notes section to array
            let releaseNoteLines = releaseNote.split("\n");
            contentLines = contentLines.splice(releaseNotesHeaderIndex + 1, 0, ...releaseNoteLines)
        }
    }

    fs.writeFile(filePath, contentLines.join("\n"), function (err) {
        if (err) return console.log(err);
    });

}

function hasLineStartWith(string, lineArray) {
    for (let line of lineArray) {
        if (line.trim().startsWith(string)) {
            return true
        }
        return false
    }
}

async function fetchNonAndoirdReleaseInfo(token, timestampInMilliseconds) {
    let releaseInofArray = []
    for (let i = 0; i < repoNames.length; i++) {
        var releaseInfo = await fetchReleaseInfo(token, "adobe", repoNames[i])
        releaseInfo.forEach(element => {
            let lastTimeStamp = Date.parse(element.published_at)
            if (timestampInMilliseconds < lastTimeStamp) {
                releaseInofArray.push(element)
            }
        })
    }
    return releaseInofArray
}

function updateNonAndroidReleaseInfo(releaseInfo) {
    switch (releaseInfo.repo_name) {
        case "aepsdk-roku":
            releaseInfo.platform = 'Roku'
            releaseInfo.version = 'SDK'
            releaseInfo.version = releaseInfo.tag_name
            break;
        case "aepsdk-react-native":
            releaseInfo.platform = 'AEP React Native'
            var extensionAndVersion = releaseInfo.tag_name.replace('@adobe/react-native-aep', '')
            let tmArray = extensionAndVersion.split('@')
            releaseInfo.extension = capitalizeFirstLetter(tmArray[0])
            releaseInfo.version = tmArray[1]
            break;
        case "aepsdk-flutter":
            releaseInfo.platform = 'AEP Flutter'
            var extensionAndVersion = releaseInfo.tag_name.replace('flutter_aep', '')
            let array = extensionAndVersion.split('@')
            releaseInfo.extension = capitalizeFirstLetter(array[0])
            releaseInfo.version = array[1]
            break;
        case "aepsdk-edge-ios":
        case "aepsdk-edgeconsent-ios":
        case "aepsdk-edgeidentity-ios":
        case "aepsdk-userprofile-ios":
        case "aepsdk-campaign-ios":
        case "aepsdk-edgemedia-ios":
        case "aepsdk-media-ios":
        case "aepsdk-audience-ios":
        case "aepsdk-analytics-ios":
        case "aepsdk-edgebridge-ios":
        case "aepsdk-places-ios":
        case "aepsdk-target-ios":
        case "aepsdk-optimize-ios":
        case "aepsdk-core-ios":
        case "aepsdk-messaging-ios":
            releaseInfo.platform = 'iOS'
            releaseInfo.extension = capitalizeFirstLetter(releaseInfo.repo_name.replace('aepsdk-', '').replace('-ios', ''))
            releaseInfo.version = releaseInfo.tag_name
            break;

        default:
            console.log("unsupported repoName: " + releaseInfo.repoName)
    }
    return releaseInfo
}

async function fetchAllReleaseInfo(token, timestampInMilliseconds) {
    var releaseInfoArray = []
    let rawInfoArray = await fetchNonAndoirdReleaseInfo(token, timestampInMilliseconds)

    for (let releaseInfo of rawInfoArray) {
        releaseInfoArray.push(updateNonAndroidReleaseInfo(releaseInfo))
    }

    var AndroidReleaseInfoArray = await fetchAndroidReleaseInfo(token, "com.adobe.marketing.mobile", timestampInMilliseconds);
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
