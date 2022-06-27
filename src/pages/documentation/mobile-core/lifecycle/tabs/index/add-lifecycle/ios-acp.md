The Lifecycle extension is included in the Mobile Core extension. Add the [Mobile Core](../../../../index.md) extension to your project using Cocoapods.

Add the following pod in your `Podfile`:

```pod
pod 'ACPCore','~>2.0'
```

Import the Lifecycle library:

### Swift

In Swift, importing `ACPCore` also imports the necessary Lifecycle APIs:

```swift
import ACPCore
```

### Objective-C

```objectivec
 #import "ACPLifecycle.h"
 #import "ACPCore.h"
```