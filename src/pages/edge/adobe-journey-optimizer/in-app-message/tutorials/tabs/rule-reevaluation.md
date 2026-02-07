---
title: Re-evaluate in-app messages before display
description: Learn how to use the re-evaluation feature to ensure in-app messages reflect the latest campaign state before being shown to users.
keywords:
- Adobe Journey Optimizer
- Guide
- In-app messages
- Messaging
- Re-evaluation
- Tutorial
---

<Variant platform="android" function="interceptor" repeat="3"/>

#### Interface

```kotlin
interface RuleReevaluationInterceptor {
    fun onReevaluationTriggered(
        event: Event,
        reevaluableRules: List<LaunchRule>,
        completion: () -> Unit
    )
}
```

#### Messaging extension implementation

```kotlin
override fun onReevaluationTriggered(
    event: Event,
    reevaluableRules: List<LaunchRule>,
    completion: () -> Unit
) {
    // Refresh campaigns from server
    Messaging.refreshInAppMessages()
    
    // Call completion to trigger re-evaluation with updated rules
    completion()
}
```

<Variant platform="ios" function="interceptor" repeat="3"/>

#### Protocol

```swift
public protocol RuleReevaluationInterceptor: AnyObject {
    func onReevaluationTriggered(
        event: Event,
        reevaluableRules: [LaunchRule],
        completion: @escaping () -> Void
    )
}
```

#### Messaging extension implementation

```swift
func onReevaluationTriggered(
    event: Event,
    reevaluableRules: [LaunchRule],
    completion: @escaping () -> Void
) {
    // Refresh campaigns from server
    Messaging.refreshInAppMessages()
    
    // Call completion to trigger re-evaluation with updated rules
    completion()
}
```
