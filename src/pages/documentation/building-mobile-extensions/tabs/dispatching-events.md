<Variant platform="android" task="create" repeat="3"/>

#### Java

To create events in Android, you must first import `com.adobe.marketing.mobile.Event`:

```java
import com.adobe.marketing.mobile.Event;

...
List<Integer> pageOrder = new ArrayList<Integer>();
pageOrder.add(1);
pageOrder.add(2);
pageOrder.add(3);
Map<String, Object> eventData = new HashMap<String, Object>();
eventData.put("id", "clickid53");
eventData.put("localTemp", 72.6);
eventData.put("pageClicks", 23);
eventData.put("pageOrder", pageOrder);
Event newEvent = new Event.Builder("MyCustomEvent",             
                                   "com.myCompany.eventType.custom",
                                   "com.myCompany.eventSource.custom")
                                   .setEventData(eventData).build();
```

<Variant platform="ios" task="create" repeat="3"/>

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

<Variant platform="android" task="dispatch" repeat="2"/>

#### Java

```java
public void loginButtonClicked() {
    // construct the event to dispatch 
    Map<String, String> contextData = new HashMap<String, String>();
    contextData.put("username", "example@mail.com");
    contextData.put("dayofweek", "Monday");
    Map<String, Object> analyticsAction = new HashMap<String, Object>();
    analyticsAction.put("action", "clickLogin");
    analyticsAction.put("contextdata", contextData);
    Event analyticsEvent = new Event.Builder("Login click event",
                "com.adobe.eventType.generic.track",
                "com.adobe.eventSource.requestContent")
                .setEventData(analyticsAction).build();

    // dispatch the analytics event
    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.e("loginButtonClicked", String.format("An error occurred while dispatching                 event %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
        }
    };
    MobileCore.dispatchEvent(analyticsEvent, errorCallback);
}
```

<Variant platform="ios" task="dispatch" repeat="2"/>

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

<Variant platform="android" task="dispatch-paired" repeat="7"/>

#### Java

You can have this code in an application's `Activity` or in one of your extension's API classes:

```java
// how to dispatch a paired event with an associated response callback
ExtensionErrorCallback<ExtensionError> errorCallback = new         ExtensionErrorCallback<ExtensionError>() {
    @Override
    public void error(final ExtensionError errorCode) {
        Log.w("dispatchEventCallback", String.format("An error occurred when dispatching event, %s", errorCode.getErrorName()));
    }
};

AdobeCallback<Event> responseEventCallback = new AdobeCallback<Event>() {
    @Override
    public void call(final Event value) {
        Log.d("dispatchEventCallback", String.format("Response event received, type %s and source %s",
                                                     value.getType(), value.getSource()));
    }
};
Event event = new Event.Builder("dispatchEventWithResponseCallback", "com.myCompany.eventType.custom", "com.myCompany.eventSource.request").build();
MobileCore.dispatchEventWithResponseCallback(event, responseEventCallback, errorCallback);
...
```

Register a listener for this event type and source in `MyExtension.java`:

```java
// register a listener for a the request event type and source
protected MyExtension(ExtensionApi extensionApi) {
        super(extensionApi);

        getApi().registerEventListener("com.myCompany.eventType.custom", "com.myCompany.eventSource.request", MyListener.class, null);
}
...
```

Dispatch a response event when the request is received in the `hear` method of your listener in `MyListener.java`:

```java
public class MyListener extends ExtensionListener {

    protected MyListener(final ExtensionApi extension, final String type, final String source) {
        super(extension, type, source);
    }

    @Override
    public void hear(Event event) {
        ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
            @Override
            public void error(final ExtensionError errorCode) {
                Log.w(getParentExtension().getName(), String.format("An error occurred when dispatching event, %s",
                        errorCode.getErrorName()));
            }
        };
        Event responseEvent = new Event.Builder("response event", "com.myCompany.eventType.custom", "com.myCompany.eventSource.response").build();

        // sending a paired response event for the request event
        MobileCore.dispatchResponseEvent(responseEvent, event, errorCallback);
    }

    @Override
    protected MyExtension getParentExtension() {
        return (MyExtension)super.getParentExtension();
    }

    ...
}
```

<Variant platform="ios" task="dispatch-paired" repeat="7"/>

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