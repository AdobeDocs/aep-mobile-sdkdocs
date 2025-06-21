import Tabs from './tabs/migrate-to-3x.md'

# Migrate to Adobe Experience Platform 3.x SDKs for iOS

<InlineAlert variant="info" slots="text"/>

This Mobile SDK version for iOS supports a minimum iOS version of 10.0 and a tvOS version of 10.0.

## SDK versions

| Extension | Version |
|---|---|
| [Mobile Core](../../../home/base/mobile-core/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPCore&logo=apple&logoColor=white&color=orange&sort=semver&filter=3*) |
| [Rules Engine](../../../home/base/mobile-core/rules-engine/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-rulesengine-ios.svg?label=AEPRulesEngine&logo=apple&logoColor=white&color=orange&sort=semver&filter=1*) |
| [Signal](../../../home/base/mobile-core/signal/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPSignal&logo=apple&logoColor=white&color=orange&sort=semver&filter=3*) |
| [Identity](../../../home/base/mobile-core/identity/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPIdentity&logo=apple&logoColor=white&color=orange&sort=semver&filter=3*) |
| [Lifecycle](../../../home/base/mobile-core/lifecycle/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPLifecycle&logo=apple&logoColor=white&color=orange&sort=semver&filter=3*) |
| [Profile](../../../home/base/profile/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-userprofile-ios.svg?label=AEPUserProfile&logo=apple&logoColor=white&color=orange&sort=semver&filter=3*) |
| [Adobe Experience Platform Assurance](../../../home/base/assurance/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-assurance-ios.svg?label=AEPAssurance&logo=apple&logoColor=white&color=orange&sort=semver&filter=3*) |
| [Adobe Experience Platform Edge Network](../../../edge/edge-network/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edge-ios.svg?label=AEPEdge&logo=apple&logoColor=white&color=orange&sort=semver&filter=1*) |
| [Identity for Edge Network](../../../edge/identity-for-edge-network/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edgeidentity-ios.svg?label=AEPEdgeIdentity&logo=apple&logoColor=white&color=orange&sort=semver&filter=1*) |
| [Consent for Edge Network](../../../edge/consent-for-edge-network/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edgeconsent-ios.svg?label=AEPEdgeConsent&logo=apple&logoColor=white&color=orange&sort=semver&filter=1*) |
| [Edge Bridge](../../../solution/adobe-analytics/migrate-to-edge-network.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edgebridge-ios.svg?label=AEPEdgeBridge&logo=apple&logoColor=white&color=orange&sort=semver&filter=1*) |
| [Adobe Journey Optimizer](../../../edge/adobe-journey-optimizer/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-messaging-ios.svg?label=AEPMessaging&logo=apple&logoColor=white&color=orange&sort=semver&filter=1*) |
| [Offer Decisioning and Target](../../../edge/adobe-journey-optimizer-decisioning/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-optimize-ios.svg?label=AEPOptimize&logo=apple&logoColor=white&color=orange&sort=semver&filter=1*) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-places-ios.svg?label=AEPPlaces&logo=apple&logoColor=white&color=orange&sort=semver&filter=3*) |
| [Adobe Analytics](../../../solution/adobe-analytics/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-analytics-ios.svg?label=AEPAnalytics&logo=apple&logoColor=white&color=orange&sort=semver&filter=3*) |
| [Adobe Analytics - Media Analytics for Audio & Video](../../../solution/adobe-media-analytics/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-media-ios.svg?label=AEPMedia&logo=apple&logoColor=white&color=orange&sort=semver&filter=3*) |
| [Adobe Target](../../../solution/adobe-target/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-target-ios.svg?label=AEPTarget&logo=apple&logoColor=white&color=orange&sort=semver&filter=3*) |
| [Adobe Campaign Standard](../../../solution/adobe-campaign-standard/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-campaign-ios.svg?label=AEPCampaign&logo=apple&logoColor=white&color=orange&sort=semver&filter=3*) |
| [Adobe Campaign Classic](../../../solution/adobe-campaign-classic/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-campaignclassic-ios.svg?label=AEPCampaignClassic&logo=apple&logoColor=white&color=orange&sort=semver&filter=3*) |
| [Adobe Audience Manager](../../../solution/adobe-audience-manager/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-audience-ios.svg?label=AEPAudience&logo=apple&logoColor=white&color=orange&sort=semver&filter=3*) |

## Migrate from ACP-prefixed SDKs for iOS

If you have implemented Objective-C versions (ACP-prefixed SDK libraries, 2.x or lower), then this guide will help you understand the steps required to migrate your implementation to the Swift versions (AEP-prefixed 3.x SDK libraries). In summary, you'll need to:

