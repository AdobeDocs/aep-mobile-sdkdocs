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

const { convertISODateToRleaseDateFormat, extractReleaseNotes } = require('./utils');
const { releaseNoteTemplateGenerator, releaseNoteWithoutDateTemplateGenerator, BOMreleaseNoteTemplateGenerator, BOMreleaseNoteWithoutDateTemplateGenerator } = require('./releaseNotesTemplates');
const fs = require("fs");
const _ = require('lodash');

function extractBOMTableContent(releaseNote) {
    let lines = releaseNote.split(/\r?\n/);
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
    if (releaseInfo.extension === 'BOM') {
        releaseNote = generateBOMReleaseNoteSection(releaseInfo.published_at, releaseInfo.platform, releaseInfo.extension, releaseInfo.version, releaseInfo.body)
    } else {
        releaseNote = generateReleaseNoteSection(releaseInfo.published_at, releaseInfo.platform, releaseInfo.extension, releaseInfo.version, releaseInfo.body)
    }
    return releaseNote
}

function generateReleaseNotesSectionWithoutDateLine(releaseInfo) {
    let releaseNote = ''
    if (releaseInfo.extension === 'BOM') {
        releaseNote = generateBOMReleaseNoteSectionWithoutDateLine(releaseInfo.platform, releaseInfo.extension, releaseInfo.version, releaseInfo.body)
    } else {
        releaseNote = generateReleaseNoteSectionWithoutDateLine(releaseInfo.platform, releaseInfo.extension, releaseInfo.version, releaseInfo.body)
    }
    return releaseNote
}

async function updateReleaseNotesPage(filePath, releaseInfoArray) {
    // Read the contents of the markdown file.
    let contentLines = fs.readFileSync(filePath, "utf8").toString().split(/\r?\n/)
    // Find the index of the release notes header.
    let releaseNotesHeader = "# Release notes"
    let releaseNotesHeaderIndex = contentLines.indexOf(releaseNotesHeader)
    if (releaseNotesHeaderIndex === -1) {
        console.error("Error: can't find the release notes header")
        return
    }
    let contentIsChanged = false
    for (const releaseInfo of releaseInfoArray) {
        // console.log("Updating release notes with:", releaseInfo)
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
            let releaseNoteLines = releaseNote.split(/\r?\n/);
            let dateLineIndex = contentLines.indexOf(dateLine);
            contentLines.splice(dateLineIndex + 1, 0, ...releaseNoteLines)
            contentIsChanged = true
        } else {
            let releaseNote = generateReleaseNotesSection(releaseInfo)
            // generate the release notes section to array
            let releaseNoteLines = releaseNote.split(/\r?\n/);
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

module.exports = {
    updateReleaseNotesPage
}
