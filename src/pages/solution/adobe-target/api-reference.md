---
title: Adobe Target API reference
description: An API reference for the Adobe Target mobile extension.
keywords:
- Adobe Target
- API reference
---

# Target API reference

## clearPrefetchCache

This API clears the in-memory cache that contains the prefetched offers.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

##### Syntax

```java
public static void clearPrefetchCache()
```

##### Example

```java
Target.clearPrefetchCache();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

##### Syntax

```swift
static func clearPrefetchCache()
```

##### Example

```swift
Target.clearPrefetchCache()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

##### Syntax

```objc
+ (void) clearPrefetchCache
```

##### Example

```objc
[AEPMobileTarget clearPrefetchCache];
```

\<!--- React Native

\<Tabs query="platform=react-native&api=clear-prefetch-cache"/\> ---\>

## clickedLocation

This API sends a location click notification for an mbox to the configured Target server and can be invoked in the following cases:

* For a prefetched mbox, after the mbox content is retrieved using the `retrieveLocationContent` API.
* For a regular mbox, where no previous prefetch request is made, and the mbox content is retrieved using the `retrieveLocationContent` API.

### Android Java

* `mboxName`: A string that contains the mbox location for which the click notification will be sent to Target.
* `parameters`: A `TargetParameters` object configured for the request.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void clickedLocation(final String mboxName, final TargetParameters parameters)
```

#### Example

```java
// Mbox parameters
Map<String, String> mboxParameters = new HashMap<>();
mboxParameters.put("membership", "prime");

// Product parameters
TargetProduct targetProduct = new TargetProduct("CEDFJC", "Electronics");

// Order parameters
List<String> purchasedIds = new ArrayList<String>();
purchasedIds.add("81");
purchasedIds.add("123");
purchasedIds.add("190");
TargetOrder targetOrder = new TargetOrder("NJJICK", "650", purchasedIds);

// Profile parameters
Map<String, String> profileParameters = new HashMap<>();
profileParameters.put("ageGroup", "20-32");

// Create Target Parameters
TargetParameters targetParameters = new TargetParameters.Builder(mboxParameters)
                                .profileParameters(profileParameters)
                                .order(targetOrder)
                                .product(targetProduct)
                                .build();

Target.clickedLocation("cartLocation", targetParameters);
```

### iOS Swift

* `name`: A string that contains the mbox location for which the click notification will be sent to Target.
* `targetParameters`: A `TargetParameters` object configured for the request.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func clickedLocation(_ name: String, targetParameters: TargetParameters?)
```

#### Example

```swift
Target.clickedLocation("aep-loc-1", targetParameters: TargetParameters(parameters: ["mbox_parameter_key": "mbox_parameter_value"], profileParameters: ["name": "Smith"], order: TargetOrder(id: "id1", total: 1.0, purchasedProductIds: ["ppId1"]), product: TargetProduct(productId: "pId1", categoryId: "cId1")))
```

### iOS Objective-C

