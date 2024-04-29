---
noIndex: true
---

<Variant platform="fcm" template="timer" repeat="2"/>

## Unavailable

Android support for the timer template is coming soon.

<Variant platform="apns" template="timer" repeat="16"/>

For full information on APNS payload keys, see [Apple's documentation](https://developer.apple.com/documentation/usernotifications/generating-a-remote-notification).

The properties below define the payload sent to APNS:

## APS properties

| **Field** | **Required** | **Key** | **Type** | **Description** |
| :-------- | :----------- | :------ | :------- | :-------------- |
| Title | ✅ | `aps.alert.title` | string | Text shown in the notification's title. |
| Subtitle | ⛔️ | `aps.alert.subtitle` | string | Text shown in subtitle of notification. |
| Body | ✅ | `aps.alert.body` | string | Text shown in message body when notification is collapsed. |
| Notification Category | ✅ | `aps.category` | string | The notification’s type. This string must correspond to the identifier of one of the `UNNotificationCategory` objects you register at launch time.<br /><br />Value will always be "AEPNotification" to use an Adobe push template. |
| Mutable content | ✅ | `aps.mutable-content` | number | The notification service app extension flag. If the value is 1, the system passes the notification to your notification service app extension before delivery. Use your extension to modify the notification’s content.<br /><br />Value must always equal 1 so that the app's notification content service is called prior to the notification being displayed to the user. |
| Sound | ⛔️ | `aps.sound` | string | The name of a sound file in your app’s main bundle or in the Library/Sounds folder of your app’s container directory. Specify the string “default” to play the system sound. Use this key for regular notifications. For critical alerts, use the sound dictionary instead. |
| Badge Count | ⛔️ | `aps.badge` | string | The number to display in a badge on your app’s icon. Specify 0 to remove the current badge, if any. |
| Notification Thread ID | ⛔️ | `aps.thread-id` | string | An app-specific identifier for grouping related notifications. This value corresponds to the `threadIdentifier` property in the `UNNotificationContent` object. |

## AEPNotificationContent properties

| **Field** | **Required** | **Key** | **Type** | **Description** |
| :-------- | :----------- | :------ | :------- | :-------------- |
| Payload Version | ✅ | `adb_version` | string | Version of the payload assigned by the Adobe authoring UI. |
| Template Type | ✅ | `adb_template_type` | string | Informs the reader which properties may exist in the template object.<br /><br />Timer template uses a value of "timer". |
| Expanded Title | ⛔️ | `adb_title_ex` | string | Title of the message when the notification is expanded.<br /><br />If an expanded title is not provided, the value in `aps.alert.title` will be used. |
| Expanded Body | ⛔️ | `adb_body_ex` | string | Body of the message when the notification is expanded.<br /><br />If an expanded body is not provided, the value in `aps.alert.body` will be used. |
| Image | ⛔️ | `adb_media` | string | URI of an image to be shown when notification is expanded. |
| Link URI | ⛔️ | `adb_uri` | string | URI to be handled when user clicks the notification body. For example, a deep link to your app or a URI to a webpage.<br /><br />If no value is provided, clicking on the notification will open the host application. |
| Alternate title | ⛔️ | `adb_title_alt` | string | Alternate text for title of the notification after the timer has expired. |
| Alternate body | ⛔️ | `adb_body_alt` | string | Alternate text for body of the notification after the timer has expired. |
| Alternate image | ⛔️ | `adb_media_alt` | string | Alternate URI for an image shown when notification is expanded after the timer has expired. |
| Timer duration | ⛔️ | `adb_tmr_dur` | string | If present, the timer on the notification will run for the number of seconds provided here. |
| Timer end timestamp | ⛔️ | `adb_tmr_end` | string | If present, the timer on the notification will count down until this epoch time (in seconds). <br /><br />**Note** - if both `adb_tmr_end` and `adb_tmr_dur` are present, `adb_tmr_dur` will be used and `adb_tmr_end` will be ignored. |
| Color - Title | ⛔️ | `adb_clr_title` | string | Text color for `adb_title_ex`. Represented as six character hex, e.g. `00FF00`<br /><br />If no value is provided, the system [label color](https://developer.apple.com/documentation/uikit/uicolor/3173131-label) will be used. |
| Color - Body | ⛔️ | `adb_clr_body` | string | Text color for `adb_body_ex`. Represented as six character hex, e.g. `00FF00`<br /><br />If no value is provided, the system [secondaryLabel color](https://developer.apple.com/documentation/uikit/uicolor/3173136-secondarylabel) will be used. |
| Color - Background | ⛔️ | `adb_clr_bg` | string | Color for notification's background. Represented as six character hex, e.g. `00FF00`<br /><br />If no value is provided, the system [systemBackground color](https://developer.apple.com/documentation/uikit/uicolor/3173140-systembackground) will be used. |
| Color - Timer | ⛔️ | `adb_clr_tmr` | string | Color for the text of the timer overlay. Represented as six character hex, e.g. `00FF00`<br /><br />If no value is provided, the system [label color](https://developer.apple.com/documentation/uikit/uicolor/3173131-label) will be used. |

## Example

![gif of sample timer notification](./../assets/timer.gif)

Below is a sample of what a payload might look like for a notification using the timer template:

```json
{
    "aps" : {
        "alert" : {
            "title" : "Game day 🏀",
            "body" : "Don't miss the thrilling action tonight. Grab last-minute tickets now!"
        },
        "mutable-content" : 1,
        "category" : "AEPNotification"
    },
    "adb_template_type" : "timer",
    "adb_version" : "1.0",
    "adb_title_ex" : "💥 Last-minute deal alert!",
    "adb_body_ex" : "Save big on tonight's basketball game. Get your tickets ASAP!",
    "adb_title_alt" : "Missed out this time?",
    "adb_body_alt" : "Don't worry, more amazing offers are coming your way. Keep an eye out for more great offers soon",
    "adb_media" : "https://<URL_CONTAINING_INITIAL_IMAGE>",
    "adb_media_alt" : "https://<URL_CONTAINING_EXPIRED_IMAGE>",
    "adb_tmr_dur" : "10"
}
```

## Usage recommendations

The tables below contain guidelines for your push notification content. **These recommendations help your text display reliably across multiple devices.** These values are guidelines only - it is still recommended to test a notification prior to sending it.

### Image specifications

| **Aspect ratio** | **Image size range** | **Supported file types** |
| :-------- | -----------: | ------: |
| 2:1 (e.g. - 400x200 px) | 50 KB to 1 MB | PNG, JPG, WebP |

### Text guidelines

| **Type** |**Recommended max<br /># of characters** | **Supports multiple<br />lines?** |
| :-------- | ------: | -------: |
| Title | 50 | Yes (2 lines max) |
| Description | 450 | Yes |
