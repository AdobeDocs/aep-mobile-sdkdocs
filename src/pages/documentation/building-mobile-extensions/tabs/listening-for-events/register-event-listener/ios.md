#### Objective-C

In iOS the event listeners are registered using the `registerListener` method of the `ACPExtensionApi` interface. You can access this interface by using the `api` property in `ACPExtension`.

**MyExtension.h**

```objectivec
#import "ACPExtension.h"
#import "ACPExtensionEvent.h"

@interface MyExtension : ACPExtension

- (void) handleEvent: (ACPExtensionEvent*) event;

@end
```

**MyExtension.m**

```objectivec
#import "MyExtension.h"
#import "MyExtensionListener.h"

@implementation MyExtension 

- (instancetype) init {
    if (self = [super init]) {
        NSError *error = nil;

        // register a listener for configuration events
        if ([self.api registerListener:[MyExtensionListener class]
                             eventType:@"com.adobe.eventType.hub"
                           eventSource:@"com.adobe.eventSource.sharedState"
                                 error:&error]) {
            NSLog(@"MyExtensionListener successfully registered for Event Hub Shared State events");
        } else if (error) {
            NSLog(@"An error occured while registering MyExtensionListener, error code: %ld", [error code]);
        }
    }

    return self;
}

- (nullable NSString *) name {
    return @"my.company";
}

- (NSString *) version {
    return @"1.0.0";
}

- (void) onUnregister {
    [super onUnregister];
    // extension unregistered successfully - perform cleanup
}

- (void) handleEvent: (ACPExtensionEvent*) event {
    // process event
}
@end
```