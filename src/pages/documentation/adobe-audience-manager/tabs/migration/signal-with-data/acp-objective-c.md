```objc
+ (void) signalWithData: (NSDictionary<NSString *, NSString *> * _Nullable) data
                       callback:^(NSDictionary* _Nullable visitorProfile) callback;

+ (void) signalWithData: (NSDictionary<NSString *, NSString *> * _Nonnull) data
                        withCompletionHandler:^(NSDictionary * _Nullable visitorProfile, NSError *         _Nullable error) completionHandler;
```