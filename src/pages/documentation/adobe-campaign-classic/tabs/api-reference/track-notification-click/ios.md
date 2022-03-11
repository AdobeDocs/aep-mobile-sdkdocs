<InlineAlert variant="info" slots="text"/>

You can pass the `launchOptions` that were received upon opening the application or `userInfo`, which contains the received push payload in `trackInfo`. If `trackInfo` is null or does not contain the necessary tracking identifiers, `broadlogId` (`_mId`) and `deliveryId` (`_dId`), a track request is **not** sent.

#### Swift

**Syntax**

```swift
func trackNotificationClick(_ trackInfo: [String: String])
```

**Example**

```swift
func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
      guard let userInfo = response.notification.request.content.userInfo as? [String: String] else {
          return;
      }
      ACPCampaignClassic.trackNotificationClick(userInfo);
      completionHandler();
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) trackNotificationClick: (nonnull NSDictionary<NSString*, NSString*>*) trackInfo;
```

**Example**

```objectivec
-(void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler
{
    NSLog(@"User Info : %@",response.notification.request.content.userInfo);
    // Track action selected by the user for a given notification
    [ACPCampaignClassic             trackNotificationClick:response.notification.request.content.userInfo];
completionHandler();
}
```