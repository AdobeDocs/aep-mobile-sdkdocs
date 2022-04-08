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

<ClearPrefetchCacheAEPSwift/>

AEP 3.x (Objective-C)

<ClearPrefetchCacheAEPObjectiveC/>

ACP 2.x (Objective-C)

<ClearPrefetchCacheACPObjectiveC/>

### clickedLocation

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<ClickedLocationAEPSwift/>

AEP 3.x (Objective-C)

<ClickedLocationAEPObjectiveC/>

ACP 2.x (Objective-C)

<ClickedLocationACPObjectiveC/>

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<ExtensionVersionAEPSwift/>

AEP 3.x (Objective-C)

<ExtensionVersionAEPObjectiveC/>

ACP 2.x (Objective-C)

<ExtensionVersionACPObjectiveC/>

### getThirdPartyId

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<GetThirdPartyIdAEPSwift/>

AEP 3.x (Objective-C)

<GetThirdPartyIdAEPObjectiveC/>

ACP 2.x (Objective-C)

<GetThirdPartyIdACPObjectiveC/>

### getTntId

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<GetTntIdAEPSwift/>

AEP 3.x (Objective-C)

<GetTntIdAEPObjectiveC/>

ACP 2.x (Objective-C)

<GetTntIdACPObjectiveC/>

### prefetchContent

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<PrefetchContentAEPSwift/>

AEP 3.x (Objective-C)

<PrefetchContentAEPObjectiveC/>

ACP 2.x (Objective-C)

<PrefetchContentACPObjectiveC/>

### registerExtension

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<RegisterExtensionAEPSwift/>

AEP 3.x (Objective-C)

<RegisterExtensionAEPObjectiveC/>

ACP 2.x (Objective-C)

<RegisterExtensionACPObjectiveC/>

### retrieveLocationContent

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<RetrieveLocationContentAEPSwift/>

AEP 3.x (Objective-C)

<RetrieveLocationContentAEPObjectiveC/>

ACP 2.x (Objective-C)

<RetrieveLocationContentACPObjectiveC/>

### setPreviewRestartDeepLink

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<SetPreviewRestartDeepLinkAEPSwift/>

AEP 3.x (Objective-C)

<SetPreviewRestartDeepLinkAEPObjectiveC/>

ACP 2.x (Objective-C)

<SetPreviewRestartDeepLinkACPObjectiveC/>

### setThirdPartyId

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<SetThirdPartyIdAEPSwift/>

AEP 3.x (Objective-C)

<SetThirdPartyIdAEPObjectiveC/>

ACP 2.x (Objective-C)

<SetThirdPartyIdACPObjectiveC/>

