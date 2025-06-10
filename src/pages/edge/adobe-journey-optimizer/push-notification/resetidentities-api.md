---
title: Push Messaging - Clearing the persisted push token using the resetIdentities API
description: This document gives information on the AEPMessaging extension SDK interaction with the resetIdentities public API available in the AEPMobileCore extension SDK.
keywords:
- Adobe Journey Optimizer
- API reference
- Messaging
- Push Messaging
---

# Push Messaging - Clearing the persisted push token using the resetIdentities API

This document gives information on the AEPMessaging extension SDK interaction with the `resetIdentities` public API available in the AEPMobileCore extension SDK.

<InlineAlert variant="info" slots="text"/>

The `MobileCore.resetIdentities` API is used to inform extensions to clear any identities that it owns. Starting with the 3.3.3 release, the AEPMessaging extension SDK persists the last succesfully synced push token on the mobile device to prevent unnecessary push token sync requests from being sent. As part of that change, the AEPMesaging extension SDK will clear the persisted push token when the `resetIdentities` API is called.

<CodeBlock slots="heading, code" repeat="4" languages="Kotlin, Java, Swift, ObjC" />

#### Android

```kotlin
MobileCore.resetIdentities()
```

#### Android

```java
MobileCore.resetIdentities();
```

#### iOS

```swift
MobileCore.resetIdentities()
```

#### iOS

```objc
[AEPMobileCore resetIdentities];
```
