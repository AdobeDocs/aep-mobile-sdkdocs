#### Swift

**Syntax**

```swift
@objc(getUrlVariables:)
static func getUrlVariables(completion: @escaping (String?, Error?) -> Void)
```

* _completion_ is invoked with _String_ containing the visitor identifiers as a query string, or _Error_ if an unexpected error occurs or the request times out. The returned `Error` contains the [AEPError](../../api-reference.md#public-classes) code of the specific error. The default timeout of 500ms.

**Example**

```swift
Identity.getUrlVariables { (urlVariables, error) in
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

#### Objective-C

**Syntax**

```objectivec
+ (void) getUrlVariables: ^(NSString * _Nullable urlVariables, NSError * _Nullable error) completion;
```

**Example**

```objectivec
[AEPMobileIdentity getUrlVariables:^(NSString * _Nullable urlVariables, NSError *error) {
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
