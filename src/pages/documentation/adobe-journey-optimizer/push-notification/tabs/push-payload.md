---
noIndex: true
---

<Variant platform="android" api="payload-keys" repeat="3"/>

* Adobe Journey Optimizer uses [data messages](https://firebase.google.com/docs/cloud-messaging/concept-options#data_messages) with custom key-value pairs to send push notifications to client apps.
* When using [manual display and tracking](../android/manual-display-and-tracking.md), use the [MessagingPushPayload](../../public-classes-and-enum/messaging-push-payload.md) class to extract the payload values.

```json
{
   "message":{
      "android":{
         "collapse_key": "new_message",
         "priority": "HIGH",
         "data":{
            "adb_title":"Game Request",
            "adb_body":"Bob wants to play chess",
            "adb_sound" : "somesound_res",
            "adb_n_count" : "3",
            "adb_n_priority" : "PRIORITY_LOW",
            "adb_channel_id": "cid",
            "adb_icon" : "notification_icon",
            "adb_image": "www.imageUrl.com",           
            "adb_a_type": "DEEPLINK/WEBURL/OPENAPP",
            "adb_uri" : "deeplinkurl/weburl",
            "adb_act": [
                {
                    "label" : "deeplink",
                    "uri" : "notificationapp://",
                    "type" : "DEEPLINK"
                },
                {
                    "label" : "weburl",
                    "uri" : "https://www.yahoo.com",
                    "type" : "WEBURL"
                }
            ],          
            "some_custom_data_key": "some data"
         }
      }
   }
}
```

| **Key** | **Type** | **Description** |
| :------ | :------- | :-------------- |
| `adb_title` | String | The push notification's title |
| `adb_body` | String | The push notification's body |
| `adb_sound` | String | The push notification's sound |
| `adb_n_count` | String | The push notification badge count |
| `adb_n_priority` | String | The push notification's priority. For more information, please read the [Firebase documentation](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#notificationpriority) |
| `adb_channel_id` | String | The push notification's channel ID |
| `adb_icon` | String | The push notification's icon resource name |
| `adb_image` | String | The URL of the image to be displayed on the notification |
| `adb_a_type` | enum | An enum that determines what type of action will be performed when the notification is clicked. It can be one of the following values: `DEEPLINK`, `WEBURL`, or `OPENAPP`. |
| `adb_uri` | String | The URI used for deeplinking. The deeplink is used to open the appropriate webpage or app screen when the notification is clicked. |
| `adb_act` | Array | An array that contains the action object(s). |
| `adb_act.label` | String | The label for custom action button |
| `adb_act.uri` | String | The URI for custom action button |
| `adb_act.type` | enum | The action type for custom action button. It can be one of the following values: `DEEPLINK`, `WEBURL`, `OPENAPP` |

<Variant platform="ios" api="payload-keys" repeat="2"/>

```json
{
   "aps":{
      "alert":{
         "title": "Hello from CJM",
         "body": "Stay safe, wear a mask"
      },
      "sound": "dingDong",
      "badge":2,
      "mutable-content":1,
      "category": "iosCategory",
      "thread-id": "myGroup",
      "content-available":1
   },
   "some_custom_data_key": "some data",
   "adb_media": "www.imageUrl.com",
   "adb_a_type": "DEEPLINK/WEBURL/OPENAPP",
   "adb_uri": "deeplinkUrl/weburl",
}
```

| **Key** | **Type** | **Description** |
| :------ | :------- | :-------------- |
| `adb_media` | String | The URL of the media. In this situation, media refers to either an image or a video. This URL can be used to download the rich media before showing the push notification. |
| `adb_uri` | String | The URI used for deeplinking. The deeplink is used to open appropriate webpage or app screen when the notification is clicked. |
| `adb_a_type` | enum | An enum that determines what type of action will be performed when the notification is selected. It can be one of the following string values: `DEEPLINK`, `WEBURL`, `OPENAPP`. |
| `adb_act` | Array | An array that contains the action object(s). |
| `adb_act.aid` | String | The ID for the action object. |
| `adb_act.label` | String | The name for the action object |
| `adb_act.type` | String | The type for the action object. It can be one of the following string values: `DEEPLINK`, `WEBURL`, `DISMISS` |