* `name`: A string that contains the mbox location for which the click notification will be sent to Target.
* `targetParameters`: A `TargetParameters` object configured for the request.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) clickedLocation: (nonnull NSString*) name withTargetParameters: (nullable AEPTargetParameters* targetParameters
```

#### Example

```objc
AEPTargetOrder *order = [[AEPTargetOrder alloc] initWithId:@"id1" total:1.0 purchasedProductIds:@[@"ppId1"]];
AEPTargetProduct *product =[[AEPTargetProduct alloc] initWithProductId:@"pId1" categoryId:@"cId1"];
AEPTargetParameters * targetParams = [[AEPTargetParameters alloc] initWithParameters:@{@"mbox_parameter_key":@"mbox_parameter_value"} profileParameters:@{@"name":@"Smith"} order:order product:product];
[AEPMobileTarget clickedLocation:@"aep-loc-1" withTargetParameters:targetParams];
```

\<!--- React Native

\<Tabs query="platform=react-native&api=clicked-location"/\> ---\>

## displayedLocations

This API sends a location display notification for an mbox to the configured Target server. The API should be invoked for a prefetched mbox after the mbox content is retrieved using the `retrieveLocationContent` API. If no previous prefetch request is made, and the mbox content is retrieved using the `retrieveLocationContent` API, calling this API does not trigger a notification request to the Target server.

### Android Java

* `mboxNames`: A list of the mbox locations for which the display notification will be sent to Target.
* `targetParameters`: The `TargetParameters` object configured for the request.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void displayedLocations(final List<String> mboxNames, final TargetParameters targetParameters)
```

#### Example

```java
List<String> purchasedProductIds = new ArrayList<String>();
purchasedProductIds.add("34");
purchasedProductIds.add("125"); 
TargetOrder targetOrder = new TargetOrder("123", 567.89, purchasedProductIds);

TargetProduct targetProduct = new TargetProduct("123", "Books");

TargetParameters targetParameters = new TargetParameters.Builder()
.parameters(new HashMap<String, String>())
.profileParameters(new HashMap<String, String>())
.product(targetProduct)
.order(targetOrder)
.build();

List<String> mboxList = new ArrayList<>();
mboxList.add("mboxName1");

Target.displayedLocations(mboxList, targetParameters);
```

### iOS Swift

* `names`: An array of the mbox locations for which the display notification will be sent to Target.
* `targetParameters`: A `TargetParameters` object configured for the request.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func displayedLocations(_ names: [String], targetParameters: TargetParameters?)
```

#### Example

```swift
Target.displayedLocations(
              ["mboxName1", "mboxName2"], 
        targetParameters: TargetParameters(
        parameters: nil,
        profileParameters: nil,
        order: TargetOrder(id: "ADCKKBC", total: 400.50, purchasedProductIds: ["34", "125"]),
        product: TargetProduct(productId: "24D334", categoryId: "Stationary")
        )
)
```

### iOS Objective-C

* `names`: An array of the mbox locations for which the display notification will be sent to Target.
* `targetParameters`: A `TargetParameters` object configured for the request.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) displayedLocations: (nonnull NSArray<NSString*>*) names withTargetParameters: (nullable AEPTargetParameters*) targetParameters
```

#### Example

```objc
AEPTargetOrder *order = [[AEPTargetOrder alloc] initWithId:@"ADCKKBC" total:400.50 purchasedProductIds:@[@"34", @"125"]];
AEPTargetProduct *product =[[AEPTargetProduct alloc] initWithProductId:@"24D334" categoryId:@"Stationary"];
AEPTargetParameters * targetParams = [[AEPTargetParameters alloc] initWithParameters:nil profileParameters:nil order:order product:product];
[AEPMobileTarget displayedLocations:@[@"mboxName1", @"mboxName2"] withTargetParameters:targetParams];
```

\<!--- React Native

\<Tabs query="platform=react-native&api=displayed-locations"/\> ---\>

## extensionVersion

Returns the running version of the Target extension.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public String extensionVersion()
```

#### Example

```java
Target.extensionVersion();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static var extensionVersion: String
```

#### Example

```swift
let targetVersion = Target.extensionVersion
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (nonnull NSString*) extensionVersion
```

#### Example

```objc
NSString *targetVersion = [AEPMobileTarget extensionVersion];
```

\<!--- React Native

\<Tabs query="platform=react-native&api=extension-version"/\> ---\>

## getSessionId

This API gets the Target session identifier.

The session ID is generated locally in the SDK upon initial Target request and persisted for a period defined by `target.sessionTimeout` configuration setting. If the session timeout happens upon a subsequent Target request, a new session ID will be generated for use in the request and persisted in the SDK.

### Android Java

*`callback`: A callback that is invoked with the `sessionId` value, or `null` if there was an error retrieving it.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void getSessionId(final AdobeCallback<String> callback)
```

#### Example

```java
Target.getSessionId(new AdobeCallback<String>() {                    
    @Override
    public void call(String sessionId) {
                // read Target sessionId
    }
});
```

### iOS Swift

* `completion`: A callback that is invoked with the `sessionId` value, or `nil` if there was an error retrieving it.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func getSessionId(_ completion: @escaping (String?, Error?) -> Void)
```

#### Example

```swift
Target.getSessionId { (id, err) in
    // read Target sessionId
}
```

### iOS Objective-C

* `completion`: A callback that is invoked with the `sessionId` value, or `nil` if there was an error retrieving it.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) getSessionId: (void (nonnull ^) (nullable NSString* sessionId, nullable NSError* error)) completion
```

#### Example

```objc
[AEPMobileTarget getSessionId:^(NSString *sessionId, NSError *error){
    // read Target sessionId
}];
```

## getThirdPartyId

This API gets the custom visitor ID for Target. If no `third-party` ID was previously set, or if the ID was reset by calling resetExperience API, it will have a `nil` value.

### Android Java

* `callback`: A callback that is invoked with the `thirdPartyId` value. If no third-party ID was set, this value will be `null`.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void getThirdPartyId(final AdobeCallback<String> callback)
```

#### Example

```java
Target.getThirdPartyId(new AdobeCallback<String>() {                    
    @Override
    public void call(String thirdPartyId) {
                // read Target thirdPartyId
    }
});
```

### iOS Swift

* `completion`: A callback that is invoked with the `thirdPartyId` value. If no `third-party` ID was set, this value will be `nil`.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func getThirdPartyId(_ completion: @escaping (String?, Error?) -> Void)
```

#### Example

```swift
Target.getThirdPartyId { (id, err) in
    // read Target thirdPartyId
}
```

### iOS Objective-C

* `completion`: A callback that is invoked with the `thirdPartyId` value. If no `third-party` ID was set, this value will be `nil`.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) getThirdPartyId: (nonnull void (^) (nullable NSString* thirdPartyId, nullable NSError* error)) completion
```

#### Example

```objc
[AEPMobileTarget getThirdPartyId:^(NSString *thirdPartyID, NSError *error){
    // read Target thirdPartyId
}];
```

\<!--- React Native

\<Tabs query="platform=react-native&api=get-third-party-id"/\> ---\>

## getTntId

This API gets the Target user ID (also known as the `tntId`) from the Target service. The `tntId` is returned in the network response after a successful call to `prefetchContent` or `retrieveLocationContent`, which is then persisted in the SDK. This ID is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall or when the `resetExperience` API is used.

### Android Java

* `callback`: A callabck that is invoked with the `tntId` value, or `null` if there was an error retrieving it.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void getTntId(final AdobeCallback<String> callback)
```

#### Example

```java
Target.getTntId(new AdobeCallback<String>() {
    @Override
    public void call(String tntId) {
        // read target's tntid
    }
});
```

### iOS Swift

* `completion`: A callback that is invoked with the `tntId` value. If no Target ID was set, this value will be `nil`.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func getTntId(_ completion: @escaping (String?, Error?) -> Void)
```

#### Example

```swift
Target.getTntId({ (id, err) in
    // read target's tntId        
})
```

### iOS Objective-C

* `completion`: A callback that is invoked with the `tntId` value. If no Target ID was set, this value will be `nil`.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) getTntId: (void (nonnull ^) (nullable NSString* tntId, nullable NSError* error)) completion
```

