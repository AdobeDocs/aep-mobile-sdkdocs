# Migrate to Adobe Experience Platform 3.x SDKs for Android

<InlineAlert variant="info" slots="text"/>

This Mobile SDK version for Android now supports a minimum API level of 21.

## SDK versions

### Android BOM

<div style="height:20px; width:120px;"></div>

<div style="height:30px; width:140px;">
<a href="https://mvnrepository.com/artifact/com.adobe.marketing.mobile/sdk-bom">
<img src="https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/sdk-bom.svg?logo=android&logoColor=white&label=sdk-bom&style=flat-square&versionPrefix=3" alt="descriptive text"/>
</a>
</div>

### Android extensions

<div style="height:20px; width:120px;"></div>

| Extension | Version |
|---|---|
| [Mobile Core](../../../home/base/mobile-core/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/core.svg?logo=android&logoColor=white&label=core&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/core) |
| [Signal](../../../home/base/mobile-core/signal/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/signal.svg?logo=android&logoColor=white&label=signal&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/signal) |
| [Lifecycle](../../../home/base/mobile-core/lifecycle/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/lifecycle.svg?logo=android&logoColor=white&label=lifecycle&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/lifecycle) |
| [Identity](../../../home/base/mobile-core/identity/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/identity.svg?logo=android&logoColor=white&label=identity&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/identity) |
| [Profile](../../../home/base/profile/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/userprofile.svg?logo=android&logoColor=white&label=userprofile&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/userprofile) |
| [Adobe Experience Platform Assurance](../../../home/base/assurance/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/assurance.svg?logo=android&logoColor=white&label=assurance&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/assurance) |
| [Adobe Experience Platform Edge Network](../../../edge/edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edge.svg?logo=android&logoColor=white&label=edge&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edge) |
| [Identity for Edge Network](../../../edge/identity-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeidentity.svg?logo=android&logoColor=white&label=edgeidentity&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeidentity) |adobe/aepsdk-edgeidentity-android) |
| [Consent for Edge Network](../../../edge/consent-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeconsent.svg?logo=android&logoColor=white&label=edgeconsent&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeconsent) |
| [Media for Edge Network](../../../edge/media-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgemedia.svg?logo=android&logoColor=white&label=edgemedia&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgemedia) |
| [Edge Bridge](../../../solution/adobe-analytics/migrate-to-edge-network.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgebridge.svg?logo=android&logoColor=white&label=edgebridge&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgebridge) |
| [Adobe Journey Optimizer](../../../edge/adobe-journey-optimizer/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/messaging.svg?logo=android&logoColor=white&label=messaging&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/messaging) |
| [Adobe Journey Optimizer - Decisioning](../../../edge/adobe-journey-optimizer-decisioning/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/optimize.svg?logo=android&logoColor=white&label=optimize&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/optimize) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/places.svg?logo=android&logoColor=white&label=places&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/places) |
| [Adobe Analytics](../../../solution/adobe-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/analytics.svg?logo=android&logoColor=white&label=analytics&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/analytics) |
| [Adobe Analytics - Media Analytics for Audio & Video](../../../solution/adobe-media-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/media.svg?logo=android&logoColor=white&label=media&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/media) |
| [Adobe Target](../../../solution/adobe-target/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/target.svg?logo=android&logoColor=white&label=target&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/target) |
| [Adobe Campaign Standard](../../../solution/adobe-campaign-standard/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaign.svg?logo=android&logoColor=white&label=campaign&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaign) |
| [Adobe Campaign Classic](../../../solution/adobe-campaign-classic/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaignclassic.svg?logo=android&logoColor=white&label=campaignclassic&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaignclassic) |
| [Adobe Audience Manager](../../../solution/adobe-audience-manager/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/audience.svg?logo=android&logoColor=white&label=audience&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/audience) |

## Migrate from Adobe Experience Platform 2.x SDKs for Android

If you have implemented Adobe Experience Platform 2.x SDKs for Android, then this guide will help you understand the steps required to migrate your implementation to the Experience Platform 3.x SDKs. In summary, you'll need to:

