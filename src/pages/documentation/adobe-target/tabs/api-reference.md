<Variant platform="android" api="clear-prefetch-cache" repeat="5"/>

#### Java

**Syntax**

```java
public static void clearPrefetchCache()
```

**Example**

```java
Target.clearPrefetchCache();
```

<Variant platform="ios" api="clear-prefetch-cache" repeat="7"/>

**Syntax**

```swift
static func clearPrefetchCache()
```

**Example**

**Swift**

```swift
Target.clearPrefetchCache()
```

**Objective-C**

```objc
[AEPMobileTarget clearPrefetchCache];
```

<!--- <Variant platform="react-native" api="clear-prefetch-cache" repeat="5"/>

#### React Native

**Syntax**

```js
clearPrefetchCache();
```

**Example**

```js
ACPTarget.clearPrefetchCache();
``` --->

<Variant platform="android" api="clicked-location" repeat="6"/>

#### Java

**Syntax**

```java
public static void clickedLocation(final String mboxName, final TargetParameters parameters)
```

* _mboxName_ is a String that contains the mbox location for which the click notification will be sent to Target.
* _parameters_ is the configured `TargetParameters` for the request.

**Example**

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

<Variant platform="ios" api="clicked-location" repeat="8"/>

**Syntax**

```swift
static func clickedLocation(_ name: String, targetParameters: TargetParameters?)
```

* _name_ : a `String` that contains the mbox location for which the click notification will be sent to Target.
* _targetParameters_ : the configured `TargetParameters` for the request.

**Example**

**Swift**

```swift
Target.clickedLocation("aep-loc-1", targetParameters: TargetParameters(parameters: ["mbox_parameter_key": "mbox_parameter_value"], profileParameters: ["name": "Smith"], order: TargetOrder(id: "id1", total: 1.0, purchasedProductIds: ["ppId1"]), product: TargetProduct(productId: "pId1", categoryId: "cId1")))
```

**Objective-C**

```objc
AEPTargetOrder *order = [[AEPTargetOrder alloc] initWithId:@"id1" total:1.0 purchasedProductIds:@[@"ppId1"]];
AEPTargetProduct *product =[[AEPTargetProduct alloc] initWithProductId:@"pId1" categoryId:@"cId1"];
AEPTargetParameters * targetParams = [[AEPTargetParameters alloc] initWithParameters:@{@"mbox_parameter_key":@"mbox_parameter_value"} profileParameters:@{@"name":@"Smith"} order:order product:product];
[AEPMobileTarget clickedLocation:@"aep-loc-1" withTargetParameters:targetParams];
```

<!--- <Variant platform="react-native" api="clicked-location" repeat="6"/>

#### JavaScript

**Syntax**

```javascript
locationClickedWithName(name: string, parameters?: ACPTargetParameters)
```

* _name_ is a string that contains the mbox location for which the click notification will be sent to Target.
* _parameters_ is the configured `ACPTargetParameters` for the request.

**Example**

```javascript
// Mbox parameters
var mboxParameters = {"membership": "prime"};

// Product parameters
var productParameters = new ACPTargetProduct("CEDFJC", "Electronics");

// Order parameters
var orderParameters = new ACPTargetOrder("NJJICK", 650, ["81","123","190"]);

// Profile parameters
var profileParameters = {"ageGroup": "20-32"};

// Create Target parameters
var product = new ACPTargetProduct("24D334", "Stationary");
var order = new ACPTargetOrder("ADCKKBC", 400.50, ["34","125"]);
var targetParameters = new ACPTargetParameters(null, null, product, order);

ACPTarget.locationClickedWithName("cartLocation", targetParameters);
``` --->

<Variant platform="android" api="displayed-locations" repeat="6"/>

#### Java

**Syntax**

```java
public static void displayedLocations(final List<String> mboxNames, final TargetParameters targetParameters)
```

* _mboxNames_ is a list of the mbox locations for which the display notification will be sent to Target.
* _targetParameters_ is the configured `TargetParameters` for the request.

**Example**

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

<Variant platform="ios" api="displayed-locations" repeat="8"/>

