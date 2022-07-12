1. Add the Mobile Core and Profile extensions to your project using Cocoapods. Add following pods in your `Podfile`:

```pod
use_frameworks!
target 'YourTargetApp' do
    pod 'ACPCore'
    pod 'ACPUserProfile'
end
```

2. Import the UserProfile library.   

#### Objective-C

```objectivec
   #import "ACPCore.h"
   #import "ACPUserProfile.h"
```

#### Swift

```swift
   import ACPCore
   import ACPUserProfile
```

