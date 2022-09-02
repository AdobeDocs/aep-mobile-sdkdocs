#### ios

The Mobile Services SDK syntax and usage examples for these API are:

**Mobile Services SDK**

```
// syntax
+ (void) trackState:(NSString *)state data:(NSDictionary *)data;

// usage
[ADBMobile trackState:@"MainPage" data:@{@"firstVisit":@true}];
```

```
// syntax
+ (void) trackAction:(NSString *)action data:(NSDictionary *)data;

// usage
[ADBMobile trackAction:@"linkClicked" data:@{@"url":@"https://www.adobe.com"}];
```

**AEP SDK**

The Platform SDKs have moved the `trackAction` and `trackState` APIs to the MobileCore extension. In addition, the NSDictionary has been changed from `<NSString, NSObject>` to `<NSString, NSString>`. The syntax is:

```
+ (void) trackAction: (nullable NSString*) action data: (nullable NSDictionary<NSString*, NSString*>*) data;
```

```
+ (void) trackState: (nullable NSString*) action data: (nullable NSDictionary<NSString*, NSString*>*) data;
```

The usage examples are:

**Objective-C**

```
[ACPCore trackState:@"MainPage" data:@{@"firstVisit":@"true"}];
[ACPCore trackAction:@"linkClicked" data:@{@"url":@"https://www.adobe.com"}];
```

**Swift**

```
ACPCore.trackState("MainPage", data: ["firstVisit": "true"])
ACPCore.trackAction("linkClicked", data: ["url": "https://www.adobe.com"])
```
