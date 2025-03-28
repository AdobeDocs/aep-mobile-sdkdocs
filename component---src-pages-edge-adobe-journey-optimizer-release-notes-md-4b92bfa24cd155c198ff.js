"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4755],{85282:function(e,i,a){a.r(i),a.d(i,{_frontmatter:function(){return s},default:function(){return p}});var n=a(87462),d=a(63366),t=(a(15007),a(64983)),r=a(91515),o=["components"],s={},l={_frontmatter:s},m=r.Z;function p(e){var i=e.components,a=(0,d.Z)(e,o);return(0,t.mdx)(m,(0,n.Z)({},l,a,{components:i,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"release-notes"},"Release notes"),(0,t.mdx)("h2",{id:"march-28-2025"},"March 28, 2025"),(0,t.mdx)("h3",{id:"react-native-messaging-700"},"React Native Messaging 7.0.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Updated to use BOM ",(0,t.mdx)("a",{parentName:"li",href:"https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom"},"(Bill of Materials)")," for Android SDK dependencies.")),(0,t.mdx)("h2",{id:"march-4-2025"},"March 4, 2025"),(0,t.mdx)("h3",{id:"flutter-messaging-500"},"Flutter Messaging 5.0.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Update to use BOM ",(0,t.mdx)("a",{parentName:"li",href:"https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom"},"(Bill of Materials)")," for Android SDK dependencies."),(0,t.mdx)("li",{parentName:"ul"},"Update tests to handle the deprecation warning for ",(0,t.mdx)("inlineCode",{parentName:"li"},"setMockMethodCallHandler"),".")),(0,t.mdx)("h2",{id:"february-10-2025"},"February 10, 2025"),(0,t.mdx)("h3",{id:"android-messaging-331"},"Android Messaging 3.3.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added support for the new ",(0,t.mdx)("inlineCode",{parentName:"li"},"MobileCore.initialize")," API introduced in Core.")),(0,t.mdx)("h2",{id:"february-6-2025"},"February 6, 2025"),(0,t.mdx)("h3",{id:"android-messaging-330"},"Android Messaging 3.3.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Introduced support for out-of-the-box content card UI rendering using the new ",(0,t.mdx)("inlineCode",{parentName:"li"},"ContentCardUIProvider.getContentCardUI()")," API to create and display the views for templated content cards."),(0,t.mdx)("li",{parentName:"ul"},"Added support to display an in-app message when the app is opened by a push notification interaction. To support this workflow, new ",(0,t.mdx)("inlineCode",{parentName:"li"},"updatePropositionsForSurfaces(List<Surface> surfaces, AdobeCallback<Boolean> callback)"),"API has been added to fetch propositions for the provided surfaces with an optional completion handler that provides a boolean status.")),(0,t.mdx)("h2",{id:"january-16-2025"},"January 16, 2025"),(0,t.mdx)("h3",{id:"ios-messaging-560"},"iOS Messaging 5.6.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed a bug that caused dark/light image to be switched when the app enters background."),(0,t.mdx)("li",{parentName:"ul"},"The schemaData property, representing the associated ",(0,t.mdx)("inlineCode",{parentName:"li"},"ContentCardSchemaData")," of ",(0,t.mdx)("inlineCode",{parentName:"li"},"ContentCardUI"),", is now publicly accessible."),(0,t.mdx)("li",{parentName:"ul"},"Added API ",(0,t.mdx)("inlineCode",{parentName:"li"},"updatePropositionsForSurfaces(_:completion:)")," to fetch propositions for the provided surfaces with an optional completion handler that provides a boolean status.")),(0,t.mdx)("h2",{id:"december-19-2024"},"December 19, 2024"),(0,t.mdx)("h3",{id:"react-native-messaging-605"},"React Native Messaging 6.0.5"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed an issue with in-app messages not being displayed when a MessagingDelegate is set.")),(0,t.mdx)("h2",{id:"november-1-2024"},"November 1, 2024"),(0,t.mdx)("h3",{id:"ios-messaging-550"},"iOS Messaging 5.5.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Introduced the ",(0,t.mdx)("inlineCode",{parentName:"li"},"getContentCardUI")," API to create and display the UI for templated content cards, supported on iOS 15 and above."),(0,t.mdx)("li",{parentName:"ul"},'Added new property "priority" to "Proposition" class which represents the priority entered in the AJO UI for the corresponding campaign.')),(0,t.mdx)("h2",{id:"october-2-2024"},"October 2, 2024"),(0,t.mdx)("h3",{id:"android-messaging-321"},"Android Messaging 3.2.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"SDK updated to support conflict resolution for in-app messaging:",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"In-app messages are loaded in priority order"),(0,t.mdx)("li",{parentName:"ul"},"When a message display is suppressed due to a priority conflict or due to app developer decision it is recorded as an edge event")))),(0,t.mdx)("h2",{id:"september-30-2024"},"September 30, 2024"),(0,t.mdx)("h3",{id:"ios-messaging-540"},"iOS Messaging 5.4.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"SDK updated to support conflict resolution for in-app messaging:",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"In-app messages are loaded in priority order"),(0,t.mdx)("li",{parentName:"ul"},"When a message display is suppressed due to a priority conflict or due to app developer decision it is recorded as an edge event")))),(0,t.mdx)("h2",{id:"september-3-2024"},"September 3, 2024"),(0,t.mdx)("h3",{id:"ios-messaging-530"},"iOS Messaging 5.3.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Two updates made to support out-of-the-box Content Card templates, coming soon via the new ",(0,t.mdx)("inlineCode",{parentName:"li"},"AEPSwiftUI")," library:",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Writes a disqualify event to event history when a content card is dismissed"),(0,t.mdx)("li",{parentName:"ul"},"Removes dismissed content card from in-memory container holding qualified content cards")))),(0,t.mdx)("h2",{id:"august-19-2024"},"August 19, 2024"),(0,t.mdx)("h3",{id:"android-messaging-320"},"Android Messaging 3.2.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Deprecated ",(0,t.mdx)("inlineCode",{parentName:"li"},"ContentCard")," class and its related APIs.")),(0,t.mdx)("h3",{id:"ios-messaging-520"},"iOS Messaging 5.2.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Updated some logging around push message tracking to be more useful."),(0,t.mdx)("li",{parentName:"ul"},"Deprecated ",(0,t.mdx)("inlineCode",{parentName:"li"},"ContentCard")," class and its related APIs.")),(0,t.mdx)("h2",{id:"july-9-2024"},"July 9, 2024"),(0,t.mdx)("h3",{id:"ios-messaging-511"},"iOS Messaging 5.1.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed a regression introduced in 5.0.0 that was preventing cached in-app messages from displaying on launch.")),(0,t.mdx)("h2",{id:"june-26-2024"},"June 26, 2024"),(0,t.mdx)("h3",{id:"android-messaging-310"},"Android Messaging 3.1.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added support for ",(0,t.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-messaging-android/blob/main/Documentation/sources/propositions/content-card.md"},"Content Cards"),"."),(0,t.mdx)("li",{parentName:"ul"},"Fixed a bug causing modified code-based experiences to be appended to the proposition offering, rather than being replaced."),(0,t.mdx)("li",{parentName:"ul"},"Added listener for debug event to support future Assurance workflows.")),(0,t.mdx)("h3",{id:"ios-messaging-510"},"iOS Messaging 5.1.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added support for ",(0,t.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-messaging-ios/blob/main/Documentation/sources/propositions/developer-documentation/classes/content-card.md"},"Content Cards"),"."),(0,t.mdx)("li",{parentName:"ul"},"Fixed a bug causing modified code-based experiences to be appended to the proposition offering, rather than being replaced."),(0,t.mdx)("li",{parentName:"ul"},"Added listener for debug event to support future Assurance workflows.")),(0,t.mdx)("h2",{id:"june-6-2024"},"June 6, 2024"),(0,t.mdx)("h3",{id:"react-native-messaging-602"},"React Native Messaging 6.0.2"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Updated typescript files to support strict null checks.")),(0,t.mdx)("h2",{id:"may-13-2024"},"May 13, 2024"),(0,t.mdx)("h3",{id:"flutter-messaging-402"},"Flutter Messaging 4.0.2"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Update environment dependencies in pubspec.")),(0,t.mdx)("h2",{id:"april-24-2024"},"April 24, 2024"),(0,t.mdx)("h3",{id:"react-native-messaging-601"},"React Native Messaging 6.0.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added namespace support to the Android module.")),(0,t.mdx)("h2",{id:"april-23-2024"},"April 23, 2024"),(0,t.mdx)("h3",{id:"flutter-messaging-401"},"Flutter Messaging 4.0.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added namespace support to the Android module.")),(0,t.mdx)("h2",{id:"april-16-2024"},"April 16, 2024"),(0,t.mdx)("h3",{id:"flutter-messaging-400"},"Flutter Messaging 4.0.0"),(0,t.mdx)("p",null,"Major version update for ",(0,t.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aepsdk_flutter/tree/main/plugins/flutter_aepmessaging"},"Adobe Journey Optimizer")," for Adobe Experience Platform Flutter plugin compatible with Flutter Core 4.0.0. The current release includes the following changes:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Updated to use Experience Platform Android ",(0,t.mdx)("inlineCode",{parentName:"li"},"3.x")," SDKs."),(0,t.mdx)("li",{parentName:"ul"},"Updated to use Experience Platform iOS ",(0,t.mdx)("inlineCode",{parentName:"li"},"5.x")," SDKs."),(0,t.mdx)("li",{parentName:"ul"},"Adds ",(0,t.mdx)("inlineCode",{parentName:"li"},"onContentLoaded")," to ",(0,t.mdx)("inlineCode",{parentName:"li"},"MessagingDelegate")," (Android Only)."),(0,t.mdx)("li",{parentName:"ul"},"Updated ",(0,t.mdx)("inlineCode",{parentName:"li"},"urlLoaded")," from ",(0,t.mdx)("inlineCode",{parentName:"li"},"MessagingDelegate")," to iOS Only.")),(0,t.mdx)("h2",{id:"april-12-2024"},"April 12, 2024"),(0,t.mdx)("h3",{id:"react-native-messaging-600"},"React Native Messaging 6.0.0"),(0,t.mdx)("p",null,"Major version update for ",(0,t.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aepsdk-react-native/tree/main/packages/messaging"},"Adobe Journey Optimizer")," for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Updated to use Experience Platform Android ",(0,t.mdx)("inlineCode",{parentName:"li"},"3.x")," SDKs."),(0,t.mdx)("li",{parentName:"ul"},"Updated to use Experience Platform iOS ",(0,t.mdx)("inlineCode",{parentName:"li"},"5.x")," SDKs."),(0,t.mdx)("li",{parentName:"ul"},"Adds ",(0,t.mdx)("inlineCode",{parentName:"li"},"onContentLoaded")," to ",(0,t.mdx)("inlineCode",{parentName:"li"},"MessagingDelegate")," (Android Only)."),(0,t.mdx)("li",{parentName:"ul"},"Updated ",(0,t.mdx)("inlineCode",{parentName:"li"},"urlLoaded")," from ",(0,t.mdx)("inlineCode",{parentName:"li"},"MessagingDelegate")," to iOS Only.")),(0,t.mdx)("h2",{id:"april-3-2024"},"April 3, 2024"),(0,t.mdx)("h3",{id:"android-messaging-300"},"Android Messaging 3.0.0"),(0,t.mdx)("p",null,"Major version update for ",(0,t.mdx)("a",{parentName:"p",href:"./index.md"},"Adobe Journey Optimizer")," for Android compatible with Mobile Core 3.0.0. The current release includes the following changes:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Updated the minimum supported Android API level to 21."),(0,t.mdx)("li",{parentName:"ul"},"Migrated the in-app message feature to use Jetpack Compose based UI Services from MobileCore 3.0.0."),(0,t.mdx)("li",{parentName:"ul"},"Adds support for code-based experiences."),(0,t.mdx)("li",{parentName:"ul"},"Fixed a bug that caused Activity restarts when processing push notification click URIs.")),(0,t.mdx)("h2",{id:"march-20-2024"},"March 20, 2024"),(0,t.mdx)("p",null,"Major version update for ",(0,t.mdx)("a",{parentName:"p",href:"./index.md"},"Adobe Journey Optimizer")," for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Updated the minimum supported version to iOS 12.0."),(0,t.mdx)("li",{parentName:"ul"},"Include XCFrameworks built with Xcode 15.0.1 with the GitHub release."),(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("a",{parentName:"li",href:"./api-reference/#handlenotificationresponse"},(0,t.mdx)("inlineCode",{parentName:"a"},"handleNotificationResponse(_:urlHandler:closure:)"))," API to provide more control over URL handling from ",(0,t.mdx)("inlineCode",{parentName:"li"},"UNNotificationResponse")," objects.",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Removed deprecated public API ",(0,t.mdx)("inlineCode",{parentName:"li"},"Messaging.handleNotificationResponse(_:applicationOpened:withCustomActionId:)"),"."),(0,t.mdx)("li",{parentName:"ul"},"Removed public API ",(0,t.mdx)("inlineCode",{parentName:"li"},"Messaging.handleNotificationResponse(_:closure:)")," API."))),(0,t.mdx)("li",{parentName:"ul"},"Added support for ",(0,t.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/en/docs/journey-optimizer/using/code-based-experience/get-started-code-based"},"Code Based Experiences"),".",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added public API ",(0,t.mdx)("a",{parentName:"li",href:"./code-based/api-reference/#updatepropositionsforsurfaces"},(0,t.mdx)("inlineCode",{parentName:"a"},"Messaging.updatePropositionsForSurfaces(_)")),"."),(0,t.mdx)("li",{parentName:"ul"},"Added public API ",(0,t.mdx)("a",{parentName:"li",href:"./code-based/api-reference/#getpropositionsforsurfaces"},(0,t.mdx)("inlineCode",{parentName:"a"},"Messaging.getPropositionsForSurfaces(_:completion:)")),".")))),(0,t.mdx)("h2",{id:"march-5-2024"},"March 5, 2024"),(0,t.mdx)("h3",{id:"android-messaging-221"},"Android Messaging 2.2.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Handle a null network connection exception which was causing the Messaging extension to fail to be registered.")),(0,t.mdx)("h2",{id:"february-28-2024"},"February 28, 2024"),(0,t.mdx)("h3",{id:"ios-messaging-411"},"iOS Messaging 4.1.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added max versions to Platform dependencies in podspec")),(0,t.mdx)("h2",{id:"september-28-2023"},"September 28, 2023"),(0,t.mdx)("h3",{id:"ios-messaging-410"},"iOS Messaging 4.1.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added new notification tracking API ",(0,t.mdx)("inlineCode",{parentName:"li"},"handleNotificationResponse")," with parameters ",(0,t.mdx)("inlineCode",{parentName:"li"},"UNNotificationResponse")," and an optional callback the returns ",(0,t.mdx)("inlineCode",{parentName:"li"},"PushTrackingStatus")," enum.",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"This API will automatically handle the click behaviour (OPENAPP, WEBURL, DEEPLINK) defined for the notification."))),(0,t.mdx)("li",{parentName:"ul"},"Deprecated the notification tracking API ",(0,t.mdx)("inlineCode",{parentName:"li"},"handleNotificationResponse")," with parameters ",(0,t.mdx)("inlineCode",{parentName:"li"},"UNNotificationResponse"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"applicationOpened"),", and ",(0,t.mdx)("inlineCode",{parentName:"li"},"customActionId"),"."),(0,t.mdx)("li",{parentName:"ul"},"Fixed a bug on notification tracking API ",(0,t.mdx)("inlineCode",{parentName:"li"},"handleNotificationResponse")," to stop sending tracking hits to edge servers when the notification does not contain tracking information.")),(0,t.mdx)("h3",{id:"android-messaging-220"},"Android Messaging 2.2.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Introduced ",(0,t.mdx)("inlineCode",{parentName:"li"},"MessagingServices")," class to automatically build, display, track, and handle defined click behaviour on notifications from Adobe Journey Optimizer."),(0,t.mdx)("li",{parentName:"ul"},"Fixed a bug on notification tracking API ",(0,t.mdx)("inlineCode",{parentName:"li"},"handleNotificationResponse")," to stop sending tracking hits to edge servers when the notification does not contain tracking information.")),(0,t.mdx)("h2",{id:"june-2-2023"},"June 2, 2023"),(0,t.mdx)("h3",{id:"ios-messaging-400"},"iOS Messaging 4.0.0"),(0,t.mdx)("p",null,"Major version update for ",(0,t.mdx)("a",{parentName:"p",href:"./index.md"},"Adobe Journey Optimizer")," for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Updated the minimum supported version to iOS 11.0."),(0,t.mdx)("li",{parentName:"ul"},"Include XCFrameworks built with Xcode 14.1 with the GitHub release.")),(0,t.mdx)("h2",{id:"may-23-2023"},"May 23, 2023"),(0,t.mdx)("h3",{id:"android-messaging-214"},"Android Messaging 2.1.4"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Handle in-app interaction tracking for back button presses.")),(0,t.mdx)("h2",{id:"april-28-2023"},"April 28, 2023"),(0,t.mdx)("h3",{id:"android-messaging-213"},"Android Messaging 2.1.3"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed a bug causing in-app message display Experience Events to be sent even when MessagingDelegate suppressed their display.")),(0,t.mdx)("h3",{id:"ios-messaging-114"},"iOS Messaging 1.1.4"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed a bug causing in-app message display Experience Events to be sent even when MessagingDelegate suppressed their display.")),(0,t.mdx)("h2",{id:"april-24-2023"},"April 24, 2023"),(0,t.mdx)("h3",{id:"android-messaging-212"},"Android Messaging 2.1.2"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed a bug causing a crash when incorrectly formatted URLs were used in custom HTML messages.")),(0,t.mdx)("h2",{id:"march-20-2023"},"March 20, 2023"),(0,t.mdx)("h3",{id:"ios-messaging-113"},"iOS Messaging 1.1.3"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Drop minimum supported version of iOS to 10.0 to align with minimum supported version in AEPCore.")),(0,t.mdx)("h2",{id:"march-16-2023"},"March 16, 2023"),(0,t.mdx)("h3",{id:"android-messaging-211"},"Android Messaging 2.1.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Messaging extension now processes in-app message responses from multiple upstream services.")),(0,t.mdx)("h2",{id:"march-15-2023"},"March 15, 2023"),(0,t.mdx)("h3",{id:"ios-messaging-112"},"iOS Messaging 1.1.2"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Messaging extension now processes in-app message responses from multiple upstream services.")),(0,t.mdx)("h2",{id:"march-6-2023"},"March 6, 2023"),(0,t.mdx)("h3",{id:"android-messaging-210"},"Android Messaging 2.1.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed in-app message deeplink processing."),(0,t.mdx)("li",{parentName:"ul"},"Added a default implementation for ",(0,t.mdx)("inlineCode",{parentName:"li"},"Message.getAutoTrack")," to resolve an issue with the Message interface not matching the previous Message class.")),(0,t.mdx)("h2",{id:"february-27-2023"},"February 27, 2023"),(0,t.mdx)("h3",{id:"ios-messaging-111"},"iOS Messaging 1.1.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixes an issue where loaded in-app message rules were not cleared when an empty in-app message payload is received from Adobe Journey Optimizer.")),(0,t.mdx)("h3",{id:"android-messaging-202"},"Android Messaging 2.0.2"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixes an issue where loaded in-app message rules were not cleared when an empty in-app message payload is received from Adobe Journey Optimizer."),(0,t.mdx)("li",{parentName:"ul"},"Fixes an issue where only the first in-app message present in a payload was being loaded into the rules engine.")),(0,t.mdx)("h2",{id:"february-9-2023"},"February 9, 2023"),(0,t.mdx)("h3",{id:"ios-messaging-110"},"iOS Messaging 1.1.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Adds support for Adobe Journey Optimizer powered in-app messages.")),(0,t.mdx)("h3",{id:"android-messaging-201"},"Android Messaging 2.0.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Updates the Core dependency to 2.0.1, which resolves inconsistencies between the Android and iOS MessagingDelegate classes.")),(0,t.mdx)("h2",{id:"february-3-2023"},"February 3, 2023"),(0,t.mdx)("h3",{id:"android-messaging-200"},"Android Messaging 2.0.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Major version update for ",(0,t.mdx)("a",{parentName:"li",href:"./index.md"},"Adobe Journey Optimizer")," for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an ",(0,t.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-messaging-android"},"open source project on GitHub"),"."),(0,t.mdx)("li",{parentName:"ul"},"Adds support for Adobe Journey Optimizer powered in-app messages.")),(0,t.mdx)("h2",{id:"june-17-2021"},"June 17, 2021"),(0,t.mdx)("h3",{id:"ios-messaging-100"},"iOS Messaging 1.0.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"The Adobe Experience Platform Messaging (AEPMessaging) mobile extension is now available on iOS! This extension enables push notifications and measurement for Adobe Journey Optimizer.")),(0,t.mdx)("h3",{id:"adobe-journey-optimizer-launch-extension"},"Adobe Journey Optimizer Launch Extension"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"You can now find the ",(0,t.mdx)("inlineCode",{parentName:"li"},"Adobe Journey Optimizer")," extension in the Launch extensions catalog for mobile properties.")),(0,t.mdx)("h2",{id:"june-16-2021"},"June 16, 2021"),(0,t.mdx)("h3",{id:"android-messaging-100"},"Android Messaging 1.0.0"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"The Adobe Experience Platform Messaging (AEPMessaging) mobile extension is now available on Android! This extension enables push notifications and measurement for Adobe Journey Optimizer.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-adobe-journey-optimizer-release-notes-md-4b92bfa24cd155c198ff.js.map