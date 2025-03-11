---
noIndex: true
---

import Alerts from '/src/pages/resources/alerts.md'

<Variant platform="android" task="add" repeat="11"/>

1. Add the Media for Edge Network extension and its dependencies to your project using the app's Gradle file.

#### Kotlin

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:edge")
implementation("com.adobe.marketing.mobile:edgeidentity")
implementation("com.adobe.marketing.mobile:edgemedia")
```

#### Groovy

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:edge'
implementation 'com.adobe.marketing.mobile:edgeidentity'
implementation 'com.adobe.marketing.mobile:edgemedia'
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

2. Import the libraries in your application's main activity.

#### Java

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Edge;
import com.adobe.marketing.mobile.edge.identity.Identity;
import com.adobe.marketing.mobile.edge.media.Media;
```

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.Edge
import com.adobe.marketing.mobile.edge.identity.Identity
import com.adobe.marketing.mobile.edge.media.Media
```

<Variant platform="ios" task="add" repeat="7"/>

1. To add the Media for Edge Network extension and its dependencies to your project, add the following pods to your `Podfile`:

```ruby
pod 'AEPCore', '~> 5.0'
pod 'AEPEdge', '~> 5.0'
pod 'AEPEdgeIdentity', '~> 5.0'
pod 'AEPEdgeMedia', '~> 5.0'
```

2. In Xcode project, import the Media extension:

**Swift**

```swift
import AEPCore
import AEPEdge
import AEPEdgeIdentity
import AEPEdgeMedia
```

**Objective-C**

```objectivec
@import AEPCore;
@import AEPEdge;
@import AEPEdgeIdentity;
@import AEPEdgeMedia;
```
