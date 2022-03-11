1. Add the ACPCore and ACPTarget CocoaPods to your project via your `Podfile`.

   ```ruby
    pod 'ACPCore','~>2.0'
    pod 'ACPTarget','~>2.0'
   ```

2. Import the Target and Identity libraries.

  **Swift**

   ```swift
       import ACPCore
       import ACPTarget
       import ACPIdentity
   ```

   **Objective-C**

   ```objectivec
       #import "ACPCore.h"
       #import "ACPTarget.h"
       #import "ACPIdentity.h"
       #import "ACPTargetRequestObject.h"
       #import "ACPTargetPrefetchObject.h"
   ```