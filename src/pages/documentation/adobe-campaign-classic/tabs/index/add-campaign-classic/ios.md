1. Add the Campaign Classic and [Mobile Core](../mobile-core/index.md) libraries to your project.

   You can add the following pods to your `Podfile`:

   ```text
   pod 'ACPCampaignClassic'
   pod 'ACPLifecycle'
   pod 'ACPCore'
   ```

   or you can manually include the [Mobile Core](https://github.com/Adobe-Marketing-Cloud/acp-sdks/releases/tag/v1.0.1-ACPCore) and [Campaign Classic](https://github.com/Adobe-Marketing-Cloud/acp-sdks/releases/tag/v1.0.0-ACPCampaignClassic) libraries found in Github.

2. In the Xcode project, import the Mobile Core and Campaign Classic extensions:

**Objective-C**

```objectivec
   #import "ACPCore.h"
   #import "ACPCampaignClassic.h"
   #import "ACPLifecycle.h"
```

**Swift**

```swift
   import ACPCore
   import ACPCampaignClassic
   import ACPLifecycle
```