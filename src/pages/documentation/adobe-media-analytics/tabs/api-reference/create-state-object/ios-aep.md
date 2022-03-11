Returns a map that contains information about the player state.

#### Swift

**Syntax**

```swift
static func createStateObjectWith(stateName: String) -> [String: Any]
```

**Example**

```swift
let fullScreenState = Media.createStateObjectWith(stateName: "fullscreen")
```

#### Objective-C

**Example**

```objc
NSDictionary* fullScreenState = [AEPMobileMedia createStateObjectWith:AEPMediaPlayerState.FULLSCREEN]
```