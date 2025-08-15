---
noIndex: true
---

<Variant platform="android" task="usage-example" repeat="1"/>

```kotlin
val config = mapOf("messaging.optimizePushSync" to false)
MobileCore.updateConfiguration(config)
```

<Variant platform="ios" task="usage-example" repeat="1"/>

```swift
let config = ["messaging.optimizePushSync": false]
MobileCore.updateConfigurationWith(configDict: config)
```
