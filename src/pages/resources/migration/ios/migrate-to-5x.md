# Migrate to Adobe Experience Platform 5.x SDKs for iOS

<InlineAlert variant="info" slots="text"/>

This Mobile SDK version for iOS now supports a minimum iOS version of 12.0 and a tvOS version of 12.0. The XCFrameworks included in the GitHub release are built using Xcode 15.0.

## SDK versions

| Extension | Version |
|---|---|
| [Mobile Core](../../../home/base/mobile-core/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPCore&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Rules Engine](../../../home/base/mobile-core/rules-engine/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-rulesengine-ios.svg?label=AEPRulesEngine&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Signal](../../../home/base/mobile-core/signal/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPSignal&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Identity](../../../home/base/mobile-core/identity/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPIdentity&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Lifecycle](../../../home/base/mobile-core/lifecycle/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-core-ios.svg?label=AEPLifecycle&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Profile](../../../home/base/profile/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-userprofile-ios.svg?label=AEPUserProfile&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Adobe Experience Platform Assurance](../../../home/base/assurance/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-assurance-ios.svg?label=AEPAssurance&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Adobe Experience Platform Edge Network](../../../edge/edge-network/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edge-ios.svg?label=AEPEdge&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Identity for Edge Network](../../../edge/identity-for-edge-network/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edgeidentity-ios.svg?label=AEPEdgeIdentity&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Consent for Edge Network](../../../edge/consent-for-edge-network/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edgeconsent-ios.svg?label=AEPEdgeConsent&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Media for Edge Network](../../../edge/media-for-edge-network/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edgemedia-ios.svg?label=AEPEdgeMedia&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Edge Bridge](../../../solution/adobe-analytics/migrate-to-edge-network.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-edgebridge-ios.svg?label=AEPEdgeBridge&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Adobe Journey Optimizer](../../../edge/adobe-journey-optimizer/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-messaging-ios.svg?label=AEPMessaging&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Adobe Journey Optimizer - Decisioning](../../../edge/adobe-journey-optimizer-decisioning/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-optimize-ios.svg?label=AEPOptimize&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-places-ios.svg?label=AEPPlaces&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Adobe Analytics](../../../solution/adobe-analytics/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-analytics-ios.svg?label=AEPAnalytics&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Adobe Analytics - Media Analytics for Audio & Video](../../../solution/adobe-media-analytics/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-media-ios.svg?label=AEPMedia&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Adobe Target](../../../solution/adobe-target/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-target-ios.svg?label=AEPTarget&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Adobe Campaign Standard](../../../solution/adobe-campaign-standard/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-campaign-ios.svg?label=AEPCampaign&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Adobe Campaign Classic](../../../solution/adobe-campaign-classic/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-campaignclassic-ios.svg?label=AEPCampaignClassic&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |
| [Adobe Audience Manager](../../../solution/adobe-audience-manager/index.md) | ![Version](https://img.shields.io/github/v/release/adobe/aepsdk-audience-ios.svg?label=AEPAudience&logo=apple&logoColor=white&color=orange&sort=semver&filter=5*) |

## Migrate from Adobe Experience Platform 4.x SDKs for iOS

If you have implemented Adobe Experience Platform 4.x SDKs for iOS, then this guide will help you understand the steps required to migrate your implementation to the Experience Platform 5.x SDKs. In summary, you'll need to:

1. [Update dependencies](#update-dependencies)
2. [Update outdated API references](#update-outdated-api-references)

### Update dependencies

#### Manual library import

If you are importing SDK libraries manually, make sure to update your libraries by downloading the most recent 5.x binaries from their respective Github repositories.

#### CocoaPods

If you are using CocoaPods to manage your Adobe Experience Platform Mobile SDK dependencies, the following example shows you how to update to Experience Platform 5.x SDKs in your `Podfile`.

```ruby
# Update pod dependencies to 5.x version
# pod 'AEPCore', '~> 4.0'
# pod 'AEPLifecycle', '~> 4.0'
# pod 'AEPIdentity', '~> 4.0'
# pod 'AEPSignal', '~> 4.0'
# pod 'AEPUserProfile', '~> 4.0'

  pod 'AEPCore', '~> 5.0'
  pod 'AEPLifecycle', '~> 5.0'
  pod 'AEPIdentity', '~> 5.0'
  pod 'AEPSignal', '~> 5.0'
  pod 'AEPUserProfile', '~> 5.0'
```

Save the `Podfile`, and run `pod repo update` to update your local CocoaPods repository.

Once the previous command is complete, run `pod install` or `pod update` to update the application dependencies.

#### Swift Package Manager

If you are using Swift Package Manger (SPM) for managing your app dependencies, you can now include the Experience Platform 5.x SDKs either through Xcode UI, or by declaring them as dependencies in the Package.swift project file. For more details, follow the guide for [managing dependencies using Swift Package Manager](../../manage-spm-dependencies.md).

## Update outdated API references

When updating to the Experience Platform 5.x SDKs, please take note of the following aspects:

#### Edge Bridge

As of version 5.0.0 of AEP Edge Bridge for iOS, the following table lists the mapping of the `trackAction` and `trackState` parameters to the "data" node of the Experience Event sent to the Edge Network. Adobe Experience Platform Edge Network automatically maps these data variables into Adobe Analytics without additional server-side configuration. If you are currently using Edge Bridge version 4.x and you are mapping data to XDM in your datastream, adjustments will be necessary when adopting version 5.0.0.

| Data | Key path in the network request (v4.x) | Key path in the network request (v5+) | Description |
| --- | --- | --- | --- |
| action | `data.action` | `data.__adobe.analytics.linkName` | As of v5, the field `data.__adobe.analytics.linkType` with value `lnk_o` is automatically included as well. |
| state | `data.state` | `data.__adobe.analytics.pageName` | |
| context data | `data.contextdata` | `data.__adobe.analytics.contextData` | Context data is a map which includes the custom keys and values specified in the `trackAction` and `trackState` API calls. |
| && prefixed context data | `data.contextdata`| `data.__adobe.analytics` | Before v5 there was no special handling of context data prefixed with "&&".  <br> <br>As of v5, context data keys prefixed with `&&` must be known to Analytics and are case sensitive. When mapped to the event, the key's name does not include the "&&" prefix. For example, "&&products" is sent as `data.__adobe.analytics.products`.|
| app identifier | not included | `data.__adobe.analytics.contextData.a.AppID` | As of v5, the application identifier is automatically added to every tracking event. Note the key name is "a.AppID".|
| customer perspective | not included|  `data.__adobe.analytics.cp` | As of v5, the customer perspective is automatically added to every tracking event. The values are either "foreground" or "background". |

**Track Action Example**

Given the track action call: 

```swift
MobileCore.track(action: "action name", data: ["key": "value", "&&products": ";Running Shoes;1;69.95;event1|event2=55.99;eVar1=12345"])
```
The resulting Experience Event has the following payload:

```json
{
 "data":{
    "__adobe": {
        "analytics": {
            "linkName": "action name",
            "linkType": "lnk_o",
            "cp": "foreground",
            "products": ";Running Shoes;1;69.95;event1|event2=55.99;eVar1=12345",
            "contextData":{
                "a.AppID": "myApp 1.0 (1)",
                "key": "value"
            }
        }
    }
 }
```

**Track State Example**

Given the track state call:

```swift
MobileCore.track(state: "view name", data: ["&&events": "event5,event2=2"])
```
 
 The resulting Experience Event has the following payload:

```json
{
 "data":{
    "__adobe": {
        "analytics": {
            "pageName": "view name",
            "cp": "foreground",
            "events": "event5,event2=2",
            "contextData":{
                "a.AppID": "myApp 1.0 (1)",
            }
        }
    }
 }
```
