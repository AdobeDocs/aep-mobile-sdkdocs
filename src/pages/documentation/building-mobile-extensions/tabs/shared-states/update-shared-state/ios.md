#### Objective-C

```objectivec
(void) hear: (nonnull ACPExtensionEvent*) event {
    // construct the data to be shared in a JSON format
    NSDictionary* newEventData =
    @{@"customData":@{
              @"customElement":@{
                      @"customInt":@125,
                      @"customString":@"example"
                      }
              }};
    NSError* error = nil;
    if (![self.extension.api setSharedEventState:newEventData event:event error:&error] && error) {
        NSLog(@"Error setting shared state %@:%ld", [error domain], [error code]);
    }
}
```