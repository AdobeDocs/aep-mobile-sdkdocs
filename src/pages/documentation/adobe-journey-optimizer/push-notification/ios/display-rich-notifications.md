---
title: Displaying rich push notification
description: This document details how to display media notification on iOS device for notification generated from Adobe Journey Optimizer.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- iOS
---

# Displaying rich push notification

This document details how to handle and display media notification on iOS device for notification generated from Adobe Journey Optimizer.

Follow Apple's documentation to [add a notification service app extension to your project](https://developer.apple.com/documentation/usernotifications/modifying_content_in_newly_delivered_notifications#2942063). Then use the service app extension to download images or other media attachments for the notification before displaying it on user's iOS device.

## Notification service extension implementation

 Notifications from Adobe Journey Optimizer contain a media attachment URL in the `adb_media` key of the notification payload. Use the service extension to download the media attachment from the URL and attach it to the notification before displaying it on the user's device.

 Here is an example implementation:

```swift
import UserNotifications

class NotificationService: UNNotificationServiceExtension {

    var contentHandler: ((UNNotificationContent) -> Void)?
    var bestAttemptContent: UNMutableNotificationContent?

    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
        self.contentHandler = contentHandler
        bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)
        
        // defer this block to be executed to call the callback
        defer {
            contentHandler(bestAttemptContent ?? request.content)
        }
        
        guard let attachment = request.adobeAttachment else { return }
        bestAttemptContent?.attachments = [attachment]
        
    }
    
    override func serviceExtensionTimeWillExpire() {
        // Called just before the extension will be terminated by the system.
        // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.
        if let contentHandler = contentHandler, let bestAttemptContent =  bestAttemptContent {
            contentHandler(bestAttemptContent)
        }
    }

}

extension UNNotificationRequest {
    var adobeAttachment: UNNotificationAttachment? {
        // return nil if the notification does not contain a valid value for adb_media key
        guard let attachmentString = content.userInfo["adb_media"] as? String else {
            return nil
        }
        
        // do not attach anything if it is not a valid URL
        guard let attachmentURL = URL(string: attachmentString) else {
            return nil
        }
        
        // do not attach anything if the url does not contain downloadable data
        guard let attachmentData = try? Data(contentsOf: attachmentURL) else {
            return nil
        }
        
        return try? UNNotificationAttachment(data: attachmentData, options: nil, attachmentURL: attachmentURL)
    }
}

extension UNNotificationAttachment {

    /// Convenience initializer to create a UNNotificationAttachment from a URL
    /// - Parameters:
    ///  - data: the data to be displayed in the notification
    ///  - options : options for the attachment
    ///  - attachmentURL : the URL of the rich media to be displayed in the notification
    convenience init(data: Data, options: [NSObject: AnyObject]?, attachmentURL: URL) throws {
        let fileManager = FileManager.default
        let temporaryFolderURL = URL(fileURLWithPath: NSTemporaryDirectory()).appendingPathComponent(ProcessInfo.processInfo.globallyUniqueString,
                                                                                                     isDirectory: true)
        try fileManager.createDirectory(at: temporaryFolderURL, withIntermediateDirectories: true, attributes: nil)
        var attachmentType : String
        
        // determine the attachment type from the url
        // common format are png, jpg, gif, mp3,  mpeg4, avi, mp4
        // Reference Apple documentation for supported file types and maximum size : https://developer.apple.com/documentation/usernotifications/unnotificationattachment
        /// NOTE : Please edit the below code according to the type of rich media notification that your app needs to support
        attachmentType = ".jpg"
        
        let attachmentName = UUID().uuidString + attachmentType
        let fileURL = temporaryFolderURL.appendingPathComponent(attachmentName)
        try data.write(to: fileURL)
        try self.init(identifier: attachmentName, url: fileURL, options: options)
    }
    
}
```
