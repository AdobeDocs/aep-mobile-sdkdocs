---
title: Profile API reference
description: An API reference for the Profile mobile extension.
keywords:
- API reference
- Profile
---

# API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Profile extension.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
@NonNull public static String extensionVersion()
```

### Example

```java
String extensionVersion = UserProfile.extensionVersion();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
val extensionVersion = UserProfile.extensionVersion();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static var extensionVersion: String
```

### Example

```swift
let extensionVersion = UserProfile.extensionVersion
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (nonnull NSString*) extensionVersion;
```

### Example

```objectivec
NSString *extensionVersion = [AEPMobileUserProfile extensionVersion];
```

\<!--- React Native

<Tabs query="platform=react-native&api=extension-version"/> ---\>

## getUserAttributes

The `getUserAttributes()` API gets the user profile attributes with the given keys.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

### Syntax

```java
public static void getUserAttributes(@NonNull final List<String> keys, @NonNull final AdobeCallback<Map<String, Object>> callback)
```

* _callback_ is invoked after the customer attributes are available.

### Example

A retail application wants to get the `itemsAddedToCart` user data when processing checkout.

When `AdobeCallbackWithError` is provided, if the operation times out (5s) or an unexpected error occurs, the `fail` method is called with the appropriate `AdobeError`.

```java
UserProfile.getUserAttributes(Arrays.asList("itemsAddedToCart"), new AdobeCallbackWithError<Map<String, Object>>() {
    @Override
    public void fail(AdobeError adobeError) {
         // your customized code
    }
    @Override
    public void call(Map<String, Object> stringObjectMap) {
        // your customized code
    }
});
```

### Android Kotlin

### Example

A retail application wants to get the `itemsAddedToCart` user data when processing checkout.

When `AdobeCallbackWithError` is provided, if the operation times out (5s) or an unexpected error occurs, the `fail` method is called with the appropriate `AdobeError`.

```java
UserProfile.getUserAttributes(listOf("itemsAddedToCart")) {
    object : AdobeCallbackWithError<Map<String, Any?>> {
        override fun fail(adobeError: AdobeError) {
            // your customized code
        }

        override fun call(value: Map<String, Any?>) {
            // your customized code
        }
    }
}
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

### Syntax

```swift
static func getUserAttributes(attributeNames: [String], completion: @escaping ([String: Any]?, AEPError) -> Void)
```

* _completion_ is the callback `function` which will be called with user attributes.

### Example

A retail application wants to get the `itemsAddedToCart` user data when processing checkout.

When the callback is provided, if the operation times out (5s) or an unexpected error occurs, the `completion` method is called with the appropriate `AEPError`.

```swift
UserProfile.getUserAttributes(attributeNames: ["itemsAddedToCart"]) { attributes, error in
// your customized code
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (void)getUserAttributesWithAttributeNames:(NSArray<NSString *> * _Nonnull) comletion:^(NSDictionary<NSString *,id> * _Nullable, enum AEPError)
```

### Example

```objectivec
NSArray *attributes = @[@"itemsAddedToCart"];
[AEPMobileUserProfile getUserAttributesWithAttributeNames:attributes completion:^(NSDictionary<NSString *,id> * _Nullable, enum AEPError) {
        // your customized code
}];
```

## registerExtension

<InlineAlert variant="warning" slots="header, text1"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../mobile-core/api-reference.md#registerextensions) API instead.

Registers the Profile extension with the Mobile Core extension.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
@Deprecated
public static void registerExtension()
```

### Example

```java
import com.adobe.marketing.mobile.UserProfile

...

UserProfile.registerExtension();
```

## removeUserAttribute

<InlineAlert variant="warning" slots="header, text1"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`removeUserAttributes`](#removeuserattributes) API instead.

Deprecated as of 2.0.0. Please use the [removeUserAttributes](#removeuserattributes) API instead.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

### Syntax

```java
@Deprecated
public static void removeUserAttribute(@NonNull final String attributeName)
```

### Example

A retail application wants to remove the `itemsAddedToCart` user data after the product is purchased.

```java
UserProfile.removeUserAttribute("itemsAddedToCart");
```

## removeUserAttributes

Removes the user profile attributes for the given keys.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

### Syntax

```java
public static void removeUserAttributes(@NonNull final List<String> attributeNames)
```

### Example

You want to remove `username`, `usertype` user data when session timeout occurs.

```java
UserProfile.removeUserAttributes(Arrays.asList("username", "usertype"));
```

### Android Kotlin

### Example

You want to remove `username`, `usertype` user data when session timeout occurs.

```java
UserProfile.removeUserAttributes(listOf("username", "usertype"))
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

### Syntax

```swift
public static void removeUserAttributes(List<String> attributeNames)
```

### Example

You want to remove `username`, `usertype` user data when session timeout occurs.

```swift
UserProfile.removeUserAttributes(Arrays.asList("username", "usertype"));
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (void) removeUserAttributesWithAttributeNames:(NSArray<NSString *> * _Nonnull)
```

### Example

```objectivec
[AEPMobileUserProfile removeUserAttributesWithAttributeNames:@[@"username", @"usertype"]]
```

## updateUserAttribute

<InlineAlert variant="warning" slots="header, text1"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`updateUserAttributes`](#updateuserattributes) API instead.

Sets the user profile attributes key and value and allows you to create or update a user profile attribute.

Remember the following information:

* If the attribute does not exist, it will be created.
* If the attribute exists, the value will be updated.
* A null attribute value removes the attribute.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

### Syntax

```java
@Deprecated
public static void updateUserAttribute(@NonNull final String attributeName, @Nullable final Object attributeValue)
```

### Example

You want to update `username` of a user obtained in the log in page:

```java
UserProfile.updateUserAttribute("username", "Will Smith");
```

## updateUserAttributes

Sets the user profile attributes key and value.

Allows you to create/update a batch of user profile attributes:

* String, Integer, Boolean, Double, Array, Map are valid type of user profile attributes.
* Custom objects cannot be saved as a `UserProfile` attribute.
* If the attribute does not exist, it is created.
* If the attribute already exists, the value is updated.
* A null attribute value will remove the attribute.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

### Syntax

```java
public static void updateUserAttributes(@NonNull final Map<String, Object> attributeMap)
```

### Example

You want to update `username`, `usertype` of a user obtained in the log in page:

```java
HashMap<String, Object> profileMap = new HashMap<>();
profileMap.put("username","Will Smith");
profileMap.put("usertype","Actor");
UserProfile.updateUserAttributes(profileMap);
```

### Android Kotlin

### Example

You want to update `username`, `usertype` of a user obtained in the log in page:

```java
val profileMap = mapOf(
        "username" to "Will Smith",
        "usertype" to "Actor"
    )
UserProfile.updateUserAttributes(profileMap)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

### Syntax

```swift
public static func updateUserAttributes(attributeDict: [String: Any])
```

### Example

You want to update `username, usertype` of a user obtained in the log in page:

```swift
var profileMap = [AnyHashable: Any]()
profileMap["username"] = "will_smith"
profileMap["usertype"] = "Actor"
UserProfile.updateUserAttributes(attributeDict: profileMap)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (void)updateUserAttributesWithAttributeDict:(NSDictionary<NSString *,id> * _Nonnull)
```

### Example

```objectivec
NSMutableDictionary *profileMap = [NSMutableDictionary dictionary];
[profileMap setObject:@"username" forKey:@"will_smith"];
[profileMap setObject:@"usertype" forKey:@"Actor"];
[AEPMobileUserProfile updateUserAttributesWithAttributeDict:profileMap];
```

