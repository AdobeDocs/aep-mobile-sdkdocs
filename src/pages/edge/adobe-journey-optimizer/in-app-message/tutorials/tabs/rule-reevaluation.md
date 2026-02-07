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

<Variant platform="android" function="interceptor" repeat="6"/>

Implement the `RuleReevaluationInterceptor` interface to intercept re-evaluation events.

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

#### Implementation

```kotlin
import com.adobe.marketing.mobile.Event
import com.adobe.marketing.mobile.LaunchRule
import com.adobe.marketing.mobile.Messaging
import com.adobe.marketing.mobile.RuleReevaluationInterceptor

class MyReevaluationInterceptor : RuleReevaluationInterceptor {

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
}
```

#### Registration

```kotlin
Messaging.setReevaluationInterceptor(MyReevaluationInterceptor())
```

<Variant platform="ios" function="interceptor" repeat="6"/>

Implement the `RuleReevaluationInterceptor` protocol to intercept re-evaluation events.

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

#### Implementation

```swift
import AEPCore
import AEPMessaging

class MyReevaluationInterceptor: RuleReevaluationInterceptor {

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
}
```

#### Registration

```swift
Messaging.setReevaluationInterceptor(MyReevaluationInterceptor())
```
