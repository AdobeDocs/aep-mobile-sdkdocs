#### Objective-C

**Syntax**

```objectivec
+ (void) trackAdobeDeepLink: (NSURL*) url;
```

**Example**

```objectivec
NSURL* url = [NSURL URLWithString:@"adobelinktest://x?a.deeplink.id=test_deeplinkId&a.launch.campaign.trackingcode=code&test_key=test_value"];

[ACPMobileServices trackAdobeDeepLink:url];
```

#### Swift

**Example**

```swift
let url = URL(string: "adobelinktest://x?a.deeplink.id=test_deeplinkId&a.launch.campaign.trackingcode=code&test_key=test_value")!
ACPMobileServices.trackAdobeDeepLink(url)
```