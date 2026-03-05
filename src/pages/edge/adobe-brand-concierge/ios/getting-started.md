---
title: Brand Concierge getting started (iOS)
description: Install and register the Brand Concierge extension in your iOS app.
keywords:
- Brand Concierge
- iOS
- Getting started
---

# Brand Concierge Getting Started (iOS)

## CocoaPods

Add the following to your `Podfile`:

```ruby
# Podfile
use_frameworks!

target 'YOUR_TARGET_NAME' do
  pod 'AEPEdge'
  pod 'AEPEdgeIdentity'
  pod 'AEPCore'
  pod 'AEPServices'
  pod 'AEPBrandConcierge'
end
```

Replace `YOUR_TARGET_NAME` with your app target, then in the `Podfile` directory run:

```bash
pod install
```

## Swift Package Manager

To add the AEPBrandConcierge package to your application from Xcode:

1. Select **File > Add Packages...**
2. Enter the package URL: `https://github.com/adobe/aepsdk-concierge-ios.git`
3. For **Dependency Rule**, select **Up to Next Major Version**.

If your project uses a `Package.swift` file, add AEPBrandConcierge to your dependencies:

```swift
dependencies: [
    .package(url: "https://github.com/adobe/aepsdk-concierge-ios.git", .upToNextMajor(from: "5.0.0"))
],
targets: [
    .target(name: "YourTarget",
            dependencies: ["AEPBrandConcierge"],
            path: "your/path")
]
```

## Binaries

To generate `AEPBrandConcierge.xcframework`, run from the repository root:

```bash
make archive
```

This generates an XCFramework under the `build` folder. Drag and drop `AEPBrandConcierge.xcframework` into your app target.

## Import and register the Brand Concierge extension

Import the AEPBrandConcierge framework and its dependencies, then register the Brand Concierge extension (and dependencies) in `application(_:didFinishLaunchingWithOptions:)` in your `AppDelegate`:

```swift
import AEPBrandConcierge
import AEPCore
import AEPEdge
import AEPEdgeIdentity
import UIKit

class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions _: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Optionally enable debug logging
        MobileCore.setLogLevel(.trace)

        let extensions = [
            Concierge.self,
            Identity.self,
            Edge.self
        ]

        MobileCore.registerExtensions(extensions) {
            // Use the App ID assigned for this application from Adobe Data Collection (formerly Adobe Launch)
            MobileCore.configureWith(appId: "MY_APP_ID")
        }

        return true
    }
}
```

Replace `MY_APP_ID` with your mobile property App ID from Data Collection.

## Next steps

* [Implementation guide (iOS)](/edge/adobe-brand-concierge/ios/implementation-guide/) — Integrate the chat UI (SwiftUI or UIKit).
* [Style guide (iOS)](/edge/adobe-brand-concierge/ios/style-guide/) — Theme JSON reference and implementation status.
