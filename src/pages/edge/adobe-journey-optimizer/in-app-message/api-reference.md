---
title: In-App Message - API Reference
description: This document lists the public APIs available in the Messaging extension for implementing in-app messaging.
keywords:
- Adobe Journey Optimizer
- API reference
- Messaging
- In-App Message
---

# In-App Messaging - API reference

This document lists the public APIs available in the Messaging extension for implementing in-app messaging.

## refreshInAppMessages

<InlineAlert variant="info" slots="text"/>

By default, the SDK will automatically fetch in-app message definitions from the remote at the time the Messaging extension is registered. This generally happens once per app lifecycle.

Some use cases may require the client to request an update from the remote more frequently. Calling the following API will force the Messaging extension to get an updated definition of messages from the remote:

<CodeBlock slots="heading, code" repeat="4" languages="Kotlin, Java, Swift, ObjC" />

#### Android

```kotlin
Messaging.refreshInAppMessages()
```

#### Android

```java
Messaging.refreshInAppMessages();
```

#### iOS

```swift
Messaging.refreshInAppMessages()
```

#### iOS

```objc
[AEPMobileMessaging refreshInAppMessages];
```
