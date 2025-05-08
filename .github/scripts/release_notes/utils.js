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

/**
 * Checks if a given timestamp is earlier than a specified number of hours from the current time.
 *
 * @param {number} hours - The number of hours to compare against.
 * @param {number} timestampInMilliseconds - The timestamp to compare.
 * @returns {boolean} Returns true if the timestamp is earlier than the specified number of hours from the current time, otherwise false.
 */
function isEarlierThanXHours(hours, timestampInMilliseconds) {
    const timestamp = new Date(timestampInMilliseconds);
    const now = new Date();
    return timestamp < now - (hours * 60 * 60 * 1000);
}

/**
 * Extracts the release notes from the given release text.
 *
 * @param {string} releaseText - The release text to extract the release notes from.
 * @returns {string[]} - An array of release notes lines.
 */
function extractReleaseNotes(releaseText) {
    if (!releaseText) {
        return []
    }
    const lines = releaseText.split(/\r?\n/);
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

/**
 * Saves a JSON object to a file.
 *
 * @param {Object} jsonObj - The JSON object to be saved.
 * @param {string} filePath - The path of the file to save the JSON object to.
 * @throws {Error} If there is an error writing the JSON object to the file.
 */
function saveJsonObjToFile(jsonObj, filePath) {
    fs.writeFile(filePath, JSON.stringify(jsonObj), err => {
        if (err) {
            console.error("Failed to write json object to file.");
            throw err;
        }
    });
}

/**
 * Converts an ISO 8601 date string to a release date format.
 *
 * @param {string} iso8601DateStr - The ISO 8601 date string to convert.
 * @returns {string} - The release date format.
 */
function convertISODateToRleaseDateFormat(iso8601DateStr) {
    const date = new Date(iso8601DateStr)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
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
    convertToDateTime,
}