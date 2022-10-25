# Current SDK versions

<InlineAlert variant="info" slots="text"/>

**Swift SDKs are here!**<br/>We've released Swift versions of our iOS SDKs for Core and select extensions - please scroll down for available Swift extensions and reference documentation for more information.

<InlineAlert variant="info" slots="text"/>

**Migrate to Swift**<br/>If you are currently using our Objective-C (ACP-prefix libraries), please see the [Migrating to Swift](../migrate-to-swift.md) guide for next steps.

## Android

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK for Android supports Google Android API 14 (Ice Cream Sandwich) or later. The Adobe Experience Platform Edge Network extension and other for Edge Network extensions require Android versions 4.4 or later (API levels 19 or later).

<InlineAlert variant="info" slots="text"/>

Due to sunset of [JCenter by JFrog](https://jfrog.com/blog/into-the-sunset-bintray-jcenter-gocenter-and-chartcenter/), our SDKs are no longer being uploaded to JCenter. Android libraries are now available on [MavenCentral](https://search.maven.org/search?q=g:com.adobe.marketing.mobile). For more information, see links below or find [our libraries on MavenCentral](https://search.maven.org/search?q=g:com.adobe.marketing.mobile). For more information on how to declare dependencies from Maven, please see [Declaring repositories](https://docs.gradle.org/current/userguide/declaring_repositories.html#sec:declaring_multiple_repositories) on Gradle.

| Extension | Maven | Github |
|---|---|---|
| [Mobile Core](../mobile-core/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/core.svg?logo=android&logoColor=white&label=core&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/core) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Profile](../profile/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/userprofile.svg?logo=android&logoColor=white&label=userprofile&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/userprofile) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Identity](../mobile-core/identity/index.md) | Bundled in Mobile Core | — |
| [Signal](../mobile-core/signal/index.md) | Bundled in Mobile Core | — |
| [Lifecycle](../mobile-core/lifecycle/index.md) | Bundled in Mobile Core | — |
| [Rules Engine](../mobile-core/rules-engine/index.md) | Bundled in Mobile Core | — |
| [Adobe Experience Platform Edge Network](../edge-network-extensions/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edge.svg?logo=android&logoColor=white&label=edge&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edge) | - |
| [Identity for Edge Network](../identity-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeidentity.svg?logo=android&logoColor=white&label=edgeidentity&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeidentity) | [Link](https://github.com/adobe/aepsdk-edgeidentity-android) |
| [Consent for Edge Network](../consent-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeconsent.svg?logo=android&logoColor=white&label=edgeconsent&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeconsent) | [Link](https://github.com/adobe/aepsdk-edgeconsent-android) |
| [Adobe Experience Platform Assurance](../platform-assruance-sdk/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/assurance.svg?logo=android&logoColor=white)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/assurance) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android)
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html?lang=en) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/places.svg?logo=android&logoColor=white&label=places&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/places) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Places Monitor](https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-monitor-extension/places-monitor-extension.html?lang=en) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/places-monitor.svg?logo=android&logoColor=white&label=placesmonitor&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/places-monitor) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Analytics](../adobe-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/analytics.svg?logo=android&logoColor=white&label=analytics&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/analytics) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Analytics - Media Analytics for Audio & Video](../adobe-media-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/mobileservices.svg?logo=android&logoColor=white&label=mobileservices&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/media) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Audience Manager](../adobe-audience-manager/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/audience.svg?logo=android&logoColor=white&label=audience&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/audience) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Analytics - Mobile Services](../adobe-analytics-mobile-services/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/mobileservices.svg?logo=android&logoColor=white&label=mobileservices&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/mobileservices) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Journey Optimizer](../adobe-journey-optimizer/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/messaging.svg?logo=android&logoColor=white&label=messaging&style=flat-square)](#) | [Link](https://github.com/adobe/aepsdk-messaging-android) |
| [Adobe Journey Optimizer - Decisioning](../adobe-journey-optimizer-decisioning/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/optimize.svg?logo=android&logoColor=white&label=optimize&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/optimize) | [Link](https://github.com/adobe/aepsdk-optimize-android) |
| [Adobe Target](../adobe-target/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/target.svg?logo=android&logoColor=white&label=target&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/target) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Campaign Standard](../adobe-campaign-standard/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaign.svg?logo=android&logoColor=white&label=campaign&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaign) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Campaign Classic](../adobe-campaign-classic/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaignclassic.svg?logo=android&logoColor=white&label=campaignclassic&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaignclassic) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |

## iOS — Swift

<InlineAlert variant="info" slots="text"/>

**Migrate to Swift**<br/>If you are currently using our Objective-C (ACP-prefix) libraries, please see the [Migrating to Swift](../migrate-to-swift.md) guide for next steps.<br/>Adobe Experience Platform Mobile SDK for iOS supports iOS 10 or later; requires Swift 5.1 or newer and Xcode 11.0 or newer. In addition to **CocoaPods**, **Swift Package Manager (SPM)** installation option is supported with the latest iOS Swift SDKs! Find more details at the GitHub links below.

<InlineAlert variant="info" slots="text"/>

**Swift = Open Source**<br/>The Swift iOS SDKs are open source. Read more about [our move to Swift and open source](https://medium.com/adobetech/adobe-experience-platform-mobile-sdks-move-to-swift-for-ios-6aa67b67b4d4).

| Extension | tvOS | App Extension | CocoaPods | GitHub |
|---|---|---|---|---|
| [Mobile Core](../mobile-core/index.md) | ✔️ | ✔️ | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPCore.svg?color=orange&label=AEPCore&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPCore) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| Profile |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPUserProfile.svg?color=orange&label=AEPUserProfile&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPUserProfile) | [Link](https://github.com/adobe/aepsdk-userprofile-ios) |
| [Identity](../mobile-core/identity/index.md) | ✔️ | ✔️ | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPIdentity.svg?color=orange&label=AEPIdentity&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPIdentity) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Signal](../mobile-core/signal/index.md) | ✔️ |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPSignal.svg?color=orange&label=AEPSignal&logo=apple&logoColor=white&style=flat-square)​](https://cocoapods.org/pods/AEPSignal) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Lifecycle](../mobile-core/lifecycle/index.md) | ✔️ | ✔️ | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPLifecycle.svg?color=orange&label=AEPLifecycle&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPLifecycle) | [Link](https://github.com/adobe/aepsdk-core-ios) |
| [Rules Engine](../mobile-core/rules-engine/index.md) | ✔️ |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPRulesEngine.svg?color=orange&label=AEPRulesEngine&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPRulesEngine) | [Link](https://github.com/adobe/aepsdk-rulesengine-ios) |
| [Adobe Experience Platform Edge Network](../edge-network-extensions/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPEdge.svg?color=orange&label=AEPEdge&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPEdge) | [Link](https://github.com/adobe/aepsdk-edge-ios) |
| [Identity for Edge Network](../identity-for-edge-network/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPEdgeIdentity.svg?color=orange&label=AEPEdgeIdentity&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPEdgeIdentity) | [Link](https://github.com/adobe/aepsdk-edgeidentity-ios) |
| [Consent for Edge Network](../consent-for-edge-network/index.md) |  |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPEdgeConsent.svg?color=orange&label=AEPEdgeConsent&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPEdgeConsent) | [Link](https://github.com/adobe/aepsdk-edgeconsent-ios) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) |  |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPAssurance.svg?color=orange&label=AEPAssurance&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPAssurance) | [Link](https://github.com/adobe/aepsdk-assurance-ios) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html?lang=en) |  |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPPlaces.svg?color=orange&label=AEPPlaces&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPPlaces) | [Link](https://github.com/adobe/aepsdk-places-ios) |
| [Places Monitor](https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-monitor-extension/places-monitor-extension.html?lang=en) |   | Releasing Soon |    |
| [Adobe Analytics](../adobe-analytics/index.md) | ✔️ | ✔️ | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPAnalytics.svg?color=orange&label=AEPAnalytics&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPAnalytics) | [Link](https://github.com/adobe/aepsdk-analytics-ios) |
| [Adobe Analytics - Media Analytics for Audio & Video](../adobe-media-analytics/index.md) | ✔️ |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPMedia.svg?color=orange&label=AEPMedia&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPMedia) | [Link](https://github.com/adobe/aepsdk-media-ios) |
| [Adobe Audience Manager](../adobe-audience-manager/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPAudience.svg?color=orange&label=AEPAudience&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPAudience) | [Link](https://github.com/adobe/aepsdk-audience-ios) |
| [Adobe Analytics - Mobile Services](../adobe-analytics-mobile-services/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPMobileServices.svg?color=orange&label=AEPMobileServices&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPMobileServices) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/AEPMobileServices) |
| [Adobe Journey Optimizer](../adobe-journey-optimizer/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPMessaging.svg?color=orange&label=AEPMessaging&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPMessaging) | [Link](https://cocoapods.org/pods/AEPMessaging) |
| [Adobe Journey Optimizer - Decisioning](../adobe-journey-optimizer-decisioning/index.md) |   | ✔️ | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPOptimize.svg?color=orange&label=AEPOptimize&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPOptimize) | [Link](https://github.com/adobe/aepsdk-optimize-ios) |
| [Adobe Target](../adobe-target/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPTarget.svg?color=orange&label=AEPTarget&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPTarget) | [Link](https://github.com/adobe/aepsdk-target-ios) |
| [Adobe Campaign Standard](../adobe-campaign-standard/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPCampaign.svg?color=orange&label=AEPCampaign&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPCampaign) | [Link](https://github.com/adobe/aepsdk-campaign-ios) |
| [Adobe Campaign Classic](../adobe-campaign-classic/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/AEPCampaignClassic.svg?color=orange&label=AEPCampaignClassic&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/AEPCampaignClassic) | [Link](https://github.com/adobe/aepsdk-campaignclassic-ios) |

## iOS — Objective-C

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK for iOS supports iOS 10 or later (includes support for iOS, iPadOS, and tvOS).

| Extension | tvOS | App Extension | CocoaPods | GitHub |
|---|---|---|---|---|
| [Mobile Core](../mobile-core/index.md) | ✔️ |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPCore.svg?color=orange&label=ACPCore&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPCore) | 	✔️
| [Profile](../profile/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPUserProfile.svg?color=orange&label=ACPUserProfile&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPUserProfile) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPUserProfile) |
| [Identity](../mobile-core/identity/index.md) | ✔️ |   | Bundled in Mobile Core | — |
| [Signal](../mobile-core/signal/index.md) | ✔️ |   | Bundled in Mobile Core | — |
| [Lifecycle](../mobile-core/lifecycle/index.md) | ✔️ |   | Bundled in Mobile Core | — |
| [Rules Engine](../mobile-core/rules-engine/index.md) | ✔️ |   | Bundled in Mobile Core | — |
| [Adobe Experience Platform Edge Network](../edge-network-extensions/index.md) |   |   | Not Available | — |
| [Identity for Edge Network](../identity-for-edge-network/index.md) |   |   | Not Available | — |
| [Consent for Edge Network](../consent-for-edge-network/index.md) |   |   | Not Available | — |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) |   |   | [![Cocoapods](https://img.shields.io/badge/AEPAssurance-v1.1.3-orange?logo=apple&style=flat-square)](https://cocoapods.org/pods/AEPAssurance) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/AEPAssurance) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html?lang=en) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPPlaces.svg?color=orange&label=ACPPlaces&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPPlaces) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPPlaces) |
| [Places Monitor](https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-monitor-extension/places-monitor-extension.html?lang=en) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPPlacesMonitor.svg?color=orange&label=ACPPlacesMonitor&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPPlacesMonitor) | [Link](https://github.com/adobe/places-monitor-ios) |
| [Adobe Analytics](../adobe-analytics/index.md) | ✔️ |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPAnalytics.svg?color=orange&label=ACPAnalytics&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPAnalytics) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPAnalytics) |
| [Adobe Analytics - Media Analytics for Audio & Video](../adobe-media-analytics/index.md) | ✔️ |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPMedia.svg?color=orange&label=ACPMedia&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPMedia) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPMedia) |
| [Adobe Audience Manager](../adobe-audience-manager/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPAudience.svg?color=orange&label=ACPAudience&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPAudience) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPAudience) |
| [Adobe Analytics - Mobile Services](../adobe-analytics-mobile-services/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPMobileServices.svg?color=orange&label=ACPMobileServices&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPMobileServices) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/releases/tag/v1.0.0-ACPMobileServices) |
| [Adobe Target](../adobe-target/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPTarget.svg?color=orange&label=ACPTarget&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPTarget) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPTarget) |
| [Adobe Campaign Standard](../adobe-campaign-standard/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPCampaign.svg?color=orange&label=ACPCampaign&logo=apple&logoColor=white&style=flat-square)](https://img.shields.io/cocoapods/v/ACPCampaign.svg?color=orange&label=ACPCampaign&logo=apple&logoColor=white&style=flat-square) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPCampaign) |
| [Adobe Campaign Classic](../adobe-campaign-classic/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPCampaignClassic.svg?color=orange&label=ACPCampaignClassic&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPCampaignClassic) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPCampaignClassic) |