**Syntax**

```swift
static func displayedLocations(_ names: [String], targetParameters: TargetParameters?)
```

* _names_ : is an `array` of the mbox locations for which the display notification will be sent to Target.
* _targetParameters_ : is the configured `TargetParameters` for the request.

**Example**

**Swift**

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

**Objective-C**

```objc
AEPTargetOrder *order = [[AEPTargetOrder alloc] initWithId:@"ADCKKBC" total:400.50 purchasedProductIds:@[@"34", @"125"]];
AEPTargetProduct *product =[[AEPTargetProduct alloc] initWithProductId:@"24D334" categoryId:@"Stationary"];
AEPTargetParameters * targetParams = [[AEPTargetParameters alloc] initWithParameters:nil profileParameters:nil order:order product:product];
[AEPMobileTarget displayedLocations:@[@"mboxName1", @"mboxName2"] withTargetParameters:targetParams];
```

<!--- <Variant platform="react-native" api="displayed-locations" repeat="6"/>

#### JavaScript

**Syntax**

```javascript
locationsDisplayed(mboxNames: Array<string>, parameters?: ACPTargetParameters)
```

* _mboxNames_ is an Array of the mbox locations for which the display notification will be sent to Target.
* _targetParameters_ is the configured `ACPTargetParameters` for the request.

**Example**

```javascript
var product = new ACPTargetProduct("24D334", "Stationary");
var order = new ACPTargetOrder("ADCKKBC", 400.50, ["34", "125"]);
var targetParameters = new ACPTargetParameters(null, null, product, order);

ACPTarget.locationsDisplayed(["mboxName1", "mboxName2"], targetParameters);
``` --->

<Variant platform="android" api="execute-raw-request" repeat="6"/>

#### Java

**Syntax**

```java
public static void executeRawRequest(final Map<String, Object> request, final AdobeCallback<Map<String, Object>> callback)
```

* `request`: A map containing prefetch or execute request data in the Target v1 delivery API request format.
* `callback`: An AdobeCallback instance which will be called after the Target request is completed. The parameter in the callback will contain the response data if the request executed successfully, or it will contain null otherwise. 

**Example**

```java
final Map<String, Object> executeMbox1 = new HashMap<String, Object>() {
    {
        put("index", 0);
        put("name", "mbox1");
        put("parameters", new HashMap<String, String>() {
            {
                put("mbox_parameter_key1", "mbox_parameter_value1");
            }
        });
        put("profileParameters", new HashMap<String, String>() {
            {
                put("subscription", "premium");
            }
        });
        put("order", new HashMap<String, Object>() {
            {
                put("id", "id1");
                put("total", 100.34);
                put("purchasedProductIds", new ArrayList<String>() {
                    {
                        add("pId1");
                    }
                });
            }
        });
        put("product", new HashMap<String, String>() {
            {
                put("id", "pId1");
                put("categoryId", "cId1");
            }
        });
    }
};

final Map<String, Object> executeMbox2 = new HashMap<String, Object>() {
    {
        put("index", 1);
        put("name", "mbox2");
        put("parameters", new HashMap<String, String>() {
            {
                put("mbox_parameter_key2", "mbox_parameter_value2");
            }
        });
    }
};

final List<Map<String, Object>> executeMboxes = new ArrayList<>();
executeMboxes.add(executeMbox1);
executeMboxes.add(executeMbox2);

final Map<String, Object> request = new HashMap<String, Object>() {
    {
        put("execute", new HashMap<String, Object>() {
            {
                put("mboxes", executeMboxes);
            }
        });
    }
};

Target.executeRawRequest(request, response -> {
    System.out.println("Received Target raw response.");

    if (response == null) {
        System.out.println("Null Target response!");
        return;
    }

    // handle response
});
```

<Variant platform="android" api="extension-version" repeat="5"/>

#### Java

**Syntax**

```java
public String extensionVersion()
```

**Example**

```java
Target.extensionVersion();
```

<Variant platform="ios" api="extension-version" repeat="7"/>

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

**Swift**

