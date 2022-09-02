#### Objective-C

**Syntax**

```objectivec
+ (void) removeUserAttribute: (nonnull NSString*) key
```

**Example**

```objectivec
[ACPUserProfile removeUserAttribute:@"itemsAddedToCart"];
```

#### Swift

**Syntax**

```swift
static func removeUserAttribute(_ attributeName: String)
```
**Example**

A retail application wants to remove the `itemsAddedToCart` user data after the product is purchased.

```swift
ACPUserProfile.removeUserAttribute("itemsAddedToCart");
```