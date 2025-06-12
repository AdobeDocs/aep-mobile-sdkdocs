---
title: Push Messaging APIs
description: This document details how to use the APIs provided by the AEPMessaging framework for tracking and displaying push notifications.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- iOS
- API
- Tracking
- Push Token
- APNs
---

# Push Notification - API reference

This document details how to use the APIs provided by the AEPMessaging framework for tracking and displaying push notifications.

## Pre-requisites

[Integrate and register AEPMessaging extension](../../../index.md#implement-extension-in-mobile-app) in your app.

## Sync the push token

To retrieve the push token in iOS, refer to the [Apple documentation for registering your app with APNs](https://developer.apple.com/documentation/usernotifications/registering_your_app_with_apns). Then add the following code to the `application(_: didRegisterForRemoteNotificationsWithDeviceToken:)` method in the `AppDelegate` to sync the device's push token with profile in Adobe Experience Platform.

<CodeBlock slots="heading, code" repeat="2" languages="Swift, Objective-C" />

#### Swift

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    MobileCore.setPushIdentifier(deviceToken)
}
```

#### Objective-C

```objc
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    [AEPMobileCore setPushIdentifier:deviceToken];
}
```

<InlineAlert variant="info" slots="text"/>

Calling [resetIdentities](../../api-reference/#resetidentities) will clear the push token from the Mobile SDK. After calling resetIdentities, the push token must be re-synced using [setPushIdentifier](https://developer.adobe.com/client-sdks/home/base/mobile-core/api-reference/#setpushidentifier).

## Track push notification interactions

Use [`handleNotificationResponse`](./../../api-reference/#handlenotificationresponse) API to send push notification interaction data to Adobe Experience Platform.

In iOS, [UNUserNotificationCenterDelegate](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate) is the interface for processing incoming notifications and responding to notification actions. Once the delegate is implemented, handle push notification responses in [userNotificationCenter(_:didReceive:withCompletionHandler:)](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate/1649501-usernotificationcenter) method.

<CodeBlock slots="heading, code" repeat="2" languages="Swift, Objective-C" />

#### Swift

```swift
func userNotificationCenter(_: UNUserNotificationCenter,
                            didReceive response: UNNotificationResponse,
                            withCompletionHandler completionHandler: @escaping () -> Void) {

    Messaging.handleNotificationResponse(response, urlHandler: { url in
        /// return `true` if the app is handling the url or `false` if the Adobe SDK should handle it
        let appHandlesUrl = false
        return appHandlesUrl
    }, closure: { pushTrackingStatus in
        if pushTrackingStatus == .trackingInitiated {
            // tracking was successful
        } else {
            // tracking failed, view the status for more information
        }
    })

    completionHandler()
}
```

#### Objective-C

```objc
- (void) userNotificationCenter:(UNUserNotificationCenter *) center
 didReceiveNotificationResponse:(UNNotificationResponse *) response
         withCompletionHandler:(void (^)(void)) completionHandler {

    [AEPMobileMessaging handleNotificationResponse:response urlHandler: ^(NSURL *url) {
        /// return `true` if the app is handling the url or `false` if the Adobe SDK should handle it
        bool appHandlesUrl = false;
        return appHandlesUrl;
    } closure:^(AEPPushTrackingStatus status) {
        if (status == AEPPushTrackingStatusTrackingInitiated) {
            // tracking was successful
        } else {
            // tracking failed, view the status for more information
        }
    }];
}
```

<InlineAlert variant="info" slots="text"/>

This API method will automatically handle click behaviour defined for the push notification in Adobe Journey Optimizer.

#### Reading push tracking status

Implement the callback in `handleNotificationResponse` API to read [PushTrackingStatus](../../public-classes/push-tracking-status.md) enum representing tracking status of the push notification.

<CodeBlock slots="heading, code" repeat="2" languages="Swift, Objective-C" />

#### Swift

```swift
Messaging.handleNotificationResponse(response) { trackingStatus in
    // handle the different values of trackingStatus
}
```

#### Objective-C

```objc
[AEPMobileMessaging handleNotificationResponse:response urlHandler:nil closure:^(AEPPushTrackingStatus status) {
    if (status == AEPPushTrackingStatusTrackingInitiated) {
        NSLog(@"Successfully started push notification tracking");
    }
}];
```
