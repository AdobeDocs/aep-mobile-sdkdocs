<Variant platform="android" task="create" repeat="5"/>

#### Java

Create a new Java class for your listener, extend the base class `ExtensionListener`, and implement the required constructor and hear method. You can also override the `getParentExtension` method to retrieve your custom extension class instead of the base `Extension` class.

```java
package com.test.company;

import com.adobe.marketing.mobile.Extension;
import com.adobe.marketing.mobile.ExtensionListener;
import com.adobe.marketing.mobile.ExtensionApi;
import com.adobe.marketing.mobile.Event;

class MyListener extends ExtensionListener {
    protected MyListener(final ExtensionApi extension, final String type, final String source) {
        super(extension, type, source);
    }

    @Override
    public void hear(final Event event) {
        // run the event processing on its own executor in the parent extension class
        getParentExtension().handleConfigurationEvent(event);
    }

    @Override
    protected MyExtension getParentExtension() {
        return (MyExtension)super.getParentExtension();
    }
}
```

Create an executor in your `Extension` class for event processing and use it when one of your listeners is called. This way you do not have to worry about how long your event handler is taking.

```java
package com.test.company;

import android.util.Log;

import com.adobe.marketing.mobile.Event;
import com.adobe.marketing.mobile.Extension;
import com.adobe.marketing.mobile.ExtensionApi;
import com.adobe.marketing.mobile.ExtensionError;
import com.adobe.marketing.mobile.ExtensionErrorCallback;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class MyExtension extends Extension {
    private final Object executorMutex = new Object();
    private ExecutorService executor;

    public MyExtension(final ExtensionApi moduleApi) {
        super(moduleApi);

        ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
            @Override
            public void error(final ExtensionError extensionError) {
                // something went wrong, the listener couldn't be registered
            }
        };
        getApi().registerEventListener("com.adobe.eventType.configuration",
            "com.adobe.eventSource.requestContent", MyListener.class, errorCallback);
    }

    @Override
    public final String getName() {
        return "my.test.company";
    }

    @Override
    public final String getVersion() {
        return "1.0.0";
    }

    @Override
    public final void onUnregistered() {
        // extension unregistered successfully - perform cleanup
    }

    void handleConfigurationEvent(final Event event) {
        getExecutor().execute(new Runnable() {
            @Override
            public void run() {
                Log.d(getName(), String.format("Started processing new event of type %s and source %s", event.getType(), event.getSource()));
                // do your processing here
            }
        });
    }

    private ExecutorService getExecutor() {
        synchronized (executorMutex) {
            if (executor == null) {
                executor = Executors.newSingleThreadExecutor();
            }

            return executor;
        }
    }
}
```

<Variant platform="ios" task="create" repeat="8"/>

#### iOS

1. In Xcode, create a new file from the `Cocoa Touch Class` template and save it in your project.
2. Name your class `MyExtensionListener`, and it should be a subclass to the `ACPExtensionListener` class.

The `MyExtensionListener.m` file contains your extension interface declaration and imports `ACPExtensionListener.h`. In the example below, the methods that are available for overriding are also displayed:

**MyExtensionListener.h**

```objectivec
#import "ACPExtensionListener.h"
#import "ACPExtensionEvent.h"

@interface MyExtensionListener : ACPExtensionListener
    - (void) hear:(ACPExtensionEvent *)event;
@end
```

3. At a minimum, you must provide an implementation for the `hear` method.  

**MyExtensionListener.m**

```objectivec
#import "MyExtensionListener.h"
#import "MyExtension.h"

@implementation MyExtensionListener 
    - (void) hear:(ACPExtensionEvent *)event {
        MyExtension* parentExtension = [self getParentExtension];
        if (parentExtension == nil) {
            NSLog(@"The parent extension was nil, skipping event");
            return;
        }

        [parentExtension handleEvent:event];
}

/**
 * Returns the parent extension that owns this listener
 */
- (MyExtension*) getParentExtension {
    MyExtension* parentExtension = nil;
    if ([[self extension] isKindOfClass:MyExtension.class]) {
        parentExtension = (MyExtension*) [self extension];
    }

    return parentExtension;
}

@end
```