```swift
let targetVersion = Target.extensionVersion
```

**Objective-C**

```objc
NSString *targetVersion = [AEPMobileTarget extensionVersion];
```

<!--- <Variant platform="react-native" api="extension-version" repeat="5"/>

#### JavaScript

**Syntax**

```javascript
extensionVersion(): Promise<string>
```

**Example**

```javascript
ACPTarget.extensionVersion().then(version => {
            // read Target extension version 
});
``` --->

<Variant platform="android" api="get-session-id" repeat="6"/>

#### Java

**Syntax**

```java
public static void getSessionId(final AdobeCallback<String> callback)
```

* _callback_ is invoked with the `sessionId` value, or `null` if there was an error retrieving it.

**Example**

```java
Target.getSessionId(new AdobeCallback<String>() {                    
    @Override
    public void call(String sessionId) {
                // read Target sessionId
    }
});
```

<Variant platform="ios" api="get-session-id" repeat="8"/>

**Syntax**

```swift
static func getThirdPartyId(_ completion: @escaping (String?, Error?) -> Void)
```

* _completion_ : invoked with the `sessionId` value, or `nil` if there was an error retrieving it.

**Example**

**Swift**

```swift
Target.getSessionId { (id, err) in
    // read Target sessionId
}
```

**Objective-C**

```objc
[AEPMobileTarget getSessionId:^(NSString *sessionId, NSError *error){
    // read Target sessionId
}];
```

<Variant platform="android" api="get-third-party-id" repeat="6"/>

#### Java

**Syntax**

```java
public static void getThirdPartyId(final AdobeCallback<String> callback)
```

* _callback_ is invoked with the `thirdPartyId` value. If no third-party ID was set, this value will be `null`.

**Example**

```java
Target.getThirdPartyId(new AdobeCallback<String>() {                    
    @Override
    public void call(String thirdPartyId) {
                // read Target thirdPartyId
    }
});
```

<Variant platform="ios" api="get-third-party-id" repeat="8"/>

**Syntax**

```swift
static func getThirdPartyId(_ completion: @escaping (String?, Error?) -> Void)
```

* _completion_ : invoked with the `thirdPartyId` value. If no `third-party` ID was set, this value will be `nil`.

**Example**

**Swift**

```swift
Target.getThirdPartyId { (id, err) in
    // read Target thirdPartyId
}
```

**Objective-C**

```objc
[AEPMobileTarget getThirdPartyId:^(NSString *thirdPartyID, NSError *error){
    // read Target thirdPartyId
}];
```

<!--- <Variant platform="react-native" api="get-third-party-id" repeat="6"/>

#### JavaScript

**Syntax**

```javascript
getThirdPartyId(): Promise<string>
```

* A _Promise_ object is returned and is resolved with the `thirdPartyId` value.

**Example**

```javascript
ACPTarget.getThirdPartyId().then(thirdPartyId => {
            // read Target thirdPartyId 
});
``` --->

<Variant platform="android" api="get-tnt-id" repeat="6"/>

#### Java

**Syntax**

```java
public static void getTntId(final AdobeCallback<String> callback)
```

* _callback_ is invoked with the `tntId` value. If no Target ID was set, this value will be `null`. 

**Example**

```java
Target.getTntId(new AdobeCallback<String>() {
    @Override
    public void call(String tntId) {
        // read target's tntid
    }
});
```

<Variant platform="ios" api="get-tnt-id" repeat="8"/>

**Syntax**

```swift
static func getTntId(_ completion: @escaping (String?, Error?) -> Void)
```

* _completion_ : invoked with the `tntId` value. If no Target ID was set, this value will be `nil`.

**Example**

**Swift**

```swift
Target.getTntId({ (id, err) in
    // read target's tntId        
})
```

**Objective-C**

```objc
[AEPMobileTarget getTntId:^(NSString *tntID, NSError *error){
    // read target's tntId 
}];
```

<!--- <Variant platform="react-native" api="get-tnt-id" repeat="6"/>

#### JavaScript

**Syntax**

```javascript
getTntId(): Promise<string>
```

