---
title: Rich Media Push Notifications
description: This guide explains how to implement and use rich media push notifications in your iOS and Android applications with Adobe Journey Optimizer.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Rich Media
- iOS
- Android
---

# Rich Media Push Notifications

Rich media push notifications allow you to deliver push notifications with text and multimedia content. This guide explains how to implement and use rich media push notifications in your iOS and Android applications.

## iOS

### Prerequisites

1. Configure your app for push notifications by following the [iOS push notification setup guide](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns).
2. [Sync the received APNS push identifier](./ios/api-reference.md#sync-the-push-token) with Adobe Journey Optimizer.

### Rich Media Support

**Minimum supported OS version**: iOS10.

iOS supports rich media push notification attachments with the following media types:

<InlineAlert variant="info" slots="text"/>

These aspect ratio recommendations help your images or videos display reliably across multiple devices. These values are guidelines only - you should still test a notification prior to sending it.

1. **Images**
   - Maximum image file size: 10MB
   - Supported formats: PNG, JPEG, GIF
   - Recommended aspect ratio: 3:2 or 1:1
2. **Video**
   - Maximum video file size: 50MB
   - Supported formats: MPEG, MPEG2 Video, MPEG4, AVI
   - Recommended aspect ratio: 16:9 (widescreen) and 9:16 (portrait)
3. **Audio**
   - Maximum audio file size: 5MB
   - Supported formats: AIFF, WAV, MP3, MPEG4 Audio

For more information, see [Apple's Notification Attachment documentation](https://developer.apple.com/documentation/usernotifications/unnotificationattachment#Supported-File-Types).

### Implementation Steps

See the guide on [displaying iOS rich push notifications.](./ios/display-rich-notifications.md)

## Android

### Prerequisites

1. Ensure AEPSDK Android Messaging extension version 3.3.2 or newer is installed.
2. Configure your app for push notifications following the documentation on [using the Messaging extension's implementation of the FirebaseMessagingService](./android/automatic-display-and-tracking.md#register-messaging-extensions-firebasemessagingservice)

### Rich Media Support

**Minimum supported OS version**: Android 14 / API34

Android supports rich media push notification attachments through an [Icon container](https://developer.android.com/reference/android/graphics/drawable/Icon). As this is the container used, the rich media types supported on Android is limited to what can be displayed as an Icon.

<InlineAlert variant="info" slots="text"/>

The aspect ratio recommendations help your images display reliably across multiple devices. These values are guidelines only - you should still test a notification prior to sending it.

1. **Images **   
   - Support for both static images and animated GIFs
   - Maximum image size: 1MB
   - Supported formats: PNG, JPEG, WebP, GIF
   - Recommended aspect ratios: 4:3, 2:1, 16:9
   

For more information, see Google's documentation [on native Android image support](https://developer.android.com/media/platform/supported-formats#image-formats) and the [Firebase documentation on sending push notifications with images](https://firebase.google.com/docs/cloud-messaging/android/send-image).

### Implementation Steps

See the documentation on [using the Messaging extension's implementation of the FirebaseMessagingService.](./android/automatic-display-and-tracking.md#register-messaging-extensions-firebasemessagingservice)

## Additional Resources

- [Adobe Journey Optimizer Documentation](https://experienceleague.adobe.com/docs/journey-optimizer/using/push/design-push.html)
- [iOS Push Notification Guidelines](https://developer.apple.com/documentation/usernotifications)
- [Android Notification Guidelines](https://developer.android.com/guide/topics/ui/notifiers/notifications) 