import Tabs from './tabs/migrate-to-2x.md'

# Migrate to Adobe Experience Platform 2.x SDKs for Android

<InlineAlert variant="info" slots="text"/>

This Mobile SDK version for Android now supports a minimum API level of 19.

## SDK versions

### Android BOM

<div style="height:20px; width:120px;"></div>

<div style="height:30px; width:140px;">
<a href="https://mvnrepository.com/artifact/com.adobe.marketing.mobile/sdk-bom">
<img src="https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/sdk-bom.svg?logo=android&logoColor=white&label=sdk-bom&style=flat-square&versionPrefix=2" alt="descriptive text"/>
</a>
</div>

### Android extensions

<div style="height:20px; width:120px;"></div>

| Extension | Version |
|---|---|
| [Mobile Core](../../../home/base/mobile-core/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/core.svg?logo=android&logoColor=white&label=core&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/core) |
| [Signal](../../../home/base/mobile-core/signal/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/signal.svg?logo=android&logoColor=white&label=signal&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/signal) |
| [Lifecycle](../../../home/base/mobile-core/lifecycle/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/lifecycle.svg?logo=android&logoColor=white&label=lifecycle&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/lifecycle) |
| [Identity](../../../home/base/mobile-core/identity/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/identity.svg?logo=android&logoColor=white&label=identity&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/identity) |
| [Profile](../../../home/base/profile/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/userprofile.svg?logo=android&logoColor=white&label=userprofile&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/userprofile) |
| [Adobe Experience Platform Assurance](../../../home/base/assurance/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/assurance.svg?logo=android&logoColor=white&label=assurance&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/assurance) |
| [Adobe Experience Platform Edge Network](../../../edge/edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edge.svg?logo=android&logoColor=white&label=edge&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edge) |
| [Identity for Edge Network](../../../edge/identity-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeidentity.svg?logo=android&logoColor=white&label=edgeidentity&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeidentity) |adobe/aepsdk-edgeidentity-android) |
| [Consent for Edge Network](../../../edge/consent-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeconsent.svg?logo=android&logoColor=white&label=edgeconsent&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeconsent) |
| [Media for Edge Network](../../../edge/media-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgemedia.svg?logo=android&logoColor=white&label=edgemedia&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgemedia) |
| [Edge Bridge](../../../solution/adobe-analytics/migrate-to-edge-network.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgebridge.svg?logo=android&logoColor=white&label=edgebridge&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgebridge) |
| [Adobe Journey Optimizer](../../../edge/adobe-journey-optimizer/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/messaging.svg?logo=android&logoColor=white&label=messaging&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/messaging) |
| [Adobe Journey Optimizer - Decisioning](../../../edge/adobe-journey-optimizer-decisioning/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/optimize.svg?logo=android&logoColor=white&label=optimize&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/optimize) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/places.svg?logo=android&logoColor=white&label=places&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/places) |
| [Adobe Analytics](../../../solution/adobe-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/analytics.svg?logo=android&logoColor=white&label=analytics&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/analytics) |
| [Adobe Analytics - Media Analytics for Audio & Video](../../../solution/adobe-media-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/media.svg?logo=android&logoColor=white&label=media&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/media) |
| [Adobe Target](../../../solution/adobe-target/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/target.svg?logo=android&logoColor=white&label=target&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/target) |
| [Adobe Campaign Standard](../../../solution/adobe-campaign-standard/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaign.svg?logo=android&logoColor=white&label=campaign&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaign) |
| [Adobe Campaign Classic](../../../solution/adobe-campaign-classic/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaignclassic.svg?logo=android&logoColor=white&label=campaignclassic&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaignclassic) |
| [Adobe Audience Manager](../../../solution/adobe-audience-manager/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/audience.svg?logo=android&logoColor=white&label=audience&style=flat-square&versionPrefix=2)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/audience) |

## Migrate from Adobe Experience Platform 1.x SDKs for Android

