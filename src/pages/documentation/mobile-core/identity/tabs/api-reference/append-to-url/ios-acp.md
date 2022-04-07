<InlineAlert variant="info" slots="text"/>

Method `appendToUrl:withCompletionHandler` was added in ACPCore version 2.5.0 and ACPIdentity version 2.2.0.

#### Objective-C

**Syntax**

```objectivec
+ (void) appendToUrl: (nullable NSURL*) baseUrl withCallback: (nullable void (^) (NSURL* __nullable urlWithVisitorData)) callback;
+ (void) appendToUrl: (nullable NSURL*) baseUrl withCompletionHandler: (nullable void (^) (NSURL* __nullable urlWithVersionData, NSError* __nullable error)) completionHandler;
```

* _baseUrl_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _callback_ is invoked after the updated URL is available.
* _completionHandler_ is invoked with _urlWithVersionData_ after the updated URL is available or _error_ if an unexpected exception occurs or the request times out. The returned `NSError` contains the [ACPError](../api-reference.md#acperror) code of the specific error. The default timeout of 500ms.

**Example**

```objectivec
NSURL* url = [[NSURL alloc] initWithString:@"https://example.com"];
[ACPIdentity appendToUrl:url withCallback:^(NSURL * _Nullable urlWithVisitorData) {    
  // handle the appended url here
  if (urlWithVisitorData) {
    // APIs which update the UI must be called from main thread
    dispatch_async(dispatch_get_main_queue(), ^{
      [[self webView] loadRequest:[NSURLRequest requestWithURL:urlWithVisitorData]];
    }
  } else {
    // handle error, nil urlWithVisitorData
  }
}];

[ACPIdentity appendToUrl:url withCompletionHandler:^(NSURL * _Nullable urlWithVersionData, NSError * _Nullable error) {
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

#### Swift

**Syntax**

```swift
static func append(to: URL?, withCallback: ((URL?) -> Void)?)
static func append(to: URL?, withCompletionHandler: ((URL?, Error?)-> Void)?)
```

**Example**

```swift
ACPIdentity.append(to:URL(string: "https://example.com"), withCallback: {(appendedURL) in    
  // handle the appended url here
  if let appendedURL = appendedURL {
    // APIs which update the UI must be called from main thread
    DispatchQueue.main.async {
      self.webView.load(URLRequest(url: appendedURL!))
    }
  } else {
    // handle error, nil appendedURL
  }
});

ACPIdentity.append(to: URL(string: "https://example.com"), withCompletionHandler: { (appendedURL, error) in
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