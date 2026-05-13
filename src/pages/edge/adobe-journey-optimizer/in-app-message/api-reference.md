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

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```kotlin
Messaging.refreshInAppMessages()
```

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
Messaging.refreshInAppMessages();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

### Example

```swift
Messaging.refreshInAppMessages()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="1" />

### Example

```objc
[AEPMobileMessaging refreshInAppMessages];
```
