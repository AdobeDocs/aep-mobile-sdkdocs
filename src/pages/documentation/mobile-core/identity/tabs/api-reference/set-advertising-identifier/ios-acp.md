<InlineAlert variant="info" slots="text"/>

To access IDFA and handle it correctly in your mobile application, see [Apple developer documentation about IDFA](https://developer.apple.com/documentation/adsupport/asidentifiermanager)

<InlineAlert variant="warning" slots="text"/>

Starting iOS 14+, applications must use the [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency) framework to request user authorization before using the Identifier for Advertising (IDFA).

#### Objective-C

**Syntax**

```objectivec
+ (void) setAdvertisingIdentifier: (nullable NSString*) adId;
```   

**Example**

```objectivec
#import <AdSupport/ASIdentifierManager.h>
#import <AppTrackingTransparency/ATTrackingManager.h>
...

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
-   ...
-   
    if (@available(iOS 14, *)) {
        [self setAdvertisingIdentiferUsingTrackingManager];
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
        [ACPCore log:ACPMobileLogLevelDebug
                 tag:@"AppDelegateExample"
             message:@"Advertising Tracking is disabled by the user, cannot process the advertising identifier"];
    }
    [ACPCore setAdvertisingIdentifier:idfa];

}

- (void) setAdvertisingIdentiferUsingTrackingManager API_AVAILABLE(ios(14)) {
    [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:
    ^(ATTrackingManagerAuthorizationStatus status){
        NSString *idfa = nil;
        switch(status) {
            case ATTrackingManagerAuthorizationStatusAuthorized:
                idfa = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
                break;
            case ATTrackingManagerAuthorizationStatusDenied:
                [ACPCore log:ACPMobileLogLevelDebug
                         tag:@"AppDelegateExample"
                     message:@"Advertising Tracking is denied by the user, cannot process the advertising identifier"];
                break;
            case ATTrackingManagerAuthorizationStatusNotDetermined:
                [ACPCore log:ACPMobileLogLevelDebug
                         tag:@"AppDelegateExample"
                     message:@"Advertising Tracking is not determined, cannot process the advertising identifier"];
                break;
            case ATTrackingManagerAuthorizationStatusRestricted:
                [ACPCore log:ACPMobileLogLevelDebug
                         tag:@"AppDelegateExample"
                     message:@"Advertising Tracking is restricted by the user, cannot process the advertising identifier"];
                break;
        }

        [ACPCore setAdvertisingIdentifier:idfa];
    }];
}
```

#### Swift

**Syntax**
```Swift
static func setAdvertisingIdentifier(adId: String?)
```

* _adId_ is a string that provides developers with a simple, standard system to continue to track the Ads through their apps.

**Example**

```swift
import AdSupport
import AppTrackingTransparency
...

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    ...
    if #available(iOS 14, *) {
       setAdvertisingIdentiferUsingTrackingManager()
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
            ACPCore.log(ACPMobileLogLevel.debug,
                        tag: "AppDelegateExample",
                        message: "Advertising Tracking is disabled by the user, cannot process the advertising identifier.");
        }
        ACPCore.setAdvertisingIdentifier(idfa);
}

@available(iOS 14, *)
func setAdvertisingIdentiferUsingTrackingManager() {
    ATTrackingManager.requestTrackingAuthorization { (status) in
        var idfa: String = "";

        switch (status) {
        case .authorized:
            idfa = ASIdentifierManager.shared().advertisingIdentifier.uuidString
        case .denied:
            ACPCore.log(.debug,
                        tag: "AppDelegateExample",
                        message: "Advertising Tracking is denied by the user, cannot process the advertising identifier.")
        case .notDetermined:
            ACPCore.log(.debug,
                        tag: "AppDelegateExample",
                        message: "Advertising Tracking is not determined, cannot process the advertising identifier.")
        case .restricted:
            ACPCore.log(.debug,
                        tag: "AppDelegateExample",
                        message: "Advertising Tracking is restricted by the user, cannot process the advertising identifier.")
        }

        ACPCore.setAdvertisingIdentifier(idfa)
    }
}
```