#### Example

```objc
[AEPMobileTarget getTntId:^(NSString *tntID, NSError *error){
    // read target's tntId 
}];
```

\<!--- React Native

\<Tabs query="platform=react-native&api=get-tnt-id"/\> ---\>

## prefetchContent

This API sends a prefetch request to your configured Target server. The prefetch request is sent with the prefetch objects array and the specified Target parameters.

### Android Java

* `mboxPrefetchList`: A list of `TargetPrefetch` objects for various mbox locations.
* `parameters`: A `TargetParameters` object configured for the prefetch request.
* `callback`: A callback that is invoked with a `null` value if the prefetch is successful, or with an error message string otherwise.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void prefetchContent(final List<TargetPrefetch> mboxPrefetchList, final TargetParameters parameters, final AdobeCallback<String> callback)
```

#### Example

```java
// first prefetch request
Map<String, String> mboxParameters1 = new HashMap<>();
mboxParameters1.put("status", "platinum");

TargetParameters targetParameters1 = new TargetParameters.Builder()
.parameters(mboxParameters1)
.build();

TargetPrefetch prefetchRequest1 = new TargetPrefetch("mboxName1", targetParameters1);

// second prefetch request
Map<String, String> mboxParameters2 = new HashMap<>();
mboxParameters2.put("userType", "paid");

List<String> purchasedIds = new ArrayList<String>();
purchasedIds.add("34");
purchasedIds.add("125");
TargetOrder targetOrder = new TargetOrder("ADCKKIM", 344.30, purchasedIds);

TargetProduct targetProduct = new TargetProduct("24D3412", "Books");

TargetParameters targetParameters2 = new TargetParameters.Builder()
.parameters(mboxParameters2)
.product(targetProduct)
.order(targetOrder)
.build();

TargetPrefetch prefetchRequest2 = new TargetPrefetch("mboxName2", targetParameters2);

List<TargetPrefetch> prefetchMboxesList = new ArrayList<>();
prefetchMboxesList.add(prefetchRequest1);
prefetchMboxesList.add(prefetchRequest2);

// Call the prefetchContent API.
TargetParamters targetParameters = null;
Target.prefetchContent(prefetchMboxesList, targetParameters, prefetchStatusCallback);
```

### iOS Swift

* `prefetchArray`: An array of `TargetPrefetch` objects for various mbox locations.
* `targetParameters`: A `TargetParameters` object configured for the prefetch request.
* `completion`: A callback that is invoked with a `nil` value if the prefetch is successful, or with an error otherwise.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func prefetchContent(_ prefetchArray: [TargetPrefetch], with targetParameters: TargetParameters? = nil, _ completion: ((Error?) -> Void)?)
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
    with: globalTargetParameters
    ){ error in
        // do something with the callback response
}
```

### iOS Objective-C

* `targetPrefetchObjectArray`: An array of `AEPTargetPrefetchObject` objects for various mbox locations.
* `targetParameters`: An `AEPTargetParameters` object configured for the prefetch request.
* `completion`: A callback that is invoked with a `nil` value if the prefetch is successful, or with an error otherwise.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) prefetchContent: (nonnull NSArray<AEPTargetPrefetchObject*>*) targetPrefetchObjectArray 
         withParameters: (nullable AEPTargetParameters*) targetParameters 
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
[AEPMobileTarget prefetchContent:prefetchArray withParameters:targetParameters callback:^(NSError * _Nullable error){
// do something with the callback response
}];
```

\<!--- React Native

\<Tabs query="platform=react-native&api=prefetch-content"/\> ---\>

## prefetchContent (with timeout)

This API is an overloaded version of `prefetchContent` that accepts a `timeout` parameter, which specifies a custom network request timeout (in seconds). When provided, the timeout takes precedence over the `target.timeout` configuration value and the default SDK timeout of 5 seconds.

### iOS Swift

* `prefetchArray`: An array of `TargetPrefetch` objects for various mbox locations.
* `targetParameters`: A `TargetParameters` object configured for the prefetch request.
* `timeout`: Network request timeout in seconds. When provided, this takes precedence over the `target.timeout` configuration and the default SDK timeout of 5 seconds.
* `completion`: A callback that is invoked with a `nil` value if the prefetch is successful, or with an error otherwise.

<CodeBlock slots="heading, code" repeat="2" languages="Swift" />

##### Syntax

```swift
static func prefetchContent(_ prefetchArray: [TargetPrefetch], with targetParameters: TargetParameters? = nil, timeout: TimeInterval, _ completion: ((Error?) -> Void)?)
```

##### Example

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

<CodeBlock slots="heading, code" repeat="2" languages="Objective-C" />

##### Syntax

```objc
+ (void) prefetchContent: (nonnull NSArray<AEPTargetPrefetchObject*>*) targetPrefetchObjectArray
         withParameters: (nullable AEPTargetParameters*) targetParameters
                timeout: (NSTimeInterval) timeout
               callback: (nullable void (^) (nullable NSError* error)) completion
```

##### Example

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

<InlineAlert variant="warning" slots="text1, text2"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../../../home/base/mobile-core/api-reference.md#registerextensions) API instead.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void registerExtension()
```

#### Example

```java
Target.registerExtension();
```

\<!--- \<Variant platform="react-native" api="register-extension" repeat="1"/\>

