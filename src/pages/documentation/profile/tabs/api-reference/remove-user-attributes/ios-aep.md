#### Swift

**Syntax**

```swift
public static void removeUserAttributes(List<String> attributeNames)
```

**Example**

You want to remove `username`, `usertype` user data when session timeout occurs.

```swift
UserProfile.removeUserAttributes(Arrays.asList("username", "usertype"));
```

#### Objective-C

**Syntax**

```objectivec
+ (void) removeUserAttributesWithAttributeNames:(NSArray<NSString *> * _Nonnull)
```

**Example**

```objectivec
[AEPMobileUserProfile removeUserAttributesWithAttributeNames:@[@"username", @"usertype"]]
```