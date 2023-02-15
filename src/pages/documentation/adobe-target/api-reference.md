import Tabs from './tabs/api-reference.md'

# Target API reference

## clearPrefetchCache

This API clears the in-memory cache that contains the prefetched offers.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=clear-prefetch-cache"/>

iOS

<Tabs query="platform=ios&api=clear-prefetch-cache"/>

<!--- React Native

<Tabs query="platform=react-native&api=clear-prefetch-cache"/> --->

## clickedLocation

This API sends a location click notification for an mbox to the configured Target server and can be invoked in the following cases:

* For a prefetched mbox, after the mbox content is retrieved using the `retrieveLocationContent` API.
* For a regular mbox, where no previous prefetch request is made, and the mbox content is retrieved using the `retrieveLocationContent` API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=clicked-location"/>

iOS

<Tabs query="platform=ios&api=clicked-location"/>

<!--- React Native

<Tabs query="platform=react-native&api=clicked-location"/> --->

## displayedLocations

This API sends a location display notification for an mbox to the configured Target server. The API should be invoked for a prefetched mbox after the mbox content is retrieved using the `retrieveLocationContent` API. If no previous prefetch request is made, and the mbox content is retrieved using the `retrieveLocationContent` API, calling this API does not trigger a notification request to the Target server.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=displayed-locations"/>

iOS

<Tabs query="platform=ios&api=displayed-locations"/>

<!--- React Native

<Tabs query="platform=react-native&api=displayed-locations"/> --->

## executeRawRequest

This API can be used to retrieve prefetch or execute responses for mbox locations from the configured Target server.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=execute-raw-request"/>

## extensionVersion

Returns the running version of the Target extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

<!--- React Native

<Tabs query="platform=react-native&api=extension-version"/> --->

## getSessionId

This API gets the Target session identifier. 

The session ID is generated locally in the SDK upon initial Target request and persisted for a period defined by `target.sessionTimeout` configuration setting. If the session timeout happens upon a subsequent Target request, a new session ID will be generated for use in the request and persisted in the SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-session-id"/>

iOS

<Tabs query="platform=ios&api=get-session-id"/>

## getThirdPartyId

This API gets the custom visitor ID for Target. If no `third-party` ID was previously set, or if the ID was reset by calling resetExperience API, it will have a `nil` value.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-third-party-id"/>

iOS

<Tabs query="platform=ios&api=get-third-party-id"/>

<!--- React Native

<Tabs query="platform=react-native&api=get-third-party-id"/> --->

## getTntId

This API gets the Target user ID (also known as the `tntId`) from the Target service. The `tntId` is returned in the network response after a successful call to `prefetchContent` or `retrieveLocationContent`, which is then persisted in the SDK. This ID is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall or when the `resetExperience` API is used.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-tnt-id"/>

iOS

<Tabs query="platform=ios&api=get-tnt-id"/>

<!--- React Native

<Tabs query="platform=react-native&api=get-tnt-id"/> --->

## prefetchContent

This API sends a prefetch request to your configured Target server. The prefetch request is sent with the prefetch objects array and the specified Target parameters.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=prefetch-content"/>

iOS

<Tabs query="platform=ios&api=prefetch-content"/>

<!--- React Native

<Tabs query="platform=react-native&api=prefetch-content"/> --->

## registerExtension

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=register-extension"/>

iOS

<Tabs query="platform=ios&api=register-extension"/>

<!--- React Native

<Tabs query="platform=react-native&api=register-extension"/> --->

## resetExperience

This API resets the user's experience by removing the visitor identifiers and resetting the Target session. Invoking this API also removes previously set Target user ID and custom visitor IDs, Target Edge Host, and the session information from persistent storage.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=reset-experience"/>

iOS

<Tabs query="platform=ios&api=reset-experience"/>

<!--- React Native

<Tabs query="platform=react-native&api=reset-experience"/> --->

## retrieveLocationContent

This API sends a batch request to the configured Target server for multiple mbox locations.

