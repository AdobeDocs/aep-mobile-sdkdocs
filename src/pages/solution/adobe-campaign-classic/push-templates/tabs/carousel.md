---
noIndex: true
---

<Variant platform="fcm" template="carousel" repeat="6"/>

### Properties

The properties below are used to define the payload sent to FCM:

| **Field** | **Required** | **Key** | **Type** | **Description** |
| :-------- | :----------- | :------ | :------- | :-------------- |
| Payload Version | ✅ | `adb_version` | string | Version of the payload assigned by the ACC authoring UI. |
| Template Type | ✅ | `adb_template_type` | string | Informs the reader which properties may exist in the template object.<br />Carousel template uses a value of "car". |
| Title | ✅ | `adb_title` | string | Text shown in the notification's title. |
| Color - Title | ⛔️ | `adb_clr_title` | string | Text color for `adb_title`.<br />Represented as six character hex, e.g. `00FF00` |
| Body | ✅ | `adb_body` | string | Text shown in message body when notification is collapsed. |
| Expanded Body | ⛔️ | `adb_body_ex` | string | Body of the message when the message is expanded. |
| Color - Body | ⛔️ | `adb_clr_body` | string | Text color for `adb_body`, `adb_body_ex`.<br />Represented as six character hex, e.g. `00FF00` |
| Sound | ⛔️ | `adb_sound` | string | Sound played when notification is delivered.<br />Value should be the name of the sound file without its extension.<br />Sound file should be located in the `assets/raw` directory of your app. |
| Link URI | ⛔️ | `adb_uri` | string | URI to be handled when user clicks the notification. |
| Link Type | ⛔️ | `adb_a_type` | string | Type of link represented in `adb_uri` - one of "WEBURL", "DEEPLINK", or "OPENAPP".<br />Required if `adb_uri` is specified. |
| Carousel Items | ✅ | `adb_items` | string | **The value is an encoded JSON string.**<br />Three to five items in the carousel of the notification.<br />When decoded, the string contains an array of the following objects:<br /><ul><li>`img` (required) - URI to an image to be shown for the carousel item</li><li>`txt` - Optional caption to show when the carousel item is visible.</li><li>`uri` - Optional URI to be handled when the carousel item is touched by the user. If no `uri` is provided for the item, `adb_uri` will be handled instead.</li></ul> |
| Carousel Layout | ⛔️ | `adb_car_layout` | string | Determines whether the carousel should use the default layout or filmstrip variant.<br />Valid values are "default" or "filmstrip". |
| Carousel Mode | ⛔️ | `adb_car_mode` | string | Determines how the carousel will be operated.<br />Valid values are "auto" or "manual". |
| Small Icon | ⛔️ | `adb_small_icon` | string | Name of a small icon to use in the notification. The app's drawable resources are checked for an image file with the provided name. |
| Large Icon | ⛔️ | `adb_large_icon` | string | URI or name for a large icon to use in the notification. If a name is provided, the app's drawable resources are checked for an image file with the same name. |
| Channel ID | ⛔️ | `adb_channel_id` | string | The [notification's channel id](https://developer.android.com/guide/topics/ui/notifiers/notifications#ManageChannels) (new in Android O). The app must create a channel with this channel ID before any notification with this channel ID is received. If you don't send this channel ID in the request, or if the channel ID provided has not yet been created by the app, FCM uses the channel ID specified in the app manifest.<br />If not provided in payload, SDK uses a "default" channel ID of value "CampaignPushChannel".<br />If < API 26 (Android O), this value is ignored. |
| Badge Count | ⛔️ | `adb_n_count` | string | Value to be used on app's badge. |
| Priority | ⛔️ | `adb_n_priority` | string | Designates the notification priority for Android - [importance](https://developer.android.com/reference/android/app/NotificationChannel#setImportance(int)) for API >= 26 (Android 8.0) or [priority](https://developer.android.com/reference/androidx/core/app/NotificationCompat.Builder#setPriority(int)) for API < 26 |
| Tag | ⛔️ | `adb_tag` | string | Identifier used to replace existing notifications in the notification drawer. If not specified, each request creates a new notification. If specified and a notification with the same tag is already being shown, the new notification replaces the existing one in the notification drawer. |
| Sticky | ⛔️ | `adb_sticky` | string | Boolean value represented as a string "true" or "false".<br />When set to false or unset, the notification is automatically dismissed when the user clicks it in the panel. When set to true, the notification persists even when the user clicks it. |
| Ticker | ⛔️ | `adb_ticker` | string | Sets the "ticker" text, which is sent to accessibility services. Prior to API level 21 (Lollipop), sets the text that is displayed in the status bar when the notification first arrives. |
| Color - Small Icon | ⛔️ | `adb_clr_icon` | string | Color for the notification's small icon.<br />Represented as six character hex, e.g. `00FF00` |
| Color - Background | ⛔️ | `adb_clr_bg` | string | Color for notification's background.<br />Represented as six character hex, e.g. `00FF00` |

### Example

Below is a sample of what a payload might look like for a carousel notification:

```json
{
	"message": {
		"android": {
			"collapse_key": "new_message",
			"priority": "HIGH",
			"data": {
				"adb_version": "1",
				"adb_template_type": "car",
				"adb_title": "Check out the new line of shoes!",
				"adb_body": "Hot deals on new releases!",
				"adb_sound": "sneakerSqueaker",
				"adb_small_icon": "chat_bubble",
				"adb_large_icon": "https://sneakerland.com/logo.png",
				"adb_uri": "https://sneakerland.com/newReleases",
				"adb_a_type": "WEBURL",
				"adb_body_ex": "We have some new inventory we think you'll like.",
				"adb_clr_body": "00EE00",
				"adb_clr_title": "AABBCC",
				"adb_clr_icon": "123456",
				"adb_clr_bg": "000000",
				"adb_car_mode": "auto",
				"adb_car_layout": "default",
				"adb_items": "[{\"img\":\"https://sneakerland.com/products/shoe1/shoe1.png\",\"txt\":\"Shoe 1 by Cool Sneaker Brand\",\"uri\":\"https://sneakerland.com/products/shoe1\"},{\"img\":\"https://sneakerland.com/products/shoe2/shoe2.png\",\"txt\":\"Shoe 2 by Lame Sneaker Brand\",\"uri\":\"https://sneakerland.com/products/shoe2\"},{\"img\":\"https://sneakerland.com/products/shoe3/shoe3.png\",\"txt\":\"Shoe 3 by Average Sneaker Brand\",\"uri\":\"https://sneakerland.com/products/shoe3\"}]",
				"customKey": "custom data"
			}
		}
	}
}
```

<Variant platform="apns" template="carousel" repeat="1"/>

### Coming soon!
