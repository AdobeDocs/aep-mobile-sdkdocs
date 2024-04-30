---
title: Adobe Experience Platform SDK push templates
description: Learn about the push templates provided and supported by the Adobe Campaign Classic Mobile SDK extension.
keywords:
- Adobe Campaign Classic
- Push
- Push Template
- Push Templates
---

# Push templates setup - Android

This document outlines the steps required to configure your app to use default push templates provided by Adobe.

<InlineAlert variant="info" slots="text"/>

Default push template functionality is available for use with the **Adobe Campaign Classic** extension. <br /><br />Supported versions are **Android SDK version >= 2.1.0 && < 3.0.0** and **iOS SDK version 5.0.0+**.

## Setup

### Prerequisite

Follow the steps to [configure Adobe Campaign Classic](./../../../../solution/adobe-campaign-classic/) and add it to your app.

### Implementation

In your application, call `AEPMessagingService.handleRemoteMessage` from `onMessageReceived` in the class implementing `FirebaseMessagingService`.

Below is an example of where to call the API:

```java
public class MyFirebaseMessagingService extends FirebaseMessagingService {
    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        if (AEPMessagingService.handleRemoteMessage(this, remoteMessage)) {
            // Campaign extension has handled the notification
        } else {
            // Handle notification from other sources
        }
    }
}
```