## React Native (AEP 1.x)

Adobe Experience Platform Mobile SDK plugin for React Native supports React Native **version 0.60.0 or later**. For the latest installation instructions, see the README file in the [`aepsdk-react-native`](https://github.com/adobe/aepsdk-react-native#installation) repository.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins (AEP 1.x) for React Native are compatible only with [Android](#android) and [iOS - Swift](#ios--swift) libraries.

<InlineAlert variant="info" slots="text"/>

If you are currently using our ACP-prefix React Native libraries, please see [the guide to migrate to the Experience Platform SDK libraries (AEP 1.x)](https://github.com/adobe/aepsdk-react-native/blob/main/docs/migration.md) for React Native.

| Extension | npmjs |
|---|---|
| [Mobile Core](../mobile-core/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepcore.svg?color=green&label=%40adobe%2Freact-native-aepcore&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepcore) |
| [Profile](../profile/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepuserprofile.svg?color=green&label=%40adobe%2Freact-native-aepuserprofile&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepuserprofile) |
| [Edge](../edge-network-extensions/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedge.svg?color=green&label=%40adobe%2Freact-native-aepedge&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedge) |
| [EdgeIdentity](../identity-for-edge-network/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedgeidentity.svg?color=green&label=%40adobe%2Freact-native-aepedgeidentity&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedgeidentity) |
| [EdgeConsent](../consent-for-edge-network/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepedgeconsent.svg?color=green&label=%40adobe%2Freact-native-aepedgeconsent&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepedgeconsent) |
| [Messaging](../iam/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepmessaging.svg?color=green&label=%40adobe%2Freact-native-aepmessaging&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepmessaging) |
| [Assurance](../platform-assruance-sdk/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepassurance.svg?color=green&label=%40adobe%2Freact-native-aepassurance&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepassurance) |
| [Places](./places/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepplaces.svg?color=green&label=%40adobe%2Freact-native-aepplaces&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepplaces) |

## React Native (ACP 2.x)

Adobe Experience Platform Mobile SDK plugin for React Native supports React Native version 0.60.0 or later. For the latest installation instructions, see the README file in the [`react-native-acpcore`](https://github.com/adobe/react-native-acpcore) repository.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins (ACP 2.x) for React Native are compatible only with [Android](#android) and [iOS — Objective-C](#ios--objective-c) libraries.

<InlineAlert variant="info" slots="text"/>

For React Native, we recommend that you first install [Node.js](https://nodejs.org/en/) to download packages from [npm](https://npm.io/). For additional instructions on getting started with React Native applications, see this [tutorial](https://reactnative.dev/docs/getting-started).

| Extension | npmjs | Github | Sample |
|---|---|---|---|
| [Mobile Core](../mobile-core/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpcore.svg?color=green&label=%40adobe%2Freact-native-acpcore&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpcore) | [Link](https://github.com/adobe/react-native-acpcore) | [Sample](https://github.com/adobe/react-native-acpcore/tree/main/sample/ACPCoreSampleApp) |
| [Profile](../profile/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpuserprofile.svg?color=green&label=%40adobe%2Freact-native-acpuserprofile&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpuserprofile) | [Link](https://github.com/adobe/react-native-acpuserprofile) | [Sample](https://github.com/adobe/react-native-acpuserprofile/tree/main/sample/ACPUserProfileSampleApp) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepassurance.svg?color=green&label=%40adobe%2Freact-native-aepassurance&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepassurance) | [Link](https://github.com/adobe/react-native-aepassurance) | [Sample](https://github.com/adobe/react-native-aepassurance/tree/main/SampleApp) |
| [Places Service](https://docs.adobe.com/content/help/en/places/using/home.html) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpplaces.svg?color=green&label=%40adobe%2Freact-native-acpplaces&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpplaces) | [Link](https://github.com/adobe/react-native-acpplaces) | [Sample](https://github.com/adobe/react-native-acpplaces/tree/main/sample/ACPPlacesSampleApp) |
| [Places Monitor](https://docs.adobe.com/content/help/en/places/using/places-ext-aep-sdks/places-monitor-extension/places-monitor-extension.html) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpplaces-monitor.svg?color=green&label=%40adobe%2Freact-native-acpplaces-monitor&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpplaces-monitor) | [Link](https://github.com/adobe/react-native-acpplaces-monitor) | [Sample](https://github.com/adobe/react-native-acpplaces-monitor/tree/main/sample/ACPPlacesMonitorSample) |
| [Adobe Analytics](../adobe-analytics/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpanalytics.svg?color=green&label=%40adobe%2Freact-native-acpanalytics&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpanalytics) | [Link](https://github.com/adobe/react-native-acpanalytics) | [Sample](https://github.com/adobe/react-native-acpanalytics/tree/main/sample/ACPAnalyticsSampleApp) |
| [Adobe Media Analytics](../adobe-media-analytics/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpmedia.svg?color=green&label=%40adobe%2Freact-native-acpmedia&logo=npm&style=flat-square)](https://www.npmjs.com/package/@adobe/react-native-acpmedia) | [Link](https://github.com/adobe/react-native-acpmedia) | [Sample](https://github.com/adobe/react-native-acpmedia/tree/main/sample/ACPMediaSampleApp) |
| [Adobe Audience Manager](../adobe-audience-manager/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpaudience.svg?color=green&label=%40adobe%2Freact-native-acpaudience&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpaudience) | [Link](https://github.com/adobe/react-native-acpaudience) | [Sample](https://github.com/adobe/react-native-acpaudience/tree/main/sample/ACPAudienceSampleApp) |
| [Adobe Target](../adobe-target/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acptarget.svg?color=green&label=%40adobe%2Freact-native-acptarget&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acptarget) | [Link](https://github.com/adobe/react-native-acptarget) | [Sample](https://github.com/adobe/react-native-acptarget/tree/main/sample/ACPTargetSampleApp) |
| [Adobe Campaign Standard](../adobe-campaign-standard/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpcampaign.svg?color=green&label=%40adobe%2Freact-native-acpcampaign&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpcampaign) | [Link](https://github.com/adobe/react-native-acpcampaign) | [Sample](https://github.com/adobe/react-native-acpcampaign/tree/main/sample/ACPCampaignSampleApp) |

<InlineAlert variant="info" slots="text"/>

Beta versions of React Native Experience Platform Edge Network, Edge Identity, Edge Consent, Messaging and Assurance can be found in the repository link [here](https://github.com/adobe/aepsdk-react-native). These new beta extensions require the latest AEP Core to opperate. See [README](https://github.com/adobe/aepsdk-react-native/blob/main/README.md) for further information on installation and configuration.

## Cordova

Adobe Experience Platform Mobile SDK plugins for Cordova supports Cordova **versions 9.0.0 or later**. For the latest Cordova installation instructions, see the README file in the [`cordova-acpcore repository`](https://github.com/adobe/cordova-acpcore).

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for Cordova are compatible only with [Android](#android) and [iOS — Objective-C](#ios-objective-c) libraries, at this time.

A sample Cordova application that uses the Adobe Experience Platform Mobile SDK can be found [here](https://github.com/adobe/cordova-acpsample).

<InlineAlert variant="info" slots="text"/>

For Cordova, we recommend that you first install [Node.js](https://nodejs.org/en/) to download packages from npm. For additional instructions on getting started with Cordova applications, see this [guide](https://netbeans.apache.org/kb/docs/webclient/cordova-gettingstarted.html).

With Node.js installed, you may install the Cordova framework from terminal using the following statement:

```
sudo npm install -g cordova
```

To start using the Adobe Experience Platform Mobile SDK plugin for Cordova, navigate to the directory of your Cordova app and install the plugins using the following statement:

```
cordova plugin add https://github.com/adobe/cordova-acpcore.git
```

| Extension | npmjs | Github |
|---|---|---|
| [Mobile Core](../mobile-core/index.md) | [![npm](https://img.shields.io/npm/v/@adobe/cordova-acpcore.svg?label=cordova-acpcore&logo=npm)](https://www.npmjs.com/package/@adobe/cordova-acpcore) | [Link](https://github.com/adobe/cordova-acpcore) |
| [Profile](../profile/index.md#cordova) | [![npm](https://img.shields.io/npm/v/@adobe/cordova-acpuserprofile.svg?label=cordova-acpuserprofile&logo=npm)](https://www.npmjs.com/package/@adobe/cordova-acpuserprofile) | [Link](https://github.com/adobe/cordova-acpuserprofile) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) | [![npm](https://img.shields.io/npm/v/@adobe/cordova-aepassurance.svg?label=cordova-aepassurance&logo=npm)](https://www.npmjs.com/package/@adobe/cordova-aepassurance) | [Link](https://github.com/adobe/cordova-aepassurance) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html?lang=en) | [![npm](https://img.shields.io/npm/v/@adobe/cordova-acpplaces.svg?label=cordova-acpplaces&logo=npm)](https://www.npmjs.com/package/@adobe/cordova-acpplaces) | [Link](https://github.com/adobe/cordova-acpplaces) |
| [Places Monitor](https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-monitor-extension/places-monitor-extension.html?lang=en) | [![npm](https://img.shields.io/npm/v/@adobe/cordova-acpplacesmonitor.svg?label=cordova-acpplacesmonitor&logo=npm)](https://www.npmjs.com/package/@adobe/cordova-acpplacesmonitor) | [Link](https://github.com/adobe/cordova-acpplaces-monitor) |
| [Adobe Analytics](../adobe-analytics/index.md) | [![npm](https://img.shields.io/npm/v/@adobe/cordova-acpanalytics.svg?label=cordova-acpanalytics&logo=npm)](https://www.npmjs.com/package/@adobe/cordova-acpanalytics) | [Link](https://github.com/adobe/cordova-acpanalytics) |

## Flutter

Adobe Experience Platform Mobile SDK plugin for Flutter supports Flutter **versions 1.10.0 or later**.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for Flutter are compatible only with [Android]#android) and [iOS — Objective-C](#ios-objective-c) libraries, at this time.

| Extension | pub.dev | Github | Sample App |
|---|---|---|---|
| [Mobile Core](../mobile-core/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_acpcore.svg)](https://pub.dartlang.org/packages/flutter_acpcore) | [Link](https://github.com/adobe/flutter_acpcore) | [Sample](https://github.com/adobe/flutter_acpcore/tree/master/example) |
| [Profile](../profile/index.md#flutter) | [![pub package](https://img.shields.io/pub/v/flutter_acpuserprofile.svg)](https://pub.dartlang.org/packages/flutter_acpuserprofile) | [Link](https://github.com/adobe/flutter-acpuserprofile) | [Sample](https://github.com/adobe/flutter_acpuserprofile/tree/master/example) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html?lang=en) | [![pub package](https://img.shields.io/pub/v/flutter_acpplaces.svg)](https://pub.dartlang.org/packages/flutter_acpplaces) | [Link](https://github.com/adobe/flutter-acpplaces) | [Sample](https://github.com/adobe/flutter_acpplaces/tree/master/example) |
| [Places Monitor](https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-monitor-extension/places-monitor-extension.html?lang=en) | [![pub package](https://img.shields.io/pub/v/flutter_acpplaces_monitor.svg)](https://pub.dartlang.org/packages/flutter_acpplaces_monitor) | [Link](https://github.com/adobe/flutter-acpplaces_monitor) | [Sample](https://github.com/adobe/flutter_acpplaces_monitor/tree/master/example) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_assurance.svg)](https://pub.dartlang.org/packages/flutter_assurance) | [Link](https://github.com/adobe/flutter_assurance) | [Sample](https://github.com/adobe/flutter_assurance/tree/master/example) |
| [Adobe Analytics](../adobe-analytics/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_acpanalytics.svg)](https://pub.dartlang.org/packages/flutter_acpanalytics) | [Link](https://github.com/adobe/flutter_acpanalytics) | [Sample](https://github.com/adobe/flutter_acpanalytics/tree/master/example) |

## Xamarin

Adobe Experience Platform Mobile SDK plugins for Xamarin require **MonoAndroid 9.0+ and Xamarin.iOS 1.0+**. For the latest Xamarin installation instructions, see the README file in the [`xamarin-acpcore`](https://github.com/adobe/xamarin-acpcore) repository.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for Xamarin are compatible only with [Android](#android) and [iOS — Objective-C](#ios-objective-c) libraries, at this time.

<InlineAlert variant="info" slots="text"/>

The Adobe Experience Platform Mobile SDK plugins for Xamarin are packages distributed via [nuget](https://www.nuget.org/packages). NuGet packages can be added to projects within a [Visual Studio](https://visualstudio.microsoft.com/downloads/) solution. The NuGet packages can also be generated locally via the included Makefile located in each of the Xamarin repositories.

| Extension | Android | iOS | Github |
|---|---|---|---|
| [Mobile Core](../mobile-core/index.md) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPCore.Android?label=Adobe.ACPCore.Android&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPCore.Android/) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPCore.iOS?label=Adobe.ACPCore.iOS&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPCore.iOS/) | [Link](https://github.com/adobe/xamarin-acpcore) |
| [Profile](../profile/index.md#xamarin) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPUserProfile.Android?label=Adobe.ACPUserProfile.Android&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPUserProfile.Android/) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPUserProfile.iOS?label=Adobe.ACPUserProfile.iOS&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPUserProfile.iOS/) | [Link](https://github.com/adobe/xamarin-acpuserprofile) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) | [![Nuget](https://img.shields.io/nuget/v/Adobe.AEPAssurance.Android?label=Adobe.AEPAssurance.Android&logo=xamarin)](https://www.nuget.org/packages/Adobe.AEPAssurance.Android/) | [![Nuget](https://img.shields.io/nuget/v/Adobe.AEPAssurance.iOS?label=Adobe.AEPAssurance.iOS&logo=xamarin)](https://www.nuget.org/packages/Adobe.AEPAssurance.iOS/) | [Link](https://github.com/adobe/xamarin-aepassurance) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html?lang=en) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPPlaces.Android?label=Adobe.ACPPlaces.Android&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPPlaces.Android/) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPPlaces.iOS?label=Adobe.ACPPlaces.iOS&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPPlaces.iOS/) | [Link](https://github.com/adobe/xamarin-acpcore) |
| [Adobe Analytics](../adobe-analytics/index.md) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPAnalytics.Android?label=Adobe.ACPAnalytics.Android&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPAnalytics.Android/) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPAnalytics.iOS?label=Adobe.ACPAnalytics.iOS&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPAnalytics.iOS/) | [Link](https://github.com/adobe/xamarin-acpanalytics) |

## Unity

<InlineAlert variant="info" slots="text"/>

Effective March 30, 2022, support for Adobe Experience Platform Mobile SDKs on Unity is no longer active. While you may continue using our libraries, Adobe no longer plans to update, modify, or provide support for these libraries. Please contact your Adobe CSM for details.

Adobe Experience Platform Mobile SDK plugin for Unity supports Unity **version 2019.4.34f1**. For the latest Unity installation instructions, see the README file in the [`unity-acpcore`](https://github.com/adobe/unity-acpcore) repository.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for Unity are compatible only with [Android](#android) and [iOS — Objective-C](#ios-objective-c) libraries, at this time.

To start using the Adobe Experience Platform Mobile SDK for Unity, open your application and import the following Unity package(s):

| Extension | Github | Sample App |
|---|---|---|
| [Mobile Core](../mobile-core/index.md) | [Link](https://github.com/adobe/unity-acpcore/tree/master/bin) | [Sample](https://github.com/adobe/unity-acpcore#sample-app) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) | [Link](https://github.com/adobe/unity-aepassurance/tree/master/bin) | [Sample](https://github.com/adobe/unity-aepassurance#sample-app) |
| [Adobe Analytics](../adobe-analytics/index.md) | [Link](https://github.com/adobe/unity-acpanalytics/tree/master/bin) | [Sample](https://github.com/adobe/unity-acpanalytics#sample-app) |
| [Profile](../profile/index.md) | [Link](https://github.com/adobe/unity_acpuserprofile/tree/master/bin) | [Sample](https://github.com/adobe/unity_acpuserprofile#sample-app) |
