#### Objective-C

The best place to register your extension on iOS is in your AppDelegate's `application:didFinishLaunchingWithOptions:` method.

<InlineAlert variant="info" slots="text"/>

Some registration errors, such as undefined names, name conflicts, or type checking issues, occur immediately. Other errors might occur asynchronously and are reported through the `unexpectedError` callback before the extension is unregistered.

```objectivec
#import "ACPCore.h"
#import "MyExtension.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    NSError *error = nil;
    if ([ACPCore registerExtension:[MyExtension class] error:&error]) {
        NSLog(@"MyExtension was registered");
    } else {
        NSLog(@"Error registering MyExtension: %@ %d", [error domain], (int)[error code]);
    }

    ... // register other extensions
    [ACPCore start:^{
        dispatch_async(dispatch_get_main_queue(), ^{
            // SDK was initialized
         });
    }];
    return YES;
}

@end
```