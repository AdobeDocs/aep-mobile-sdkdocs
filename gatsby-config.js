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
        versions: [{
                title: 'Latest version',
                path: '/client-sdks/documentation/',
                selected: true
            },
            {
                title: 'Previous versions',
                path: '/client-sdks/previous-versions/'
            }
        ],
        pages: [
            {
                title: "Home",
                path: "/documentation/home"
            },
            {
                title: "Base extensions",
                path: "/documentation/base-extensions"
            },
            {
                title: 'Edge Network extensions',
                path: '/documentation/edge-extensions',
            },
            {
                title: "Solution-specific extensions",
                path: "/documentation/solution-extensions"
            },
            {
                title: "Resources",
                path: "/documentation/resources"
            }
        ],
        subPages: [
            {
                title: "Home",
                path: "/documentation/home"
            },
            {
                title: "Current SDK versions",
                path: "/documentation/home/current-sdk-versions"
            },
            {
                title: "Release notes",
                path: "/documentation/home/release-notes",
                pages: [{
                        title: "2023",
                        path: "/documentation/home/release-notes"
                    },
                    {
                        title: "2022",
                        path: "/documentation/home/release-notes/2022"
                    },
                    {
                        title: "2021",
                        path: "/documentation/home/release-notes/2021"
                    }
                ]
            },
            {
                title: "Getting started",
                path: "/documentation/home/getting-started",
                pages: [{
                        title: "Overview",
                        path: "/documentation/home/getting-started"
                    },
                    {
                        title: "Set up schemas and datasets",
                        path: "/documentation/home/getting-started/set-up-schemas-and-datasets"
                    },
                    {
                        title: "Configure datastreams",
                        path: "/documentation/home/getting-started/configure-datastreams"
                    },
                    {
                        title: "Set up a mobile property",
                        path: "/documentation/home/getting-started/create-a-mobile-property"
                    },
                    {
                        title: "Get the Experience Platform SDK",
                        path: "/documentation/home/getting-started/get-the-sdk"
                    },
                    {
                        title: "Debugging and lifecycle metrics",
                        path: "/documentation/home/getting-started/enable-debug-logging"
                    },
                    {
                        title: "Track events",
                        path: "/documentation/home/getting-started/track-events"
                    },
                    {
                        title: "Validation and next steps",
                        path: "/documentation/home/getting-started/validate"
                    }
                ]
            },
            {
                title: "Edge extensions",
                path: "/documentation/edge-extensions",
                pages: [{
                        title: "Identity for Edge Network",
                        path: "/documentation/edge-extensions/identity-for-edge-network",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/edge-extensions/identity-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "documentation/edge-extensions/identity-for-edge-network/api-reference"
                            },
                            {
                                title: "Frequently asked questions",
                                path: "documentation/edge-extensions/identity-for-edge-network/faq"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/edge-extensions/identity-for-edge-network/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Experience Platform Edge Network",
                        path: "/documentation/edge-extensions/edge-network",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/edge-extensions/edge-network"
                            },
                            {
                                title: "API reference",
                                path: "/documentation/edge-extensions/edge-network/api-reference"
                            },
                            {
                                title: "XDM Experience Events",
                                path: "/documentation/edge-extensions/edge-network/xdm-experience-events"
                            },
                            {
                                title: "Validation",
                                path: "/documentation/edge-extensions/edge-network/validation"
                            },
                            {
                                title: "Release notes",
                                path: "/documentation/edge-extensions/edge-network/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Lifecycle for Edge Network",
                        path: "/documentation/edge-extensions/lifecycle-for-edge-network",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/edge-extensions/lifecycle-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "documentation/edge-extensions/lifecycle-for-edge-network/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "documentation/edge-extensions/lifecycle-for-edge-network/event-reference"
                            },
                            {
                                title: "Metrics",
                                path: "documentation/edge-extensions/lifecycle-for-edge-network/metrics"
                            }
                        ]
                    },
                    {
                        title: "Consent for Edge Network",
                        path: "/documentation/edge-extensions/consent-for-edge-network",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/edge-extensions/consent-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "documentation/edge-extensions/consent-for-edge-network/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/edge-extensions/consent-for-edge-network/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Journey Optimizer",
                        path: "/documentation/edge-extensions/adobe-journey-optimizer",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/edge-extensions/adobe-journey-optimizer"
                            },
                            {
                                title: "API reference",
                                path: "documentation/edge-extensions/adobe-journey-optimizer/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/edge-extensions/adobe-journey-optimizer/release-notes"
                            },
                            {
                                title: "Public classes and enums",
                                path: "documentation/edge-extensions/adobe-journey-optimizer/public-classes"
                            },
                            {
                                title: "Tutorials",
                                path: "documentation/edge-extensions/adobe-journey-optimizer/tutorials",
                                pages: [{
                                        title: "Implement a MessagingDelegate",
                                        path: "/documentation/edge-extensions/adobe-journey-optimizer/tutorials/messaging-delegate"
                                    },
                                    {
                                        title: "Call native code from the JavaScript of an in-app message",
                                        path: "/documentation/edge-extensions/adobe-journey-optimizer/tutorials/native-from-javascript"
                                    },
                                    {
                                        title: "Execute Javascript methods from native code",
                                        path: "/documentation/edge-extensions/adobe-journey-optimizer/tutorials/javascript-from-native"
                                    },
                                    {
                                        title: "Handle URL clicks from an in-app message",
                                        path: "/documentation/edge-extensions/adobe-journey-optimizer/tutorials/handle-clicks"
                                    },
                                    {
                                        title: "Validate in-app messaging using Assurance",
                                        path: "/documentation/edge-extensions/adobe-journey-optimizer/tutorials/validate-messages"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Adobe Journey Optimizer Decisioning",
                        path: "/documentation/edge-extensions/adobe-journey-optimizer-decisioning",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/edge-extensions/adobe-journey-optimizer-decisioning"
                            },
                            {
                                title: "API reference",
                                path: "documentation/edge-extensions/adobe-journey-optimizer-decisioning/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/edge-extensions/adobe-journey-optimizer-decisioning/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Streaming Media for Edge Network",
                        path: "/documentation/edge-extensions/media-for-edge-network",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/edge-extensions/media-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "documentation/edge-extensions/media-for-edge-network/api-reference"
                            },
                            {
                                title: 'Release notes',
                                path: '/documentation/edge-extensions/media-for-edge-network/release-notes'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Solution specific extensions",
                path: "/documentation/solution-extensions",
                pages: [{
                        title: 'Adobe Analytics',
                        path: '/documentation/solution-extensions/adobe-analytics/',
                        pages: [{
                                title: "Overview",
                                path: "/documentation/solution-extensions/adobe-analytics"
                            },
                            {
                                title: 'Migrate to Edge Network',
                                path: '/documentation/solution-extensions/adobe-analytics/migrate-to-edge-network'
                            },
                            {
                                title: "API reference",
                                path: "/documentation/solution-extensions/adobe-analytics/api-reference"
                            },
                            {
                                title: 'Event reference',
                                path: '/documentation/solution-extensions/adobe-analytics/event-reference'
                            },
                            {
                                title: "Product variable",
                                path: "/documentation/solution-extensions/adobe-analytics/product-variable"
                            },
                            {
                                title: "Tracking beacons",
                                path: "/documentation/solution-extensions/adobe-analytics/track-beacon"
                            },
                            {
                                title: "Frequently asked questions",
                                path: "/documentation/solution-extensions/adobe-analytics/faq"
                            },
                            {
                                title: 'Release notes',
                                path: '/documentation/solution-extensions/adobe-analytics/release-notes'
                            }
                        ]
                    },
                    {
                        title: "Adobe Campaign Classic",
                        path: "/documentation/solution-extensions/adobe-campaign-classic",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/solution-extensions/adobe-campaign-classic"
                            },
                            {
                                title: "API reference",
                                path: "documentation/solution-extensions/adobe-campaign-classic/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "documentation/solution-extensions/adobe-campaign-classic/event-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/solution-extensions/adobe-campaign-classic/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Campaign Standard",
                        path: "/documentation/solution-extensions/adobe-campaign-standard",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/solution-extensions/adobe-campaign-standard"
                            },
                            {
                                title: "API reference",
                                path: "documentation/solution-extensions/adobe-campaign-standard/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "documentation/solution-extensions/adobe-campaign-standard/event-reference"
                            },
                            {
                                title: "Campaign push notifications",
                                path: "documentation/solution-extensions/adobe-campaign-standard/push-notifications"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/solution-extensions/adobe-campaign-standard/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Audience Manager",
                        path: "/documentation/solution-extensions/adobe-audience-manager/",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/solution-extensions/adobe-audience-manager/"
                            },
                            {
                                title: "API reference",
                                path: "documentation/solution-extensions/adobe-audience-manager/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "documentation/solution-extensions/adobe-audience-manager/event-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/documentation/solution-extensions/adobe-audience-manager/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Media Analytics",
                        path: "/documentation/solution-extensions/adobe-media-analytics",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/solution-extensions/adobe-media-analytics"
                            },
                            {
                                title: "API reference",
                                path: "documentation/solution-extensions/adobe-media-analytics/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/solution-extensions/adobe-media-analytics/release-notes"
                            },
                            {
                                title: "Migration Guide",
                                path: "/documentation/solution-extensions/adobe-media-analytics/migration-guide"
                            },
                        ]
                    },
                    {
                        title: "Adobe Target",
                        path: "/documentation/solution-extensions/adobe-target",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/solution-extensions/adobe-target"
                            },
                            {
                                title: "API reference",
                                path: "documentation/solution-extensions/adobe-target/api-reference"
                            },
                            {
                                title: "Raw API reference",
                                path: "documentation/solution-extensions/adobe-target/raw-api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "documentation/solution-extensions/adobe-target/event-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/solution-extensions/adobe-target/release-notes"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Base extensions",
                path: "/documentation/base-extensions",
                pages: [{
                        title: "Overview",
                        path: "/documentation/base-extensions"
                    },
                    {
                        title: "Mobile Core",
                        path: "/documentation/base-extensions/mobile-core",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/base-extensions/mobile-core"
                            },
                            {
                                title: "Configuration",
                                path: "documentation/base-extensions/mobile-core/configuration",
                                pages: [{
                                        title: "Overview",
                                        path: "documentation/base-extensions/mobile-core/configuration"
                                    },
                                    {
                                        title: "API reference",
                                        path: "documentation/base-extensions/mobile-core/configuration/api-reference"
                                    }
                                ]
                            },
                            {
                                title: "Identity",
                                path: "documentation/base-extensions/mobile-core/identity",
                                pages: [{
                                        title: "Overview",
                                        path: "documentation/base-extensions/mobile-core/identity"
                                    },
                                    {
                                        title: "API reference",
                                        path: "documentation/base-extensions/mobile-core/identity/api-reference"
                                    },
                                    {
                                        title: "Push identifier sync",
                                        path: "documentation/base-extensions/mobile-core/identity/push-sync"
                                    }
                                ]
                            },
                            {
                                title: "Lifecycle",
                                path: "documentation/base-extensions/mobile-core/lifecycle",
                                pages: [{
                                        title: "Overview",
                                        path: "documentation/base-extensions/mobile-core/lifecycle"
                                    },
                                    {
                                        title: "Lifecycle extension in Android",
                                        path: "documentation/base-extensions/mobile-core/lifecycle/android"
                                    },
                                    {
                                        title: "Lifecycle extension in iOS",
                                        path: "documentation/base-extensions/mobile-core/lifecycle/ios"
                                    },
                                    {
                                        title: "API reference",
                                        path: "documentation/base-extensions/mobile-core/lifecycle/api-reference"
                                    },
                                    {
                                        title: "Metrics",
                                        path: "documentation/base-extensions/mobile-core/lifecycle/metrics"
                                    },
                                    {
                                        title: "Configuration keys",
                                        path: "documentation/base-extensions/mobile-core/lifecycle/configuration-keys"
                                    }
                                ]
                            },
                            {
                                title: "Platform services",
                                path: "documentation/base-extensions/mobile-core/platform-services",
                                pages: [{
                                        title: "Overview",
                                        path: "documentation/base-extensions/mobile-core/platform-services"
                                    },
                                    {
                                        title: "Network service",
                                        path: "documentation/base-extensions/mobile-core/platform-services/network-service"
                                    }
                                ]
                            },
                            {
                                title: "Rules Engine",
                                path: "documentation/base-extensions/mobile-core/rules-engine",
                                pages: [{
                                        title: "Overview",
                                        path: "documentation/base-extensions/mobile-core/rules-engine"
                                    },
                                    {
                                        title: "Technical details",
                                        path: "documentation/base-extensions/mobile-core/rules-engine/technical-details"
                                    },
                                    {
                                        title: "Consequence details",
                                        path: "documentation/base-extensions/mobile-core/rules-engine/consequence-details"
                                    }
                                ]
                            },
                            {
                                title: "Signal",
                                path: "documentation/base-extensions/mobile-core/signal",
                                pages: [{
                                        title: "Overview",
                                        path: "documentation/base-extensions/mobile-core/signal"
                                    },
                                    {
                                        title: "API reference",
                                        path: "documentation/base-extensions/mobile-core/signal/api-reference"
                                    },
                                    {
                                        title: "Signal and Rules Engine integration",
                                        path: "documentation/base-extensions/mobile-core/signal/rules-engine-integration.md"
                                    }
                                ]
                            },
                            {
                                title: "API reference",
                                path: "documentation/base-extensions/mobile-core/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/base-extensions/mobile-core/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Experience Platform Assurance",
                        path: "/documentation/platform-assurance-sdk",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/platform-assurance-sdk"
                            },
                            {
                                title: "API reference",
                                path: "/documentation/platform-assurance-sdk/api-reference"
                            },
                            {
                                title: "Resolving common issues",
                                path: "/documentation/platform-assurance-sdk/common-issues/"
                            },
                            {
                                title: "Release notes",
                                path: "/documentation/platform-assurance-sdk/release-notes"
                            }
                        ]
                    },


                    {
                        title: "Adobe Experience Platform Location Service",
                        path: "/documentation/solution-extensions/places",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/solution-extensions/places"
                            },
                            {
                                title: "API reference",
                                path: "documentation/solution-extensions/places/api-reference.md"
                            },
                            {
                                title: "Event forwarding to Adobe Experience Platform",
                                path: "documentation/solution-extensions/places/places-to-platform.md"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/solution-extensions/places/release-notes.md"
                            }
                        ]
                    },
                    {
                        title: "Profile",
                        path: "/documentation/profile",
                        pages: [{
                                title: "Overview",
                                path: "/documentation/profile"
                            },
                            {
                                title: "API reference",
                                path: "documentation/profile/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/profile/release-notes"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Resources",
                path: "/documentation/resources",
                pages: [{
                        title: "Overview",
                        path: "documentation/resources"
                    },
                    {
                        title: "Aligning major SDK versions",
                        path: "documentation/resources/major-version-alignment"
                    },
                    {
                        title: "Manage Gradle dependencies",
                        path: "documentation/resources/manage-gradle-dependencies"
                    },
                    {
                        title: "Manage SPM dependencies",
                        path: "documentation/resources/manage-spm-dependencies"
                    },
                    {
                        title: "Privacy and GDPR",
                        path: "documentation/resources/privacy-and-gdpr"
                    },
                    {
                        title: "Frequently asked questions",
                        path: "documentation/resources/faq"
                    },
                    {
                        title: "ACP SDKs end-of-support",
                        path: "/documentation/resources/acp-end-of-support"
                    },
                    {
                        title: "Adobe Mobile Library (v4) end-of-support",
                        path: "documentation/resources/upgrade-platform-sdks",
                        pages: [{
                                title: "Overview",
                                path: "documentation/resources/upgrade-platform-sdks"
                            },
                            {
                                title: "v4 SDK comparison",
                                path: "documentation/resources/upgrade-platform-sdks/comparison"
                            },
                            {
                                title: "v4 API changelog",
                                path: "documentation/resources/upgrade-platform-sdks/api-changelog.md"
                            },
                            {
                                title: "Manual Lifecycle implementation",
                                path: "documentation/resources/upgrade-platform-sdks/lifecycle"
                            },
                            {
                                title: "Analytics migration",
                                path: "documentation/resources/upgrade-platform-sdks/analytics.md"
                            },
                            {
                                title: "Frequently asked questions",
                                path: "documentation/resources/upgrade-platform-sdks/v4-faq"
                            }
                        ]
                    },
                    {
                        title: "Adobe Experience Cloud & Apple's IDFA, Privacy announcement",
                        path: "documentation/resources/privacy-announcement"
                    }

                ]
            },
            {
                title: "User guides",
                path: "documentation/resources/user-guides",
                pages: [{
                        title: "Overview",
                        path: "documentation/resources/user-guides"
                    },
                    {
                        title: "Getting started with Platform",
                        path: "documentation/resources/user-guides/getting-started-with-platform/overview",
                        pages: [{
                                title: "Overview",
                                path: "documentation/resources/user-guides/getting-started-with-platform/overview"
                            },
                            {
                                title: "Sample XDM implementation",
                                path: "documentation/resources/user-guides/getting-started-with-platform/sample-xdm-implementation"
                            },
                            {
                                title: "Rules and XDM events",
                                path: "documentation/resources/user-guides/getting-started-with-platform/rules-and-xdm-events"
                            }
                        ]
                    },
                    {
                        title: "Attach data to SDK events",
                        path: "documentation/resources/user-guides/attach-data"
                    },
                    {
                        title: "Modify data in SDK events",
                        path: "documentation/resources/user-guides/modify-data"
                    },
                    {
                        title: "Tags data elements",
                        path: "documentation/resources/user-guides/tags-data-elements"
                    },
                    {
                        title: "iOS App Extensions",
                        path: "documentation/resources/user-guides/app-extension"
                    },
                    {
                        title: "Building mobile extensions",
                        path: "documentation/resources/user-guides/building-mobile-extensions"
                    }
                ]
            }
        ]
    },
    plugins: [`@adobe/gatsby-theme-aio`],
    pathPrefix: process.env.PATH_PREFIX || '/client-sdks/'
};