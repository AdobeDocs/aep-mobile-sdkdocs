#### Objective-C

```objc
#import "ACPExtensionEvent.h"

- (IBAction) loginButtonClicked:(id)sender {
    // construct the event to dispatch (see above)
    ACPExtensionEvent* newEvent = ...;

    // dispatch the event
    NSError* error = nil;
    if (![ACPCore dispatchEvent:newEvent error:&error] && error) {
        NSLog(@"Error dispatching event %@:%ld", [error domain], [error code]);
    };
}
```