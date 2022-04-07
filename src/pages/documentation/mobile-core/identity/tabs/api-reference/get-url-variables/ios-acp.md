<InlineAlert variant="info" slots="text"/>

Method `getUrlVariables` was added in ACPCore version 2.3.0 and ACPIdentity version 2.1.0. Method `getUrlVariablesWithCompletionHandler` was added in ACPCore version 2.5.0 and ACPIdentity version 2.2.0.

#### Objective-C

**Syntax**

```objectivec
+ (void) getUrlVariables: (nonnull void (^) (NSString* __nullable urlVariables)) callback;
+ (void) getUrlVariablesWithCompletionHandler: (nonnull void (^) (NSString* __nullable urlVariables, NSError* __nullable error)) completionHandler;
```

**Example**

```objectivec
[ACPIdentity getUrlVariables:^(NSString * _Nullable urlVariables) {    
  // handle the URL query parameter string here
  NSString* urlString = @"https://example.com";
  NSString* urlStringWithVisitorData = [NSString stringWithFormat:@"%@?%@", urlString, urlVariables];
  NSURL* urlWithVisitorData = [NSURL URLWithString:urlStringWithVisitorData];
  // APIs which update the UI must be called from main thread
  dispatch_async(dispatch_get_main_queue(), ^{
    [[self webView] loadRequest:[NSURLRequest requestWithURL:urlWithVisitorData]];
  }
}];

[ACPIdentity getUrlVariablesWithCompletionHandler:^(NSString * _Nullable urlVariables, NSError * _Nullable error) {
  if (error) {
    // handle error here
  } else {
    // handle the URL query parameter string here
    NSString* urlString = @"https://example.com";
    NSString* urlStringWithVisitorData = [NSString stringWithFormat:@"%@?%@", urlString, urlVariables];
    NSURL* urlWithVisitorData = [NSURL URLWithString:urlStringWithVisitorData];
    // APIs which update the UI must be called from main thread
    dispatch_async(dispatch_get_main_queue(), ^{
      [[self webView] loadRequest:[NSURLRequest requestWithURL:urlWithVisitorData]];
    }
  }
}];
```

#### Swift

**Syntax**

```swift
static func getUrlVariables(_ callback: @escaping (String?) -> Void)
static func getUrlVariables(completionHandler: @escaping (String?, Error?) -> Void)
```

* _callback_ has an NSString value that contains the visitor identifiers as a query string after the service request is complete.
* _completionHandler_ is invoked with _urlVariables_ containing the visitor identifiers as a query string, or _error_ if an unexpected error occurs or the request times out. The returned `NSError` contains the [ACPError](../api-reference.md#acperror) code of the specific error. The default timeout of 500ms.

**Example**

```swift
ACPIdentity.getUrlVariables {(urlVariables) in
  var urlStringWithVisitorData: String = "https://example.com"
  if let urlVariables: String = urlVariables {
    urlStringWithVisitorData.append("?" + urlVariables)
  }

  guard let urlWithVisitorData: URL = URL(string: urlStringWithVisitorData)   else {
    // handle error, unable to construct URL
    return
  }
  // APIs which update the UI must be called from main thread
  DispatchQueue.main.async {
    self.webView.load(URLRequest(url: urlWithVisitorData))
  }
}

ACPIdentity.getUrlVariables { (urlVariables, error) in
  if let error = error {
    // handle error
  } else {
    var urlStringWithVisitorData: String = "https://example.com"
    if let urlVariables: String = urlVariables {
      urlStringWithVisitorData.append("?" + urlVariables)
    }

    guard let urlWithVisitorData: URL = URL(string: urlStringWithVisitorData) else {
      // handle error, unable to construct URL
      return
    }
    // APIs which update the UI must be called from main thread
    DispatchQueue.main.async {
      self.webView.load(URLRequest(url: urlWithVisitorData))
    }
  }
}
```