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

const repoNames = [
    "aepsdk-commons",
    "aepsdk-roku",
    "aepsdk-react-native",
    "aepsdk_flutter",
    "aepsdk-core-ios",
    "aepsdk-core-android",
    "aepsdk-assurance-ios",
    "aepsdk-assurance-android",
    "aepsdk-userprofile-ios",
    "aepsdk-userprofile-android",
    "aepsdk-edge-ios",
    "aepsdk-edge-android",
    "aepsdk-edgeconsent-ios",
    "aepsdk-edgeconsent-android",
    "aepsdk-edgeidentity-ios",
    "aepsdk-edgeidentity-android",
    "aepsdk-edgemedia-ios",
    "aepsdk-edgemedia-android",
    "aepsdk-edgebridge-ios",
    "aepsdk-edgebridge-android",
    "aepsdk-optimize-ios",
    "aepsdk-optimize-android",
    "aepsdk-messaging-ios",
    "aepsdk-messaging-android",
    "aepsdk-campaign-ios",
    "aepsdk-campaign-android",
    "aepsdk-campaignclassic-ios",
    "aepsdk-campaignclassic-android",
    "aepsdk-media-ios",
    "aepsdk-media-android",
    "aepsdk-audience-ios",
    "aepsdk-audience-android",
    "aepsdk-analytics-ios",
    "aepsdk-analytics-android",
    "aepsdk-places-ios",
    "aepsdk-places-android",
    "aepsdk-target-ios",
    "aepsdk-target-android",
    "aepsdk-ui-ios",
    "aepsdk-ui-android",
]

const EXTENSION_ENUM = Object.freeze({
    SDK: "SDK",
    BOM: "BOM",
    CORE: "Core",
    LIFECYCLE: "Lifecycle",
    IDENTITY: "Identity",
    SIGNAL: "Signal",
    ASSURANCE: "Assurance",
    USERPROFILE: "UserProfile",
    EDGE_CONSENT: "EdgeConsent",
    EDGE: "Edge",
    EDGE_IDENTITY: "EdgeIdentity",
    EDGE_MEDIA: "EdgeMedia",
    EDGE_BRIDGE: "EdgeBridge",
    MESSAGING: "Messaging",
    OPTIMIZE: "Optimize",
    ANALYTICS: "Analytics",
    TARGET: "Target",
    PLACES: "Places",
    MEDIA: "Media",
    AUDIENCE: "Audience",
    CAMPAIGN_STANDARD: "Campaign Standard",
    CAMPAIGN_CLASSIC: "Campaign Classic",
    NOTIFICATION_CONTENT: "Notification Content Extension",
    NOTIFICATION_BUILDER: "Notification Builder"
})

const PLATFORM_ENUM = Object.freeze({
    IOS: "iOS",
    ANDROID: "Android",
    FLUTTER: "Flutter",
    ROKU: "Roku",
    REACT_NATIVE: "React Native"
})

const releaseNotesLocation = (() => {
    const obj = {}
    obj[EXTENSION_ENUM.CORE] = "./src/pages/home/base/mobile-core/release-notes.md"
    obj[EXTENSION_ENUM.LIFECYCLE] = "./src/pages/home/base/mobile-core/release-notes.md"
    obj[EXTENSION_ENUM.IDENTITY] = "./src/pages/home/base/mobile-core/release-notes.md"
    obj[EXTENSION_ENUM.SIGNAL] = "./src/pages/home/base/mobile-core/release-notes.md"
    obj[EXTENSION_ENUM.ASSURANCE] = "./src/pages/home/base/assurance/release-notes.md"
    obj[EXTENSION_ENUM.USERPROFILE] = "./src/pages/home/base/profile/release-notes.md"
    obj[EXTENSION_ENUM.EDGE_CONSENT] = "./src/pages/edge/consent-for-edge-network/release-notes.md"
    obj[EXTENSION_ENUM.EDGE] = "./src/pages/edge/edge-network/release-notes.md"
    obj[EXTENSION_ENUM.EDGE_IDENTITY] = "./src/pages/edge/identity-for-edge-network/release-notes.md"
    obj[EXTENSION_ENUM.EDGE_MEDIA] = "./src/pages/edge/media-for-edge-network/release-notes.md"
    obj[EXTENSION_ENUM.MESSAGING] = "./src/pages/edge/adobe-journey-optimizer/release-notes.md"
    obj[EXTENSION_ENUM.OPTIMIZE] = "./src/pages/edge/adobe-journey-optimizer-decisioning/release-notes.md"
    obj[EXTENSION_ENUM.ANALYTICS] = "./src/pages/solution/adobe-analytics/release-notes.md"
    obj[EXTENSION_ENUM.TARGET] = "./src/pages/solution/adobe-target/release-notes.md"
    obj[EXTENSION_ENUM.PLACES] = "./src/pages/solution/places/release-notes.md"
    obj[EXTENSION_ENUM.MEDIA] = "./src/pages/solution/adobe-media-analytics/release-notes.md"
    obj[EXTENSION_ENUM.AUDIENCE] = "./src/pages/solution/adobe-audience-manager/release-notes.md"
    obj[EXTENSION_ENUM.CAMPAIGN_STANDARD] = "./src/pages/solution/adobe-campaign-standard/release-notes.md"
    obj[EXTENSION_ENUM.CAMPAIGN_CLASSIC] = "./src/pages/solution/adobe-campaign-classic/release-notes.md"

    return obj
})()

const PST_TIMEZONE = "America/Los_Angeles"

const PST_TIMEZONE_OFFSET = 420

const MAIN_RELEASE_NOTES_LOCATION = "./src/pages/home/release-notes/index.md"

const BOM_RELEASE_TAG_PREFIX = "bom-" // BOM release tag prefix

const REACT_NATIVE_RELEASE_TAG_PREFIX = "@adobe/react-native-aep" // React Native release tag prefix

const FLUTTER_RELEASE_TAG_PREFIX = "flutter_aep" // Flutter release tag prefix

module.exports = {
    repoNames,
    releaseNotesLocation,
    PST_TIMEZONE,
    PST_TIMEZONE_OFFSET,
    MAIN_RELEASE_NOTES_LOCATION,
    EXTENSION_ENUM,
    PLATFORM_ENUM,
    BOM_RELEASE_TAG_PREFIX,
    REACT_NATIVE_RELEASE_TAG_PREFIX,
    FLUTTER_RELEASE_TAG_PREFIX
}