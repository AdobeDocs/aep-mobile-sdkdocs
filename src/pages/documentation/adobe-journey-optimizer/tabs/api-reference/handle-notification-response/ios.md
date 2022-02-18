#### Swift

**Syntax**

```swift
static func handleNotificationResponse(_ response: UNNotificationResponse, applicationOpened: Bool, customActionId: String?)
```

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| `response` | UNNotificationResponse | An object containing information about the push notification details. |
| `applicationOpened` | Boolean | Shows whether the application has been opened or not. |
| `customActionId` | String | The ID of the custom action. |

**Example**

```swift
func userNotificationCenter(_: UNUserNotificationCenter,
                                didReceive response: UNNotificationResponse,
                                withCompletionHandler completionHandler: @escaping () -> Void) {
    Messaging.handleNotificationResponse(response, applicationOpened: true, customActionId: "customActionId")
    completionHandler()
}
```

#### Objective-C

**Syntax**

```objc
@objc(handleNotificationResponse:applicationOpened:withCustomActionId:)
static func handleNotificationResponse(_ response: UNNotificationResponse, applicationOpened: Bool, customActionId: String?)
```

**Example**

```objc
- (void)userNotificationCenter:(UNUserNotificationCenter *)center
didReceiveNotificationResponse:(UNNotificationResponse *)response
         withCompletionHandler:(void (^)())completionHandler {
    // Your code
    [AEPMobileMessaging handleNotificationResponse:response applicationOpened:true withCustomActionId:@"customActionId"]
    completionHandler();
}
```