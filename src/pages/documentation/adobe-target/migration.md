import Tabs from './tabs/migration.md'

# Migrating to AEPTarget reference

This document is a reference comparison of AEPTarget(3.x) APIs against their equivalent ACPTarget (2.x) APIs for an iOS mobile application implementation.

The AEPTarget extension is implemented purely in Swift and is compatible with the AEPCore Swift SDK. To ensure a smooth transition from the ACPTarget SDK, there are no major changes on the API names or definition. For more details, follow the migration guide below for your Swift or Objective-C mobile application. If an explanation beyond showing API differences is necessary, it will be captured as an info hint within that API's section.

## Public classes

| Type | AEP 3.x (Swift) | AEP 3.x (Objective-C) | ACP 2.x (Objective-C) |
| :--- | :--- | :--- | :--- |
| Primary Class (Module) | Target | AEPMobileTarget | ACPTarget |
| Class | TargetRequest | AEPTargetRequestObject | ACPTargetRequestObject |
| Class | TargetPrefetch | AEPTargetPrefetchObject | ACPTargetPrefetchObject |
| Class | TargetOrder | AEPTargetOrder | ACPTargetOrder |
| Class | TargetParameters | AEPTargetParameters | ACPTargetParameters |
| Class | TargetProduct | AEPTargetProduct | ACPTargetProduct |

## Public APIs

### clearPrefetchCache

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=clear-prefetch-cache"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=clear-prefetch-cache"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=clear-prefetch-cache"/>

### clickedLocation

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=clicked-location"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=clicked-location"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=clicked-location"/>

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=extension-version"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=extension-version"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=extension-version"/>

### getThirdPartyId

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=get-third-party-id"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=get-third-party-id"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=get-third-party-id"/>

### getTntId

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=get-tnt-id"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=get-tnt-id"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=get-tnt-id"/>

### prefetchContent

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=prefetch-content"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=prefetch-content"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=prefetch-content"/>

### registerExtension

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=register-extension"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=register-extension"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=register-extension"/>

### retrieveLocationContent

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=retrieve-location-content"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=retrieve-location-content"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=retrieve-location-content"/>

### setPreviewRestartDeepLink

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=set-preview-restart-deep-link"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=set-preview-restart-deep-link"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=set-preview-restart-deep-link"/>

### setThirdPartyId

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=set-third-party-id"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=set-third-party-id"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=set-third-party-id"/>

