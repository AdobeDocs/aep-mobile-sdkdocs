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

const { PLATFORM_ENUM, EXTENSION_ENUM, BOM_RELEASE_TAG_PREFIX, REACT_NATIVE_RELEASE_TAG_PREFIX, FLUTTER_RELEASE_TAG_PREFIX } = require('./constants')
const { GithubReleaseInfo } = require('./githubRelease');

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
        for (let property in this) {
            if (this[property] === null) {
                console.log(`The property ${property} is null`);
            }
        }
    }
}

/**
 * Converts a [GithubReleaseInfo] object to an [SDKReleaseInfo] object.
 * 
 * @param {GithubReleaseInfo} releaseInfo - The [GithubReleaseInfo] object to convert.
 * @returns {SDKReleaseInfo|null} - The converted [SDKReleaseInfo] object or null if the repo_name is not supported or the tag_name is not supported.
 * @throws {Error} - If the input is not a [GithubReleaseInfo] object.
 */
function convertToSDKReleaseInfo(releaseInfo) {
    if (!(releaseInfo instanceof GithubReleaseInfo)) {
        throw Error("Input is not a [GithubReleaseInfo] object.")
    }

    const repoName = releaseInfo.repo_name
    const tagName = releaseInfo.tag_name
    switch (true) {
        case isBOMRelease(repoName):
            // aepsdk-commons is also used to release othe artifacts, only keep the release notes for BOM.
            if (tagName.startsWith(BOM_RELEASE_TAG_PREFIX))
                return new SDKReleaseInfo(releaseInfo, PLATFORM_ENUM.ANDROID, EXTENSION_ENUM.BOM, tagName.replace(BOM_RELEASE_TAG_PREFIX, ''))
            else
                return null
        case isRokuRelease(repoName):
            return new SDKReleaseInfo(releaseInfo, PLATFORM_ENUM.ROKU, EXTENSION_ENUM.SDK, tagName)
        case isReactNativeRelease(repoName):
            // example: @adobe/react-native-aepuserprofile@6.0.0
            let array1 = tagName.replace(REACT_NATIVE_RELEASE_TAG_PREFIX, '').split('@')
            // puserprofile@6.0.0
            verifyArray(array1, 2)
            return new SDKReleaseInfo(releaseInfo, PLATFORM_ENUM.REACT_NATIVE, standardizeExtensionName(array1[0]), array1[1])
        case isFlutterRelease(repoName):
            // example: flutter_aepuserprofile@3.0.0
            let array2 = tagName.replace(FLUTTER_RELEASE_TAG_PREFIX, '').split('@')
            // userprofile@3.0.0
            verifyArray(array2, 2)
            return new SDKReleaseInfo(releaseInfo, PLATFORM_ENUM.FLUTTER, standardizeExtensionName(array2[0]), array2[1])
        case isIOSRelease(repoName):
            return new SDKReleaseInfo(releaseInfo, PLATFORM_ENUM.IOS, extractIOSExtensionName(repoName), tagName)
        case isAndroidRelease(repoName):
            if (isAndroidCoreRelease(repoName) || isAndroidUIRelease(repoName)) {
                // Example: https://github.com/adobe/aepsdk-core-android/releases/tag/v3.0.0-signal
                let array3 = tagName.split('-')
                verifyArray(array3, 2)
                return new SDKReleaseInfo(releaseInfo, PLATFORM_ENUM.ANDROID, standardizeExtensionName(array3[1]), extractAndroidVersion(array3[0]))
            }
            return new SDKReleaseInfo(releaseInfo, PLATFORM_ENUM.ANDROID, extractAndroidExtensionName(repoName), extractAndroidVersion(tagName))
        default:
            throw Error("unsupported repoName: " + repoName)
    }
}

/**
 * Verifies if the given object is an array of the specified size.
 * 
 * @param {Array} obj - The object to be verified.
 * @param {number} size - The expected size of the array.
 * @throws {Error} If the object is not an array or if its length is not equal to the specified size.
 */
function verifyArray(obj, size) {
    if (Array.isArray(obj) && obj.length === size) {
        return
    }
    throw Error("Unexpected array: " + obj)
}

/**
 * Extracts the Android version from a given Github tag.
 * 
 * Example: https://github.com/adobe/aepsdk-edge-android/releases/tag/v3.0.0
 * 
 * @param {string} tag - The tag to extract the Android version from.
 * @returns {string} The extracted Android version.
 */
