#### Swift

Use the MobileCore API to register the Edge extension.

**Syntax**

```swift
// MobileCore
public static func registerExtensions(_ extensions: [Extension.Type], _ completion: (() -> Void)? = nil)
```

**Example**

```swift
import AEPEdge

...
MobileCore.registerExtensions([Edge.self, ...], {
  // processing after registration
})
```

#### Objective-C

Use the AEPMobileCore API to register the Edge extension.

**Syntax**

```objectivec
+ (void) registerExtensions: (NSArray<Class*>* _Nonnull) extensions 
                  completion: (void (^ _Nullable)(void)) completion;
```

**Example**

```objectivec
@import AEPEdge;

[AEPMobileCore registerExtensions:@[AEPMobileEdge.class] completion:nil];...

```