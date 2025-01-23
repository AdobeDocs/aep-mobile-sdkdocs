---
title: Frequently asked questions
description: An guide listing frequently asked questions about the Adobe Experience Platform Mobile SDKs.
keywords:
- Frequently asked questions
- FAQ
---

import FAQ from './tabs/faq.md'

# Frequently asked questions

## What's new in the Adobe Experience Platform Mobile SDK?

There are several new features and benefits of using the Experience Platform Mobile SDK. These SDKs offer extensions to augment core SDK functionality, server-side configuration, and new Adobe Experience Cloud solution functionality. The following table highlights some of the improvements in the Experience Platform Mobile SDK:

| Core features | Experience Platform SDK | 4x SDK |
| :--- | :--- | :--- |
| Server-side, dynamic configuration | ✔️ |  |
| Programmatic configuration | ✔️ | ✔️ |
| Configuration UI | [Data Collection UI](https://experience.adobe.com/#/data-collection/) | [Mobile Services (deprecated)](https://experienceleague.adobe.com/docs/mobile-services/using/eol.html) |
| Partner SDK extensions | ✔️ |  |
| Lifecycle metrics | ✔️ | ✔️ |
| GET/POST postbacks | ✔️ | ✔️ |
| Rules & Data Elements | ✔️ |  |

| Solution | Experience Platform SDK | 4x SDK |
| :--- | :--- | :--- |
| Adobe Analytics | ✔️ | ✔️ |
| Adobe Analytics - Media Analytics | ✔️ | ✔️ |
| Adobe Audience Manager | ✔️ | ✔️ |
| Adobe Campaign Classic | ✔️ |  |
| Adobe Campaign Standard | Push and in-app messaging | Push only |
| Adobe Target | ✔️ | ✔️ |
| Places Service | ✔️ |  |
| Adobe Experience Platform Assurance | ✔️ |  |

## Do I need additional permissions to create a mobile property in the Data Collection UI?

If you need access to the Data Collection UI, see the [user permissions document](https://experienceleague.adobe.com/docs/experience-platform/tags/admin/user-permissions.html). If you create a web property, you can also create a mobile property. If you do not see the option to create a mobile property, turn off your ad blocker, and refresh the page.

## Should I create one property per app or multiple properties per app platform?

If your apps send data to the same Adobe Analytics report suites, use the same extensions, rules, and data elements. You should group all of these mobile apps into the same property. If your apps send data to different Adobe Analytics report suites or user different extensions per app, create separate mobile properties. If you group your mobile apps into one property, you can also split them into separate properties over time.

## How do I delete a mobile property in the Data Collection UI?

To delete a mobile property in the Data Collection UI, please read the [delete a property tutorial](https://experienceleague.adobe.com/docs/experience-platform/tags/admin/companies-and-properties.html#delete-a-property).

<InlineAlert variant="warning" slots="text"/>

If you delete a mobile property, you cannot undo this action!

## Can I safely upgrade extensions within a mobile property in the Data Collection UI for published apps?

Yes, you can safely upgrade extensions within the mobile property. All changes are designed to be backward compatible and will only take effect in your app after you [republish](../home/getting-started/create-a-mobile-property.md#publish-the-configuration) the mobile property.

Additionally, the installation instructions in the mobile property will be refreshed to include the latest versions of mobile platform extensions. These instructions are primarily necessary during the development phase and will be updated even before the property is published.

## How often should I upgrade extensions in the Data Collection UI for published mobile apps?

You should always update to the latest version to access new features and show installation instructions for the latest major releases. You can upgrade extensions within the mobile property safely, as updates are backward compatible and won't affect apps already using the published configuration.

## How often should I upgrade Adobe Experience Platform SDKs in the mobile apps?

You should promptly update to the latest major version of Adobe Experience Platform SDKs upon their release. Once you're on the latest version, maintaining a regular update cadence for patch versions ensures your app stays current with the latest enhancements and fixes.

We release major versions of Adobe Experience Platform SDKs when significant updates are needed for underlying platforms, such as increasing the minimum deployment target in iOS or the minimum API level in Android. Minor and patch updates focus on critical bug fixes and enhancements without introducing breaking changes. All Adobe-provided Mobile SDK extensions within the same major version are fully compatible with each other.

## General implementation and migration

### Where can I download the SDK?

The Experience Platform SDK is available through [Cocoapods](https://cocoapods.org) and [Gradle](https://gradle.org/), and [Github](https://github.com/Adobe-Marketing-Cloud/acp-sdks/). For more information, please read the [get the SDK tutorial](../getting-started/get-the-sdk.md).

### Can I use both the 4x SDK and the new Experience Platform SDK at the same time?

Implementing the two SDKs in your app is not supported.

The Experience Platform SDK migrates the locally stored user contexts from the 4x SDKs. Using both SDKs will cause severe data quality issues. For more information, please read the [upgrade to the Experience Platform SDKs tutorial](./upgrade-platform-sdks/index.md).

### What OS and platform versions are supported?

For a complete list of supported platforms, please read the [latest SDK versions document](../home/current-sdk-versions.md#supported-platforms).

### Where does the SDK store identities and preferences on the app?

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<FAQ query="platform=android&task=storage-locations"/>

iOS

<FAQ query="platform=ios&task=storage-locations"/>

### What is the size of the SDK?

#### Adobe Experience Platform SDKs

| Extension | iOS (KB) | Android (KB) | Additional Dependencies† |
| :-------- | :------- | :----------- | :----------------------- |
| Core | 925 | 497 | Android only: `kotlin-stdlib` |
| Identity | 136 | 51 | |
| Lifecycle | 150 | 59 | |
| Signal | 18 | 33 | |
| Edge Network extension | 253 | 99 | Identity for Edge Network |
| Consent for Edge Network | 33 | 25 | Edge Network extension |
| Identity for Edge Network | 69 | 49 | |
| Analytics | 133 | 95 | |
| Assurance | 917 | 527 | Android only: `androidx.constraintlayout` |
| Audience | 82 | 44 | Identity |
| Campaign | 166 | 80 | Identity |
| Campaign Classic | 34 | 42 | Identity |
| Edge Bridge | 0.84 | 6 | |
| Media | 283 | 137 | |
| Messaging | 33 | 77 | Edge Network extension |
| Optimize | 88 | 80 | Edge Network extension |
| Places | 799 | 59 | |
| Target | 283 | 99 | |
| User Profile | 18 | 29 | |

The sizes in the table are provided for estimation purposes only, with the following considerations:

* †Mobile Core, which includes the Rules Engine and Services extensions, is required for all other extensions. The final app size increase can be calculated by adding the Mobile Core size to each of the enabled extensions.
  * For example, the iOS app distribution using the Target and Analytics extensions will have a total size increase of 1341 KB. (Core: 925 KB + Analytics: 133 KB + Target: 283 KB).
* The iOS size estimates are based on [Google's CocoaPods Size Measurement tool](https://github.com/google/cocoapods-size).
* The Android size estimates listed refer to unsigned apps and do not account for applying ProGuard.
* For Android Mobile SDKs, the full list of dependencies for each SDK and version can be found at [Maven Repository](https://mvnrepository.com/artifact/com.adobe.marketing.mobile).

### How can I use ProGuard with the Android SDK?

Android developer documentation recommends that you should enable shrinking to remove unused code and resources in your release build to make your APK file as small as possible. For more information, please read the [shrink, obfuscate, and optimize your app tutorial](https://developer.android.com/studio/build/shrink-code). Shrinking is accomplished by using [ProGuard](https://stuff.mit.edu/afs/sipb/project/android/sdk/android-sdk-linux/tools/proguard/docs/index.html#manual/introduction.html). The Experience Platform Mobile SDK for Android comes with default ProGuard rules that are included in the Core `AAR` package (see `proguard.txt`). You should use this default package when you implement.

Add the following rule to your custom ProGuard rules file, typically labeled `proguard-rules.pro`. For more information, please read the [shrink, obfuscate, and optimize your app tutorial](https://developer.android.com/studio/build/shrink-code).

```java
-keep class com.adobe.marketing.mobile.* {
    <init>(...);
}
```

### How can I track user engagement of push notifications using the Experience Platform Mobile SDK?

Implementing push notification tracking and measurement with the SDK depends on the Experience Cloud solution being used.

* For the Adobe Campaign Standard extension, please read the [Adobe Campaign standard push tracking tutorial](https://experienceleague.adobe.com/docs/campaign-standard/using/administrating/configuring-mobile/push-tracking.html).
* For the Adobe Campaign Classic extension, please read the [Adobe Campaign Classic push notifications tracking tutorial](../solution/adobe-campaign-classic/api-reference.md#tracknotification-api).

### Why am I not getting a valid configuration from Data Collection UI?

If you are getting the following errors from the SDK logged in your console, then you have not correctly published the mobile property in Data Collection UI. To correctly publish the mobile property follow the [docs here](https://experienceleague.adobe.com/en/docs/experience-platform/tags/publish/overview).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<FAQ query="platform=android&task=configuration-download-error"/>

iOS

<FAQ query="platform=ios&task=configuration-download-error"/>

## Migrating to Android Mobile Core 2.x and compatible extensions

See the frequently asked questions for migration [here](../resources/migration/android/migrate-to-2x.md#frequently-asked-questions).

## Lifecycle

### What are Lifecycle metrics?

Lifecycle metrics are out-of-the-box metrics that are automatically collected when the SDK is first implemented in your app. For more information, please read the [documentation on Lifecycle metrics](../home/base/mobile-core/lifecycle/index.md).

## Adobe Analytics

See the [frequently asked questions for Analytics](../solution/adobe-analytics/faq.md).

## Adobe Experience Platform Edge Network

### Does the Edge Network extension support offline tracking?

Yes, offline tracking is supported by default when sending XDM Experience events since these events have a required timestamp, and there is no separate setting for this as it used to be in the Adobe Analytics extension. The events are backed up in the persistence layer and then sent to the Edge Network in current session if possible, or queued until the next session when a network connection is available.

## Using Experience Platform Swift SDKs with tvOS

### 'X' is unavailable in application extension for tvOS

You may encounter this error when using the Experience Platform SDK for a tvOS app target, with the following message "'X' is unavailable in application extension for tvOS". This behavior is unexpected for tvOS targets and it seems to be an issue in Xcode where it applies additional checks for `tvOSApplicationExtension` API compatibility.
Until this issue is resolved in the future Xcode versions, a workaround is to mark the classes or functions with the attribute: `@available(tvOSApplicationExtension, unavailable)` to suppress the error as in the examples below:

#### Example

```swift
@available(tvOSApplicationExtension, unavailable)
class ErrorThrowingClass {
  ...
}
```

```swift
@available(tvOSApplicationExtension, unavailable)
func errorThrowingFunction() {
  ...
}
```

## Get help

* Visit the SDK [community forum](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-platform/ct-p/adobe-experience-platform-community) to ask questions
* Contact [Adobe Experience Cloud customer care](https://experienceleague.adobe.com/?support-solution=General#support) for immediate assistance
