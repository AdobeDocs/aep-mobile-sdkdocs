<InlineAlert variant="info" slots="text"/>

The logLevel getter has been deprecated. To get the log level in the Swift AEP 3.x SDKs, please use `Log.logFilter` instead.

#### Swift

**Syntax**

```swift
public static var logFilter: LogLevel
```

This variable is part of the `Log` class within `AEPServices`.

**Example**

```swift
var logLevel = Log.logFilter
```

#### Objective-C

**Syntax**

```objectivec
@objc public static var logFilter: LogLevel
```

**Example**

```objectivec
AEPLogLevel logLevel = [AEPLog logFilter];
```