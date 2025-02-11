"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3698],{21136:function(e,i,a){a.r(i),a.d(i,{_frontmatter:function(){return o},default:function(){return u}});var n=a(87462),d=a(63366),t=(a(15007),a(64983)),l=a(91515),r=["components"],o={},s={_frontmatter:o},m=l.Z;function u(e){var i=e.components,a=(0,d.Z)(e,r);return(0,t.mdx)(m,(0,n.Z)({},s,a,{components:i,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"release-notes"},"Release notes"),(0,t.mdx)("h2",{id:"february-10-2025"},"February 10, 2025"),(0,t.mdx)("h3",{id:"android-analytics-302"},"Android Analytics 3.0.2"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added support for the new ",(0,t.mdx)("inlineCode",{parentName:"li"},"MobileCore.initialize")," API introduced in Core.")),(0,t.mdx)("h2",{id:"june-27-2024"},"June 27, 2024"),(0,t.mdx)("h3",{id:"ios-analytics-502"},"iOS Analytics 5.0.2"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed a bug where Places region ID and name were not included in the Analytics request if the Places data contained non-string values.")),(0,t.mdx)("h3",{id:"android-analytics-301"},"Android Analytics 3.0.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed a bug where Places region ID and name were not included in the Analytics request if the Places data contained non-string values.")),(0,t.mdx)("h2",{id:"may-28-2024"},"May 28, 2024"),(0,t.mdx)("h3",{id:"ios-analytics-501"},"iOS Analytics 5.0.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed an issue in Analytics hit processor and now it retries hits on recoverable URLErrors shared by Mobile Core.")),(0,t.mdx)("h2",{id:"april-2-2024"},"April 2, 2024"),(0,t.mdx)("h3",{id:"android-analytics-300"},"Android Analytics 3.0.0"),(0,t.mdx)("p",null,"Major version update for ",(0,t.mdx)("a",{parentName:"p",href:"./index.md"},"Adobe Analytics")," for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Updated the minimum supported Android API level to 21."),(0,t.mdx)("li",{parentName:"ul"},"Removed deprecated ",(0,t.mdx)("inlineCode",{parentName:"li"},"registerExtension")," API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead."),(0,t.mdx)("li",{parentName:"ul"},"Added an enhancement to prevent network retries when the device's network is offline.")),(0,t.mdx)("h2",{id:"march-20-2024"},"March 20, 2024"),(0,t.mdx)("h3",{id:"ios-analytics-500"},"iOS Analytics 5.0.0"),(0,t.mdx)("p",null,"Major version update for ",(0,t.mdx)("a",{parentName:"p",href:"./index.md"},"Adobe Analytics")," for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Updated the minimum supported version to iOS 12.0 and tvOS 12.0."),(0,t.mdx)("li",{parentName:"ul"},"Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.")),(0,t.mdx)("h2",{id:"march-7-2024"},"March 7, 2024"),(0,t.mdx)("h3",{id:"ios-analytics-401"},"iOS Analytics 4.0.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added max versions to Platform dependencies in podspec.")),(0,t.mdx)("h2",{id:"july-26-2023"},"July 26, 2023"),(0,t.mdx)("h3",{id:"android-analytics-203"},"Android Analytics 2.0.3"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("inlineCode",{parentName:"li"},"a.systemLocale")," to Lifecycle hits.")),(0,t.mdx)("h2",{id:"june-6-2023"},"June 6, 2023"),(0,t.mdx)("h3",{id:"ios-analytics-400"},"iOS Analytics 4.0.0"),(0,t.mdx)("p",null,"Major version update for ",(0,t.mdx)("a",{parentName:"p",href:"./index.md"},"Adobe Analytics")," for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Updated the minimum supported version to iOS 11.0 and tvOS 11.0."),(0,t.mdx)("li",{parentName:"ul"},"Include XCFrameworks built with Xcode 14.1 with the GitHub release."),(0,t.mdx)("li",{parentName:"ul"},"Resolved an issue with retrieving post-processed data in Assurance for track calls with empty state."),(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("inlineCode",{parentName:"li"},"a.systemLocale")," to Lifecycle hits.")),(0,t.mdx)("h2",{id:"march-27-2023"},"March 27, 2023"),(0,t.mdx)("h3",{id:"android-analytics-202"},"Android Analytics 2.0.2"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},'Fixed a bug that was causing the "Unavailable" status to be shown in Adobe Analytics view in Assurance for some track events sent soon after app launch.')),(0,t.mdx)("h2",{id:"february-17-2023"},"February 17, 2023"),(0,t.mdx)("h3",{id:"android-analytics-201"},"Android Analytics 2.0.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Made the extension compatible with Kotlin 1.4."),(0,t.mdx)("li",{parentName:"ul"},"Analytics shared state is made available on boot-up if there are any previously stored identifiers."),(0,t.mdx)("li",{parentName:"ul"},"Shared state is only updated when an identifier is set and not on get requests.")),(0,t.mdx)("h2",{id:"february-3-2023"},"February 3, 2023"),(0,t.mdx)("h3",{id:"android-analytics-200"},"Android Analytics 2.0.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Major version update for ",(0,t.mdx)("a",{parentName:"li",href:"./index.md"},"Adobe Analytics")," for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an ",(0,t.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-analytics-android/"},"open source project on GitHub"),".")),(0,t.mdx)("h2",{id:"june-30-2022"},"June 30, 2022"),(0,t.mdx)("h3",{id:"ios-aepanalytics-320"},"iOS AEPAnalytics 3.2.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added tvOS support.")),(0,t.mdx)("h2",{id:"march-31-2022"},"March 31, 2022"),(0,t.mdx)("h3",{id:"ios-aepanalytics-304"},"iOS AEPAnalytics 3.0.4"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed ",(0,t.mdx)("inlineCode",{parentName:"li"},"getTrackingIdentifier")," and ",(0,t.mdx)("inlineCode",{parentName:"li"},"getVisitorIdentifier")," APIs to ",(0,t.mdx)("inlineCode",{parentName:"li"},"return nil")," instead of ",(0,t.mdx)("inlineCode",{parentName:"li"},"AEPError.unexpected")," error when AID/VID values are not found in persistence.")),(0,t.mdx)("h2",{id:"october-25-2021"},"October 25, 2021"),(0,t.mdx)("h3",{id:"ios-aepanalytics-303"},"iOS AEPAnalytics 3.0.3"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Add support for ",(0,t.mdx)("inlineCode",{parentName:"li"},"MobileCore.resetIdentities()")," API. When this API is called, the Analytics identifiers and the Analytics hits queue are cleared."),(0,t.mdx)("li",{parentName:"ul"},"Removed retrieval and generation of Analytics tracking identifier (AID). Existing AID values stored on the device will continue to be loaded and used, however new visitors will not be assigned an AID value.")),(0,t.mdx)("h2",{id:"september-8-2021"},"September 8, 2021"),(0,t.mdx)("h3",{id:"ios-aepanalytics-302"},"iOS AEPAnalytics 3.0.2"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed an issue where entire context data dictionary in track request was dropped if any of its key had non string value.")),(0,t.mdx)("h2",{id:"april-1-2021"},"April 1, 2021"),(0,t.mdx)("h3",{id:"ios-aepanalytics-301"},"iOS AEPAnalytics 3.0.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added support to handle internal analytics track request events"),(0,t.mdx)("li",{parentName:"ul"},"Refactored code and updated doc comments")),(0,t.mdx)("h2",{id:"february-26-2021"},"February 26, 2021"),(0,t.mdx)("h3",{id:"ios-aepanalytics-300"},"iOS AEPAnalytics 3.0.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Initial release to support ",(0,t.mdx)("a",{parentName:"li",href:"./index.md"},"Adobe Analytics")," for Adobe Experience Platform Mobile SDKs for iOS in Swift. This library is available as an ",(0,t.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-analytics-ios/"},"open sourced project on GitHub"),".")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-adobe-analytics-release-notes-md-2507596837ac48c6ec53.js.map