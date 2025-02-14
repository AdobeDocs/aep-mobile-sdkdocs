---
title: Mobile Core Lifecycle extension in iOS
description: A guide explaining how to use the Mobile Core Lifecycle extension in iOS.
keywords:
- Lifecycle
- Lifecycle for Mobile Core
- iOS
- Product overview
---

# Lifecycle extension in iOS

<InlineAlert variant="warning" slots="text"/>

In version 4 of the iOS SDK, this implementation was completed automatically.<br/><br/>When upgrading to the Experience Platform SDK, you must add code to continue collecting Lifecycle metrics. For more information, see [Manual Lifecycle Implementation](/src/pages/resources/upgrade-platform-sdks/lifecycle.md).

## Implementing Lifecycle data collection in iOS

For implementation details, please reference the [implementation guide for Lifecycle](/src/pages/home/base/mobile-core/lifecycle/index.md).

## Tracking app crashes in iOS

This information helps you understand how crashes are tracked and the best practices to handle false crashes.

### How does crash reporting work?

When Lifecycle data collection is implemented in an application, pausing Lifecycle data collection sets a variable which is persisted in the application. When the application is launched again and Lifecycle data collection is started, if the flag is **not** set then a crash event is reported.

The variable is controlled by calls to [lifecyclePause](/src/pages/home/base/mobile-core/lifecycle/api-reference.md#lifecyclepause) (which sets the flag) and [lifecycleStart](/src/pages/home/base/mobile-core/lifecycle/api-reference.md#lifecyclestart) (which clears the flag).

### Why does Adobe measure crashes this way?

This approach of measuring crashes provides a high-level answer to the question, "Did the user exit my app intentionally?"

Crash reporting libraries provided by companies such as Apteligent (formerly Crittercism) use a global `NSException` handler to provide more detailed crash reporting. Your app is not allowed to have more than one of these kinds of handlers. Adobe decided to not implement a global `NSException` handler to prevent build errors, knowing that our customers might be using other crash reporting providers.

### What can cause a false crash to be reported?

The following scenarios are known to falsely cause a crash to be reported by the SDK:

* If you are debugging using Xcode, re-launching the app while it is running in the foreground will cause a crash.
  * You can avoid a crash in this scenario by backgrounding the app prior to re-launching the app from Xcode.
* If your app is launched in the background because of an enabled background capability (e.g. - background fetch, location update), then `lifecycleStart` is called and the app never comes to the foreground, the next launch (whether in the background or foreground) will result in a crash.
* If you programmatically delete Adobe's pause flag from `NSUserDefaults`, while the app is in the background, the next launch or resume causes a crash.

### How can I prevent false crashes from being reported?

The following practices can help prevent false crashes from being reported:

* Perform your development against non-production report suites to ensure there aren't false crashes from Xcode development.
* If your app has background capabilities, ensure that you are checking that the app is not in the background prior to calling `lifecycleStart`.
* Do not delete or modify any values that the Experience Platform SDKs puts in `NSUserDefaults`. If these values are modified outside the SDK, the data reported will be invalid.

## Further reading

The following guides further illustrate the expected Lifecycle scenarios along with example unexpected scenarios and how to correct them.

* [Lifecycle behavior reference](/src/pages/home/base/mobile-core/lifecycle/behavior-reference.md) when sending Lifecycle events to Analytics.
* [Lifecycle behavior reference](/src/pages/edge/lifecycle-for-edge-network/behavior-reference.md) when sending Lifecycle events to Edge Network.