* A _Promise_ object is returned and is resolved with the `thirdPartyId` value.

**Example**

```javascript
ACPTarget.getTntId().then(tntId => {
            // read target's tntId                         
});
``` --->

<Variant platform="android" api="prefetch-content" repeat="6"/>

#### Java

**Syntax**

```java
public static void prefetchContent(final List<TargetPrefetch> mboxPrefetchList, final TargetParameters parameters, final AdobeCallback<String> callback)
```

* _mboxPrefetchList_ is a list of `TargetPrefetch` objects for various mbox locations.
* _parameters_ is the configured `TargetParameters` for the prefetch request.
* If the prefetch is successful, _callback_ is invoked with a `null` value. If the prefetch is not successful, an error message is returned.

**Example**

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

<Variant platform="ios" api="prefetch-content" repeat="8"/>

**Syntax**

```swift
static func prefetchContent(_ prefetchArray: [TargetPrefetch], with targetParameters: TargetParameters? = nil, _ completion: ((Error?) -> Void)?)
```

* _prefetchArray_ - is an array of `TargetPrefetch` objects for various mbox locations.
* _targetParameters_ - is the configured `TargetParameters` for the prefetch request.
* If the prefetch is successful, `completion` is invoked with a nil value. If the prefetch is not successful, an error message is returned.

**Example**

**Swift**

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

**Objective-C**

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

<!--- <Variant platform="react-native" api="prefetch-content" repeat="6"/>

#### JavaScript

**Syntax**

```javascript
prefetchContent(prefetchObjectArray: Array<ACPTargetPrefetchObject>, parameters?: ACPTargetParameters): Promise<any>
```

* _prefetchObjectArray_ is an Array of `ACPTargetPrefetchObject` objects for various mbox locations.
* _parameters_ is the configured `ACPTargetParameters` for the prefetch request.
* A Promise object is returned and is resolved with true value or is rejected with the reason for the error.

**Example**

```javascript
var mboxParameters1 = {"status": "platinum"};
var profileParameters1 = {"age": "20"};
var product1 = new ACPTargetProduct("24D3412", "Books");
var order1 = new ACPTargetOrder("ADCKKIM", 344.30, ["34","125"]);
var targetParameters1 = new ACPTargetParameters(mboxParameters1, profileParameters1, product1, order1);

var mboxParameters2 = {"userType": "Paid"};
var product2 = new ACPTargetProduct("764334", "Online");
var order2 = new ACPTargetOrder("ADCKKIM", 344.30, ["id1","id2"]);
var targetParameters2 = new ACPTargetParameters(mboxParameters2, null, product2, order2);

// Creating Prefetch Objects
var prefetch1 = new ACPTargetPrefetchObject("logo", targetParameters1);
var prefetch2 = new ACPTargetPrefetchObject("buttonColor", targetParameters2);

// Creating prefetch Array
var prefetchList = [prefetch1, prefetch2];

// Creating Target parameters
var mboxParameters = {"status": "progressive"};
var profileParameters = {"age": "20-32"};
var product = new ACPTargetProduct("24D334", "Stationary");
var order = new ACPTargetOrder("ADCKKBC", 400.50, ["34","125"]);
var targetParameters = new ACPTargetParameters(mboxParameters, profileParameters, product, order);

// Target API Call
ACPTarget.prefetchContent(prefetchList, targetParameters).then(success => console.log(success)).catch(err => console.log(err));
``` --->

<Variant platform="android" api="register-extension" repeat="1"/>

This API has been deprecated from version 2.0.0. Instead, the extension should be registered by calling the `registerExtensions` API in Mobile Core. For more information, please read the [Mobile Core API guide](../../mobile-core/api-reference.md).

<Variant platform="ios" api="register-extension" repeat="1"/>