function extractAndroidVersion(tag) {
    return tag.replace('v', '')
}

/**
 * Extracts the iOS extension name from the given repository name.
 * 
 * @param {string} repoName - The name of the repository.
 * @returns {string} The standardized iOS extension name.
 */
function extractIOSExtensionName(repoName) {
    let iosExtensionName = repoName.replace('aepsdk-', '').replace('-ios', '')
    return standardizeExtensionName(iosExtensionName)
}

/**
 * Extracts the Android extension name from the given repository name.
 *
 * @param {string} repoName - The repository name.
 * @returns {string} The standardized Android extension name.
 */
function extractAndroidExtensionName(repoName) {
    let androidExtensionName = repoName.replace('aepsdk-', '').replace('-android', '')
    return standardizeExtensionName(androidExtensionName)
}

function isBOMRelease(repoName) {
    return repoName === "aepsdk-commons"
}
function isRokuRelease(repoName) {
    return repoName === "aepsdk-roku"
}
function isReactNativeRelease(repoName) {
    return repoName === "aepsdk-react-native"
}
function isFlutterRelease(repoName) {
    return repoName === "aepsdk_flutter"
}
function isIOSRelease(repoName) {
    return repoName.endsWith("-ios")
}

function isAndroidRelease(repoName) {
    return repoName.endsWith("-android")
}

function isAndroidCoreRelease(repoName) {
    return repoName === "aepsdk-core-android"
}

function isAndroidUIRelease(repoName) {
    return repoName === "aepsdk-ui-android"
}

/**
 * Standardizes the extension name with the correct format.
 * 
 * @param {string} extensionName - The name of the extension to be standardized.
 * @returns {string} The standardized extension enum value.
 * @throws {Error} If the extension name is not supported.
 */
function standardizeExtensionName(extensionName) {
    extensionName = extensionName.trim().toLowerCase()
    switch (true) {
        case extensionName === "core":
            return EXTENSION_ENUM.CORE;
        case extensionName === "lifecycle":
            return EXTENSION_ENUM.LIFECYCLE;
        case extensionName === "identity":
            return EXTENSION_ENUM.IDENTITY;
        case extensionName === "signal":
            return EXTENSION_ENUM.SIGNAL;
        case extensionName === "assurance":
            return EXTENSION_ENUM.ASSURANCE;
        case extensionName === "userprofile":
            return EXTENSION_ENUM.USERPROFILE;
        case extensionName === "edgeconsent" || extensionName === "consent":
            return EXTENSION_ENUM.EDGE_CONSENT;
        case extensionName === "edge":
            return EXTENSION_ENUM.EDGE;
        case extensionName === "edgeidentity":
            return EXTENSION_ENUM.EDGE_IDENTITY;
        case extensionName === "edgemedia":
            return EXTENSION_ENUM.EDGE_MEDIA;
        case extensionName === "edgebridge":
            return EXTENSION_ENUM.EDGE_BRIDGE;
        case extensionName === "messaging":
            return EXTENSION_ENUM.MESSAGING;
        case extensionName === "optimize":
            return EXTENSION_ENUM.OPTIMIZE;
        case extensionName === "analytics":
            return EXTENSION_ENUM.ANALYTICS;
        case extensionName === "target":
            return EXTENSION_ENUM.TARGET;
        case extensionName === "places":
            return EXTENSION_ENUM.PLACES;
        case extensionName === "media":
            return EXTENSION_ENUM.MEDIA;
        case extensionName === "audience":
            return EXTENSION_ENUM.AUDIENCE;
        case extensionName.includes("campaign") && extensionName.includes("classic"):
            return EXTENSION_ENUM.CAMPAIGN_CLASSIC;
        case extensionName.includes("campaign"):
            return EXTENSION_ENUM.CAMPAIGN_STANDARD;
        case extensionName === "ui":
            return EXTENSION_ENUM.NOTIFICATION_CONTENT;
        case extensionName === "notificationbuilder":
            return EXTENSION_ENUM.NOTIFICATION_BUILDER;
        default:
            throw Error("unsupported extension name : " + extensionName)
    }
}

module.exports = { convertToSDKReleaseInfo, SDKReleaseInfo };
