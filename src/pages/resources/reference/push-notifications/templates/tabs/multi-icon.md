---
noIndex: true
---

<Variant platform="fcm" template="multi-icon" repeat="13" />

## Properties

The properties below define the payload sent to FCM:

| **Field** | **Required** | **Key** | **Type** | **Description** |
| :-------- | :----------- | :------ | :------- | :-------------- |
| Payload Version | ✅ | `adb_version` | string | Version of the payload assigned by the ACC authoring UI. |
| Template Type | ✅ | `adb_template_type` | string | Informs the reader which properties may exist in the template object.<br />Multi-icon template uses a value of "icon". |
| Sound | ⛔️ | `adb_sound` | string | Sound played when notification is delivered.<br />Value should be the name of the sound file without its extension.<br />Sound file should be located in the `assets/raw` directory of your app. |
| Link URI | ⛔️ | `adb_uri` | string | URI to be handled when user clicks the notification. |
| Link Type | ⛔️ | `adb_a_type` | string | Type of link represented in `adb_uri` - one of "WEBURL", "DEEPLINK", "DISMISS", or "OPENAPP".<br />Required if `adb_uri` is specified. |
| Channel ID | ⛔️ | `adb_channel_id` | string | The [notification's channel id](https://developer.android.com/guide/topics/ui/notifiers/notifications#ManageChannels) (new in Android O). The app must create a channel with this channel ID before any notification with this channel ID is received. If you don't send this channel ID in the request, or if the channel ID provided has not yet been created by the app, FCM uses the channel ID specified in the app manifest.<br />If not provided in payload, SDK uses a "default" channel ID of value "General Notifications".<br />If < API 26 (Android O), this value is ignored. |
| Badge Count | ⛔️ | `adb_n_count` | string | Value to be used on app's badge. |
| Priority | ⛔️ | `adb_n_priority` | string | Designates the notification priority for Android - [importance](https://developer.android.com/reference/android/app/NotificationChannel#setImportance(int)) for API >= 26 (Android 8.0) or [priority](https://developer.android.com/reference/androidx/core/app/NotificationCompat.Builder#setPriority(int)) for API < 26. |
| Tag | ⛔️ | `adb_tag` | string | Identifier used to replace existing notifications in the notification drawer. If not specified, each request creates a new notification. If specified and a notification with the same tag is already being shown, the new notification replaces the existing one in the notification drawer. |
| Ticker | ⛔️ | `adb_ticker` | string | Sets the "ticker" text, which is sent to accessibility services. |
| Color - Background | ⛔️ | `adb_clr_bg` | string | Color for notification's background.<br />Represented as six character hex, e.g. `00FF00`. |
| Cancel button image | ⛔️ | `adb_cancel_image` | string | URI or bundled image representing the close icon in the right most side.<br />In case no value is provided, a default bundled "cross" image is shown. |
| Image buttons | ✅ | `adb_items` | string | Three to five icon buttons for the notification.<br />**The value is an encoded JSON string.**<br /> When decoded, the string contains an array of the following objects:<br /><ul><li>`img` (required) - URI or bundled image representing this rating.</li><li>`uri` (required) - URI to be handled when the user clicks this rating.</li><li>`type` (required) - Type of link represented in `uri` - one of "WEBURL", "DEEPLINK", "DISMISS", or "OPENAPP".</li></ul> |

## Example

<img src="./../assets/multi_icon.gif" width="50%" height="50%"/>

Below is a sample of what a payload might look like for a multi icon notification:

```json
{
  "message": {
    "token": "FCM_TOKEN",
    "android": {
      "collapse_key": "new message"
    },
    "data": {
      "adb_version": "1",
      "adb_template_type": "icon",
      "adb_clr_icon": "123456",
      "adb_clr_bg": "000000",
      "adb_cancel_image": "delete",
      "adb_items": "[{\"img\":\"https://sneakerland.com/products/assets/shoe1.png\",\"uri\":\"myapp://chooseShoeType/shoe1\",\"type\":\"DEEPLINK\"},{\"img\":\"https://sneakerland.com/products/assets/shoe2.png\",\"uri\":\"myapp://chooseShoeType/shoe2\",\"type\":\"DEEPLINK\"},{\"img\":\"https://sneakerland.com/products/assets/shoe3.png\",\"uri\":\"myapp://chooseShoeType/shoe3\",\"type\":\"DEEPLINK\"},{\"img\":\"https://sneakerland.com/products/assets/shoe4.png\",\"uri\":\"myapp://chooseShoeType/shoe4\",\"type\":\"DEEPLINK\"},{\"img\":\"https://sneakerland.com/products/assets/shoe5.png\",\"uri\":\"myapp://chooseShoeType/shoe5\",\"type\":\"DEEPLINK\"}]"
    }
  }
}
```

## Usage recommendations

The tables below contain guidelines for your push notification content. **These recommendations help your images display reliably across multiple devices.** These values are guidelines only - you should still test a notification prior to sending it.

### Audio specifications

Custom sound files must be placed within the app's bundle in the `res/raw` directory. Supported formats are `mp3`, `wav`, or `ogg`.

### Image specifications

| **Aspect ratios** | **Image size range** | **Supported file types** |
| :-------- | -----------: | ------: |
| 1:1, 3:2, 5:4, 4:3 | < 1 MB | PNG, JPG, WebP |
