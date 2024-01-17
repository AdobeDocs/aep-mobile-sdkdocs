/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
module.exports = {
    siteMetadata: {
        pages: [
            {
                title: "Versions",
                menu: [
                    {
                        title: "Latest version",
                        path: "/home",
                        selected: true
                    },
                    {
                        title: "Previous versions",
                        path: '/previous-versions/'
                    }
                ]
            },
            {
                title: "Home",
                path: "/home"
            },
            {
                title: 'Edge Network extensions',
                path: '/edge',
            },
            {
                title: "Solution-specific extensions",
                path: "/solution"
            },
            {
                title: "Resources",
                path: "/resources"
            }
        ],
        subPages: [
            {
                title: "Home",
                path: "/home"
            },
            {
                title: "Current SDK versions",
                path: "/home/current-sdk-versions"
            },
            {
                title: "Release notes",
                path: "/home/release-notes",
                pages: [{
                        title: "2023",
                        path: "/home/release-notes"
                    },
                    {
                        title: "2022",
                        path: "/home/release-notes/2022"
                    },
                    {
                        title: "2021",
                        path: "/home/release-notes/2021"
                    }
                ]
            },
            {
                title: "Getting started",
                path: "/home/getting-started",
                pages: [{
                        title: "Overview",
                        path: "/home/getting-started"
                    },
                    {
                        title: "Set up schemas and datasets",
                        path: "/home/getting-started/set-up-schemas-and-datasets"
                    },
                    {
                        title: "Configure datastreams",
                        path: "/home/getting-started/configure-datastreams"
                    },
                    {
                        title: "Set up a mobile property",
                        path: "/home/getting-started/create-a-mobile-property"
                    },
                    {
                        title: "Get the Experience Platform SDK",
                        path: "/home/getting-started/get-the-sdk"
                    },
                    {
                        title: "Debugging and lifecycle metrics",
                        path: "/home/getting-started/enable-debug-logging"
                    },
                    {
                        title: "Track events",
                        path: "/home/getting-started/track-events"
                    },
                    {
                        title: "Validation and next steps",
                        path: "/home/getting-started/validate"
                    }
                ]
            },
            {
                title: "Edge Network extensions",
                path: "/edge",
                pages: [
                    {
                        title: "Adobe Experience Platform Edge Network",
                        path: "/edge/edge-network",
                        pages: [{
                                title: "Overview",
                                path: "/edge/edge-network"
                            },
                            {
                                title: "API reference",
                                path: "/edge/edge-network/api-reference"
                            },
                            {
                                title: "XDM Experience Events",
                                path: "/edge/edge-network/xdm-experience-events"
                            },
                            {
                                title: "Validation",
                                path: "/edge/edge-network/validation"
                            },
                            {
                                title: "Tutorials",
                                path: "/edge/edge-network/tutorials",
                                pages: [
                                    {
                                        title: "Datastream config overrides using rules",
                                        path: "/edge/edge-network/tutorials/datastream-config-override-rules"
                                    }
                                ]
                            },
                            {
                                title: "Release notes",
                                path: "/edge/edge-network/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Journey Optimizer",
                        path: "/edge/adobe-journey-optimizer",
                        pages: [{
                                title: "Overview",
                                path: "/edge/adobe-journey-optimizer"
                            },
                            {
                                title: "API reference",
                                path: "/edge/adobe-journey-optimizer/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/edge/adobe-journey-optimizer/release-notes"
                            },
                            {
                                title: "Public classes and enums",
                                path: "/edge/adobe-journey-optimizer/public-classes"
                            },
                            {
                                title: "Tutorials",
                                path: "/edge/adobe-journey-optimizer/tutorials",
                                pages: [{
                                        title: "Implement a MessagingDelegate",
                                        path: "/edge/adobe-journey-optimizer/tutorials/messaging-delegate"
                                    },
                                    {
                                        title: "Call native code from the JavaScript of an in-app message",
                                        path: "/edge/adobe-journey-optimizer/tutorials/native-from-javascript"
                                    },
                                    {
                                        title: "Execute Javascript methods from native code",
                                        path: "/edge/adobe-journey-optimizer/tutorials/javascript-from-native"
                                    },
                                    {
                                        title: "Handle URL clicks from an in-app message",
                                        path: "/edge/adobe-journey-optimizer/tutorials/handle-clicks"
                                    },
                                    {
                                        title: "Validate in-app messaging using Assurance",
                                        path: "/edge/adobe-journey-optimizer/tutorials/validate-messages"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Adobe Journey Optimizer Decisioning",
                        path: "/edge/adobe-journey-optimizer-decisioning",
                        pages: [{
                                title: "Overview",
                                path: "/edge/adobe-journey-optimizer-decisioning"
                            },
                            {
                                title: "API reference",
                                path: "/edge/adobe-journey-optimizer-decisioning/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/edge/adobe-journey-optimizer-decisioning/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Streaming Media for Edge Network",
                        path: "/edge/media-for-edge-network",
                        pages: [{
                                title: "Overview",
                                path: "/edge/media-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "/edge/media-for-edge-network/api-reference"
                            },
                            {
                                title: 'Release notes',
                                path: '/edge/media-for-edge-network/release-notes'
                            }
                        ]
                    },
                    {
                        title: "Consent for Edge Network",
                        path: "/edge/consent-for-edge-network",
                        pages: [{
                                title: "Overview",
                                path: "/edge/consent-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "/edge/consent-for-edge-network/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/edge/consent-for-edge-network/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Identity for Edge Network",
                        path: "/edge/identity-for-edge-network",
                        pages: [{
                                title: "Overview",
                                path: "/edge/identity-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "/edge/identity-for-edge-network/api-reference"
                            },
                            {
                                title: "Frequently asked questions",
                                path: "/edge/identity-for-edge-network/faq"
                            },
                            {
                                title: "Release notes",
                                path: "/edge/identity-for-edge-network/release-notes"
                            }
                        ]
                    },

                    {
                        title: "Lifecycle for Edge Network",
                        path: "/edge/lifecycle-for-edge-network",
                        pages: [{
                                title: "Overview",
                                path: "/edge/lifecycle-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "/edge/lifecycle-for-edge-network/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "/edge/lifecycle-for-edge-network/event-reference"
                            },
                            {
                                title: "Metrics",
                                path: "/edge/lifecycle-for-edge-network/metrics"
                            }
                        ]
                    }

                ]
            },
            {
                title: "Solution specific extensions",
                path: "/solution",
                pages: [{
                        title: 'Adobe Analytics',
                        path: '/solution/adobe-analytics/',
                        pages: [{
                                title: "Overview",
                                path: "/solution/adobe-analytics"
                            },
                            {
                                title: 'Migrate to Edge Network',
                                path: '/solution/adobe-analytics/migrate-to-edge-network'
                            },
                            {
                                title: "API reference",
                                path: "/solution/adobe-analytics/api-reference"
                            },
                            {
                                title: 'Event reference',
                                path: '/solution/adobe-analytics/event-reference'
                            },
                            {
                                title: "Product variable",
                                path: "/solution/adobe-analytics/product-variable"
                            },
                            {
                                title: "Tracking beacons",
                                path: "/solution/adobe-analytics/track-beacon"
                            },
                            {
                                title: "Frequently asked questions",
                                path: "/solution/adobe-analytics/faq"
                            },
                            {
                                title: 'Release notes',
                                path: '/solution/adobe-analytics/release-notes'
                            }
                        ]
                    },
                    {
                        title: "Adobe Audience Manager",
                        path: "/solution/adobe-audience-manager/",
                        pages: [{
                                title: "Overview",
                                path: "/solution/adobe-audience-manager/"
                            },
                            {
                                title: "API reference",
                                path: "/solution/adobe-audience-manager/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "/solution/adobe-audience-manager/event-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/solution/adobe-audience-manager/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Campaign Classic",
                        path: "/solution/adobe-campaign-classic",
                        pages: [{
                                title: "Overview",
                                path: "/solution/adobe-campaign-classic"
                            },
                            {
                                title: "API reference",
                                path: "/solution/adobe-campaign-classic/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "/solution/adobe-campaign-classic/event-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/solution/adobe-campaign-classic/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Campaign Standard",
                        path: "/solution/adobe-campaign-standard",
                        pages: [{
                                title: "Overview",
                                path: "/solution/adobe-campaign-standard"
                            },
                            {
                                title: "API reference",
                                path: "/solution/adobe-campaign-standard/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "/solution/adobe-campaign-standard/event-reference"
                            },
                            {
                                title: "Campaign push notifications",
                                path: "/solution/adobe-campaign-standard/push-notifications"
                            },
                            {
                                title: "Release notes",
                                path: "/solution/adobe-campaign-standard/release-notes"
                            }
                        ]
                    },

                    {
                        title: "Adobe Media Analytics",
                        path: "/solution/adobe-media-analytics",
                        pages: [{
                                title: "Overview",
                                path: "/solution/adobe-media-analytics"
                            },
                            {
                                title: "API reference",
                                path: "/solution/adobe-media-analytics/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/solution/adobe-media-analytics/release-notes"
                            },
                            {
                                title: "Migration Guide",
                                path: "/solution/adobe-media-analytics/migration-guide"
                            },
                        ]
                    },
                    {
                        title: "Adobe Target",
                        path: "/solution/adobe-target",
                        pages: [{
                                title: "Overview",
                                path: "/solution/adobe-target"
                            },
                            {
                                title: "API reference",
                                path: "/solution/adobe-target/api-reference"
                            },
                            {
                                title: "Raw API reference",
                                path: "/solution/adobe-target/raw-api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "/solution/adobe-target/event-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/solution/adobe-target/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Experience Platform Location Service",
                        path: "/solution/places",
                        pages: [{
                                title: "Overview",
                                path: "/solution/places"
                            },
                            {
                                title: "API reference",
                                path: "/solution/places/api-reference.md"
                            },
                            {
                                title: "Event forwarding to Adobe Experience Platform",
                                path: "/solution/places/places-to-platform.md"
                            },
                            {
                                title: "Release notes",
                                path: "/solution/places/release-notes.md"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Base extensions",
                path: "/home/base",
                pages: [{
                        title: "Overview",
                        path: "/home/base"
                    },
                    {
                        title: "Mobile Core",
                        path: "/home/base/mobile-core",
                        pages: [{
                                title: "Overview",
                                path: "/home/base/mobile-core"
                            },
                            {
                                title: "Configuration",
                                path: "/home/base/mobile-core/configuration",
                                pages: [{
                                        title: "Overview",
                                        path: "/home/base/mobile-core/configuration"
                                    },
                                    {
                                        title: "API reference",
                                        path: "/home/base/mobile-core/configuration/api-reference"
                                    }
                                ]
                            },
                            {
                                title: "Identity",
                                path: "/home/base/mobile-core/identity",
                                pages: [{
                                        title: "Overview",
                                        path: "/home/base/mobile-core/identity"
                                    },
                                    {
                                        title: "API reference",
                                        path: "/home/base/mobile-core/identity/api-reference"
                                    },
                                    {
                                        title: "Push identifier sync",
                                        path: "/home/base/mobile-core/identity/push-sync"
                                    }
                                ]
                            },
                            {
                                title: "Lifecycle",
                                path: "/home/base/mobile-core/lifecycle",
                                pages: [{
                                        title: "Overview",
                                        path: "/home/base/mobile-core/lifecycle"
                                    },
                                    {
                                        title: "Lifecycle extension in Android",
                                        path: "/home/base/mobile-core/lifecycle/android"
                                    },
                                    {
                                        title: "Lifecycle extension in iOS",
                                        path: "/home/base/mobile-core/lifecycle/ios"
                                    },
                                    {
                                        title: "API reference",
                                        path: "/home/base/mobile-core/lifecycle/api-reference"
                                    },
                                    {
                                        title: "Metrics",
                                        path: "/home/base/mobile-core/lifecycle/metrics"
                                    },
                                    {
                                        title: "Configuration keys",
                                        path: "/home/base/mobile-core/lifecycle/configuration-keys"
                                    }
                                ]
                            },
                            {
                                title: "Platform services",
                                path: "/home/base/mobile-core/platform-services",
                                pages: [{
                                        title: "Overview",
                                        path: "/home/base/mobile-core/platform-services"
                                    },
                                    {
                                        title: "Network service",
                                        path: "/home/base/mobile-core/platform-services/network-service"
                                    }
                                ]
                            },
                            {
                                title: "Rules Engine",
                                path: "/home/base/mobile-core/rules-engine",
                                pages: [{
                                        title: "Overview",
                                        path: "/home/base/mobile-core/rules-engine"
                                    },
                                    {
                                        title: "Technical details",
                                        path: "/home/base/mobile-core/rules-engine/technical-details"
                                    },
                                    {
                                        title: "Consequence details",
                                        path: "/home/base/mobile-core/rules-engine/consequence-details"
                                    }
                                ]
                            },
                            {
                                title: "Signal",
                                path: "/home/base/mobile-core/signal",
                                pages: [{
                                        title: "Overview",
                                        path: "/home/base/mobile-core/signal"
                                    },
                                    {
                                        title: "API reference",
                                        path: "/home/base/mobile-core/signal/api-reference"
                                    },
                                    {
                                        title: "Signal and Rules Engine integration",
                                        path: "/home/base/mobile-core/signal/rules-engine-integration.md"
                                    }
                                ]
                            },
                            {
                                title: "API reference",
                                path: "/home/base/mobile-core/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/home/base/mobile-core/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Experience Platform Assurance",
                        path: "/home/base/assurance",
                        pages: [{
                                title: "Overview",
                                path: "/home/base/assurance"
                            },
                            {
                                title: "API reference",
                                path: "/home/base/assurance/api-reference"
                            },
                            {
                                title: "Resolving common issues",
                                path: "/home/base/assurance/common-issues/"
                            },
                            {
                                title: "Release notes",
                                path: "/home/base/assurance/release-notes"
                            }
                        ]
                    },

                    {
                        title: "Profile",
                        path: "/home/base/profile",
                        pages: [{
                                title: "Overview",
                                path: "/home/base/profile"
                            },
                            {
                                title: "API reference",
                                path: "/home/base/profile/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/home/base/profile/release-notes"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Resources",
                path: "/resources",
                pages: [{
                        title: "Overview",
                        path: "/resources"
                    },
                    {
                        title: "Aligning major SDK versions",
                        path: "/resources/major-version-alignment"
                    },
                    {
                        title: "Manage Gradle dependencies",
                        path: "/resources/manage-gradle-dependencies"
                    },
                    {
                        title: "Manage SPM dependencies",
                        path: "/resources/manage-spm-dependencies"
                    },
                    {
                        title: "Privacy and GDPR",
                        path: "/resources/privacy-and-gdpr"
                    },
                    {
                        title: "Frequently asked questions",
                        path: "/resources/faq"
                    },
                    {
                        title: "SDKs end-of-support announcements",
                        path: "/resources/sdks-end-of-support"
                    },
                    {
                        title: "Adobe Mobile Library (v4) end-of-support",
                        path: "/resources/upgrade-platform-sdks",
                        pages: [{
                                title: "Overview",
                                path: "/resources/upgrade-platform-sdks"
                            },
                            {
                                title: "v4 SDK comparison",
                                path: "/resources/upgrade-platform-sdks/comparison"
                            },
                            {
                                title: "v4 API changelog",
                                path: "/resources/upgrade-platform-sdks/api-changelog.md"
                            },
                            {
                                title: "Manual Lifecycle implementation",
                                path: "/resources/upgrade-platform-sdks/lifecycle"
                            },
                            {
                                title: "Analytics migration",
                                path: "/resources/upgrade-platform-sdks/analytics.md"
                            },
                            {
                                title: "Frequently asked questions",
                                path: "/resources/upgrade-platform-sdks/v4-faq"
                            }
                        ]
                    },
                    {
                        title: "Adobe Experience Cloud & Apple's IDFA, Privacy announcement",
                        path: "/resources/privacy-announcement"
                    }

                ]
            },{
                title: "Migration",
                path: "/resources/migration",
                pages: [{
                        title: "Android",
                        path: "/resources/migration/android",
                        pages: [{
                                title: "Migrate to 2.x SDKs",
                                path: "/resources/migration/android/migrate-to-2x"
                            }
                        ]
                    },
                    {
                        title: "iOS",
                        path: "/resources/migration/ios",
                        pages: [{
                                title: "Migrate to 4.x SDKs",
                                path: "/resources/migration/ios/migrate-to-4x"
                            },
                            {
                                title: "Migrate to 3.x SDKs",
                                path: "/resources/migration/ios/migrate-to-3x"
                            },                            
                        ]
                    }
                ]
            },
            {
                title: "User guides",
                path: "/resources/user-guides",
                pages: [{
                        title: "Overview",
                        path: "/resources/user-guides"
                    },
                    {
                        title: "Getting started with Platform",
                        path: "/resources/user-guides/getting-started-with-platform/overview",
                        pages: [{
                                title: "Overview",
                                path: "/resources/user-guides/getting-started-with-platform/overview"
                            },
                            {
                                title: "Sample XDM implementation",
                                path: "/resources/user-guides/getting-started-with-platform/sample-xdm-implementation"
                            },
                            {
                                title: "Rules and XDM events",
                                path: "/resources/user-guides/getting-started-with-platform/rules-and-xdm-events"
                            }
                        ]
                    },
                    {
                        title: "Attach data to SDK events",
                        path: "/resources/user-guides/attach-data"
                    },
                    {
                        title: "Modify data in SDK events",
                        path: "/resources/user-guides/modify-data"
                    },
                    {
                        title: "Tags data elements",
                        path: "/resources/user-guides/tags-data-elements"
                    },
                    {
                        title: "iOS App Extensions",
                        path: "/resources/user-guides/app-extension"
                    },
                    {
                        title: "Building mobile extensions",
                        path: "/resources/user-guides/building-mobile-extensions"
                    }
                ]
            }
        ]
    },
    plugins: [`@adobe/gatsby-theme-aio`],
    pathPrefix: process.env.PATH_PREFIX || '/client-sdks/'
};
