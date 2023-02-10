import Tabs from './tabs/api-reference.md'

# Identity API reference

## appendToURL / appendVisitorInfoForURL

This API appends Adobe visitor information to the query component of the specified URL.

If the provided URL is null or empty, it is returned as is. Otherwise, the following information is added to the query component of the specified URL and is returned in the callback function:

- The `adobe_mc` attribute is a URL encoded list that contains:
  - `MCMID` - Experience Cloud ID (ECID)
  - `MCORGID` - Experience Cloud Org ID
  - `MCAID` - Analytics Tracking ID (AID), if available from the [Analytics extension](../../adobe-analytics/api-reference.md#gettrackingidentifier)
  - `TS` - A timestamp taken when this request was made
- The optional `adobe_aa_vid` attribute is the URL-encoded Analytics Custom Visitor ID (VID), if previously set in the [Analytics extension](../../adobe-analytics/api-reference.md#setvisitoridentifier).

This API is designed to handle the following URL formats:

```text
scheme://authority/path?query=param#fragment
```

In this example, the Adobe visitor data is appended as:

```text
scheme://authority/path?query=param&adobe_mc=TS%3Dtimestamp%7CMCMID%3Decid%7CMCORGID%3Decorgid%40AdobeOrg#fragment
```

Similarly, URLs without a query component:

```text
scheme://authority/path#fragment
```

The Adobe visitor data is appended as:

```text
scheme://authority/path?adobe_mc=TS%3Dtimestamp%7CMCMID%3Decid%7CMCORGID%3Decorgid%40AdobeOrg#fragment
```

In these examples the `adobe_mc` parameters are separated by "|" (pipe) and are encoded.

```text
adobe_mc = TS=XXXXXX|MCMID=XXXXXX|MCAID=XXXXXX|MCORGID=XXXXXX@AdobeOrg
```

If your application uses more complicated URLs, such as Angular URLs, you should use [getUrlVariables](#geturlvariables).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=append-to-url"/>

iOS

<Tabs query="platform=ios&api=append-to-url"/>

<!--- React Native

<Tabs query="platform=react-native&api=append-to-url"/>

Flutter

<Tabs query="platform=flutter&api=append-to-url"/> --->

## extensionVersion

The `extensionVersion()` API returns the version of the Identity extension that is registered with the Mobile Core extension.

To get the version of the Identity extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

<!--- React Native

<Tabs query="platform=react-native&api=extension-version"/>

Flutter

<Tabs query="platform=flutter&api=extension-version"/> --->

## getExperienceCloudId

This API retrieves the Adobe Experience Cloud ID (ECID) that was generated when the app was initially launched and is stored in the Adobe Experience Cloud Identity Service.

This ID is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-experience-cloud-id"/>

iOS

<Tabs query="platform=ios&api=get-experience-cloud-id"/>

<!--- React Native

<Tabs query="platform=react-native&api=get-experience-cloud-id"/>

Flutter

<Tabs query="platform=flutter&api=get-experience-cloud-id"/> --->

## getIdentifiers

This API returns all customer identifiers that were previously synced with the Adobe Experience Cloud Identity Service.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-identifiers"/>

iOS

<Tabs query="platform=ios&api=get-identifiers"/>

<!--- React Native

<Tabs query="platform=react-native&api=get-identifiers"/>

Flutter

<Tabs query="platform=flutter&api=get-identifiers"/> --->

## getUrlVariables

This API gets the Adobe Experience Cloud Identity Service variables in URL query parameter form, and these variables will be consumed by the hybrid app. This method returns an appropriately formed string that contains the Experience Cloud Identity Service URL variables. There will be no leading (&) or (?) punctuation because the caller is responsible for placing the variables in their resulting URL in the correct location.

If an error occurs while retrieving the URL string, the callback handler will be called with a null value. Otherwise, the following information is added to the string that is returned in the callback:

- The `adobe_mc` attribute is an URL encoded list that contains:
  - `MCMID` - Experience Cloud ID (ECID)
  - `MCORGID` - Experience Cloud Org ID
  - `MCAID` - Analytics Tracking ID (AID), if available from the [Analytics extension](../../adobe-analytics/index.md)
  - `TS` - A timestamp taken when this request was made
- The optional `adobe_aa_vid` attribute is the URL-encoded Analytics Custom Visitor ID (VID), if previously set in the [Analytics extension](../../adobe-analytics/index.md).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-url-variables"/>

iOS

<Tabs query="platform=ios&api=get-url-variables"/>

<!--- React Native

<Tabs query="platform=react-native&api=get-url-variables"/>

Flutter

<Tabs query="platform=flutter&api=get-url-variables"/> --->

## registerExtension

<InlineAlert variant="warning" slots="text"/>

This API is only available in Android and is deprecated starting in version 2.0.0 of the Identity extension. Use [`MobileCore.registerExtensions()`](../../api-reference.md#registerextensions) instead.

The `registerExtension()` API registers the Identity extension with the Mobile Core extension. This API allows the extension to send and receive events to and from the Mobile SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

## setAdvertisingIdentifier

The advertising ID is preserved between app upgrades, is saved and restored during the standard application backup process, available via the [Signals](../signal/index.md) extension, and is removed at uninstall.

<InlineAlert variant="info" slots="text"/>

If the current SDK privacy status is `optedout`, the advertising identifier is not set or stored.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-advertising-identifier"/>

iOS

<Tabs query="platform=ios&api=set-advertising-identifier"/>

<!--- React Native

<Tabs query="platform=react-native&api=set-advertising-identifier"/>

Flutter

<Tabs query="platform=flutter&api=set-advertising-identifier"/> --->

## setPushIdentifier

This API sets the device token for push notifications in the SDK. If the current SDK privacy status is `optedout`, the push identifier is not set.

<InlineAlert variant="info" slots="text"/>

You should call `setPushIdentifier` on each application launch to ensure the most up-to-date device token is set to the SDK. If no device token is available, `null`/`nil` should be passed.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-push-identifier"/>

iOS

<Tabs query="platform=ios&api=set-push-identifier"/>

<!--- React Native

<Tabs query="platform=react-native&api=set-push-identifier"/> --->

## syncIdentifier

The `syncIdentifier()` and `syncIdentifiers()` APIs update the specified customer IDs with the Adobe Experience Cloud Identity Service.

These APIs synchronize the provided customer identifier type key and value with the authentication state to the Experience Cloud Identity Service. If the specified customer ID type exists in the service, this ID type is updated with the new ID and the authentication state. Otherwise, a new customer ID is added.

Starting with _ACPIdentity v2.1.3 (iOS)_ and _Identity v1.1.2 (Android)_ if the new `identifier` value is null or empty, this ID type is removed from the local storage, Identity shared state and not synced with the Experience Cloud Identity Service.

These IDs are preserved between app upgrades, are saved and restored during the standard application backup process, and are removed at uninstall.

If the current SDK privacy status is `MobilePrivacyStatus.OPT_OUT`, calling this method results in no operations being performed.

This API updates or appends the provided customer identifier type key and value with the given authentication state to the Experience Cloud Identity Service. If the specified customer ID type exists in the service, the ID is updated with the new ID and authentication state. Otherwise a new customer ID is added.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=sync-identifier"/>

iOS

<Tabs query="platform=ios&api=sync-identifier"/>

<!--- React Native

<Tabs query="platform=react-native&api=sync-identifier"/>

Flutter

<Tabs query="platform=flutter&api=sync-identifier"/> --->

## syncIdentifiers

This API is an overloaded version, which does not include the parameter for the authentication state and it assumes a default value of `VisitorID.AuthenticationState.UNKNOWN`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=sync-identifiers"/>

iOS

<Tabs query="platform=ios&api=sync-identifiers"/>

<!--- React Native

<Tabs query="platform=react-native&api=sync-identifiers"/>

Flutter

<Tabs query="platform=flutter&api=sync-identifiers"/> --->

## syncIdentifiers (overloaded)

The function of this API is the same as the `syncIdentifier` API. This API passes a list of identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. In each identifier pair, if the `identifier type` contains a null or an empty string, the identifier is ignored by the Identity extension.

Starting with _ACPIdentity v2.1.3 (iOS)_ and _Identity v1.1.2 (Android)_ if the new `identifier` value is null or empty, this ID type is removed from the local storage, Identity shared state and not synced with the Adobe Experience Cloud Identity Service.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=sync-identifiers-overloaded"/>

iOS

<Tabs query="platform=ios&api=sync-identifiers-overloaded"/>

<!--- React Native

<Tabs query="platform=react-native&api=sync-identifiers-overloaded"/>

Flutter

<Tabs query="platform=flutter&api=sync-identifiers-overloaded"/> --->

## Public classes

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=public-classes"/>

iOS

<Tabs query="platform=ios&api=public-classes"/>

<!--- React Native

<Tabs query="platform=react-native&api=public-classes"/>

Flutter

<Tabs query="platform=flutter&api=public-classes"/> --->