When using React Native, register the Target extension with Mobile Core in native code as shown on the Android and iOS tabs. ---\>

\<!--- React Native

\<Tabs query="platform=react-native&api=register-extension"/\> ---\>

## resetExperience

This API resets the user's experience by removing the visitor identifiers and resetting the Target session. Invoking this API also removes previously set Target user ID and custom visitor IDs, Target Edge Host, and the session information from persistent storage.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void resetExperience()
```

#### Example

```java
Target.resetExperience();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func resetExperience()
```

#### Example

```swift
Target.resetExperience()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) resetExperience
```

#### Example

```objc
[AEPMobileTarget resetExperience];
```

\<!--- React Native

\<Tabs query="platform=react-native&api=reset-experience"/\> ---\>

## retrieveLocationContent

This API sends a batch request to the configured Target server for multiple mbox locations.

A request will be sent to the configured Target server for mbox locations in the requests array for Target requests that have not been previously prefetched. The content for the mbox locations that have been prefetched in a previous request are returned from the SDK, and no additional network request is made. Each Target request object in the list contains a callback function, which is invoked when content is available for its given mbox location.

When using `contentWithData` callback to instantiate TargetRequest object, the following keys can be used to read response tokens and Analytics for Target (A4T) info from the data payload, if available in the Target response.

* responseTokens (Response tokens)
* analytics.payload (A4T payload)
* clickmetric.analytics.payload (Click tracking A4T payload)

### Android Java

* `targetRequestList`: A list of `TargetRequest` objects for various mbox locations.
* `parameters`: A `TargetParameters` object configured for the retrieve location request.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void retrieveLocationContent(final List<TargetRequest> targetRequestList, final TargetParameters parameters)
```

#### Example

```java
// define parameters for first request
Map<String, String> mboxParameters1 = new HashMap<>();
mboxParameters1.put("status", "platinum");

TargetParameters parameters1 = new TargetParameters.Builder().parameters(mboxParameters1).build();

TargetRequest request1 = new TargetRequest("mboxName1", parameters1, "defaultContent1",
                                            new AdobeCallback<String>() {
                                                @Override
                                                public void call(String value) {
                                                    // do something with target content.
                                                }
                                            });

// define parameters for second request
Map<String, String> mboxParameters2 = new HashMap<>();
mboxParameters2.put("userType", "paid");

List<String> purchasedIds = new ArrayList<String>();
purchasedIds.add("34");
purchasedIds.add("125");
TargetOrder targetOrder = new TargetOrder("ADCKKIM", 344.30, purchasedIds);

TargetProduct targetProduct = new TargetProduct("24D3412", "Books");

TargetParameters parameters2 = new TargetParameters.Builder()
                               .parameters(mboxParameters2)
                               .product(targetProduct)
                               .order(targetOrder)
                               .build();

TargetRequest request2 = new TargetRequest("mboxName2", parameters2, "defaultContent2",
                                            new AdobeTargetDetailedCallback() {
                                                @Override
                                                public void call(final String content, final Map<String, Object> data) {
                                                    if (content != null && !content.isEmpty()) {
                                                        // do something with the target content.
                                                    }

                                                    // Read the data Map containing one or more of response tokens, analytics payload 
                                                    // and click metric analytics payload, if available
                                                    if (data != null && !data.isEmpty()) {

                                                        Map<String, Object> responseTokens = data.containsKey("responseTokens") ? 
                                                                                            (Map<String, Object>) data.get("responseTokens") : 
                                                                                            null;

                                                        Map<String, String> analyticsPayload = data.containsKey("analytics.payload") ? 
                                                                                              (Map<String, String>) data.get("analytics.payload") : 
                                                                                              null;

                                                        Map<String, String> clickMetricAnalyticsPayload = data.containsKey("clickmetric.analytics.payload") ? 
                                                                                                          (Map<String, String>) data.get("clickmetric.analytics.payload") : 
                                                                                                          null;

                                                        ...
                                                    }
                                                }

                                                @Overrides
                                                void fail(final AdobeError error) {
                                                    // take appropriate action upon error.
                                                }
                                            });

// Creating Array of Request Objects
List<TargetRequest> locationRequests = new ArrayList<>();
locationRequests.add(request1);
locationRequests.add(request2);

 // Define the profile parameters map.
Map<String, String> profileParameters1 = new HashMap<>();
profileParameters1.put("ageGroup", "20-32");

TargetParameters parameters = new TargetParameters.Builder().profileParameters(profileParameters1).build();

// Call the targetRetrieveLocationContent API.
Target.retrieveLocationContent(locationRequests, parameters);
```

### iOS Swift

* `requestArray`: An array of `TargetRequest` objects to retrieve content.
* `targetParameters`: A `TargetParameters` object containing parameters for all locations in the requests array.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func retrieveLocationContent(_ requestArray: [TargetRequest], with targetParameters: TargetParameters? = nil)
```

#### Example

```swift
let TargetParameters1 = TargetParameters(
    parameters: ["status": "platinum"],
    profileParameters: ["age": "20"],
    order: TargetOrder(id: "ADCKKIM", total: 344.30, purchasedProductIds: ["34", "125"]),
    product: TargetProduct(productId: "24D3412", categoryId: "Books")
)

let TargetParameters2 = TargetParameters(
    parameters: ["userType": "Paid"],
    profileParameters: nil,
    order: TargetOrder(id: "ADCKKIM", total: 344.30, purchasedProductIds: ["id1", "id2"]),
    product: TargetProduct(productId: "764334", categoryId: "Online")
)

