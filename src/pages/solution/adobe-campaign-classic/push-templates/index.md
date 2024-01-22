---
title: Adobe Campaign Classic push templates
description: OOTB push templates supported by the Adobe Campaign Classic mobile extension.
keywords:
- Adobe Campaign Classic
- Push
- Push Template
---

# Adobe Campaign Classic - push templates

This document outlines out of the box push templates supported in Adobe Campaign Classic extension.

| **Template Name** | **Availability** | **Description** |
| :---------------- | :--------------- | :-------------- |
| [Basic](./basic) | **Android** - v2.1.0+ <br />**iOS** - coming soon | A basic push notification template. <br />Allows setting a title, message body, and optional image, action buttons, and click-through URL. Also supports a "remind me later" functionality which will schedule the notification to be re-delivered at a later time. |
| [Carousel](./carousel) | **Android** - v2.1.0+ <br />**iOS** - coming soon | Shows a series of three (3) to five (5) images that scroll on and off the side of the notification. <br />Available in `manual` mode (user must click a button to scroll carousel items) and `auto` mode (carousel items scroll every five seconds). |

## Setup

In order for the SDK to handle these push templates, the application **must** call `AEPMessagingService.handleRemoteMessage` from `onMessageReceived` in the class implementing `FirebaseMessagingService`.

Below is an example of where to call the new API:

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
