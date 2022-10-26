<Variant platform="android" task="clear" repeat="2"/>

#### Java

```java
@Override
public void onUnregistered() {
    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.d("MyExtension", String.format("An error occurred while clearing the shared states %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
        }
    };
    getApi().clearSharedEventStates(errorCallback);
}
```

<Variant platform="ios" task="clear" repeat="2"/>

#### Objective-C

```objc
- (void) onUnregister {
    NSError* error = nil;
    if (![self.api clearSharedEventStates:&error] && error) {
        NSLog(@"Error clearing shared states for extension: %@ %ld", [error domain], [error code]);
    }
}
```

<Variant platform="android" task="monitor" repeat="5"/>

#### Java

**MyExtension.java**

```java
MyExtension(final ExtensionApi extensionApi) {
    super(extensionApi);
    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.e("MyExtension", String.format("An error occurred while registering MySharedStateListener %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
        }
    };

    getApi().registerEventListener("com.adobe.eventType.hub", "com.adobe.eventSource.sharedState", MySharedStateListener.class, errorCallback);
}
```

**MySharedStateListener.java**

```java
@Override
public void hear(final Event event) {
    Map<String, Object> eventData = event.getEventData();
    if (eventData == null) {
        return;
    }

    String stateOwner = (String) eventData.get("stateowner");
    if ("com.adobe.module.configuration".equals(stateOwner)) {
        // do something with the updated configuration information
    }
}
```

<Variant platform="ios" task="monitor" repeat="5"/>

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

<Variant platform="android" task="request" repeat="2"/>

#### Java

```java
@Override
public void hear(final Event event) {
    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.e("MyListener", String.format("An error occurred while retrieving the shared state for configuration %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
        }
    };

    Map<String, Object> configurationSharedState = parentModule.getSharedEventState("com.adobe.module.configuration", event, errorCallback);
    Log.d("MyListener", String.format("The configuration when event %s was sent was: %s", event.getName(), configurationSharedState));
    ...
}
```

<Variant platform="ios" task="request" repeat="2"/>

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

<Variant platform="android" task="request-not-tied" repeat="2"/>

#### Java

```java
@Override
public void onUnregistered() {
    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.e("MyExtension", String.format("An error occurred while retrieving the shared state for configuration %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
        }
    };

    Map<String, Object> configurationSharedState = getApi().getSharedEventState("com.adobe.module.configuration", null, errorCallback);
    Log.d("MyExtension", String.format("Latest configuration was: %s", configurationSharedState));
    ...
}
```

<Variant platform="ios" task="request-not-tied" repeat="2"/>

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

<Variant platform="android" task="update" repeat="2"/>

#### Java

```java
@Override
public void hear(final Event event) {
    Map<String, Object> customElement = new HashMap<String, Object>();
    customElement.put("customInt", 125);
    customElement.put("customString", "example");
    Map<String, Object> customData = new HashMap<String, Object>();
    customData.put("customElement", customElement);
    Map<String, Object> newEventData = new HashMap<String, Object>();
    newEventData.put("customData", customData);

    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.d("MyListener", String.format("An error occurred while setting the shared state %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
        }
    };
    getApi().setSharedEventState(newEventData, event, errorCallback);
    ...
}
```

<Variant platform="ios" task="update" repeat="2"/>

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

<Variant platform="android" task="update-not-tied" repeat="3"/>

#### Java

In the following example, the extension is setting a default state in constructor.

```java
MyExtension(final ExtensionApi extensionApi) {
        super(extensionApi);

        Map<String, Object> customElement = new HashMap<String, Object>();
        customElement.put("customInt", 125);
        customElement.put("customString", "example");
        Map<String, Object> customData = new HashMap<String, Object>();
        customData.put("customElement", customElement);
        Map<String, Object> newEventData = new HashMap<String, Object>();
        newEventData.put("customData", customData);
        ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
            @Override
            public void error(final ExtensionError extensionError) {
                Log.d("MyExtension", String.format("An error occurred while setting the shared state %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
            }
        };
        getApi().setSharedEventState(newEventData, null, errorCallback);
        ...
    }
```

<Variant platform="ios" task="update-not-tied" repeat="3"/>

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