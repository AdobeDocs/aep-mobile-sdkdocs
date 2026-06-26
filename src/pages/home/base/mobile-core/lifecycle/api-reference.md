---
title: Mobile Core Lifecycle API reference
description: An API reference for the Mobile Core Lifecycle extension.
keywords:
- API reference
- Lifecycle
- Lifecycle for Mobile Core
- Mobile Core
---

# Lifecycle API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Lifecycle extension that is registered with the Mobile Core extension.

To get the version of the Lifecycle extension, use the following code sample:

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static String extensionVersion()
```

#### Example

```java
final String lifecycleExtensionVersion = Lifecycle.extensionVersion();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static var extensionVersion: String
```

#### Example

```swift
let version = Lifecycle.extensionVersion
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
@objc static var extensionVersion: String
```

#### Example

```objectivec
NSString *version = [AEPMobileLifecycle extensionVersion];
```

## lifecycleStart

Starts the collection of lifecycle data.

**For Analytics use case:** Use this API to start a new lifecycle session or resume a previously paused lifecycle session. If a previously paused session timed out, then a new session is created. If a current session is running, then calling this method does nothing.

**For Platform use case:** Use this API to dispatch a [Lifecycle Application Foreground](event-reference.md#lifecycle-application-foreground) event when the application is launched.

### Android Java

This method should be called from the Activity onResume method.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void lifecycleStart(@Nullable final Map<String, String> additionalContextData)
```

#### Example

```java
MobileCore.lifecycleStart(null);
```

If you need to collect additional lifecycle data:

```java
contextData.put("myapp.category", "Game");
MobileCore.lifecycleStart(additionalContextData);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
 static func lifecycleStart(additionalContextData: [String: Any]?)
```

#### Example

```swift
 MobileCore.lifecycleStart(additionalContextData: nil)
```

If you need to collect additional lifecycle data:

```swift
 MobileCore.lifecycleStart(additionalContextData: ["contextDataKey": "contextDataVal"])
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
 @objc(lifecycleStart:)
 static func lifecycleStart(additionalContextData: [String: Any]?)
```

#### Example

```objc
 [AEPMobileCore lifecycleStart:nil];
```

If you need to collect additional lifecycle data:

```objc
 [AEPMobileCore lifecycleStart:@{@"contextDataKey": @"contextDataVal"}];
```

## lifecyclePause

Pauses the collection of lifecycle data.

**For Analytics use case:** Use this API to pause the collection of lifecycle data.

**For Platform use case:** Use this API to dispatch a [Lifecycle Application Background](event-reference.md#lifecycle-application-background) event when the application closes.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void lifecyclePause()
```

#### Example

```java
MobileCore.lifecyclePause();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
 static func lifecyclePause()
```

#### Example

```swift
 MobileCore.lifecyclePause()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
 @objc(lifecyclePause)
 static func lifecyclePause()
```

#### Example

```objc
 [AEPMobileCore lifecyclePause];
```

## registerExtension

<InlineAlert variant="warning" slots="text1, text2"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../api-reference.md#registerextensions) API instead.

Registers the Lifecycle extension with the Mobile Core.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void registerExtension()
```

#### Example

```java
Lifecycle.registerExtension();
export const _frontmatter = {}
```
