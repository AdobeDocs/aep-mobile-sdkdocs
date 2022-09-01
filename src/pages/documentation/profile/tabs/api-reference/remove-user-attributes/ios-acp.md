#### Objective-C

**Syntax**

```objectivec
+ (void) removeUserAttributes: (nonnull NSArray <NSString*>*) attributeNames
```

**Example**

```objectivec
[ACPUserProfile removeUserAttributes:@[@"username", @"usertype"]]
```

#### Swift

**Syntax**

```swift
static func removeUserAttributes(_ attributeNames: [String]?)
```
**Example**

You want to remove `username`, `usertype` user data when session timeout occurs.

```swift
ACPUserProfile.removeUserAttributes(["username","usertype"]);
```