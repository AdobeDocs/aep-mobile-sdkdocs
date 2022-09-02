1. Add the Mobile Core and Edge extensions to your project using CocoaPods. Add following pods in your `Podfile`:

   ```swift
   use_frameworks!
   target 'YourTargetApp' do
   	pod 'AEPCore'
   	pod 'AEPEdge'
   	pod 'AEPEdgeIdentity'
   end
   ```
   
2. Import the Mobile Core and Edge libraries:

### Swift

```swift
// AppDelegate.swift
import AEPCore
import AEPEdge
import AEPEdgeIdentity
```

### Objective-C

```objectivec
// AppDelegate.h
@import AEPCore;
@import AEPEdge;
@import AEPEdgeIdentity;
```