import Tabs from './tabs/migrate-to-4x.md'

# Migrate to Adobe Experience Platform 4.x SDKs for iOS

<InlineAlert variant="info" slots="text"/>

This Mobile SDK version for iOS now supports a minimum iOS version of 11.0 and a tvOS version of 11.0. The XCFrameworks included in the GitHub release are built using Xcode 14.1.

## SDK versions

| Extension | Version |
|---|---|
| [Mobile Core](../../../home/base/mobile-core/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPCore&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Rules Engine](../../../home/base/mobile-core/rules-engine/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-rulesengine-ios.svg?label=AEPRulesEngine&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Signal](../../../home/base/mobile-core/signal/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPSignal&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Identity](../../../home/base/mobile-core/identity/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPIdentity&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Lifecycle](../../../home/base/mobile-core/lifecycle/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPLifecycle&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Profile](../../../home/base/profile/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-userprofile-ios.svg?label=AEPUserProfile&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Adobe Experience Platform Assurance](../../../home/base/assurance/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-assurance-ios.svg?label=AEPAssurance&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Adobe Experience Platform Edge Network](../../../edge/edge-network/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edge-ios.svg?label=AEPEdge&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Identity for Edge Network](../../../edge/identity-for-edge-network/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edgeidentity-ios.svg?label=AEPEdgeIdentity&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Consent for Edge Network](../../../edge/consent-for-edge-network/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edgeconsent-ios.svg?label=AEPEdgeConsent&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Media for Edge Network](../../../edge/media-for-edge-network/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edgemedia-ios.svg?label=AEPEdgeMedia&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Edge Bridge](../../../solution/adobe-analytics/migrate-to-edge-network.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edgebridge-ios.svg?label=AEPEdgeBridge&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Adobe Journey Optimizer](../../../edge/adobe-journey-optimizer/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-messaging-ios.svg?label=AEPMessaging&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Offer Decisioning and Target](../../../edge/adobe-journey-optimizer-decisioning/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-optimize-ios.svg?label=AEPOptimize&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-places-ios.svg?label=AEPPlaces&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Adobe Analytics](../../../solution/adobe-analytics/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-analytics-ios.svg?label=AEPAnalytics&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Adobe Analytics - Media Analytics for Audio & Video](../../../solution/adobe-media-analytics/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-media-ios.svg?label=AEPMedia&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Adobe Target](../../../solution/adobe-target/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-target-ios.svg?label=AEPTarget&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Adobe Campaign Standard](../../../solution/adobe-campaign-standard/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-campaign-ios.svg?label=AEPCampaign&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Adobe Campaign Classic](../../../solution/adobe-campaign-classic/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-campaignclassic-ios.svg?label=AEPCampaignClassic&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |
| [Adobe Audience Manager](../../../solution/adobe-audience-manager/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-audience-ios.svg?label=AEPAudience&logo=apple&logoColor=white&color=orange&sort=semver&filter=4*) |

## Migrate from Adobe Experience Platform 3.x SDKs for iOS

If you have implemented Adobe Experience Platform 3.x SDKs for iOS, then this guide will help you understand the steps required to migrate your implementation to the Experience Platform 4.x SDKs. In summary, you'll need to:

1. [Update dependencies](#update-dependencies)
2. [Update outdated API references](#update-outdated-api-references)

### Update dependencies

#### Manual library import

If you are importing SDK libraries manually, make sure to update your libraries by downloading the most recent 4.x binaries from their respective Github repositories.

#### CocoaPods

If you are using CocoaPods to manage your Adobe Experience Platform Mobile SDK dependencies, the following example shows you how to update to Experience Platform 4.x SDKs in your `Podfile`.

```ruby
# Update pod dependencies to 4.x version
# pod 'AEPCore', '~> 3.0'
# pod 'AEPLifecycle', '~> 3.0'
# pod 'AEPIdentity', '~> 3.0'
# pod 'AEPSignal', '~> 3.0'
# pod 'AEPUserProfile', '~> 3.0'

  pod 'AEPCore', '~> 4.0'
  pod 'AEPLifecycle', '~> 4.0'
  pod 'AEPIdentity', '~> 4.0'
  pod 'AEPSignal', '~> 4.0'
  pod 'AEPUserProfile', '~> 4.0'
```

Save the `Podfile`, and run `pod repo update` to update your local CocoaPods repository.

Once the previous command is complete, run `pod install` or `pod update` to update the application dependencies.

#### Swift Package Manager

If you are using Swift Package Manger (SPM) for managing your app dependencies, you can now include the Experience Platform 4.x SDKs either through Xcode UI, or by declaring them as dependencies in the Package.swift project file. For more details, follow the guide for [managing dependencies using Swift Package Manager](../../manage-spm-dependencies.md).

## Update outdated API references

### Adobe Experience Platform Edge Network

The following APIs have been removed:

| Removed API | Alternative API |
| :------------- | :-------------- |
| `XDMFormatters` utility | Use `getISO8601UTCDateWithMilliseconds()` and `getISO8601FullDate()` functions in the [Date class extension](https://github.com/adobe/aepsdk-core-ios/blob/4.0.0/AEPServices/Sources/utility/Date%2BFormat.swift) from the AEPServices module. |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

iOS 3.x

<Tabs query="platform=ios&extension=edge&version=3"/>

iOS 4.x

<Tabs query="platform=ios&extension=edge&version=4"/>
