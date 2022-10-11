<Variant platform="android" api="extension-version" repeat="5"/>

#### Java

**Syntax**

```java
public static String extensionVersion()
```

**Example**

```java
String extensionVersion = UserProfile.extensionVersion();
```

<Variant platform="ios-aep" api="extension-version" repeat="10"/>

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

<Variant platform="ios-acp" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

```swift
let extensionVersion  = ACPUserProfile.extensionVersion()
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
NSString *extensionVersion = [ACPUserProfile extensionVersion];
```

<Variant platform="react-native" api="extension-version" repeat="2"/>

#### JavaScript

```jsx
ACPUserProfile.extensionVersion().then(extensionVersion => console.log("AdobeExperienceSDK: ACPUserProfile version: " + extensionVersion));
```

<Variant platform="flutter" api="extension-version" repeat="2"/>

#### Dart

```dart
String extensionVersion = await FlutterACPUserProfile.extensionVersion;
```

<Variant platform="cordova" api="extension-version" repeat="2"/>

#### Cordova

```jsx
ACPUserProfile.extensionVersion(function(version) {  
   console.log("ACPUserProfile version: " + version);
}, function(error) {  
   console.log(error);  
});
```

<Variant platform="unity" api="extension-version" repeat="2"/>

#### C#

```csharp
string extensionVersion = ACPUserProfile.ExtensionVersion();
```

<Variant platform="xamarin" api="extension-version" repeat="2"/>

#### C#

```csharp
string extensionVersion = ACPUserProfile.ExtensionVersion();
```

<Variant platform="android" api="get-user-attributes" repeat="8"/>

#### Java

**Syntax**

```java
public static void getUserAttributes(List<String> keys, AdobeCallback<Map<String, Object>> callback)
```

* _callback_ is invoked after the customer attributes are available.

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

<Variant platform="ios-aep" api="get-user-attributes" repeat="13"/>

#### Swift

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


<Variant platform="ios-acp" api="get-user-attributes" repeat="12"/>

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

<Variant platform="flutter" api="get-user-attributes" repeat="7"/>

#### Dart

**Syntax**

```dart
static Future<String> getUserAttributes(List<String> attributeKeys) async
```

* _attributeKeys_ is an array of strings containing the names of user profile attributes to retrieve.

**Example**

A retail application wants to get the `itemsAddedToCart` user data when processing checkout.

```dart
try {
  result = await FlutterACPUserProfile.getUserAttributes(["itemsAddedToCart"]);
} on PlatformException {
  log("Failed to get the user attributes");
}
```

<Variant platform="cordova" api="get-user-attributes" repeat="7"/>

#### Cordova

**Syntax**

```javascript
ACPUserProfile.getUserAttributes = function(attributeNames, success, fail);
```

* _attributeNames_ is an array of strings containing the names of user profile attributes to retrieve.
* _success_ is a callback containing the retrieved user profile attributes.
* _fail_ is a callback containing error information if the getUserAttributes API was executed with errors.

**Example**

A retail application wants to get the `itemsAddedToCart` user data when processing checkout.

```javascript
var attributeNames = new Array();
attributeNames.push("itemsAddedToCart");
ACPUserProfile.getUserAttributes(attributeNames, handleCallback, handleError);
```

<Variant platform="xamarin" api="get-user-attributes" repeat="13"/>

**Syntax**

**Android**

```csharp
public unsafe static void GetUserAttributes (IList<string> keys, IAdobeCallback callback);
```

* _keys_ is an IList containing the names of user profile attributes to retrieve.

**iOS**

```csharp
public unsafe static void GetUserAttributes (string[] attributNames, [BlockProxy (typeof(ObjCRuntime.Trampolines.NIDActionArity2V0))] Action<NSDictionary, NSError> completionHandler);
```

* _attributNames_ is an array of strings containing the names of user profile attributes to remove.

**Example**

A retail application wants to get the `itemsAddedToCart` user data when processing checkout.

**Android**

```csharp
var keysToRetrieve = new List<string>();
keysToRetrieve.Add("itemsAddedToCart");
ACPUserProfile.GetUserAttributes(keysToRetrieve, new AdobeCallback());

class AdobeCallback : Java.Lang.Object, IAdobeCallbackWithError
{
  public void Fail(AdobeError error)
  {
    Console.WriteLine("GetUserAttributes error: " + error.ToString());
  }

  public void Call(Java.Lang.Object retrievedAttributes)
  {
    if (retrievedAttributes != null)
    {
      var attributesDictionary = new Android.Runtime.JavaDictionary<string, object>(retrievedAttributes.Handle, Android.Runtime.JniHandleOwnership.DoNotRegister);
      foreach (KeyValuePair<string, object> pair in attributesDictionary)
      {
        Console.WriteLine("[ " + pair.Key + " : " + pair.Value + " ]");
      }
    }
    else
    {
      Console.WriteLine("GetUserAttributes callback is null.");
    }
  }
}
```

