#### Objective-C

**Syntax**

```objectivec
+ (void) updateUserAttributes: (nonnull NSDictionary*) attributeMap
```

**Example**

```objectivec
NSMutableDictionary *profileMap = [NSMutableDictionary dictionary];
[profileMap setObject:@"username" forKey:@"will_smith"];
[profileMap setObject:@"usertype" forKey:@"Actor"];
[ACPUserProfile updateUserAttributes:profileMap];
```

#### Swift

**Syntax**

```swift
static func updateUserAttributes(_ attributeMap: [AnyHashble: Any])
```
**Example**

You want to update `username, usertype` of a user obtained in the log in page :

```swift
var profileMap = [AnyHashable: Any]()
profileMap["username"] = "will_smith"
profileMap["usertype"] = "Actor"
ACPUserProfile.updateUserAttributes(profileMap)
```