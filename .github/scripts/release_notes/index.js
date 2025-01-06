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

const timestampObj = require('./timestamp.json')
const { repoNames, releaseNotesLocation, MAIN_RELEASE_NOTES_LOCATION, PLATFORM_ENUM, EXTENSION_ENUM } = require('./constants')
const { saveJsonObjToFile, convertToDateTime } = require('./utils')
const { updateReleaseNotesPage } = require('./updateReleaseNotes');
const { fetchReleaseInfoFromGitHub, sortReleaseInfoByDateASC } = require('./fetchReleaseNotes');

// Run the script on the root directory of the project: node .github/scripts/release_notes/index.js <GITHUB_TOKEN> [--dry-run]
const GITHUB_TOKEN = process.argv[2];

if (GITHUB_TOKEN === undefined) {
    throw new Error("token is undefined")
}

const DRY_RUN = process.argv.includes("--dry-run")


const offset = new Date().getTimezoneOffset()
console.log(`Timezone offset is: ${offset}`);
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(`Timezone is: ${timezone}`);

console.log(`Start to fetch release info from GitHub created after [${convertToDateTime(timestampObj.ts)}]`);

(async function (dryRun) {
    const list = await fetchReleaseInfoFromGitHub(repoNames, "adobe", GITHUB_TOKEN, timestampObj.ts)
    const sortedList = sortReleaseInfoByDateASC(list)
    if (dryRun) {
        console.log("[Dry run mode] The following release notes need to be updated:")
        console.dir(sortedList)
        return
    }
    // 1. Update the main release page
    updateReleaseNotesPage(MAIN_RELEASE_NOTES_LOCATION, sortedList)
    for (const releaseInfo of sortedList) {
        // We don't have separate release-notes pages for React Native, Roku, Flutter, and BOM artifacts.
        if (releaseInfo.platform === PLATFORM_ENUM.ROKU ||
            releaseInfo.extension === EXTENSION_ENUM.BOM ||
            releaseInfo.extension === EXTENSION_ENUM.EDGE_BRIDGE ||
            releaseInfo.extension === EXTENSION_ENUM.NOTIFICATION_CONTENT ||
            releaseInfo.extension === EXTENSION_ENUM.NOTIFICATION_BUILDER) {
            continue
        }

        // 2. Update the extension's release note page
        let filePath = releaseNotesLocation[releaseInfo.extension]
        if (filePath != undefined) {
            updateReleaseNotesPage(filePath, [releaseInfo])
        } else {
            throw Error(`Not found the release note page for ${releaseInfo.extension}`)
        }
    }

    // 3. Save the timestamp to the file
    let jsonObj = {
        "ts": Date.now()
    }
    saveJsonObjToFile(jsonObj, `${__dirname}/timestamp.json`)
})(DRY_RUN).then(
    () => console.log("Finished updating release notes")
).catch(
    (error) => console.error(error)
);
