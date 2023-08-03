<Variant platform="android" task="collect-consent-settings" repeat="4"/>

#### Java

You can set the collect consent to one of the following values:

* `y`
* `n`

To understand the expected behavior, see the _Update and get collect consent preferences_ table above.

<Variant platform="ios" task="collect-consent-settings" repeat="7"/>

You can set the collect consent to one of the following values:

#### Swift

* `y`
* `n`

#### Objective-C

You can set the collect consent to one of the following values:

* `y`
* `n`

To understand the expected behavior, see the _Update and get collect consent preferences_ table above.

<Variant platform="android" task="get-consents" repeat="6"/>

#### Java

**Syntax**

```java
public static void getConsents(final AdobeCallback<Map<String, Object>> callback);
```

* _callback_ - callback invoked with the current consents of the extension. If an `AdobeCallbackWithError` is provided, an `AdobeError`, can be returned in the eventuality of any error that occured while getting the user consents. The callback may be invoked on a different thread.

**Example**

```java
Consent.getConsents(new AdobeCallback<Map<String, Object>>() {
    @Override
    public void call(Map<String, Object> currentConsents) {
        if (currentConsents == null) { return; }
    final Map<String, Object> consents = currentConsets.get("consents");
    final Map<String, Object> collectConsent = consents.get("collect");
    final String collectConsentStatus = collectConsent.get("val");
    // inspect collectConsentStatus
    }
});
```

<Variant platform="ios" task="get-consents" repeat="10"/>

#### Swift

**Syntax**

```swift
static func getConsents(completion: @escaping ([String: Any]?, Error?) -> Void)
```

**Example**

```swift
Consent.getConsents { currentConsents, error in
    guard error == nil else { return }
    guard let consents = currentConsents["consents"] as? [String: Any] else { return }
    guard let collectConsent = consents["collect"] as? [String: Any] else { return }
    let collectConsentStatus = collectConsent["val"] as? String
    // inspect collectConsentStatus
}
```

#### Objective-C

**Syntax**

```objective-c
static func getConsents(completion: @escaping ([String: Any]?, Error?) -> Void)
```

**Example**

```objective-c
[AEPMobileEdgeConsent getConsents:^(NSDictionary *currentConsents, NSError *error) {
    if (error) { return; }
    NSDictionary *consents = currentConsents[@"consents"];
    NSDictionary *collectConsent = currentConsents[@"collect"];
    NSString *collectConsentStatus = collectConsent[@"val"];
    // inspect collectConsentStatus
}];
```

<Variant platform="android" task="update-consents" repeat="5"/>

#### Java

**Syntax**

```java
public static void update(final Map<String, Object> consents);
```

**Example**

```java
// example 1, updating users collect consent to 'yes'
final Map<String, Object> collectConsents = new HashMap<>();
collectConsents.put("collect", new HashMap<String, String>() {
    {
        put("val", "y");
    }
});

final Map<String, Object> consents = new HashMap<>();
consents.put("consents", collectConsents);

Consent.update(consents);

// example 2, updating users collect consent to 'no'
final Map<String, Object> collectConsents = new HashMap<>();
collectConsents.put("collect", new HashMap<String, String>() {
    {
        put("val", "n");
    }
});

final Map<String, Object> consents = new HashMap<>();
consents.put("consents", collectConsents);

Consent.update(consents);
```

<Variant platform="ios" task="update-consents" repeat="10"/>

#### Swift

**Syntax**

```swift
static func update(with consents: [String: Any])
```

**Example**

```swift
// example 1, updating users collect consent to 'yes'
let collectConsent = ["collect": ["val": "y"]]
let currentConsents = ["consents": collectConsent]
Consent.update(with: currentConsents)

// example 2, updating users collect consent to 'no'
let collectConsent = ["collect": ["val": "n"]]
let currentConsents = ["consents": collectConsent]
Consent.update(with: currentConsents)
```

#### Objective-C

**Syntax**

```swift
static func update(with consents: [String: Any])
```

**Example**