This API no longer exists in `Target`. Instead, the extension should be registered by calling the `registerExtensions` API in Mobile Core. Please see the updated SDK initialization steps at the [migrate to Swift tutorial](../migrate-to-swift.md#update-sdk-initialization).

<!--- <Variant platform="react-native" api="register-extension" repeat="1"/>

When using React Native, register the Target extension with Mobile Core in native code as shown on the Android and iOS tabs. --->

<Variant platform="android" api="reset-experience" repeat="5"/>

#### Java

**Syntax**

```java
public static void resetExperience()
```

**Example**

```java
Target.resetExperience();
```

<Variant platform="ios" api="reset-experience" repeat="7"/>

**Syntax**

```swift
static func resetExperience()
```

**Example**

**Swift**

```swift
Target.resetExperience()
```

**Objective-C**

```objc
[AEPMobileTarget resetExperience];
```

<!--- <Variant platform="react-native" api="reset-experience" repeat="5"/>

#### JavaScript

**Syntax**

```javascript
resetExperience()
```

**Example**

```javascript
ACPTarget.resetExperience();
``` --->

<Variant platform="android" api="retrieve-location-content" repeat="6"/>

#### Java

**Syntax**

```java
public static void retrieveLocationContent(final List<TargetRequest> targetRequestList, final TargetParameters parameters)
```

* _targetRequestList_ is a list of `TargetRequest` objects for various mbox locations.
* _parameters_ is the configured `TargetParameters` for the retrieve location request.

**Example**

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

                                                        Map<String, String> responseTokens = data.containsKey("responseTokens") ? 
                                                                                            (Map<String, String>) data.get("responseTokens") : 
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

<Variant platform="ios" api="retrieve-location-content" repeat="8"/>

**Syntax**

```swift
static func retrieveLocationContent(_ requestArray: [TargetRequest], with targetParameters: TargetParameters? = nil)
```

* _requestArray_ - an array of `TargetRequest` objects to retrieve content
* _targetParameters_ - a `TargetParameters` object containing parameters for all locations in the requests array

**Example**

**Swift**

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
        let responseTokens = data["responseTokens"] as? [String: String] ?? [:]

        let analyticsPayload = data["analytics.payload"] as? [String: String] ?? [:]

        let clickMetricAnalyticsPayload = data["clickmetric.analytics.payload"] as? [String: String] ?? [:]
        ...
    }
}
Target.retrieveLocationContent([request1, request2], with: globalTargetParameters)
```

**Objective-C**

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

<!--- <Variant platform="react-native" api="retrieve-location-content" repeat="6"/>

#### JavaScript

**Syntax**

```javascript
retrieveLocationContent(requests: Array<ACPTargetRequestObject>, parameters?: ACPTargetParameters)
```

* _requests_ is an Array of `ACPTargetRequestObject` objects for various mbox locations.
* _parameters_ is the configured `ACPTargetParameters` for the load request.

**Example**

```javascript
var mboxParameters1 = {"status": "platinum"};
var product1 = new ACPTargetProduct("24D3412", "Books");
var order1 = new ACPTargetOrder("ADCKKIM", 344.30, ["a","b"]);

var mboxParameters2 = {"userType": "Paid"};
var product2 = new ACPTargetProduct("764334", "Online");
var order2 = new ACPTargetOrder("4t4uxksa", 54.90, ["id1","id2"]);

var params1 = new ACPTargetParameters(mboxParameters1, null, product1, order1);
var request1 = new ACPTargetRequestObject("logo", params1, "BlueWhale", (error, content) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Target content:" + content);
      }
});

var params2 = new ACPTargetParameters(mboxParameters2, null, product2, order2);
var request2 = new ACPTargetRequestObject("logo", params1, "red", (error, content) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Target content:" + content);
      }
});

// Create request object array
let requestArray = [request1, request2]

// Creating Target parameters
var mboxParameters = {"status": "progressive"};
var profileParameters = {"age": "20-32"};
var product = new ACPTargetProduct("24D334", "Stationary");
var order = new ACPTargetOrder("ADCKKBC", 400.50, ["34","125"]);
var targetParameters = new ACPTargetParameters(mboxParameters, profileParameters, product, order);

