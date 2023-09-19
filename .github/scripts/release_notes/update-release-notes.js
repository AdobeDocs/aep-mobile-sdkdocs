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

function extractBOMTableContent(releaseNote) {
    const lines = releaseNote.split('\n');
    const newLines = []
    for (const line of lines) {
        if (line.startsWith('|')) {
            newLines.push(line)
        }
    }
    return newLines
}

function generateReleaseNoteSection(IOSDateString, platform, extension, version, releaseNote) {
    var array = extractReleaseNotes(releaseNote)
    const releaseNoteSection = releaseNoteTemplateGenerator({
        date: convertIOSDateToRleaseDateFormat(IOSDateString),
        title: `${platform} ${extension} ${version}`,
        note: array.join('\n')
    })
    return releaseNoteSection
}

function generateBOMReleaseNoteSection(IOSDateString, platform, extension, version, releaseNote) {
    var array = extractBOMTableContent(releaseNote)
    const releaseNoteSection = BOMreleaseNoteTemplateGenerator({
        date: convertIOSDateToRleaseDateFormat(IOSDateString),
        title: `${platform} ${extension} ${version}`,
        note: array.join('\n')
    })
    return releaseNoteSection
}


async function fetchNonAndoirdReleaseInfo(token, timestampInMilliseconds) {
    const releaseInofArray = []
    for (let i = 0; i < repoNames.length; i++) {
        var releaseInfo = await fetchReleaseInfo(token, "adobe", repoNames[i])
        releaseInfo.forEach(element => {
            const lastTimeStamp = Date.parse(element.published_at)
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
            const tmArray = extensionAndVersion.split('@')
            releaseInfo.extension = capitalizeFirstLetter(tmArray[0])
            releaseInfo.version = tmArray[1]
            break;
        case "aepsdk-flutter":
            releaseInfo.platform = 'AEP Flutter'
            var extensionAndVersion = releaseInfo.tag_name.replace('flutter_aep', '')
            const array = extensionAndVersion.split('@')
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
    const rawInfoArray = await fetchNonAndoirdReleaseInfo(token, timestampInMilliseconds)

    for (const releaseInfo of rawInfoArray) {
        releaseInfoArray.push(updateNonAndroidReleaseInfo(releaseInfo))
    }

    var AndroidReleaseInfoArray = await fetchAndroidReleaseInfo(token, "com.adobe.marketing.mobile", timestampInMilliseconds);
    return releaseInfoArray.concat(AndroidReleaseInfoArray)
}

function sortReleaseInfoByDateASC(releaseInfoArray) {
    releaseInfoArray.sort((a, b) => {
        const dateA = new Date(a.published_at)
        const dateB = new Date(b.published_at)
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
    generateBOMReleaseNoteSection
}
