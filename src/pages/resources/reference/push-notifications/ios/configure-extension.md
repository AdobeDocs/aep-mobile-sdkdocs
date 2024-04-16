# Configure the Notification Content extension

With the AEPNotificationContent package now available after following the [installation steps](./index.md), the app must now be configured to use the Adobe SDK when the Notification Content extension is called.

## App configuration

In your `AppDelegate`, after the user has granted your app permission to display notifications, create any custom notification actions needed by your app and register a category with identifier `AEPNotification`.

```swift
let center = UNUserNotificationCenter.current()

// ask user for permission to display notifications
center.requestAuthorization(options: [.badge, .sound, .alert]) { [weak self] granted, _ in
    
    // return early if the user does not consent 
    guard granted else { return }
    
    center.delegate = self
    
    // create a category with desired actions and `AEPNotification` as the identifier
    let myCategory = UNNotificationCategory(identifier: "AEPNotification",
                                            actions: [],
                                            intentIdentifiers: [],
                                            options: [.customDismissAction])

    // register the category
    UNUserNotificationCenter.current().setNotificationCategories([myCategory])
    
    // if not done elsewhere, register the app to receive remote notifications
    DispatchQueue.main.async {
        application.registerForRemoteNotifications()
    }
}
```

## Notification Content extension configuration

1. In your `NotificationViewController` (or other `UIViewController` implementing the `UNNotificationContentExtension` protocol for your Notification Content extension), import the `AEPNotificationContent` package:

    ```swift
    import AEPNotificationContent
    ```

1. Update your view controller to inherit from `AEPNotificationViewController`:

    ```swift
    import UIKit
    import UserNotifications
    import UserNotificationsUI
    import AEPNotificationContent

    class NotificationViewController: AEPNotificationViewController {
        
    }
    ```

1. Update the `Info.plist` for your Notification Content extension with the following values:

    | Key | Type | Value |
    | --- | --- | --- |
    | `NSExtension.NSExtensionPrincipalClass` | `String` | `$(PRODUCT_MODULE_NAME).NotificationViewController` |
    | `NSExtension.NSExtensionAttributes.UNNotificationExtensionUserInteractionEnabled` | `Boolean` | `YES` |
    | `NSExtension.NSExtensionAttributes.UNNotificationExtensionDefaultContentHidden` | `Boolean` | `YES` |
    | `NSExtension.NSExtensionAttributes.UNNotificationExtensionCategory` | `String` | `AEPNotification` |
    | `NSExtension.NSExtensionAttributes.UNNotificationExtensionInitialContentSizeRatio` | `Number` | `0.2` |

    <img src="./assets/configurePlist.png" />
