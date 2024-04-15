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
const { capitalizeFirstLetter } = require('./utils');

/**
 * Fetches release information from GitHub for the specified repositories.
 *
 * @param {string[]} repoNames - An array of repository names.
 * @param {string} org - The organization name.
 * @param {string} token - The GitHub access token.
 * @param {number} timestampInMilliseconds - The timestamp in milliseconds.
 * @returns {Promise<SDKReleaseInfo[]>} - A promise that resolves to an array of SDK release information objects.
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
 * Converts a [GithubReleaseInfo] object to an [SDKReleaseInfo] object.
 * 
 * @param {GithubReleaseInfo} releaseInfo - The GithubReleaseInfo object to convert.
 * @returns {SDKReleaseInfo|null} - The converted SDKReleaseInfo object or null if the repo_name is not supported.
 * @throws {Error} - If the input is not a [GithubReleaseInfo] object.
 */
function convertToSDKReleaseInfo(releaseInfo) {
    if (!(releaseInfo instanceof GithubReleaseInfo)) {
        throw Error("Input is not a [GithubReleaseInfo] object.")
    }
    switch (releaseInfo.repo_name) {
        case "aepsdk-commons":
            // aepsdk-commons is also used to release othe artifacts, only keep the release notes for BOM.
            if (releaseInfo.tag_name.startsWith('bom-'))
                return new SDKReleaseInfo(releaseInfo, 'Android', 'BOM', releaseInfo.tag_name.replace('bom-', ''))
            else
                return null
        case "aepsdk-roku":
            return new SDKReleaseInfo(releaseInfo, 'Roku', 'SDK', releaseInfo.tag_name)
        case "aepsdk-react-native":
            let arry1 = releaseInfo.tag_name.replace('@adobe/react-native-aep', '').split('@')
            return new SDKReleaseInfo(releaseInfo, 'React Native', capitalizeFirstLetter(arry1[0]), arry1[1])
        case "aepsdk-flutter":
            let array2 = releaseInfo.tag_name.replace('flutter_aep', '').split('@')
            return new SDKReleaseInfo(releaseInfo, 'Flutter', capitalizeFirstLetter(array2[0]), array2[1])
        case "aepsdk-edge-ios":
        case "aepsdk-media-ios":
        case "aepsdk-audience-ios":
        case "aepsdk-analytics-ios":
        case "aepsdk-places-ios":
        case "aepsdk-target-ios":
        case "aepsdk-optimize-ios":
        case "aepsdk-core-ios":
        case "aepsdk-messaging-ios":
        case "aepsdk-assurance-ios":
            return new SDKReleaseInfo(releaseInfo, 'iOS', capitalizeFirstLetter(releaseInfo.repo_name.replace('aepsdk-', '').replace('-ios', '')), releaseInfo.tag_name)
        case "aepsdk-edge-android":
        case "aepsdk-media-android":
        case "aepsdk-audience-android":
        case "aepsdk-analytics-android":
        case "aepsdk-places-android":
        case "aepsdk-target-android":
        case "aepsdk-optimize-android":
        case "aepsdk-messaging-android":
        case "aepsdk-assurance-android":
            return new SDKReleaseInfo(releaseInfo, 'Android', capitalizeFirstLetter(releaseInfo.repo_name.replace('aepsdk-', '').replace('-android', '')), releaseInfo.tag_name.replace('v', ''))
        case "aepsdk-core-android":
            let array3 = releaseInfo.tag_name.replace('v', '').split('-')
            return new SDKReleaseInfo(releaseInfo, 'Android', capitalizeFirstLetter(array3[1]), array3[0])
        case "aepsdk-edgeconsent-ios":
            return new SDKReleaseInfo(releaseInfo, 'iOS', 'EdgeConsent', releaseInfo.tag_name)
        case "aepsdk-edgeconsent-android":
            return new SDKReleaseInfo(releaseInfo, 'Android', 'EdgeConsent', releaseInfo.tag_name.replace('v', ''))
        case "aepsdk-edgeidentity-ios":
            return new SDKReleaseInfo(releaseInfo, 'iOS', 'EdgeIdentity', releaseInfo.tag_name)
        case "aepsdk-edgeidentity-android":
            return new SDKReleaseInfo(releaseInfo, 'Android', 'EdgeIdentity', releaseInfo.tag_name.replace('v', ''))
        case "aepsdk-userprofile-ios":
            return new SDKReleaseInfo(releaseInfo, 'iOS', 'UserProfile', releaseInfo.tag_name)
        case "aepsdk-userprofile-android":
            return new SDKReleaseInfo(releaseInfo, 'Android', 'UserProfile', releaseInfo.tag_name.replace('v', ''))
        case "aepsdk-edgebridge-ios":
            return new SDKReleaseInfo(releaseInfo, 'iOS', 'EdgeBridge', releaseInfo.tag_name)
        case "aepsdk-edgebridge-android":
            return new SDKReleaseInfo(releaseInfo, 'Android', 'EdgeBridge', releaseInfo.tag_name.replace('v', ''))
        case "aepsdk-edgemedia-ios":
            return new SDKReleaseInfo(releaseInfo, 'iOS', 'EdgeMedia', releaseInfo.tag_name)
        case "aepsdk-edgemedia-android":
            return new SDKReleaseInfo(releaseInfo, 'Android', 'EdgeMedia', releaseInfo.tag_name.replace('v', ''))
        case "aepsdk-campaignclassic-ios":
            return new SDKReleaseInfo(releaseInfo, 'iOS', 'Campaign Classic', releaseInfo.tag_name)
        case "aepsdk-campaignclassic-android":
            return new SDKReleaseInfo(releaseInfo, 'Android', 'Campaign Classic', releaseInfo.tag_name.replace('v', ''))
        case "aepsdk-campaign-ios":
            return new SDKReleaseInfo(releaseInfo, 'iOS', 'Campaign Standard', releaseInfo.tag_name)
        case "aepsdk-campaign-android":
            return new SDKReleaseInfo(releaseInfo, 'Android', 'Campaign Standard', releaseInfo.tag_name.replace('v', ''))
        default:
            throw Error("unsupported repoName: " + releaseInfo.repo_name)
    }
}

/**
 * @class Represents information about an SDK release.
 */
class SDKReleaseInfo {
    /**
     * Creates a new SDKReleaseInfo object.
     * 
     * @param {GithubReleaseInfo} githubReleaseInfo - The [GithubReleaseInfo] object containing release information.
     * @param {string} platform - The platform of the SDK release.
     * @param {string} extension - The file extension of the SDK release.
     * @param {string} version - The version of the SDK release.
     * @throws {Error} Throws an error if the provided githubReleaseInfo is not an instance of [GithubReleaseInfo].
     */
    constructor(githubReleaseInfo, platform, extension, version) {
        if (githubReleaseInfo instanceof GithubReleaseInfo) {
            this.published_at = githubReleaseInfo.published_at;
            this.body = githubReleaseInfo.body;
            this.platform = platform;
            this.extension = extension;
            this.version = version;
        } else {
            throw Error("Invalid GithubReleaseInfo object.");
        }
    }
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

module.exports = { fetchReleaseInfoFromGitHub, sortReleaseInfoByDateASC, SDKReleaseInfo };