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
const { fetchReleaseInfo, fetchReleaseInfoWithTagName } = require('./github-release');
const { fetchMavenArtifactInfo, fetchAndroidReleaseInfo } = require('./android-release');
const { convertIOSDateToRleaseDateFormat, isEarlierThanXHours, releaseFileContainsLineStartWith, saveJsonObjToFile, extractReleaseNotes } = require('./utils')
const { updateReleaseNotesPage, filterExistingReleaseInfo, sortReleaseInfoByDateASC, fetchAllReleaseInfo, generateReleaseNoteSection, generateBOMReleaseNoteSection } = require('./update-release-notes');

const template = require('lodash.template');

const token = process.argv[2];

// var compiled = template(
//     `hello! 
//      <%= user %>!`
// );
// var result = compiled({ 'user': 'fred' });
// console.log(result)

// test_fetchReleaseInfo()
// test_fetchMavenArtifactInfo()
// test_fetchAndroidReleaseInfo()

// console.error(isEarlierThanXHours(24, 1693938589000))
// test_saveJsonObjToFile()

// console.log(Date.parse("2023-09-01T22:13:21Z"))
test_fetchAllReleasInfo()
// test_groupReleaseInfoByDate()
// test_extractReleaseNotes_all()

// test_convertIOSDateToRleaseDateFormat()

function test_convertIOSDateToRleaseDateFormat() {
    console.log(convertIOSDateToRleaseDateFormat('2023-09-14T23:41:23Z'))
}

async function test_fetchAllReleasInfo() {
    const list = await fetchAllReleaseInfo(token, Date.UTC(2023, 8 - 1, 10, 2))
    // console.log(list)
    const list2 = sortReleaseInfoByDateASC(list)
    // console.log(list2)
    list2.forEach(element => {
        if (element.extension == 'BOM') {
            var releaseNote = generateBOMReleaseNoteSection(element.published_at, element.platform, element.extension, element.version, element.body)
            console.log(releaseNote)
        } else {
            var releaseNote = generateReleaseNoteSection(element.published_at, element.platform, element.extension, element.version, element.body)
            console.log(releaseNote)
        }
    })

    updateReleaseNotesPage("./src/pages/documentation/release-notes/index.md", list2)

}

function test_groupReleaseInfoByDate() {
    const list = [
        {
            published_at: '2023-08-07T16:54:04Z',
            body: 'This is the first stable release of the AEP Roku SDK, which exposes APIs to help developers to integrate the Adobe Experience Platform solutions with the Roku channel.\r\n' +
                '\r\n' +
                '#### 🚀 Features:\r\n' +
                '- **Adobe Experience Edge Network Integration:** Seamlessly send data to the Edge Network, and get greater control over data interactions by optionally registering a callback for Edge response handles.\r\n' +
                '\r\n' +
                '- **Automated ECID and ImplementationDetails Attachment:** Experience more efficient tracking and integration as ECID (Experience Cloud ID) and Implementation details are now automatically appended to every XDM Experience Event request.\r\n' +
                '\r\n' +
                '- **Custom Identity Synchronization:** Personalize user experiences effectively by syncing Custom Identities with each XDM Experience Event request. Unlock the potential of the Edge Network while maintaining tailored interactions.\r\n' +
                '\r\n' +
                '---\r\n' +
                '\r\n' +
                'For more information, refer to the documentation below:\r\n' +
                '\r\n' +
                '- [Getting Started](https://github.com/adobe/aepsdk-roku/blob/main/Documentation/getting-started.md)\r\n' +
                '- [API Reference](https://github.com/adobe/aepsdk-roku/blob/main/Documentation/api-reference.md)\r\n' +
                '- [Sample App](https://github.com/adobe/aepsdk-roku/blob/main/sample/simple-videoplayer-channel/README.md)',
            repo_name: 'aepsdk-roku',
            tag_name: '1.0.0'
        },
        {
            published_at: '2023-09-14T23:41:23Z',
            body: '-  Updated the docs to call out trackAction/trackState are supported through Edge Network or Edge Bridge extensions.',
            repo_name: 'aepsdk-react-native',
            tag_name: '@adobe/react-native-aepcore@5.0.1'
        },
        {
            published_at: '2023-08-07T16:21:31Z',
            body: '- Bug fixes for Android',
            repo_name: 'aepsdk-react-native',
            tag_name: '@adobe/react-native-aeptarget@5.0.2'
        },
        {
            published_at: '2023-09-01T21:30:15Z',
            body: '## What’s Changed\n' +
                '\n' +
                '* Merge to `main` for 4.2.0 release (#394) @timkimadobe\n' +
                '* Merge to Staging for 4.2.0 release, updates Core dependency to 4.1.0 (#393) @timkimadobe\n' +
                '* Replace hardcoded event source with EventSource.contentComplete (#388) @timkimadobe\n' +
                '* Fix integration test setup to properly wait and clear expectations (#387) @timkimadobe\n' +
                '* Merge to Staging for v4.2.0 release (#385) @timkimadobe\n' +
                '* Update event reference response content description (#386) @timkimadobe\n' +
                '* Updating version to 4.2.0 (#384) @github-actions\n' +
                "* Dispatch 'complete' event when streaming connection closed (#383) @timkimadobe\n" +
                '* Update the validation expected results for recordSeparator in functional tests (#382) @cacheung\n' +
                '* Fix test-SPM script (#379) @emdobrin\n' +
                '* Downmerge Main to Dev after v4.1.0 release (#378) @kevinlind\n',
            repo_name: 'aepsdk-edge-ios',
            tag_name: '4.2.0'
        },
        {
            published_at: '2023-08-07T23:01:17Z',
            body: '## What’s Changed\n' +
                '\n' +
                '* Update the test SPM script (#51) @PravinPK\n' +
                '* update test-spm script to include core in target (#50) @PravinPK\n' +
                '* To Main - Feature: Send Location Entry/Exit events to platform (#48) @PravinPK\n' +
                '* Bumb the version to 4.1.0 (#49) @PravinPK\n' +
                '* Feature: Send Location Entry/Exit events to platform (#47) @PravinPK\n' +
                '* Rename make command to match (#46) @PravinPK\n',
            repo_name: 'aepsdk-places-ios',
            tag_name: '4.1.0'
        },
        {
            published_at: '2023-08-30T23:31:32Z',
            body: '## What’s Changed\n\n* staging to main (v4.0.1) (#81) @swarna04\n',
            repo_name: 'aepsdk-optimize-ios',
            tag_name: '4.0.1'
        },
        {
            published_at: '2023-08-30T20:26:50Z',
            body: '- Fixed a bug where the in-app message was not displayed correctly when there was a change in device orientation.\r\n' +
                '- Fixed a bug where the cached appId could overwrite the one set with MobileCore.configureWithAppId() before extension registration.\r\n' +
                '- Added `contentComplete` event source constant for Edge workflows.',
            repo_name: 'aepsdk-core-ios',
            tag_name: '4.1.0'
        }
    ]

    console.log(groupReleaseInfoByDateASC(list))
}

