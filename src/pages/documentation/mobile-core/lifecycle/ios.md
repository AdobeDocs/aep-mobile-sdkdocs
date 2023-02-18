# Lifecycle extension in iOS

<InlineAlert variant="warning" slots="text"/>

In version 4 of the iOS SDK, this implementation was completed automatically. <br/><br/>When upgrading to the Experience Platform SDK, you must add code to continue collecting Lifecycle metrics. For more information, see [Manual Lifecycle Implementation](../../upgrade-platform-sdks/lifecycle.md).

## Implementing Lifecycle metrics in iOS

For implementation details, please reference the guide on [registering Lifecycle with Mobile Core and adding the appropriate start/pause calls](./index.md#register-lifecycle-with-mobile-core-and-add-appropriate-start-pause-calls).

## Tracking app crashes in iOS

This information helps you understand how crashes are tracked and the best practices to handle false crashes.

<InlineAlert variant="info" slots="text"/> 

You should upgrade to Adobe Experience Platform SDKs, which contains critical changes that prevent false crashes from being reported.

### How does crash reporting work?

When creating a new lifecycle session, the SDK looks for a variable it maintains in `NSUserDefaults` that indicates the previous session was paused. If the flag is not set, then the ensuing launch will also be treated as a crash.

The variable is controlled by calls to `lifecyclePause` (which sets the flag) and `lifecycleStart` (which clears the flag).

### Why does Adobe measure crashes this way?

This approach of measuring crashes provides a high-level answer to the question, "Did the user exit my app intentionally?"

Crash reporting libraries provided by companies such as Apteligent (formerly Crittercism) use a global `NSException` handler to provide more detailed crash reporting. Your app is not allowed to have more than one of these kinds of handlers. Adobe decided to not implement a global `NSException` handler to prevent build errors, knowing that our customers might be using other crash reporting providers.

### What can cause a false crash to be reported?

The following scenarios are known to falsely cause a crash to be reported by the SDK:

* If you are debugging using Xcode, re-launching the app while it is running in the foreground will cause a crash.
  * You can avoid a crash in this scenario by backgrounding the app prior to re-launching the app from Xcode.
* If your app is launched in the background because of an enabled background capability (e.g. - background fetch, location update), then `lifecycleStart` is called and the app never comes to the foreground, the next launch (whether in the background or foreground) will result in a crash.
* If you programmatically delete Adobe’s pause flag from `NSUserDefaults`, while the app is in the background, the next launch or resume causes a crash.

### How can I prevent false crashes from being reported?

The following practices can help prevent false crashes from being reported:

* Perform your development against non-production report suites to ensure there aren't false crashes from Xcode development.
* If your app has background capabilities, ensure that you are checking that the app is not in the background prior to calling `lifecycleStart`.
* Do not delete or modify any values that the Experience Platform SDKs puts in `NSUserDefaults`. If these values are modified outside the SDK, the data reported will be invalid.

## Collecting additional data with Lifecycle

When calling `lifecycleStart:`, you can optionally pass a dictionary of additional data that will be attached to the lifecycle event.

<InlineAlert variant="info" slots="text"/> 

You can pass additional data to lifecycle on app launch, app resume, both, or neither.

```swift
// Swift
func applicationWillEnterForeground(_ application: UIApplication) {      
     MobileCore.lifecycleStart(additionalContextData: ["contextDataKey": "contextDataVal"])
}
```

```objectivec
// Objective-C
- (void) applicationWillEnterForeground:(UIApplication *)application {      
     [AEPMobileCore lifecycleStart:@{@"contextDataKey": @"contextDataVal"}];      
}
```
