<Variant platform="android" api="extension-version" repeat="8"/>

#### Java

**Syntax**

```java
public static String extensionVersion()
```

**Example**

```java
String extensionVersion = Identity.extensionVersion();
```

#### Kotlin

**Example**

```java
val extensionVersion = Identity.extensionVersion()
```

<Variant platform="ios" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

```swift
let extensionVersion = EdgeIdentity.extensionVersion
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
NSString *extensionVersion = [AEPMobileEdgeIdentity extensionVersion];
```

<Variant platform="android" api="get-experience-cloud-id" repeat="10"/>

<InlineNestedAlert variant="info" header="false" iconPosition="left">

The ECID value is returned via the [AdobeCallback](../mobile-core/api-reference.md#public-classes). When [AdobeCallbackWithError](../mobile-core/api-reference.md#public-classes) is provided to this API, the timeout value is 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../mobile-core/api-reference.md#public-classes).

</InlineNestedAlert>

#### Java

**Syntax**

```java
public static void getExperienceCloudId(final AdobeCallback<String> callback);
```

* _callback_ is invoked after the ECID is available. The callback may be invoked on a different thread.

**Example**

```java
Identity.getExperienceCloudId(new AdobeCallback<String>() {    
    @Override    
    public void call(String id) {        
         // Handle the ID returned here    
    }
});
```

#### Kotlin

**Example**

```java
Identity.getExperienceCloudId { id ->
    // Handle the ID returned here
}
```

<Variant platform="ios" api="get-experience-cloud-id" repeat="11"/>

#### Swift

**Syntax**

```swift
static func getExperienceCloudId(completion: @escaping (String?, Error?) -> Void)
```

* _completion_ is invoked after the ECID is available. The default timeout is 1000ms.

**Example**

```swift
Identity.getExperienceCloudId { (ecid, error) in
  if let error = error {
    // Handle the error here
  } else {
    // Handle the retrieved ID here
  }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getExperienceCloudId:^(NSString * _Nullable ecid, NSError * _Nullable error)completion
```

**Example**

```objectivec
[AEPMobileEdgeIdentity getExperienceCloudId:^(NSString *ecid, NSError *error) {   
    // handle the error and the retrieved ID here    
}];
```

<Variant platform="android" api="get-identities" repeat="10"/>

<InlineNestedAlert variant="info" header="false" iconPosition="left">

When [AdobeCallbackWithError](../mobile-core/api-reference.md#public-classes) is provided, and you are fetching the identities from the Mobile SDK, the timeout value is 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../mobile-core/api-reference.md#public-classes).

</InlineNestedAlert>

#### Java

**Syntax**

```java
public static void getIdentities(final AdobeCallback<IdentityMap> callback);
```

* _callback_ is invoked after the identities are available. The return format is an instance of [IdentityMap](#identitymap). The callback may be invoked on a different thread.

**Example**

```java
Identity.getIdentities(new AdobeCallback<IdentityMap>() {    
    @Override    
    public void call(IdentityMap identityMap) {        
         // Handle the IdentityMap returned here    
    }
});
```

#### Kotlin

**Example**

```java
Identity.getIdentities { identityMap ->
  // Handle the IdentityMap returned here        
}
```

<Variant platform="ios" api="get-identities" repeat="11"/>

#### Swift

**Syntax**

```swift
static func getIdentities(completion: @escaping (IdentityMap?, Error?) -> Void)
```

* _completion_ is invoked after the identities are available.  The default timeout is 1000ms. The return format is an instance of [IdentityMap](api-reference.md#identitymap).

**Example**

```swift
Identity.getIdentities { (identityMap, error) in
  if let error = error {
    // Handle the error here
  } else {
    // Handle the retrieved identitites here
  }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getIdentities:^(AEPIdentityMap * _Nullable map, NSError * _Nullable error)completion
```

**Example**

```objectivec
[AEPMobileEdgeIdentity getIdentities:^(AEPIdentityMap *map, NSError *error) {   
    // handle the error and the retrieved ID here
}];
```

<Variant platform="android" api="get-url-variables" repeat="10"/>

<InlineNestedAlert variant="info" header="false" iconPosition="left">

When `AdobeCallbackWithError` is provided and you are fetching the URL variables from the Mobile SDK, the timeout value is 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate `AdobeError`.

</InlineNestedAlert>

#### Java

**Syntax**

```java
public static void getUrlVariables(final AdobeCallback<String> callback);
```

- `callback` has a String value that contains the visitor identifiers as a query string after the service request is complete.

**Example**

```java
Identity.getUrlVariables(new AdobeCallback<String>() {    
    @Override    
    public void call(String urlVariablesString) {        
        // Handle the URL query parameter string here
        // For example, open the URL in a webView  
        WebView webView;
        webView = (WebView)findViewById(R.id.your_webview); // Initialize with your webView
        webview.loadUrl("https://example.com?" + urlVariablesString);
    }
});
```

#### Kotlin

**Example**

```java
Identity.getUrlVariables { urlVariablesString ->
  // Handle the URL query parameter string here
  // For example, open the URL in a webView      
  val webView = findViewById<WebView>(R.id.your_webview) // Initialize with your webView
  webView.loadUrl("http://www.example.com?" + urlVariablesString)    
}
```

<Variant platform="ios" api="get-url-variables" repeat="11"/>

#### Swift

**Syntax**

```swift
static func getUrlVariables(completion: @escaping (String?, Error?) -> Void)
```

- `completion` is invoked with `urlVariables` containing the visitor identifiers as a query string, or with `error` if an unexpected error occurs or the request times out. The returned `Error` contains the [AEPError](../mobile-core/api-reference.md#public-classes) code of the specific error. The default timeout is 1000ms.

**Example**

```swift
Identity.getUrlVariables { (urlVariables, error) in
  if let error = error {
    // Handle the error here
  } else {
    var urlStringWithVisitorData: String = "https://example.com"
    if let urlVariables: String = urlVariables {
      urlStringWithVisitorData.append("?" + urlVariables)
    }

    guard let urlWithVisitorData: URL = URL(string: urlStringWithVisitorData) else {
      // Handle the error, unable to construct URL
      return
    }

    // Handle the retrieved urlVariables encoded string here
    // APIs which update the UI must be called from main thread
    DispatchQueue.main.async {
        self.webView.load(URLRequest(url: urlWithVisitorData))
    }
  }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getUrlVariables:^(NSString * _Nullable urlVariables, NSError * _Nullable error)completion
```

**Example**

```objectivec
[AEPMobileEdgeIdentity getUrlVariables:^(NSString *urlVariables, NSError *error){
  if (error) {
  // Handle the error here
  } else {
    // Handle the URL query parameter string here
    NSString* urlString = @"https://example.com";
    NSString* urlStringWithVisitorData = [NSString stringWithFormat:@"%@?%@", urlString, urlVariables];
    NSURL* urlWithVisitorData = [NSURL URLWithString:urlStringWithVisitorData];

    // APIs which update the UI must be called from main thread
    dispatch_async(dispatch_get_main_queue(), ^{
      [[self webView] loadRequest:[NSURLRequest requestWithURL:urlWithVisitorData]];
    }
  }
}];
```

<Variant platform="android" api="register-extension" repeat="5"/>

#### Java

**Syntax**

```java
public static void registerExtension()
```

**Example**

```java
import com.adobe.marketing.mobile.edge.identity.Identity

...
Identity.registerExtension();
```

<Variant platform="android" api="remove-identity" repeat="8"/>

#### Java

**Syntax**

```java
public static void removeIdentity(final IdentityItem item, final String namespace);
```

**Example**

```java
IdentityItem item = new IdentityItem("user@example.com");
Identity.removeIdentity(item, "Email");
```

#### Kotlin

**Example**

```java
val item = IdentityItem("user@example.com")
Identity.removeIdentity(item, "Email")
```

<Variant platform="ios" api="remove-identity" repeat="10"/>

#### Swift

**Syntax**

```swift
static func removeIdentity(item: IdentityItem, withNamespace: String)
```

**Example**

```swift
Identity.removeIdentity(item: IdentityItem(id: "user@example.com"), withNamespace: "Email")
```

#### Objective-C

**Syntax**

```objectivec
+ (void) removeIdentityItem:(AEPIdentityItem * _Nonnull) item 
                             withNamespace: (NSString * _Nonnull) namespace
```

**Example**

```objectivec
AEPIdentityItem *item = [[AEPIdentityItem alloc] initWithId:@"user@example.com" authenticatedState:AEPAuthenticatedStateAuthenticated primary:false];
[AEPMobileEdgeIdentity removeIdentityItem:item withNamespace:@"Email"];
```

<Variant platform="android" api="set-advertising-identifier" repeat="14"/>

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

In order to enable collection of the user's current advertising tracking authorization selection for the provided advertising identifier, you need to install and register the [AEPEdgeConsent](../consent-for-edge-network/index.md) extension and update the [AEPEdge](../edge-network/index.md) dependency to minimum 1.3.2.

</InlineNestedAlert>

<InlineNestedAlert variant="info" header="false" iconPosition="left">

These examples require Google Play Services to be configured in your mobile application and use the Google Mobile Ads Lite SDK. For instructions on how to import the SDK and configure your `ApplicationManifest.xml` file see [Google Mobile Ads Lite SDK setup](https://developers.google.com/admob/android/lite-sdk). For more information about advertising identifiers and how to handle them correctly in your mobile application see [Google Play Services documentation about AdvertisingIdClient](https://developers.google.com/android/reference/com/google/android/gms/ads/identifier/AdvertisingIdClient).

</InlineNestedAlert>

#### Java

**Syntax**

```java
public static void setAdvertisingIdentifier(final String advertisingIdentifier);
```

- _advertisingIdentifier_ is an ID string that provides developers with a simple, standard system to continue to track ads throughout their apps.

**Example**

```java
import com.google.android.gms.ads.identifier.AdvertisingIdClient;
import com.google.android.gms.common.GooglePlayServicesNotAvailableException;
import com.google.android.gms.common.GooglePlayServicesRepairableException;
import java.io.IOException;
import android.util.Log;

...
@Override
public void onResume() {
    super.onResume();
    ...
    new Thread(new Runnable() {
        @Override
        public void run() {
            String advertisingIdentifier = null;

            try {
                AdvertisingIdClient.Info adInfo = AdvertisingIdClient.getAdvertisingIdInfo(getApplicationContext());
                if (adInfo != null) {
                    if (!adInfo.isLimitAdTrackingEnabled()) {
                        advertisingIdentifier = adInfo.getId();
                    } else {
                        Log.d("ExampleActivity", "Limit Ad Tracking is enabled by the user, cannot process the advertising identifier");
                    }
                }
            } catch (IOException e) {
                // Unrecoverable error connecting to Google Play services (e.g.,
                // the old version of the service doesn't support getting AdvertisingId).
                Log.d("ExampleActivity", "IOException while retrieving the advertising identifier " + e.getLocalizedMessage());
            } catch (GooglePlayServicesNotAvailableException e) {
                // Google Play services is not available entirely.
                Log.d("ExampleActivity", "GooglePlayServicesNotAvailableException while retrieving the advertising identifier " + e.getLocalizedMessage());
            } catch (GooglePlayServicesRepairableException e) {
                // Google Play services is not installed, up-to-date, or enabled.
                Log.d("ExampleActivity", "GooglePlayServicesRepairableException while retrieving the advertising identifier " + e.getLocalizedMessage());
            }
            MobileCore.setAdvertisingIdentifier(advertisingIdentifier);
        }
    }).start();
}
```

#### Kotlin

- _advertisingIdentifier_ is an ID string that provides developers with a simple, standard system to continue to track ads throughout their apps.

**Example**

```java
import android.content.Context
import android.util.Log
import com.google.android.gms.ads.identifier.AdvertisingIdClient
import com.google.android.gms.common.GooglePlayServicesNotAvailableException
import com.google.android.gms.common.GooglePlayServicesRepairableException
import java.io.IOException
...

suspend fun getGAID(applicationContext: Context): String {
    var adID = ""
    try {
        val idInfo = AdvertisingIdClient.getAdvertisingIdInfo(applicationContext)
        if (idInfo.isLimitAdTrackingEnabled) {
            Log.d("ExampleActivity", "Limit Ad Tracking is enabled by the user, setting ad ID to \"\"")
            return adID
        }
        Log.d("ExampleActivity", "Limit Ad Tracking disabled; ad ID value: ${idInfo.id}")
        adID = idInfo.id
    } catch (e: GooglePlayServicesNotAvailableException) {
        Log.d("ExampleActivity", "GooglePlayServicesNotAvailableException while retrieving the advertising identifier ${e.localizedMessage}")
    } catch (e: GooglePlayServicesRepairableException) {
        Log.d("ExampleActivity", "GooglePlayServicesRepairableException while retrieving the advertising identifier ${e.localizedMessage}")
    } catch (e: IOException) {
        Log.d("ExampleActivity", "IOException while retrieving the advertising identifier ${e.localizedMessage}")
    }
    Log.d("ExampleActivity", "Returning ad ID value: $adID")
    return adID
}
```

Call site:

```java
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
...

 // Create background coroutine scope to fetch ad ID value
val scope = CoroutineScope(Dispatchers.IO).launch {
    val adID = sharedViewModel.getGAID(context.applicationContext)
    Log.d("ExampleActivity", "Sending ad ID value: $adID to MobileCore.setAdvertisingIdentifier")
    MobileCore.setAdvertisingIdentifier(adID)
}
```

<Variant platform="ios" api="set-advertising-identifier" repeat="14"/>

In order to enable the collection of current advertising tracking user's selection based on the provided advertising identifier, you need to install and register the [Consent for Edge Network](../consent-for-edge-network/index.md) extension and update the [Edge Network extension](../edge-network/index.md) dependency to minimum 1.4.1. 

Starting from iOS 14+, applications must use the [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency) framework to request user authorization before using the Identifier for Advertising (IDFA). To access IDFA and handle it correctly in your mobile application, see the [Apple developer documentation about IDFA](https://developer.apple.com/documentation/adsupport/asidentifiermanager). 

#### Swift

**Syntax**

```swift
@objc(setAdvertisingIdentifier:)
public static func setAdvertisingIdentifier(_ identifier: String?)
```

- _identifier_ is an ID string that provides developers with a simple, standard system to continue to track ads throughout their apps.

**Example**

```swift
import AdSupport
import AppTrackingTransparency
...

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    ...
    if #available(iOS 14, *) {
       setAdvertisingIdentifierUsingTrackingManager()
    } else {
       // Fallback on earlier versions
       setAdvertisingIdentifierUsingIdentifierManager()
    }

}

func setAdvertisingIdentifierUsingIdentifierManager() {
    var idfa:String = "";
        if (ASIdentifierManager.shared().isAdvertisingTrackingEnabled) {
            idfa = ASIdentifierManager.shared().advertisingIdentifier.uuidString;
        } else {
            Log.debug(label: "AppDelegateExample",
                      "Advertising Tracking is disabled by the user, cannot process the advertising identifier.");
        }
        MobileCore.setAdvertisingIdentifier(idfa);
}

@available(iOS 14, *)
func setAdvertisingIdentifierUsingTrackingManager() {
    ATTrackingManager.requestTrackingAuthorization { (status) in
        var idfa: String = "";

        switch (status) {
        case .authorized:
            idfa = ASIdentifierManager.shared().advertisingIdentifier.uuidString
        case .denied:
            Log.debug(label: "AppDelegateExample",
                      "Advertising Tracking is denied by the user, cannot process the advertising identifier.")
        case .notDetermined:
            Log.debug(label: "AppDelegateExample",
                      "Advertising Tracking is not determined, cannot process the advertising identifier.")
        case .restricted:
            Log.debug(label: "AppDelegateExample",
                      "Advertising Tracking is restricted by the user, cannot process the advertising identifier.")
        }

        MobileCore.setAdvertisingIdentifier(idfa)
    }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) setAdvertisingIdentifier: (NSString * _Nullable identifier);
```

- _identifier_ is an ID string that provides developers with a simple, standard system to continue to track ads throughout their apps.

**Example**

```objectivec
#import <AdSupport/ASIdentifierManager.h>
#import <AppTrackingTransparency/ATTrackingManager.h>
...

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
-   ...
-   
    if (@available(iOS 14, *)) {
        [self setAdvertisingIdentifierUsingTrackingManager];
    } else {
        // fallback to earlier versions
        [self setAdvertisingIdentifierUsingIdentifierManager];
    }

}

- (void) setAdvertisingIdentifierUsingIdentifierManager {
    // setup the advertising identifier
    NSString *idfa = nil;
    if ([[ASIdentifierManager sharedManager] isAdvertisingTrackingEnabled]) {
        idfa = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
    } else {
        [AEPLog debugWithLabel:@"AppDelegateExample"
                       message:@"Advertising Tracking is disabled by the user, cannot process the advertising identifier"];
    }
    [AEPMobileCore setAdvertisingIdentifier:idfa];

}

- (void) setAdvertisingIdentifierUsingTrackingManager API_AVAILABLE(ios(14)) {
    [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:
    ^(ATTrackingManagerAuthorizationStatus status){
        NSString *idfa = nil;
        switch(status) {
            case ATTrackingManagerAuthorizationStatusAuthorized:
                idfa = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
                break;
            case ATTrackingManagerAuthorizationStatusDenied:
                [AEPLog debugWithLabel:@"AppDelegateExample"
                               message:@"Advertising Tracking is denied by the user, cannot process the advertising identifier"];
                break;
            case ATTrackingManagerAuthorizationStatusNotDetermined:
                [AEPLog debugWithLabel:@"AppDelegateExample"
                               message:@"Advertising Tracking is not determined, cannot process the advertising identifier"];
                break;
            case ATTrackingManagerAuthorizationStatusRestricted:
                [AEPLog debugWithLabel:@"AppDelegateExample"
                               message:@"Advertising Tracking is restricted by the user, cannot process the advertising identifier"];
                break;
        }

        [AEPMobileCore setAdvertisingIdentifier:idfa];
    }];
}
```

<Variant platform="android" api="update-identities" repeat="8"/>

#### Java

**Syntax**

```java
public static void updateIdentities(final IdentityMap identityMap);
```

**Example**

```java
IdentityItem item = new IdentityItem("user@example.com");
IdentityMap identityMap = new IdentityMap();
identityMap.addItem(item, "Email")
Identity.updateIdentities(identityMap);
```

#### Kotlin

**Example**

```java
val item = IdentityItem("user@example.com")
val identityMap = IdentityMap()
identityMap.addItem(item, "Email")
Identity.updateIdentities(identityMap)
```

<Variant platform="ios" api="update-identities" repeat="10"/>

#### Swift

**Syntax**

```swift
static func updateIdentities(with map: IdentityMap)
```

**Example**

```swift
let identityMap = IdentityMap()
identityMap.addItem(item: IdentityItem(id: "user@example.com"), withNamespace: "Email")
Identity.updateIdentities(with: identityMap)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) updateIdentities:(AEPIdentityMap * _Nonnull)map
```

**Example**

```objectivec
AEPIdentityItem *item = [[AEPIdentityItem alloc] initWithId:@"user@example.com" authenticatedState:AEPAuthenticatedStateAuthenticated primary:false];
AEPIdentityMap *map = [[AEPIdentityMap alloc] init];
[map addItem:item withNamespace:@"Email"];
[AEPMobileEdgeIdentity updateIdentities:map];
```

<Variant platform="android" api="identity-map" repeat="6"/>

#### Java

**Example**

```java
// Construct
IdentityMap identityMap = new IdentityMap();

// Add an item
IdentityItem item = new IdentityItem("user@example.com");
identityMap.addItem(item, "Email");

// Remove an item
IdentityItem item = new IdentityItem("user@example.com");
identityMap.removeItem(item, "Email");

// Get a list of items for a given namespace
List<IdentityItem> items = identityMap.getIdentityItemsForNamespace("Email");

// Get a list of all namespaces used in current IdentityMap
List<String> namespaces = identityMap.getNamespaces();

// Check if IdentityMap has no identities
boolean hasNotIdentities = identityMap.isEmpty();
```

#### Kotlin

**Example**

```java
// Construct
val identityMap = IdentityMap()

// Add an item
val item = IdentityItem("user@example.com")
identityMap.addItem(item, "Email")

// Remove an item
val item = IdentityItem("user@example.com")
identityMap.removeItem(item, "Email")

// Get a list of items for a given namespace
val items = identityMap.getIdentityItemsForNamespace("Email")

// Get a list of all namespaces used in current IdentityMap
val namespaces = identityMap.getNamespaces()

// Check if IdentityMap has no identities
val hasNotIdentities = identityMap.isEmpty()
```

<Variant platform="ios" api="identity-map" repeat="6"/>

#### Swift

**Example**

```swift
// Initialize
let identityMap: IdentityMap = IdentityMap()

// Add an item
identityMap.add(item: IdentityItem(id: "user@example.com"), withNamespace: "Email")

// Remove an item
identityMap.remove(item: IdentityItem(id: "user@example.com", withNamespace: "Email"))

// Get a list of items for a given namespace
let items: [IdentityItem] = identityMap.getItems(withNamespace: "Email")

// Get a list of all namespaces used in current IdentityMap
let namespaces: [String] = identityMap.namespaces

// Check if IdentityMap has no identities
let hasNoIdentities: Bool = identityMap.isEmpty
```

#### Objective-C

**Example**

```objectivec
// Initialize
AEPIdentityMap* identityMap = [[AEPIdentityMap alloc] init];

// Add an item
AEPIdentityItem* item = [[AEPIdentityItem alloc] initWithId:@"user@example.com" authenticatedState:AEPAuthenticatedStateAuthenticated primary:false];
[identityMap addItem:item withNamespace:@"Email"];

// Remove an item
AEPIdentityItem* item = [[AEPIdentityItem alloc] initWithId:@"user@example.com" authenticatedState:AEPAuthenticatedStateAuthenticated primary:false];
[identityMap removeItem:item withNamespace:@"Email"];

// Get a list of items for a given namespace
NSArray<AEPIdentityItem*>* items = [identityMap getItemsWithNamespace:@"Email"];

// Get a list of all namespaces used in current IdentityMap
NSArray<NSString*>* namespaces = identityMap.namespaces;

// Check if IdentityMap has no identities
bool hasNoIdentities = identityMap.isEmpty;
```

<Variant platform="android" api="identity-item" repeat="6"/>

#### Java

**Example**

```java
// Construct
IdentityItem item = new IdentityItem("identifier");

IdentityItem item = new IdentityItem("identifier", AuthenticatedState.AUTHENTICATED, false);


// Getters
String id = item.getId();

AuthenticatedState state = item.getAuthenticatedState();

boolean primary = item.isPrimary();
```

#### Kotlin

**Example**

```java
// Construct
val item = IdentityItem("identifier")

val item = IdentityItem("identifier", AuthenticatedState.AUTHENTICATED, false)

// Getters
val id = item.id

val state = item.authenticatedState

val primary = item.isPrimary
```

<Variant platform="ios" api="identity-item" repeat="6"/>

#### Swift

**Example**

```swift
// Initialize
let item = IdentityItem(id: "identifier")

let item = IdentityItem(id: "identifier", authenticatedState: .authenticated, primary: false)

// Getters
let id: String = item.id

let state: AuthenticatedState = item.authenticatedState

let primary: Bool = item.primary
```

#### Objective-C

**Example**

```objectivec
// Initialize
AEPIdentityItem* item = [[AEPIdentityItem alloc] initWithId:@"identity" authenticatedState:AEPAuthenticatedStateAuthenticated primary:false];

// Getters
NSString* id = primaryEmail.id;

long state = primaryEmail.authenticatedState;

bool primary = primaryEmail.primary;
```

<Variant platform="android" api="authenticated-state" repeat="6"/>

#### Java

**Syntax**

```java
public enum AuthenticatedState {
    AMBIGUOUS("ambiguous"),
    AUTHENTICATED("authenticated"),
    LOGGED_OUT("loggedOut");
}
```

#### Kotlin

**Syntax**

```java
enum class AuthenticatedState(val name: String) {
    AMBIGUOUS("ambiguous"),
    AUTHENTICATED("authenticated"),
    LOGGED_OUT("loggedOut")
}
```

<Variant platform="ios" api="authenticated-state" repeat="2"/>

**Syntax**

```swift
@objc(AEPAuthenticatedState)
public enum AuthenticatedState: Int, RawRepresentable, Codable {
    case ambiguous = 0
    case authenticated = 1
    case loggedOut = 2
}
```