let globalTargetParameters = TargetParameters(
    parameters: ["status": "progressive"],
    profileParameters: ["age": "20-32"],
    order: TargetOrder(id: "ADCKKBC", total: 400.50, purchasedProductIds: ["34", "125"]),
    product: TargetProduct(productId: "24D334", categoryId: "Stationary")
)

let request1 = TargetRequest(mboxName: "logo", defaultContent: "BlueWhale", targetParameters: TargetParameters1) { content in
    if let content = content {
        // do something with the target content.
    }
}
let request2 = TargetRequest(mboxName: "logo", defaultContent: "red", targetParameters: TargetParameters2) { content, data in
        if let content = content {
        // do something with the target content.
    }

    // Read the data dictionary containing one or more of response tokens, analytics payload and click-tracking analytics payload, if available.
    if let data = data {
        let responseTokens = data["responseTokens"] as? [String: Any] ?? [:]

        let analyticsPayload = data["analytics.payload"] as? [String: String] ?? [:]

        let clickMetricAnalyticsPayload = data["clickmetric.analytics.payload"] as? [String: String] ?? [:]
        ...
    }
}
Target.retrieveLocationContent([request1, request2], with: globalTargetParameters)
```

### iOS Objective-C

* `requests`: An array of `TargetRequest` objects to retrieve content.
* `parameters`: An `AEPTargetParameters` object containing parameters for all locations in the requests array.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) retrieveLocationContent: (nonnull NSArray<AEPTargetRequestObject*>*) requests withParameters: (nullable AEPTargetParameters*) parameters
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

AEPTargetRequestObject *request1 = [[AEPTargetRequestObject alloc] initWithMboxName: @"logo" defaultContent: @"BlueWhale" targetParameters: targetParameters1 contentCallback:^(NSString * _Nullable content) {
    // do something with the received content
    NSString *targetContent = content ?: @"";
}];
AEPTargetRequestObject *request2 = [[AEPTargetRequestObject alloc] initWithMboxName: @"logo" defaultContent: @"red" targetParameters: targetParameters2 contentWithDataCallback:^(NSString * _Nullable content, NSDictionary<NSString *,id> * _Nullable data) {
    // do something with the target content.
    NSString *targetContent = content ?: @"";

    // Read the data dictionary containing one or more of response tokens, analytics payload and click-tracking analytics payload, if available.      
    if ([data count] > 0) {
        if ([data objectForKey:@"responseTokens"]) {
            // read response tokens
        }

        if ([data objectForKey:@"analytics.payload"]) {
          // read analytics payload
        }

        if ([data objectForKey:@"clickmetric.analytics.payload"]) {
          // read click-tracking analytics payload
        }
    }   
}];

// Create request object array
NSArray *requestArray = @[request1,request2];

// Creating Target parameters
NSDictionary *mboxParameters = @{@"status":@"progressive"};
NSDictionary *profileParameters = @{@"age":@"20-32"};
AEPTargetProduct *product = [[AEPTargetProduct alloc] initWithProductId:@"24D334" categoryId:@"Stationary"];
AEPTargetOrder *order = [[AEPTargetOrder alloc] initWithId:@"ADCKKBC" total:[@(400.50) doubleValue] purchasedProductIds:@[@"34", @"125"]];

AEPTargetParameters *targetParameters = [[AEPTargetParameters alloc] initWithParameters:mboxParameters
                                                                      profileParameters:profileParameters
                                                                                  order:order
                                                                                product:product];
[AEPMobileTarget retrieveLocationContent: requestArray withParameters: targetParameters];
```

\<!--- React Native

\<Tabs query="platform=react-native&api=retrieve-location-content"/\> ---\>

## setPreviewRestartDeepLink

This API sets a specific location in the app to be displayed when preview mode selections have been confirmed.

### Android Java

* `deeplink`: A URL that contains the preview restart deeplink.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void setPreviewRestartDeepLink(final Uri deepLink)
```

#### Example

```java
Target.setPreviewRestartDeepLink("myapp://HomePage");
```

### iOS Swift

* `deeplink`: A URL that contains the preview restart deeplink.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func setPreviewRestartDeepLink(_ deeplink: URL)
```

#### Example

```swift
if let url = URL(string: "myapp://HomePage") {
    Target.setPreviewRestartDeepLink(url)
}
```

### iOS Objective-C

* `deeplink`: A URL that contains the preview restart deeplink.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) setPreviewRestartDeeplink: (nonnull NSURL*) deeplink
```

#### Example

```objc
[AEPMobileTarget setPreviewRestartDeepLink:@"myapp://HomePage"];
```

\<!--- React Native

\<Tabs query="platform=react-native&api=set-preview-restart-deep-link"/\> ---\>

## setSessionId

This API sets the Target session identifier.

The provided session ID is persisted in the SDK for a period defined by `target.sessionTimeout` configuration setting. If the provided session ID is nil/null or empty, or if the privacy status is opted out, the SDK will remove the session ID value from the persistence.

This ID is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall, upon privacy status update to opted out, or when the resetExperience API is used.

### Android Java

* `sessionId`: A string that contains the Target session identifier to be set in the SDK.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void setSessionId(final String sessionId)
```

#### Example

```java
Target.setSessionId("3f24b997-ea74-420c-81f8-96a8b92c3961");
```

### iOS Swift

