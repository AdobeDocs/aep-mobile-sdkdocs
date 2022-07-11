#### Objective-C

To create events in iOS, you must first import `ACPExtensionEvent.h` from the `ACPCore` framework:

```objectivec
#import "ACPExtensionEvent.h"
...
NSError* error = nil;
NSDictionary* eventData = @{
            @"id" : @"clickid53",
            @"localTemp": @72.6,
            @"pageClicks" : @23,
            @"pageOrder" : @[@1,@2,@3,@4]
};
ACPExtensionEvent* newEvent = [ACPExtensionEvent extensionEventWithName:@"MyCustomEvent"          type:@"com.myCompany.eventType.custom"
        source:@"com.myCompany.eventSource.custom" 
        data:eventData
        error:&error];
if (error) {
    NSLog(@"Error constructing new event %@:%ld", [error domain], [error code]);
}
```