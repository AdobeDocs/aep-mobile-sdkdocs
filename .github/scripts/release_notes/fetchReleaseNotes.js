/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const { fetchReleaseInfo, GithubReleaseInfo } = require('./githubRelease');
const { convertToSDKReleaseInfo } = require('./SDKReleaseInfo');

/**
 * Fetches release information from GitHub for the specified repositories.
 *
 * @param {string[]} repoNames - An array of repository names.
 * @param {string} org - The organization name.
 * @param {string} token - The GitHub access token.
 * @param {number} timestampInMilliseconds - The timestamp in milliseconds.
 * @returns {Promise<SDKReleaseInfo[]>} - A promise that resolves to an array of SDK release information objects, return an empty array if no new release is found.
 */
async function fetchReleaseInfoFromGitHub(repoNames, org, token, timestampInMilliseconds) {
    let releaseInfoPromises = repoNames.map(repoName => fetchReleaseInfo(token, org, repoName));
    let releaseInfoLists = await Promise.all(releaseInfoPromises);
    return releaseInfoLists.flat().flatMap(releaseInfo => {
        let lastTimeStamp = Date.parse(releaseInfo.published_at)
        if (timestampInMilliseconds < lastTimeStamp) {
            let sdkReleaseInfo = convertToSDKReleaseInfo(releaseInfo)
            if (sdkReleaseInfo != null) {
                return [sdkReleaseInfo]
            }
        }
        return []
    })
}

/**
 * Sorts an array of release information objects by date in ascending order.
 *
 * @param {Array} releaseInfoArray - The array of release information objects to be sorted.
 * @returns {Array} - The sorted array of release information objects.
 */
function sortReleaseInfoByDateASC(releaseInfoArray) {
    return releaseInfoArray.sort((a, b) => (new Date(a.published_at) < new Date(b.published_at)) ? -1 : 1);
}

module.exports = { fetchReleaseInfoFromGitHub, sortReleaseInfoByDateASC };