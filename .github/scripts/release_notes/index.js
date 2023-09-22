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
const releaseNoteMap = require('./releaseNoteMap.json')
const { saveJsonObjToFile } = require('./utils')
const { updateReleaseNotesPage, fetchAllReleaseInfo, sortReleaseInfoByDateASC } = require('./update-release-notes');

const token = process.argv[2];

if (token == undefined) {
    throw new Error("token is undefined")
}

run()

async function run() {
    const list = await fetchAllReleaseInfo(token, timestampObj.ts)
    const sortedList = sortReleaseInfoByDateASC(list)
    updateReleaseNotesPage("./src/pages/documentation/release-notes/index.md", sortedList)
    const ignoreList = ['AEP React Native', 'Roku', 'AEP Flutter']
    for (const releaseInfo of sortedList) {
        if (ignoreList.includes(releaseInfo.platform)) {
            continue
        }
        let filePath = releaseNoteMap[releaseInfo.extension]
        if (filePath != undefined) {
            updateReleaseNotesPage(filePath, [releaseInfo])
        }
    }
    let jsonObj = {
        "ts": Date.now()
    }
    saveJsonObjToFile(jsonObj, `${__dirname}/timestamp.json`)
}
