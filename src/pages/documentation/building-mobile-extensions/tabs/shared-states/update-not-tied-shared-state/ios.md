#### Objective-C

In the following example, the extension is setting a default state in the `init` method.

```objectivec
- (nullable instancetype) init {
    // construct data to be shared in a JSON format
    NSDictionary* newEventData =
    @{@"customData":@{
              @"customElement":@{
                      @"customInt":@125,
                      @"customString":@"example"
                      }
              }};
    NSError* error = nil;
    if (![self.api setSharedEventState:newEventData event:nil error:&error] && error) {
        NSLog(@"Error setting default shared state %@:%ld", [error domain], [error code]);
    }
    ...
}
```