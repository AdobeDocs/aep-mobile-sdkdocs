#### Swift

**Syntax**

```swift
static func appendTo(url: URL?, completion: @escaping (URL?, Error?) -> Void)
```

* _url_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _completion_ is invoked after the updated _URL_ is available or _Error_ if an unexpected exception occurs or the request times out. The returned `Error` contains the [AEPError](../api-reference.md#aeperror) code of the specific error.

**Example**

```swift
Identity.appendTo(url: URL(string: "https://example.com")) { appendedURL, error in
  if let error = error {
    // handle error
  } else {
    // handle the appended url here
    if let appendedURL = appendedURL {
      // APIs which update the UI must be called from main thread
      DispatchQueue.main.async {
        self.webView.load(URLRequest(url: appendedURL!))
      }
    } else {
      // handle error, nil appendedURL
    }
  }
})
```

#### Objective-C

**Syntax**

```objectivec
+ (void) appendToUrl: (NSURL * _Nullable baseUrl) completion: ^(NSURL * _Nullable urlWithVisitorData, NSError * _Nullable error) completion;
```

**Example**

```objectivec
NSURL* url = [NSURL URLWithString:@"https://example.com"];
[AEPMobileIdentity appendToUrl:url completion:^(NSURL * _Nullable urlWithVisitorData, NSError * _Nullable error) {
  if (error) {
    // handle error here
  } else {
    // handle the appended url here
    if (urlWithVisitorData) {
      // APIs which update the UI must be called from main thread
      dispatch_async(dispatch_get_main_queue(), ^{
        [[self webView] loadRequest:[NSURLRequest requestWithURL:urlWithVisitorData]];
      }
    } else {
      // handle error, nil urlWithVisitorData
    }
  }
}];
```