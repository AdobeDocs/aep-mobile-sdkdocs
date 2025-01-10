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
                pages: [
                    {
                        title: "2025",
                        path: "/home/release-notes"
                    },
                    {
                        title: "2024",
                        path: "/home/release-notes/2024"
                    },
                    {
                        title: "2023",
                        path: "/home/release-notes/2023"
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
                        title: "Debugging and lifecycle data",
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
                                path: "/edge/edge-network/validation",
                                pages: [
                                    {
                                        title: "Validation",
                                        path: "/edge/edge-network/validation/validation"
                                    },
                                    {
                                        title: "Analytics data validation",
                                        path: "/edge/edge-network/validation/edge-analytics-validation"
                                    }
                                ]

                            },
                            {
                                title: "Tutorials",
                                path: "/edge/edge-network/tutorials",
                                pages: [
                                    {
                                        title: "Sending configuration overrides using sendEvent",
                                        path: "/edge/edge-network/tutorials/send-overrides-sendevent"
                                    },
                                    {
                                        title: "Sending configuration overrides using Rules",
                                        path: "/edge/edge-network/tutorials/send-overrides-rules"
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
                                title: "AJO edge events for propositions",
                                path: "/edge/adobe-journey-optimizer/proposition-edge-events"
                            },
                            {
                                title: "Push Notifications",
                                path: "/edge/adobe-journey-optimizer/push-notification",
                                pages: [
                                    {
                                        title: "iOS",
                                        path: "/edge/adobe-journey-optimizer/push-notification/ios/api-reference",
                                        pages: [
                                            {
                                                title: "API reference",
                                                path: "/edge/adobe-journey-optimizer/push-notification/ios/api-reference"
                                            },
                                            {
                                                title: "Display rich notifications",
                                                path: "/edge/adobe-journey-optimizer/push-notification/ios/display-rich-notifications"
                                            }
                                        ]
                                    },
                                    {
                                        title: "Android",
                                        path: "/edge/adobe-journey-optimizer/push-notification/android/automatic-display-and-tracking",
                                        pages: [
                                            {
                                                title: "Automatic display and tracking",
                                                path: "/edge/adobe-journey-optimizer/push-notification/android/automatic-display-and-tracking"
                                            },
                                            {
                                                title: "Manual display and tracking",
                                                path: "/edge/adobe-journey-optimizer/push-notification/android/manual-display-and-tracking"
                                            }                                            
                                        ]
                                    },
                                    {
                                        title: "Payload keys",
                                        path: "/edge/adobe-journey-optimizer/push-notification/push-payload"
                                    }
                                ]
                            },
                            {
                                title: "In-App Messaging",
                                path: "/edge/adobe-journey-optimizer/in-app-message",
                                pages: [
                                    {
                                        title: "API reference",
                                        path: "/edge/adobe-journey-optimizer/in-app-message/api-reference"
                                    },
                                    {
                                        title: "Tutorials",
                                        path: "/edge/adobe-journey-optimizer/in-app-message/tutorials/messaging-delegate",
                                        pages: [
                                            {
                                                title: "Programmatically control the display of in-app messages",
                                                path: "/edge/adobe-journey-optimizer/in-app-message/tutorials/messaging-delegate"
                                            },
                                            {
                                                title: "Call native code from the JavaScript of an in-app message",
                                                path: "/edge/adobe-journey-optimizer/in-app-message/tutorials/native-from-javascript"
                                            },
                                            {
                                                title: "Execute Javascript methods from native code",
                                                path: "/edge/adobe-journey-optimizer/in-app-message/tutorials/javascript-from-native"
                                            },
                                            {
                                                title: "Handle URL clicks from an in-app message",
                                                path: "/edge/adobe-journey-optimizer/in-app-message/tutorials/handle-clicks"
                                            }
                                        ]
                                    },
                                    {
                                        title: "Validate using Assurance",
                                        path: "/edge/adobe-journey-optimizer/in-app-message/validate-messages"
                                    }
                                ]
                            },
                            {
                                title: "Content cards with UI",
                                path: "/edge/adobe-journey-optimizer/content-card-ui/iOS",
                                pages: [
                                    {
                                        title: "iOS",
                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS",
                                        pages: [
                                            {
                                                title: "API Reference",
                                                path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/api-usage.md"
                                            },
                                            {
                                                title: "Public Classes and Protocol",
                                                path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/public-classes/contentcardui",
                                                pages: [
                                                    {
                                                        title: "ContentCardUI",
                                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/public-classes/contentcardui",
                                                    },
                                                    {
                                                        title: "ContenCardCustomizing",
                                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/public-classes/contentcardcustomizing",
                                                    },
                                                    {
                                                        title: "ContentCardUIEventListening",
                                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/public-classes/contentcarduieventlistening",
                                                    },
                                                    {
                                                        title: "ContentCardTemplateType",
                                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/public-classes/contentcardtemplatetype",
                                                    }
                                                ]
                                            },
                                            {
                                                title: "Templates",
                                                path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/templates/smallimage-template",
                                                pages: [
                                                    {
                                                        title: "Small Image",
                                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/templates/smallimage-template",
                                                    }
                                                ]
                                            },
                                            {
                                                title: "UIElements",
                                                path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/ui-elements/",
                                                pages: [
                                                    {
                                                        title: "AEPText",
                                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/ui-elements/aeptext"
                                                    },
                                                    {
                                                        title: "AEPButton",
                                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/ui-elements/aepbutton"
                                                    },
                                                    {
                                                        title: "AEPImage",
                                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/ui-elements/aepimage"
                                                    },
                                                    {
                                                        title: "AEPStack",
                                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/ui-elements/aepstack"
                                                    },
                                                    {
                                                        title: "AEPDismissButton",
                                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/ui-elements/aepdismissbutton"
                                                    }
                                                ]
                                            },
                                            {
                                                title: "Tutorials",
                                                path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/tutorial/displaying-content-cards",
                                                pages: [
                                                    {
                                                        title: "Fetch and Display Content Cards",
                                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/tutorial/displaying-content-cards",
                                                    },
                                                    {
                                                        title: "Customizing Content Cards",
                                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/tutorial/customizing-content-card-templates",
                                                    },
                                                    {
                                                        title: "Listening to Content Card Events",
                                                        path: "/edge/adobe-journey-optimizer/content-card-ui/iOS/tutorial/listening-content-card-events",
                                                    }
                                                ]
                                            }
                                        ]                                        
                                    }
                                ]
                            },
                            {
                                title: "Code-based Experiences & Content Cards",
                                path: "/edge/adobe-journey-optimizer/code-based",
                                pages: [
                                    {
                                        title: "API reference",
                                        path: "/edge/adobe-journey-optimizer/code-based/api-reference"
                                    },
                                    {
                                        title: "Code-based experiences & Content Cards tutorial",
                                        path: "/edge/adobe-journey-optimizer/code-based/tutorial"
                                    }
                                ]
                            },
                            {
                                title: "Public classes and enums",
                                path: "/edge/adobe-journey-optimizer/public-classes",
                                pages: [
                                    {
                                        title: "ContentCard",
                                        path: "/edge/adobe-journey-optimizer/public-classes/content-card"
                                    },
                                    {
                                        title: "ContentCardSchemaData",
                                        path: "/edge/adobe-journey-optimizer/public-classes/content-card-schema-data"
                                    },
                                    {
                                        title: "ContentType",
                                        path: "/edge/adobe-journey-optimizer/public-classes/content-type"
                                    },
                                    {
                                        title: "HtmlContentSchemaData",
                                        path: "/edge/adobe-journey-optimizer/public-classes/html-content-schema-data"
                                    },
                                    {
                                        title: "InAppSchemaData",
                                        path: "/edge/adobe-journey-optimizer/public-classes/inapp-schema-data"
                                    },
                                    {
                                        title: "JsonContentSchemaData",
                                        path: "/edge/adobe-journey-optimizer/public-classes/json-content-schema-data"
                                    },
                                    {
                                        title: "Message",
                                        path: "/edge/adobe-journey-optimizer/public-classes/message"
                                    },
                                    {
                                        title: "MessagingEdgeEventType",
                                        path: "/edge/adobe-journey-optimizer/public-classes/messaging-edge-event-type"
                                    },
                                    {
                                        title: "MessagingPushPayload",
                                        path: "/edge/adobe-journey-optimizer/public-classes/messaging-push-payload"
                                    },
                                    {
                                        title: "Proposition",
                                        path: "/edge/adobe-journey-optimizer/public-classes/proposition"
                                    },
                                    {
                                        title: "PropositionItem",
                                        path: "/edge/adobe-journey-optimizer/public-classes/proposition-item"
                                    },
                                    {
                                        title: "PushTrackingStatus",
                                        path: "/edge/adobe-journey-optimizer/public-classes/push-tracking-status"
                                    },
                                    {
                                        title: "Surface",
                                        path: "/edge/adobe-journey-optimizer/public-classes/surface"
                                    }
                                ]
                            },
                            {
                                title: "Release notes",
                                path: "/edge/adobe-journey-optimizer/release-notes"
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
                                title: "Behavior reference",
                                path: "/edge/lifecycle-for-edge-network/behavior-reference"
                            },
                            {
                                title: "Data reference",
                                path: "/edge/lifecycle-for-edge-network/metrics"
                            },
                            {
                                title: "Migration reference",
                                path: "/edge/lifecycle-for-edge-network/migration-reference"
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
                                title: "Push templates",
                                path: "/solution/adobe-campaign-classic/push-templates"
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
                                        title: "Tutorials",
                                        path: "/home/base/mobile-core/identity/tutorials",
                                        pages: [
                                            {
                                                title: "Mobile to web identity sharing",
                                                path: "/home/base/mobile-core/identity/tutorials/id-sharing"
                                            },
                                            {
                                                title: "Push identifier sync",
                                                path: "/home/base/mobile-core/identity/tutorials/push-sync"
                                            }
                                        ]
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
                                        title: "Event reference",
                                        path: "/home/base/mobile-core/lifecycle/event-reference"
                                    },
                                    {
                                        title: "Behavior reference",
                                        path: "/home/base/mobile-core/lifecycle/behavior-reference"
                                    },
                                    {
                                        title: "Data reference",
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
                        pages: [
                            {
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
                    },
                    {
                        title: "iOS 17 Privacy Manifest Requirements",
                        path: "/resources/privacy-manifest.md"
                    }
                ]
            },
            {
                title: "Migration",
                path: "/resources/migration",
                pages: [{
                        title: "Android",
                        path: "/resources/migration/android",
                        pages: [{
                                title: "Migrate to 3.x SDKs",
                                path: "/resources/migration/android/migrate-to-3x"
                            },{
                                title: "Migrate to 2.x SDKs",
                                path: "/resources/migration/android/migrate-to-2x"
                            }
                        ]
                    },
                    {
                        title: "iOS",
                        path: "/resources/migration/ios",
                        pages: [{
                                title: "Migrate to 5.x SDKs",
                                path: "/resources/migration/ios/migrate-to-5x"
                            },{
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
            },
            {
                title: "Reference",
                path: "/resources/reference/push-notifications",
                pages: [
                    {
                        title: "Push notification templates",
                        path: "/resources/reference/push-notifications",
                        pages: [
                            {
                                title: "Android",
                                path: "/resources/reference/push-notifications/android",
                                pages: [
                                    {
                                        title: "Setup",
                                        path: "/resources/reference/push-notifications/android",
                                    }
                                ]
                            },
                            {
                                title: "iOS",
                                path: "/resources/reference/push-notifications/ios",
                                pages: [
                                    {
                                        title: "Setup",
                                        path: "/resources/reference/push-notifications/ios"
                                    },
                                    {
                                        title: "Create a notification content extension",
                                        path: "/resources/reference/push-notifications/ios/create-extension"
                                    },
                                    {
                                        title: "Configure app and notification content extension",
                                        path: "/resources/reference/push-notifications/ios/configure-extension"
                                    },
                                    {
                                        title: "Validate NotificationContent extension integration",
                                        path: "/resources/reference/push-notifications/ios/validate-integration"
                                    }
                                ]
                            },
                            {
                                title: "Templates",
                                path: "/resources/reference/push-notifications/templates",
                                pages: [
                                    {
                                        title: "Basic",
                                        path: "/resources/reference/push-notifications/templates/basic"
                                    },
                                    {
                                        title: "Carousel",
                                        path: "/resources/reference/push-notifications/templates/carousel"
                                    },
                                    {
                                        title: "Input Box",
                                        path: "/resources/reference/push-notifications/templates/input-box"
                                    },
                                    {
                                        title: "Multi Icon",
                                        path: "/resources/reference/push-notifications/templates/multi-icon"
                                    },
                                    {
                                        title: "Product Catalog",
                                        path: "/resources/reference/push-notifications/templates/catalog"
                                    },
                                    {
                                        title: "Rating",
                                        path: "/resources/reference/push-notifications/templates/rating"
                                    },
                                    {
                                        title: "Timer",
                                        path: "/resources/reference/push-notifications/templates/timer"
                                    },
                                    {
                                        title: "Zero Bezel",
                                        path: "/resources/reference/push-notifications/templates/zero-bezel"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    plugins: [`@adobe/gatsby-theme-aio`],
    pathPrefix: process.env.PATH_PREFIX || '/client-sdks/'
};
