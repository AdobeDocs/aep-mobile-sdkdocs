#### Objective-C

```objc
- (void) onUnregister {
    NSError* error = nil;
    if (![self.api clearSharedEventStates:&error] && error) {
        NSLog(@"Error clearing shared states for extension: %@ %ld", [error domain], [error code]);
    }
}
```