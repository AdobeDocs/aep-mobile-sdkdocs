---
noIndex: true
---

<Variant platform="android" repeat="2"/>

The SDK uses the cache and shared preferences at these locations:

```bash
data/data/your.app.package/cache
data/data/your.app.package/shared_prefs
```

<Variant platform="ios" repeat="3"/>

On iOS, the SDK uses the cache and local storage at these locations:

```bash
Library/Caches/com.adobe.*
Library/com.adobe.aep.datastore
```

On tvOS, the SDK uses `NSUserDefaults` using the prefix `adobe.*`.