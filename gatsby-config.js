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
        versions: [
            {
                title: 'Latest version',
                path: '/client-sdks/documentation/',
                selected: true
              },
              {
                title: 'Previous versions',
                path: '/client-sdks/previous-versions/'
              }
          ],
        pages: [{
            title: 'Documentation',
            path: '/documentation',
        }],
        subPages: [
            {
                title: "Home",
                path: "/documentation"
            },
            {
                title: "Current SDK versions",
                path: "documentation/current-sdk-versions"
            },
            {
                title: "Release notes",
                path: "/documentation/release-notes",
                pages: [
                    {
                        title: "2023",
                        path: "/documentation/release-notes"
                    },
                    {
                        title: "2022",
                        path: "/documentation/release-notes/2022"
                    },
                    {
                        title: "2021",
                        path: "/documentation/release-notes/2021"
                    }
                ]
            },
            {
                title: "Getting started",
                path: "/documentation/getting-started",
                pages: [
                    {
                        title: "Overview",
                        path: "/documentation/getting-started"
                    },
                    {
                        title: "Set up schemas and datasets",
                        path: "/documentation/getting-started/set-up-schemas-and-datasets"
                    },
                    {
                        title: "Configure datastreams",
                        path: "/documentation/getting-started/configure-datastreams"
                    },
                    {
                        title: "Set up a mobile property",
                        path: "/documentation/getting-started/create-a-mobile-property"
                    },
                    {
                        title: "Get the Experience Platform SDK",
                        path: "/documentation/getting-started/get-the-sdk"
                    },
                    {
                        title: "Debugging and lifecycle metrics",
                        path: "/documentation/getting-started/enable-debug-logging"
                    },
                    {
                        title: "Track events",
                        path: "/documentation/getting-started/track-events"
                    },
                    {
                        title: "Validation and next steps",
                        path: "/documentation/getting-started/validate"
                    }
                ]
            },
            {
                title: "Mobile Foundation extensions",
                path: "/documentation/mobile-foundation-extensions",
                pages: [
                    {
                        title: "Overview",
                        path: "/documentation/mobile-foundation-extensions"
                    },
                    {
                        title: "Mobile Core",
                        path: "/documentation/mobile-core",
                        pages: [
                            {
                                title: "Overview",
                                path: "/documentation/mobile-core"
                            },
                            {
                                title: "Configuration",
                                path: "documentation/mobile-core/configuration",
                                pages: [
                                    {
                                        title: "Overview",
                                        path: "documentation/mobile-core/configuration"
                                    },
                                    {
                                        title: "API reference",
                                        path: "documentation/mobile-core/configuration/api-reference"
                                    }
                                ]
                            },
                            {
                                title: "Identity",
                                path: "documentation/mobile-core/identity",
                                pages: [
                                    {
                                        title: "Overview",
                                        path: "documentation/mobile-core/identity"
                                    },
                                    {
                                        title: "API reference",
                                        path: "documentation/mobile-core/identity/api-reference"
                                    }
                                ]
                            },
                            {
                                title: "Lifecycle",
                                path: "documentation/mobile-core/lifecycle",
                                pages: [
                                    {
                                        title: "Overview",
                                        path: "documentation/mobile-core/lifecycle"
                                    },
                                    {
                                        title: "Lifecycle extension in Android",
                                        path: "documentation/mobile-core/lifecycle/android"
                                    },
                                    {
                                        title: "Lifecycle extension in iOS",
                                        path: "documentation/mobile-core/lifecycle/ios"
                                    },
                                    {
                                        title: "API reference",
                                        path: "documentation/mobile-core/lifecycle/api-reference"
                                    },
                                    {
                                        title: "Metrics",
                                        path: "documentation/mobile-core/lifecycle/metrics"
                                    },
                                    {
                                        title: "Configuration keys",
                                        path: "documentation/mobile-core/lifecycle/configuration-keys"
                                    }
                                ]
                            },
                            {
                                title: "Platform services",
                                path: "documentation/mobile-core/platform-services",
                                pages: [
                                    {
                                        title: "Overview",
                                        path: "documentation/mobile-core/platform-services"
                                    },
                                    {
                                        title: "Network service",
                                        path: "documentation/mobile-core/platform-services/network-service"
                                    }
                                ]
                            },
                            {
                                title: "Rules Engine",
                                path: "documentation/mobile-core/rules-engine",
                                pages: [
                                    {
                                        title: "Overview",
                                        path: "documentation/mobile-core/rules-engine"
                                    },
                                    {
                                        title: "Technical details",
                                        path: "documentation/mobile-core/rules-engine/technical-details"
                                    },
                                    {
                                        title: "Consequence details",
                                        path: "documentation/mobile-core/rules-engine/consequence-details"
                                    }
                                ]
                            },
                            {
                                title: "Signal",
                                path: "documentation/mobile-core/signal",
                                pages: [
                                    {
                                        title: "Overview",
                                        path: "documentation/mobile-core/signal"
                                    },
                                    {
                                        title: "API reference",
                                        path: "documentation/mobile-core/signal/api-reference"
                                    }
                                ]
                            },
                            {
                                title: "API reference",
                                path: "documentation/mobile-core/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/mobile-core/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Experience Platform Edge Network",
                        path: "/documentation/edge-network",
                        pages: [
                            {
                                title: "Overview",
                                path: "/documentation/edge-network"
                            },
                            {
                                title: "API reference",
                                path: "/documentation/edge-network/api-reference"
                            },
                            {
                                title: "XDM Experience Events",
                                path: "/documentation/edge-network/xdm-experience-events"
                            },
                            {
                                title: "Validation",
                                path: "/documentation/edge-network/validation"
                            },
                            {
                                title: "Release notes",
                                path: "/documentation/edge-network/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Consent for Edge Network",
                        path: "/documentation/consent-for-edge-network",
                        pages: [
                            {
                                title: "Overview",
                                path: "/documentation/consent-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "documentation/consent-for-edge-network/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/consent-for-edge-network/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Identity for Edge Network",
                        path: "/documentation/identity-for-edge-network",
                        pages: [
                            {
                                title: "Overview",
                                path: "/documentation/identity-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "documentation/identity-for-edge-network/api-reference"
                            },
                            {
                                title: "Frequently asked questions",
                                path: "documentation/identity-for-edge-network/faq"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/identity-for-edge-network/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Lifecycle for Edge Network",
                        path: "/documentation/lifecycle-for-edge-network",
                        pages: [
                            {
                                title: "Overview",
                                path: "/documentation/lifecycle-for-edge-network"
                            },
                            {
                                title: "API reference",
                                path: "documentation/lifecycle-for-edge-network/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "documentation/lifecycle-for-edge-network/event-reference"
                            },
                            {
                                title: "Metrics",
                                path: "documentation/lifecycle-for-edge-network/metrics"
                            }
                        ]
                    },
                    {
                        title: "Adobe Experience Platform Assurance",
                        path: "/documentation/platform-assurance-sdk",
                        pages: [
                            {
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
                path: "/documentation/places",
                pages: [
                    {
                        title: "Overview",
                        path: "/documentation/places"
                    },
                    {
                        title: "API reference",
                        path: "documentation/places/api-reference.md"
                    }
                ]
            },
            {
                title: "Profile",
                path: "/documentation/profile",
                pages: [
                    {
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
                title: "Experience Cloud extensions",
                path: "/documentation/experience-cloud-extensions",
                pages: [
                    {
                        title: "Overview",
                        path: "/documentation/experience-cloud-extensions"
                    },
                    {
                        title: 'Adobe Analytics',
                        path: '/documentation/adobe-analytics/',
                        pages: [
                            {
                                title: "Overview",
                                path: "/documentation/adobe-analytics"
                            },
                            {
                                title: "API reference",
                                path: "/documentation/adobe-analytics/api-reference/"
                            },
                            {
                                title: 'Event reference',
                                path: '/documentation/adobe-analytics/event-reference/'
                            },
                            {
                                title: "Product variable",
                                path: "/documentation/adobe-analytics/product-variable"
                            },
                            {
                                title: "Frequently asked questions",
                                path: "/documentation/adobe-analytics/faq/"
                            },
                            {
                                title: 'Release notes',
                                path: '/documentation/adobe-analytics/release-notes/'
                            }
                        ]
                    },
                    {
                        title: "Adobe Media Analytics",
                        path: "/documentation/adobe-media-analytics",
                        pages: [
                            {
                                title: "Overview",
                                path: "/documentation/adobe-media-analytics"
                            },
                            {
                                title: "API reference",
                                path: "documentation/adobe-media-analytics/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/adobe-media-analytics/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Audience Manager",
                        path: "/documentation/adobe-audience-manager/",
                        pages: [
                            {
                                title: "Overview",
                                path: "/documentation/adobe-audience-manager/"
                            },
                            {
                                title: "API reference",
                                path: "documentation/adobe-audience-manager/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "documentation/adobe-audience-manager/event-reference"
                            },
                            {
                                title: "Release notes",
                                path: "/documentation/adobe-audience-manager/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Campaign Classic",
                        path: "/documentation/adobe-campaign-classic",
                        pages: [
                            {
                                title: "Overview",
                                path: "/documentation/adobe-campaign-classic"
                            },
                            {
                                title: "API reference",
                                path: "documentation/adobe-campaign-classic/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "documentation/adobe-campaign-classic/event-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/adobe-campaign-classic/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Campaign Standard",
                        path: "/documentation/adobe-campaign-standard",
                        pages: [
                            {
                                title: "Overview",
                                path: "/documentation/adobe-campaign-standard"
                            },
                            {
                                title: "API reference",
                                path: "documentation/adobe-campaign-standard/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "documentation/adobe-campaign-standard/event-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/adobe-campaign-standard/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Journey Optimizer",
                        path: "/documentation/adobe-journey-optimizer",
                        pages: [
                            {
                                title: "Overview",
                                path: "/documentation/adobe-journey-optimizer"
                            },
                            {
                                title: "API reference",
                                path: "documentation/adobe-journey-optimizer/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/adobe-journey-optimizer/release-notes"
                            },
                            {
                                title: "In-app messaging",
                                path: "/documentation/adobe-journey-optimizer/iam",
                                pages: [
                                    {
                                        title: "Overview",
                                        path: "/documentation/adobe-journey-optimizer/iam"
                                    },
                                    {
                                        title: "Prerequisites",
                                        path: "/documentation/adobe-journey-optimizer/iam/prerequisites"
                                    },
                                    {
                                        title: "SDK setup",
                                        path: "/documentation/adobe-journey-optimizer/iam/setup"
                                    },
                                    {
                                        title: "API reference",
                                        path: "/documentation/adobe-journey-optimizer/iam/api-reference"
                                    },
                                    {
                                        title: "Public classes and enums",
                                        path: "/documentation/adobe-journey-optimizer/iam/public-classes"
                                    },
                                    {
                                        title: "Tutorials",
                                        path: "/documentation/adobe-journey-optimizer/iam/tutorials",
                                        pages: [
                                            {
                                                title: "Implement a MessagingDelegate",
                                                path: "/documentation/adobe-journey-optimizer/iam/tutorials/messaging-delegate"
                                            },
                                            {
                                                title: "Call native code from the JavaScript of an in-app message",
                                                path: "/documentation/adobe-journey-optimizer/iam/tutorials/native-from-javascript"
                                            },
                                            {
                                                title: "Execute Javascript methods from native code",
                                                path: "/documentation/adobe-journey-optimizer/iam/tutorials/javascript-from-native"
                                            },
                                            {
                                                title: "Handle URL clicks from an in-app message",
                                                path: "/documentation/adobe-journey-optimizer/iam/tutorials/handle-clicks"
                                            },
                                            {
                                                title: "Validate in-app messaging using Assurance",
                                                path: "/documentation/adobe-journey-optimizer/iam/tutorials/validate-messages"
                                            }
                                        ]
                                    }

                                ]
                            }
                        ]
                    },
                    {
                        title: "Adobe Journey Optimizer Decisioning",
                        path: "/documentation/adobe-journey-optimizer-decisioning",
                        pages: [
                            {
                                title: "Overview",
                                path: "/documentation/adobe-journey-optimizer-decisioning"
                            },
                            {
                                title: "API reference",
                                path: "documentation/adobe-journey-optimizer-decisioning/api-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/adobe-journey-optimizer-decisioning/release-notes"
                            }
                        ]
                    },
                    {
                        title: "Adobe Target",
                        path: "/documentation/adobe-target",
                        pages: [
                            {
                                title: "Overview",
                                path: "/documentation/adobe-target"
                            },
                            {
                                title: "API reference",
                                path: "documentation/adobe-target/api-reference"
                            },
                            {
                                title: "Event reference",
                                path: "documentation/adobe-target/event-reference"
                            },
                            {
                                title: "Release notes",
                                path: "documentation/adobe-target/release-notes"
                            },
                            {
                                title: "Deprecated APIs",
                                path: "documentation/adobe-target/deprecated-apis"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Adobe Experience Platform Assurance",
                path: "/documentation/platform-assurance",
                pages: [
                    {
                        title: "Overview",
                        path: "/documentation/platform-assurance"
                    },
                    {
                        title: "Using Assurance",
                        path: "/documentation/platform-assurance/tutorials",
                        pages: [
                            {
                                title: "Event Transactions",
                                path: "/documentation/platform-assurance/tutorials/event-transactions.md"
                            },
                            {
                                title: "Adobe Analytics",
                                path: "/documentation/platform-assurance/tutorials/adobe-analytics.md"
                            },
                            {
                                title: "Adobe Analytics for Streaming Media",
                                path: "/documentation/platform-assurance/tutorials/adobe-analytics-streaming-media.md"
                            },
                            {
                                title: "In-App Messaging",
                                path: "/documentation/platform-assurance/tutorials/in-app-messaging.md"
                            },
                            {
                                title: "Places Service",
                                path: "/documentation/platform-assurance/tutorials/places-service"
                            },
                            {
                                title: "Push Debug",
                                path: "/documentation/platform-assurance/tutorials/push-debug-view"
                            },
                            {
                                title: "On-device views",
                                path: "/documentation/platform-assurance/tutorials/on-device-views.md"
                            },
                            {
                                title: "Validation Editor",
                                path: "/documentation/platform-assurance/tutorials/validation-summary.md"
                            },
                            {
                                title: "Versions",
                                path: "/documentation/platform-assurance/tutorials/versions.md"
                            }
                        ]
                    },
                    {
                        title: "Get access",
                        path: "/documentation/platform-assurance/get-access/"
                    },
                    {
                        title: "Set up",
                        path: "/documentation/platform-assurance/set-up.md"
                    },
                    {
                        title: "Troubleshooting",
                        path: "/documentation/platform-assurance/troubleshooting.md"
                    }
                ]
            },


            {
                title: "Building mobile extensions",
                path: "/documentation/building-mobile-extensions",
                pages: [
                    {
                        title: "Overview",
                        path: "/documentation/building-mobile-extensions"
                    },
                    {
                        title: "Event processing",
                        path: "documentation/building-mobile-extensions/event-processing"
                    },
                    {
                        title: "Shared states and events",
                        path: "documentation/building-mobile-extensions/shared-states-and-events"
                    },
                    {
                        title: "Building an extension",
                        path: "documentation/building-mobile-extensions/building-extension"
                    },
                    {
                        title: "Listening for events",
                        path: "documentation/building-mobile-extensions/listening-for-events"
                    },
                    {
                        title: "Dispatching events from your extension",
                        path: "documentation/building-mobile-extensions/dispatching-events"
                    },
                    {
                        title: "Building a tag extension interface",
                        path: "documentation/building-mobile-extensions/building-tag-extension-interface"
                    },
                    {
                        title: "Interacting with rules",
                        path: "documentation/building-mobile-extensions/interacting-with-rules"
                    },
                    {
                        title: "Get the application context",
                        path: "documentation/building-mobile-extensions/get-application-context"
                    },
                    {
                        title: "Extension logging",
                        path: "documentation/building-mobile-extensions/extension-logging"
                    },
                    {
                        title: "Mobile extension samples",
                        path: "documentation/building-mobile-extensions/mobile-extension-samples"
                    }
                ]
            },
            {
                title: "Resources",
                path: "/documentation/resources",
                pages: [
                    {
                        title: "Overview",
                        path: "/documentation/resources"
                    },
                    {
                        title: "Upgrade to the Experience Platform SDKs",
                        path: "documentation/upgrade-platform-sdks",
                        pages: [
                            {
                                title: "Overview",
                                path: "documentation/upgrade-platform-sdks"
                            },
                            {
                                title: "v4 SDK comparison",
                                path: "documentation/upgrade-platform-sdks/comparison"
                            },
                            {
                                title: "v4 API changelog",
                                path: "documentation/upgrade-platform-sdks/api-changelog.md"
                            },
                            {
                                title: "Manual Lifecycle implementation",
                                path: "documentation/upgrade-platform-sdks/lifecycle"
                            },
                            {
                                title: "Analytics migration",
                                path: "documentation/upgrade-platform-sdks/analytics-comparison.md"
                            }
                        ]
                    },
                    {
                        title: "Troubleshooting guides",
                        path: "documentation/troubleshooting-guides",
                        pages: [
                            {
                                title: "Overview",
                                path: "documentation/troubleshooting-guides"
                            },
                            {
                                title: "Push messaging",
                                path: "documentation/troubleshooting-guides/push-messaging"
                            },
                            {
                                title: "Campaign push notifications",
                                path: "documentation/troubleshooting-guides/push-notifications"
                            }
                        ]
                    },
                    {
                        title: "Frequently asked questions",
                        path: "documentation/faq"
                    },
                    {
                        title: "Privacy and GDPR",
                        path: "documentation/privacy-and-gdpr"
                    },
                    {
                        title: "Manage Gradle dependencies",
                        path: "documentation/manage-gradle-dependencies"
                    },
                    {
                        title: "Manage SPM dependencies",
                        path: "documentation/manage-spm-dependencies"
                    },
                    {
                        title: "Version 4 Mobile SDKs end-of-support FAQ",
                        path: "/documentation/v4-end-of-life-faq"
                    },
                    {
                        title: "Adobe Experience Cloud & Apple's IDFA, Privacy announcement",
                        path: "/documentation/privacy-announcement"
                    }
                ]
            },
            {
                title: "User guides",
                path: "documentation/user-guides",
                pages: [
                    {
                        title: "Overview",
                        path: "documentation/user-guides"
                    },
                    {
                        title: "Getting started with Platform",
                        path: "documentation/user-guides/getting-started-with-platform/overview",
                        pages: [
                            {
                                title: "Overview",
                                path: "documentation/user-guides/getting-started-with-platform/overview"
                            },
                            {
                                title: "Sample XDM implementation",
                                path: "documentation/user-guides/getting-started-with-platform/sample-xdm-implementation"
                            },
                            {
                                title: "Rules and XDM events",
                                path: "documentation/user-guides/getting-started-with-platform/rules-and-xdm-events"
                            }
                        ]
                    },
                    {
                        title: "Attach data to SDK events",
                        path: "documentation/user-guides/attach-data"
                    },
                    {
                        title: "Modify data in SDK events",
                        path: "documentation/user-guides/modify-data"
                    },
                    {
                        title: "Tags data elements",
                        path: "documentation/user-guides/tags-data-elements"
                    },
                    {
                        title: "Signal and rules engine integration",
                        path: "documentation/user-guides/rules-engine-integration.md"
                    },
                    {
                        title: "iOS App Extensions",
                        path: "documentation/user-guides/app-extension"
                    },
                    {
                        title: "Tracking beacons",
                        path: "documentation/user-guides/track-beacon"
                    }
                ]
            }
        ]
    },
    plugins: [`@adobe/gatsby-theme-aio`],
    pathPrefix: process.env.PATH_PREFIX || '/client-sdks/'
};
