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
        path: '/',
      },
      {
        title: 'Adobe Analytics',
        path: '/adobe-analytics/'
      },
      {
          title: "Adobe Analytics - Mobile Services",
          path: "/adobe-analytics-mobile-services/"
      },
      {
        title: 'API Reference',
        menu: [{
          title: 'API Reference v2.0',
          description: 'Adobe Analytics Reporting API',
          path: '/api/index.md'
        }, {
          title: 'API Reference v1.4',
          description: 'API Spec for the Adobe Marketing Cloud',
          path: '/api/1.4.md'
        }]
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
        {
            title: "Home",
            path: "/",
            pages: [{
                title: "Overview",
                path: "/"
            }]
        },
      {
        title: 'Adobe Analytics',
        path: '/adobe-analytics/',
        pages: [
            {
                title: "API reference",
                path: "/adobe-analytics/api-reference/"
            },
          {
              title: 'Event reference',
              path: '/adobe-analytics/event-reference/'
          },
          {
              title: "Migration",
              path: "adobe-analytics/migration/"
          },
          {
              title: "Product variable",
              path: "adobe-analytics/product-variable"
          },
          {
            title: 'Release Notes',
            path: '/adobe-analytics/release-notes/'
          }
        ]
      },
      {
          title: "Adobe Analytics - Mobile Services",
          path: "/adobe-analytics-mobile-services",
          pages: [
              {
                  title: "API reference",
                  path: "adobe-analytics-mobile-services/api-reference/"
              },
              {
                  title: "Migration",
                  path: "adobe-analytics-mobile-services/migration/"
              },
              {
                title: "Release notes",
                path: "adobe-analytics-mobile-services/release-notes/"
              }
          ]
      },
      {
          title: "Adobe Audience Manager",
          path: "/adobe-audience-manager/",
          pages: [
              {
                  title: "Release notes",
                  path: "adobe-audience-manager/release-notes"
              }
          ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/dev-site-documentation-template/'
};