**iOS**

```csharp
var callback = new Action<NSDictionary, NSError>(handleCallback);
var keysToRetrieve = new string[] { "itemsAddedToCart" };
ACPUserProfile.GetUserAttributes(keysToRetrieve, callback);

private void handleCallback(NSDictionary content, NSError error)
{
  if (error != null)
  {
    Console.WriteLine("GetUserAttributes error: " + error.DebugDescription);
  }
  else if (content == null)
  {
    Console.WriteLine("GetUserAttributes callback is null.");
  }
  else
  {
    var attributesDictionary = (NSDictionary)content;
    foreach (KeyValuePair<NSObject, NSObject> pair in attributesDictionary)
    {
      Console.WriteLine("[ " + pair.Key + " : " + pair.Value + " ]");
    }
  }
}
```

<Variant platform="android" api="register-extension" repeat="5"/>

#### Java

**Syntax**

```java
public static void registerExtension()
```

**Example**

```java
import com.adobe.marketing.mobile.UserProfile

...

UserProfile.registerExtension();
```

<Variant platform="ios-aep" api="register-extension" repeat="11"/>

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

<Variant platform="ios-acp" api="register-extension" repeat="11"/>

Register the Identity extension in your app's `didFinishLaunchingWithOptions` function:

#### Swift

**Syntax**

```swift
static func registerExtensions()
```

**Example**

```swift

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  ACPUserProfile.registerExtension()
  // Override point for customization after application launch.
  return true;
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) registerExtension;
```

