---
noIndex: true
---

import Alerts from '/src/pages/resources/alerts.md'

<Variant platform="android-kotlin" task="add" repeat="4"/>

Add the required dependencies to your project by including them in the app's Gradle file.

#### Kotlin

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:edge")
implementation("com.adobe.marketing.mobile:edgeidentity")
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

<Variant platform="android-groovy" task="add" repeat="4"/>

Add the required dependencies to your project by including them in the app's Gradle file.

#### Groovy

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:edge'
implementation 'com.adobe.marketing.mobile:edgeidentity'
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

<Variant platform="ios-pods" task="add" repeat="2"/>

Add the required dependencies to your project using CocoaPods. Add following pods in your `Podfile`:

```swift
use_frameworks!

target 'YourTargetApp' do
  pod 'AEPCore', '~> 5.0'
  pod 'AEPEdge', '~> 5.0'
  pod 'AEPEdgeIdentity', '~> 5.0'
end
```

