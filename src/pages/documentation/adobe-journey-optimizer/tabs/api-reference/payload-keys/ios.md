```json
{
   "aps":{
      "alert":{
         "title":"Hello from CJM",
         "body":"Stay safe, wear a mask"
      },
      "sound":"dingDong",
      "badge":2,
      "mutable-content":1,
      "category":"iosCategory",
      "thread-id":"myGroup",
      "content-available":1
   },
   "a":"x",
   "b":"y",
   "adb_media":"www.imageUrl.com",
   "adb_a_type":"DEEPLINK/WEBURL/DISMISS",
   "adb_uri":"deeplink://url / weburl",
   "adb_act":[
      {
         "aid":"customId1",
         "label":"dismiss",
         "type":"DISMISS"
      }
   ]
}
```

| **Key** | **Type** | **Description** |
| :------ | :------- | :-------------- |
| `adb_media` | String | The URL of the media. In this situation, media refers to either an image or a video. This URL can be used to download the rich media before showing the push notification. |
| `adb_uri` | String | The URI used for deeplinking. The deeplink is used to open appropriate webpage or app screen when the notification is clicked. |
| `adb_a_type` | enum | An enum that determines what type of action will be performed when the notification is selected. It can be one of the following string values: `DEEPLINK`, `WEBURL`, `DISMISS`. |
| `adb_act` | Array | An array that contains the action object(s). |
| `adb_act.aid` | String | The ID for the action object. |
| `adb_act.label` | String | The name for the action object |
| `adb_act.type` | String | The type for the action object. It can be one of the following string values: `DEEPLINK`, `WEBURL`, `DISMISS` |