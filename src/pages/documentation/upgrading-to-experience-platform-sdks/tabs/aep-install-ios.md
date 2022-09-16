#### iOS

**Objective-C**

```
#import "ACPCore.h"
#import "ACPAnalytics.h"
#import "ACPIdentity.h"

- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [ACPCore setLogLevel:ACPMobileLogLevelDebug];
    [ACPAnalytics registerExtension];
    [ACPIdentity registerExtension];
    [ACPCore start:^{
      // add your app id from the "Environments" tab on Launch.
          [ACPCore configureWithAppId:@"your-app-id"];
    }];
    return YES;
}
```

**Swift**

```
import ACPCore
import ACPAnalytics
import ACPIdentity

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
  ACPCore.setLogLevel(ACPMobileLogLevel.debug)
  ACPAnalytics.registerExtension()
  ACPIdentity.registerExtension()
  ACPCore.start(){
      ACPCore.configureWithAppId("your-app-id") 
  }
  return true
}
```