// Target API Call
ACPTarget.retrieveLocationContent(requestArray, targetParameters);
``` --->

<Variant platform="android" api="send-raw-notifications" repeat="5"/>

#### Java

**Syntax**

```java
public static void sendRawNotifications(final Map<String, Object> request)
```

* `request`: A map containing notifications data in the Target v1 delivery API request format.

**Example**

```java
final List<Map<String, Object>> notifications = new ArrayList<>();
final Map<String, Object> notification = new HashMap<String, Object>() {
    {
        put("id", "0");
        put("timestamp", (long)(System.currentTimeMillis()));
        put("type", "click");
        put("mbox", new HashMap<String, Object>() {
            {
                put("name", "mbox1");
            }
        });
        put("tokens", new ArrayList<String>() {
            {
                add("someClickToken");
            }
        });
        put("parameters", new HashMap<String, Object>() {
            {
                put("mbox_parameter_key3", "mbox_parameter_value3");
            }
        });
    }
};
notifications.add(notification);
final Map<String, Object> request = new HashMap<>();
request.put("notifications", notifications);
Target.sendRawNotifications(request);
```



<Variant platform="android" api="set-preview-restart-deep-link" repeat="6"/>

#### Java

**Syntax**

```java
public static void setPreviewRestartDeepLink(final Uri deepLink)
```

* _deeplink_ is a URI that contains the preview restart deeplink.

**Example**

```java
Target.setPreviewRestartDeepLink("myapp://HomePage");
```

<Variant platform="ios" api="set-preview-restart-deep-link" repeat="8"/>

**Syntax**

```swift
static func setPreviewRestartDeepLink(_ deeplink: URL)
```

* _deeplink_ : a `URL` that contains the preview restart deeplink.

**Example**

**Swift**

```swift
if let url = URL(string: "myapp://HomePage") {
    Target.setPreviewRestartDeepLink(url)
}
```

**Objective-C**

```objc
[AEPMobileTarget setPreviewRestartDeepLink:@"myapp://HomePage"];
```

<!--- <Variant platform="react-native" api="set-preview-restart-deep-link" repeat="6"/>

#### JavaScript

**Syntax**

```javascript
setPreviewRestartDeeplink(deepLink: string)
```

* _deepLink_ is a string that contains the preview restart deeplink.

**Example**

```javascript
ACPTarget.setPreviewRestartDeeplink("myapp://HomePage");
``` --->


<Variant platform="android" api="set-session-id" repeat="6"/>

#### Java

**Syntax**

```java
public static void setSessionId(final String sessionId)
```

* _sessionId_ is a String that contains the Target session identifier to be set in the SDK.

**Example**

```java
Target.setSessionId("3f24b997-ea74-420c-81f8-96a8b92c3961");
```

<Variant platform="ios" api="set-session-id" repeat="8"/>

**Syntax**

```swift
static func setSessionId(_ id: String?)
```

* _id_ : a `String` that contains the Target session identifier to be set in the SDK.

**Example**

**Swift**

```swift
Target.setSessionId("3f24b997-ea74-420c-81f8-96a8b92c3961")
```

**Objective-C**

```objc
[AEPMobileTarget setSessionId:@"3f24b997-ea74-420c-81f8-96a8b92c3961"]
```

<Variant platform="android" api="set-third-party-id" repeat="6"/>

#### Java

**Syntax**

```java
public static void setThirdPartyId(final String thirdPartyId)
```

* _thirdPartyId_ is a String that contains the custom visitor ID to be set in Target.

**Example**

```java
Target.setThirdPartyId("third-party-id");
```

<Variant platform="ios" api="set-third-party-id" repeat="8"/>

**Syntax**

```swift
static func setThirdPartyId(_ id: String)
```

* _id_ : a `String` that contains the custom visitor ID to be set in Target.

**Example**

**Swift**

```swift
Target.setThirdPartyId("third-party-id")
```

**Objective-C**

```objc
[AEPMobileTarget setThirdPartyId:@"third-party-id"]
```

<!--- <Variant platform="react-native" api="set-third-party-id" repeat="6"/>

#### JavaScript

**Syntax**

```javascript
setThirdPartyId(thirdPartyId: string)
```

* _thirdPartyId_ is a string that contains the custom visitor ID to be set in Target.

**Example**

```javascript
ACPTarget.setThirdPartyId("third-party-id");
``` --->

<Variant platform="android" api="set-tnt-id" repeat="6"/>

#### Java

**Syntax**

```java
public static void setTntId(final String tntId)
```

* _tntId_ is a String that contains the Target user identifier to be set in the SDK.

**Example**

```java
Target.setTntId("f741a5d5-09c0-4931-bf53-b9e568c5f782.35_0");
```

<Variant platform="ios" api="set-tnt-id" repeat="8"/>

**Syntax**

```swift
static func setTntId(_ id: String?)
```

* _id_ : a `String` that contains the Target user identifier to be set in the SDK.

**Example**

**Swift**

```swift
Target.setTntId("f741a5d5-09c0-4931-bf53-b9e568c5f782.35_0")
```

**Objective-C**

```objc
[AEPMobileTarget setTntId:@"f741a5d5-09c0-4931-bf53-b9e568c5f782.35_0"]
```

<Variant platform="android" api="visual-preview" repeat="2"/>

On Android, when the application is launched as a result of a deep link, the `collectLaunchInfo` API is internally invoked, and the Target activity and deep link information is extracted from the Intent extras.

<InlineNestedAlert variant="info" header="false" iconPosition="left">

The SDK can only collect information from the launching Activity if [`setApplication`](../mobile-core/api-reference.md#application-reference-android-only) has been called. Setting the Application is only necessary on an Activity that is also an entry point for your application. However, setting the Application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your Application. We recommend that you call `setApplication` in each of your Activities.

</InlineNestedAlert>

<Variant platform="ios" api="visual-preview" repeat="11"/>

To enter the visual preview mode, use the `collectLaunchInfo` API to enable the mode, and select the red floating button that appears on the app screen.

**Swift**

**Syntax**

```swift
public static func collectLaunchInfo(_ userInfo: [String: Any])
```

**Example**

```swift
    MobileCore.collectLaunchInfo(["adb_deeplink" : "com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"])
