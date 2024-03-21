"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[557],{90696:function(e,i,n){n.r(i),n.d(i,{_frontmatter:function(){return m},default:function(){return x}});var a,d=n(87462),t=n(63366),r=(n(15007),n(64983)),l=n(91515),o=["components"],m={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),u={_frontmatter:m},p=l.Z;function x(e){var i=e.components,n=(0,t.Z)(e,o);return(0,r.mdx)(p,(0,d.Z)({},u,n,{components:i,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"release-notes"},"Release notes"),(0,r.mdx)("h2",{id:"march-19-2024"},"March 19, 2024"),(0,r.mdx)("h3",{id:"ios-core-500"},"iOS Core 5.0.0"),(0,r.mdx)("p",null,"Major version update of Adobe Experience Platform Core iOS SDKs are live! It contains the following extensions:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Core 5.0.0"),(0,r.mdx)("li",{parentName:"ul"},"Identity 5.0.0"),(0,r.mdx)("li",{parentName:"ul"},"Signal 5.0.0"),(0,r.mdx)("li",{parentName:"ul"},"Lifecycle 5.0.0")),(0,r.mdx)("p",null,"Please note that the current release includes the following changes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Updated the minimum supported version to iOS 12.0 and tvOS 12.0."),(0,r.mdx)("li",{parentName:"ul"},"Include XCFrameworks built with Xcode 15.0.1 with the GitHub release."),(0,r.mdx)("li",{parentName:"ul"},"Include a privacy manifest for AEPCore and AEPServices.")),(0,r.mdx)("h2",{id:"february-15-2024"},"February 15, 2024"),(0,r.mdx)("h3",{id:"ios-core-423"},"iOS Core 4.2.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fix podspec dependencies not being restricted to current major version."),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue that was allowing in-app messages without content to be displayed.")),(0,r.mdx)("h2",{id:"january-26-2024"},"January 26, 2024"),(0,r.mdx)("h3",{id:"android-core-262"},"Android Core 2.6.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Add array support for token replacement in the launch rules engine."),(0,r.mdx)("li",{parentName:"ul"},"The code used to fix issues on Android 8/8.1 has been restricted from execution on other Android OS versions.")),(0,r.mdx)("h2",{id:"january-22-2024"},"January 22, 2024"),(0,r.mdx)("h3",{id:"ios-core-422"},"iOS Core 4.2.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Add array support for token replacement in the launch rules engine."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a caching issue that could cause display problems when two or more in-app messages were being triggered by identical conditions.")),(0,r.mdx)("h2",{id:"january-4-2024"},"January 4, 2024"),(0,r.mdx)("h3",{id:"ios-core-421"},"iOS Core 4.2.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Reverts storage for tvOS back to UserDefaults.")),(0,r.mdx)("h2",{id:"december-13-2023"},"December 13, 2023"),(0,r.mdx)("h3",{id:"android-core-261"},"Android Core 2.6.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where failure to create a webview for displaying an in-app message would cause the UI to be blocked.")),(0,r.mdx)("h2",{id:"november-15-2023"},"November 15, 2023"),(0,r.mdx)("h3",{id:"android-core-260"},"Android Core 2.6.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed the UI takeover behavior for in-app messages. When UI takeover is disabled, taps outside the in-app webview no longer dismiss the message.")),(0,r.mdx)("h2",{id:"october-31-2023"},"October 31, 2023"),(0,r.mdx)("h3",{id:"ios-core-420"},"iOS Core 4.2.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Migrates storage from UserDefaults to iOS file system.")),(0,r.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Downgrading from this version of Core is unsupported, as it will cause undefined behavior."),(0,r.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Please do not use this release for tvOS. Use the 4.2.1 release instead."),(0,r.mdx)("h2",{id:"october-30-2023"},"October 30, 2023"),(0,r.mdx)("h3",{id:"android-core-251"},"Android Core 2.5.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed a resource leak in ",(0,r.mdx)("inlineCode",{parentName:"li"},"StreamUtils"),"."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a crash when displaying in-app messages.")),(0,r.mdx)("h2",{id:"september-28-2023"},"September 28, 2023"),(0,r.mdx)("h3",{id:"android-core-250"},"Android Core 2.5.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added getter APIs ",(0,r.mdx)("inlineCode",{parentName:"li"},"getLargeIconResourceID")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"getSmallIconResourceID")," to MobileCore for retrieving the icon resource IDs set from the application.")),(0,r.mdx)("h2",{id:"august-30-2023"},"August 30, 2023"),(0,r.mdx)("h3",{id:"ios-core-410"},"iOS Core 4.1.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where the in-app message was not displayed correctly when there was a change in device orientation."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where the cached appId could overwrite the one set with ",(0,r.mdx)("inlineCode",{parentName:"li"},"MobileCore.configureWithAppId()")," before extension registration."),(0,r.mdx)("li",{parentName:"ul"},"Added the ",(0,r.mdx)("inlineCode",{parentName:"li"},"contentComplete")," event source constant for Edge workflows.")),(0,r.mdx)("h3",{id:"android-core-240"},"Android Core 2.4.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where floating button was not being displayed properly after being dismissed."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where ",(0,r.mdx)("inlineCode",{parentName:"li"},"MobileCore.updateConfiguration()")," was not updating configuration key for the correct environment."),(0,r.mdx)("li",{parentName:"ul"},"Added the ",(0,r.mdx)("inlineCode",{parentName:"li"},"contentComplete")," event source constant for Edge workflows.")),(0,r.mdx)("h2",{id:"august-8-2023"},"August 8, 2023"),(0,r.mdx)("h3",{id:"android-core-231"},"Android Core 2.3.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue with displaying local notifications.")),(0,r.mdx)("h2",{id:"july-26-2023"},"July 26, 2023"),(0,r.mdx)("h3",{id:"android-core-230"},"Android Core 2.3.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added the DeviceInforming.getSystemLocale() API, which returns the locale set by the user in the system."),(0,r.mdx)("li",{parentName:"ul"},"Implemented database recovery in SQLiteDataQueue for cases where adding or removing an entry fails due to unexpected errors."),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue with the rounded corners and placement of in-app messages on Android 21/22."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where the cached appId could overwrite the one set with MobileCore.configureWithAppId() before extension registration.")),(0,r.mdx)("h3",{id:"android-lifecycle-204"},"Android Lifecycle 2.0.4"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Lifecycle extension now includes the system locale, indicating the device's preferred locale, in its published shared state."),(0,r.mdx)("li",{parentName:"ul"},"Lifecycle launch event now includes the application._dc.language XDM field, which signifies the device's preferred locale.")),(0,r.mdx)("h2",{id:"june-29-2023"},"June 29, 2023"),(0,r.mdx)("h3",{id:"android-core-223"},"Android Core 2.2.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed handling of back button press in in-app messages."),(0,r.mdx)("li",{parentName:"ul"},"Resolved a crash that occurred when dismissing in-app messages.")),(0,r.mdx)("h2",{id:"june-15-2023"},"June 15, 2023"),(0,r.mdx)("h3",{id:"android-core-222"},"Android Core 2.2.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue in Android API 22 and below where the in-app message would sometimes take over the screen, rendering the app unresponsive."),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where the onShow method in FullscreenMessageDelegate and MessagingDelegate was being notified multiple times after displaying an in-app message."),(0,r.mdx)("li",{parentName:"ul"},"Improved the handling of in-app messages during orientation changes.")),(0,r.mdx)("h2",{id:"june-12-2023"},"June 12, 2023"),(0,r.mdx)("h3",{id:"android-core-221"},"Android Core 2.2.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Updated EventDataUtils to drop entries with unsupported values during cloning instead of throwing an exception."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a crash when displaying in-app messages."),(0,r.mdx)("li",{parentName:"ul"},"Fixed rounded corners when displaying in-app messages."),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where the shared state published by Event Hub was mutable.")),(0,r.mdx)("h3",{id:"android-lifecycle-203"},"Android Lifecycle 2.0.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where session start time (",(0,r.mdx)("inlineCode",{parentName:"li"},"starttimestampmillis"),") was shared in seconds instead of milliseconds in Lifecycle shared state."),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where session start time (",(0,r.mdx)("inlineCode",{parentName:"li"},"starttimestampmillis"),"), previous session start time (",(0,r.mdx)("inlineCode",{parentName:"li"},"previoussessionstarttimestampmillis"),"), and previous session pause time (",(0,r.mdx)("inlineCode",{parentName:"li"},"previoussessionpausetimestampmillis"),") were shared in seconds instead of milliseconds in Lifecycle response event.")),(0,r.mdx)("h3",{id:"android-identity-203"},"Android Identity 2.0.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added debug logs around ECID generation.")),(0,r.mdx)("h2",{id:"june-1-2023"},"June 1, 2023"),(0,r.mdx)("h3",{id:"ios-core-400"},"iOS Core 4.0.0"),(0,r.mdx)("p",null,"Major version update of Adobe Experience Platform Core iOS SDKs are live! It contains the following extensions:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Core 4.0.0"),(0,r.mdx)("li",{parentName:"ul"},"Identity 4.0.0"),(0,r.mdx)("li",{parentName:"ul"},"Signal 4.0.0"),(0,r.mdx)("li",{parentName:"ul"},"Lifecycle 4.0.0")),(0,r.mdx)("p",null,"Please note that the current release includes the following changes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Updated the minimum supported version to iOS 11.0 and tvOS 11.0."),(0,r.mdx)("li",{parentName:"ul"},"Include XCFrameworks built with Xcode 14.1 with the GitHub release."),(0,r.mdx)("li",{parentName:"ul"},"Added ",(0,r.mdx)("inlineCode",{parentName:"li"},"SystemInfoService.getSystemLocaleName()")," API which returns the locale by combining device's preferred language and selected region (as set by the user on the system)."),(0,r.mdx)("li",{parentName:"ul"},"Lifecycle extension adds ",(0,r.mdx)("inlineCode",{parentName:"li"},"systemlocale")," denoting device's preferred locale to its published shared state."),(0,r.mdx)("li",{parentName:"ul"},"Lifecycle launch event now includes the application._dc.language XDM field, which signifies the device's preferred locale.")),(0,r.mdx)("h2",{id:"may-23-2023"},"May 23, 2023"),(0,r.mdx)("h3",{id:"android-core-220"},"Android Core 2.2.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added support for chaining related events."),(0,r.mdx)("li",{parentName:"ul"},"Added a new ",(0,r.mdx)("inlineCode",{parentName:"li"},"evaluateEvent")," API in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"LaunchRulesEngine")," class that returns matching consequences without processing them."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where a non-transparent background was visible behind a message webview."),(0,r.mdx)("li",{parentName:"ul"},"Fixed the back button functionality to allow for the dismissal of a displayed in-app message using the device's back button."),(0,r.mdx)("li",{parentName:"ul"},"Fixed in-app message redraw on device orientation change."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a memory leak with the in-app message webview.")),(0,r.mdx)("h3",{id:"android-lifecycle-202"},"Android Lifecycle 2.0.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Chain the events dispatched by the Lifecycle extension to their corresponding request events.")),(0,r.mdx)("h2",{id:"may-15-2023"},"May 15, 2023"),(0,r.mdx)("h3",{id:"ios-core-390"},"iOS Core 3.9.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added support for chaining related events."),(0,r.mdx)("li",{parentName:"ul"},"Chain the events dispatched by the Lifecycle extension to their corresponding request events."),(0,r.mdx)("li",{parentName:"ul"},"Added a new ",(0,r.mdx)("inlineCode",{parentName:"li"},"evaluate")," API in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"LaunchRulesEngine")," class that returns matching consequences without processing them."),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue that caused shared state events to be dispatched out of order."),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue that captured event history before processing rules.")),(0,r.mdx)("h2",{id:"april-24-2023"},"April 24, 2023"),(0,r.mdx)("h3",{id:"android-mobile-core-213"},"Android Mobile Core 2.1.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"In-app messages with content overflow now correctly scroll when the message is not observing gestures."),(0,r.mdx)("li",{parentName:"ul"},"Opacity is now correctly calculated for in-app message takeovers."),(0,r.mdx)("li",{parentName:"ul"},"In-app messages will no longer intermittently cause a crash when being displayed on Android 7."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a race condition when querying the event history database.")),(0,r.mdx)("h2",{id:"april-14-2023"},"April 14, 2023"),(0,r.mdx)("h3",{id:"android-mobile-core-212"},"Android Mobile Core 2.1.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue that prevented some in-app messaging show frequency rules from working correctly."),(0,r.mdx)("li",{parentName:"ul"},"Improved evaluation of logical operators in rules engine.")),(0,r.mdx)("h2",{id:"april-10-2023"},"April 10, 2023"),(0,r.mdx)("h3",{id:"android-bom-100-beta1"},"Android BOM 1.0.0-beta1"),(0,r.mdx)("p",null,"The initial public beta release of the ",(0,r.mdx)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom/1.0.0-beta1"},"Bill of Materials")," (BOM) artifact for Android is now available."),(0,r.mdx)("h2",{id:"march-31-2023"},"March 31, 2023"),(0,r.mdx)("h3",{id:"android-mobile-core-211"},"Android Mobile Core 2.1.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed crash during Core boot when migrating the data from v4 Mobile SDK."),(0,r.mdx)("li",{parentName:"ul"},"Updated POM file with the Apache 2 license URL.")),(0,r.mdx)("h3",{id:"android-identity-202"},"Android Identity 2.0.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where Identity could block the processing of requests when the first loaded configuration had incorrect format."),(0,r.mdx)("li",{parentName:"ul"},"Updated POM file with the Apache 2 license URL.")),(0,r.mdx)("h2",{id:"march-28-2023"},"March 28, 2023"),(0,r.mdx)("h3",{id:"ios-core-382"},"iOS Core 3.8.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed some crashes which can happen on shutdown.")),(0,r.mdx)("h2",{id:"march-17-2023"},"March 17, 2023"),(0,r.mdx)("h3",{id:"ios-core-381"},"iOS Core 3.8.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Revert changes to minimum supported version of iOS and tvOS back to 10.0.")),(0,r.mdx)("h2",{id:"march-14-2023"},"March 14, 2023"),(0,r.mdx)("h3",{id:"android-mobile-core-210"},"Android Mobile Core 2.1.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added a new API to the LaunchRulesEngine class that enables adding new rules without replacing the existing ones.")),(0,r.mdx)("h2",{id:"march-13-2023"},"March 13, 2023"),(0,r.mdx)("h3",{id:"ios-aepcore-380"},"iOS AEPCore 3.8.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Updated the minimum supported versions to iOS 11.0, tvOS 11.0."),(0,r.mdx)("li",{parentName:"ul"},"Added support for overriding internal logging service with customer-provided implementation."),(0,r.mdx)("li",{parentName:"ul"},"Added a new API to the LaunchRulesEngine class that enables adding new rules without replacing the existing ones.")),(0,r.mdx)("h2",{id:"february-9-2023"},"February 9, 2023"),(0,r.mdx)("h3",{id:"android-mobile-core-201"},"Android Mobile Core 2.0.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed issue causing large delays in configuration download retries."),(0,r.mdx)("li",{parentName:"ul"},"Fixed issue causing backdrop opacity being set incorrectly in ",(0,r.mdx)("inlineCode",{parentName:"li"},"MessageSettings"),"."),(0,r.mdx)("li",{parentName:"ul"},"Updated ",(0,r.mdx)("inlineCode",{parentName:"li"},"MessagingDelegate")," to mirror the implementation of the iOS SDK, and exposed ",(0,r.mdx)("inlineCode",{parentName:"li"},"Message")," interface for app developers to access InternalMessage objects created by Messaging extension."),(0,r.mdx)("li",{parentName:"ul"},"Fixed issue with javadoc generation."),(0,r.mdx)("li",{parentName:"ul"},"Improved resource handling after network connection attempts."),(0,r.mdx)("li",{parentName:"ul"},"Improved database handling during fresh installation scenarios.")),(0,r.mdx)("h3",{id:"android-signal-201"},"Android Signal 2.0.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed issue with javadoc generation.")),(0,r.mdx)("h3",{id:"android-lifecycle-201"},"Android Lifecycle 2.0.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed issue with javadoc generation.")),(0,r.mdx)("h3",{id:"android-identity-201"},"Android Identity 2.0.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed issue with javadoc generation.")),(0,r.mdx)("h2",{id:"january-30-2023"},"January 30, 2023"),(0,r.mdx)("h3",{id:"adobe-experience-platform-android-core-sdks"},"Adobe Experience Platform Android Core SDKs"),(0,r.mdx)("p",null,"The brand new Adobe Experience Platform Core Android SDKs are live! It is ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aepsdk-core-android"},"open sourced on GitHub"),", containing the following extensions:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Core 2.0.0"),(0,r.mdx)("li",{parentName:"ul"},"Identity 2.0.0"),(0,r.mdx)("li",{parentName:"ul"},"Signal 2.0.0"),(0,r.mdx)("li",{parentName:"ul"},"Lifecycle 2.0.0")),(0,r.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"registerExtension")," API for each extension is deprecated in the latest version of the mobile SDK. You can call the ",(0,r.mdx)("inlineCode",{parentName:"p"},"MobileCore.registerExtensions")," API instead of registering the extensions separately. See the ",(0,r.mdx)("a",{parentName:"p",href:"../../../resources/migration/android/migrate-to-2x.md"},"Migration Guide")," for more details."),(0,r.mdx)("h2",{id:"january-5-2023"},"January 5, 2023"),(0,r.mdx)("h3",{id:"ios-aepcore-374"},"iOS AEPCore 3.7.4"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixes an issue where Lifecycle launch events may set an invalid XDM ",(0,r.mdx)("inlineCode",{parentName:"li"},"environment._dc.language")," field when the device is set to specific locales."),(0,r.mdx)("li",{parentName:"ul"},"Fixes an issue where Lifecycle may set invalid negative times for metrics ",(0,r.mdx)("inlineCode",{parentName:"li"},"daysSinceFirstLaunch"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"daysSinceLastLaunch"),", and ",(0,r.mdx)("inlineCode",{parentName:"li"},"daysSinceLastUpgrade"),"."),(0,r.mdx)("li",{parentName:"ul"},"Adds performance improvements to ",(0,r.mdx)("inlineCode",{parentName:"li"},"FullscreenMessage.show"),".")),(0,r.mdx)("p",null,"Released with sdk-core version 1.11.5"),(0,r.mdx)("h2",{id:"november-11-2022"},"November 11, 2022"),(0,r.mdx)("h3",{id:"ios-aepcore-373"},"iOS AEPCore 3.7.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug in AEPIdentity where CustomerIdentities with the same type could cause a crash.")),(0,r.mdx)("h2",{id:"october-27-2022"},"October 27, 2022"),(0,r.mdx)("h3",{id:"ios-aepcore-372"},"iOS AEPCore 3.7.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added location hint result to EventSource keys for Edge."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug preventing in-app messages from being dismissed in some situations."),(0,r.mdx)("li",{parentName:"ul"},"Added Target identities to MobileCore.getSDKIdentities response.")),(0,r.mdx)("h2",{id:"august-10-2022"},"August 10, 2022"),(0,r.mdx)("h3",{id:"ios-aepcore-371"},"iOS AEPCore 3.7.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Made improvements to retry logic when downloading the remote Configuration fails"),(0,r.mdx)("li",{parentName:"ul"},"Made changes in Identity to speed up boot up"),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where early events do not properly get processed by the rules engine"),(0,r.mdx)("li",{parentName:"ul"},"Improved Objective-C naming for MessagingDelegate methods"),(0,r.mdx)("li",{parentName:"ul"},"Updated UI classes to respect safe area when showing fullscreen messages")),(0,r.mdx)("h2",{id:"june-16-2022"},"June 16, 2022"),(0,r.mdx)("h3",{id:"ios-aepcore-370"},"iOS AEPCore 3.7.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added tvOS support."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a few race conditions in the EventHub and MobileCore."),(0,r.mdx)("li",{parentName:"ul"},"Made changes in AEPIdentity to speed up boot.")),(0,r.mdx)("h2",{id:"may-9-2022"},"May 9, 2022"),(0,r.mdx)("h3",{id:"ios-aepcore-360"},"iOS AEPCore 3.6.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added support for using the Core SDK in ",(0,r.mdx)("a",{parentName:"li",href:"https://developer.apple.com/app-extensions/"},"App Extensions.")),(0,r.mdx)("li",{parentName:"ul"},"Added a new API to the Extension protocol for getting the latest non-pending shared state."),(0,r.mdx)("li",{parentName:"ul"},"Added support for using Bundled Rules."),(0,r.mdx)("li",{parentName:"ul"},"Added support for cached images for Fullscreen Messages."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug preventing Fullscreen Messages from being dismissed in certain conditions.")),(0,r.mdx)("h2",{id:"april-8-2022"},"April 8, 2022"),(0,r.mdx)("h3",{id:"ios-aepcore-350"},"iOS AEPCore 3.5.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Adds two APIs to ",(0,r.mdx)("inlineCode",{parentName:"li"},"Date+Format")," class. Method ",(0,r.mdx)("inlineCode",{parentName:"li"},"getISO8601UTCDateWithMilliseconds")," formats a Date to string as with fractional seconds and UTC time zone, while ",(0,r.mdx)("inlineCode",{parentName:"li"},"getISO8601FullDate")," formats a Date to string with date without time using the local time zone."),(0,r.mdx)("li",{parentName:"ul"},"Lifecycle foreground and background events for Edge Network now format timestamps with fractional seconds and UTC time zone."),(0,r.mdx)("li",{parentName:"ul"},"Updates the timestamp format for rule token ",(0,r.mdx)("inlineCode",{parentName:"li"},"~timestampp"),' with fractional seconds and UTC time zone. This rule token is used to set the mobile property data element "Adobe Experience Platform Timestamp".'),(0,r.mdx)("li",{parentName:"ul"},"Improves Signal logging by treating all 2xx network responses as success."),(0,r.mdx)("li",{parentName:"ul"},"Fixes bug where dispatched events failed due to use of single quotes in name."),(0,r.mdx)("li",{parentName:"ul"},"Fixes format of push token string by uppercasing characters.")),(0,r.mdx)("h2",{id:"february-3-2022"},"February 3, 2022"),(0,r.mdx)("h3",{id:"ios-aepservices-342"},"iOS AEPServices 3.4.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Add ",(0,r.mdx)("inlineCode",{parentName:"li"},"@objc")," attribute to ",(0,r.mdx)("inlineCode",{parentName:"li"},"messageSettings")," in ",(0,r.mdx)("inlineCode",{parentName:"li"},"FullscreenMessage"))),(0,r.mdx)("h2",{id:"january-26-2022"},"January 26, 2022"),(0,r.mdx)("h3",{id:"ios-aepcore-341"},"iOS AEPCore 3.4.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed AEPRulesEngine dependency in Package.swift")),(0,r.mdx)("h2",{id:"january-20-2022"},"January 20, 2022"),(0,r.mdx)("h3",{id:"ios-aepcore-340"},"iOS AEPCore 3.4.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added support for a new API ",(0,r.mdx)("inlineCode",{parentName:"li"},"clearUpdatedConfiguration()"),", see Configuration API reference for more details."),(0,r.mdx)("li",{parentName:"ul"},"Added support for optionally capturing event history on the device."),(0,r.mdx)("li",{parentName:"ul"},"Added support for triggering rules engine conditions based on event history.")),(0,r.mdx)("h3",{id:"ios-aepservices-340"},"iOS AEPServices 3.4.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Expanded configuration options for Fullscreen Messages."),(0,r.mdx)("li",{parentName:"ul"},"Added support for delegating in-app message delivery.")),(0,r.mdx)("h2",{id:"december-22-2021"},"December 22, 2021"),(0,r.mdx)("h3",{id:"ios-aepcore-332"},"iOS AEPCore 3.3.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Stability improvements for Configuration extension and full screen messages."),(0,r.mdx)("li",{parentName:"ul"},"Configuration now allows for empty appId to reset the previously set appId value."),(0,r.mdx)("li",{parentName:"ul"},"Logging improvements for extensions registration flow."),(0,r.mdx)("li",{parentName:"ul"},"The Event Hub shares wrapper type in its shared state."),(0,r.mdx)("li",{parentName:"ul"},"Adds new messaging event type and sources."),(0,r.mdx)("li",{parentName:"ul"},"Deprecates SystemInfoService getApplicationVersion API.")),(0,r.mdx)("h3",{id:"ios-aepidentity-332"},"iOS AEPIdentity 3.3.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixes a bug where Identity.getIdentifiers API failed to encode the identifiers."),(0,r.mdx)("li",{parentName:"ul"},"Fixes intermittent issue for GetUrlVariables and AppendToUrl APIs when custom Analytics identifiers are being used.")),(0,r.mdx)("h2",{id:"november-9-2021"},"November 9, 2021"),(0,r.mdx)("h3",{id:"ios-aepcore-331"},"iOS AEPCore 3.3.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where Date was not persisted correctly in iOS versions less than 13.")),(0,r.mdx)("h3",{id:"ios-aeplifecycle-331"},"iOS AEPLifecycle 3.3.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added session start time to Lifecycle shared state.")),(0,r.mdx)("h3",{id:"ios-aepidentity-331"},"iOS AEPIdentity 3.3.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where the default Experience Cloud ID server URL was not used when the ",(0,r.mdx)("inlineCode",{parentName:"li"},"experienceCloud.server")," configuration parameter was an empty string.")),(0,r.mdx)("h2",{id:"september-3-2021"},"September 3, 2021"),(0,r.mdx)("h3",{id:"ios-aepcore-330"},"iOS AEPCore 3.3.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added support for dispatch event rules consequence.")),(0,r.mdx)("h3",{id:"ios-aeplifecycle-330"},"iOS AEPLifecycle 3.3.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Lifecycle extension now dispatches two new events ",(0,r.mdx)("inlineCode",{parentName:"li"},"applicationLaunch")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"applicationClose")," which contain Mobile Lifecycle metrics in XDM format."),(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where application upgrades were detected based on changes in ",(0,r.mdx)("inlineCode",{parentName:"li"},"CFBundleShortVersionString")," instead of ",(0,r.mdx)("inlineCode",{parentName:"li"},"CFBundleVersion"),".")),(0,r.mdx)("h3",{id:"mobile-core-launch-extension-v2120"},"Mobile Core Launch extension v2.1.20"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"New ",(0,r.mdx)("inlineCode",{parentName:"li"},"Foreground")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"Background")," event types to be used in rules for triggering actions based on Mobile Application Lifecycle XDM events.")),(0,r.mdx)("h2",{id:"august-18-2021"},"August 18, 2021"),(0,r.mdx)("h3",{id:"ios-aepcore-324"},"iOS AEPCore 3.2.4"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed data race in ",(0,r.mdx)("inlineCode",{parentName:"li"},"Event")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"ExtensionContainer")," classes."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a memory leak in ",(0,r.mdx)("inlineCode",{parentName:"li"},"EventHub.registerResponseListener"),".")),(0,r.mdx)("h2",{id:"july-29-2021"},"July 29, 2021"),(0,r.mdx)("h3",{id:"ios-aepcore-323"},"iOS AEPCore 3.2.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"PersistentHitQueue")," where new hits can cause additional scheduled tasks."),(0,r.mdx)("li",{parentName:"ul"},"Improved handling of database errors in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"PersistentHitQueue"),".")),(0,r.mdx)("h2",{id:"june-30-2021"},"June 30, 2021"),(0,r.mdx)("h3",{id:"ios-aepcore-322"},"iOS AEPCore 3.2.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Remove double URL encoding of AEPIdentity identifiers."),(0,r.mdx)("li",{parentName:"ul"},"Prevent possible crash at shutdown in EventHub.")),(0,r.mdx)("h2",{id:"june-21-2021"},"June 21, 2021"),(0,r.mdx)("h3",{id:"ios-aepcore-321"},"iOS AEPCore 3.2.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Update version for bundled AEPIdentity 3.2.1 release.")),(0,r.mdx)("h2",{id:"ios-aepidentity-321"},"iOS AEPIdentity 3.2.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where ",(0,r.mdx)("inlineCode",{parentName:"li"},"Identity.syncIdentifier")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"Identity.syncIdentifiers")," APIs would ignore the authentication state settings.")),(0,r.mdx)("h2",{id:"june-7-2021"},"June 7, 2021"),(0,r.mdx)("h3",{id:"ios-aepcore-320"},"iOS AEPCore 3.2.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Support for handling identities request ",(0,r.mdx)("inlineCode",{parentName:"li"},"Event"),"'s in AEPIdentity"),(0,r.mdx)("li",{parentName:"ul"},"Improve public visiblity of ",(0,r.mdx)("inlineCode",{parentName:"li"},"RuleConsequence")),(0,r.mdx)("li",{parentName:"ul"},"Added ",(0,r.mdx)("inlineCode",{parentName:"li"},"getDeviceModelNumber")," to ",(0,r.mdx)("inlineCode",{parentName:"li"},"SystemInfoService")),(0,r.mdx)("li",{parentName:"ul"},"Various additions to ",(0,r.mdx)("inlineCode",{parentName:"li"},"ThreadSafeDictionary")),(0,r.mdx)("li",{parentName:"ul"},"Added the ability to make a network request with raw data that is not UTF encoded"),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where condition definitions that did not contain a value were not handled correctly"),(0,r.mdx)("li",{parentName:"ul"},"Introduced an API to set button image data to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"FloatingButton")),(0,r.mdx)("li",{parentName:"ul"},"Added ",(0,r.mdx)("inlineCode",{parentName:"li"},"optimize")," ",(0,r.mdx)("inlineCode",{parentName:"li"},"EventType")),(0,r.mdx)("li",{parentName:"ul"},"Introduced an API to hide the ",(0,r.mdx)("inlineCode",{parentName:"li"},"FullscreenMessage")),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where token ","(","~ timestampu",")"," was not expanded correctly"),(0,r.mdx)("li",{parentName:"ul"},"Introduced ",(0,r.mdx)("inlineCode",{parentName:"li"},"webViewDidFinishLoading")," to ",(0,r.mdx)("inlineCode",{parentName:"li"},"FullScreenMessageDelegate"))),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Note: This release introduces breaking changes to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"NetworkService")," and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"SystemInfoService"),".")),(0,r.mdx)("h2",{id:"may-6-2021"},"May 6, 2021"),(0,r.mdx)("h3",{id:"ios-aepcore-313"},"iOS AEPCore 3.1.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Update to use AEPRulesEngine 1.0.1.")),(0,r.mdx)("h3",{id:"ios-aeprulesengine-101"},"iOS AEPRulesEngine 1.0.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed a Swift compatibility issue.")),(0,r.mdx)("h2",{id:"april-29-2021"},"April 29, 2021"),(0,r.mdx)("h3",{id:"ios-aepcore-312"},"iOS AEPCore 3.1.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where the URL session was not reused for the same host."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a Swift compatibility issue.")),(0,r.mdx)("h3",{id:"ios-aepidentity-312"},"iOS AEPIdentity 3.1.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where Identity was blocked on the first launch if the configuration was invalid.")),(0,r.mdx)("h2",{id:"april-8-2021"},"April 8, 2021"),(0,r.mdx)("h3",{id:"ios-aepcore-311"},"iOS AEPCore 3.1.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where incomplete eventhub shared state was created before the event hub has been started.")),(0,r.mdx)("h2",{id:"april-1-2021"},"April 1, 2021"),(0,r.mdx)("h3",{id:"ios-aepcore-310"},"iOS AEPCore 3.1.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"New API - ",(0,r.mdx)("inlineCode",{parentName:"li"},"MobileCore.collectLaunchInfo()")," - see API reference for more information."),(0,r.mdx)("li",{parentName:"ul"},"New API - ",(0,r.mdx)("inlineCode",{parentName:"li"},"MobileCore.resetIdentities()")," - see API reference for more information."),(0,r.mdx)("li",{parentName:"ul"},"Added multiple new values to ",(0,r.mdx)("inlineCode",{parentName:"li"},"EventType")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"EventSource"),"."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug causing regular listeners to receive paired response events."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug preventing proper data migration from v4 and v5 SDK."),(0,r.mdx)("li",{parentName:"ul"},"The callback method passed to ",(0,r.mdx)("inlineCode",{parentName:"li"},"MobileCore.registerEventListener")," now runs on a background thread."),(0,r.mdx)("li",{parentName:"ul"},"Improved logging for dictionaries."),(0,r.mdx)("li",{parentName:"ul"},"The EventHub's shared state dictionary now uses the full name of each registered extension as its key.")),(0,r.mdx)("h3",{id:"ios-aepidentity-310"},"iOS AEPIdentity 3.1.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where privacy status was not correctly loaded from persistence."),(0,r.mdx)("li",{parentName:"ul"},'Advertising ID can now correctly be set after having an initial value of "zeroes" or empty.')),(0,r.mdx)("h3",{id:"ios-aepservices-310"},"iOS AEPServices 3.1.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added support for UI Services."),(0,r.mdx)("li",{parentName:"ul"},"The Locale string used in HTTP Headers is now properly formatted."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug that would sometimes prevent downloaded files from being properly unzipped.")),(0,r.mdx)("h2",{id:"january-19-2021"},"January 19, 2021"),(0,r.mdx)("h3",{id:"adobe-experience-platform-ios-core-sdks"},"Adobe Experience Platform iOS Core SDKs"),(0,r.mdx)("p",null,"The brand new Adobe Experience Platform Core iOS swift SDKs are live! It is ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aepsdk-core-ios"},"open sourced on GitHub"),", containing the following extensions:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"AEPCore 3.0.0"),(0,r.mdx)("li",{parentName:"ul"},"AEPServices 3.0.0"),(0,r.mdx)("li",{parentName:"ul"},"AEPIdentity 3.0.0"),(0,r.mdx)("li",{parentName:"ul"},"AEPSignal 3.0.0"),(0,r.mdx)("li",{parentName:"ul"},"AEPLifecycle 3.0.0"),(0,r.mdx)("li",{parentName:"ul"},"AEPRulesEngine 1.0.0")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-home-base-mobile-core-release-notes-md-d4a4b5f7b789b6136e31.js.map