**Example**

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [ACPUserProfile registerExtension];
  // Override point for customization after application launch.
  return YES;
}
```

<Variant platform="android" api="remove-user-attribute" repeat="6"/>

#### Java

**Syntax**

```java
public static void removeUserAttribute(String attributeName)
```

**Example**

A retail application wants to remove the `itemsAddedToCart` user data after the product is purchased.

```java
UserProfile.removeUserAttribute("itemsAddedToCart");
```

<Variant platform="ios-acp" api="remove-user-attribute" repeat="11"/>

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

#### Objective-C

**Syntax**

```objectivec
+ (void) removeUserAttribute: (nonnull NSString*) key
```

**Example**

```objectivec
[ACPUserProfile removeUserAttribute:@"itemsAddedToCart"];
```

<Variant platform="flutter" api="remove-user-attribute" repeat="7"/>

#### Dart

**Syntax**

```dart
static Future<void> removeUserAttribute(String attributeName) async
```

* _attributeName_ is a string containing the name of the user profile attribute to remove.

**Example**

A retail application wants to remove the `itemsAddedToCart` user data after the product is purchased.

```dart
FlutterACPUserProfile.removeUserAttribute("itemsAddedToCart");
```

<Variant platform="cordova" api="remove-user-attribute" repeat="7"/>

#### Cordova

**Syntax**

```javascript
ACPUserProfile.removeUserAttribute = function(attributeName, success, fail);
```

* _attributeName_ is a string containing the name of the user profile attribute to remove.
* _success_ is a callback containing a general success message if the removeUserAttribute API executed without any errors.
* _fail_ is a callback containing error information if the removeUserAttribute API was executed with errors.

**Example**

A retail application wants to remove the `itemsAddedToCart` user data after the product is purchased.

```javascript
ACPUserProfile.removeUserAttribute("itemsAddedToCart", handleCallback, handleError);
```

<Variant platform="xamarin" api="remove-user-attribute" repeat="11"/>

#### C#

**Syntax**

**Android**

```csharp
public unsafe static void RemoveUserAttribute (string attributeName);
```

* _attributeName_ is a string containing the name of the user profile attribute to remove.

**iOS**

```csharp
public static void RemoveUserAttribute (string attributeName);
```

* _attributeName_ is a string containing the name of the user profile attribute to remove.

**Example**

A retail application wants to remove the `itemsAddedToCart` user data after the product is purchased.

```csharp
ACPUserProfile.RemoveUserAttribute("itemsAddedToCart");
```

<Variant platform="android" api="remove-user-attributes" repeat="6"/>

#### Java

**Syntax**

```java
public static void removeUserAttributes(List<String> attributeNames)
```

**Example**

You want to remove `username`, `usertype` user data when session timeout occurs.

```java
UserProfile.removeUserAttributes(Arrays.asList("username", "usertype"));
```

<Variant platform="ios-aep" api="remove-user-attributes" repeat="11"/>

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

<Variant platform="ios-acp" api="remove-user-attributes" repeat="11"/>

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

#### Objective-C

**Syntax**

```objectivec
+ (void) removeUserAttributes: (nonnull NSArray <NSString*>*) attributeNames
```

**Example**

```objectivec
[ACPUserProfile removeUserAttributes:@[@"username", @"usertype"]]
```

<Variant platform="flutter" api="remove-user-attributes" repeat="7"/>

#### Dart

**Syntax**

```dart
static Future<void> removeUserAttributes(List<String> attributeName) async
```

* _attributeName_ is an array of strings containing the names of user profile attributes to remove.

**Example**

You want to remove `username`, `usertype` user data when session timeout occurs.

```dart
FlutterACPUserProfile.removeUserAttributes(["username", "usertype"])
```

<Variant platform="cordova" api="remove-user-attributes" repeat="7"/>

#### Cordova

**Syntax**

```javascript
ACPUserProfile.removeUserAttributes = function(attributeNames, success, fail);
```

* _attributeNames_ is an array of strings containing the names of user profile attributes to remove.
* _success_ is a callback containing a general success message if the removeUserAttributes API executed without any errors.
* _fail_ is a callback containing error information if the removeUserAttributes API was executed with errors.

**Example**

You want to remove `username`, `usertype` user data when session timeout occurs.

```javascript
var attributeNames = new Array();
attributeNames.push("username");
attributeNames.push("usertype");
ACPUserProfile.removeUserAttributes(attributeNames, handleCallback, handleError);
```

<Variant platform="xamarin" api="remove-user-attributes" repeat="14"/>

#### C#

**Syntax**

**Android**

```csharp
public unsafe static void RemoveUserAttributes (IList<string> attributeNames);
```

* _attributeNames_ is an IList containing the names of user profile attributes to remove.

**iOS**

```csharp
public static void RemoveUserAttributes (string[] attributeNames);
```

* _attributeNames_ is an array of strings containing the names of user profile attributes to remove.

**Example**

You want to remove `username`, `usertype` user data when session timeout occurs.

**Android**

```csharp
var attributes = new List<string>();
attributes.Add("username");
attributes.Add("usertype");
ACPUserProfile.RemoveUserAttributes(attributes);
```

**iOS**

```csharp
string[] attributes = new string[] { "username", "usertype" };
ACPUserProfile.RemoveUserAttributes(attributes);
```

<Variant platform="android" api="update-user-attribute" repeat="6"/>

#### Java

**Syntax**

```java
public static void updateUserAttribute(String attributeName, 
                                       Object attributeValue)
