​Add the AEPSignal extension and it's dependency, the [Mobile Core](../index.md) extension to your project using Cocoapods.

Add following pods in your `Podfile`:

```pod
pod 'AEPCore','~> 3.0'
pod 'AEPSignal','~> 3.0'
```

Import the Signal libraries:

### Swift

```swift
import AEPCore
import AEPSignal
```

### Objective-C

```objectivec
@import AEPCore;
@import AEPSignal;
```