```

**Objective-C**

**Syntax**

```objectivec
+ (void)collectLaunchInfo:(nonnull NSDictionary<NSString*, id>*) userInfo;
```

**Example**

```objectivec
 [AEPMobileCore collectLaunchInfo:@{@"adb_deeplink" : @"com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"}];
```

<Variant platform="android" api="target-request" repeat="4"/>

#### TargetRequest

#### Java

**Syntax**

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

<Variant platform="ios" api="target-request" repeat="10"/>

#### TargetRequest

**Syntax**

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

**Example**

**Swift**

The following example shows how to create an instance of a TargetRequest object that might be used to make a batch request to the configured Target server to fetch content for mbox locations.

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

**Objective-C**

The following example shows how to create an instance of a TargetRequest object that might be used to make a batch request to the configured Target server to fetch content for mbox locations.

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

<!--- <Variant platform="react-native" api="target-request" repeat="5"/>

#### ACPTargetRequestObject

This class extends `ACPTargetPrefetchObject` by adding default content and a callback block that is invoked to return mbox content from Target.

#### JavaScript

**Syntax**

```javascript
class ACPTargetRequestObject extends ACPTargetPrefetchObject {
  defaultContent:   string;

  constructor(name: string, targetParameters: ACPTargetParameters, defaultContent: string) {
    super(name, targetParameters);
    this.defaultContent = defaultContent;
  }
}
``` --->

<Variant platform="android" api="target-prefetch" repeat="4"/>

#### TargetPrefetch

#### Java

**Syntax**

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

<Variant platform="ios" api="target-prefetch" repeat="11"/>

#### TargetPrefetch

This class contains the name of the Target location/mbox and target parameters to be used in a prefetch request.

**Syntax**

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

**Example**

**Swift**

The following example can be used to create an instance of a TargetPrefetch object that might be used to make a prefetch request to the configured Target server to prefetch content for mbox locations.

```swift
let prefetch = TargetPrefetch(name: "mboxName", targetParameters: nil)
```

**Objective-C**

The following example can be used to create an instance of a TargetPrefetch object that might be used to make a prefetch request to the configured Target server to prefetch content for mbox locations.

```objc
AEPTargetPrefetchObject *prefetch = [[AEPTargetPrefetchObject alloc] initWithName:@"mboxName" targetParameters:nil];
```

<!--- <Variant platform="react-native" api="target-prefetch" repeat="5"/>

#### ACPTargetPrefetchObject

This class contains the name of the Target location/mbox and Target parameters to be used in a prefetch request.

#### JavaScript

**Syntax**

```javascript
class ACPTargetPrefetchObject {
  name:   string;
  targetParameters: ACPTargetParameters;

