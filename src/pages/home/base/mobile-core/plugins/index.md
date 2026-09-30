---
title: Mobile Core plugins
description: Learn how the Mobile Core plugin mechanism lets optional add-on modules provide capabilities (such as Live Updates and push templates) that host extensions use at runtime.
keywords:
- Mobile Core
- Plugin
- Plugins
- IAepPlugin
- ILiveupdatePlugin
- IUiTemplatePlugin
- addPlugins
- getPlugin
- Live Updates
- Push templates
- Android
---

# Mobile Core plugins

<InlineAlert variant="info" slots="text"/>

The plugin mechanism is currently available for **Android only**, in Mobile Core `<MOBILE_CORE_VERSION>` and later.

## Overview

The Mobile Core plugin mechanism is a small, typed extension point that lets an **optional add-on module** provide a capability - for example Live Updates or rich push templates - that a **host extension** (such as Adobe Journey Optimizer Messaging) uses at runtime.

Plugins solve three problems:

* An add-on may sit on a **newer toolchain** than the host (for example, Live Updates requires Android API 36). A host that targets an older API must not be forced to upgrade.
* The same capability may be wanted by **more than one** host extension.
* Apps that do not want the capability should pay nothing - **no binary and no forced upgrade**.

A plugin has three parts:

* **Contracts** (interfaces) defined in Mobile Core, using only Android framework types.
* **A registry** inside Mobile Core that stores registered plugins, keyed by contract type.
* **Facade methods** on `MobileCore` - `addPlugins` and `getPlugin` - to register and resolve plugins.

The app registers the add-on's plugin once at startup; the host extension resolves it **by type** when it needs the capability, and degrades gracefully when no plugin is registered.

## Contracts

Plugin contracts live in the `com.adobe.marketing.mobile.plugin` package. `IAepPlugin` is the marker interface that every plugin implements; the capability-specific contracts extend it.

```kotlin
// Marker interface for anything registrable as a plugin.
interface IAepPlugin

// Live Updates (live-activity) plugin contract.
interface ILiveupdatePlugin : IAepPlugin {
    // `message` is typed as Any so a Firebase RemoteMessage passes through Mobile Core
    // untouched; the add-on casts it.
    fun handleLiveUpdatePush(context: Context, message: Any)
}

// Push-template (UI) plugin contract.
interface IUiTemplatePlugin : IAepPlugin {
    // Builds and RETURNS the notification (it does not post it). Framework types only.
    fun buildPushTemplateNotification(
        context: Context,
        messageData: Map<String, String>,
        trackerActivityClass: Class<out Activity>?,
        broadcastReceiverClass: Class<out BroadcastReceiver>?
    ): Notification?
}
```

Contracts intentionally reference only Android framework types (`Context`, `Notification`, `Activity`, `BroadcastReceiver`, `Map`, `Any`) so that Mobile Core stays free of any `androidx` or Firebase dependency.

## Registering a plugin

Register the plugins you want once, usually in your `Application.onCreate`, after `MobileCore.registerExtensions(...)`:

```kotlin
// Register one or more plugins (varargs). Idempotent - registering the same plugin twice has no effect.
MobileCore.addPlugins(NotificationBuilderPlugin())

// Some plugins take app-supplied policy in their constructor. Live Updates, for example,
// takes an ILiveUpdateStyleProvider that maps a payload to a notification style.
MobileCore.addPlugins(LiveUpdatePlugin(MyLiveUpdateStyleProvider()))
```

An app that does not register a plugin still works - the host extension degrades gracefully (a basic notification, or a dropped message with a warning log).

## Resolving a plugin

Host extensions resolve a plugin **by type**, at the point they need the capability:

```kotlin
val plugin: ILiveupdatePlugin? = MobileCore.getPlugin(ILiveupdatePlugin::class.java)
if (plugin != null) {
    plugin.handleLiveUpdatePush(context, remoteMessage)
} else {
    // Capability absent - degrade gracefully.
}
```

`getPlugin` returns the registered plugin that is assignable to the requested type, or `null` when none is registered. There is no magic string - resolution is purely by contract type.

## API reference

Both facade methods are part of the public Mobile Core API. See the [Mobile Core API reference](../api-reference.md#addplugins).

| API | Signature | Description |
| --- | --- | --- |
| `addPlugins` | `public static void addPlugins(IAepPlugin... plugins)` | Registers one or more plugins. |
| `getPlugin` | `public static <T extends IAepPlugin> T getPlugin(Class<T> type)` | Returns the registered plugin assignable to `type`, or `null`. |

## Built-in plugins

Adobe ships built-in plugins that implement the `IAepPlugin` marker interface (through their capability-specific contract), so each is registered with `addPlugins` and resolved with `getPlugin`. Each built-in plugin is documented on its own page under **Built-in plugins** in the navigation:

* **Live Updates plugin** - renders an ongoing "Live Update" notification from a push and **posts and tracks it itself**, so the add-on depends on the Adobe Journey Optimizer Messaging extension (for tracking) and Edge. The host routes to it when a push carries the `adb_liveupdate_data` key.
* **Push templates (UI) plugin** - **builds and returns** a `Notification` for a rich push template while the **host** extension posts and tracks it, so the add-on depends only on Mobile Core. The host routes to it when a push carries the `adb_template_type` key.

<InlineAlert variant="info" slots="text"/>

The "who posts and who tracks" choice determines the dependency graph: a plugin that posts and tracks the notification itself (Live Updates) depends on the host extension for its tracking APIs, while a plugin that only builds and returns the `Notification` (push templates) depends only on Mobile Core.

## Graceful absence and failure isolation

* When `getPlugin(...)` returns `null`, the host must treat it as a non-event and degrade - never crash.
* A plugin implementation must not crash the host's push-handling callback; it should catch its own errors and return `null` / do nothing.

## Adding a new plugin

1. Define the contract in Mobile Core (`com.adobe.marketing.mobile.plugin`), extending `IAepPlugin` and using only framework types. Decide the "who posts and who tracks" shape - it fixes the dependency graph.
2. Implement the contract in your add-on module, with a public constructor (optionally taking app-supplied policy). Wrap the work in `try/catch` for failure isolation.
3. In the host extension, detect your payload, resolve the plugin with `MobileCore.getPlugin(...)`, call the method, and degrade when it returns `null`.
4. In the app, register the plugin with `MobileCore.addPlugins(...)`.
