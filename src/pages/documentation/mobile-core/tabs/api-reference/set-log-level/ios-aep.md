#### Swift

**Syntax**

```swift
 public static func setLogLevel(_ level: LogLevel)
```

**Example**

```swift
import AEPCore
import AEPServices

  MobileCore.setLogLevel(.trace)
```

#### Objective-C

**Syntax**

```swift
 @objc(setLogLevel:)
 public static func setLogLevel(_ level: LogLevel)
```

**Example**

```objectivec
@import AEPCore;
@import AEPServices;

 [AEPMobileCore setLogLevel: AEPLogLevelTrace];
```