### Swift

**Syntax**

```swift
static func getUserAttributes(attributeNames: [String], completion: @escaping ([String: Any]?, AEPError) -> Void)
```
* _completion_ is the callback `function` which will be called with user attributes.

**Example**

A retail application wants to get the `itemsAddedToCart` user data when processing checkout.

When the callback is provided, if the operation times out (5s) or an unexpected error occurs, the `completion` method is called with the appropriate `AEPError`.

```swift
UserProfile.getUserAttributes(attributeNames: ["itemsAddedToCart"]) { attributes, error in
// your customized code
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void)getUserAttributesWithAttributeNames:(NSArray<NSString *> * _Nonnull) comletion:^(NSDictionary<NSString *,id> * _Nullable, enum AEPError)
```

**Example**

```objectivec
NSArray *attributes = @[@"itemsAddedToCart"];
[AEPMobileUserProfile getUserAttributesWithAttributeNames:attributes completion:^(NSDictionary<NSString *,id> * _Nullable, enum AEPError) {
        // your customized code
}];
```
