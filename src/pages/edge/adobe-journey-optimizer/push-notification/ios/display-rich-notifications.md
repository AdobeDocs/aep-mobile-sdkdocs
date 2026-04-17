---
title: Displaying rich push notification
description: This document details how to display media notification on iOS device for notification generated from Adobe Journey Optimizer.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- iOS
- Rich Push
- AEPMessagingNotification
---

# Displaying rich push notification

You must use a Notification Service app extension to download images or other media attachments for the notification before displaying it on user's iOS device.

Follow Apple's documentation to [add a Notification Service app extension to your project](https://developer.apple.com/documentation/usernotifications/modifying_content_in_newly_delivered_notifications#2942063).

## Installation

The `AEPMessagingNotification` package is a lightweight, extension-safe library with no dependency on `AEPCore` or `AEPServices`. It is safe to import inside a `UNNotificationServiceExtension` target.

### Install using [CocoaPods](https://guides.cocoapods.org/using/using-cocoapods.html)

Add the pod to your Notification Service Extension target in your `Podfile`:

```ruby
target 'NotificationService' do
  pod 'AEPMessagingNotification'
end
```

### Install using [Swift Package Manager](https://github.com/apple/swift-package-manager)

To add the `AEPMessagingNotification` package to your application, from the Xcode menu select:

`File > Add Packages...`

<InlineAlert variant="info" slots="text"/>

The menu options may vary depending on the version of Xcode being used.

Enter the URL for the AEP Messaging Notification repository: `https://github.com/adobe/aepsdk-messaging-ios.git`.

For `Dependency Rule`, select `Up to Next Major Version`.

## MessagingNotificationHelper

`MessagingNotificationHelper` (Objective-C: `AEPMessagingNotificationHelper`) handles downloading media from the `adb_media` key in the push payload and attaching it to the notification content automatically.

| Feature | Detail |
|---|---|
| Supported media | Images (JPG, PNG, GIF), Video (MP4), Audio (MP3, WAV, AIFF, M4A) |
| URL scheme | HTTPS only |
| Fallback | Notification delivers without attachment if download fails |

## Notification service extension implementation

Notifications from Adobe Journey Optimizer contain a media attachment URL in the `adb_media` key of the notification payload. Use `MessagingNotificationHelper` in your service extension to automatically download the media attachment and attach it to the notification before displaying it on the user's device.

<CodeBlock slots="heading, code" repeat="2" languages="Swift, Objective-C" />

#### Swift

```swift
import AEPMessagingNotification
import UserNotifications

class NotificationService: UNNotificationServiceExtension {

    var contentHandler: ((UNNotificationContent) -> Void)?
    var bestAttemptContent: UNMutableNotificationContent?

    override func didReceive(_ request: UNNotificationRequest,
                             withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
        self.contentHandler = contentHandler
        bestAttemptContent = request.content.mutableCopy() as? UNMutableNotificationContent

        guard let content = bestAttemptContent else {
            contentHandler(request.content)
            return
        }

        MessagingNotificationHelper.processNotificationRequest(with: content, contentHandler: contentHandler)
    }

    override func serviceExtensionTimeWillExpire() {
        // Called just before the extension will be terminated by the system.
        // Deliver the best attempt at modified content, otherwise the original push payload will be used.
        if let contentHandler = contentHandler, let bestAttemptContent = bestAttemptContent {
            contentHandler(bestAttemptContent)
        }
    }
}
```

#### Objective-C

```objc
#import <AEPMessagingNotification/AEPMessagingNotification-Swift.h>
#import <UserNotifications/UserNotifications.h>

@interface NotificationService : UNNotificationServiceExtension
@property (nonatomic, copy) void (^contentHandler)(UNNotificationContent *contentToDeliver);
@property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;
@end

@implementation NotificationService

- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request
                   withContentHandler:(void (^)(UNNotificationContent *))contentHandler {
    self.contentHandler = contentHandler;
    self.bestAttemptContent = [request.content mutableCopy];

    if (self.bestAttemptContent) {
        [AEPMessagingNotificationHelper processContent:self.bestAttemptContent
                                   withContentHandler:contentHandler];
    } else {
        contentHandler(request.content);
    }
}

- (void)serviceExtensionTimeWillExpire {
    // Called just before the extension will be terminated by the system.
    // Deliver the best attempt at modified content, otherwise the original push payload will be used.
    if (self.contentHandler && self.bestAttemptContent) {
        self.contentHandler(self.bestAttemptContent);
    }
}

@end
```
