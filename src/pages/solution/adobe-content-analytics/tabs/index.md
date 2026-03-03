---
noIndex: true
---

import Alerts from '/src/pages/resources/alerts.md'

<Variant platform="android-kotlin" task="add" repeat="3"/>

Add the required dependencies to your project by including them in the app's Gradle file.

```kotlin
// Use the BOM to manage Adobe Mobile SDK versions
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))

// Adobe Mobile SDK dependencies (versions managed by BOM)
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:edge")
    
// Content Analytics (not yet in BOM - specify version explicitly)
implementation("com.adobe.marketing.mobile:contentanalytics:1.0.0")
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

<Variant platform="android-groovy" task="add" repeat="3"/>

Add the required dependencies to your project by including them in the app's Gradle file.

```java
// Use the BOM to manage Adobe Mobile SDK versions

implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')

// Adobe Mobile SDK dependencies (versions managed by BOM)
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:edge'

// Content Analytics (not yet in BOM - specify version explicitly)
implementation 'com.adobe.marketing.mobile:contentanalytics:1.0.0"
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>


<Variant platform="ios-pods" task="add" repeat="2"/>

Add the required dependencies to your project using CocoaPods. Add following pods in your `Podfile`:

```swift
use_frameworks!

target 'YourTargetApp' do
  pod 'AEPCore', '~> 5.0'
  pod 'AEPEdge', '~> 5.0'
  pod 'AEPContentAnalytics', '~> 5.0'
end
```

<Variant platform="ios-spm" task="add" repeat="6"/>

Add the required dependencies to your project using Swift Package Manager. For Content Analytics, use the following instructions.

1. In Xcode, select **File** > **Add Package Dependencies**.
   
1. Enter the package URL:

   ```text
   https://github.com/adobe/aca-mobile-sdk-ios-extension
   ```

1. Select version `5.0.0` or later.
   
1. Select **Add Package**.
