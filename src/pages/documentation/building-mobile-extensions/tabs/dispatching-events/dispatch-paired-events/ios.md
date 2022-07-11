#### Objective-C

You can have this code in a ViewController class or in one of your extensions public API classes:

```objectivec
// how to dispatch a paired event with an associated response callback
NSError *eventError = nil;
ACPExtensionEvent *event = [ACPExtensionEvent 
extensionEventWithName:@"Dispatch Request Event with Callback"
                  type:@"com.myCompany.eventType.custom"
                source:@"com.myCompany.eventSource.request"
                  data:@{}
                 error:&eventError];

if (!event && eventError) {
    NSLog(@"An error occurred while constructing event '%@': %ld", event.eventName, [eventError code]);
    return;
}

// dispatch the event and handle the callback
NSError *dispatchError = nil;
if ([ACPCore dispatchEventWithResponseCallback:event responseCallback:^(ACPExtensionEvent * _Nonnull responseEvent) {
    NSLog(@"Response event received, with type %@, source %@ and data %@", responseEvent.eventType, responseEvent.eventSource, responseEvent.eventData);
        // process event data
} error:&dispatchError]) {
    NSLog(@"Dispatched a paired request event '%@'", event.eventName);
} else if (dispatchError) {
    NSLog(@"An error occurred dispatching event '%@': %ld", event.eventName, [dispatchError code]);
}
...
```

Register a listener for this event type and source in MyExtension.m:

```objectivec
// register a listener for a the request event type and source
- (instancetype) init {
    if (self = [super init]) {
        NSError *error = nil;
        if ([self.api registerListener:[MyExtensionListener class]
                             eventType:@"com.myCompany.eventType.custom"
                           eventSource:@"com.myCompany.eventSource.request"
                                 error:&error]) {
               NSLog(@"MyExtensionListener successfully registered for request events");
         } else if (error) {
            NSLog(@"There was an error registering MyExtensionListener: %ld", [error code]);
         }
...
}
```

Dispatch a response event when the request is received in the `hear` method of your Listener in MyListener.m:

```objectivec
- (void) hear: (nonnull ACPExtensionEvent*) event {
    NSError *dispatchError = nil;
    NSDictionary* responseData = @{@"responsekey": @"responsevalue"};
    ACPExtensionEvent* responseEvent = [ACPExtensionEvent 
    extensionEventWithName:@"Paired Response Event"                                                                                             type:@"com.myCompany.eventType.custom"                                                                                             source:@"com.myCompany.eventSource.response"
                      data:responseData
                     error:&dispatchError];

    // sending a paired response event for the request event
    if ([ACPCore dispatchResponseEvent:responseEvent requestEvent:event error:&dispatchError]) {
        NSLog(@"Dispatched response event with data '%@'", responseData);
    } else if (dispatchError) {
        NSLog(@"An error occurred dispatching response event : %ld", [dispatchError code]);
    }
}
```