1. [Switch imported libraries from ACP-prefix to AEP-prefix libraries](#switch-imported-libraries)
2. [Update SDK initialization](#update-sdk-initialization)
3. [Update outdated API references](#update-outdated-api-references)

### Switch imported libraries

At this time, the following ACP-prefix libraries may be switched out with their respective AEP-prefix SDK libraries. See instructions on proceeding further if you have [manually imported SDK libraries](#manual-library-import) , if you used [CocoaPods to manage SDK dependencies](#cocoapods), or you used [Swift Package Manager](#swift-package-manager).

<InlineAlert variant="warning" slots="text"/>

In addition to `ACPCore` being replaced with `AEPCore`, you will also need to explicitly import `AEPLifecycle`, `AEPIdentity`, and `AEPSignal` libraries to ensure there is no disruption in SDK behavior.

| Objective-C (ACP-prefix) | Swift (AEP-prefix) |
| :----------------------- | :----------------- |
| ACPCore | AEPCore/AEPLifecycle/AEPIdentity/AEPSignal |
| ACPUserProfile | AEPUserProfile |
| ACPAnalytics | AEPAnalytics |
| ACPAudience | AEPAudience |
| ACPTarget | AEPTarget |
| ACPMedia | AEPMedia |
| ACPPlaces | AEPPlaces |
| AEPAssurance (1.x) | AEPAssurance (3.x) |
| ACPCampaign | AEPCampaign |
| ACPCampaignClassic | AEPCampaignClassic |

#### Manual library import

If you are manually importing SDK libraries, ensure you identify all currently used ACP-prefix libraries, remove them from your project, and switch them over to AEP-prefix libraries.

#### CocoaPods

If you are using CocoaPods to manage your Adobe Experience Platform Mobile SDK dependencies, the following example shows you how to switch ACP-prefix libraries to AEP-prefix libraries in your `Podfile`.

```ruby
# replace ACPCore with AEPCore, AEPLifecycle, AEPIdentity and AEPSignal
# pod 'ACPCore'
  pod 'AEPCore', '~> 3.0'
  pod 'AEPLifecycle', '~> 3.0'
  pod 'AEPIdentity', '~> 3.0'
  pod 'AEPSignal', '~> 3.0'

# replace ACPUserProfile with AEPUserProfile
# pod 'ACPUserProfile'
  pod 'AEPUserProfile', '~> 3.0'
```

Save the `Podfile`, and run `pod repo update` to update your local CocoaPods repository.

Once the previous command is complete, run `pod install` or `pod update` to update the application dependencies.

#### Swift Package Manager

If you are using Swift Package Manger (SPM) for managing your app dependencies, you can now include the AEP-prefixed libraries either through Xcode UI, or by declaring them as dependencies in the Package.swift project file. For more details, follow the guide for [managing dependencies using Swift Package Manager](../../manage-spm-dependencies.md).

### Update SDK initialization

After you have imported the new Swift-based AEP-prefix libraries, you'll need to update SDK initialization code as described below. With Swift, the `MobileCore.start()` API is no longer required. The SDK has simplified initialization and registration of extensions by providing the `MobileCore.registerExtensions()` API. After the given extensions have been registered, the SDK will be initialized and the completion block will be executed. Code which used to reside in the start() block will now reside in the `MobileCore.registerExtensions()` completion block.

The following code snippets show the new and correct initialization code required for the Swift-based, AEP-prefix SDK libraries.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="lang=swift"/>

Objective-C

<Tabs query="lang=obj-c"/>

## Update outdated API references

Finally, you'll need to scan through your current implementation and replace ACP-prefix API calls to the new Swift-based, AEP-prefix libraries. A quick find and replace should do the trick. Detailed API changes by extension may be found at the links below.

| SDK Component & Extensions | Migration API Reference |
| :--- | :--- |
| Core | [AEPCore](https://developer.adobe.com/client-sdks/previous-versions/documentation/mobile-core/migration) |
| Identity | [AEPIdentity](https://developer.adobe.com/client-sdks/previous-versions/documentation/mobile-core/identity/migration) |
| Lifecycle | [AEPLifecycle](https://developer.adobe.com/client-sdks/previous-versions/documentation/mobile-core/lifecycle/migration) |
| Signal | [AEPSignal](https://developer.adobe.com/client-sdks/previous-versions/documentation/mobile-core/signal/migration) |
| Profile | [AEPUserProfile](https://developer.adobe.com/client-sdks/previous-versions/documentation/profile/migration) |
| Adobe Experience Platform Assurance | [AEPAssurance](https://developer.adobe.com/client-sdks/previous-versions/documentation/platform-assurance-sdk/migration) |
| Adobe Experience Platform Places Service | [AEPPlaces](https://developer.adobe.com/client-sdks/previous-versions/documentation/places/migration) |
| Adobe Analytics | [AEPAnalytics](https://developer.adobe.com/client-sdks/previous-versions/documentation/adobe-analytics/migration) |
| Adobe Analytics - Media Analytics for Audio & Video | [AEPMedia](https://developer.adobe.com/client-sdks/previous-versions/documentation/adobe-media-analytics/migration) |
| Adobe Audience | [AEPAudience](https://developer.adobe.com/client-sdks/previous-versions/documentation/adobe-audience-manager/migration) |
| Adobe Experience Platform Target | [AEPTarget](https://developer.adobe.com/client-sdks/previous-versions/documentation/adobe-target/migration) |
| Adobe Experience Platform Campaign | [AEPCampaign](https://developer.adobe.com/client-sdks/previous-versions/documentation/adobe-campaign-standard/migration) |
| Adobe Experience Platform Campaign Classic | [AEPCampaignClassic](https://developer.adobe.com/client-sdks/previous-versions/documentation/adobe-campaign-classic/migration) |
