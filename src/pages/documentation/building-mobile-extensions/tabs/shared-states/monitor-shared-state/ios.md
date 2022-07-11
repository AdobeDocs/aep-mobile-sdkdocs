#### Objective-C

**MyExtension.m**

```objc
- (instancetype) init {
    NSError* error = nil;
    if ([self.api registerListener: [MyExtensionListener class] eventType:@"com.adobe.eventType.hub" eventSource:@"com.adobe.eventSource.sharedState" error:&error]) {  
        NSLog(@"MyExtensionListener was registered");
   } else if (error) {  
           NSLog(@"An error occured while registering MyExtensionListener: %ld", [error code]);
    }
}
```

**MyExtensionListener.m**

```objc
- (void) hear:(ACPExtensionEvent *)event {
    NSDictionary* eventDataDict = event.eventData;
    NSString* stateowner = [eventDataDict objectForKey:@"stateowner"];
    if (stateowner && [stateowner isEqualToString:@"com.adobe.module.configuration"]) {  
        // do something with the updated configuration information
      }
}
```