#### Objective-C

```objectivec
- (void) hear: (ACPExtensionEvent*) event {
    NSError* error = nil;
    NSDictionary* configurationSharedState = [[[self extension] api] getSharedEventState:@"com.adobe.module.configuration" event:event error:&error];
    if (configurationSharedState) {
        NSLog(@"The configuration when event \"%@\" was sent was:\n%@", event.eventName, configurationSharedState);
    }
}
```