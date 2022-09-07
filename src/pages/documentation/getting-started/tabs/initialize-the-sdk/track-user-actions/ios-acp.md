#### Objective-C

**Syntax**

```objectivec
+ (void) trackAction: (nullable NSString*) action data: (nullable NSDictionary*) data;
```

**Example**

```objectivec
 [ACPCore trackAction:@"action name" data:@{@"key":@"value"}];
```

#### Swift

**Syntax**

```objectivec
+ (void) trackAction: (nullable NSString*) action data: (nullable NSDictionary*) data;
```

**Example**

```swift
ACPCore.trackAction("action name", data: ["key": "value"])
```