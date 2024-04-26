---
title: AEP SDK push templates
description: OOTB push templates supported by the Adobe Campaign Classic mobile SDK extension.
keywords:
- Adobe Campaign Classic
- Push
- Push Template
- Push Templates
---

# Push templates setup - Android

This document outlines the steps required to configure your app to use the out of the box push templates.

<InlineAlert variant="info" slots="text"/>

Out of the box push template functionality is currently only available for use with the **Adobe Campaign Classic** extension. <br /><br />Push templates functionality requires **Android SDK version 3.1.0+** or **iOS SDK version 5.1.0+**.

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
