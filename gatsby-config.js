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
    // versions: [
    //   {
    //     title: 'v2.0',
    //     selected: true
    //   },
    //   {
    //     title: 'v1.4',
    //     path: 'https://github.com/AdobeDocs/analytics-1.4-apis'
    //   }
    // ],
    pages: [
      {
        title: 'Documentation',
        path: '/documentation',
      }
    ],
    subPages: [
        {
            title: "Home",
            path: "/documentation"
        },
        {
            title: "Version 4 Mobile SDKs end-of-support FAQ",
            path: "/documentation/v4-end-of-life-faq"
        },
        {
            title: "Version 4 API changelog",
            path: "/documentation/api-changelog"
        },
        {
            title: "Adobe Experience Cloud & Apple's IDFA, Privacy announcement",
            path: "/documentation/privacy-announcement"
        },
        {
            title: "Adobe Experience Platform Assurance",
            path: "/documentation/platform-assurance",
            pages: [
                {
                    title: "Migration",
                    path: "/documentation/platform-assurance/migration"
                },
                {
                    title: "API reference",
                    path: "/documentation/platform-assurance/api-reference"
                },
                {
                    title: "Resolving common issues",
                    path: "/documentation/platform-assurance/error-logs"
                },
                {
                    title: "Release notes",
                    path: "/documentation/platform-assurance/release-notes"
                }
            ]
        },
      {
        title: 'Adobe Analytics',
        path: '/documentation/adobe-analytics/',
        pages: [
            {
                title: "API reference",
                path: "/documentation/adobe-analytics/api-reference/"
            },
          {
              title: 'Event reference',
              path: '/documentation/adobe-analytics/event-reference/'
          },
          {
              title: "Migration",
              path: "/documentation/adobe-analytics/migration/"
          },
          {
              title: "Product variable",
              path: "/documentation/adobe-analytics/product-variable"
          },
          {
            title: 'Release Notes',
            path: '/documentation/adobe-analytics/release-notes/'
          }
        ]
      },
      {
          title: "Adobe Analytics - Mobile Services",
          path: "/documentation/adobe-analytics-mobile-services",
          pages: [
              {
                  title: "API reference",
                  path: "/documentation/adobe-analytics-mobile-services/api-reference/"
              },
              {
                  title: "Migration",
                  path: "/documentation/adobe-analytics-mobile-services/migration/"
              },
              {
                title: "Release notes",
                path: "/documentation/adobe-analytics-mobile-services/release-notes/"
              }
          ]
      },
      {
          title: "Adobe Audience Manager",
          path: "/documentation/adobe-audience-manager/",
          pages: [
              {
                  title: "API reference",
                  path: "documentation/adobe-audience-manager/api-reference"
              },
              {
                  title: "Event reference",
                  path: "documentation/adobe-audience-manager/event-reference"
              },
              {
                  title: "Migration",
                  path: "documentation/adobe-audience-manager/migration"
              },
              {
                  title: "Release notes",
                  path: "/documentation/adobe-audience-manager/release-notes"
              }
          ]
      },
      {
          title: "Adobe Campaign Standard",
          path: "/documentation/adobe-campaign-standard",
          pages: [
              {
                  title: "API reference",
                  path: "documentation/adobe-campaign-standard/api-reference"
              },
              {
                  title: "Event reference",
                  path: "documentation/adobe-campaign-standard/event-reference"
              },
              {
                  title: "Migration",
                  path: "documentation/adobe-campaign-standard/migration"
              },
              {
                  title: "Release notes",
                  path: "documentation/adobe-campaign-standard/release-notes"
              }
          ]
      },
      {
          title: "Adobe Campaign Classic",
          path: "/documentation/adobe-campaign-classic",
          pages: [
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
          title: "Adobe Journey Optimizer",
          path: "/documentation/adobe-journey-optimizer",
          pages: [
              {
                  title: "API reference",
                  path: "documentation/adobe-journey-optimizer/api-reference"
              },
              {
                  title: "Release notes",
                  path: "documentation/adobe-journey-optimizer/release-notes"
              }
          ]
      },
      {
        title: "Adobe Media Analytics",
        path: "/documentation/adobe-media-analytics",
        pages: [
            {
                title: "API reference",
                path: "documentation/adobe-media-analytics/api-reference"
            },
            {
                title: "Migration",
                path: "documentation/adobe-media-analytics/migration"
            },
            {
                title: "Release notes",
                path: "documentation/adobe-media-analytics/release-notes"
            }
        ]
      },
      {
          title: "Adobe Target",
          path: "/documentation/adobe-target",
          pages: [
              {
                  title: "API reference",
                  path: "documentation/adobe-target/api-reference"
              },
              {
                  title: "Event reference",
                  path: "documentation/adobe-target/event-reference"
              },
              {
                  title: "Migration",
                  path: "documentation/adobe-target/migration"
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
      },
      {
          title: "Mobile Core",
          path: "/documentation/mobile-core",
          pages: [
              {
                  title: "Configuration",
                  path: "documentation/mobile-core/configuration",
                  pages: [
                      {
                          title: "API reference",
                          path: "documentation/mobile-core/configuration/api-reference"
                      },
                      {
                          title: "Event reference",
                          path: "documentation/mobile-core/configuration/event-reference"
                      }
                  ]
              },
              {
                    title: "Signal",
                    path: "documentation/mobile-core/signal",
                    pages: [
                        {
                            title: "Migration",
                            path: "documentation/mobile-core/signal/migration"
                        },
                        {
                            title: "API reference",
                            path: "documentation/mobile-core/signal/api-reference"
                        },
                        {
                            title: "Event reference",
                            path: "documentation/mobile-core/signal/event-reference"
                        }
                    ]
                },
                {
                  title: "Lifecycle",
                  path: "documentation/mobile-core/lifecycle",
                  pages: [ 
                      {
                          title: "Migration",
                          path: "documentation/mobile-core/lifecycle/migration"
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
                          title: "Event reference",
                          path: "documentation/mobile-core/lifecycle/event-reference"
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
                  title: "API reference",
                  path: "documentation/mobile-core/api-reference"
              },
              {
                  title: "Event reference",
                  path: "documentation/mobile-core/event-reference"
              },
              {
                  title: "Migration",
                  path: "documentation/mobile-core/migration"
              },
              {
                  title: "Release notes",
                  path: "documentation/mobile-core/release-notes"
              }
          ]
      },
      {
        title: "Resources",
        header: true,
        path: "/documentation/resources",
        pages: [
            {
                title: "Upgrade to the Experience Platform SDKs",
                path: "documentation/upgrading-to-experience-platform-sdks",
                pages: [
                    {
                        title: "SDK comparison",
                        path: "documentation/upgrading-to-experience-platform-sdks/comparison"
                    },
                    {
                        title: "Manual Lifecycle implementation",
                        path: "documentation/upgrading-to-experience-platform-sdks/manual-lifecycle-implementation"
                    },
                    {
                        title: "API changelog",
                        path: "documentation/upgrading-to-experience-platform-sdks/api-changelog.md"
                    },
                    {
                        title: "Current SDK versions",
                        path: "documentation/upgrading-to-experience-platform-sdks/current-sdk-versions.md"
                    },
                    {
                        title: "Migration",
                        path: "documentation/upgrading-to-experience-platform-sdks/analytics-comparison.md"
                    }
                ]
            },
            {
                title: "Troubleshooting guides",
                path: "documentation/troubleshooting-guides",
                pages: [
                    {
                        title: "Push messaging",
                        path: "documentation/troubleshooting-guides/push-messaging"
                    },
                    {
                        title: "Push notifications",
                        path: "documentation/troubleshooting-guides/push-notifications"
                    }
                ]
            },
            {
                title: "Frequently asked questions",
                path: "documentation/faq"
            },
            {
                title: "Migrate to Swift",
                path: "documentation/migrate-to-swift"
            },
            {
                title: "Privacy and GDPR",
                path: "documentation/privacy-and-gdpr"
            },
            {
                title: "WeChat Mini Programs",
                path: "documentation/platform-minis",
                pages: [
                    {
                        title: "Implementation",
                        path: "/documentation/platform-minis/implementation"
                    },
                    {
                        title: "Implementation - 中文–简体",
                        path: "/documentation/platform-minis/implementation-zh"
                    },
                    {
                        title: "Frequently asked questions",
                        path: "/documentation/platform-minis/faq"
                    }
                ]
            }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/client-sdk/'
};
