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

const fs = require("fs");
const { PST_TIMEZONE, PST_TIMEZONE_OFFSET } = require('./constants')

function isEarlierThanXHours(hours, timestampInMilliseconds) {
    const timestamp = new Date(timestampInMilliseconds);
    const now = new Date();
    return timestamp < now - (hours * 60 * 60 * 1000);
}

function extractReleaseNotes(releaseText) {
    if (!releaseText) {
        return []
    }
    const lines = releaseText.split('\n');
    let start = -1
    let end = lines.length

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (start < 0 && line.startsWith('##') && line.toLowerCase().includes('release notes')) {
            start = i + 1
        }
        if (start >= 0 && start != i + 1 && line.startsWith('##')) {
            end = i
            break
        }
    }

    if (start < 0 || end <= start) {
        return lines
    } {
        return lines.slice(start, end)
    }
}

function saveJsonObjToFile(jsonObj, filePath) {
    fs.writeFile(filePath, JSON.stringify(jsonObj), err => {
        if (err) {
            console.error("Failed to write json object to file.");
            throw err;
        }
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// TODO: consider using dayjs to handle date format
function convertISODateToRleaseDateFormat(iso8601DateStr) {
    const date = new Date(iso8601DateStr)
    const month = date.getMonth()
    const day = date.getDate()
    const year = date.getFullYear()
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const fullMonth = monthNames[month]
    return `${fullMonth} ${day}, ${year}`
}

function setTimeZoneToPST() {
    process.env.TZ = PST_TIMEZONE
    const offset = new Date().getTimezoneOffset()
    return (offset == PST_TIMEZONE_OFFSET)
}

function convertToDateTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

module.exports = {
    isEarlierThanXHours,
    saveJsonObjToFile,
    extractReleaseNotes,
    convertISODateToRleaseDateFormat,
    capitalizeFirstLetter,
    setTimeZoneToPST,
    convertToDateTime,
}