#### Swift

**Syntax**

```swift
static func configureWith(filePath: String)
```

**Example**

```swift
let filePath = Bundle.main.path(forResource: "ExampleJSONFile", ofType: "json")
if let filePath = filePath {
    MobileCore.configureWith(filePath: filePath)
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) configureWithFilePath: (NSString* __nullable) filepath;
```

**Example**

```objectivec
NSString *filePath = [[NSBundle mainBundle] pathForResource:@"ExampleJSONFile" ofType:@"json"];
[AEPMobileCore configureWithFilePath: filePath];
```