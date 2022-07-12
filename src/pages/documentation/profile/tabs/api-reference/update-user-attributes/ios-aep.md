#### Swift

**Syntax**

```swift
public static func updateUserAttributes(attributeDict: [String: Any])
```
**Example**

You want to update `username, usertype` of a user obtained in the log in page :

```swift
var profileMap = [AnyHashable: Any]()
profileMap["username"] = "will_smith"
profileMap["usertype"] = "Actor"
UserProfile.updateUserAttributes(attributeDict: profileMap)
```

#### Objective-C

**Syntax**

```objectivec
+ (void)updateUserAttributesWithAttributeDict:(NSDictionary<NSString *,id> * _Nonnull)
```

**Example**

```objectivec
NSMutableDictionary *profileMap = [NSMutableDictionary dictionary];
[profileMap setObject:@"username" forKey:@"will_smith"];
[profileMap setObject:@"usertype" forKey:@"Actor"];
[AEPMobileUserProfile updateUserAttributesWithAttributeDict:profileMap];
```