1. [Update dependencies](#update-dependencies)
2. [Update SDK initialization](#update-sdk-initialization)
3. [Update outdated API references](#update-outdated-api-references)

### Update dependencies

#### Gradle

The Adobe SDK BOM artifact enables managing all compatible versions of Adobe Experience Platform Android extensions by specifying a single BOM version. This is now the recommended way to manage Android SDKs. If you are using Gradle to manage your app dependencies, the following example shows how to start using BOM in the `build.gradle` file.

<InlineAlert variant="warning" slots="text"/>

Using dynamic dependency versions is not recommended for production apps. Refer to this [page](../../../resources/manage-gradle-dependencies.md) for managing Gradle dependencies.

```java
dependencies {
    // implementation 'com.adobe.marketing.mobile:sdk-bom:2.+'
    // implementation 'com.adobe.marketing.mobile:core'
    // implementation 'com.adobe.marketing.mobile:identity'
    // implementation 'com.adobe.marketing.mobile:signal'
    // implementation 'com.adobe.marketing.mobile:lifecycle'
    // implementation 'com.adobe.marketing.mobile:userprofile'

    // Update Adobe SDK BOM artifact to the latest 3.x.x version.
    implementation 'com.adobe.marketing.mobile:sdk-bom:3.+'
    implementation 'com.adobe.marketing.mobile:core'
    implementation 'com.adobe.marketing.mobile:identity'
    implementation 'com.adobe.marketing.mobile:signal'
    implementation 'com.adobe.marketing.mobile:lifecycle'
    implementation 'com.adobe.marketing.mobile:userprofile'
}
```

Save the `build.gradle` file and select `Sync Project with Gradle Files` in Android Studio to download the 3.x SDKs.

#### Manual library import

If you are importing SDK libraries manually, make sure to update your libraries by downloading the most recent 3.x binaries directly from [Maven Central Repository](https://mvnrepository.com/artifact/com.adobe.marketing.mobile).

### Update SDK initialization

The `MobileCore.start()` API and the `registerExtension` API for each extension, which were deprecated in the 2.x version of the mobile SDK, have been removed in the 3.x version. If you're still using these APIs, refer [here](./migrate-to-2x.md#update-sdk-initialization) to initialize the SDK and register the extensions using the `MobileCore.registerExtensions()` API.

## Update outdated API references

Some of the APIs available in previous major versions of the Mobile SDK for Android are now deprecated or removed. You can choose to replace the obsolete APIs in your code with the alternative APIs in the 3.x version, as described below.

<InlineAlert variant="warning" slots="text"/>

The `registerExtension` API for each extension that was deprecated in the 2.x version of the mobile SDK has been removed in the 3.x version of the mobile SDK. See the [Update SDK initialization](#update-sdk-initialization) section for more details.

### Edge Bridge

If you are using Edge Bridge, please note the following changes to the Edge Bridge API:

**Action name syntax** 

Previously, when accessing an action, the action name lived under `data.action`. Under the new syntax, the action now lives within the `data.__adobe.analytics` object as follows:

```json
{
 "data":{
    "__adobe": {
        "analytics": {
          "events": "event1,event2,event3,event4,event12,event13",
            "products":
";product1;1;5.99;event12=5.99;evar5=merchEvar5,;product2;2;10.99;event13=6;eVar6=mercheVar6",
            "c1": "propValue1",
            "currencyCode": "USD"
            "contextData":{
                "key1": "value1"
            },
            "linkName": "action name",
            "linkType": "lnk_o"
        }
    },
    "key2": "value2"
 }
```

Please note that the action name now lives under **linkName**.

**Page name syntax**

Previously, when accessing a page name, the page name lived under the `data.state` object. Under the new syntax, the page name now lives within the `data.__adobe.analytics` object as follows:

```json
{
 "data":{
    "__adobe": {
        "analytics": {
          "events": "event1,event2,event3,event4,event12,event13",
            "products":
";product1;1;5.99;event12=5.99;evar5=merchEvar5,;product2;2;10.99;event13=6;eVar6=mercheVar6",
            "prop1": "propValue1",
            "contextData":{
                "key1": "value1"
            },
            "pageName": "view name"
        }
    }
 }
```
