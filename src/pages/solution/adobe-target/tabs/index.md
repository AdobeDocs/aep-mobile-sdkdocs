---
noIndex: true
---

import Alerts from '/src/pages/resources/alerts.md'

<Variant platform="android-kotlin" task="add" repeat="3"/>

Add the required dependencies to your project by including them in the app's Gradle file.

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:identity")
implementation("com.adobe.marketing.mobile:target")
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

<Variant platform="android-groovy" task="add" repeat="3"/>

Add the required dependencies to your project by including them in the app's Gradle file.

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:identity'
implementation 'com.adobe.marketing.mobile:target'
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

<Variant platform="ios-pods" task="add" repeat="2"/>

Add the required dependencies to your project using CocoaPods. Add following pods in your `Podfile`:

```swift
use_frameworks!

target 'YourTargetApp' do
  pod 'AEPCore','~>5.0'    
  pod 'AEPIdentity','~>5.0'
  pod 'AEPTarget','~>5.0'
end
```

<Variant platform="android" task="target-order" repeat="5"/>

#### Java

**Syntax**

```java
public TargetOrder(final String id, final double total, final List<String> purchasedProductIds)
```

**Example**

```java
List<String> purchasedProductIds = new ArrayList<String>();
purchasedProductIds.add("34");
purchasedProductIds.add("125");
TargetOrder targetOrder = new TargetOrder("123", 567.89, purchasedProductIds);
```

<Variant platform="ios" task="target-order" repeat="10"/>

#### Swift

**Syntax**

```swift
public init(id: String, total: Double = 0, purchasedProductIds: [String]? = nil)
```

**Example**

```swift
let order = TargetOrder(id: "id1", total: 1.0, purchasedProductIds: ["ppId1"])
```

#### Objective-C

**Syntax**

```objectivec
- (nonnull instancetype) initWithId: (nonnull NSString*) id total: (double) total purchasedProductIds: (nullable NSArray<NSString*>*) purchasedProductIds;
```

**Example**

```objectivec
AEPTargetOrder *order = [[AEPTargetOrder alloc] initWithId:@"id1" total:1.0 purchasedProductIds:@[@"ppId1"]];
```

<!--- <Variant platform="react-native" task="target-order" repeat="2"/>

**JavaScript**

```javascript
var targetOrder = new ACPTargetOrder("ADCKKBC", 400.50, ["34","125"]);
``` --->

<Variant platform="android" task="target-product" repeat="5"/>

#### Java

**Syntax**

```java
public TargetProduct(final String id, final String categoryId)
```

**Example**

```java
TargetProduct targetProduct = new TargetProduct("123", "Books");
```

<Variant platform="ios" task="target-product" repeat="10"/>

#### Swift

**Syntax**

```swift
public init(productId: String, categoryId: String? = nil)
```

**Example**

```swift
let product = TargetProduct(productId: "pId1", categoryId: "cId1")
```

#### Objective-C

**Syntax**

```objectivec
- (nonnull instancetype) initWithProductId:(nonnull NSString*) productId categoryId:(nullable NSString*) categoryId;
```

**Example**

```objectivec
AEPTargetProduct *product =[[AEPTargetProduct alloc] initWithProductId:@"pId1" categoryId:@"cId1"];
```

<!--- <Variant platform="react-native" task="target-product" repeat="2"/>

**JavaScript**

```javascript
var targetProduct = new ACPTargetProduct("24D334", "Stationary");
``` --->

<Variant platform="android" task="target-parameters" repeat="5"/>

#### Java

**Syntax**

```java
TargetParameters targetParameters = new TargetParameters.Builder()
.parameters(new HashMap<String, String>())
.profileParameters(new HashMap<String, String>())
.product(new TargetProduct("productId", "productCategoryId"))
.order(new TargetOrder("orderId", 0.0, new ArrayList<String>()))
.build();
```

**Example**

