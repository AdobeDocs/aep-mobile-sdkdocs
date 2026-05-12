---
title: Mobile Core Platform Services
description: An overview for the Mobile Core Platform Services.
keywords:
- Mobile Core
- Platform Services
- Product overview
---

# Platform Services

The Platform Services are provided by the Adobe Experience Platform Mobile SDKs as part of the Mobile Core extension. These services provide shared functionality throughout the SDK that can be shared by extensions. For example, services provide shared functionality for networking, data queuing, and caching. For more information on services provided by the SDK please see the documentation in our [iOS](https://github.com/adobe/aepsdk-core-ios/blob/main/Documentation/Services/README.md) and [Android](https://github.com/adobe/aepsdk-core-ios/tree/main/Documentation/Services) repositories.

## Accessing services

The MobileCore extension provides a shared `ServiceProvider`, responsible for maintaining the current set of provided services and any potential service overrides.

Some services provide wrapper classes. For example, the `Log` class is a wrapper around the `LoggingService`. However, in some cases, a wrapper class may not exist, and you may need to access a service directly from the `ServiceProvider`. The recommended way to do this is through a computed variable or directly through the `ServiceProvider` when required. This ensures that if the service is overridden, the service consumer always uses the correct service implementation.

For example, the following code snippet shows how to access `CacheService`.

### Android Java

```java
CacheService cacheService = ServiceProvider.getInstance().getCacheService();
```

### iOS Swift

```swift
private var cacheService: Caching { return ServiceProvider.shared.cacheService }
```

## Overriding services

The SDK allows overriding some services with your custom implemetation. This section walks through the steps necessary to create a custom `Logging` service, and register it with the SDK.

<InlineAlert variant="info" slots="text"/>

Use caution when overriding services. Changes to behavior for a given service can have unintended consequences throughout the SDK.

### Android Java

First, implement a class that conforms to the `Logging` interface. Below is an example of a logging service that only prints out messages with a log level of Error.

```java
class ErrorLogger implements Logging {
 @Override
 public void trace(String tag, String message) {}

 @Override
 public void debug(String tag, String message) {}

 @Override
 public void warning(String tag, String message) {}

 @Override
 public void error(String tag, String message) {
  Log.e("ErrorLogger", message);
 }
}
```

Next, use the `setLoggingService` API of `ServiceProvider` to update the logging service used by the SDK.

```java
ServiceProvider.getInstance().setLoggingService(new ErrorLogger());
```

To revert to the default implementation of the `LoggingService`, you can set the logging service to nil using `setLoggingService` API.

```java
ServiceProvider.getInstance().setLoggingService(null);
```

### iOS Swift

First, implement a type that conforms to the Logging protocol, as defined above.  Below is an example of a logging service that only prints out messages with a log level of `Error`.

```swift
class ErrorLogger: Logging {
  func log(level: LogLevel, label: String, message: String) {
    guard level == .error else { return }
    print("\(label): \(message)")
  }
}
```

Next, set the `loggingService` on the shared `ServiceProvider` used by the SDK.

```swift
ServiceProvider.shared.loggingService = ErrorLogger()
```

To revert to the default implementation of the `LoggingService`, you can set the loggingService to nil.

```swift
ServiceProvider.shared.loggingService = nil
```

