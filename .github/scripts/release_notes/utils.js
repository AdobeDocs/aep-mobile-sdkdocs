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

const execSync = require('child_process').execSync;
const fs = require("fs");

function isEarlierThanXHours(hours, timestampInMilliseconds) {
    const timestamp = new Date(timestampInMilliseconds);
    const now = new Date();
    return timestamp < now - (hours * 60 * 60 * 1000);
}

function extractReleaseNotes(releaseText) {
    const lines = releaseText.split('\n');
    var start = -1
    var end = lines.length

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('##') && line.toLowerCase().includes('release notes')) {
            start = i
        }
        if (start >= 0 && line.startsWith('##')) {
            end = i
        }
    }

    if (start < 0) {
        return lines
    } {
        return lines.slice(start, end)
    }
}

function releaseFileContainsLineStartWith(lineStartWithString) {
    try {
        execSync(`grep -E "^${lineStartWithString}" ./src/pages/documentation/release-notes/index.md`, { stdio: 'ignore' });
        return true;
    } catch (e) {
        return false;
    }
}

function saveJsonObjToFile(jsonObj, filePath) {
    fs.writeFile(filePath, JSON.stringify(jsonObj), err => {
        if (err) console.log("Failed to write json object to file:", err);
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertIOSDateToRleaseDateFormat(ios1086DateStr) {
    const date = new Date(ios1086DateStr)
    const month = date.getMonth()
    const day = date.getDate()
    const year = date.getFullYear()
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const fullMonth = monthNames[month]
    return `${fullMonth} ${day}, ${year}`
}

module.exports = {
    isEarlierThanXHours,
    releaseFileContainsLineStartWith,
    saveJsonObjToFile,
    extractReleaseNotes,
    convertIOSDateToRleaseDateFormat,
    capitalizeFirstLetter
}