If you have implemented Adobe Experience Platform 1.x SDKs for Android, then this guide will help you understand the steps required to migrate your implementation to the Experience Platform 2.x SDKs. In summary, you'll need to:

1. [Update dependencies](#update-dependencies)
2. [Update SDK initialization](#update-sdk-initialization)
3. [Update outdated API references](#update-outdated-api-references)

### Update dependencies

#### Gradle

The Adobe SDK BOM artifact enables managing all compatible versions of Adobe Experience Platform Android extensions by specifying a single BOM version. This is now the recommended way to manage Android SDKs. If you are using Gradle to manage your app dependencies, the following example shows how to start using BOM in the `build.gradle` file.

<InlineAlert variant="warning" slots="text"/>

Using dynamic dependency versions is not recommended for production apps. Refer to this [page](../../../resources/manage-gradle-dependencies.md) for managing Gradle dependencies.

<InlineAlert variant="warning" slots="text"/>

Starting with version 2.0.0, the `sdk-core` bundle (which includes Core, Lifecycle, Identity, Signal) will no longer receive updates. You need to include those libraries individually as described below.

```java
dependencies {
    //implementation 'com.adobe.marketing.mobile:sdk-core:1.+'
    //implementation 'com.adobe.marketing.mobile:userprofile:1.+'

    // Use Adobe SDK BOM artifact to manage all compatible versions of Adobe Experience Platform Android extensions.
    implementation 'com.adobe.marketing.mobile:sdk-bom:2.+'
    implementation 'com.adobe.marketing.mobile:core'
    implementation 'com.adobe.marketing.mobile:identity'
    implementation 'com.adobe.marketing.mobile:signal'
    implementation 'com.adobe.marketing.mobile:lifecycle'
    implementation 'com.adobe.marketing.mobile:userprofile'
}
```

Save the `build.gradle` file and select `Sync Project with Gradle Files` in Android Studio to download the 2.x SDKs.

#### Manual library import

If you are importing SDK libraries manually, make sure to update your libraries by downloading the most recent 2.x binaries directly from [Maven Central Repository](https://mvnrepository.com/artifact/com.adobe.marketing.mobile).

### Update SDK initialization

After you have imported the new Android libraries, you'll need to update SDK initialization code as described below. With Mobile Core version 2.0.0 and above, the `MobileCore.start()` API is no longer required. The SDK has simplified initialization and registration of extensions by providing the `MobileCore.registerExtensions()` API. After the given extensions have been registered, the SDK will be initialized and the completion block will be executed. The code which used to reside in the start() block will now reside in the `MobileCore.registerExtensions()`'s completion block.

The following code snippets show the recommended initialization code for the 2.x Mobile SDKs.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Java

<Tabs query="lang=java"/>

Kotlin

<Tabs query="lang=kotlin"/>

## Update outdated API references

Some of the APIs available in previous major versions of the Mobile SDK for Android are now deprecated or removed. You can choose to replace the obsolete APIs in your code with the alternative APIs in the 2.x version, as described below.

<InlineAlert variant="warning" slots="text"/>

The `registerExtension` API for each extension is deprecated in the 2.x version of the mobile SDK and will be removed in the 3.x version of the mobile SDK. You don't need to register extensions separately, now you can call `MobileCore.registerExtensions` API instead. See the [Update SDK initialization](#update-sdk-initialization) section for more details.

### Profile

| Deprecated API | Alternative API |
| :------------- | :-------------- |
| UserProfile.updateUserAttribute | [UserProfile.updateUserAttributes](../../../home/base/profile/api-reference.md) |
| UserProfile.removeUserAttribute | [UserProfile.removeUserAttributes](../../../home/base/profile/api-reference.md) |

### Adobe Target

| Removed API | Alternative API |
| :------------- | :-------------- |
| Target.locationsDisplayed | [Target.displayedLocations](../../../solution/adobe-target//api-reference.md) |
| Target.locationClicked | [Target.clickedLocation](../../../solution/adobe-target//api-reference.md) |
| com.adobe.marketing.mobile.TargetRequest | Moved into **target** subpackage. Update import statements to reference **com.adobe.marketing.mobile.target.TargetRequest** |
| com.adobe.marketing.mobile.TargetPrefetch | Moved into **target** subpackage. Update import statements to reference **com.adobe.marketing.mobile.target.TargetPrefetch** |
| com.adobe.marketing.mobile.TargetOrder | Moved into **target** subpackage. Update import statements to reference **com.adobe.marketing.mobile.target.TargetOrder** |
| com.adobe.marketing.mobile.TargetProduct | Moved into **target** subpackage. Update import statements to reference **com.adobe.marketing.mobile.target.TargetProduct** |
| com.adobe.marketing.mobile.TargetParameters | Moved into **target** subpackage. Update import statements to reference **com.adobe.marketing.mobile.target.TargetParameters** |

### Adobe Campaign Classic

| Removed API | Alternative API |
| :------------- | :-------------- |
| CampaignClassic.registerDevice | The [CampaignClassic.registerDevice](../../../solution/adobe-campaign-classic/api-reference.md) API no longer provides a callback method for registration status since a `false` value cannot be accurately used as a signal to retry requests. |

### Places Service

| Removed API | Alternative API |
| :------------- | :-------------- |
| **Places.getNearbyPointsOfInterest** API without the error callback | Use [Places.getNearbyPointsOfInterest](../../../solution/places/api-reference.md) API which provides both successCallback and errorCallback |
| com.adobe.marketing.mobile.PlacesAuthorizationStatus | Moved into **places** subpackage. Update import statements to reference **com.adobe.marketing.mobile.places.PlacesAuthorizationStatus** |
| com.adobe.marketing.mobile.PlacesPOI | Moved into **places** subpackage. Update import statements to reference **com.adobe.marketing.mobile.places.PlacesPOI** |
| com.adobe.marketing.mobile.PlacesRequestError | Moved into **places** subpackage. Update import statements to reference **com.adobe.marketing.mobile.places.PlacesRequestError** |

## Frequently asked questions

### Is there a change in minimum API level supported by Mobile SDK for Android?

Mobile SDK for Android now supports a minimum API level of **19**. If your application targets a lower API level, you will see the following build failure:

``` text
Manifest merger failed : uses-sdk:minSdkVersion 14 cannot be smaller than version 19 declared in library [com.adobe.marketing.mobile:core:2.0.0]
```

To fix this build failure, increase the minSdkVersion for your Android project to **19** or above.

### When I add Mobile SDK to my Android project, why do I get an error about invoke-custom support and enabling desugaring?

Mobile SDK for Android uses Java 8 language features and desugaring is disabled by default. If your application uses Android Gradle plugin (AGP) v4.2 and has not enabled Java 8 support, you will see the following build failure:

``` text
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

* Add the listed compileOptions from the error message to your app-level build.gradle file.
* Increase the minSdkVersion for your Android project to **26** or above.

### Why do I see 'java.lang.NoSuchMethodError' after upgrading to the 2.x  version of Mobile SDK for Android?

The Mobile Core 2.x SDK for Android includes changes that break compatiblity with solution SDKs developed for earlier verisons of the Mobile Core SDK.

If you attempt to use 2.x Mobile Core SDK and solution SDKs that were built for previous versions of Mobile Core to build your app, you may encounter the following error:

``` text
2023-02-13 17:45:02.501 14264-14264/XXX E/AndroidRuntime: FATAL EXCEPTION: main
    Process: XXX, PID: XXXXX
    java.lang.NoSuchMethodError: No static method getCore()Lcom/adobe/marketing/mobile/Core; in class Lcom/adobe/marketing/mobile/MobileCore; or its super classes (declaration of 'com.adobe.marketing.mobile.MobileCore' appears in XXX
```

To resolve this error, upgrade all your solution SDKs to the [most recent versions](../home/current-sdk-versions.md#android).

### Why do I not see 'sdk-core' dependency for 2.x version of Mobile SDK for Android?

The **com.adobe.marketing.mobile:sdk-core** dependency is no longer available for the 2.x version of Mobile SDK. Instead, select the appropriate solution SDKs based on your requirements from the following options:

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:2.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:lifecycle'
implementation 'com.adobe.marketing.mobile:identity'
implementation 'com.adobe.marketing.mobile:signal'
```

### How do I upgrade to the 2.x version of Mobile SDK for Android if my app uses Mobile Services?

Adobe Mobile Service's end-of-life date is [December 31, 2022](https://experienceleague.adobe.com/docs/discontinued/using/mobile-services.html). To upgrade to the 2.x version of Mobile SDK for Android, you have to remove the Mobile Services dependency from your app.

### Why do I see a warning in AndroidManifest.xml about missing 'com.adobe.marketing.mobile.FullscreenMessageActivity' class?

After upgrading to the 2.x version of Mobile SDK for Android, you will see the following build warning if your application previously set up in-app messages with Campaign Standard.

``` text
Class referenced in the manifest, `com.adobe.marketing.mobile.FullscreenMessageActivity`, was not found in the project or the libraries
Unresolved class 'FullscreenMessageActivity'
```

To resolve the build warning, remove FullscreenMessageActivity from your application's manifest file. Campaign Standard SDK no longer requires application to add **FullscreenMessageActivity** to their manifest.

### Why do I see 'unresolved reference' error when upgrading Adobe Target SDK?

The [2.x version](../solution/adobe-target/release-notes.md#android-target-200) of Adobe Target Mobile SDK has the following breaking API changes for alignment with the iOS SDK:

* **locationsDisplayed** is now **displayedLocations**
* **locationClicked** is now **clickedLocation**

The public classes **TargetRequest**, **TargetPrefetch**, **TargetOrder**, **TargetProduct** and **TargetParameters** are consolidated under the **target** subpackage.

To resolve the error, fix the method references and update your target import statements:

```java
import com.adobe.marketing.mobile.target.TargetRequest;
import com.adobe.marketing.mobile.target.TargetPrefetch;
import com.adobe.marketing.mobile.target.TargetOrder;
import com.adobe.marketing.mobile.target.TargetProduct;
import com.adobe.marketing.mobile.target.TargetParameters;
```

In addition, replace the previously deprecated Target APIs and classes since they have been removed. For more information, please read this section on the [deprecated APIs and the recommended alternative APIs](https://developer.adobe.com/client-sdks/previous-versions/documentation/adobe-target/deprecated-apis/).

### Why do I see `registerDevice(String, String, Map<String, Object>)` cannot be applied to [arguments] error when upgrading Adobe Campaign Classic SDK?

The `registerDevice` API in the 2.x Campaign Classic Android Mobile SDK, similar to iOS SDK, no longer provides a callback method for registration status since a `false` value cannot be accurately used as a signal to retry requests.

To resolve the error, remove the callback (`AdobeCallback<Boolean>`) parameter from the method invocation.

### Why do I see `getNearbyPointsOfInterest(Location, int, AdobeCallback<List<PlacesPOI>>, AdobeCallback<PlacesRequestError>)` cannot be applied to [arguments] error when upgrading Adobe Experience Platform Location Service SDK?

The `getNearbyPointsOfInterest` API without the error callback has been removed. Alternatively, use the below overloaded API which provides both successCallback and errorCallback:

```java
public static void getNearbyPointsOfInterest(final Location location,
      final int limit,
      final AdobeCallback<List<PlacesPOI>> successCallback,
      final AdobeCallback<PlacesRequestError> errorCallback)
```

The public classes `PlacesAuthorizationStatus`, `PlacesPOI`, and `PlacesRequestError` are consolidated under the `places` subpackage.

To resolve the error, fix the method references and update your places import statements:

```java
import com.adobe.marketing.mobile.places.PlacesAuthorizationStatus;
import com.adobe.marketing.mobile.places.PlacesPOI;
import com.adobe.marketing.mobile.places.PlacesRequestError;
```
