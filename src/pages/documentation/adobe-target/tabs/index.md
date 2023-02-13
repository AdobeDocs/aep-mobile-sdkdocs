<Variant platform="android" task="add" repeat="6"/>

#### Java

1. Add the Mobile Core and Target extensions to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:core:2.+'
implementation 'com.adobe.marketing.mobile:target:2.+'
```

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../resources/manage-gradle-dependencies.md) for more information. 

</InlineNestedAlert>

2. Import the Target extension to your application's main activity.

```java
import com.adobe.marketing.mobile.*;
```

<Variant platform="ios" task="add" repeat="7"/>

1. Add the AEPCore, AEPIdentity, and AEPTarget CocoaPods to your project via your `Podfile`.

```ruby
pod 'AEPCore','~>3.0'    
pod 'AEPIdentity','~>3.0'
pod 'AEPTarget','~>3.0'
```

2. Import the Target and Identity libraries.

**Swift**

```swift
    import AEPCore
    import AEPTarget
    import AEPIdentity
```

**Objective-C**

```objectivec
    @import AEPCore
    @import AEPTarget
    @import AEPIdentity
```

<!--- <Variant platform="react-native" task="add" repeat="7"/>

#### JavaScript

1. Install Target.

```javascript
npm install @adobe/react-native-acptarget
react-native link @adobe/react-native-acptarget
```

2. Import the extension and related libraries.

```javascript
import {ACPTarget, ACPTargetPrefetchObject, ACPTargetRequestObject, ACPTargetOrder, ACPTargetProduct, ACPTargetParameters} from '@adobe/react-native-acptarget';
```

3. Get the extension version.

```javascript
ACPTarget.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPTarget version: " + version));
``` --->

<Variant platform="android" task="register" repeat="5"/>

#### Java

In your Application's `onCreate()` method, after calling the `setApplication()` method, register Target with Mobile Core.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Target;
import com.adobe.marketing.mobile.AdobeCallback;

public class MainApp extends Application {

  private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";

    @Override
    public void onCreate() {
        super.onCreate();

        MobileCore.setApplication(this);
        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);

        MobileCore.registerExtensions(
            Arrays.asList(Target.EXTENSION),
            o -> Log.d("MainApp", "Adobe Target Mobile SDK was initialized.")
        );
    }
}
```

#### Kotlin

```java
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.Target
import com.adobe.marketing.mobile.AdobeCallback

class MainApp : Application() {

  private var ENVIRONMENT_FILE_ID: String = "YOUR_APP_ENVIRONMENT_ID"

    override fun onCreate() {
        super.onCreate()

        MobileCore.setApplication(this)
        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)

        MobileCore.registerExtensions(
          listOf(Target.EXTENSION)
        ) {
          Log.d("MainApp", "Adobe Target Mobile SDK was initialized")
        }
    }

}
```

<Variant platform="ios" task="register" repeat="5"/>

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {    
  MobileCore.registerExtensions([Target.self, Identity.self]) {
       //Completion callback
       // Use the App id assigned to this application via Adobe Data Collection UI
       MobileCore.configureWith(appId: "yourAppId")
  }
  return true
}
```

#### Objective-C

In your app's `didFinishLaunchingWithOptions` function, register the Target extension with Mobile Core:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions: @[AEPMobileIdentity.class, AEPMobileTarget.class] completion:^{
        //Completion callback
        // Use the app ID assigned to this application via Data Collection UI
        [AEPMobileCore configureWithAppId: @"yourAppId"];
    }];

    return YES;
}
```

<!--- <Variant platform="react-native" task="register" repeat="3"/>

To register the Target extension with the Mobile Core extension, use the following API:

#### JavaScript

```javascript
ACPTarget.registerExtension();
``` --->

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

On Android, when the application is launched as a result of a deep link, the `collectLaunchInfo` API is internally invoked, and the Target activity and deep link information is extracted from the Intent extras.

The SDK can only collect information from the launching Activity if [`setApplication`](../mobile-core/api-reference.md#application-reference-android-only) has been called. Setting the Application is only necessary on an Activity that is also an entry point for your application. However, setting the Application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your Application. We recommend that you call `setApplication` in each of your Activities.

<Variant platform="ios" task="visual-preview" repeat="10"/>

#### Swift

**Syntax**
```swift
public static func collectLaunchInfo(_ userInfo: [String: Any])
```

**Example**

```swift
    MobileCore.collectLaunchInfo(["adb_deeplink" : "com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"])
```

#### Objective-C

**Syntax**

```objectivec
+ (void)collectLaunchInfo:(nonnull NSDictionary<NSString*, id>*) userInfo;
```

**Example**

```objectivec
 [AEPMobileCore collectLaunchInfo:@{@"adb_deeplink" : @"com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"}];
 ```
