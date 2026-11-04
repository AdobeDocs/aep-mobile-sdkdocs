---
title: LiveUpdatePlugin
description: The Mobile Core plugin that renders, posts, and tracks Android Live Update notifications.
keywords:
- Adobe Journey Optimizer
- Messaging
- Live Updates
- LiveUpdatePlugin
- Class
- Android
---

# LiveUpdatePlugin

The Live Updates plugin. Add it to Mobile Core so the Adobe Journey Optimizer extension can route Live Update pushes to it. For how the plugin processes a push, see [Live Updates plugin](../../../../../home/base/mobile-core/plugins/built-in-plugins/live-updates-plugin.md).

## Class Definition

Implements the Mobile Core `ILiveupdatePlugin` contract. Package `com.adobe.marketing.mobile.messaging.liveupdate`.

```kotlin
class LiveUpdatePlugin(styleProvider: ILiveUpdateStyleProvider) : ILiveupdatePlugin
```

## Constructor

### LiveUpdatePlugin(styleProvider)

Creates the plugin with the style provider your app uses for every Live Update.

#### Parameters

* _styleProvider_: The [ILiveUpdateStyleProvider](live-update-style-provider.md) that maps each Live Update to a notification style.

**Example**

Add the plugin once, in `Application.onCreate`, before you initialize the SDK:

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

```kotlin
MobileCore.addPlugins(LiveUpdatePlugin(MyLiveUpdateStyleProvider()))
```

#### Java

```java
MobileCore.addPlugins(new LiveUpdatePlugin(new MyLiveUpdateStyleProvider()));
```

## Methods

### handleLiveUpdatePush

Handles a Live Update push. The Adobe Journey Optimizer extension calls this method when a push carries the `adb_liveupdate_data` key; your app does not call it. To raise a Live Update from your app, use [triggerLocalLiveUpdate](../api-reference.md#triggerlocalliveupdate).

```kotlin
override fun handleLiveUpdatePush(context: Context, message: Any)
```

#### Parameters

* _context_: The application `Context`.
* _message_: The Firebase `RemoteMessage`. Mobile Core passes it as `Any` so that Mobile Core does not depend on Firebase.

## Related classes and interfaces

* [ILiveUpdateStyleProvider](live-update-style-provider.md)
* [LiveUpdatePayload](live-update-payload.md)
