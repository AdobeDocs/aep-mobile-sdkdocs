---
noIndex: true
---

import Alerts from '/src/pages/resources/alerts.md'

<Variant platform="android" task="launch" repeat="1"/>

```java
MobileCore.updateConfiguration(mapOf(
    "contentanalytics.maxBatchSize" to 20,
    "contentanalytics.batchFlushInterval" to 5000
))
```

<Variant platform="ios" task="launch" repeat="1"/>

```swift
MobileCore.updateConfigurationWith(configDict: [
    "contentanalytics.maxBatchSize": 20,
    "contentanalytics.batchFlushInterval": 5000
])
```

<Variant platform="android" task="edge-consent" repeat="1"/>

```java
// Opt in
Consent.update(mapOf("consents" to mapOf("collect" to mapOf("val" to "y"))))

// Opt out
Consent.update(mapOf("consents" to mapOf("collect" to mapOf("val" to "n"))))

// Pending
Consent.update(mapOf("consents" to mapOf("collect" to mapOf("val" to "p"))))
```

<Variant platform="ios" task="edge-consent" repeat="1"/>

```swift
// Opt in
Consent.update(with: ["consents": ["collect": ["val": "y"]]])

// Opt out
Consent.update(with: ["consents": ["collect": ["val": "n"]]])

// Pending
Consent.update(with: ["consents": ["collect": ["val": "p"]]])
```

<Variant platform="android" task="edge-consent-legacy" repeat="1"/>

```java
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_IN)   // send
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_OUT)  // drop + clear
MobileCore.setPrivacyStatus(MobilePrivacyStatus.UNKNOWN)  // queue
```

<Variant platform="ios" task="edge-consent-legacy" repeat="1"/>

```swift
MobileCore.setPrivacyStatus(.optedIn)   // send
MobileCore.setPrivacyStatus(.optedOut)  // drop + clear
MobileCore.setPrivacyStatus(.unknown)   // queue
```

<Variant platform="android" task="data-deletion" repeat="1"/>

```java
MobileCore.resetIdentities()  // clears cache + queue
```

<Variant platform="ios" task="data-deletion" repeat="1"/>

```swift
MobileCore.resetIdentities()  // clears cache + queue
```

<Variant platform="android" task="debugging" repeat="1"/>

```java
MobileCore.setLogLevel(LoggingMode.VERBOSE)
```

<Variant platform="ios" task="debugging" repeat="1"/>

```swift
MobileCore.setLogLevel(.debug)
```
