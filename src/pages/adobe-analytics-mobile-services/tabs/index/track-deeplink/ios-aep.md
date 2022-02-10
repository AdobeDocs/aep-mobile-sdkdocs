
#### Swift

**Syntax**

```swift
public static func trackAdobeDeepLink(url: String)
```

**Example**

```swift
func application(_ application: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    AEPMobileServices.trackAdobeDeepLink(url)
    /*
     Handle deep link
     */
    return true
}
```

#### Objective-C

**Syntax**

```objective-c
+ (void) trackAdobeDeepLink: (NSURL* _Nonnull) deeplink;
```

**Example**

```objective-c
-(BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation{
    [AEPMobileServices trackAdobeDeepLink:url];
    ....
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `scene(_:openURLContexts:)` method as follows:

**Swift**

```swift
func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    guard let urlContexts = URLContexts.first else { return }
    AEPMobileServices.trackAdobeDeepLink(urlContexts.url)
    /*
     Handle deep link
     */
}
```
**Objective-C**

```objective-c
- (void)scene:(UIScene *)scene openURLContexts:(nonnull NSSet<UIOpenURLContext *> *)URLContexts {
    NSURL *url = [[URLContexts allObjects] firstObject].URL;
    [AEPMobileServices trackAdobeDeepLink:url];
}
```