* `id`: A string that contains the Target session identifier to be set in the SDK.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func setSessionId(_ id: String?)
```

#### Example

```swift
Target.setSessionId("3f24b997-ea74-420c-81f8-96a8b92c3961")
```

### iOS Objective-C

* `id`: A string that contains the Target session identifier to be set in the SDK.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) setSessionId: (nullable NSString*) id
```

#### Example

```objc
[AEPMobileTarget setSessionId:@"3f24b997-ea74-420c-81f8-96a8b92c3961"]
```

## setThirdPartyId

This API sets the custom visitor ID for Target. This ID is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall or when the resetExperience API is used.

### Android Java

* `thirdPartyId`: A string that contains the custom visitor ID to be set in Target.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void setThirdPartyId(final String thirdPartyId)
```

#### Example

```java
Target.setThirdPartyId("third-party-id");
```

### iOS Swift

* `id`: A string that contains the custom visitor ID to be set in Target.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func setThirdPartyId(_ id: String)
```

#### Example

```swift
Target.setThirdPartyId("third-party-id")
```

### iOS Objective-C

* `id`: A string that contains the custom visitor ID to be set in Target.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) setThirdPartyId: (nullable NSString*) thirdPartyId
```

#### Example

```objc
[AEPMobileTarget setThirdPartyId:@"third-party-id"]
```

\<!--- React Native

\<Tabs query="platform=react-native&api=set-third-party-id"/\> ---\>

## setTntId

This API sets the Target user identifier.

The provided tnt ID is persisted in the SDK and attached to subsequent Target requests. It is used to derive the edge host value in the SDK, which is also persisted and used in future Target requests. If the provided tnt ID is nil/null or empty, or if the privacy status is opted out, the SDK will remove the tnt ID and edge host values from the persistence.

This ID is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall, upon privacy status update to opted out, or when the `resetExperience` API is used.

### Android Java

* `tntId`: A string that contains the Target user identifier to be set in the SDK.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void setTntId(final String tntId)
```

#### Example

```java
Target.setTntId("f741a5d5-09c0-4931-bf53-b9e568c5f782.35_0");
```

### iOS Swift

* `id`: A string that contains the Target user identifier to be set in the SDK.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func setTntId(_ id: String?)
```

#### Example

```swift
Target.setTntId("f741a5d5-09c0-4931-bf53-b9e568c5f782.35_0")
```

### iOS Objective-C

* `id`: A string that contains the Target user identifier to be set in the SDK.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) setTntId: (nullable NSString*) id
```

#### Example

```objc
[AEPMobileTarget setTntId:@"f741a5d5-09c0-4931-bf53-b9e568c5f782.35_0"]
```

## Visual preview

Target visual preview mode allows you to easily perform end-to-end QA activities by enrolling and previewing these activities on your device. This mode does not require a specialized testing set up. To get started, set up a URL scheme and generate the preview links.

### Android

On Android, when the application is launched as a result of a deep link, the Mobile Core's [collectLaunchInfo](../../home/base/mobile-core/api-reference.md#collectlaunchinfo) API is internally invoked, and the Target activity and deep link information is extracted from the Intent extras.

<InlineAlert variant="info" slots="text"/>

