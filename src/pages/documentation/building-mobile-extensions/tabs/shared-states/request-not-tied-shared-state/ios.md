#### Objective-C

```objectivec
- (void) onUnregister {
    NSError* error = nil;
    NSDictionary* configurationSharedState = [self.api getSharedEventState:@"com.adobe.module.configuration" event:nil error:&error];
    if (configurationSharedState) {
        NSLog(@"The configuration when onUnregister was called was \n:%@", configurationSharedState);
    }
}
```