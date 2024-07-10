"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3730],{3806:function(e,i,d){d.r(i),d.d(i,{_frontmatter:function(){return l},default:function(){return s}});var n=d(87462),a=d(63366),r=(d(15007),d(64983)),o=d(91515),t=["components"],l={},m={_frontmatter:l},u=o.Z;function s(e){var i=e.components,d=(0,a.Z)(e,t);return(0,r.mdx)(u,(0,n.Z)({},m,d,{components:i,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"release-notes"},"Release notes"),(0,r.mdx)("h2",{id:"may-31-2024"},"May 31, 2024"),(0,r.mdx)("h3",{id:"ios-audience-501"},"iOS Audience 5.0.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue in Audience hit processor and now it retries hits on recoverable URLErrors shared by Mobile Core.")),(0,r.mdx)("h2",{id:"april-2-2024"},"April 2, 2024"),(0,r.mdx)("h3",{id:"android-audience-300"},"Android Audience 3.0.0"),(0,r.mdx)("p",null,"Major version update for ",(0,r.mdx)("a",{parentName:"p",href:"./index.md"},"Adobe Audience Manager")," for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Updated the minimum supported Android API level to 21."),(0,r.mdx)("li",{parentName:"ul"},"Removed deprecated ",(0,r.mdx)("inlineCode",{parentName:"li"},"registerExtension")," API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead."),(0,r.mdx)("li",{parentName:"ul"},"Added an enhancement to prevent network retries when the device's network is offline.")),(0,r.mdx)("h2",{id:"march-20-2024"},"March 20, 2024"),(0,r.mdx)("h3",{id:"ios-audience-500"},"iOS Audience 5.0.0"),(0,r.mdx)("p",null,"Major version update for ",(0,r.mdx)("a",{parentName:"p",href:"./index.md"},"Adobe Audience Manager")," for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Updated the minimum supported version to iOS 12.0."),(0,r.mdx)("li",{parentName:"ul"},"Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.")),(0,r.mdx)("h2",{id:"march-6-2024"},"March 6, 2024"),(0,r.mdx)("h3",{id:"ios-audience-401"},"iOS Audience 4.0.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added max versions to Platform dependencies in podspec.")),(0,r.mdx)("h2",{id:"june-7-2023"},"June 7, 2023"),(0,r.mdx)("h3",{id:"ios-audience-400"},"iOS Audience 4.0.0"),(0,r.mdx)("p",null," Major version update for ",(0,r.mdx)("a",{parentName:"p",href:"./index.md"},"Adobe Audience Manager")," for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Updated the minimum supported version to iOS 11.0."),(0,r.mdx)("li",{parentName:"ul"},"Include XCFrameworks built with Xcode 14.1 with the GitHub release.")),(0,r.mdx)("h2",{id:"february-3-2023"},"February 3, 2023"),(0,r.mdx)("h3",{id:"android-audience-200"},"Android Audience 2.0.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Major version update for ",(0,r.mdx)("a",{parentName:"li",href:"./index.md"},"Adobe Audience Manager")," for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-audience-android"},"open source project on GitHub"),".")),(0,r.mdx)("h2",{id:"may-18-2022"},"May 18, 2022"),(0,r.mdx)("h3",{id:"ios-aepaudience-304"},"iOS AEPAudience 3.0.4"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where lifecycle data was included in signalWithData requests.")),(0,r.mdx)("h2",{id:"may-9-2022"},"May 9, 2022"),(0,r.mdx)("h3",{id:"ios-aepaudience-303"},"iOS AEPAudience 3.0.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed integration with Lifecycle extension to send lifecycle metrics when a new app session is started.")),(0,r.mdx)("h2",{id:"jul-13-2021"},"Jul 13, 2021"),(0,r.mdx)("h3",{id:"ios-aepaudience-302"},"iOS AEPAudience 3.0.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added support to handle the MobileCore.resetIdentities() API.")),(0,r.mdx)("h2",{id:"april-1-2021"},"April 1, 2021"),(0,r.mdx)("h3",{id:"ios-aepaudience-301"},"iOS AEPAudience 3.0.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Updated syncedVisitorIds implementation to a map"),(0,r.mdx)("li",{parentName:"ul"},"Fixed access modifier for two classes")),(0,r.mdx)("h2",{id:"january-29-2021"},"January 29, 2021"),(0,r.mdx)("h3",{id:"ios-audience-300"},"iOS Audience 3.0.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Initial release to support ",(0,r.mdx)("a",{parentName:"li",href:"./index.md"},"Adobe Audience")," for Adobe Experience Platform Mobile SDKs for iOS in Swift. This extension library is available as an ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-audience-ios/"},"open sourced project on GitHub"),".")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-adobe-audience-manager-release-notes-md-37191a1ba8376483f8eb.js.map