```java
List<String> purchasedProductIds = new ArrayList<String>();
purchasedProductIds.add("34");
purchasedProductIds.add("125");
TargetOrder targetOrder = new TargetOrder("123", 567.89, purchasedProductIds);

TargetProduct targetProduct = new TargetProduct("123", "Books");

Map<String, String> mboxParameters = new HashMap<String, String>();
mboxParameters1.put("status", "platinum");

Map<String, String> profileParameters = new HashMap<String, String>();
profileParameters1.put("gender", "male");

TargetParameters targetParameters = new TargetParameters.Builder()
.parameters(mboxParameters)
.profileParameters(profileParameters)
.product(targetProduct)
.order(targetOrder)
.build();
```

<Variant platform="ios" task="target-parameters" repeat="10"/>

#### Swift

**Syntax**

```swift
public init(parameters: [String: String]? = nil, profileParameters: [String: String]? = nil, order: TargetOrder? = nil, product: TargetProduct? = nil)
```

**Example**

```swift
let mboxParameters = [
"status": "Platinum"
]
let profileParameters = [
"gender": "female"
]

let order = TargetOrder(id: "id1", total: 1.0, purchasedProductIds: ["ppId1"])

let product = TargetProduct(productId: "pId1", categoryId: "cId1")

let targetParameters = TargetParameters(parameters: mboxParameters, profileParameters: profileParameters, order: order, product: product))
```

#### Objective-C

**Syntax**

```objectivec
- (nonnull instancetype) initWithParameters:(nullable NSDictionary<NSString*, NSString*>*) parameters profileParameters:(nullable NSDictionary<NSString*, NSString*>*) profileParameters order:(nullable AEPTargetOrder*) order product:(nullable AEPTargetProduct*) product;
```

**Example**

```objectivec
NSDictionary *mboxParameters = @{@"status":@"Platinum"};
NSDictionary *profileParameters = @{@"gender":@"female"};

AEPTargetProduct *product =[[AEPTargetProduct alloc] initWithProductId:@"pId1" categoryId:@"cId1"];

AEPTargetOrder *order = [[AEPTargetOrder alloc] initWithId:@"id1" total:1.0 purchasedProductIds:@[@"ppId1"]];

AEPTargetParameters * targetParams = [[AEPTargetParameters alloc] initWithParameters:mboxParameters profileParameters:profileParameters order:order product:product];
```

<!--- <Variant platform="react-native" task="target-parameters" repeat="2"/>

**JavaScript**

```javascript
var mboxParameters = {"status": "platinum"};
var profileParameters = {"gender": "female"};
var targetProduct = new ACPTargetProduct("24D334", "Stationary");
var purchaseIDs = ["34","125"];
var targetOrder = new ACPTargetOrder("ADCKKBC", 400.50, purchaseIDs);
var targetParameters = new ACPTargetParameters(mboxParameters, profileParameters, targetProduct, targetOrder);
``` --->

<Variant platform="android" task="visual-preview" repeat="2"/>

On Android, when the application is launched as a result of a deep link, the Mobile Core's [collectLaunchInfo](../../home/base/mobile-core/api-reference.md#collectlaunchinfo) API is internally invoked, and the Target activity and deep link information is extracted from the Intent extras.

The SDK can only collect information from the launching Activity if [setApplication](../../home/base/mobile-core/api-reference.md#setapplication) has been called. Setting the Application is only necessary on an Activity that is also an entry point for your application. However, setting the Application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your Application. We recommend that you call `setApplication` API in each of your Activities.

<Variant platform="ios" task="visual-preview" repeat="7"/>

On iOS, the Mobile Core's [collectLaunchInfo](../../home/base/mobile-core/api-reference.md#collectlaunchinfo) API can be invoked with the Target preview deep link as shown below:

#### Swift

**Example**

```swift
    MobileCore.collectLaunchInfo(["adb_deeplink" : "com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"])
```

#### Objective-C

**Example**

```objectivec
 [AEPMobileCore collectLaunchInfo:@{@"adb_deeplink" : @"com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"}];
 ```
