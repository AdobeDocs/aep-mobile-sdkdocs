---
title: Add Analytics - iOS
---


<TextBlock slots="heading, text" hasCodeBlock/>

#### iOS

Add the [Mobile Core](../mobile-core/index.md) and Analytics extensions to your project using Cocoapods.

Add the following pods in your `Podfile`:

```ruby
pod 'ACPCore'
pod 'ACPAnalytics'
```

Import the Analytics and Identity libraries:

**Objective-C**

```objectivec
#import "ACPCore.h"
#import "ACPAnalytics.h"
#import "ACPIdentity.h"
```

**Swift**

```swift
import ACPCore
import ACPAnalytics
import ACPIdentity
```