#### Objective-C

**Syntax**

```objectivec
+ (void) collectMessageInfo: (nonnull NSDictionary*) messageInfo;
```

* _messageInfo_ is a dictionary that contains the delivery ID, message ID, and action type for a local or push notification for which there were interactions. The delivery and message IDs are extracted from the notification payload.

**Example**

```objectivec
// Handle notification interaction from background or closed
-(void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler{
    dispatch_async(dispatch_get_main_queue(), ^{
        NSDictionary *userInfo = response.notification.request.content.userInfo;
        NSString *broadlogId = userInfo[@"_mId"] ?: userInfo[@"broadlogId"];
        NSString *deliveryId = userInfo[@"_dId"] ?: userInfo[@"deliveryId"];

        if(!broadlogId.length || !deliveryId.length){
          return;
      }
       // Send Click Tracking since the user did click on the notification
       [ACPCore collectMessageInfo:@{
                                      @"broadlogId" : broadlogId,
                                      @"deliveryId": deliveryId,
                                      @"action": @"2"
                                      }];
       // Send Open Tracking since the user opened the app
       [ACPCore collectMessageInfo:@{
                                      @"broadlogId" : broadlogId,
                                      @"deliveryId": deliveryId,
                                      @"action": @"1"
                                      }];
    });
}
```

#### Swift

**Syntax**

```swift
+ (void) collectMessageInfo: (nonnull NSDictionary*) messageInfo;
```

* _messageInfo_ is a dictionary that contains the delivery ID, message ID, and action type for a local or push notification for which there were interactions. The delivery and message IDs are extracted from the notification payload.

**Example**

```swift
// Handle notification interaction from background or closed
func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
       DispatchQueue.main.async(execute: {
               let userInfo = response.notification.request.content.userInfo
               var broadlogId:String = (userInfo["_mId"] ?? userInfo["broadlogId"]) as! String
               var deliveryId:String = (userInfo["_dId"] ?? userInfo["deliveryId"]) as! String

               if (broadlogId.count == 0 || deliveryId.count == 0) {
              return
          }
          // Send Click Tracking since the user did click on the notification
                    ACPCore.collectMessageInfo([
            "broadlogId": broadlogId,
                        "deliveryId": deliveryId,
                        "action": "2"
                    ])
                    // Send Open Tracking since the user opened the app
                    ACPCore.collectMessageInfo([
            "broadlogId": broadlogId,
                        "deliveryId": deliveryId,
                        "action": "1"
                    ])
       })
}
```