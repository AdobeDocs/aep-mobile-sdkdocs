# Current SDK versions

## Android

<InlineAlert variant="info" slots="text"/>

**Migrate to latest Mobile SDKs for Android**<br/>If you are currently using the Mobile Core 1.x and the compatible libraries, please see the [Migrating to latest Mobile SDKs for Android](https://developer.adobe.com/client-sdks/previous-versions/documentation/migrate-to-android/) guide for next steps.<br/>The latest Mobile SDKs for Android support Google Android API 19 (KitKat) or later.

<InlineAlert variant="info" slots="text"/>

**Start using the BOM artifact for Android**<br/> The Adobe SDK BOM artifact enables managing all compatible versions of Adobe Experience Platform Android extensions by specifying a single BOM version. This is now the recommended way to manage Android SDKs. For the installation instructions, see the steps to [add dependencies to your project](https://developer.adobe.com/client-sdks/documentation/getting-started/get-the-sdk/#installation-instructions). The BOM project is open-sourced. For more information, please refer to the [README](https://github.com/adobe/aepsdk-commons/blob/main/android/aepsdk-bom/README.md) file located in the public repository.

### BOM to extension version mapping

The latest BOM (Bill of Materials) version is [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/sdk-bom.svg?logo=android&logoColor=white&label=sdk-bom&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/sdk-bom). For your convenience, the table below provides information on which Android extension versions are mapped to the latest BOM.

| Extension artifact| Version | Github |
|-----|-----|-----|
| com.adobe.marketing.mobile:core | 2.3.0| [Link](https://github.com/adobe/aepsdk-core-android) |
| com.adobe.marketing.mobile:signal | 2.0.1 | [Link](https://github.com/adobe/aepsdk-core-android) |
| com.adobe.marketing.mobile:lifecycle | 2.0.4| [Link](https://github.com/adobe/aepsdk-core-android) |
| com.adobe.marketing.mobile:identity | 2.0.3 | [Link](https://github.com/adobe/aepsdk-core-android) |
| com.adobe.marketing.mobile:userprofile | 2.0.1| [Link](https://github.com/adobe/aepsdk-userprofile-android) |
| com.adobe.marketing.mobile:assurance | 2.1.1| [Link](https://github.com/adobe/aepsdk-assurance-android) |
| com.adobe.marketing.mobile:edge | 2.2.0| [Link](https://github.com/adobe/aepsdk-edge-android) |
| com.adobe.marketing.mobile:edgeidentity  | 2.0.1| [Link](https://github.com/adobe/aepsdk-edgeidentity-android) |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | [Link](https://github.com/adobe/aepsdk-edgeconsent-android) |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | [Link](https://github.com/adobe/aepsdk-edgemedia-android) |
| com.adobe.marketing.mobile:edgebridge | 2.1.0| [Link](https://github.com/adobe/aepsdk-edgebridge-android) |
| com.adobe.marketing.mobile:messaging  | 2.1.4 | [Link](https://github.com/adobe/aepsdk-messaging-android) |
| com.adobe.marketing.mobile:optimize| 2.0.0 | [Link](https://github.com/adobe/aepsdk-optimize-android) |
| com.adobe.marketing.mobile:analytics | 2.0.3| [Link](https://github.com/adobe/aepsdk-analytics-android) |
| com.adobe.marketing.mobile:campaign | 2.0.5| [Link](https://github.com/adobe/aepsdk-campaign-android) |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | [Link](https://github.com/adobe/aepsdk-campaignclassic-android) |
| com.adobe.marketing.mobile:target | 2.0.1| [Link](https://github.com/adobe/aepsdk-target-android) |
| com.adobe.marketing.mobile:audience | 2.0.0 | [Link](https://github.com/adobe/aepsdk-audience-android) |
| com.adobe.marketing.mobile:media | 3.0.0 | [Link](https://github.com/adobe/aepsdk-media-android) |
| com.adobe.marketing.mobile:places  | 2.0.0 | [Link](https://github.com/adobe/aepsdk-places-android) |

## iOS

<InlineAlert variant="info" slots="text"/>

**Migrate to latest Mobile SDKs for iOS**<br/>If you are currently using the Objective-C (ACP-prefix) libraries, please see the [Migrating to latest Mobile SDKs for iOS](https://developer.adobe.com/client-sdks/previous-versions/documentation/migrate-to-swift/) guide for next steps.<br/>The latest Mobile SDK for iOS supports iOS 11 or later; requires Swift 5.1 or newer and Xcode 14.1 or newer. In addition to **CocoaPods**, **Swift Package Manager (SPM)** installation option is supported with the latest iOS Swift SDKs! Find more details at the GitHub links below.

| Extension | tvOS | App Extension | CocoaPods | GitHub |
|---|---|---|---|---|
| [Mobile Core](../mobile-core/index.md) | ✔️ | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPCore&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPCore) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Rules Engine](../mobile-core/rules-engine/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-rulesengine-ios.svg?label=AEPRulesEngine&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPRulesEngine) | [Link](https://github.com/adobe/aepsdk-rulesengine-ios) |
| [Signal](../mobile-core/signal/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPSignal&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPSignal) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Identity](../mobile-core/identity/index.md) | ✔️ | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPIdentity&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPIdentity) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Lifecycle](../mobile-core/lifecycle/index.md) | ✔️ | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPLifecycle&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPLifecycle) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Profile](../profile/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-userprofile-ios.svg?label=AEPUserProfile&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPUserProfile) | [Link](https://github.com/adobe/aepsdk-userprofile-ios) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) |  |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-assurance-ios.svg?label=AEPAssurance&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPAssurance) | [Link](https://github.com/adobe/aepsdk-assurance-ios) |
| [Adobe Experience Platform Edge Network](../edge-network/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edge-ios.svg?label=AEPEdge&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdge) | [Link](https://github.com/adobe/aepsdk-edge-ios) |
| [Identity for Edge Network](../identity-for-edge-network/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edgeidentity-ios.svg?label=AEPEdgeIdentity&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdgeIdentity) | [Link](https://github.com/adobe/aepsdk-edgeidentity-ios) |
| [Consent for Edge Network](../consent-for-edge-network/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edgeconsent-ios.svg?label=AEPEdgeConsent&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdgeConsent) | [Link](https://github.com/adobe/aepsdk-edgeconsent-ios) |
| [Media for Edge Network](../media-for-edge-network/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edgemedia-ios.svg?label=AEPEdgeMedia&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdgeMedia) | [Link](https://github.com/adobe/aepsdk-edgemedia-ios) |
| [Edge Bridge](../adobe-analytics/migrate-to-edge-network.md) |  |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-edgebridge-ios.svg?label=AEPEdgeBridge&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPEdgeBridge) | [Link](https://github.com/adobe/aepsdk-edgebridge-ios) |
| [Adobe Journey Optimizer](../adobe-journey-optimizer/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-messaging-ios.svg?label=AEPMessaging&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPMessaging) | [Link](https://github.com/adobe/aepsdk-messaging-ios) |
| [Adobe Journey Optimizer - Decisioning](../adobe-journey-optimizer-decisioning/index.md) |   | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-optimize-ios.svg?label=AEPOptimize&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPOptimize) | [Link](https://github.com/adobe/aepsdk-optimize-ios) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html) |  |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-places-ios.svg?label=AEPPlaces&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPPlaces) | [Link](https://github.com/adobe/aepsdk-places-ios) |
| [Adobe Analytics](../adobe-analytics/index.md) | ✔️ | ✔️ | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-analytics-ios.svg?label=AEPAnalytics&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPAnalytics) | [Link](https://github.com/adobe/aepsdk-analytics-ios) |
| [Adobe Analytics - Media Analytics for Audio & Video](../adobe-media-analytics/index.md) | ✔️ |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-media-ios.svg?label=AEPMedia&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPMedia) | [Link](https://github.com/adobe/aepsdk-media-ios) |
| [Adobe Target](../adobe-target/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-target-ios.svg?label=AEPTarget&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPTarget) | [Link](https://github.com/adobe/aepsdk-target-ios) |
| [Adobe Campaign Standard](../adobe-campaign-standard/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-campaign-ios.svg?label=AEPCampaign&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPCampaign) | [Link](https://github.com/adobe/aepsdk-campaign-ios) |
| [Adobe Campaign Classic](../adobe-campaign-classic/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-campaignclassic-ios.svg?label=AEPCampaignClassic&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPCampaignClassic) | [Link](https://github.com/adobe/aepsdk-campaignclassic-ios) |
| [Adobe Audience Manager](../adobe-audience-manager/index.md) |   |   | [![CocoaPods](https://img.shields.io/github/v/release/adobe/aepsdk-audience-ios.svg?label=AEPAudience&logo=apple&logoColor=white&color=orange&sort=semver)](https://cocoapods.org/pods/AEPAudience) | [Link](https://github.com/adobe/aepsdk-audience-ios) |
| Adobe Analytics - Mobile Services | | Deprecated | | |
| Places Monitor | | Deprecated | | |

## React Native

Adobe Experience Platform Mobile SDK plugin for React Native supports React Native **version 0.60.0 or later**. For the latest installation instructions, see the README file in the [`aepsdk-react-native`](https://github.com/adobe/aepsdk-react-native#installation) repository.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for React Native are compatible with the [Android](#android) and [iOS](#ios) native libraries.

<InlineAlert variant="info" slots="text"/>

If you are currently using the ACP-prefixed React Native libraries, please see [the guide to migrate to latest available version](https://github.com/adobe/aepsdk-react-native/blob/main/docs/migration.md) for React Native.

| Extension | npmjs |
|---|---|
| [Mobile Core](../mobile-core/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepcore.svg?color=green&label=%40adobe%2Freact-native-aepcore&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepcore) |
| [Profile](../profile/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepuserprofile.svg?color=green&label=%40adobe%2Freact-native-aepuserprofile&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepuserprofile) |
| [Assurance](../platform-assurance-sdk/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepassurance.svg?color=green&label=%40adobe%2Freact-native-aepassurance&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepassurance) |
| [Edge](../edge-network/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedge.svg?color=green&label=%40adobe%2Freact-native-aepedge&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedge) |
| [EdgeIdentity](../identity-for-edge-network/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedgeidentity.svg?color=green&label=%40adobe%2Freact-native-aepedgeidentity&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedgeidentity) |
| [EdgeConsent](../consent-for-edge-network/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedgeconsent.svg?color=green&label=%40adobe%2Freact-native-aepedgeconsent&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedgeconsent) |
| [Edge Bridge](../adobe-analytics/migrate-to-edge-network.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedgebridge.svg?color=green&label=%40adobe%2Freact-native-aepedgebridge&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedgebridge) |
| [Messaging](../iam/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepmessaging.svg?color=green&label=%40adobe%2Freact-native-aepmessaging&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepmessaging) |
| [Optimize](./adobe-journey-optimizer/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepoptimize.svg?color=green&label=%40adobe%2Freact-native-aepoptimize&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepoptimize) |
| [Places](./places/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepplaces.svg?color=green&label=%40adobe%2Freact-native-aepplaces&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepplaces) |
| [Target](../adobe-target/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aeptarget.svg?color=green&label=%40adobe%2Freact-native-aeptarget&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aeptarget) |
| [Campaign Classic](./adobe-campaign-classic/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepcampaignclassic.svg?color=green&label=%40adobe%2Freact-native-aepcampaignclassic&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepcampaignclassic) |

## Flutter

Adobe Experience Platform Mobile SDK plugin for Flutter supports Flutter **versions 2.0.0 or later**. For the latest installation instructions, see the `README` file in the [`aepsdk-flutter`](https://github.com/adobe/aepsdk_flutter#installation) repository.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for Flutter are compatible with the [Android](#android) and [iOS](#ios) native libraries.

<InlineAlert variant="info" slots="text"/>

If you are currently using the ACP-prefixed Flutter libraries, please see [the guide to migrate to latest available version](https://github.com/adobe/aepsdk_flutter/blob/main/docs/migration.md) for Flutter.

| Extension | pub.dev |
|---|---|
| [Mobile Core](../mobile-core/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepcore.svg)](https://pub.dartlang.org/packages/flutter_aepcore) |
| [Assurance](../platform-assurance-sdk/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepassurance.svg)](https://pub.dartlang.org/packages/flutter_aepassurance) |
| [Edge](../edge-network/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedge.svg)](https://pub.dartlang.org/packages/flutter_aepedge) |
| [EdgeIdentity](../identity-for-edge-network/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedgeidentity.svg)](https://pub.dartlang.org/packages/flutter_aepedgeidentity) |
| [EdgeConsent](../consent-for-edge-network/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedgeconsent.svg)](https://pub.dartlang.org/packages/flutter_aepedgeconsent) |
| [Edge Bridge](../adobe-analytics/migrate-to-edge-network.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedgebridge.svg)](https://pub.dartlang.org/packages/flutter_aepedgebridge) |
| [UserProfile](../profile/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepuserprofile.svg)](https://pub.dartlang.org/packages/flutter_aepuserprofile) |
