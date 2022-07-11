#### Objective-C

```objectivec
#import "MyExtension.h"
#import "MyExtensionWildcardListener.h"

@implementation MyExtension

-(instancetype) init {
    if (self = [super init]) {        
        NSError* error = nil;
        if ([[self api] registerWildcardListener:[MyExtensionWildcardListener class] 
                                             error:&error]) {
            NSLog(@"MyExtensionWildcardListener successfully registered");
        } else if (error) {
            NSLog(@"An error occurred while registering MyExtensionWildcardListener, error code: %ld", [error code]);
        }
    }

    return self;
}
```