---
noIndex: true
---

import Alerts from '/src/pages/resources/alerts.md'

<Variant platform="android" task="add" repeat="8"/>

1. Add the Mobile Core and Edge extensions to your project using the app's Gradle file.

#### Kotlin

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:edge")
implementation("com.adobe.marketing.mobile:edgeidentity")
```

#### Groovy

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:edge'
implementation 'com.adobe.marketing.mobile:edgeidentity'
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

2. Import the Mobile Core and Edge extensions in your application class.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Edge;
```

<Variant platform="ios" task="add" repeat="7"/>

1. Add the Mobile Core and Edge extensions to your project using CocoaPods. Add following pods in your `Podfile`:

```swift
use_frameworks!
target 'YourTargetApp' do
pod 'AEPCore', '~> 5.0'
pod 'AEPEdge', '~> 5.0'
pod 'AEPEdgeIdentity', '~> 5.0'
end
```

2. Import the Mobile Core and Edge libraries:

#### Swift

```swift
// AppDelegate.swift
import AEPCore
import AEPEdge
import AEPEdgeIdentity
```

#### Objective-C

```objectivec
// AppDelegate.h
@import AEPCore;
@import AEPEdge;
@import AEPEdgeIdentity;
```