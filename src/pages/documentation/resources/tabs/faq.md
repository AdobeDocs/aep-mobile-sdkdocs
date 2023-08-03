<Variant platform="android" repeat="2"/>

The SDK uses the cache and shared preferences at these locations:

```
data/data/your.app.package/cache
data/data/your.app.package/shared_prefs
```

<Variant platform="ios" repeat="1"/>

The SDK uses `NSUserDefaults` using the prefix `adobe.*`.