<Variant platform="android" task="register-event" repeat="3"/>

#### Java

Event listeners in Android are registered by using the `registerEventListener` method of the `ExtensionApi` interface. You can access this interface by using the `getApi` method in `Extension`. The following example shows how to register the listener from your extension constructor.

```java
import com.adobe.marketing.mobile.Extension;
import com.adobe.marketing.mobile.ExtensionApi;

public class MyExtension extends Extension {

    public MyExtension(final ExtensionApi moduleApi) {
        super(moduleApi);

        ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
            @Override
            public void error(final ExtensionError extensionError) {
                // something went wrong, the listener couldn't be registered
            }
        };
        getApi().registerEventListener("com.adobe.eventType.hub",
                "com.adobe.eventSource.sharedState", MyListener.class, errorCallback);
    }

    @Override
    public final String getName() {
        return "my.company";
    }

    @Override
    public final String getVersion() {
        return "1.0.0";
    }

    @Override
    public final void onUnregistered() {
        // extension unregistered successfully - perform cleanup
    }
}
```

<Variant platform="ios" task="register-event" repeat="6"/>

#### Objective-C

In iOS the event listeners are registered using the `registerListener` method of the `ACPExtensionApi` interface. You can access this interface by using the `api` property in `ACPExtension`.

**MyExtension.h**

```objectivec
#import "ACPExtension.h"
#import "ACPExtensionEvent.h"

@interface MyExtension : ACPExtension

- (void) handleEvent: (ACPExtensionEvent*) event;

@end
```

**MyExtension.m**

```objectivec
#import "MyExtension.h"
#import "MyExtensionListener.h"

@implementation MyExtension 

- (instancetype) init {
    if (self = [super init]) {
        NSError *error = nil;

        // register a listener for configuration events
        if ([self.api registerListener:[MyExtensionListener class]
                             eventType:@"com.adobe.eventType.hub"
                           eventSource:@"com.adobe.eventSource.sharedState"
                                 error:&error]) {
            NSLog(@"MyExtensionListener successfully registered for Event Hub Shared State events");
        } else if (error) {
            NSLog(@"An error occured while registering MyExtensionListener, error code: %ld", [error code]);
        }
    }

    return self;
}

- (nullable NSString *) name {
    return @"my.company";
}

- (NSString *) version {
    return @"1.0.0";
}

- (void) onUnregister {
    [super onUnregister];
    // extension unregistered successfully - perform cleanup
}

- (void) handleEvent: (ACPExtensionEvent*) event {
    // process event
}
@end
```

<Variant platform="android" task="register-wildcard" repeat="2"/>

#### Java

```java
import com.adobe.marketing.mobile.*;

public class MyExtension extends Extension {

    public MyExtension(final ExtensionApi moduleApi) {
        super(moduleApi);

        ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
            @Override
            public void error(final ExtensionError extensionError) {
                // something went wrong, the listener couldn't be registered
            }
        };
        getApi().registerWildcardListener(MyListener.class, errorCallback);
    }

    ...
}
```

<Variant platform="ios" task="register-wildcard" repeat="2"/>

#### Objective-C

```objectivec
#import "MyExtension.h"
#import "MyExtensionWildcardListener.h"

@implementation MyExtension

-(instancetype) init {
    if (self = [super init]) {        
        NSError* error = nil;
        if ([[self api] registerWildcardListener:[MyExtensionWildcardListener class] 
                                             error:&error]) {
            NSLog(@"MyExtensionWildcardListener successfully registered");
        } else if (error) {
            NSLog(@"An error occurred while registering MyExtensionWildcardListener, error code: %ld", [error code]);
        }
    }

    return self;
}
```