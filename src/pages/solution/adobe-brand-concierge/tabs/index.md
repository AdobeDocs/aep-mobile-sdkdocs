---
noIndex: true
---

import Alerts from '/src/pages/resources/alerts.md'

<Variant platform="android-kotlin" task="add" repeat="3"/>

Add the required dependencies to your project by including them in the app's Gradle file.

```kotlin
dependencies {
    implementation("com.adobe.marketing.mobile:concierge:3.+")
    implementation("com.adobe.marketing.mobile:core:3.+")
    implementation("com.adobe.marketing.mobile:edgeidentity:3.+")
}
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

<Variant platform="android-groovy" task="add" repeat="3"/>

Add the required dependencies to your project by including them in the app's Gradle file.

```groovy
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:edge'
implementation 'com.adobe.marketing.mobile:edgeidentity'
implementation 'com.adobe.marketing.mobile:concierge'
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

<Variant platform="ios-pods" task="add" repeat="2"/>

Add the required dependencies to your project using CocoaPods. Add the following to your `Podfile`:

```ruby
use_frameworks!

target 'YOUR_TARGET_NAME' do
  pod 'AEPCore'
  pod 'AEPEdge'
  pod 'AEPEdgeIdentity'
  pod 'AEPServices'
  pod 'AEPBrandConcierge'
end
```

Replace `YOUR_TARGET_NAME` with your app target, then run:

```bash
pod install
```