function test_extractReleaseNotes() {
    const releaseText = '## What’s Changed\n' +
        '\n' +
        '* Merge to `main` for 4.2.0 release (#394) @timkimadobe\n' +
        '* Merge to Staging for 4.2.0 release, updates Core dependency to 4.1.0 (#393) @timkimadobe\n' +
        '* Replace hardcoded event source with EventSource.contentComplete (#388) @timkimadobe\n' +
        '* Fix integration test setup to properly wait and clear expectations (#387) @timkimadobe\n' +
        '* Merge to Staging for v4.2.0 release (#385) @timkimadobe\n' +
        '* Update event reference response content description (#386) @timkimadobe\n' +
        '* Updating version to 4.2.0 (#384) @github-actions\n' +
        "* Dispatch 'complete' event when streaming connection closed (#383) @timkimadobe\n" +
        '* Update the validation expected results for recordSeparator in functional tests (#382) @cacheung\n' +
        '* Fix test-SPM script (#379) @emdobrin\n' +
        '* Downmerge Main to Dev after v4.1.0 release (#378) @kevinlind\n' +
        '## Release Notes\n' +
        '\n' +
        '* Feature 1\n' +
        '* Feature 2\n' +
        '\n' +
        '## Setion X\n' +
        '\n' +
        '* Feature 1\n' +
        '* Feature 2\n'
    console.log(extractReleaseNotes(releaseText))
}
function test_extractReleaseNotes_all() {
    const releaseText = '## What’s Changed\n' +
        '\n' +
        '* Merge to `main` for 4.2.0 release (#394) @timkimadobe\n' +
        '* Merge to Staging for 4.2.0 release, updates Core dependency to 4.1.0 (#393) @timkimadobe\n' +
        '* Replace hardcoded event source with EventSource.contentComplete (#388) @timkimadobe\n' +
        '* Fix integration test setup to properly wait and clear expectations (#387) @timkimadobe\n' +
        '* Merge to Staging for v4.2.0 release (#385) @timkimadobe\n' +
        '* Update event reference response content description (#386) @timkimadobe\n' +
        '* Updating version to 4.2.0 (#384) @github-actions\n' +
        "* Dispatch 'complete' event when streaming connection closed (#383) @timkimadobe\n" +
        '* Update the validation expected results for recordSeparator in functional tests (#382) @cacheung\n' +
        '* Fix test-SPM script (#379) @emdobrin\n' +
        '* Downmerge Main to Dev after v4.1.0 release (#378) @kevinlind\n' +
        '\n' +
        '## Setion X\n' +
        '\n' +
        '* Feature 1\n' +
        '* Feature 2\n'
    console.log(extractReleaseNotes(releaseText))
}

function test_saveJsonObjToFile() {

    timestamp = Date.UTC(2023, 9 - 1, 1, 2)
    console.log(timestamp)

    var jsonObj = {
        "ts": timestamp
    }
    saveJsonObjToFile(jsonObj, `${__dirname}/timestamp.json`)
}

function test_fetchReleaseInfo() {
    fetchReleaseInfo(token, "adobe", "aepsdk-core-ios", 5).then((result) => {
        console.log("fetchReleaseInfo():")
        console.log(result)
    })

    console.log("DONE")
}

function test_fetchMavenArtifactInfo() {
    fetchMavenArtifactInfo("com.adobe.marketing.mobile", 5, Date.UTC(2023, 9 - 1, 1, 2)).then((result) => {
        console.log("fetchMavenArtifactInfo():")
        console.log(result)
    })

    console.log("DONE")
}

async function test_fetchAndroidReleaseInfo() {
    var array = await fetchAndroidReleaseInfo(token, "com.adobe.marketing.mobile", Date.UTC(2023, 8 - 1, 1, 2));
    console.log("fetchAndroidReleaseInfo():")
    console.log(array)
    groupReleaseInfoByDate(array)
    console.log(array)
}