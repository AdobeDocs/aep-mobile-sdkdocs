The `getVisitorProfile` API returns the most recently obtained visitor profile. For easy access across multiple launches of your app, the visitor profile is saved in `NSUserDefaults`. If no signal has been submitted, nil is returned.

<InlineAlert variant="info" slots="text"/>

The `getVisitorProfileWithCompletionHandler` method was added in ACPAudience version 2.1.0.

#### Objective-C

**Syntax**

```objc
+ (void) getVisitorProfile: (nonnull void (^) (NSDictionary* __nullable visitorProfile)) callback;

+ (void) getVisitorProfileWithCompletionHandler: (nonnull void (^) (NSDictionary* __nullable visitorProfile, NSError* __nullable error)) completionHandler;
```

**Example**

```objc
[ACPAudience getVisitorProfile:^(NSDictionary* visitorProfile){
  // handle the visitorProfile here
}];

[ACPAudience getVisitorProfileWithCompletionHandler:^(NSDictionary * _Nullable visitorProfile, NSError * _Nullable error) {
  if (error) {
    // handle error here
  } else {
    // handle the returned visitorProfile here
  }
}];
```

#### Swift

**Example**

```swift
ACPAudience.getVisitorProfile { (visitorProfile) in
  // handle the visitorProfile here
}

ACPAudience.getVisitorProfile { (visitorProfile, error) in
  if let error = error {
    // handle error here
  } else {
    // handle the returned visitorProfile here
  }
}
```