---
title: Current SDK versions
description: An overview that shows the currently available mobile extensions, along with their versions, for each platform.
keywords:
- Guide
- Versions
---

# Current SDK versions

## Android

<InlineAlert variant="info" slots="text"/>

**Migrate to latest Mobile SDKs for Android**<br/>If you are currently using older SDK versions, please see the [Migrating to latest Mobile SDKs for Android](../resources/migration/android/index.md) guide for next steps.

<InlineAlert variant="info" slots="text"/>

**Start using the BOM artifact for Android**<br/> The Adobe SDK BOM artifact enables managing all compatible versions of Adobe Experience Platform Android extensions by specifying a single BOM version. This is now the recommended way to manage Android SDKs. For the installation instructions, see the steps to [add dependencies to your project](../home/getting-started/get-the-sdk.md#installation-instructions). The BOM project is open-sourced. For more information, please refer to the [README](https://github.com/adobe/aepsdk-commons/blob/main/android/aepsdk-bom/README.md) file located in the public repository.

### Android BOM

<div style="height:20px; width:120px;"></div>

<div style="height:30px; width:140px;">
<a href="https://mvnrepository.com/artifact/com.adobe.marketing.mobile/sdk-bom">
<img src="https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/sdk-bom.svg?logo=android&logoColor=white&label=sdk-bom&style=flat-square" alt="descriptive text"/>
</a>
</div>

The Android BOM (Bill of Materials) artifact has been released to Maven Central. The above Maven Badge displays the latest BOM version. To obtain information about which Android extension versions are mapped to the latest BOM, refer to the [release notes](https://developer.adobe.com/client-sdks/home/release-notes/).

### Android extensions

<div style="height:20px; width:120px;"></div>

| Extension | Maven | Github | Testapp |
|---|---|---|---|
| [Mobile Core](./base/mobile-core/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/core.svg?logo=android&logoColor=white&label=core&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/core) | [GitHub](https://github.com/adobe/aepsdk-core-android) | [Test app](https://github.com/adobe/aepsdk-core-android/tree/main/code/testapp) |
| [Rules Engine](./base/mobile-core/rules-engine/index.md) | Bundled in Mobile Core | - | - |
| [Signal](./base/mobile-core/signal/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/signal.svg?logo=android&logoColor=white&label=signal&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/signal) | [GitHub](https://github.com/adobe/aepsdk-core-android) | [Test app](https://github.com/adobe/aepsdk-core-android/tree/main/code/testapp) |
| [Lifecycle](./base/mobile-core/lifecycle/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/lifecycle.svg?logo=android&logoColor=white&label=lifecycle&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/lifecycle) | [GitHub](https://github.com/adobe/aepsdk-core-android) | [Test app](https://github.com/adobe/aepsdk-core-android/tree/main/code/testapp) |
| [Identity](./base/mobile-core/identity/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/identity.svg?logo=android&logoColor=white&label=identity&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/identity) | [GitHub](https://github.com/adobe/aepsdk-core-android) | [Test app](https://github.com/adobe/aepsdk-core-android/tree/main/code/testapp) |
| [Profile](./base/profile/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/userprofile.svg?logo=android&logoColor=white&label=userprofile&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/userprofile) | [GitHub](https://github.com/adobe/aepsdk-userprofile-android) | [Test app](https://github.com/adobe/aepsdk-userprofile-android/tree/main/code/testapp) |
| [Adobe Experience Platform Assurance](./base/assurance/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/assurance.svg?logo=android&logoColor=white&label=assurance&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/assurance) | [GitHub](https://github.com/adobe/aepsdk-assurance-android) | [Test app](https://github.com/adobe/aepsdk-assurance-android/tree/main/code/assurance-testapp) |
| [Adobe Experience Platform Edge Network](../edge/edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edge.svg?logo=android&logoColor=white&label=edge&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edge) | [GitHub](https://github.com/adobe/aepsdk-edge-android) | [Test app](https://github.com/adobe/aepsdk-edge-android/tree/main/code/app-kotlin) |
| [Identity for Edge Network](../edge/identity-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeidentity.svg?logo=android&logoColor=white&label=edgeidentity&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeidentity) | [GitHub](https://github.com/adobe/aepsdk-edgeidentity-android) | [Test app](https://github.com/adobe/aepsdk-edgeidentity-android/tree/main/code/app) |
| [Consent for Edge Network](../edge/consent-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeconsent.svg?logo=android&logoColor=white&label=edgeconsent&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeconsent) | [GitHub](https://github.com/adobe/aepsdk-edgeconsent-android) | [Test app](https://github.com/adobe/aepsdk-edgeconsent-android/tree/main/code/app) |
| [Media for Edge Network](../edge/media-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgemedia.svg?logo=android&logoColor=white&label=edgemedia&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgemedia) | [GitHub](https://github.com/adobe/aepsdk-edgemedia-android) | [Test app](https://github.com/adobe/aepsdk-edgemedia-android/tree/main/code/testapp-kotlin) |
| [Edge Bridge](../solution/adobe-analytics/migrate-to-edge-network.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgebridge.svg?logo=android&logoColor=white&label=edgebridge&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgebridge) | [GitHub](https://github.com/adobe/aepsdk-edgebridge-android) | [Test app](https://github.com/adobe/aepsdk-edgebridge-android/tree/main/code/app) |
| [Adobe Journey Optimizer](../edge/adobe-journey-optimizer/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/messaging.svg?logo=android&logoColor=white&label=messaging&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/messaging) | [GitHub](https://github.com/adobe/aepsdk-messaging-android) | [Test app](https://github.com/adobe/aepsdk-messaging-android/tree/main/code/testapp) |
| [Adobe Journey Optimizer - Decisioning](../edge/adobe-journey-optimizer-decisioning/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/optimize.svg?logo=android&logoColor=white&label=optimize&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/optimize) | [GitHub](https://github.com/adobe/aepsdk-optimize-android) | [Test app](https://github.com/adobe/aepsdk-optimize-android/tree/main/code/testapp) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/places.svg?logo=android&logoColor=white&label=places&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/places) | [GitHub](https://github.com/adobe/aepsdk-places-android) | [Test app](https://github.com/adobe/aepsdk-places-android/tree/main/code/testapp) |
| [Adobe Analytics](../solution/adobe-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/analytics.svg?logo=android&logoColor=white&label=analytics&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/analytics) | [GitHub](https://github.com/adobe/aepsdk-analytics-android) | [Test app](https://github.com/adobe/aepsdk-analytics-android/tree/main/code/testapp) |
| [Adobe Analytics - Media Analytics for Audio & Video](../solution/adobe-media-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/media.svg?logo=android&logoColor=white&label=media&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/media) | [GitHub](https://github.com/adobe/aepsdk-media-android) | [Test app](https://github.com/adobe/aepsdk-media-android/tree/main/code/testapp) |
| [Adobe Target](../solution/adobe-target/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/target.svg?logo=android&logoColor=white&label=target&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/target) | [GitHub](https://github.com/adobe/aepsdk-target-android) | [Test app](https://github.com/adobe/aepsdk-target-android/tree/main/code/testapp) |
| [Adobe Campaign Standard](../solution/adobe-campaign-standard/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaign.svg?logo=android&logoColor=white&label=campaign&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaign) | [GitHub](https://github.com/adobe/aepsdk-campaign-android) | [Test app](https://github.com/adobe/aepsdk-campaign-android/tree/main/code/testapps) |
| [Adobe Campaign Classic](../solution/adobe-campaign-classic/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaignclassic.svg?logo=android&logoColor=white&label=campaignclassic&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaignclassic) | [GitHub](https://github.com/adobe/aepsdk-campaignclassic-android) | [Test app](https://github.com/adobe/aepsdk-campaignclassic-android/tree/main/code/testapp) |
| [Adobe Audience Manager](../solution/adobe-audience-manager/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/audience.svg?logo=android&logoColor=white&label=audience&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/audience) | [GitHub](https://github.com/adobe/aepsdk-audience-android) | [Test app](https://github.com/adobe/aepsdk-audience-android/tree/main/code/app) |
| Adobe Analytics - Mobile Services | Not supported | | |
| Places Monitor | Deprecated | | |

## iOS

<InlineAlert variant="info" slots="text"/>

**Migrate to latest Mobile SDKs for iOS**<br/>If you are currently using older SDK versions, please see the [Migrating to latest Mobile SDKs for iOS](../resources/migration/ios/index.md) guide for next steps.

<InlineAlert variant="info" slots="text"/>

Starting May 7th, 2024, our iOS releases will include signed XCFrameworks. Additionally, we've updated all our 5.0.0 releases with signed XCFrameworks.

| Extension | tvOS | App Extension | CocoaPods | GitHub | Test app |
|---|---|---|---|---|---|
| [Mobile Core](./base/mobile-core/index.md) | ✔️ | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPCore&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPCore) | [GitHub](https://github.com/adobe/aepsdk-core-ios) | [Test app](https://github.com/adobe/aepsdk-core-ios/tree/main/TestApps) |
| [Rules Engine](./base/mobile-core/rules-engine/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-rulesengine-ios.svg?label=AEPRulesEngine&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPRulesEngine) | [GitHub](https://github.com/adobe/aepsdk-rulesengine-ios) | - |
| [Signal](./base/mobile-core/signal/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPSignal&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPSignal) | [GitHub](https://github.com/adobe/aepsdk-core-ios) | [Test app](https://github.com/adobe/aepsdk-core-ios/tree/main/TestApps) |
| [Identity](./base/mobile-core/identity/index.md) | ✔️ | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPIdentity&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPIdentity) | [GitHub](https://github.com/adobe/aepsdk-core-ios) | [Test app](https://github.com/adobe/aepsdk-core-ios/tree/main/TestApps) |
| [Lifecycle](./base/mobile-core/lifecycle/index.md) | ✔️ | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPLifecycle&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPLifecycle) | [GitHub](https://github.com/adobe/aepsdk-core-ios) | [Test app](https://github.com/adobe/aepsdk-core-ios/tree/main/TestApps) |
| [Profile](./base/profile/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-userprofile-ios.svg?label=AEPUserProfile&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPUserProfile) | [GitHub](https://github.com/adobe/aepsdk-userprofile-ios) | - |
| [Adobe Experience Platform Assurance](./base/assurance/index.md) |  |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-assurance-ios.svg?label=AEPAssurance&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPAssurance) | [GitHub](https://github.com/adobe/aepsdk-assurance-ios) | [Test app](https://github.com/adobe/aepsdk-assurance-ios/tree/main/TestApp) |
| [Adobe Experience Platform Edge Network](../edge/edge-network/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edge-ios.svg?label=AEPEdge&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdge) | [GitHub](https://github.com/adobe/aepsdk-edge-ios) | [Test app](https://github.com/adobe/aepsdk-edge-ios/tree/main/TestApps) |
| [Identity for Edge Network](../edge/identity-for-edge-network/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edgeidentity-ios.svg?label=AEPEdgeIdentity&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdgeIdentity) | [GitHub](https://github.com/adobe/aepsdk-edgeidentity-ios) | [Test app](https://github.com/adobe/aepsdk-edgeidentity-ios/tree/main/SampleApps) |
| [Consent for Edge Network](../edge/consent-for-edge-network/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edgeconsent-ios.svg?label=AEPEdgeConsent&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdgeConsent) | [GitHub](https://github.com/adobe/aepsdk-edgeconsent-ios) | [Test app](https://github.com/adobe/aepsdk-edgeconsent-ios/tree/main/TestApp) |
| [Media for Edge Network](../edge/media-for-edge-network/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edgemedia-ios.svg?label=AEPEdgeMedia&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdgeMedia) | [GitHub](https://github.com/adobe/aepsdk-edgemedia-ios) | [Test app](https://github.com/adobe/aepsdk-edgemedia-ios/tree/main/TestApps) |
| [Edge Bridge](../adobe-analytics/migrate-to-edge-network.md) |  |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edgebridge-ios.svg?label=AEPEdgeBridge&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdgeBridge) | [GitHub](https://github.com/adobe/aepsdk-edgebridge-ios) | [Test app](https://github.com/adobe/aepsdk-edgebridge-ios/tree/main/TestApps) |
| [Adobe Journey Optimizer](../edge/adobe-journey-optimizer/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-messaging-ios.svg?label=AEPMessaging&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPMessaging) | [GitHub](https://github.com/adobe/aepsdk-messaging-ios) | [Test app](https://github.com/adobe/aepsdk-messaging-ios/tree/main/TestApps) |
| [Adobe Journey Optimizer - Decisioning](../edge/adobe-journey-optimizer-decisioning/index.md) |   | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-optimize-ios.svg?label=AEPOptimize&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPOptimize) | [GitHub](https://github.com/adobe/aepsdk-optimize-ios) | [Test app](https://github.com/adobe/aepsdk-optimize-ios/tree/main/TestApps) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html) |  |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-places-ios.svg?label=AEPPlaces&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPPlaces) | [GitHub](https://github.com/adobe/aepsdk-places-ios) | [Test app](https://github.com/adobe/aepsdk-places-ios/tree/main/TestApps) |
| [Adobe Analytics](../solution/adobe-analytics/index.md) | ✔️ | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-analytics-ios.svg?label=AEPAnalytics&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPAnalytics) | [GitHub](https://github.com/adobe/aepsdk-analytics-ios) | [Test app](https://github.com/adobe/aepsdk-analytics-ios/tree/main/TestApp) |
| [Adobe Analytics - Media Analytics for Audio & Video](../solution/adobe-media-analytics/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-media-ios.svg?label=AEPMedia&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPMedia) | [GitHub](https://github.com/adobe/aepsdk-media-ios) | [Test app](https://github.com/adobe/aepsdk-media-ios/tree/main/TestApp) |
| [Adobe Target](../solution/adobe-target/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-target-ios.svg?label=AEPTarget&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPTarget) | [GitHub](https://github.com/adobe/aepsdk-target-ios) | [Test app](https://github.com/adobe/aepsdk-target-ios/tree/main/AEPTargetDemoApp) |
| [Adobe Campaign Standard](../solution/adobe-campaign-standard/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-campaign-ios.svg?label=AEPCampaign&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPCampaign) | [GitHub](https://github.com/adobe/aepsdk-campaign-ios) | [Test app](https://github.com/adobe/aepsdk-campaign-ios/tree/main/CampaignTester) |
| [Adobe Campaign Classic](../solution/adobe-campaign-classic/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-campaignclassic-ios.svg?label=AEPCampaignClassic&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPCampaignClassic) | [GitHub](https://github.com/adobe/aepsdk-campaignclassic-ios) | [Test app](https://github.com/adobe/aepsdk-campaignclassic-ios/tree/main/TestApp) |
| [Adobe Audience Manager](../solution/adobe-audience-manager/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-audience-ios.svg?label=AEPAudience&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPAudience) | [GitHub](https://github.com/adobe/aepsdk-audience-ios) | [Test app](https://github.com/adobe/aepsdk-audience-ios/tree/main/AudienceSampleApp) |
| Adobe Analytics - Mobile Services | | Not supported | | | |
| Places Monitor | | Deprecated | | | |

## React Native

Adobe Experience Platform Mobile SDK plugin for React Native supports React Native **version 0.60.0 or later**. For the latest installation instructions, see the README file in the [`aepsdk-react-native`](https://github.com/adobe/aepsdk-react-native#installation) repository.

<InlineAlert variant="info" slots="text"/>

React Native 0.7x introduced support for a new architecture. We don't yet support the new architecture.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for React Native are compatible with the [Android](#android) and [iOS](#ios) native libraries. Please refer to the test app for an implementation example [here](https://github.com/adobe/aepsdk-react-native/tree/main/apps).

<InlineAlert variant="warning" slots="text"/>

If you are currently using the ACP-prefixed React Native libraries, please see [the guide to migrate to latest available version](https://github.com/adobe/aepsdk-react-native/blob/main/docs/migration.md) for React Native.

| Extension | npmjs |
|---|---|
| [Mobile Core](./base/mobile-core/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepcore.svg?color=green&label=%40adobe%2Freact-native-aepcore&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepcore) |
| [Profile](./base/profile/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepuserprofile.svg?color=green&label=%40adobe%2Freact-native-aepuserprofile&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepuserprofile) |
| [Adobe Experience Platform Assurance](./base/assurance/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepassurance.svg?color=green&label=%40adobe%2Freact-native-aepassurance&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepassurance) |
| [Adobe Experience Platform Edge Network](../edge/edge-network/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedge.svg?color=green&label=%40adobe%2Freact-native-aepedge&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedge) |
| [Identity for Edge Network](../edge/identity-for-edge-network/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedgeidentity.svg?color=green&label=%40adobe%2Freact-native-aepedgeidentity&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedgeidentity) |
| [Consent for Edge Network](../edge/consent-for-edge-network/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedgeconsent.svg?color=green&label=%40adobe%2Freact-native-aepedgeconsent&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedgeconsent) |
| [Edge Bridge](../solution/adobe-analytics/migrate-to-edge-network.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedgebridge.svg?color=green&label=%40adobe%2Freact-native-aepedgebridge&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedgebridge) |
| [Adobe Journey Optimizer](../edge/adobe-journey-optimizer/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepmessaging.svg?color=green&label=%40adobe%2Freact-native-aepmessaging&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepmessaging) |
| [Adobe Journey Optimizer - Decisioning](../edge/adobe-journey-optimizer-decisioning/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepoptimize.svg?color=green&label=%40adobe%2Freact-native-aepoptimize&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepoptimize) |
| [Places Service](../solution/places/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepplaces.svg?color=green&label=%40adobe%2Freact-native-aepplaces&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepplaces) |
| [Adobe Target](../solution/adobe-target/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aeptarget.svg?color=green&label=%40adobe%2Freact-native-aeptarget&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aeptarget) |
| [Adobe Campaign Classic](../solution/adobe-campaign-classic/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepcampaignclassic.svg?color=green&label=%40adobe%2Freact-native-aepcampaignclassic&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepcampaignclassic) |
| Adobe Analytics| Not Supported - Analytics workflows supported through Edge or Edge Bridge extensions, see [guide to migrate to Edge Network](../solution/adobe-analytics/migrate-to-edge-network.md). |
| Adobe Analytics - Media Analytics for Audio & Video| Not Supported  |
| Adobe Audience Manager| Not Supported  |
| Adobe Campaign Standard| Not Supported  |
| Place Monitor| Deprecated |

## Flutter

Adobe Experience Platform Mobile SDK plugin for Flutter supports Flutter **versions 2.0.0 or later**. For the latest installation instructions, see the `README` file in the [`aepsdk-flutter`](https://github.com/adobe/aepsdk_flutter#installation) repository.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for Flutter are compatible with the [Android](#android) and [iOS](#ios) native libraries. Please refer to the test Test app for an implementation example [here](https://github.com/adobe/aepsdk_flutter/tree/main/example).

<InlineAlert variant="warning" slots="text"/>

If you are currently using the ACP-prefixed Flutter libraries, please see [the guide to migrate to latest available version](https://github.com/adobe/aepsdk_flutter/blob/main/docs/migration.md) for Flutter.

| Extension | pub.dev |
|---|---|
| [Mobile Core](./base/mobile-core/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepcore.svg)](https://pub.dartlang.org/packages/flutter_aepcore) |
| [Profile](./base/profile/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepuserprofile.svg)](https://pub.dartlang.org/packages/flutter_aepuserprofile) |
| [Adobe Experience Platform Assurance](./base/assurance/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepassurance.svg)](https://pub.dartlang.org/packages/flutter_aepassurance) |
| [Adobe Experience Platform Edge Network](../edge/edge-network/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedge.svg)](https://pub.dartlang.org/packages/flutter_aepedge) |
| [Identity for Edge Network](../edge/identity-for-edge-network/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedgeidentity.svg)](https://pub.dartlang.org/packages/flutter_aepedgeidentity) |
| [Consent for Edge Network](../edge/consent-for-edge-network/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedgeconsent.svg)](https://pub.dartlang.org/packages/flutter_aepedgeconsent) |
| [Edge Bridge](../solution/adobe-analytics/migrate-to-edge-network.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedgebridge.svg)](https://pub.dartlang.org/packages/flutter_aepedgebridge) |
| [Adobe Journey Optimizer](../edge/adobe-journey-optimizer/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepmessaging.svg)](https://pub.dev/packages/flutter_aepmessaging) |
| Adobe Analytics| Not Supported - Analytics workflows supported through Edge or Edge Bridge extensions, see [guide to migrate to Edge Network](../solution/adobe-analytics/migrate-to-edge-network.md). |
| Place Service | Not Supported  |
| Place Monitor| Deprecated |

## Roku

<div style="height:20px; width:120px;"></div>

<div style="height:30px; width:140px;">
<a href="https://github.com/adobe/aepsdk-roku/releases">
<img src="https://img.shields.io/github/v/release/adobe/aepsdk-roku.svg?label=AEP%20Roku%20SDK&logo=github"/>
</a>
</div>

The Adobe Experience Platform SDK for Roku supports Roku OS 11.0 or later. The project is open sourced in GitHub. For more information, refer to the [aepsdk-roku](https://github.com/adobe/aepsdk-roku) repository.
