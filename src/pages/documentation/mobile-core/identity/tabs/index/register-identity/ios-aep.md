Register the Identity extension in your app's `didFinishLaunchingWithOptions` function:

#### Swift

<InlineAlert variant="warning" slots="text"/>

When including both Identity and Identity for Edge Network extensions, register the extensions using their full Swift module names, such as `AEPIdentity.Identity.self`.

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
     MobileCore.registerExtensions([Identity.self, ...], {
       ...
     })
}
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 [AEPMobileCore registerExtensions:@[AEPMobileIdentity.class, ...] completion:^{
   ...
 }];
 return YES;
}
```