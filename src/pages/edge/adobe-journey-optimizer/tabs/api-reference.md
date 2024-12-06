---
noIndex: true
---

<Variant platform="android" api="extension-version" repeat="8"/>

#### Java

**Syntax**

```java
public static String extensionVersion();
```

**Example**

#### Kotlin

```kotlin
Messaging.extensionVersion()
```

#### Java

```java
Messaging.extensionVersion();
```

<Variant platform="ios" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
public static let extensionVersion
```

**Example**

```swift
Messaging.extensionVersion
```

#### Objective-C

**Syntax**

```swift
public static let extensionVersion
```

**Example**

```objc
[AEPMobileMessaging extensionVersion];
```

<Variant platform="android" api="handle-notification-response" repeat="4"/>

#### Java

**Syntax**

```java
public static void handleNotificationResponse(final Intent intent,
                                         final boolean applicationOpened,
                                         final String customActionId);
```

| **Parameter** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| `intent` | Intent | The intent contains information related to the messageId and the data. |
| `applicationOpened` | Boolean | Shows whether the application has been opened or not. |
| `actionId` | String | The ID of the custom action. |

<Variant platform="ios" api="handle-notification-response" repeat="7"/>

#### Swift

**Syntax**

```swift
static func handleNotificationResponse(_ response: UNNotificationResponse,
                                       urlHandler: ((URL) -> Bool)? = nil,
                                          closure: ((PushTrackingStatus) -> Void)? = nil)
```

#### Objective-C

**Syntax**

```objc
+ (void) handleNotificationResponse: (UNNotificationResponse *) response
                         urlHandler: (BOOL (^)(NSURL *url)) handler 
                            closure: (void (^)(PushTrackingStatus status)) closure;
```

| **Parameter** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| `response` | `UNNotificationResponse` | An object containing information about the push notification details. |
| `urlHandler` | `((URL) -> Bool)?` | An optional method to handle the actionable URL from the push notification. |
| `closure` | `((PushTrackingStatus) -> Void)?` | An optional callback with `PushTrackingStatus` representing the tracking status of the interacted notification. |

<Variant platform="android" api="register-extension" repeat="8"/>

#### Java

**Syntax**

```java
public static void registerExtension();
```

**Example**

#### Kotlin

```kotlin
Messaging.registerExtension()
```

#### Java

```java
Messaging.registerExtension();
```

<Variant platform="android" api="add-push-tracking-details" repeat="5"/>

#### Java

**Syntax**

```java
public static boolean addPushTrackingDetails(final Intent intent,
                                            final String messageId,
                                            final Map<String, String> data)
```

| **Parameter** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| `intent` | `Intent` | The pending intent that needs to be updated so it can be used when the user interacts with the notification. |
| `messageId` | `String` | The message ID for the push notification. |
| `data` | `Map<String, String>` | The data of the remoteMessage. |

This API returns a boolean, indicating whether the intent was updated with necessary information (messageId and Customer Journey data).

<Variant platform="iOS" api="add-push-tracking-details" repeat="1"/>

This API is not applicable for iOS.
