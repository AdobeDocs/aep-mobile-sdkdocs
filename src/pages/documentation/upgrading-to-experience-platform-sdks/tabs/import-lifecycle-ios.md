#### iOS

**Objective-C**

Import the Lifecycle framework:

```
#import "ACPLifecycle.h"
```

Register the Lifecycle extension with the SDK Core by adding the following to your app's application:didFinishLaunchingWithOptions: delegate method:

```
- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // register the lifecycle extension
    [ACPLifecycle registerExtension];
}
```

**Swift**

In Swift, importing `ACPCore` also imports the necessary Lifecycle APIs:

```
import ACPCore
```

Register the Lifecycle extension with the SDK Core by adding the following in your app's `application:didFinishLaunchingWithOptions:` delegate method:

```
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // register the lifecycle extension
    ACPLifecycle.registerExtension();
}
```