```

**Example**

You want to update `username` of a user obtained in the log in page:

```java
UserProfile.updateUserAttribute("username", "Will Smith");
```

<Variant platform="ios-acp" api="update-user-attribute" repeat="11"/>

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

#### Objective-C

**Syntax**

```objectivec
+ (void) updateUserAttribute: (nonnull NSString*) attributeName withValue: (nullable NSString*) attributeValue;
```

**Example**

```objectivec
[ACPUserProfile updateUserAttribute:@"username" withValue:@"Will Smith"];
```

<Variant platform="flutter" api="update-user-attribute" repeat="7"/>

#### Dart

**Syntax**

```dart
static Future<void> updateUserAttribute(String attributeName, String attributeValue) async
```

* _attributeName_ is a string containing the name of the user profile attribute to create or update.
* _attributeValue_ must be a string, number, or array containing the user profile attribute value.

**Example**

You want to update `username` of a user obtained in the log in page :

```dart
FlutterACPUserProfile.updateUserAttribute("username", "Will Smith");
```

<Variant platform="cordova" api="update-user-attribute" repeat="7"/>

#### Cordova

**Syntax**

```javascript
ACPUserProfile.updateUserAttribute = function(attributeName, attributeValue, success, fail);
```

* _attributeName_ is a string containing the name of the user profile attribute to create or update.
* _attributeValue_ must be a string, number, or array containing the user profile attribute value.
* _success_ is a callback containing a general success message if the updateUserAttribute API executed without any errors.
* _fail_ is a callback containing error information if the updateUserAttribute API was executed with errors.

**Example**

You want to update `username` of a user obtained in the log in page:

```javascript
ACPUserProfile.updateUserAttribute("username", "Will Smith", handleCallback, handleError);
```

<Variant platform="xamarin" api="update-user-attribute" repeat="11"/>

#### C#

**Syntax**

**Android**

```csharp
public unsafe static void UpdateUserAttribute (string attributeName, Java.Lang.Object attributeValue);
```

* _attributeName_ is a string containing the name of the user profile attribute to create or update.
* _attributeValue_ must be a String, Integer, Boolean, Double, Array, or Map containing the user profile attribute value. Custom objects cannot be saved as a `UserProfile` attribute.

**iOS**

```csharp
public static void UpdateUserAttribute (string attributeName, string attributeValue);
```

* _attributeName_ is a string containing the name of the user profile attribute to create or update.
* _attributeValue_ is a string containing the user profile attribute value.

**Example**

You want to update `username` of a user obtained in the log in page:

```csharp
ACPUserProfile.updateUserAttribute("username", "Will Smith");
```

<Variant platform="android" api="update-user-attributes" repeat="6"/>

#### Java

**Syntax**

```java
public static void updateUserAttributes(Map<String, Object> attributeMap)
```

**Example**

You want to update `username, usertype` of a user obtained in the log in page:

```java
HashMap<String, Object> profileMap = new HashMap<>();
profileMap.put("username","Will Smith");
profileMap.put("usertype","Actor");
UserProfile.updateUserAttributes(profileMap);
```

<Variant platform="ios-aep" api="update-user-attributes" repeat="11"/>

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

<Variant platform="ios-acp" api="update-user-attributes" repeat="11"/>

#### Swift

**Syntax**

```swift
static func updateUserAttributes(_ attributeMap: [AnyHashble: Any])
```

**Example**

You want to update `username, usertype` of a user obtained in the log in page:

```swift
var profileMap = [AnyHashable: Any]()
profileMap["username"] = "will_smith"
profileMap["usertype"] = "Actor"
ACPUserProfile.updateUserAttributes(profileMap)
```

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

<Variant platform="flutter" api="update-user-attributes" repeat="7"/>

#### Dart

**Syntax**

```dart
static Future<void> updateUserAttributes(Map<String, Object> attributeMap) async
```

* _attributeMap_ is a object containing a batch of user profile attributes to create or update.

**Example**

You want to update `username, usertype` of a user obtained in the log in page:

```dart
FlutterACPUserProfile.updateUserAttributes({"username":"will_smith", "usertype":"Actor"});
```

<Variant platform="cordova" api="update-user-attributes" repeat="7"/>

#### Cordova

**Syntax**

```javascript
ACPUserProfile.updateUserAttributes = function(attributes, success, fail);
```

* _attributes_ is a object containing a batch of user profile attributes to create or update.
* _success_ is a callback containing a general success message if the updateUserAttributes API executed without any errors.
* _fail_ is a callback containing error information if the updateUserAttributes API was executed with errors.

**Example**

You want to update `username, usertype` of a user obtained in the log in page:

```javascript
var username = "will_smith";
var usertype = "Actor";
var attributes = {"username":username, "usertype":usertype};
ACPUserProfile.updateUserAttributes(attributes, handleCallback, handleError);
```

<Variant platform="xamarin" api="update-user-attributes" repeat="14"/>

#### C#

**Syntax**

**Android**

```csharp
public unsafe static void UpdateUserAttributes (IDictionary<string, Java.Lang.Object> attributeMap);
```

* _attributeMap_ is a object containing a batch of user profile attributes to create or update.

**iOS**

```csharp
public static void UpdateUserAttributes (NSDictionary attributeMap);
```

* _attributeMap_ is a object containing a batch of user profile attributes to create or update.

**Example**

You want to update `username, usertype` of a user obtained in the log in page :

**Android**

```csharp
var attributes = new Dictionary<string, Java.Lang.Object>();
attributes.Add("username", "will_smith");
attributes.Add("usertype", "Actor");
ACPUserProfile.UpdateUserAttributes(attributes);
```

**iOS**

```csharp
 var attributes = new NSMutableDictionary<NSString, NSString>
 {
   ["username"] = new NSString("will_smith"),
   ["usertype"] = new NSString("Actor")
 };
ACPUserProfile.updateUserAttributes(attributes);
```