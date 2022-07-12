On iOS, the registration occurs by passing UserProfile extension to the [MobileCore.registerExtensions API](../mobile-core/api-reference.md#registerextension-s).

#### Swift

**Syntax**

```swift
static func registerExtensions(_ extensions: [NSObject.Type], 
                               _ completion: (() -> Void)? = nil)
```

**Example**

```swift
import AEPUserProfile

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  
  MobileCore.registerExtensions([UserProfile.self])
  // Override point for customization after application launch.
  return true;
}

```

#### Objective-C

**Syntax**

```objectivec
+ (void) registerExtensions: (NSArray<Class*>* _Nonnull) extensions 
                 completion: (void (^ _Nullable)(void)) completion;
```
**Example**

```objectivec
@import AEPUserProfile;

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  
  [AEPMobileCore registerExtensions:@[AEPMobileUserProfile.class] completion:nil];
  // Override point for customization after application launch.
  return YES;
}

```