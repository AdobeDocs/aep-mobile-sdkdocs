#### Objective-C

To append visitor information to the URL that is being used to open the web view, call [appendToUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

```objectivec
NSURL* url = [[NSURL alloc] initWithString:@"www.example.com"];
[ACPIdentity appendToUrl:url withCallback:^(NSURL * _Nullable urlWithVisitorData) {    
// handle the appended url here
}];
```

Alternately, starting with SDK version 2.3.0 (ACPIdentity version 2.1.0), you can call [getUrlVariables](api-reference.md#geturlvariables) and build your own URL:

```objectivec
[ACPIdentity getUrlVariables:^(NSString * _Nullable urlVariables) {    
  // handle the URL query parameter string here
  NSString* urlString = @"https://example.com";
  NSString* urlStringWithVisitorData = [NSString stringWithFormat:@"%@?%@", urlString, urlVariables];
  NSURL* urlWithVisitorData = [NSURL URLWithString:urlStringWithVisitorData];
  [[UIApplication sharedApplication] openURL:urlWithVisitorData options:@{} completionHandler:^(BOOL success) {
    // handle openURL success
  }];
}];
```