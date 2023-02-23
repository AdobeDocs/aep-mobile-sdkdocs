# Current SDK versions

## Android

<InlineAlert variant="info" slots="text"/>

**Migrate to latest Mobile SDKs for Android**<br/>If you are currently using the Mobile Core 1.x and the compatible libraries, please see the [Migrating to latest Mobile SDKs for Android](https://developer.adobe.com/client-sdks/previous-versions/documentation/migrate-to-android/) guide for next steps.<br/>The latest Mobile SDKs for Android support Google Android API 19 (KitKat) or later.

<InlineAlert variant="info" slots="text"/>

Due to the sunsetting of [JCenter by JFrog](https://jfrog.com/blog/into-the-sunset-bintray-jcenter-gocenter-and-chartcenter/), the Mobile SDKs are no longer being uploaded to JCenter. Android libraries are now available on [MavenCentral](https://search.maven.org/search?q=g:com.adobe.marketing.mobile). For more information, see links below or find [the Android libraries on MavenCentral](https://search.maven.org/search?q=g:com.adobe.marketing.mobile). Please see [declaring repositories](https://docs.gradle.org/current/userguide/declaring_repositories.html#sec:declaring_multiple_repositories) on Gradle.

| Extension | Maven | Github |
|---|---|---|
| [Mobile Core](../mobile-core/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/core.svg?logo=android&logoColor=white&label=core&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/core) | [Link](https://github.com/adobe/aepsdk-core-android) |
| [Rules Engine](../mobile-core/rules-engine/index.md) | Bundled in Mobile Core | — |
| [Signal](../mobile-core/signal/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/signal.svg?logo=android&logoColor=white&label=signal&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/signal) | [Link](https://github.com/adobe/aepsdk-core-android) |
| [Lifecycle](../mobile-core/lifecycle/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/lifecycle.svg?logo=android&logoColor=white&label=lifecycle&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/lifecycle) | [Link](https://github.com/adobe/aepsdk-core-android) |
| [Identity](../mobile-core/identity/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/identity.svg?logo=android&logoColor=white&label=identity&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/identity) | [Link](https://github.com/adobe/aepsdk-core-android) |
| [Profile](../profile/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/userprofile.svg?logo=android&logoColor=white&label=userprofile&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/userprofile) | [Link](https://github.com/adobe/aepsdk-userprofile-android) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/assurance.svg?logo=android&logoColor=white&label=assurance&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/assurance) | [Link](https://github.com/adobe/aepsdk-assurance-android) |
| [Adobe Experience Platform Edge Network](../edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edge.svg?logo=android&logoColor=white&label=edge&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edge) | [Link](https://github.com/adobe/aepsdk-edge-android) |
| [Identity for Edge Network](../identity-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeidentity.svg?logo=android&logoColor=white&label=edgeidentity&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeidentity) | [Link](https://github.com/adobe/aepsdk-edgeidentity-android) |
| [Consent for Edge Network](../consent-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeconsent.svg?logo=android&logoColor=white&label=edgeconsent&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeconsent) | [Link](https://github.com/adobe/aepsdk-edgeconsent-android) |
| Edge Bridge | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgebridge.svg?logo=android&logoColor=white&label=edgebridge&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgebridge) | [Link](https://github.com/adobe/aepsdk-edgebridge-android) |
| [Adobe Journey Optimizer](../adobe-journey-optimizer/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/messaging.svg?logo=android&logoColor=white&label=messaging&style=flat-square)](#) | [Link](https://github.com/adobe/aepsdk-messaging-android) |
| [Adobe Journey Optimizer - Decisioning](../adobe-journey-optimizer-decisioning/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/optimize.svg?logo=android&logoColor=white&label=optimize&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/optimize) | [Link](https://github.com/adobe/aepsdk-optimize-android) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html?lang=en) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/places.svg?logo=android&logoColor=white&label=places&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/places) | [Link](https://github.com/adobe/aepsdk-places-android) |
| [Adobe Analytics](../adobe-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/analytics.svg?logo=android&logoColor=white&label=analytics&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/analytics) | [Link](https://github.com/adobe/aepsdk-analytics-android) |
| [Adobe Analytics - Media Analytics for Audio & Video](../adobe-media-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/media.svg?logo=android&logoColor=white&label=media&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/media) | [Link](https://github.com/adobe/aepsdk-media-android) |
| [Adobe Target](../adobe-target/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/target.svg?logo=android&logoColor=white&label=target&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/target) | [Link](https://github.com/adobe/aepsdk-target-android) |
| [Adobe Campaign Standard](../adobe-campaign-standard/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaign.svg?logo=android&logoColor=white&label=campaign&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaign) | [Link](https://github.com/adobe/aepsdk-campaign-android) |
| [Adobe Campaign Classic](../adobe-campaign-classic/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaignclassic.svg?logo=android&logoColor=white&label=campaignclassic&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaignclassic) | [Link](https://github.com/adobe/aepsdk-campaignclassic-android) |
| [Adobe Audience Manager](../adobe-audience-manager/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/audience.svg?logo=android&logoColor=white&label=audience&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/audience) | [Link](https://github.com/adobe/aepsdk-audience-android) |
| Adobe Analytics - Mobile Services | Deprecated | |
| Places Monitor | Deprecated | |

## iOS

<InlineAlert variant="info" slots="text"/>

**Migrate to latest Mobile SDKs for iOS**<br/>If you are currently using the Objective-C (ACP-prefix) libraries, please see the [Migrating to latest Mobile SDKs for iOS](https://developer.adobe.com/client-sdks/previous-versions/documentation/migrate-to-swift/) guide for next steps.<br/>The latest Mobile SDK for iOS supports iOS 10 or later; requires Swift 5.1 or newer and Xcode 11.0 or newer. In addition to **CocoaPods**, **Swift Package Manager (SPM)** installation option is supported with the latest iOS Swift SDKs! Find more details at the GitHub links below.

<InlineAlert variant="info" slots="text"/>

**Swift = Open Source**<br/>The latest iOS SDKs are written in Swift and are open source. Read more about [our move to Swift and open source](https://medium.com/adobetech/adobe-experience-platform-mobile-sdks-move-to-swift-for-ios-6aa67b67b4d4).

| Extension | tvOS | App Extension | CocoaPods | GitHub |
|---|---|---|---|---|
| [Mobile Core](../mobile-core/index.md) | ✔️ | ✔️ | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPCore.svg?color=orange&label=AEPCore&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPCore) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Rules Engine](../mobile-core/rules-engine/index.md) | ✔️ |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPRulesEngine.svg?color=orange&label=AEPRulesEngine&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPRulesEngine) | [Link](https://github.com/adobe/aepsdk-rulesengine-ios) |
| [Signal](../mobile-core/signal/index.md) | ✔️ |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPSignal.svg?color=orange&label=AEPSignal&logo=apple&logoColor=white&style=flat-square)​](https://cocoapods.org/pods/AEPSignal) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Identity](../mobile-core/identity/index.md) | ✔️ | ✔️ | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPIdentity.svg?color=orange&label=AEPIdentity&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPIdentity) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Lifecycle](../mobile-core/lifecycle/index.md) | ✔️ | ✔️ | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPLifecycle.svg?color=orange&label=AEPLifecycle&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPLifecycle) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Profile](../profile/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPUserProfile.svg?color=orange&label=AEPUserProfile&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPUserProfile) | [Link](https://github.com/adobe/aepsdk-userprofile-ios) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) |  |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPAssurance.svg?color=orange&label=AEPAssurance&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPAssurance) | [Link](https://github.com/adobe/aepsdk-assurance-ios) |
| [Adobe Experience Platform Edge Network](../edge-network/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPEdge.svg?color=orange&label=AEPEdge&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPEdge) | [Link](https://github.com/adobe/aepsdk-edge-ios) |
| [Identity for Edge Network](../identity-for-edge-network/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPEdgeIdentity.svg?color=orange&label=AEPEdgeIdentity&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPEdgeIdentity) | [Link](https://github.com/adobe/aepsdk-edgeidentity-ios) |
| [Consent for Edge Network](../consent-for-edge-network/index.md) |  |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPEdgeConsent.svg?color=orange&label=AEPEdgeConsent&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPEdgeConsent) | [Link](https://github.com/adobe/aepsdk-edgeconsent-ios) |
| Edge Bridge |  |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPEdgeBridge.svg?color=orange&label=AEPEdgeBridge&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPEdgeBridge) | [Link](https://github.com/adobe/aepsdk-edgebridge-ios) |
| [Adobe Journey Optimizer](../adobe-journey-optimizer/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPMessaging.svg?color=orange&label=AEPMessaging&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPMessaging) | [Link](https://github.com/adobe/aepsdk-messaging-ios) |
| [Adobe Journey Optimizer - Decisioning](../adobe-journey-optimizer-decisioning/index.md) |   | ✔️ | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPOptimize.svg?color=orange&label=AEPOptimize&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPOptimize) | [Link](https://github.com/adobe/aepsdk-optimize-ios) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html?lang=en) |  |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPPlaces.svg?color=orange&label=AEPPlaces&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPPlaces) | [Link](https://github.com/adobe/aepsdk-places-ios) |
| [Adobe Analytics](../adobe-analytics/index.md) | ✔️ | ✔️ | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPAnalytics.svg?color=orange&label=AEPAnalytics&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPAnalytics) | [Link](https://github.com/adobe/aepsdk-analytics-ios) |
| [Adobe Analytics - Media Analytics for Audio & Video](../adobe-media-analytics/index.md) | ✔️ |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPMedia.svg?color=orange&label=AEPMedia&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPMedia) | [Link](https://github.com/adobe/aepsdk-media-ios) |
| [Adobe Target](../adobe-target/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPTarget.svg?color=orange&label=AEPTarget&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPTarget) | [Link](https://github.com/adobe/aepsdk-target-ios) |
| [Adobe Campaign Standard](../adobe-campaign-standard/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPCampaign.svg?color=orange&label=AEPCampaign&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPCampaign) | [Link](https://github.com/adobe/aepsdk-campaign-ios) |
| [Adobe Campaign Classic](../adobe-campaign-classic/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPCampaignClassic.svg?color=orange&label=AEPCampaignClassic&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPCampaignClassic) | [Link](https://github.com/adobe/aepsdk-campaignclassic-ios) |
| [Adobe Audience Manager](../adobe-audience-manager/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPAudience.svg?color=orange&label=AEPAudience&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPAudience) | [Link](https://github.com/adobe/aepsdk-audience-ios) |
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
| [Messaging](../iam/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepmessaging.svg?color=green&label=%40adobe%2Freact-native-aepmessaging&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepmessaging) |
| [Optimize](./adobe-journey-optimizer/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepoptimize.svg?color=green&label=%40adobe%2Freact-native-aepoptimize&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepoptimize) |
| [Places](./places/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepplaces.svg?color=green&label=%40adobe%2Freact-native-aepplaces&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepplaces) |
| [Target](../adobe-target/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aeptarget.svg?color=green&label=%40adobe%2Freact-native-aeptarget&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aeptarget) |
| [Campaign Classic](./adobe-campaign-classic/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepcampaignclassic.svg?color=green&label=%40adobe%2Freact-native-aepcampaignclassic&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepcampaignclassic) |

## Flutter

Adobe Experience Platform Mobile SDK plugin for Flutter supports Flutter **versions 2.0.0 or later**. For the latest installation instructions, see the `README` file in the [`aepsdk-flutter`](https://github.com/adobe/aepsdk_flutter#installation) repository.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for Flutter are compatible with the [Android](#android) and [iOS](#ios) native libraries.

| Extension | pub.dev |
|---|---|
| [Mobile Core](../mobile-core/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepcore.svg)](https://pub.dartlang.org/packages/flutter_aepcore) |
| [Assurance](../platform-assurance-sdk/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepassurance.svg)](https://pub.dartlang.org/packages/flutter_aepassurance) |
| [Edge](../edge-network/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedge.svg)](https://pub.dartlang.org/packages/flutter_aepedge) |
| [EdgeIdentity](../identity-for-edge-network/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedgeidentity.svg)](https://pub.dartlang.org/packages/flutter_aepedgeidentity) |
| [EdgeConsent](../consent-for-edge-network/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_aepedgeconsent.svg)](https://pub.dartlang.org/packages/flutter_aepedgeconsent) |
