1. Add the library to your project via your `Podfile` by adding `pod 'ACPAudience'`
2. Import the Audience and Identity library, using the respective language: 

#### Objective-C

```objectivec
  #import "ACPCore.h"
  #import "ACPAudience.h"
  #import "ACPIdentity.h"
```

#### Swift

```swift
   import ACPCore
   import ACPAudience
```

<InlineAlert variant="info" slots="text"/>

Audience Manager depends on the Identity extension and is automatically included in the Core pod. When installing the Audience Manager extension manually, ensure that you added the `libACPIdentity_iOS.a` library to your project.