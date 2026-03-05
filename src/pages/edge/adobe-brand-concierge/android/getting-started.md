---
title: Brand Concierge getting started (Android)
description: Install and register the Brand Concierge extension in your Android app.
keywords:
- Brand Concierge
- Android
- Getting started
---

# Brand Concierge Getting Started (Android)

## Gradle

Add the following to your app module's `build.gradle.kts`:

```groovy
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:edge'
implementation 'com.adobe.marketing.mobile:edgeidentity'
implementation 'com.adobe.marketing.mobile:concierge'
```

Sync your project with the Gradle files.

## Import and register the Brand Concierge extension

Import the Concierge extension and its dependencies, then register them in your `Application` class in `onCreate()`. Include Concierge, Edge, and Edge Identity in the list of extensions passed to `MobileCore.registerExtensions`:

```kotlin
import com.adobe.marketing.mobile.AdobeCallback
import com.adobe.marketing.mobile.Edge
import com.adobe.marketing.mobile.Extension
import com.adobe.marketing.mobile.LoggingMode
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.Concierge
import com.adobe.marketing.mobile.edge.identity.Identity as EdgeIdentity
import android.app.Application

class MainApp : Application() {
    override fun onCreate() {
        super.onCreate()
        MobileCore.setApplication(this)
        MobileCore.setLogLevel(LoggingMode.VERBOSE)
        MobileCore.initialize(this, "MY_APP_ID")

        MobileCore.updateConfiguration(
            // if any optional configuration is needed
        )
    }
}
```

Replace `MY_APP_ID` with your mobile property App ID from Adobe Data Collection (formerly Adobe Launch). If you use other Experience Platform extensions (e.g. Lifecycle, Identity, Assurance), add them to the `extensions` list and follow the [Adobe Experience Platform Mobile SDK getting started guide](/src/pages/home/getting-started/) for full setup.

## Next steps

* [Implementation guide (Android)](/edge/adobe-brand-concierge/android/implementation-guide/) — Integrate the chat UI (managed or custom, Compose or XML/Views).
* [Style guide (Android)](/edge/adobe-brand-concierge/android/style-guide/) — Theme JSON reference and implementation status.
