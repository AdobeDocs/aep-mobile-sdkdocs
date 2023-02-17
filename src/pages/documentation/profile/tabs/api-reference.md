<Variant platform="android" api="extension-version" repeat="8"/>

#### Java

**Syntax**

```java
@NonNull public static String extensionVersion()
```

**Example**

```java
String extensionVersion = UserProfile.extensionVersion();
```

#### Kotlin

**Example**

```java
val extensionVersion = UserProfile.extensionVersion();
```

<Variant platform="ios" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

```swift
let extensionVersion = UserProfile.extensionVersion
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
NSString *extensionVersion = [AEPMobileUserProfile extensionVersion];
```

<Variant platform="android" api="get-user-attributes" repeat="13"/>

#### Java

**Syntax**

```java
public static void getUserAttributes(@NonNull final List<String> keys, @NonNull final AdobeCallback<Map<String, Object>> callback)
```

- _callback_ is invoked after the customer attributes are available.

**Example**

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

#### Kotlin

**Example**

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

<Variant platform="ios" api="get-user-attributes" repeat="13"/>

#### Swift

**Syntax**

```swift
static func getUserAttributes(attributeNames: [String], completion: @escaping ([String: Any]?, AEPError) -> Void)
```

- _completion_ is the callback `function` which will be called with user attributes.

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

<Variant platform="android" api="register-extension" repeat="5"/>

#### Java

**Syntax**

```java
@Deprecated
public static void registerExtension()
```

**Example**

```java
import com.adobe.marketing.mobile.UserProfile

...

UserProfile.registerExtension();
```

<Variant platform="ios" api="register-extension" repeat="11"/>

On iOS, the registration occurs by passing UserProfile extension to the [MobileCore.registerExtensions API](../mobile-core/api-reference.md#registerextension-s).

#### Swift

**Syntax**

```swift
static func registerExtensions(_ extensions: [NSObject.Type],
                               _ completion: (() -> Void)? = nil)
```

**Example**

```swift
import AEPUserProfile

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

  MobileCore.registerExtensions([UserProfile.self])
  // Override point for customization after application launch.
  return true;
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) registerExtensions: (NSArray<Class*>* _Nonnull) extensions
                 completion: (void (^ _Nullable)(void)) completion;
```

**Example**

```objectivec
@import AEPUserProfile;

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

  [AEPMobileCore registerExtensions:@[AEPMobileUserProfile.class] completion:nil];
  // Override point for customization after application launch.
  return YES;
}
```

<Variant platform="android" api="remove-user-attribute" repeat="6"/>

#### Java

**Syntax**

```java
@Deprecated
public static void removeUserAttribute(@NonNull final String attributeName)
```

**Example**

A retail application wants to remove the `itemsAddedToCart` user data after the product is purchased.

```java
UserProfile.removeUserAttribute("itemsAddedToCart");
```

<Variant platform="android" api="remove-user-attributes" repeat="10"/>

#### Java

**Syntax**

```java
public static void removeUserAttributes(@NonNull final List<String> attributeNames)
```

**Example**

You want to remove `username`, `usertype` user data when session timeout occurs.

```java
UserProfile.removeUserAttributes(Arrays.asList("username", "usertype"));
```

#### Kotlin

**Example**

You want to remove `username`, `usertype` user data when session timeout occurs.

```java
UserProfile.removeUserAttributes(listOf("username", "usertype"))
```

<Variant platform="ios" api="remove-user-attributes" repeat="11"/>

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

<Variant platform="android" api="update-user-attribute" repeat="6"/>

#### Java

**Syntax**

```java
@Deprecated
public static void updateUserAttribute(@NonNull final String attributeName, @Nullable final Object attributeValue)
```

**Example**

You want to update `username` of a user obtained in the log in page:

```java
UserProfile.updateUserAttribute("username", "Will Smith");
```

<Variant platform="android" api="update-user-attributes" repeat="6"/>

#### Java

**Syntax**

```java
public static void updateUserAttributes(@NonNull final Map<String, Object> attributeMap)
```

**Example**

You want to update `username`, `usertype` of a user obtained in the log in page:

```java
HashMap<String, Object> profileMap = new HashMap<>();
profileMap.put("username","Will Smith");
profileMap.put("usertype","Actor");
UserProfile.updateUserAttributes(profileMap);
```

#### Kotlin

**Example**

You want to update `username`, `usertype` of a user obtained in the log in page:

```java
val profileMap = mapOf(
        "username" to "Will Smith",
        "usertype" to "Actor"
    )
UserProfile.updateUserAttributes(profileMap)
```

<Variant platform="ios" api="update-user-attributes" repeat="11"/>

#### Swift

**Syntax**

```swift
public static func updateUserAttributes(attributeDict: [String: Any])
```

**Example**

You want to update `username, usertype` of a user obtained in the log in page:

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
