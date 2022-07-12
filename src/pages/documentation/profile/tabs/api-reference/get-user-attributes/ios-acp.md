#### Objective-C

**Syntax**

```objectivec
+ (void) getUserAttributes: (nullable NSArray <NSString*>*) attributNames withCompletionHandler: (nonnull void (^) (NSDictionary* __nullable userAttributes, NSError* _Nullable error)) completionHandler
```

**Example**

```objectivec
[ACPUserProfile getUserAttributes:attributes withCompletionHandler:^(NSDictionary* dict, NSError* error){
    // your customized code
    }];
```

#### Swift

**Syntax**

```swift
static func getUserAttributes(_ attributeNames: [String]?, withCompletionHandler completionHandler:([AnyHashable : Any]?, Error?) -> Void)
```
* _completionHandler_ is invoked after the customer attributes are available, or _error_ if an unexpected error occurs or the request times out. The default timeout is 5s.

**Example**

A retail application wants to get the `itemsAddedToCart` user data when processing checkout.

```swift
ACPUserProfile.getUserAttributes(["itemsAddedToCart"], withCompletionHandler: {(dict: [AnyHashable: Any]?, error: Error?) -> Void in
              // your customized code
})
```