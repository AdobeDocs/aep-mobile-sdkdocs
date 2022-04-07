# Identity API reference

## appendToURL / appendVisitorInfoForURL

This API appends Adobe visitor information to the query component of the specified URL.

If the provided URL is null or empty, it is returned as is. Otherwise, the following information is added to the query component of the specified URL and is returned in the callback function:

* The `adobe_mc` attribute is a URL encoded list that contains:
  * `MCMID` - Experience Cloud ID (ECID)
  * `MCORGID` - Experience Cloud Org ID
  * `MCAID` - Analytics Tracking ID (AID), if available from the [Analytics extension](../../adobe-analytics/api-reference.md#gettrackingidentifier)
  * `TS` - A timestamp taken when this request was made
* The optional `adobe_aa_vid` attribute is the URL-encoded Analytics Custom Visitor ID (VID), if previously set in the [Analytics extension](../../adobe-analytics/api-reference.md#setvisitoridentifier).

This API is designed to handle the following URL formats:

```text
scheme://authority/path?query=param#fragment
```

In this example, the Adobe visitor data is appended as:

```text
scheme://authority/path?query=param&TS=timestamp&MCMID=ecid&MCORGID=ecorgid@AdobeOrg#fragment
```

Similarly, URLs without a query component:

```text
scheme://authority/path#fragment
```

The Adobe visitor data is appended as:

```text
scheme://authority/path?TS=timestamp&MCMID=ecid&MCORGID=ecorgid@AdobeOrg#fragment
```

If your application uses more complicated URLs, such as Angular URLs, you should use [getUrlVariables](#geturlvariables).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<AppendToUrlAndroid/>

iOS (AEP 3.x)

<AppendToUrlIosAEP/>

iOS (ACP 2.x)

<AppendToUrlIosACP/>

React Native

<AppendToUrlReactNative/>

Flutter

<AppendToUrlFlutter/>

Cordova

<AppendToUrlCordova/>

Unity

<AppendToUrlUnity/>

Xamarin

<AppendToUrlXamarin/>

## extensionVersion

The `extensionVersion()` API returns the version of the Identity extension that is registered with the Mobile Core extension.

To get the version of the Identity extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<ExtensionVersionAndroid/>

iOS (AEP 3.x)

<ExtensionVersionIosAEP/>

iOS (ACP 2.x)

<ExtensionVersionIosACP/>

React Native

<ExtensionVersionReactNative/>

Flutter

<ExtensionVersionFlutter/>

Cordova

<ExtensionVersionCordova/>

Unity

<ExtensionVersionUnity/>

Xamarin

<ExtensionVersionXamarin/>

## getExperienceCloudId

This API retrieves the Adobe Experience Cloud ID (ECID) that was generated when the app was initially launched and is stored in the Adobe Experience Cloud Identity Service.

This ID is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<GetExperienceCloudIdAndroid/>

iOS (AEP 3.x)

<GetExperienceCloudIdIosAEP/>

iOS (ACP 2.x)

<GetExperienceCloudIdIosACP/>

React Native

<GetExperienceCloudIdReactNative/>

Flutter

<GetExperienceCloudIdFlutter/>

Cordova

<GetExperienceCloudIdCordova/>

Unity

<GetExperienceCloudIdUnity/>

Xamarin

<GetExperienceCloudIdXamarin/>

## getIdentifiers

This API returns all customer identifiers that were previously synced with the Adobe Experience Cloud Identity Service.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<GetIdentifiersAndroid/>

iOS (AEP 3.x)

<GetIdentifierIosAEP/>

iOS (ACP 2.x)

<GetIdentifierIosACP/>

React Native

<GetIdentifierReactNative/>

Flutter

<GetIdentifierFlutter/>

Cordova

<GetIdentifierCordova/>

Unity

<GetIdentifierUnity/>

Xamarin

<GetIdentifierXamarin/>

## getUrlVariables

This API gets the Adobe Experience Cloud Identity Service variables in URL query parameter form, and these variables will be consumed by the hybrid app. This method returns an appropriately formed string that contains the Experience Cloud Identity Service URL variables. There will be no leading (&) or (?) punctuation because the caller is responsible for placing the variables in their resulting URL in the correct location.

If an error occurs while retrieving the URL string, the callback handler will be called with a null value. Otherwise, the following information is added to the string that is returned in the callback:

* The `adobe_mc` attribute is an URL encoded list that contains:
  * `MCMID` - Experience Cloud ID (ECID)
  * `MCORGID` - Experience Cloud Org ID
  * `MCAID` - Analytics Tracking ID (AID), if available from the [Analytics extension](../../adobe-analytics/index.md)
  * `TS` - A timestamp taken when this request was made
* The optional `adobe_aa_vid` attribute is the URL-encoded Analytics Custom Visitor ID (VID), if previously set in the [Analytics extension](../../adobe-analytics/index.md).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<GetUrlVariablesAndroid/>

iOS (AEP 3.x)

<GetUrlVariablesIosAEP/>

iOS (ACP 2.x)

<GetUrlVariablesIosACP/>

React Native

<GetUrlVariablesReactNative/>

Flutter

<GetUrlVariablesFlutter/>

Cordova

<GetUrlVariablesCordova/>

Unity

<GetUrlVariablesUnity/>

Xamarin

<GetUrlVariablesXamarin/>

## registerExtension

The `registerExtension()` API registers the Identity extension with the Mobile Core extension. This API allows the extension to send and receive events to and from the Mobile SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<RegisterExtensionAndroid/>

iOS (AEP 3.x)

<RegisterExtensionIosAEP/>

iOS (ACP 2.x)

<RegisterExtensionIosACP/>

React Native

<RegisterExtensionReactNative/>

Flutter

<RegisterExtensionFlutter/>

Cordova

<RegisterExtensionCordova/>

Unity

<RegisterExtensionUnity/>

Xamarin

<RegisterExtensionXamarin/>

## setAdvertisingIdentifier

The advertising ID is preserved between app upgrades, is saved and restored during the standard application backup process, available via the [Signals](../signals/index.md) extension, and is removed at uninstall.

<InlineAlert variant="info" slots="text"/>

If the current SDK privacy status is `optedout`, the advertising identifier is not set or stored.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<SetAdvertisingIdentifierAndroid/>

iOS (AEP 3.x)

<SetAdvertisingIdentifierIosAEP/>

iOS (ACP 2.x)

<SetAdvertisingIdentifierIosACP/>

React Native

<SetAdvertisingIdentifierReactNative/>

Flutter

<SetAdvertisingIdentifierFlutter/>

Cordova

<SetAdvertisingIdentifierCordova/>

Unity

<SetAdvertisingIdentifierUnity/>

Xamarin

<SetAdvertisingIdentifierXamarin/>

## setPushIdentifier

This API sets the device token for push notifications in the SDK. If the current SDK privacy status is `optedout`, the push identifier is not set.

<InlineAlert variant="info" slots="text"/>

You should call `setPushIdentifier` on each application launch to ensure the most up-to-date device token is set to the SDK. If no device token is available, `null`/`nil` should be passed.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>
{% tab title="Android" %}
### Java

**Syntax**

```java
public static void setPushIdentifier(final String pushIdentifier);
```

* _pushIdentifier_  is a string that contains the device token for push notifications.

**Example**

```java
//Retrieve the token from either GCM or FCM, and pass it to the SDK
MobileCore.setPushIdentifier(token);
```
{% endtab %}

{% tab title="iOS (AEP 3.x)" %}
### Swift

**Syntax**

```swift
@objc(setPushIdentifier:)
public static func setPushIdentifier(_ deviceToken: Data?)
```

* _deviceToken_  is a string that contains the device token for push notifications.

**Example**

```swift
// Set the deviceToken that the APNs has assigned to the device
MobileCore.setPushIdentifier(deviceToken)
```

### Objective-C

**Syntax**

```objectivec
+ (void) setPushIdentifier: (NSString * _Nullable deviceToken);
```

**Example**

```objectivec
// Set the deviceToken that the APNS has assigned to the device
[AEPMobileCore setPushIdentifier:deviceToken];
```

{% endtab %}

{% tab title="iOS (ACP 2.x)" %}

### Swift

**Syntax**

```swift
static func setPushIdentifier(deviceToken: NSData?)
```

* _deviceToken_  is a string that contains the device token for push notifications.

**Example**

```swift
// Set the deviceToken that the APNs has assigned to the device
ACPCore.setPushIdentifier(deviceToken)
```

### Objective-C

**Syntax**

```objectivec
+ (void) setPushIdentifier: (nullable NSData*) deviceToken;
```

**Example**

```objectivec
// Set the deviceToken that the APNS has assigned to the device
[ACPCore setPushIdentifier:deviceToken];
```

{% endtab %}

{% tab title="React Native" %}
### JavaScript

**Syntax**

```jsx
ACPCore.setPushIdentifier(pushIdentifier);
```

* _pushIdentifier_ is a string that contains the device token for push notifications.

**Example**

```jsx
ACPCore.setPushIdentifier("pushID");
```
{% endtab %}
{% endtabs %}

## syncIdentifier

The `syncIdentifier()` and `syncIdentifiers()` APIs update the specified customer IDs with the Adobe Experience Cloud Identity Service.

These APIs synchronize the provided customer identifier type key and value with the authentication state to the Experience Cloud Identity Service. If the specified customer ID type exists in the service, this ID type is updated with the new ID and the authentication state. Otherwise, a new customer ID is added.

Starting with _ACPIdentity v2.1.3 (iOS)_ and _Identity v1.1.2 (Android)_ if the new `identifier` value is null or empty, this ID type is removed from the local storage, Identity shared state and not synced with the Experience Cloud Identity Service.

These IDs are preserved between app upgrades, are saved and restored during the standard application backup process, and are removed at uninstall.

If the current SDK privacy status is `MobilePrivacyStatus.OPT_OUT`, calling this method results in no operations being performed.

This API updates or appends the provided customer identifier type key and value with the given authentication state to the Experience Cloud Identity Service. If the specified customer ID type exists in the service, the ID is updated with the new ID and authentication state. Otherwise a new customer ID is added.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>
{% tab title="Android" %}
### Java

**Syntax**

```java
public static void syncIdentifier(final String identifierType,
                                  final String identifier,
                                  final VisitorID.AuthenticationState authenticationState);
```

* _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* _identifier (String)_ contains the `identifier value`, and this parameter should not be null or empty.
* _authenticationState (AuthenticationState)_ indicates the authentication state of the user and contains one of the [VisitorID.AuthenticationState](#public-classes) values.

**Example**

```java
Identity.syncIdentifier("idType",
                        "idValue",
                        VisitorID.AuthenticationState.AUTHENTICATED);
```
{% endtab %}

{% tab title="iOS (AEP 3.x)" %}
### Swift

**Syntax**

```swift
@objc(syncIdentifierWithType:identifier:authenticationState:)
static func syncIdentifier(identifierType: String, identifier: String, authenticationState: MobileVisitorAuthenticationState)
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifierType` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* The _authenticationState (MobileVisitorAuthenticationState)_ value indicates the authentication state for the user and contains one of the [MobileVisitorAuthenticationState](#public-classes) values.

**Example**

```swift
Identity.syncIdentifier(identifierType: "idType",
                            identifier: "idValue",
                        authentication: .unknown)
```

### Objective-C

**Syntax**

```objectivec
+ (void) syncIdentifierWithType: (NSString * _Nonnull identifierType)
										 identifier: (NSString * _Nonnull identifier)
								 authentication: (enum AEPAuthenticationState authenticationState);
```

**Example**

```objectivec
[AEPMobileIdentity syncIdentifierWithType:@"idType"
                               identifier:@"idValue"
                      authenticationState:AEPMobileVisitorAuthStateUnknown];
```
{% endtab %}

{% tab title="iOS (ACP 2.x)" %}
### Swift

**Syntax**
```swift
static func syncIdentifier(_ identifierType: String, identifier: String, authentication authenticationState: ACPMobileVisitorAuthenticationState)
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* The _authenticationState (ACPMobileVisitorAuthenticationState)_ value indicates the authentication state for the user and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```swift
ACPIdentity.syncIdentifier("idType", identifier: "idValue", authentication: ACPMobileVisitorAuthenticationState.unknown)
```

### Objective-C

**Syntax**

```objectivec
+ (void) syncIdentifier: (nonnull NSString*) identifierType             
             identifier: (nonnull NSString*) identifier
         authentication: (ADBMobileVisitorAuthenticationState) authenticationState;
```

**Example**

```objectivec
[ACPIdentity syncIdentifier:@"idType" identifier:@"idValue" authentication:ACPMobileVisitorAuthenticationStateUnknown];
```
{% endtab %}

{% tab title="React Native" %}
### JavaScript

**Syntax**

```jsx
syncIdentifier(identifierType: String, identifier: String, authenticationState: string);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* _authenticationState (ACPMobileVisitorAuthenticationState)_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```jsx
import {ACPMobileVisitorAuthenticationState} from '@adobe/react-native-acpcore';

ACPIdentity.syncIdentifier("identifierType", "identifier", ACPMobileVisitorAuthenticationState.AUTHENTICATED);
```
{% endtab %}

{% tab title="Flutter" %}
### Dart

**Syntax**

```dart
Future<void> syncIdentifier(String identifierType, String identifier, ACPMobileVisitorAuthenticationState authState);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* _authState (ACPMobileVisitorAuthenticationState_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';

FlutterACPIdentity.syncIdentifier("identifierType", "identifier", ACPMobileVisitorAuthenticationState.AUTHENTICATED);
```
{% endtab %}

{% tab title="Cordova" %}
### Cordova

**Syntax**

```jsx
ACPIdentity.syncIdentifier = function(identifierType, identifier, authState, success, fail);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* _authState (ACPMobileVisitorAuthenticationState)_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.
* _success_ is a callback containing the visitor id type, value, and authentication state if the `syncIdentifier` API executed without any errors.
* _fail_ is a callback containing error information if the `syncIdentifier` API was executed with errors.

**Example**

```jsx
ACPIdentity.syncIdentifier("id1", "value1", ACPIdentity.ACPMobileVisitorAuthenticationStateUnknown, function (handleCallback) {
  console.log("AdobeExperenceSDK: Identifier synced successfully : " + handleCallback);
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to sync identifier : " + handleError);
});
```
{% endtab %}

{% tab title="Unity" %}
### C#

**Syntax**

```csharp
public static void SyncIdentifier(string identifierType, string identifier, ACPAuthenticationState authState)
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* _authState (ACPAuthenticationState)_ value indicating authentication state for the user and contains one of the following [ACPAuthenticationState](#public-classes) values.

**Example**

```text
ACPIdentity.SyncIdentifier("idType1", "idValue1", ACPIdentity.ACPAuthenticationState.AUTHENTICATED);
```
{% endtab %}

{% tab title="Xamarin" %}
### C#

**iOS Syntax**

```csharp
public static void SyncIdentifier (string identifierType, string identifier, ACPMobileVisitorAuthenticationState authenticationState);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* _authenticationState (ACPMobileVisitorAuthenticationState_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Android Syntax**

```csharp
public unsafe static void SyncIdentifier (string identifierType, string identifier, VisitorID.AuthenticationState authenticationState);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* _authenticationState (AuthenticationState)_ value indicating authentication state for the user and contains one of the following [VisitorID.AuthenticationState](#public-classes) values.

**iOS Example**

```csharp
ACPIdentity.SyncIdentifier("idType1", "idValue1", ACPMobileVisitorAuthenticationState.Authenticated);
```

**Android Example**

```csharp
ACPIdentity.SyncIdentifier("idType1", "idValue1", VisitorID.AuthenticationState.Authenticated);
```
{% endtab %}
{% endtabs %}

## syncIdentifiers

This API is an overloaded version, which does not include the parameter for the authentication state and it assumes a default value of `VisitorID.AuthenticationState.UNKNOWN`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>
{% tab title="Android" %}
### Java

**Syntax**

```java
public static void syncIdentifiers(final Map<String, String> identifiers);
```

* _identifiers_ is a map that contains the identifiers with the Identifier type as the key, and the string identifier as the value.

  In each identifier pair, if the `identifier type` contains a null or an empty string, the identifier is ignored by the Identity extension.

**Example**

```java
Map<String, String> identifiers = new HashMap<String, String>();
identifiers.put("idType1", "idValue1");
identifiers.put("idType2", "idValue2");
identifiers.put("idType3", "idValue3");
Identity.syncIdentifiers(identifiers);
```
{% endtab %}

{% tab title="iOS (AEP 3.x)" %}
### Swift

**Syntax**

```swift
@objc(syncIdentifiers:)
static func syncIdentifiers(identifiers: [String: String]?)
```

* The _identifiers_ dictionary contains identifier type as the key and identifier as the value, both identifier type and identifier should be non empty and non nil values.

**Example**

```swift
let ids : [String: String] = ["idType1":"idValue1",
                              "idType2":"idValue2",
                              "idType3":"idValue3"];
Identity.syncIdentifiers(identifiers: ids)
```

### Objective-C

**Syntax**
```objectivec
+ (void) syncIdentifiers: (NSDictionary<NSString *, NSString *> * _Nullable identifiers);
```

**Example**

```objectivec
NSDictionary *ids = @{@"idType1":@"idValue1",
                      @"idType2":@"idValue2",
                      @"idType3":@"idValue3"};
[AEPMobileIdentity syncIdentifiers:ids];
```

{% endtab %}

{% tab title="iOS (ACP 2.x)" %}
### Swift

**Syntax**

```swift
static func syncIdentifiers(_ identifiers: [AnyHashable : Any]?)
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**Example**

```swift
let identifiers : [String: String] = ["idType1":"idValue1",
                                      "idType2":"idValue2",
                                      "idType3":"idValue3"];
ACPIdentity.syncIdentifiers(identifiers)
```

### Objective-C

**Syntax**

```objectivec
+ (void) syncIdentifiers: (nullable NSDictionary*) identifiers;
```

**Example**

```objectivec
NSDictionary *ids = @{@"idType1":@"idValue1",
                      @"idType2":@"idValue2",
                      @"idType3":@"idValue3"};
[ACPIdentity syncIdentifiers:ids];
```

{% endtab %}

{% tab title="React Native" %}
### JavaScript

**Syntax**

```jsx
syncIdentifiers(identifiers?: {string: string});
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**Example**

```jsx
ACPIdentity.syncIdentifiers({"id1": "identifier1"});
```
{% endtab %}

{% tab title="Flutter" %}
### Dart

**Syntax**

```dart
Future<void> syncIdentifiers (Map<String, String> identifiers);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**Example**

```jsx
FlutterACPIdentity.syncIdentifiers({"idType1":"idValue1",
                                    "idType2":"idValue2",
                                    "idType3":"idValue3"});
```
{% endtab %}

{% tab title="Cordova" %}
### Cordova

**Syntax**

```jsx
ACPIdentity.syncIdentifiers = function(identifiers, success, fail);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

* _success_ is a callback containing the synced identifiers if the `syncIdentifiers` API executed without any errors.
* _fail_ is a callback containing error information if the `syncIdentifiers` API was executed with errors.

**Example**

```jsx
ACPIdentity.syncIdentifiers({"idType1":"idValue1", "idType2":"idValue2", "idType3":"idValue3"}, function (handleCallback) {
  console.log("AdobeExperienceSDK: " + handleCallback)
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to sync identifiers : " + handleError)
});
```
{% endtab %}

{% tab title="Unity" %}
### C#

**Syntax**

```csharp
public static void SyncIdentifiers(Dictionary<string, string> identifiers)
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**Example**

```csharp
Dictionary<string, string> ids = new Dictionary<string, string>();
ids.Add("idsType1", "idValue1");
ids.Add("idsType2", "idValue2");
ids.Add("idsType3", "idValue3");
ACPIdentity.SyncIdentifiers(ids);
```
{% endtab %}

{% tab title="Xamarin" %}
### C#

**iOS Syntax**

```csharp
public static void SyncIdentifiers (NSDictionary identifiers);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**Android Syntax**

```csharp
public unsafe static void SyncIdentifiers (IDictionary<string, string> identifiers);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**iOS Example**

```csharp
var ids = new NSMutableDictionary<NSString, NSObject>
{
  ["idsType1"] = new NSString("idValue1"),
  ["idsType2"] = new NSString("idValue2"),
  ["idsType3"] = new NSString("idValue3")
};
ACPIdentity.SyncIdentifiers(ids);
```

**Android Example**

```csharp
var ids = new Dictionary<string, string>();
ids.Add("idsType1", "idValue1");
ids.Add("idsType2", "idValue2");
ids.Add("idsType3", "idValue3");
ACPIdentity.SyncIdentifiers(ids);
```
{% endtab %}
{% endtabs %}

## syncIdentifiers (overloaded)

The function of this API is the same as the `syncIdentifier` API. This API passes a list of identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. In each identifier pair, if the `identifier type` contains a null or an empty string, the identifier is ignored by the Identity extension.

Starting with _ACPIdentity v2.1.3 (iOS)_ and _Identity v1.1.2 (Android)_ if the new `identifier` value is null or empty, this ID type is removed from the local storage, Identity shared state and not synced with the Adobe Experience Cloud Identity Service.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>
{% tab title="Android" %}
### Java

**Syntax**

```java
public static void syncIdentifiers(final Map<String, String> identifiers, final VisitorID.AuthenticationState authState)
```

* _identifiers_ is a map that contains IDs with the identifier type as the key, and the string identifier as the value.
* _authState_ indicates the authentication state for the user, which contains one of the following [VisitorID.AuthenticationState](#public-classes) values.

**Example**

```java
Map<String, String> identifiers = new HashMap<String, String>();
identifiers.put("idType1", "idValue1");
identifiers.put("idType2", "idValue2");
identifiers.put("idType3", "idValue3");
Identity.syncIdentifiers(identifiers, VisitorID.AuthenticationState.AUTHENTICATED);
```
{% endtab %}

{% tab title="iOS (AEP 3.x)" %}
### Swift

**Syntax**

```swift
@objc(syncIdentifiers:authenticationState:)
static func syncIdentifiers(identifiers: [String: String]?, authenticationState: MobileVisitorAuthenticationState)
```

* The _identifiers_ dictionary contains identifier type as the key and identifier as the value, both identifier type and identifier should be non empty and non nil values.

* The _authenticationState (MobileVisitorAuthenticationState)_ indicates the authentication state of the user and contains one of the [MobileVisitorAuthenticationState](#public-classes) values.

**Example**

```swift
let ids : [String: String] = ["idType1":"idValue1",
                              "idType2":"idValue2",
                              "idType3":"idValue3"];
Identity.syncIdentifiers(identifiers: ids, authenticationState: .authenticated)
```

### Objective-C

**Syntax**

```objectivec
+ (void) syncIdentifiers: (NSDictionary<NSString *, NSString *> * _Nullable identifiers)
				  authentication: (enum AEPAuthenticationState authenticationState);
```

**Example**

```objectivec
NSDictionary *ids = @{@"idType1":@"idValue1",
                      @"idType2":@"idValue2",
                      @"idType3":@"idValue3"};
[AEPMobileIdentity syncIdentifiers:ids authenticationState:AEPMobileVisitorAuthStateAuthenticated];
```

{% endtab %}

{% tab title="iOS (ACP 2.x)" %}
### Swift

**Syntax**
```swift
static func syncIdentifiers(_ identifiers: [AnyHashable : Any]?, authentication authenticationState: ACPMobileVisitorAuthenticationState)
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

* The _authenticationState (ACPMobileVisitorAuthenticationState)_ indicates the authentication state of the user and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```swift
let ids : [String: String] = ["idType1":"idValue1",
                              "idType2":"idValue2",
                              "idType3":"idValue3"];
ACPIdentity.syncIdentifiers(identifiers, authentication:
ACPMobileVisitorAuthenticationState.authenticated)
```

### Objective-C

**Syntax**

```objectivec
+ (void) syncIdentifiers: (nullable NSDictionary*) identifiers authentication: (ACPMobileVisitorAuthenticationState) authenticationState;
```

**Example**

```objectivec
NSDictionary *ids = @{@"idType1":@"idValue1",
                      @"idType2":@"idValue2",
                      @"idType3":@"idValue3"};
[ACPIdentity syncIdentifiers:ids authentication:ACPMobileVisitorAuthenticationStateAuthenticated];
```

{% endtab %}

{% tab title="React Native" %}
### JavaScript

**Syntax**

```jsx
syncIdentifiersWithAuthState(identifiers?: {string: string}, authenticationState: string);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

* The _authenticationState (ACPMobileVisitorAuthenticationState)_ indicates the authentication state of the user and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```jsx
import {ACPMobileVisitorAuthenticationState} from '@adobe/react-native-acpcore';

ACPIdentity.syncIdentifiersWithAuthState({"id1": "identifier1"}, ACPMobileVisitorAuthenticationState.UNKNOWN);
```
{% endtab %}

{% tab title="Flutter" %}
### Dart

**Syntax**

```dart
Future<void> syncIdentifiersWithAuthState (Map<String, String> identifiers, ACPMobileVisitorAuthenticationState authState);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

* The _authState_ (ACPMobileVisitorAuthenticationState)\_ indicates the authentication state of the user and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';

FlutterACPIdentity.syncIdentifiersWithAuthState({"idType1":"idValue1", "idType2":"idValue2", "idType3":"idValue3"}, ACPMobileVisitorAuthenticationState.UNKNOWN);
```
{% endtab %}

{% tab title="Cordova" %}
### Cordova

**Syntax**

```jsx
ACPIdentity.syncIdentifiers = function(identifiers, authState, success, fail);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

* _authState_ value indicating authentication state for the identifiers to be synced and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.
* _success_ is a callback containing the synced identifiers if the `syncIdentifiers` API executed without any errors.
* _fail_ is a callback containing error information if the `syncIdentifiers` API was executed with errors.

**Example**

```jsx
ACPIdentity.syncIdentifiers({"idType1":"idValue1", "idType2":"idValue2", "idType3":"idValue3"}, ACPIdentity.ACPMobileVisitorAuthenticationStateAuthenticated, function (handleCallback) {
  console.log("AdobeExperienceSDK: " + handleCallback)
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to sync identifiers : " + handleError)
});
```
{% endtab %}

{% tab title="Unity" %}
### C#

**Syntax**

```csharp
public static void SyncIdentifiers(Dictionary<string, string> ids, ACPAuthenticationState authenticationState)
```

* The _ids_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

* _authenticationState_ value indicating authentication state for the identifiers to be synced and contains one of the [ACPAuthenticationState](#public-classes) values.

**Example**

```csharp
Dictionary<string, string> ids = new Dictionary<string, string>();
ids.Add("idsType1", "idValue1");
ids.Add("idsType2", "idValue2");
ids.Add("idsType3", "idValue3");
ACPIdentity.SyncIdentifiers(ids, ACPIdentity.ACPAuthenticationState.AUTHENTICATED);
ACPIdentity.SyncIdentifiers(ids, ACPIdentity.ACPAuthenticationState.LOGGED_OUT);
ACPIdentity.SyncIdentifiers(ids, ACPIdentity.ACPAuthenticationState.UNKNOWN);
```
{% endtab %}

{% tab title="Xamarin" %}
### C#

**iOS Syntax**

```csharp
public static void SyncIdentifiers (NSDictionary identifiers, ACPMobileVisitorAuthenticationState authenticationState);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

* _authenticationState_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Android Syntax**

```csharp
public unsafe static void SyncIdentifiers (IDictionary<string, string> identifiers, VisitorID.AuthenticationState authenticationState);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

* _authenticationState_ value indicating authentication state for the user and contains one of the following [VisitorID.AuthenticationState](#public-classes) values.

**iOS Example**

```csharp
var ids = new NSMutableDictionary<NSString, NSObject>
{
  ["idsType1"] = new NSString("idValue1"),
  ["idsType2"] = new NSString("idValue2"),
  ["idsType3"] = new NSString("idValue3")
};
ACPIdentity.SyncIdentifiers(ids, ACPMobileVisitorAuthenticationState.LoggedOut);
```

**Android Example**

```csharp
var ids = new Dictionary<string, string>();
ids.Add("idsType1", "idValue1");
ids.Add("idsType2", "idValue2");
ids.Add("idsType3", "idValue3");
ACPIdentity.SyncIdentifiers(ids, VisitorID.AuthenticationState.LoggedOut);
```
{% endtab %}
{% endtabs %}

## Public classes

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>
{% tab title="Android" %}
**Android**

**AuthenticationState**

This class is used to indicate the authentication state for the current `VisitorID`.

```java
public enum AuthenticationState {        
       UNKNOWN,        
       AUTHENTICATED,        
       LOGGED_OUT;
}
```

**VisitorID**

This class is an identifier to be used with the Adobe Experience Cloud Identity Service.

```java
public class VisitorID {    
     //Constructor    
     public VisitorID(String idOrigin, String idType, String id, VisitorID.AuthenticationState authenticationState);

     public VisitorID.AuthenticationState getAuthenticationState();   

     public final String getId();  

     public final String getIdOrigin();  

     public final String getIdType();

}
```
{% endtab %}

{% tab title="iOS (AEP 3.x)" %}
**iOS (AEP 3.x)**

**MobileVisitorAuthenticationState**

This is used to indicate the authentication state for the current `Identifiable`.

```swift
@objc(AEPMobileVisitorAuthState) public enum MobileVisitorAuthenticationState: Int, Codable {
    case unknown = 0
    case authenticated = 1
    case loggedOut = 2
}
```

**Identifiable**

```swift
@objc(AEPIdentifiable) public protocol Identifiable {
    /// Origin of the identifier
    var origin: String? { get }

    /// Type of the identifier
    var type: String? { get }

    /// The identifier
    var identifier: String? { get }

    /// The authentication state for the identifier
    var authenticationState: MobileVisitorAuthenticationState { get }
}
```
{% endtab %}

{% tab title="iOS (ACP 2.x)" %}
**iOS (ACP 2.x)**

**ACPMobileVisitorAuthenticationState**

This is used to indicate the authentication state for the current `VisitorID`.

```objectivec
typedef NS_ENUM(NSUInteger,
    ACPMobileVisitorAuthenticationState) {    
    ACPMobileVisitorAuthenticationStateUnknown          = 0,    
    ACPMobileVisitorAuthenticationStateAuthenticated    = 1,    
    ACPMobileVisitorAuthenticationStateLoggedOut        = 2  };
```

**ACPMobileVisitorId**

This is an identifier to be used with the Adobe Experience Cloud Identity Service and it contains the origin, the identifier type, the identifier, and the authentication state of the visitor ID.

```objectivec
@interface ACPMobileVisitorId : NSObject

@property(nonatomic, strong, nullable) NSString* idOrigin;
@property(nonatomic, strong, nullable) NSString* idType;
@property(nonatomic, strong, nullable) NSString* identifier;
@property(nonatomic, readwrite) ACPMobileVisitorAuthenticationState authenticationState;

@end
```
{% endtab %}

{% tab title="React Native" %}
### JavaScript

**ACPVisitorID**

This is an identifier to be used with the Adobe Experience Cloud Identity Service and it contains the origin, the identifier type, the identifier, and the authentication state of the visitor ID.

```jsx
import {ACPVisitorID} from '@adobe/react-native-acpcore';

var visitorId = new ACPVisitorID(idOrigin?: string, idType: string, id?: string, authenticationState?: ACPMobileVisitorAuthenticationState);
```

**ACPMobileVisitorAuthenticationState**

This is used to indicate the authentication state for the current `VisitorID`.

```jsx
import {ACPMobileVisitorAuthenticationState} from '@adobe/react-native-acpcore';

var state = ACPMobileVisitorAuthenticationState.AUTHENTICATED;
//var state = ACPMobileVisitorAuthenticationState.LOGGED_OUT;
//var state = ACPMobileVisitorAuthenticationState.UNKNOWN;
```
{% endtab %}

{% tab title="Flutter" %}
### Dart

**ACPVisitorID**

This is an identifier to be used with the Adobe Experience Cloud Identity Service and it contains the origin, the identifier type, the identifier, and the authentication state of the visitor ID.

```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';


class ACPMobileVisitorId {
  String get idOrigin;
  String get idType;
  String get identifier;
  ACPMobileVisitorAuthenticationState get authenticationState;
};
```

**ACPMobileVisitorAuthenticationState**

This is used to indicate the authentication state for the current `VisitorID`.

```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';

enum ACPMobileVisitorAuthenticationState {UNKNOWN, AUTHENTICATED, LOGGED_OUT};
```
{% endtab %}

{% tab title="Cordova" %}
### Cordova

**ACPMobileVisitorAuthenticationState**

This is used to indicate the authentication state for the current `VisitorID`.

```jsx
ACPIdentity.ACPMobileVisitorAuthenticationStateUnknown = 0;
ACPIdentity.ACPMobileVisitorAuthenticationStateAuthenticated = 1;
ACPIdentity.ACPMobileVisitorAuthenticationStateLoggedOut = 2;
```
{% endtab %}

{% tab title="Unity" %}
### C#

**ACPAuthenticationState**

This is used to indicate the authentication state for the current `VisitorID`.

```csharp
ACPIdentity.ACPAuthenticationState.UNKNOWN = 0;
ACPIdentity.ACPAuthenticationState.AUTHENTICATED = 1;
ACPIdentity.ACPAuthenticationState.LOGGED_OUT = 2;
```
{% endtab %}

{% tab title="Xamarin" %}
### C#

**iOS**

**ACPMobileVisitorAuthenticationState**

This is used to indicate the authentication state for the current `ACPMobileVisitorId`.

```csharp
ACPMobileVisitorAuthenticationState.Unknown = 0;
ACPMobileVisitorAuthenticationState.Authenticated = 1;
ACPMobileVisitorAuthenticationState.LoggedOut = 2;
```

**Android**

**VisitorID.AuthenticationState**

This is used to indicate the authentication state for the current `VisitorID`.

```csharp
VisitorID.AuthenticationState.Unknown = 0;
VisitorID.AuthenticationState.Authenticated = 1;
VisitorID.AuthenticationState.LoggedOut = 2;
```
{% endtab %}
{% endtabs %}
