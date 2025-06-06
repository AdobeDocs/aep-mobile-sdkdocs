---
noIndex: true
---

<Variant platform="android" task="usage-example" repeat="1"/>

```kotlin
val config = mapOf("messaging.pushForceSync" to true)
MobileCore.updateConfiguration(config)
```

<Variant platform="ios" task="usage-example" repeat="1"/>

```swift
let config = ["messaging.pushForceSync": true]
MobileCore.updateConfigurationWith(configDict: config)
```
