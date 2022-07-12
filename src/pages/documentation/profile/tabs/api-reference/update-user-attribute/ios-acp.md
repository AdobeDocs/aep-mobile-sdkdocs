#### Objective-C

**Syntax**

```objectivec
+ (void) updateUserAttribute: (nonnull NSString*) attributeName withValue: (nullable NSString*) attributeValue;
```

**Example**

```objectivec
[ACPUserProfile updateUserAttribute:@"username" withValue:@"Will Smith"];
```

#### Swift

**Syntax**

```swift
static func updateUserAttribute(_ attributeName: String, withValue attributeValue: String?)
```
**Example**

You want to update `username` of a user obtained in the log in page:

```swift
ACPUserProfile.updateUserAttribute("username", withValue: "Will Smith");
```