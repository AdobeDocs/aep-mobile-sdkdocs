Register the Identity extension in your app's `didFinishLaunchingWithOptions` function:

#### Objective-C

**Syntax**

```objectivec
+ (void) registerExtension;
```
**Example**

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [ACPUserProfile registerExtension];
  // Override point for customization after application launch.
  return YES;
}
```

#### Swift

**Syntax**

```swift
static func registerExtensions()
```

**Example**

```swift

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  ACPUserProfile.registerExtension()
  // Override point for customization after application launch.
  return true;
}
```