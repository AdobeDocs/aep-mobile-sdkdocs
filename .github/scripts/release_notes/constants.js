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
]

const releaseNotesLocation = {
    "Core": "./src/pages/home/base/mobile-core/release-notes.md",
    "Lifecycle": "./src/pages/home/base/mobile-core/release-notes.md",
    "Identity": "./src/pages/home/base/mobile-core/release-notes.md",
    "Signal": "./src/pages/home/base/mobile-core/release-notes.md",
    "Assurance": "./src/pages/home/base/assurance/release-notes.md",
    "UserProfile": "./src/pages/home/base/profile/release-notes.md",
    "EdgeConsent": "./src/pages/edge/consent-for-edge-network/release-notes.md",
    "Edge": "./src/pages/edge/edge-network/release-notes.md",
    "EdgeIdentity": "./src/pages/edge/identity-for-edge-network/release-notes.md",
    "EdgeMedia": "./src/pages/edge/media-for-edge-network/release-notes.md",
    "Messaging": "./src/pages/edge/adobe-journey-optimizer/release-notes.md",
    "Optimize": "./src/pages/edge/adobe-journey-optimizer-decisioning/release-notes.md",
    "Analytics": "./src/pages/solution/adobe-analytics/release-notes.md",
    "Target": "./src/pages/solution/adobe-target/release-notes.md",
    "Places": "./src/pages/solution/places/release-notes.md",
    "Media": "./src/pages/solution/adobe-media-analytics/release-notes.md",
    "Audience": "./src/pages/solution/adobe-audience-manager/release-notes.md",
    "Campaign Standard": "./src/pages/solution/adobe-campaign-standard/release-notes.md",
    "Campaign Classic": "./src/pages/solution/adobe-campaign-classic/release-notes.md"
}

const PST_TIMEZONE = "America/Los_Angeles"

const PST_TIMEZONE_OFFSET = 420

const MAIN_RELEASE_NOTES_LOCATION = "./src/pages/home/release-notes/index.md"

module.exports = {
    repoNames,
    releaseNotesLocation,
    PST_TIMEZONE,
    PST_TIMEZONE_OFFSET,
    MAIN_RELEASE_NOTES_LOCATION
}