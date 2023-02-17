import FAQ from './tabs/faq.md'

# Frequently asked questions

## What's new in the Adobe Experience Platform Mobile SDK?

There are several new features and benefits of using the Experience Platform Mobile SDK. These SDKs offer extensions to augment core SDK functionality, server-side configuration, and new Adobe Experience Cloud solution functionality. The following table highlights some of the improvements in the Experience Platform Mobile SDK:

| Core features | Experience Platform SDK | 4x SDK |
| :--- | :--- | :--- |
| Server-side, dynamic configuration | ✔️ |  |
| Programmatic configuration | ✔️ | ✔️ |
| Configuration UI | [Data Collection UI](https://experience.adobe.com/#/data-collection/) | [Mobile Services](https://mobilemarketing.adobe.com) |
| Partner SDK extensions | ✔️ |  |
| Lifecycle metrics | ✔️ | ✔️ |
| GET/POST postbacks | ✔️ | ✔️ |
| Rules & Data Elements | ✔️ |  |

| Solution | Experience Platform SDK | 4x SDK |
| :--- | :--- | :--- |
| Adobe Analytics | ✔️ | ✔️ |
| Adobe Analytics - Media Analytics | ✔️ | ✔️ |
| Adobe Analytics - Mobile Services | Messaging and Marketing Links | ✔️ |
| Adobe Audience Manager | ✔️ | ✔️ |
| Adobe Campaign Classic | ✔️ |  |
| Adobe Campaign Standard | Push and in-app messaging | Push only |
| Adobe Target | ✔️ | ✔️ |
| Places Service | ✔️ |  |
| Adobe Experience Platform Assurance | ✔️ |  |

## Do I need additional permissions to create a mobile property in the Data Collection UI?

If you need access to the Data Collection UI, see the [user permissions document](https://experienceleague.adobe.com/docs/experience-platform/tags/admin/user-permissions.html?lang=en). If you create a web property, you can also create a mobile property. If you do not see the option to create a mobile property, turn off your ad blocker, and refresh the page.

## Should I create one property per app or multiple properties per app platform?

If your apps send data to the same Adobe Analytics report suites, use the same extensions, rules, and data elements. You should group all of these mobile apps into the same property. If your apps send data to different Adobe Analytics report suites or user different extensions per app, create separate mobile properties. If you group your mobile apps into one property, you can also split them into separate properties over time.

## How do I delete a mobile property in the Data Collection UI?

To delete a mobile property in the Data Collection UI, please read the [delete a property tutorial](https://experienceleague.adobe.com/docs/experience-platform/tags/admin/companies-and-properties.html?lang=en#delete-a-property).

<InlineAlert variant="warning" slots="text"/>

If you delete a mobile property, you cannot undo this action!

## General implementation and migration

### Where can I download the SDK?

The Experience Platform SDK is available through [Cocoapods](https://cocoapods.org) and [Gradle](https://gradle.org/), and [Github](https://github.com/Adobe-Marketing-Cloud/acp-sdks/). For more information, please read the [get the SDK tutorial](./getting-started/get-the-sdk.md).

### Can I use both the 4x SDK and the new Experience Platform SDK at the same time?

Implementing the two SDKs in your app is not supported.

The Experience Platform SDK migrates the locally stored user contexts from the 4x SDKs. Using both SDKs will cause severe data quality issues. For more information, please read the [upgrade to the Experience Platform SDKs tutorial](./upgrade-platform-sdks/index.md).

### What platforms are supported?

For a complete list of supported platforms, please read the [latest SDK versions document](./current-sdk-versions.md).

### What OS and platform versions are supported?

* Android versions 4.0 or later (API levels 14 or later)
* iOS versions 10 or later
* React Native versions 0.44.0 or later
* Flutter versions 1.10.0 or later
* Cordova 9.0.0 or later
* Xamarin - MonoAndroid 9.0+ and Xamarin.iOS 1.0+
* Unity 2019.3.10f1 or later

### Where does the SDK store identities and preferences on the app?

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<FAQ query="platform=android"/>

iOS

<FAQ query="platform=ios"/>

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

### Is there a change in minimum API level supported by Mobile SDK for Android?

Mobile SDK for Android now supports a minimum API level of **19**. If your application targets a lower API level, you will see the following build failure:

```
Manifest merger failed : uses-sdk:minSdkVersion 14 cannot be smaller than version 19 declared in library [com.adobe.marketing.mobile:core:2.0.0]
```

To fix this build failure, increase the minSdkVersion for your Android project to **19** or above.

### When I add Mobile SDK to my Android project, why do I get an error about invoke-custom support and enabling desugaring?

Mobile SDK for Android uses Java 8 language features and desugaring is disabled by default. If your application uses Android Gradle plugin (AGP) v4.2 and has not enabled Java 8 support, you will see the following build failure:

```
D8: Invoke-customs are only supported starting with Android O (--min-api 26)
Caused by: com.android.builder.dexing.DexArchiveBuilderException: Error while dexing.
The dependency contains Java 8 bytecode. Please enable desugaring by adding the following to build.gradle
android {
	compileOptions {
		sourceCompatibility 1.8
		targetCompatibility 1.8
	}
}

See https://developer.android.com/studio/write/java8-support.html for details.
Alternatively, increase the minSdkVersion to 26 or above.
```

To fix this build failure, you can follow one of two options:
- Add the listed compileOptions from the error message to your app-level build.gradle file.
- Increase the minSdkVersion for your Android project to **26** or above.

### Why do I see a warning in AndroidManifest.xml about missing 'com.adobe.marketing.mobile.FullscreenMessageActivity' class?

After upgrading to latest version of Mobile SDK for Android, you will see the following build warning if your application previously set up in-app messages with Campaign Standard. 

```
Class referenced in the manifest, `com.adobe.marketing.mobile.FullscreenMessageActivity`, was not found in the project or the libraries

Unresolved class 'FullscreenMessageActivity'
```

To resolve the build warning, remove FullscreenMessageActivity from your application's manifest file. Campaign Standard SDK no longer requires application to add **FullscreenMessageActivity** to their manifest.


### How can I track user engagement of push notifications using the Experience Platform Mobile SDK?

Implementing push notification tracking and measurement with the SDK depends on the Experience Cloud solution being used.

* For the Adobe Campaign Standard extension, please read the [Adobe Campaign standard push tracking tutorial](https://experienceleague.adobe.com/docs/campaign-standard/using/administrating/configuring-mobile/push-tracking.html?lang=en).
* For the Adobe Campaign Classic extension, please read the [Adobe Campaign Classic push notifications tracking tutorial](./adobe-campaign-classic/api-reference.md#tracknotification-api).
* For the Adobe Analytics - Mobile Services extension, please read the [set up tracking for Mobile Services push notifications tutorial](./adobe-analytics-mobile-services/index.md#set-up-push-tracking).

## Mobile Core

### What are Lifecycle metrics?

Lifecycle metrics are out-of-the-box metrics that are automatically collected when the SDK is first implemented in your app. For more information, please read the [documentation on Lifecycle metrics](./mobile-core/lifecycle/index.md).

## Adobe Analytics

See the [frequently asked questions for Analytics](./adobe-analytics/faq.md).

## Adobe Experience Platform Edge Network

### Does the Edge Network extension support offline tracking?

Yes, offline tracking is supported by default when sending XDM Experience events since these events have a required timestamp, and there is no separate setting for this as it used to be in the Adobe Analytics extension. The events are backed up in the persistence layer and then sent to the Edge Network in current session if possible, or queued until the next session when a network connection is available.

## Get help

* Visit the SDK [community forum](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-platform/ct-p/adobe-experience-platform-community) to ask questions
* Contact [Adobe Experience Cloud customer care](https://experienceleague.adobe.com/?support-solution=General#support) for immediate assistance

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
