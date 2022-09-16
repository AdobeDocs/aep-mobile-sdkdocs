#### ios

**AEP SDK**

The syntax for `setPrivacyStatus` is:

```
// syntax
+ (void) setPrivacyStatus: (ACPMobilePrivacyStatus) status;
```

The syntax for `getPrivacyStatus` is:

```
// syntax
+ (void) getPrivacyStatus: (nonnull void (^) (ACPMobilePrivacyStatus status)) callback;
+ (void) getPrivacyStatusWithCompletionHandler: (nonnull void (^) (ACPMobilePrivacyStatus status, NSError* _Nullable error)) completionHandler;
```

The callback is invoked after the privacy status is available.

If the API with the completion handler is used, the completion handler will be invoked with the current privacy status, or error if an unexpected error occurs or the request times out. The default timeout is 5000ms.

The usage example for `getPrivacyStatus` is:

**Objective-C**

```
[ACPCore getPrivacyStatus:^(ACPMobilePrivacyStatus status) {
  switch (status) {
    case ACPMobilePrivacyStatusOptIn: NSLog(@"Privacy Status: Opt-In");
    case ACPMobilePrivacyStatusOptOut: NSLog(@"Privacy Status: Opt-Out");
    case ACPMobilePrivacyStatusUnknown: NSLog(@"Privacy Status: Unknown");
    default: break;
  }
}];

[ACPCore getPrivacyStatusWithCompletionHandler:^(ACPMobilePrivacyStatus status, NSError * _Nullable error) {
  if (error) {
    // handle error here
  } else {
    // handle the retrieved privacy status
  }
}];
```

**Swift**

```
ACPCore.getPrivacyStatus({ status in
   switch status {
     case ACPMobilePrivacyStatus.optIn: print ("Privacy Status: Opt-In")
     case ACPMobilePrivacyStatus.optOut: print("Privacy Status: Opt-Out")
     case ACPMobilePrivacyStatus.unknown: print("Privacy Status: Unknown")
     default: break
   }
})

ACPCore.getPrivacyStatus(withCompletionHandler: { status, error in
    if error != nil {
      // handle error here
    } else {
      // handle the retrieved privacy status
    }
})
```
