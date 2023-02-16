<Variant platform="android" task="access" repeat="2"/>

#### Java

```java
CacheService cacheService = ServiceProvider.getInstance().getCacheService();
```

<Variant platform="ios" task="access" repeat="2"/>

#### Swift

```swift
private var cacheService: Caching { return ServiceProvider.shared.cacheService }
```

<Variant platform="android" task="override" repeat="7"/>

#### Java

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

<Variant platform="ios" task="override" repeat="7"/>

#### Swift

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