```swift
// example 1, updating users collect consent to 'yes'
NSDictionary *collectConsent = @{ @"collect": @{@"val": @"y"};
[AEPMobileEdgeConsent updateWithConsents:@{@"consents": collectConsent}];

// example 2, updating users collect consent to 'no'
NSDictionary *collectConsent = @{ @"collect": @{@"val": @"n"};
[AEPMobileEdgeConsent updateWithConsents:@{@"consents": collectConsent}];
```

<Variant platform="android" task="set-privacy-status" repeat="8"/>

You can set the privacy status to one of the following values:

* `MobilePrivacyStatus.OPT_IN`
* `MobilePrivacyStatus.OPT_OUT`
* `MobilePrivacyStatus.UNKNOWN`

To understand the expected behavior, see the "Set and get privacy status" table above.

#### Java

**Syntax**

```java
public static void setPrivacyStatus(final MobilePrivacyStatus privacyStatus);
```

**Example**

```java
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_OUT);
```

<Variant platform="ios" task="set-privacy-status" repeat="13"/>

You can set privacy status to one of the following values:

* `PrivacyStatus.optedIn`
* `PrivacyStatus.optedOut`
* `PrivacyStatus.unknown`

To understand the expected behavior, see the _Set and get privacy status_ table above.

#### Swift

**Syntax**

```swift
static func setPrivacyStatus(_ status: PrivacyStatus)
```

**Example**

```swift
MobileCore.setPrivacyStatus(.optedIn)
```

#### Objective-C

**Syntax**

```objective-c
@objc(setPrivacyStatus:)
static func setPrivacyStatus(_ status: PrivacyStatus)
```

**Example**

```objective-c
[AEPMobileCore setPrivacyStatus:AEPPrivacyStatusOptedIn];
```

<Variant platform="android" task="get-privacy-status" repeat="8"/>

The enum representation of the privacy status that corresponds to the following statuses:

* `MobilePrivacyStatus.OPT_IN`
* `MobilePrivacyStatus.OPT_OUT`
* `MobilePrivacyStatus.UNKNOWN`

#### Java

**Syntax**

```java
void getPrivacyStatus(AdobeCallback<MobilePrivacyStatus> callback);
```

* _callback_ is invoked after the privacy status is available.
* If an instance of  `AdobeCallbackWithError` is provided, and you are fetching the attributes from the Mobile SDK, the timeout value is 5000ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate `AdobeError`.

**Example**

```java
MobileCore.getPrivacyStatus(new AdobeCallback<MobilePrivacyStatus>() {
    @Override
    public void call(MobilePrivacyStatus value) {
          System.out.println("getPrivacyStatus: " + status);
    }
});
```

<Variant platform="ios" task="get-privacy-status" repeat="14"/>

The enum representation of the privacy status that corresponds to the following statuses:

* `PrivacyStatus.optedIn`
* `PrivacyStatus.optedOut`
* `PrivacyStatus.unknown`

#### Swift

**Syntax**

```swift
static func getPrivacyStatus(completion: @escaping (PrivacyStatus) -> Void)
```

* _completion_ is invoked with the current `PrivacyStatus`.

**Example**

```swift
MobileCore.getPrivacyStatus { privacyStatus in
    switch privacyStatus {
    case .optedIn:
        print("Privacy Status: Opted in")
    case .optedOut:
        print("Privacy Status: Opted out")
    case .unknown:
        print("Privacy Status: Unknown")
}
```

#### Objective-C

**Syntax**

```objective-c
@objc(getPrivacyStatus:)
static func getPrivacyStatus(completion: @escaping (PrivacyStatus) -> Void)
```

* _completion_ is invoked with the current `PrivacyStatus`.

**Example**

```objectivec
[AEPMobileCore getPrivacyStatus:^(AEPPrivacyStatus status) {
    switch (status) {
        case AEPPrivacyStatusOptedIn:
            NSLog(@"Privacy status: Opted in");
            break;
        case AEPPrivacyStatusOptedOut:
            NSLog(@"Privacy status: Opted out");
            break;
        case AEPPrivacyStatusUnknown:
            NSLog(@"Privacy status: Unknown");
            break;
  }
}];
```