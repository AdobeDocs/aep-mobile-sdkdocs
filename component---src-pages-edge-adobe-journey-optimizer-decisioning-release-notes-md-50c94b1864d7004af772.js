"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[913],{34123:function(e,i,n){n.r(i),n.d(i,{_frontmatter:function(){return m},default:function(){return s}});var t=n(87462),o=n(63366),d=(n(15007),n(64983)),r=n(91515),a=["components"],m={},l={_frontmatter:m},p=r.Z;function s(e){var i=e.components,n=(0,o.Z)(e,a);return(0,d.mdx)(p,(0,t.Z)({},l,n,{components:i,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"release-notes"},"Release notes"),(0,d.mdx)("h2",{id:"march-11-2025"},"March 11, 2025"),(0,d.mdx)("h3",{id:"android-optimize-331"},"Android Optimize 3.3.1"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added capability to configure timeout value for the Update Proposition API via Adobe Journey Optimizer - Decisioning card in Mobile Tags property.")),(0,d.mdx)("h2",{id:"march-6-2025"},"March 6, 2025"),(0,d.mdx)("h3",{id:"ios-optimize-530"},"iOS Optimize 5.3.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added capability to configure timeout value for the Update Proposition API via Adobe Journey Optimizer - Decisioning card in Mobile Tags property.")),(0,d.mdx)("h3",{id:"adobe-journey-optimizer---decisioning-extension-110"},"Adobe Journey Optimizer - Decisioning extension 1.1.0"),(0,d.mdx)("p",null,"Added configuration capability to the Adobe Journey Optimizer - Decisioning extension in the Tags UI for mobile Tag Properties."),(0,d.mdx)("p",null,"Users can now configure:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Request timeout - Set the amount of time (in seconds) to wait for a response from the decisioning services before timing out.")),(0,d.mdx)("h2",{id:"february-17-2025"},"February 17, 2025"),(0,d.mdx)("h3",{id:"react-native-optimize-610"},"React Native Optimize 6.1.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},"[Breaking Change]")," Updated Offer Score data type of from ",(0,d.mdx)("inlineCode",{parentName:"li"},"Integer")," to ",(0,d.mdx)("inlineCode",{parentName:"li"},"Double"),"."),(0,d.mdx)("li",{parentName:"ul"},"To prevent build issues in ",(0,d.mdx)("strong",{parentName:"li"},"6.0.x"),", upgrade ",(0,d.mdx)("inlineCode",{parentName:"li"},"@adobe/react-native-aepoptimize")," to ",(0,d.mdx)("strong",{parentName:"li"},"6.1.0 or later"),".")),(0,d.mdx)("h3",{id:"android-optimize-330"},"Android Optimize 3.3.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},"[Breaking Change]")," Updated Offer Score data type of from ",(0,d.mdx)("inlineCode",{parentName:"li"},"Integer")," to ",(0,d.mdx)("inlineCode",{parentName:"li"},"Double"),"."),(0,d.mdx)("li",{parentName:"ul"},"Optimize SDK only listens to preview events if it contains ",(0,d.mdx)("inlineCode",{parentName:"li"},"debug")," object with ",(0,d.mdx)("inlineCode",{parentName:"li"},"eventType")," as ",(0,d.mdx)("inlineCode",{parentName:"li"},"com.adobe.eventType.edge")," and ",(0,d.mdx)("inlineCode",{parentName:"li"},"eventSource")," as ",(0,d.mdx)("inlineCode",{parentName:"li"},"personalization:decisions"),".")),(0,d.mdx)("h2",{id:"february-11-2025"},"February 11, 2025"),(0,d.mdx)("h3",{id:"ios-optimize-521"},"iOS Optimize 5.2.1"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed a bug where JSON object array without key was not getting parsed in Offer class."),(0,d.mdx)("li",{parentName:"ul"},"Added support of checking debug object's eventType and eventSource while processing debug events.")),(0,d.mdx)("h2",{id:"february-10-2025"},"February 10, 2025"),(0,d.mdx)("h3",{id:"android-optimize-324"},"Android Optimize 3.2.4"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added support for the new ",(0,d.mdx)("inlineCode",{parentName:"li"},"MobileCore.initialize")," API introduced in Core.")),(0,d.mdx)("h2",{id:"february-6-2025"},"February 6, 2025"),(0,d.mdx)("h3",{id:"android-optimize-323"},"Android Optimize 3.2.3"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added support for the Array type in the JSON structure of Offer Content.")),(0,d.mdx)("h2",{id:"december-6-2024"},"December 6, 2024"),(0,d.mdx)("h3",{id:"android-optimize-322"},"Android Optimize 3.2.2"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added timeout (in seconds) parameter to updatePropositions and getPropositions APIs to enable timeout configuration in both the apis ensuring that the operation either completes within the given time frame or returns an error indicating a timeout."),(0,d.mdx)("li",{parentName:"ul"},"Updated getPropositions API to return cached propositions immediately if there are no pending updatePropositions calls for the requested list of decision scopes."),(0,d.mdx)("li",{parentName:"ul"},"Added support for debug events and enabled getPropositions and onPropositionsUpdate to receive Simulated events from Assurance.")),(0,d.mdx)("h3",{id:"ios-optimize-520"},"iOS Optimize 5.2.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added timeout (in seconds) parameter to updatePropositions and getPropositions APIs to enable timeout configuration in both the apis ensuring that the operation either completes within the given time frame or returns an error indicating a timeout."),(0,d.mdx)("li",{parentName:"ul"},"Added support for debug events and enabled getPropositions and onPropositionsUpdate to receive Simulated events from Assurance.")),(0,d.mdx)("h2",{id:"october-8-2024"},"October 8, 2024"),(0,d.mdx)("h3",{id:"android-optimize-310"},"Android Optimize 3.1.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added a new ",(0,d.mdx)("inlineCode",{parentName:"li"},"updatePropositions")," API to support completion callback with retrieved propositions and errors (if any).")),(0,d.mdx)("h2",{id:"october-3-2024"},"October 3, 2024"),(0,d.mdx)("h3",{id:"ios-optimize-510"},"iOS Optimize 5.1.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added a new ",(0,d.mdx)("inlineCode",{parentName:"li"},"updatePropositions")," API to support completion callback with retrieved propositions and errors (if any)."),(0,d.mdx)("li",{parentName:"ul"},"Updated ",(0,d.mdx)("inlineCode",{parentName:"li"},"getPropositions")," API to return cached propositions immediately if there are no pending ",(0,d.mdx)("inlineCode",{parentName:"li"},"updatePropositions")," calls for the requested list of decision scopes."),(0,d.mdx)("li",{parentName:"ul"},"Changed ",(0,d.mdx)("inlineCode",{parentName:"li"},"Offer.score")," data type from Integer to Double to fix a bug where offers having decimal score were being dropped.")),(0,d.mdx)("h2",{id:"august-20-2024"},"August 20, 2024"),(0,d.mdx)("h3",{id:"android-optimize-302"},"Android Optimize 3.0.2"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed thread safety for map updates that happen when ",(0,d.mdx)("inlineCode",{parentName:"li"},"updatePropositions")," API was called repeatedly."),(0,d.mdx)("li",{parentName:"ul"},"Fixed issue where ",(0,d.mdx)("inlineCode",{parentName:"li"},"Offer")," could not be created for default content item when ",(0,d.mdx)("inlineCode",{parentName:"li"},"getPropostions")," API was called.")),(0,d.mdx)("h2",{id:"june-6-2024"},"June 6, 2024"),(0,d.mdx)("h3",{id:"react-native-optimize-602"},"React Native Optimize 6.0.2"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Updated typescript files to support strict null checks.")),(0,d.mdx)("h2",{id:"may-21-2024"},"May 21, 2024"),(0,d.mdx)("h3",{id:"ios-optimize-501"},"iOS Optimize 5.0.1"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed a crash that happens when ",(0,d.mdx)("inlineCode",{parentName:"li"},"updateProposition")," API was called repeatedly.")),(0,d.mdx)("h3",{id:"android-optimize-301"},"Android Optimize 3.0.1"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed a bug where Optimize SDK was considering Target mbox decision scope strings as invalid and not including them in personalization requests.")),(0,d.mdx)("h2",{id:"may-18-2024"},"May 18, 2024"),(0,d.mdx)("h3",{id:"ios-optimize-404"},"iOS Optimize 4.0.4"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed a crash that happens when ",(0,d.mdx)("inlineCode",{parentName:"li"},"updateProposition")," API was called repeatedly.")),(0,d.mdx)("h2",{id:"april-24-2024"},"April 24, 2024"),(0,d.mdx)("h3",{id:"react-native-optimize-601"},"React Native Optimize 6.0.1"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added namespace support to the Android module.")),(0,d.mdx)("h2",{id:"april-12-2024"},"April 12, 2024"),(0,d.mdx)("h3",{id:"react-native-optimize-600"},"React Native Optimize 6.0.0"),(0,d.mdx)("p",null,"Major version update for ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aepsdk-react-native/tree/main/packages/optimize"},"Adobe Journey Optimizer - Decisioning Extension")," for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Updated to use Experience Platform Android ",(0,d.mdx)("inlineCode",{parentName:"li"},"3.x")," SDKs."),(0,d.mdx)("li",{parentName:"ul"},"Updated to use Experience Platform iOS ",(0,d.mdx)("inlineCode",{parentName:"li"},"5.x")," SDKs.")),(0,d.mdx)("h2",{id:"april-3-2024"},"April 3, 2024"),(0,d.mdx)("h3",{id:"android-optimize-300"},"Android Optimize 3.0.0"),(0,d.mdx)("p",null,"Major version update for ",(0,d.mdx)("a",{parentName:"p",href:"./index.md"},"Adobe Journey Optimizer - Decisioning Extension")," for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Updated the minimum supported Android API level to 21."),(0,d.mdx)("li",{parentName:"ul"},"Removed deprecated ",(0,d.mdx)("inlineCode",{parentName:"li"},"registerExtension")," API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead."),(0,d.mdx)("li",{parentName:"ul"},"Renamed class ",(0,d.mdx)("inlineCode",{parentName:"li"},"Proposition")," to ",(0,d.mdx)("inlineCode",{parentName:"li"},"OptimizeProposition"),".")),(0,d.mdx)("h2",{id:"march-20-2024"},"March 20, 2024"),(0,d.mdx)("h3",{id:"ios-optimize-500"},"iOS Optimize 5.0.0"),(0,d.mdx)("p",null,"Major version update for ",(0,d.mdx)("a",{parentName:"p",href:"../../edge/adobe-journey-optimizer-decisioning/index.md"},"Adobe Journey Optimizer - Decisioning Extension")," for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Updated the minimum supported version to iOS 12.0."),(0,d.mdx)("li",{parentName:"ul"},"Include XCFrameworks built with Xcode 15.0.1 with the GitHub release."),(0,d.mdx)("li",{parentName:"ul"},"Renamed class ",(0,d.mdx)("inlineCode",{parentName:"li"},"Proposition")," to ",(0,d.mdx)("inlineCode",{parentName:"li"},"OptimizeProposition"),".")),(0,d.mdx)("h2",{id:"february-28-2024"},"February 28, 2024"),(0,d.mdx)("h3",{id:"ios-optimize-403"},"iOS Optimize 4.0.3"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added max versions to Platform dependencies in podspec")),(0,d.mdx)("h2",{id:"october-5-2023"},"October 5, 2023"),(0,d.mdx)("h3",{id:"android-optimize-202"},"Android Optimize 2.0.2"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added support for enforcing events' order for ",(0,d.mdx)("inlineCode",{parentName:"li"},"updatePropositions")," and ",(0,d.mdx)("inlineCode",{parentName:"li"},"getPropositions")," APIs in the extension. A ",(0,d.mdx)("inlineCode",{parentName:"li"},"getPropositions")," API invocation will be resolved only after any prior ",(0,d.mdx)("inlineCode",{parentName:"li"},"updatePropositions")," API requests are completed irrespective of the async API behavior.")),(0,d.mdx)("h2",{id:"october-4-2023"},"October 4, 2023"),(0,d.mdx)("h3",{id:"ios-optimize-402"},"iOS Optimize 4.0.2"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added support for enforcing events' order for ",(0,d.mdx)("inlineCode",{parentName:"li"},"updatePropositions")," and ",(0,d.mdx)("inlineCode",{parentName:"li"},"getPropositions")," APIs in the extension. A ",(0,d.mdx)("inlineCode",{parentName:"li"},"getPropositions")," API invocation will be resolved only after any prior ",(0,d.mdx)("inlineCode",{parentName:"li"},"updatePropositions")," API requests are completed irrespective of the async API behavior.")),(0,d.mdx)("h2",{id:"august-30-2023"},"August 30, 2023"),(0,d.mdx)("h3",{id:"android-optimize-201"},"Android Optimize 2.0.1"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed an issue where Optimize SDK extension was not correctly verifying a set configuration state before processing proposition requests.")),(0,d.mdx)("h3",{id:"ios-optimize-401"},"iOS Optimize 4.0.1"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed an issue where Optimize SDK extension was not correctly verifying a set configuration state before processing proposition requests.")),(0,d.mdx)("h2",{id:"june-2-2023"},"June 2, 2023"),(0,d.mdx)("h3",{id:"ios-optimize-400"},"iOS Optimize 4.0.0"),(0,d.mdx)("p",null,"Major version update for ",(0,d.mdx)("a",{parentName:"p",href:"./index.md"},"Adobe Journey Optimizer - Decisioning")," for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Updated the minimum supported version to iOS 11.0."),(0,d.mdx)("li",{parentName:"ul"},"Include XCFrameworks built with Xcode 14.1 with the GitHub release."),(0,d.mdx)("li",{parentName:"ul"},"Added support for using the Optimize SDK extension in ",(0,d.mdx)("a",{parentName:"li",href:"https://developer.apple.com/app-extensions/"},"App Extensions"),".")),(0,d.mdx)("h2",{id:"february-2-2023"},"February 2, 2023"),(0,d.mdx)("h3",{id:"android-optimize-200"},"Android Optimize 2.0.0"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Major version update for ",(0,d.mdx)("a",{parentName:"li",href:"./index.md"},"Adobe Journey Optimizer - Decisioning")," for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an ",(0,d.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-optimize-android"},"open source project on GitHub"),".")),(0,d.mdx)("h2",{id:"october-10-2022"},"October 10, 2022"),(0,d.mdx)("h3",{id:"android-optimize-101"},"Android Optimize 1.0.1"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed an issue where Base64 encoding the JSON string, created using the ",(0,d.mdx)("inlineCode",{parentName:"li"},"activityId")," and ",(0,d.mdx)("inlineCode",{parentName:"li"},"placementId")," provided in the ",(0,d.mdx)("inlineCode",{parentName:"li"},"DecisionScope")," constructor, introduced a newline character in the encoded scope string.")),(0,d.mdx)("h2",{id:"june-10-2022"},"June 10, 2022"),(0,d.mdx)("h3",{id:"adobe-journey-optimizer---decisioning-extension-100"},"Adobe Journey Optimizer - Decisioning extension 1.0.0"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"Adobe Journey Optimizer - Decisioning")," extension is now available in the extensions catalog on the Data Collection UI for mobile Tag Properties. No configuration is necessary for this extension.  "),(0,d.mdx)("h2",{id:"june-9-2022"},"June 9, 2022"),(0,d.mdx)("h3",{id:"android-optimize-100"},"Android Optimize 1.0.0"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"Adobe Experience Platform Mobile SDK - Optimize")," extension is now available for Android!"),(0,d.mdx)("p",null,"This extension enables real-time personalization workflows in your mobile applications when using Adobe Target and/or Adobe Journey Optimizer Offer Decisioning."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Key Features")),(0,d.mdx)("p",null,"With this release, the extension provides APIs that you can use to:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fetch personalized offers from the decisioning services enabled in the datastreams e.g. Adobe Target, Adobe Journey Optimizer Offer Decisioning."),(0,d.mdx)("li",{parentName:"ul"},"Track user interactions with those offers.")),(0,d.mdx)("h2",{id:"may-27-2022"},"May 27, 2022"),(0,d.mdx)("h3",{id:"ios-aepoptimize-100"},"iOS AEPOptimize 1.0.0"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"Adobe Experience Platform Mobile SDK - Optimize")," mobile extension is now available for iOS!"),(0,d.mdx)("p",null,"This extension enables real-time personalization workflows in your mobile applications when using Adobe Target and/or Adobe Journey Optimizer Offer Decisioning."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Key Features")),(0,d.mdx)("p",null,"With this release, the extension provides APIs that you can use to:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fetch personalized offers from the decisioning services enabled in the datastreams e.g. Adobe Target, Adobe Journey Optimizer Offer Decisioning."),(0,d.mdx)("li",{parentName:"ul"},"Track user interactions with those offers.")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-adobe-journey-optimizer-decisioning-release-notes-md-50c94b1864d7004af772.js.map