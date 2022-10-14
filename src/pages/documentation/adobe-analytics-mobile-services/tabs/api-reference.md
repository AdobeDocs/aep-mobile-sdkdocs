<Variant platform="android" api="extension-version" repeat="2"/>

#### Java

```java
String mobileServicesExtensionVersion = MobileServices.extensionVersion();
```

<Variant platform="ios-aep" api="extension-version" repeat="4"/>

#### Swift

```swift
let mobileServicesExtensionVersion  = AEPMobileServices.extensionVersion()
```

#### Objective-C

```objectivec
NSString *mobileServicesExtensionVersion = [AEPMobileServices extensionVersion];
```

<Variant platform="ios-acp" api="extension-version" repeat="4"/>

#### Objective-C

```objectivec
NSString *mobileServicesExtensionVersion = [ACPMobileServices extensionVersion];
```

#### Swift

```swift
let mobileServicesExtensionVersion  = ACPMobileServices.extensionVersion()
```

<Variant platform="android" api="track-adobe-deep-link" repeat="5"/>

#### Java

**Syntax**

```java
public static void trackAdobeDeepLink(final Uri uri)
```

**Example**

```java
Uri testUri = new Uri.Builder()
        .scheme("adobelinktest")
        .appendQueryParameter("a.deeplink.id", "test_deeplinkId")
        .appendQueryParameter("a.launch.campaign.trackingcode", "code")
        .appendQueryParameter("test_key", "test_value")        
        .build();

        MobileServices.trackAdobeDeepLink(testUri);
```


<Variant platform="ios-aep" api="track-adobe-deep-link" repeat="7"/>

**Syntax**

```objectivec
+ (void) trackAdobeDeepLink: (NSURL* _Nonnull) deeplink;
```

**Example**

**Swift**

```swift
let url = URL(string: "adobelinktest://x?a.deeplink.id=test_deeplinkId&a.launch.campaign.trackingcode=code&test_key=test_value")!
AEPMobileServices.trackAdobeDeepLink(url)
```

**Objective-C**

```objectivec
NSURL* url = [NSURL URLWithString:@"adobelinktest://x?a.deeplink.id=test_deeplinkId&a.launch.campaign.trackingcode=code&test_key=test_value"];

[AEPMobileServices trackAdobeDeepLink:url];
```

<Variant platform="ios-acp" api="track-adobe-deep-link" repeat="7"/>

**Syntax**

```objectivec
+ (void) trackAdobeDeepLink: (NSURL*) url;
```

**Example**

**Swift**

```swift
let url = URL(string: "adobelinktest://x?a.deeplink.id=test_deeplinkId&a.launch.campaign.trackingcode=code&test_key=test_value")!
ACPMobileServices.trackAdobeDeepLink(url)
```

**Objective-C**

```objectivec
NSURL* url = [NSURL URLWithString:@"adobelinktest://x?a.deeplink.id=test_deeplinkId&a.launch.campaign.trackingcode=code&test_key=test_value"];

[ACPMobileServices trackAdobeDeepLink:url];
```