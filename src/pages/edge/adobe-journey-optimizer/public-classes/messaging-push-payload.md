---
title: MessagingPushPayload
description: This document explains how to use MessagingPushPayload class for getting the notification attributes like title, body and actions for creating a push notification from a received AJO push payload.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Android
- MessagingPushPayload
- Manual Display and Tracking
---

# MessagingPushPayload

This document explains how to use MessagingPushPayload class for getting the notification attributes like title, body, actions etc for creating a push notification received from Adobe Journey Optimizer (AJO).

MessagePushPayload is an Android only helper class for extracting the data payload attributes from RemoteMessage. Use this class for [manual display and tracking of push notifications](../push-notification/android/manual-display-and-tracking.md).

## Creating the MessagingPushPayload object

Use the following constructors in the FirebaseMessagingService class's `onMessageReceived` method:

**Syntax**

```java
    // Using the remote message
    public MessagingPushPayload(RemoteMessage message)
 
    // Using the data map
    public MessagingPushPayload(Map<String, String> data)
```

**Example**

```java
// Using the remote message
@Override
public void onMessageReceived(@NonNull RemoteMessage remoteMessage) {
    MessagingPushPayload payload = new MessagingPushPayload(remoteMessage);
}

// Using the data map
@Override
public void onMessageReceived(@NonNull RemoteMessage remoteMessage) {
    MessagingPushPayload payload = new MessagingPushPayload(remoteMessage.getData());
}
```

## Public APIs

Public APIs are used to get attributes from the push payload, which are used while creating the push notification.

```java
// Returns the title from the remote message
public String getTitle()

// Returns the body from the remote message 
public String getBody()

// Returns the sound from the remote message 
// The sound string represents the filename of a sound resource bundled in the app.
public String getSound()

// Returns the notification badge count from the remote message 
public int getBadgeCount()

// Returns the notification priority from the remote message. 
// For more information, please read the Firebase documentation (https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#notificationpriority) 
public int getNotificationPriority()

// Returns the channel ID from the remote message. 
public String getChannelId()

// Returns the icon string from the remote message.
// The icon string represents the drawable resource name in the app.
public String getIcon()

// Returns the image URL from the remote message.
public String getImageUrl()

// Returns the data map from the remote message.
public Map<String, String> getData()

// Returns an ActionType object which represents the type of action which needs to be performed on push notification interaction.
// More information about the ActionType enum definition can be found in the ActionType section below.
public ActionType getActionType()

// Returns the action URI as a string. The action URI is used to direct the push notification interaction.
public String getActionUri()

// Returns a list of ActionButtons. More information about the ActionButtons class definition can be found in the ActionButtons section below.
public List<ActionButton> getActionButtons()

// Adds all key-value pairs in data to the extras of the provided intent.
public void putDataInExtras(final Intent intent)
```

### Internal classes and enums

**ActionType**

```java
public enum ActionType {
    DEEPLINK, WEBURL, OPENAPP, NONE
}
```

**ActionButtons**

```java
// Constructor
public ActionButton(final String label, final String link, final String type)

// Public APIs

// Returns the label for the action button
public String getLabel()

// Returns the link for the action button
public String getLink()

// Returns the ActionType for the action button
public ActionType getType()
```