  constructor(name?: string, targetParameters?: ACPTargetParameters) {
      this.name = name;
    this.targetParameters = targetParameters;
  }

}
``` --->

<Variant platform="android" api="target-parameters" repeat="4"/>

#### TargetParameters

#### Java

**Syntax**

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

<Variant platform="ios" api="target-parameters" repeat="6"/>

#### TargetParameters

This class may optionally contain the mbox parameters dictionary, the profile parameters dictionary, the TargetOrder object, as well as the TargetProduct object.

**Swift**

**Syntax**

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

Examples for creating instances of TargetParameters can be seen in the [Target overview](./index.md#target-parameters).

<!--- <Variant platform="react-native" api="target-parameters" repeat="5"/>

#### ACPTargetParameters

This class contains an mbox parameters dictionary, a profile parameters dictionary, an `ACPTargetOrder` object, and an `ACPTargetProduct` object.

#### JavaScript

**Syntax**

```javascript
class ACPTargetParameters {
  parameters: {string: string};
  profileParameters: {string: string};
  order: ACPTargetOrder;
  product: ACPTargetProduct;

  constructor(parameters?: {string: string}, profileParameters?: {string: string}, product?: ACPTargetProduct, order?: ACPTargetOrder) {
      this.parameters = parameters;
    this.profileParameters = profileParameters;
    this.product = product;
    this.order = order;
  }
}
``` --->

<Variant platform="android" api="target-order" repeat="5"/>

#### TargetOrder

This class contains an orderId, an order total, and an array for purchasedProductIds.

#### Java

**Syntax**

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

<Variant platform="ios" api="target-order" repeat="6"/>

#### TargetOrder

This class contains the orderId, the total, and an array for purchasedProductIds.

**Swift**

**Syntax**

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

Examples for creating instances of TargetOrder can be seen in the [Target overview](./index.md#arget-order-class).

<!--- <Variant platform="react-native" api="target-order" repeat="5"/>

#### ACPTargetOrder

This class contains an `orderId`, the total, and an array, for `purchasedProductIds`.

#### JavaScript

**Syntax**

```javascript
class ACPTargetOrder {
  orderId:   string;
  total:     number;
  purchasedProductIds: Array<string>;

  constructor(orderId: string, total?: number, purchasedProductIds: Array<string>) {
      this.orderId = orderId;
    this.total = total;
    this.purchasedProductIds = purchasedProductIds;
  }
}
``` --->

<Variant platform="android" api="target-product" repeat="4"/>

#### TargetProduct

#### Java

**Syntax**

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

<Variant platform="ios" api="target-product" repeat="6"/>

#### TargetProduct

This class contains the productId and categoryId.

**Swift**

**Syntax**

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

Examples for creating instances of TargetProduct can be seen in the [Target overview](./index.md#target-product-class)

<!--- <Variant platform="react-native" api="target-product" repeat="5"/>

#### ACPTargetProduct

This class contains a productId and a categoryId.

#### JavaScript

**Syntax**

```javascript
class ACPTargetProduct {
  productId: string;
  categoryId: string;

  constructor(productId: string, categoryId: string) {
      this.productId = productId;
    this.categoryId = categoryId;
  }
}
``` --->

<Variant platform="android" api="target-callback" repeat="4"/>

#### AdobeTargetDetailedCallback

#### Java

**Syntax**

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

