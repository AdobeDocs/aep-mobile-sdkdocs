#### iOS

1. In Xcode, create a new file from the `Cocoa Touch Class` template and save it in your project.
2. Name your class `MyExtensionListener`, and it should be a subclass to the `ACPExtensionListener` class.

   The `MyExtensionListener.m` file contains your extension interface declaration and imports `ACPExtensionListener.h`. In the example below, the methods that are available for overriding are also displayed:

**MyExtensionListener.h**

```objectivec
#import "ACPExtensionListener.h"
#import "ACPExtensionEvent.h"

@interface MyExtensionListener : ACPExtensionListener
    - (void) hear:(ACPExtensionEvent *)event;
@end
```

3. At a minimum, you must provide an implementation for the `hear` method.  

**MyExtensionListener.m**

```objectivec
#import "MyExtensionListener.h"
#import "MyExtension.h"

@implementation MyExtensionListener 
    - (void) hear:(ACPExtensionEvent *)event {
        MyExtension* parentExtension = [self getParentExtension];
        if (parentExtension == nil) {
            NSLog(@"The parent extension was nil, skipping event");
            return;
        }

        [parentExtension handleEvent:event];
}

/**
 * Returns the parent extension that owns this listener
 */
- (MyExtension*) getParentExtension {
    MyExtension* parentExtension = nil;
    if ([[self extension] isKindOfClass:MyExtension.class]) {
        parentExtension = (MyExtension*) [self extension];
    }

    return parentExtension;
}

@end
```