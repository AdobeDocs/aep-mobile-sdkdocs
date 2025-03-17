---
noIndex: true
---

<Variant platform="android" task="usage" repeat="2"/>

#### Java

```java
import com.adobe.marketing.mobile.services.NetworkRequest;
import com.adobe.marketing.mobile.services.ServiceProvider;

final int CONNECTION_TIMEOUT_MS = 5000;
final int READ_TIMEOUT_MS = 5000;
final String URL_TO_CONNECT = "URL_TO_CONNNECT_TO";
final byte[] body = "SampleRequestBody".getBytes(StandardCharsets.UTF_8);
final Map<String, String> headers = new HashMap<>();
headers.put("myCustomHeaderName", "myCustomHeaderValue");

// Create a NetworkRequest
final NetworkRequest networkRequest = new NetworkRequest(URL_TO_CONNECT, HttpMethod.GET, body, headers, CONNECTION_TIMEOUT_MS, READ_TIMEOUT_MS);

// Make the request
ServiceProvider.getInstance().getNetworkService().connectAsync(networkRequest, response -> {
                    // handle connection response

                    // close the response
                    if (response != null) {
                        response.close();
                    }
                });
```

<Variant platform="ios" task="usage" repeat="2"/>

#### Swift

```swift
import AEPServices

// Create your `NetworkRequest`, for more details see `NetworkRequest.swift`
let networkRequest = NetworkRequest(url: url, httpMethod: .get, httpHeaders: headers)

// Get an instance of the current network service
let networkService = ServiceProvider.shared.networkService

// Make a request
networkService.connectAsync(networkRequest: networkRequest) { httpConnection in
  // handle `httpConnection`
}
```

<Variant platform="android" task="override" repeat="7"/>

#### Java

1. Create a custom implementation of `HttpConnecting` that represents a response to a network request. Also, create antoher implementation of `HttpConnecting` that represents the error response. They will be used to handle network completion when overriding the network stack in place of internal network connection implementation.

* MyCustomResponse

```java
class MyCustomResponse implements HttpConnecting {

    private final HttpsURLConnection connection;

    MyCustomResponse(final HttpsURLConnection connection) {
        this.connection = connection;
    }

    @Override
    public InputStream getInputStream() {
        try {
            return connection.getInputStream();
        } catch (IOException e) {
            // handle exception
        }
    }

    @Override
    public InputStream getErrorStream() {
        return connection.getErrorStream();
    }

    @Override
    public int getResponseCode() {
        try {
            return connection.getResponseCode();
        } catch (IOException e) {
            // handle exception
        }
    }

    @Override
    public String getResponseMessage() {
        try {
            return connection.getResponseMessage();
        } catch (IOException e) {
            // handle exception
        }
    }

    @Override
    public String getResponsePropertyValue(String responsePropertyKey) {
        return connection.getHeaderField(responsePropertyKey);
    }

    @Override
    public void close() {
        final InputStream inputStream = this.getInputStream();

        final InputStream errorStream = this.getErrorStream();
        if (inputStream != null) {
            try {
                inputStream.close();
            } catch (final Exception e) {
                // handle exceptions
            }
        }
        if (errorStream != null) {
            try {
                errorStream.close();
            } catch (final Exception e) {
                // handle exceptions
            }

            connection.disconnect();
        }
    }
}
```

* ErrorResponse

```java
class ErrorResponse implements HttpConnecting {

    @Override
    public InputStream getInputStream() {
        return null;
    }

    @Override
    public InputStream getErrorStream() {
        return null;
    }

    @Override
    public int getResponseCode() {
        return -1;
    }

    @Override
    public String getResponseMessage() {
        return "";
    }

    @Override
    public String getResponsePropertyValue(String responsePropertyKey) {
        return "";
    }

    @Override
    public void close() { }
}
```

2. Create a custom implementation of `Networking` interface and, implement the `connectAsync` method. The implementation of `connectAsync` should handle the connection establishment with the details provided in the `NetworkRequest` and, notify the caller of a response using the `NetworkCallback` parameter.

