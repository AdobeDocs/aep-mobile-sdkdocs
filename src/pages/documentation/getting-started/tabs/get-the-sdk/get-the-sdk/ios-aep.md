<InlineAlert variant="warning" slots="text"/>

Adobe Experience Platform SDKs for iOS support **iOS 10 or later**; **requires** Swift 5.1 or newer; **and** Xcode 11.0 or newer.

<InlineAlert variant="success" slots="header, text"/>

Apple M1 compatibility

In order to support the new Apple M1 architecture while maintaining support for existing Intel architecture, the Adobe Experience Platform SDKs are now distributed using XCFrameworks. <br/><br/> Please see the [release notes](../release-notes/#december-18-2020) and the document on [current SDK versions](../resources/upgrading-to-aep/current-sdk-versions.md) for more information on the latest extension versions. FIX LINKS

#### Swift

Add the dependencies to your `Podfile` for each extension. For a complete list of available SDK extension libraries, please read the documentation on [current SDK Versions](../resources/upgrading-to-aep/current-sdk-versions.md). FIX LINK

```swift
use_frameworks!
target 'YourTargetApp' do
    // Mobile Core and dependents
    pod 'AEPCore'
    pod 'AEPSignal'
    pod 'AEPLifecycle'

    // Client-side user profile
    pod 'AEPUserProfile'

    // Edge Network and dependents
    pod 'AEPEdge'
    pod 'AEPEdgeIdentity'
    pod 'AEPEdgeConsent'

    // Adobe Analytics and dependents
    pod 'AEPIdentity'
    pod 'AEPAnalytics'
end
```