The SDK can only collect information from the launching Activity if [`setApplication`](../../home/base/mobile-core/api-reference.md#setapplication) API has been called. Setting the Application is only necessary on an Activity that is also an entry point for your application. However, setting the Application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your Application. We recommend that you call `setApplication` API in each of your Activities.

To enter the visual preview mode, use the Mobile Core's [collectLaunchInfo](../../home/base/mobile-core/api-reference.md#collectlaunchinfo) API to enable the mode, and select the red floating button that appears on the app screen.

### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```swift
    MobileCore.collectLaunchInfo(["adb_deeplink" : "com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"])
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```objectivec
 [AEPMobileCore collectLaunchInfo:@{@"adb_deeplink" : @"com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"}];
```

## Public classes

The following is a list of all the public classes available when using the Adobe Target extension.

### Target request

#### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

```java
public class TargetRequest extends TargetObject {

    /**
     * Instantiate a TargetRequest object
     * @param mboxName String mbox name for this request
     * @param targetParameters TargetParameters for this request
     * @param defaultContent String default content for this request
     * @param contentCallback AdobeCallback<String> which will get called with Target mbox content
     */
    public TargetRequest(final String mboxName,
                         final TargetParameters targetParameters,
                         final String defaultContent,
                         final AdobeCallback<String> contentCallback);

    /**
    * Instantiate a TargetRequest object.
    *
    * @param mboxName String mbox name for this request.
    * @param targetParameters TargetParameters for this request.
    * @param defaultContent String default content for this request.
    * @param contentWithDataCallback AdobeTargetDetailedCallback which will get called with Target mbox content and other optional data such as Target response tokens, analytics payload, click metric analytics payload if available.
    */
    public TargetRequest(final String mboxName, 
                         final TargetParameters targetParameters, 
                         final String defaultContent,
                         final AdobeTargetDetailedCallback contentWithDataCallback);
}
```

#### iOS Swift

The following example shows how to create an instance of a TargetRequest object that might be used to make a batch request to the configured Target server to fetch content for mbox locations.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
@objc(AEPTargetRequestObject)
public class TargetRequest: NSObject, Codable {
    @objc public let name: String
    @objc public let defaultContent: String
    @objc public let targetParameters: TargetParameters?
    @objc let responsePairId: String
    @objc var contentCallback: ((String?) -> Void)?

    /// Instantiate a `TargetRequest` object
    /// - Parameters:
    ///   - name: `String` mbox name for this request
    ///   - defaultContent: `String` default content for this request
    ///   - targetParameters: `TargetParameters` for this request
    ///   - contentCallback: which will get called with target mbox content
    @objc public init(mboxName: String, defaultContent: String, targetParameters: TargetParameters? = nil, contentCallback: ((String?) -> Void)? = nil) {
        name = mboxName
        self.defaultContent = defaultContent
        self.targetParameters = targetParameters
        self.contentCallback = contentCallback
        contentWithDataCallback = nil
        responsePairId = UUID().uuidString
    }

    /// Instantiate a `TargetRequest` object
    /// - Parameters:
    ///   - name: `String` mbox name for this request
    ///   - defaultContent: `String` default content for this request
    ///   - targetParameters: `TargetParameters` for this request
    ///   - contentWithDataCallback: which will get called with target mbox content, and an optional dictionary containing one or more of response tokens, analytics payload, and click metric analytics payload, if available.
    @objc public init(mboxName: String, defaultContent: String, targetParameters: TargetParameters? = nil, contentWithDataCallback: ((String?, [String: Any]?) -> Void)? = nil) {
        name = mboxName
        self.defaultContent = defaultContent
        self.targetParameters = targetParameters
        self.contentWithDataCallback = contentWithDataCallback
        contentCallback = nil
        responsePairId = UUID().uuidString
    }
}
```

#### Example

```swift
let request1 = TargetRequest(mboxName: "mboxName", defaultContent: "default content", targetParameters: nil, contentCallback: { content in
    print(content ?? "")
})

let request2 = TargetRequest(mboxName: "mboxName", defaultContent: "default content", targetParameters: nil, contentwithDataCallback: { content, data in
    print(content ?? "")

  if let data = data {
      // read response tokens
      let responseTokens = data["responseTokens"] as? [String: String] ?? [:]

      // read analytics payload
      let analyticsPayload = data["analytics.payload"] as? [String: String] ?? [:]

      // read click-tracking analytics payload
      let clickMetricAnalyticsPayload = data["clickmetric.analytics.payload"] as? [String: String] ?? [:]
  }
})
```

#### iOS Objective-C

The following example shows how to create an instance of a TargetRequest object that might be used to make a batch request to the configured Target server to fetch content for mbox locations.

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```objc
AEPTargetRequestObject *request1 = [[AEPTargetRequestObject alloc] initWithMboxName:@"mboxName" defaultContent:@"defaultContent" targetParameters:nil contentCallback:^(NSString * _Nullable content) {
      NSLog(@"%@", content ?: @"");
}];

AEPTargetRequestObject *request2 = [[AEPTargetRequestObject alloc] initWithMboxName: @"logo" defaultContent: @"red" targetParameters: targetParameters2 contentWithDataCallback:^(NSString * _Nullable content, NSDictionary<NSString *,id> * _Nullable data) {
    NSLog(@"%@", content ?: @"");

    if ([data count] > 0) {
        if ([data objectForKey:@"responseTokens"]) {
            // read response tokens
        }

        if ([data objectForKey:@"analytics.payload"]) {
          // read analytics payload
        }

        if ([data objectForKey:@"clickmetric.analytics.payload"]) {
          // read click-tracking analytics payload
        }
    }   
}];
```

\<!--- React Native

\<Tabs query="platform=react-native&api=target-request"/\> ---\>

### Target prefetch

This class contains the name of the Target location/mbox and target parameters to be used in a prefetch request.

#### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

```java
public class TargetPrefetch extends TargetObject {

    /**
     * Instantiate a TargetPrefetch object
     * @param mboxName String mbox name for this prefetch request
     * @param targetParameters TargetParameters for this prefetch request
     */
     public TargetPrefetch(final String mboxName, final TargetParameters targetParameters)
}
```

#### iOS Swift

The following example can be used to create an instance of a TargetPrefetch object that might be used to make a prefetch request to the configured Target server to prefetch content for mbox locations.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
/// `TargetPrefetch` class, used for specifying a mbox location.
@objc(AEPTargetPrefetchObject)
public class TargetPrefetch: NSObject, Codable {
    @objc public let name: String
    @objc public let targetParameters: TargetParameters?

    /// Instantiate a `TargetPrefetch` object
    /// - Parameters:
    ///   - name: `String` mbox name for this prefetch
    ///   - targetParameters: `TargetParameters` for this prefetch
    @objc public init(name: String, targetParameters: TargetParameters? = nil) {
        self.name = name
        self.targetParameters = targetParameters
    }
}
```

#### Example
```swift
let prefetch = TargetPrefetch(name: "mboxName", targetParameters: nil)
```

#### iOS Objective-C

The following example can be used to create an instance of a TargetPrefetch object that might be used to make a prefetch request to the configured Target server to prefetch content for mbox locations.

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```objc
AEPTargetPrefetchObject *prefetch = [[AEPTargetPrefetchObject alloc] initWithName:@"mboxName" targetParameters:nil];
```

\<!--- React Native

\<Tabs query="platform=react-native&api=target-prefetch"/\> ---\>

### Target parameters

This class may optionally contain the mbox parameters dictionary, the profile parameters dictionary, the TargetOrder object, as well as the TargetProduct object.

#### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

```java
public class TargetParameters {

    private TargetParameters() {}

    /**
    * Builder used to construct a TargetParameters object
    */
    public static class Builder {
        private Map<String, String> parameters;
        private Map<String, String> profileParameters;
        private TargetProduct product;
        private TargetOrder order;

        /**
         * Create a TargetParameters object Builder
         */
        public Builder() {}

        /**
         * Create a TargetParameters object Builder
         *
         * @param parameters mbox parameters for the built TargetParameters
         */
        public Builder(final Map<String, String> parameters);

        /**
         * Set mbox parameters on the built TargetParameters
         *
         * @param parameters mbox parameters map
         * @return this builder
         */
        public Builder parameters(final Map<String, String> parameters);

        /**
         * Set profile parameters on the built TargetParameters
         *
         * @param profileParameters profile parameters map
         * @return this builder
         */
        public Builder profileParameters(final Map<String, String> profileParameters);

        /**
         * Set product parameters on the built TargetParameters
         *
         * @param product product parameters
         * @return this builder
         */
        public Builder product(final TargetProduct product);

        /**
         * Set order parameters on the built TargetParameters
         *
         * @param order order parameters
         * @return this builder
         */
        public Builder order(final TargetOrder order);

        /**
         * Build the TargetParameters object
         *
         * @return the built TargetParameters object
         */
        public TargetParameters build();
    }
}
```

#### iOS Swift

Examples for creating instances of TargetParameters can be seen in the [Target overview](index.md#target-parameters).

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

```swift
/// Target parameter class, used for specifying custom parameters to be sent in Target requests,
/// such as location (former mbox) parameters, profile parameters, order/product parameters.
@objc(AEPTargetParameters)
public class TargetParameters: NSObject, Codable {
    @objc public let parameters: [String: String]?
    @objc public let profileParameters: [String: String]?
    @objc public let order: TargetOrder?
    @objc public let product: TargetProduct?

    /// Initialize a `TargetParameters` with the mbox parameters, the profile parameters, the order parameters and the product parameters.
    /// - Parameters:
    ///   - parameters: the mbox parameters
    ///   - profileParameters: the profile parameters
    ///   - order: the order parameters
    ///   - product: the product parameters
    @objc public init(parameters: [String: String]? = nil, profileParameters: [String: String]? = nil, order: TargetOrder? = nil, product: TargetProduct? = nil) {
        self.parameters = parameters
        self.profileParameters = profileParameters
        self.order = order
        self.product = product
    }
}
```

### Target order

This class contains an orderId, an order total, and an array for purchasedProductIds.

#### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

```java
public class TargetOrder {

    /**
     * Initialize a TargetOrder with an order id, order total and a list of purchasedProductIds
     *
     * @param id String order id
     * @param total double order total amount
     * @param purchasedProductIds a list of purchased product ids
     */
    public TargetOrder(final String id, final double total, final List<String> purchasedProductIds);
    /**
     * Get the order id
     *
     * @return order id
     */
    public String getId();

    /**
     * Get the order total
     *
     * @return order total
     */
    public double getTotal();

    /**
     * Get the order purchasedProductIds
     *
     * @return a list of this order's purchased product ids
     */
    public List<String> getPurchasedProductIds();
}
```

#### iOS Swift

Examples for creating instances of TargetOrder can be seen in the [Target overview](index.md#arget-order-class).

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

```swift
/// Class for specifying Target order parameters
@objc(AEPTargetOrder)
public class TargetOrder: NSObject, Codable {
    @objc public let orderId: String
    @objc public let total: Double
    @objc public let purchasedProductIds: [String]?

    /// Initialize a `TargetOrder` with an order `id`, order `total`  and a list of `purchasedProductIds`
    /// - Parameters:
    ///   - id: `String` order id
    ///   - total: `Double` order total amount
    ///   - purchasedProductIds: a list of purchased product ids
    @objc public init(id: String, total: Double = 0, purchasedProductIds: [String]? = nil) {
        orderId = id
        self.total = total
        self.purchasedProductIds = purchasedProductIds
    }
}
```


\<!--- React Native

\<Tabs query="platform=react-native&api=target-order"/\> ---\>

### Target product

This class contains the productId and categoryId.

#### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

```java
public class TargetProduct {

    /**
     * Initialize a TargetProduct with a product id and a productCategoryId categoryId
     *
     * @param id String product id
     * @param categoryId String product category id
     */
    public TargetProduct(final String id, final String categoryId);

    /**
     * Get the product id
     *
     * @return product id
     */
    public String getId();

    /**
     * Get the product categoryId
     *
     * @return product category id
     */
    public String getCategoryId();
}
```

#### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

Examples for creating instances of TargetProduct can be seen in the [Target overview](index.md#target-product-class)

#### Syntax

```swift
/// Class for specifying Target product parameters
@objc(AEPTargetProduct)
public class TargetProduct: NSObject, Codable {
    @objc public let productId: String
    @objc public let categoryId: String?

    /// Initialize a `TargetProduct` with a product  id and a productCategoryId.
    /// - Parameters:
    ///   - productId: product id
    ///   - categoryId: product category id
    @objc public init(productId: String, categoryId: String? = nil) {
        self.productId = productId
        self.categoryId = categoryId
    }
}
```

\<!--- React Native

\<Tabs query="platform=react-native&api=target-product"/\> ---\>

### Target callback

#### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

```java
public interface AdobeTargetDetailedCallback {

    /**
     * Callback function to pass the mbox content and other mbox payload values.
     *
     * @param content {@code String} mox content
     * @param data A {@code Map<String, Object>} of mbox payload values. It will be null if neither response tokens nor analytics payload is available.
     */
    void call(final String content, final Map<String, Object> data);

    /**
     * Callback function for notifying about the internal error in getting mbox details.
     *
     * @param error {@link AdobeError} represents the internal error occurred.
     */
    void fail(final AdobeError error);
}
```

