#### Swift

The log messages from the Adobe Experience SDK are printed to the Apple System Log facility and use a common format that contains the tag `AEP SDK`. For example, if logging an error message using `Log.error(label:_ message:_)`, the printed output looks like `[AEP SDK ERROR <label>]: message`.

**Syntax**

```swift
public static func trace(label: String, _ message: String) {
public static func debug(label: String, _ message: String)
public static func warning(label: String, _ message: String) {
public static func error(label: String, _ message: String) {
```
**Example**

```swift
Log.trace(label: "testLabel", "Test message")
Log.debug(label: "testLabel", "Test message")
Log.warning(label: "testLabel", "Test message")
Log.error(label: "testLabel", "Test message")
```

#### Objective-C

The log messages from the Adobe Experience SDK are printed to the Apple System Log facility and use a common format that contains the tag `AEP SDK`. For example, if logging an error message using `[AEPLog errorWithLabel: _ message:_]`, the printed output looks like `[AEP SDK ERROR <label>]: message`.

**Syntax**

```swift
@objc(traceWithLabel:message:)
public static func trace(label: String, _ message: String) 

@objc(debugWithLabel:message:)
public static func debug(label: String, _ message: String) 

@objc(warningWithLabel:message:)
public static func warning(label: String, _ message: String) 

@objc(errorWithLabel:message:)
public static func error(label: String, _ message: String) 
```

**Example**

```objectivec
[AEPLog traceWithLabel:@"testLabel" message:@"testMessage"];
[AEPLog debugWithLabel:@"testLabel" message:@"testMessage"];
[AEPLog warningWithLabel:@"testLabel" message:@"testMessage"];
[AEPLog errorWithLabel:@"testLabel" message:@"testMessage"];
```