```java
/**
 * A sample implementation of Networking to enable overriding the default implementation of network service.
 */
class MyCustomNetworkService implements Networking {

    private final ExecutorService executorService = //

    /**
     * Initiate an asynchronous network request.
     *
     * @param request {@link NetworkRequest} used for network connection
     * @param callback {@link NetworkCallback} that will receive the {@link HttpConnecting} instance asynchronously.
     *
     */
    @Override
    public void connectAsync(final NetworkRequest request, final NetworkCallback callback) {
        // Use an executor service for initiating the network request and dispatching the response.
        executorService.submit(
            () -> {
                try {
                    // 1. If the network is down, for example, if the device is in airplane mode, the callback should be invoked immediately with a null connection. When the null connection is passed to the callback, the SDK will treat it as a recoverable failure and handle it accordingly.
                    
                    // callback.call(null);

                    // 2. If the network is available, the SDK should send out the request and invoke the callback with the corresponding connection.
                    final HttpConnecting connection = doConnection(request);

                    if (callback != null) {
                      // If a callback was provided, invoke the callback with the connection
                      callback.call(connection);
                    } else {
                      // If no callback is passed by the client, close the connection.
                      connection.close();
                    }
                } catch (Exception e) {
                    // 3. The connectAsync method should never throw exceptions. Catch any exceptions and invoke the callback with an error response.
                    if (callback != null) {
                        callback.call(new ErrorResponse());
                    }
                }
        });
    }

    /**
     * Utility method to perform the network connection.
     * @praram - the `NetworkRequest` whose details should be used for connecting
     *
     * @return `MyCustomResponse` after making a connection
     */
    private MyCustomResponse doConnection(final NetworkRequest request) {
        HttpsURLConnection connection = null;

        try {

            final URL obj = new URL(request.getUrl());
            connection = (HttpsURLConnection) obj.openConnection();

            // Set the request method
            connection.setRequestMethod(request.getMethod().toString());

            // Set the read and connect timeouts
            connection.setConnectTimeout(request.getConnectTimeout());
            connection.setReadTimeout(request.getReadTimeout());

            // set the request properties
            final Set<Map.Entry<String, String>> entries = request.getHeaders().entrySet();
            for (Map.Entry<String, String> entry : entries) {
                connection.setRequestProperty(entry.getKey(), entry.getValue());
            }

            if (Build.VERSION.SDK_INT < Build.VERSION_CODES.KITKAT_WATCH) {
                connection.setSSLSocketFactory(TLSSocketFactory.getInstance());
            }

            final boolean  isPostRequest = "POST".equalsIgnoreCase(connection.getRequestMethod());
            if (isPostRequest && request.getBody() != null) {
                // If the method is POST, set the length before connection
                connection.setFixedLengthStreamingMode(request.getBody().length);
            }

            connection.connect();

            // if the command is POST, send the data to the URL.
            if (isPostRequest && request.getBody() != null) {
                // Consume the payload
                final OutputStream os = new BufferedOutputStream(connection.getOutputStream());
                os.write(request.getBody());
                os.flush();
                os.close();
            }

        } catch (Exception e) {
            // handle exceptions
        }

        // create and return a response object conforming to the `HttpConnecting` interface.
        return new MyCustomResponse(connection);
    }
}
```

3. Override the default implementation of `NetworkService` provided by `ServiceProvider`. This step should occur prior to any other interactions with the SDK. While it is possible to register the network override at any point during the application lifecycle, the override will only function for network requests performed after the registration has taken place.

```java
public class MyApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        // Set the network override prior to making any other calls to the SDK
        ServiceProvider.getInstance().setNetworkService(new MyCustomNetworkService());

        MobileCore.initialize(this, "ENVIRONMENT_ID");
    }
}
```

<Variant platform="ios" task="override" repeat="8"/>

#### Swift

First, you must implement the `Networking` protocol which has just one method: `connectAsync(networkRequest: completionHandler:)`. Your implementation will probably be more robust, but the important aspects are highlighted below.

1. You must use the `AEPServices.NetworkRequest` to pass the relevant data needed to start a network request.
2. You must call the completionHandler with an `AEPServices.HttpConnection`

```swift
import AEPServices

class SampleNetworkOverride: Networking {
    func connectAsync(networkRequest: AEPServices.NetworkRequest, completionHandler: ((AEPServices.HttpConnection) -> Void)?) {
        let urlRequest = URLRequest(url: networkRequest.url)
        let urlSession = URLSession(configuration: .default)
        let task = urlSession.dataTask(with: urlRequest) { data, response, error in
            if let completionHandler = completionHandler {
                let httpConnection = HttpConnection(data: data, response: response as? HTTPURLResponse, error: error)
                completionHandler(httpConnection)
            }
        }
        
        task.resume()
    }
}
```

Once you have implemented the `Networking` protocol, all that's left is to override the ServiceProvider's NetworkService as follows:

```swift
ServiceProvider.shared.networkService = SampleNetworkOverride()
```

If you would like to revert back to the default `NetworkService`, set the `networkService` to nil.

```swift
ServiceProvider.shared.networkService = nil
```
