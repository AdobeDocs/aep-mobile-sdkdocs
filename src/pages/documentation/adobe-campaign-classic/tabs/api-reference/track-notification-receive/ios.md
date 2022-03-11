<InlineAlert variant="info" slots="text"/>

You can pass the `launchOptions` that were received upon opening the application or `userInfo` , which contains the received push payload in `trackInfo`. If `trackInfo` is null or does not contain the necessary tracking identifiers, `broadlogId` (`_mId`) and `deliveryId` (`_dId`), a track request is **not** sent.

#### Swift

**Syntax**

```swift
func trackNotificationReceive(_ trackInfo: [String: String])
```

**Example**

```swift
ACPCampaignClassic.trackNotificationReceive(trackInfo[String:String])
```

#### Objective-C

**Syntax**

```objectivec
+ (void) trackNotificationReceive: (nonnull NSDictionary<NSString*, NSString*>*) trackInfo;
```

**Example**

```objectivec
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)launchOptions fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler 
{
    if ( launchOptions) NSLog(@"launchOptions: %@", [launchOptions description]);
    // Tracking silent push notification receive
    if ( [launchOptions[@"aps"][@"content-available"] intValue] == 1 ) {
        NSLog(@"Silent Push Notification");
        [ACPCampaignClassic trackNotificationReceive:launchOptions];
        completionHandler(UIBackgroundFetchResultNoData);
    }
}
```