A request will be sent to the configured Target server for mbox locations in the requests array for Target requests that have not been previously prefetched. The content for the mbox locations that have been prefetched in a previous request are returned from the SDK, and no additional network request is made. Each Target request object in the list contains a callback function, which is invoked when content is available for its given mbox location.

When using `contentWithData` callback to instantiate TargetRequest object, the following keys can be used to read response tokens and Analytics for Target (A4T) info from the data payload, if available in the Target response.

* responseTokens (Response tokens)
* analytics.payload (A4T payload)
* clickmetric.analytics.payload (Click tracking A4T payload)

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=retrieve-location-content"/>

iOS

<Tabs query="platform=ios&api=retrieve-location-content"/>

<!--- React Native

<Tabs query="platform=react-native&api=retrieve-location-content"/> --->

## sendRawNotifications

This API sends notification request(s) to the configured Target server for click or display notifications. The event tokens required for the Target click or display notifications can be retrieved from a previous `executeRawRequest` API response.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=send-raw-notifications"/>

## setPreviewRestartDeepLink

This API sets a specific location in the app to be displayed when preview mode selections have been confirmed.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-preview-restart-deep-link"/>

iOS

<Tabs query="platform=ios&api=set-preview-restart-deep-link"/>

<!--- React Native

<Tabs query="platform=react-native&api=set-preview-restart-deep-link"/> --->

## setSessionId

This API sets the Target session identifier.

The provided session ID is persisted in the SDK for a period defined by `target.sessionTimeout` configuration setting. If the provided session ID is nil/null or empty, or if the privacy status is opted out, the SDK will remove the session ID value from the persistence.

This ID is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall, upon privacy status update to opted out, or when the resetExperience API is used.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-session-id"/>

iOS

<Tabs query="platform=ios&api=set-session-id"/>

## setThirdPartyId

This API sets the custom visitor ID for Target. This ID is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall or when the resetExperience API is used.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-third-party-id"/>

iOS

<Tabs query="platform=ios&api=set-third-party-id"/>

<!--- React Native

<Tabs query="platform=react-native&api=set-third-party-id"/> --->

## setTntId

This API sets the Target user identifier.

The provided tnt ID is persisted in the SDK and attached to subsequent Target requests. It is used to derive the edge host value in the SDK, which is also persisted and used in future Target requests. If the provided tnt ID is nil/null or empty, or if the privacy status is opted out, the SDK will remove the tnt ID and edge host values from the persistence.

This ID is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall, upon privacy status update to opted out, or when the `resetExperience` API is used.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-tnt-id"/>

iOS

<Tabs query="platform=ios&api=set-tnt-id"/>

## Visual preview

Target visual preview mode allows you to easily perform end-to-end QA activities by enrolling and previewing these activities on your device. This mode does not require a specialized testing set up. To get started, set up a URL scheme and generate the preview links.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=visual-preview"/>

iOS

<Tabs query="platform=ios&api=visual-preview"/>

## Public classes

The following is a list of all the public classes available when using the Adobe Target extension.

### Target request

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=target-request"/>

iOS

<Tabs query="platform=ios&api=target-request"/>

<!--- React Native

<Tabs query="platform=react-native&api=target-request"/> --->

### Target prefetch

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=target-prefetch"/>

iOS

<Tabs query="platform=ios&api=target-prefetch"/>

<!--- React Native

<Tabs query="platform=react-native&api=target-prefetch"/> --->

### Target parameters

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=target-parameters"/>

iOS

<Tabs query="platform=ios&api=target-parameters"/>

<!--- React Native

<Tabs query="platform=react-native&api=target-parameters"/> --->

### Target order

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=target-order"/>

iOS

<Tabs query="platform=ios&api=target-order"/>

<!--- React Native

<Tabs query="platform=react-native&api=target-order"/> --->

### Target product

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=target-product"/>

iOS

<Tabs query="platform=ios&api=target-product"/>

<!--- React Native

<Tabs query="platform=react-native&api=target-product"/> --->

### Target callback

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=target-callback"/>
