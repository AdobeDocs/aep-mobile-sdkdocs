---
title: Adobe Target API reference
description: An API reference for the Adobe Target mobile extension.
keywords:
- Adobe Target
- API reference
---

import Alerts from '/src/pages/resources/alerts.md'
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

## prefetchContent (with timeout)

This API is an overloaded version of `prefetchContent` that accepts a `timeout` parameter, which specifies a custom network request timeout (in seconds). When provided, the timeout takes precedence over the `target.timeout` configuration value and the default SDK timeout of 5 seconds.

### iOS Swift

* `prefetchArray`: An array of `TargetPrefetch` objects for various mbox locations.
* `targetParameters`: A `TargetParameters` object configured for the prefetch request.
* `timeout`: Network request timeout in seconds. When provided, this takes precedence over the `target.timeout` configuration and the default SDK timeout of 5 seconds.
* `completion`: A callback that is invoked with a `nil` value if the prefetch is successful, or with an error otherwise.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func prefetchContent(_ prefetchArray: [TargetPrefetch], with targetParameters: TargetParameters? = nil, timeout: TimeInterval, _ completion: ((Error?) -> Void)?)
```

#### Example

```swift
let TargetParameters1 = TargetParameters(
    parameters: ["status": "platinum"],
    profileParameters: ["age": "20"],
    order: TargetOrder(id: "ADCKKIM", total: 344.30, purchasedProductIds: ["34", "125"]),
    product: TargetProduct(productId: "24D3412", categoryId:"Books")
    )

let TargetParameters2 = TargetParameters(
    parameters: ["userType": "Paid"],
    profileParameters: nil,
    order: TargetOrder(id: "ADCKKIM", total: 344.30, purchasedProductIds: ["id1", "id2"]),
    product: TargetProduct(productId: "764334", categoryId:"Online")
    )

let globalTargetParameters = TargetParameters(
    parameters: ["status": "progressive"],
    profileParameters: ["age": "20-32"],
    order: TargetOrder(id: "ADCKKBC", total: 400.50, purchasedProductIds: ["34", "125"]),
    product: TargetProduct(productId: "24D334", categoryId:"Stationary")
    )

Target.prefetchContent([
    TargetPrefetch(name: "mboxName1", targetParameters: TargetParameters1),
    TargetPrefetch(name: "mboxName2", targetParameters: TargetParameters2),
    ],
    with: globalTargetParameters,
    timeout: 5.0
    ){ error in
        // do something with the callback response
}
```

### iOS Objective-C

* `targetPrefetchObjectArray`: An array of `AEPTargetPrefetchObject` objects for various mbox locations.
* `targetParameters`: An `AEPTargetParameters` object configured for the prefetch request.
* `timeout`: Network request timeout in seconds. When provided, this takes precedence over the `target.timeout` configuration and the default SDK timeout of 5 seconds.
* `completion`: A callback that is invoked with a `nil` value if the prefetch is successful, or with an error otherwise.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) prefetchContent: (nonnull NSArray<AEPTargetPrefetchObject*>*) targetPrefetchObjectArray
         withParameters: (nullable AEPTargetParameters*) targetParameters
                timeout: (NSTimeInterval) timeout
               callback: (nullable void (^) (nullable NSError* error)) completion
```

#### Example

```objc
NSDictionary *mboxParameters1 = @{@"status":@"platinum"};
NSDictionary *profileParameters1 = @{@"age":@"20"};
AEPTargetProduct *product1 = [[AEPTargetProduct alloc] initWithProductId:@"24D3412" categoryId:@"Books"];
AEPTargetOrder *order1 = [[AEPTargetOrder alloc] initWithId:@"ADCKKIM" total:[@(344.30) doubleValue] purchasedProductIds:@[@"34", @"125"]];

AEPTargetParameters *targetParameters1 = [[AEPTargetParameters alloc] initWithParameters:mboxParameters1 profileParameters:profileParameters1 order:order1 product:product1 ];

NSDictionary *mboxParameters2 = @{@"userType":@"Paid"};
AEPTargetProduct *product2 = [[AEPTargetProduct alloc] initWithProductId:@"764334" categoryId:@"Online"];
AEPTargetOrder *order2 = [[AEPTargetOrder alloc] initWithId:@"ADCKKIM" total:[@(344.30) doubleValue] purchasedProductIds:@[@"id1",@"id2"]];
AEPTargetParameters *targetParameters2 = [[AEPTargetParameters alloc] initWithParameters:mboxParameters2 profileParameters:nil order:order2 product:product2 ];

// Creating Prefetch Objects
AEPTargetPrefetchObject *prefetch1 = [[AEPTargetPrefetchObject alloc] initWithName: @"logo" targetParameters:targetParameters1];
AEPTargetPrefetchObject *prefetch2 = [[AEPTargetPrefetchObject alloc] initWithName: @"buttonColor" targetParameters:targetParameters2];

// Creating prefetch Array
NSArray *prefetchArray = @[prefetch1,prefetch2];

// Creating Target parameters
NSDictionary *mboxParameters = @{@"status":@"progressive"};
NSDictionary *profileParameters = @{@"age":@"20-32"};
AEPTargetProduct *product = [[AEPTargetProduct alloc] initWithProductId:@"24D334" categoryId:@"Stationary"];
AEPTargetOrder *order = [[AEPTargetOrder alloc] initWithId:@"ADCKKBC" total:[@(400.50) doubleValue] purchasedProductIds:@[@"34", @"125"]];

AEPTargetParameters *targetParameters = [[AEPTargetParameters alloc] initWithParameters:mboxParameters
profileParameters:profileParameters
order:order
product:product];

// Target API Call
[AEPMobileTarget prefetchContent:prefetchArray withParameters:targetParameters timeout:5.0 callback:^(NSError * _Nullable error){
// do something with the callback response
}];
```

## registerExtension

<Alerts query="platform=android-register-extension&componentClass=InlineNestedAlert"/>

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

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

This class contains the name of the Target location/mbox and target parameters to be used in a prefetch request.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=target-prefetch"/>

iOS

<Tabs query="platform=ios&api=target-prefetch"/>

<!--- React Native

<Tabs query="platform=react-native&api=target-prefetch"/> --->

### Target parameters

This class may optionally contain the mbox parameters dictionary, the profile parameters dictionary, the TargetOrder object, as well as the TargetProduct object.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=target-parameters"/>

iOS

<Tabs query="platform=ios&api=target-parameters"/>

<!--- React Native

<Tabs query="platform=react-native&api=target-parameters"/> --->

### Target order

This class contains an orderId, an order total, and an array for purchasedProductIds.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=target-order"/>

iOS

<Tabs query="platform=ios&api=target-order"/>

<!--- React Native

<Tabs query="platform=react-native&api=target-order"/> --->

### Target product

This class contains the productId and categoryId.

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
