<InlineAlert variant="info" slots="text"/>

You should use the `MessagingPushPayload` class to extract the payload values.

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
            "." : "PRIORITY_LOW",
            "adb_channel_id": "cid",
            "adb_icon" : "notification_icon",
            "adb_image": "www.imageUrl.com",           
            "adb_a_type": "DEEPLINK/WEBURL/DISMISS",
            "adb_uri" : "uri/weburl",
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
                },
                {
                    "label" : "dismiss",
                    "uri" : "",
                    "type" : "DISMISS"
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
| `adb_a_type` | enum | An enum that determines what type of action will be performed when the notification is clicked. It can be one of the following values: `DEEPLINK`, `WEBURL`, or `DISMISS`. |
| `adb_uri` | String | The URI used for deeplinking. The deeplink is used to open the appropriate webpage or app screen when the notification is clicked. |
| `adb_act` | Array | An array that contains the action object(s). |
| `adb_act.label` | String | The label for the action object |
| `adb_act.uri` | String | The URI for the action object |
| `adb_act.type` | enum | The action type for the action object. It can be one of the following values: `DEEPLINK`, `WEBURL`, `DISMISS` |