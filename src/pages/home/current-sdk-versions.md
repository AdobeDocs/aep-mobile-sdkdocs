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

**Migrate to latest Mobile SDKs for Android**<br/>If you are currently using the Mobile Core 1.x and the compatible libraries, please see the [Migrating to latest Mobile SDKs for Android](https://developer.adobe.com/client-sdks/previous-versions/documentation/migrate-to-android/) guide for next steps.<br/>The latest Mobile SDKs for Android support Google Android API 19 (KitKat) or later.

<InlineAlert variant="info" slots="text"/>

**Start using the BOM artifact for Android**<br/> The Adobe SDK BOM artifact enables managing all compatible versions of Adobe Experience Platform Android extensions by specifying a single BOM version. This is now the recommended way to manage Android SDKs. For the installation instructions, see the steps to [add dependencies to your project](../home/getting-started/get-the-sdk.md#installation-instructions). The BOM project is open-sourced. For more information, please refer to the [README](https://github.com/adobe/aepsdk-commons/blob/main/android/aepsdk-bom/README.md) file located in the public repository.

### Android BOM

<div style="height:20px; width:120px;"></div>

<div style="height:30px; width:140px;">
<a href="https://mvnrepository.com/artifact/com.adobe.marketing.mobile/sdk-bom">
<img src="https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/sdk-bom.svg?logo=android&logoColor=white&label=sdk-bom&style=flat-square" alt="descriptive text"/>
</a>
</div>

The Android BOM (Bill of Materials) artifact has been released to Maven Central. The above Maven Badge displays the latest BOM version. To obtain information about which Android extension versions are mapped to the latest BOM, refer to the [release notes](https://developer.adobe.com/client-sdks/release-notes/).

### Android extensions

<div style="height:20px; width:120px;"></div>

| Extension | Maven | Github |
|---|---|---|
| [Mobile Core](./base/mobile-core/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/core.svg?logo=android&logoColor=white&label=core&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/core) | [Link](https://github.com/adobe/aepsdk-core-android) |
| [Rules Engine](./base/mobile-core/rules-engine/index.md) | Bundled in Mobile Core | — |
| [Signal](./base/mobile-core/signal/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/signal.svg?logo=android&logoColor=white&label=signal&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/signal) | [Link](https://github.com/adobe/aepsdk-core-android) |
| [Lifecycle](./base/mobile-core/lifecycle/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/lifecycle.svg?logo=android&logoColor=white&label=lifecycle&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/lifecycle) | [Link](https://github.com/adobe/aepsdk-core-android) |
| [Identity](./base/mobile-core/identity/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/identity.svg?logo=android&logoColor=white&label=identity&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/identity) | [Link](https://github.com/adobe/aepsdk-core-android) |
| [Profile](./base/profile/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/userprofile.svg?logo=android&logoColor=white&label=userprofile&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/userprofile) | [Link](https://github.com/adobe/aepsdk-userprofile-android) |
| [Adobe Experience Platform Assurance](./base/assurance/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/assurance.svg?logo=android&logoColor=white&label=assurance&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/assurance) | [Link](https://github.com/adobe/aepsdk-assurance-android) |
| [Adobe Experience Platform Edge Network](../edge/edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edge.svg?logo=android&logoColor=white&label=edge&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edge) | [Link](https://github.com/adobe/aepsdk-edge-android) |
| [Identity for Edge Network](../edge/identity-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeidentity.svg?logo=android&logoColor=white&label=edgeidentity&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeidentity) | [Link](https://github.com/adobe/aepsdk-edgeidentity-android) |
| [Consent for Edge Network](../edge/consent-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeconsent.svg?logo=android&logoColor=white&label=edgeconsent&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeconsent) | [Link](https://github.com/adobe/aepsdk-edgeconsent-android) |
| [Media for Edge Network](../edge/media-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgemedia.svg?logo=android&logoColor=white&label=edgemedia&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgemedia) | [Link](https://github.com/adobe/aepsdk-edgemedia-android) |
| [Edge Bridge](../solution/adobe-analytics/migrate-to-edge-network.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgebridge.svg?logo=android&logoColor=white&label=edgebridge&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgebridge) | [Link](https://github.com/adobe/aepsdk-edgebridge-android) |
| [Adobe Journey Optimizer](../edge/adobe-journey-optimizer/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/messaging.svg?logo=android&logoColor=white&label=messaging&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/messaging) | [Link](https://github.com/adobe/aepsdk-messaging-android) |
| [Adobe Journey Optimizer - Decisioning](../edge/adobe-journey-optimizer-decisioning/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/optimize.svg?logo=android&logoColor=white&label=optimize&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/optimize) | [Link](https://github.com/adobe/aepsdk-optimize-android) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/places.svg?logo=android&logoColor=white&label=places&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/places) | [Link](https://github.com/adobe/aepsdk-places-android) |
| [Adobe Analytics](../solution/adobe-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/analytics.svg?logo=android&logoColor=white&label=analytics&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/analytics) | [Link](https://github.com/adobe/aepsdk-analytics-android) |
| [Adobe Analytics - Media Analytics for Audio & Video](../solution/adobe-media-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/media.svg?logo=android&logoColor=white&label=media&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/media) | [Link](https://github.com/adobe/aepsdk-media-android) |
| [Adobe Target](../solution/adobe-target/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/target.svg?logo=android&logoColor=white&label=target&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/target) | [Link](https://github.com/adobe/aepsdk-target-android) |
| [Adobe Campaign Standard](../solution/adobe-campaign-standard/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaign.svg?logo=android&logoColor=white&label=campaign&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaign) | [Link](https://github.com/adobe/aepsdk-campaign-android) |
| [Adobe Campaign Classic](../solution/adobe-campaign-classic/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaignclassic.svg?logo=android&logoColor=white&label=campaignclassic&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaignclassic) | [Link](https://github.com/adobe/aepsdk-campaignclassic-android) |
| [Adobe Audience Manager](../solution/adobe-audience-manager/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/audience.svg?logo=android&logoColor=white&label=audience&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/audience) | [Link](https://github.com/adobe/aepsdk-audience-android) |
| Adobe Analytics - Mobile Services | Deprecated | |
| Places Monitor | Deprecated | |

## iOS

<InlineAlert variant="info" slots="text"/>

**Migrate to latest Mobile SDKs for iOS**<br/>If you are currently using the Objective-C (ACP-prefix) libraries, please see the [Migrating to latest Mobile SDKs for iOS](https://developer.adobe.com/client-sdks/previous-versions/documentation/migrate-to-swift/) guide for next steps.<br/>The latest Mobile SDK for iOS supports iOS 11 or later; requires Swift 5.1 or newer and Xcode 14.1 or newer. In addition to **CocoaPods**, **Swift Package Manager (SPM)** installation option is supported with the latest iOS Swift SDKs! Find more details at the GitHub links below.

| Extension | tvOS | App Extension | CocoaPods | GitHub |
|---|---|---|---|---|
| [Mobile Core](./base/mobile-core/index.md) | ✔️ | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPCore&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPCore) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Rules Engine](./base/mobile-core/rules-engine/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-rulesengine-ios.svg?label=AEPRulesEngine&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPRulesEngine) | [Link](https://github.com/adobe/aepsdk-rulesengine-ios) |
| [Signal](./base/mobile-core/signal/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPSignal&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPSignal) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Identity](./base/mobile-core/identity/index.md) | ✔️ | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPIdentity&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPIdentity) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Lifecycle](./base/mobile-core/lifecycle/index.md) | ✔️ | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPLifecycle&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPLifecycle) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Profile](./base/profile/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-userprofile-ios.svg?label=AEPUserProfile&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPUserProfile) | [Link](https://github.com/adobe/aepsdk-userprofile-ios) |
| [Adobe Experience Platform Assurance](./base/assurance/index.md) |  |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-assurance-ios.svg?label=AEPAssurance&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPAssurance) | [Link](https://github.com/adobe/aepsdk-assurance-ios) |
| [Adobe Experience Platform Edge Network](../edge/edge-network/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edge-ios.svg?label=AEPEdge&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdge) | [Link](https://github.com/adobe/aepsdk-edge-ios) |
| [Identity for Edge Network](../edge/identity-for-edge-network/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edgeidentity-ios.svg?label=AEPEdgeIdentity&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdgeIdentity) | [Link](https://github.com/adobe/aepsdk-edgeidentity-ios) |
| [Consent for Edge Network](../edge/consent-for-edge-network/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edgeconsent-ios.svg?label=AEPEdgeConsent&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdgeConsent) | [Link](https://github.com/adobe/aepsdk-edgeconsent-ios) |
| [Media for Edge Network](../edge/media-for-edge-network/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edgemedia-ios.svg?label=AEPEdgeMedia&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdgeMedia) | [Link](https://github.com/adobe/aepsdk-edgemedia-ios) |
| [Edge Bridge](../adobe-analytics/migrate-to-edge-network.md) |  |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edgebridge-ios.svg?label=AEPEdgeBridge&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdgeBridge) | [Link](https://github.com/adobe/aepsdk-edgebridge-ios) |
| [Adobe Journey Optimizer](../edge/adobe-journey-optimizer/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-messaging-ios.svg?label=AEPMessaging&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPMessaging) | [Link](https://github.com/adobe/aepsdk-messaging-ios) |
| [Adobe Journey Optimizer - Decisioning](../edge/adobe-journey-optimizer-decisioning/index.md) |   | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-optimize-ios.svg?label=AEPOptimize&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPOptimize) | [Link](https://github.com/adobe/aepsdk-optimize-ios) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html) |  |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-places-ios.svg?label=AEPPlaces&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPPlaces) | [Link](https://github.com/adobe/aepsdk-places-ios) |
| [Adobe Analytics](../solution/adobe-analytics/index.md) | ✔️ | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-analytics-ios.svg?label=AEPAnalytics&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPAnalytics) | [Link](https://github.com/adobe/aepsdk-analytics-ios) |
| [Adobe Analytics - Media Analytics for Audio & Video](../solution/adobe-media-analytics/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-media-ios.svg?label=AEPMedia&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPMedia) | [Link](https://github.com/adobe/aepsdk-media-ios) |
| [Adobe Target](../solution/adobe-target/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-target-ios.svg?label=AEPTarget&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPTarget) | [Link](https://github.com/adobe/aepsdk-target-ios) |
| [Adobe Campaign Standard](../solution/adobe-campaign-standard/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-campaign-ios.svg?label=AEPCampaign&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPCampaign) | [Link](https://github.com/adobe/aepsdk-campaign-ios) |
| [Adobe Campaign Classic](../solution/adobe-campaign-classic/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-campaignclassic-ios.svg?label=AEPCampaignClassic&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPCampaignClassic) | [Link](https://github.com/adobe/aepsdk-campaignclassic-ios) |
| [Adobe Audience Manager](../solution/adobe-audience-manager/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-audience-ios.svg?label=AEPAudience&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPAudience) | [Link](https://github.com/adobe/aepsdk-audience-ios) |
| Adobe Analytics - Mobile Services | | Deprecated | | |
| Places Monitor | | Deprecated | | |

## React Native

Adobe Experience Platform Mobile SDK plugin for React Native supports React Native **version 0.60.0 or later**. For the latest installation instructions, see the README file in the [`aepsdk-react-native`](https://github.com/adobe/aepsdk-react-native#installation) repository.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for React Native are compatible with the [Android](#android) and [iOS](#ios) native libraries.

<InlineAlert variant="warning" slots="text"/>

If you are currently using the ACP-prefixed React Native libraries, please see [the guide to migrate to latest available version](https://github.com/adobe/aepsdk-react-native/blob/main/docs/migration.md) for React Native.

| Extension | npmjs |
|---|---|
| [Mobile Core](./base/mobile-core/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepcore.svg?color=green&label=%40adobe%2Freact-native-aepcore&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepcore) |
| [Profile](./base/profile/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepuserprofile.svg?color=green&label=%40adobe%2Freact-native-aepuserprofile&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepuserprofile) |
| [Assurance](./base/assurance/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepassurance.svg?color=green&label=%40adobe%2Freact-native-aepassurance&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepassurance) |
| [Edge](../edge/edge-network/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedge.svg?color=green&label=%40adobe%2Freact-native-aepedge&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedge) |
| [EdgeIdentity](../edge/identity-for-edge-network/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedgeidentity.svg?color=green&label=%40adobe%2Freact-native-aepedgeidentity&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedgeidentity) |
| [EdgeConsent](../edge/consent-for-edge-network/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedgeconsent.svg?color=green&label=%40adobe%2Freact-native-aepedgeconsent&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedgeconsent) |
| [Edge Bridge](../solution/adobe-analytics/migrate-to-edge-network.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedgebridge.svg?color=green&label=%40adobe%2Freact-native-aepedgebridge&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedgebridge) |
| [Messaging](../edge/adobe-journey-optimizer-decisioning/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepmessaging.svg?color=green&label=%40adobe%2Freact-native-aepmessaging&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepmessaging) |
| [Optimize](../edge/adobe-journey-optimizer/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepoptimize.svg?color=green&label=%40adobe%2Freact-native-aepoptimize&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepoptimize) |
| [Places](../solution/places/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepplaces.svg?color=green&label=%40adobe%2Freact-native-aepplaces&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepplaces) |
| [Target](../solution/adobe-target/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aeptarget.svg?color=green&label=%40adobe%2Freact-native-aeptarget&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aeptarget) |
| [Campaign Classic](../solution/adobe-campaign-classic/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepcampaignclassic.svg?color=green&label=%40adobe%2Freact-native-aepcampaignclassic&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepcampaignclassic) |
| Adobe Analytics| Not Supported - Analytics workflows supported through Edge or Edge Bridge extensions, see [guide to migrate to Edge Network](../solution/adobe-analytics/migrate-to-edge-network.md). |
| Adobe Media Analytics| Not Supported  |
| Adobe Audience| Not Supported  |
| Adobe Campaign Standard| Not Supported  |
| Place Monitor| Deprecated |

## Flutter

Adobe Experience Platform Mobile SDK plugin for Flutter supports Flutter **versions 2.0.0 or later**. For the latest installation instructions, see the `README` file in the [`aepsdk-flutter`](https://github.com/adobe/aepsdk_flutter#installation) repository.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for Flutter are compatible with the [Android](#android) and [iOS](#ios) native libraries.

<InlineAlert variant="warning" slots="text"/>

If you are currently using the ACP-prefixed Flutter libraries, please see [the guide to migrate to latest available version](https://github.com/adobe/aepsdk_flutter/blob/main/docs/migration.md) for Flutter.

| Extension | pub.dev |
|---|---|
| [Mobile Core](./base/mobile-core/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepcore.svg)](https://pub.dartlang.org/packages/flutter_aepcore) |
| [Assurance](./base/assurance/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepassurance.svg)](https://pub.dartlang.org/packages/flutter_aepassurance) |
| [Edge](../edge/edge-network/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedge.svg)](https://pub.dartlang.org/packages/flutter_aepedge) |
| [EdgeIdentity](../edge/identity-for-edge-network/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedgeidentity.svg)](https://pub.dartlang.org/packages/flutter_aepedgeidentity) |
| [EdgeConsent](../edge/consent-for-edge-network/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedgeconsent.svg)](https://pub.dartlang.org/packages/flutter_aepedgeconsent) |
| [Edge Bridge](../solution/adobe-analytics/migrate-to-edge-network.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedgebridge.svg)](https://pub.dartlang.org/packages/flutter_aepedgebridge) |
| [UserProfile](./base/profile/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepuserprofile.svg)](https://pub.dartlang.org/packages/flutter_aepuserprofile) |
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
