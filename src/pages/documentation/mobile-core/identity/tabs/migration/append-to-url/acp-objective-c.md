```objectivec
+ (void) appendToUrl: (nullable NSURL*) baseUrl withCallback: (nullable void (^) (NSURL* __nullable urlWithVisitorData)) callback;
+ (void) appendToUrl: (nullable NSURL*) baseUrl withCompletionHandler: (nullable void (^) (NSURL* __nullable urlWithVersionData, NSError* __nullable error)) completionHandler;
```