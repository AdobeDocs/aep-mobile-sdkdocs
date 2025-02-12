---
noIndex: true
---

<Variant platform="android" task="storage-locations" repeat="2"/>

The SDK uses the cache and shared preferences at these locations:

```bash
data/data/your.app.package/cache
data/data/your.app.package/shared_prefs
```

<Variant platform="ios" task="storage-locations" repeat="3"/>

On iOS, the SDK uses the cache and local storage at these locations:

```bash
Library/Caches/com.adobe.*
Library/com.adobe.aep.datastore
```

On tvOS, the SDK uses `NSUserDefaults` using the prefix `adobe.*`.

<Variant platform="ios" task="configuration-download-error" repeat="1"/>

```bash
[AEP SDK ERROR - <ConfigurationDownloader>] Loading config from URL https://assets.adobedtm.com/<APP_ID>.json failed with response code: Optional(404)
```

<Variant platform="android" task="configuration-download-error" repeat="1"/>

```bash
D/AdobeExperienceSDK: HttpConnectionHandler - Connecting to URL https://assets.adobedtm.com/<APP_ID>.json (GET)
W/AdobeExperienceSDK: RemoteDownloader - File could not be downloaded from URL (https://assets.adobedtm.com/<APP_ID>.json) Response: (-1) Message: (null)
```
