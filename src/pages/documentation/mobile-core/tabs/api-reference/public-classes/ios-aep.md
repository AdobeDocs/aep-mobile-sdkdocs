#### AEPError

The `AEPError` enum shows the errors that can be passed to a completion handler callback from any API which uses one:

* `case unexpected` - An unexpected error occured.
* `case callbackTimeout` - The timeout was met.
* `case callbackNil` -  The provided callback function is nil.
* `case none` -  There was no error, used when an error return type is required but there was no error.
* `case serverError` - There was a server error.
* `case networkError` - There was a network error.
* `case invalidRequest` - There was an invalid request.
* `case invalidResponse` - There was an invalid response.
* `case errorExtensionNotInitialized` - The extension is not initialized.

**Example**

**Swift**

```swift
MobileCore.getSdkIdentities { (content, error) in
    if let error = error, let aepError = error as? AEPError {
        switch aepError {
        case .unexpected:
          // Handle unexpected error
        case .callbackTimeout:
          // Handle callback timeout error
        case .callbackNil:
          // Handle callback being nil error
        case .none:
          // no error
        case .serverError:
          // handle server error
        case .networkError:
          // handle network error
        case .invalidRequest:
          // handle invalid request error
        case .invalidResponse:
          // handle invalid response error
        case .errorExtensionNotInitialized:
          // handle extension not initialized error
        @unknown default:
          // handle unknown error
        }
    }
    ...
}
```

**Objective-C**

```objectivec
[AEPMobileCore getSdkIdentities:^(NSString * _Nullable content, NSError * _Nullable error) {
    if (error) {
        if (error.code == AEPErrorUnexpected) {
          // Handle unexpected error
        } else if (error.code == AEPErrorCallbackTimeout) {
          // Handle callback timeout error
        } else if (error.code == AEPErrorCallbackNil) {
          // Handle callback being nil error
        } else if (error.code == AEPErrorNone) {
          // no error     
        } else if (error.code == AEPErrorServerError) {
          // handle server error
        } else if (error.code == AEPErrorNetworkError) {
          // handle network error 
        } else if (error.code == AEPErrorInvalidRequest) {
          // handle invalid request error
        } else if (error.code == AEPErrorInvalidResponse) {
          // handle invalid response error  
        } else if (error.code == AEPErrorErrorExtensionNotInitialized) {
          // handle extension not intialized error  
        }
    }

    ...
}];
```