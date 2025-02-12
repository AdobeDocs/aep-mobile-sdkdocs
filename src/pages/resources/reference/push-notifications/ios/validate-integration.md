---
title: Validate AEPNotificationContent integration
description: Helps the reader validate integration of AEPNotificationContent into their app
keywords:
- Notification Content Extensions
- AEPNotificationContent
- Push
- Push Template
- Push Templates
---

# Validate AEPNotificationContent integration

After you've completed the steps to integrate the AEPNotificationContent extension into your app, the easiest way to validate is by using an `.apns` payload with the iOS Simulator.

1. Save the below text to a file named `basicTemplateExample.apns`:

    ```json
    {
        "Simulator Target Bundle" : "[MY_BUNDLE_IDENTIFIER]",
        "aps" : {
            "alert" : {
                "title" : "This is the title of the notification",
                "body" : "This is the body of the notification. It tells you a lot about the notification."
            },
            "mutable-content" : 1,
            "category" : "AEPNotification"
        },
        "adb_version" : "1.0",
        "adb_template_type" : "basic",
        "adb_title_ex" : "This is the expanded title of the notification",
        "adb_body_ex": "This is the expanded body of the notification. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Orci a scelerisque purus semper. Laoreet id donec ultrices tincidunt.",
        "adb_media" : "https://business.adobe.com/blog/fragments/products/experience-cloud/media_14480ef26514d00e5c224720f93790cb0b4499407.png?width=1000&height=500&format=png&optimize=medium"
    }
    ```

1. Replace the text `[MY_BUNDLE_IDENTIFIER]` with the bundle identifier for your app. For example, `com.my.awesomeApp`.

1. Launch your application in the iOS Simulator then background your app.

    * By default, an app in the foreground will not present its notifications. If you would like your app to present notifications while the app is running, visit the [Apple documentation](https://developer.apple.com/documentation/usernotifications/handling-notifications-and-notification-related-actions) for instructions.

1. Drag and drop the `basicTemplateExample.apns` file onto the iOS Simulator. **At this point, the notification should appear.**

1. Long press (or 3d touch) the notification to see the expanded view.
