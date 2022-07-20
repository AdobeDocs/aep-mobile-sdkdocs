#### Objective-C

**Syntax**

```text
 + (void) trackState: (nullable NSString*) state data: (nullable NSDictionary*) data;
```

**Example**

```text
 [ACPCore trackState:@"state name" data:@{@"key":@"value"}];
```

#### Swift

**Syntax**

```text
+ (void) trackState: (nullable NSString*) state data: (nullable NSDictionary*) data;
```

**Example**

```swift
ACPCore.trackState("state name", data: ["key": "value"])
```