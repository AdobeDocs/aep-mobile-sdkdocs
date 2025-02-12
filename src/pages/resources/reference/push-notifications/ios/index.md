---
title: Adobe Experience Platform SDK push templates
description: Learn about the push templates provided and supported by the Adobe Campaign Classic Mobile SDK extension.
keywords:
- Adobe Campaign Classic
- Push
- Push Template
- Push Templates
---

# Push templates setup - iOS

Learn how to install the AEPNotificationContent package by following the instructions below.

## Prerequisites

Make sure you have [created a notification extension](./create-extension.md) and configured your app to [use Adobe Campaign Classic](./../../../../solution/adobe-campaign-classic/).

## Install using [CocoaPods](https://guides.cocoapods.org/using/using-cocoapods.html)

```ruby
# Podfile
use_frameworks!

# for app development, include all the following pods
target 'YOUR_NOTIFICATION_CONTENT_EXTENSION_NAME' do
      pod 'AEPNotificationContent'
end
```

Replace `YOUR_NOTIFICATION_CONTENT_EXTENSION_NAME` and then, in the `Podfile` directory, run:

```ruby
$ pod install
```

### Install using [Swift Package Manager](https://github.com/apple/swift-package-manager)

To add the AEPNotificationContent Package to your application, from the Xcode menu select:

`File > Add Packages...`

<InlineAlert variant="info" slots="text"/>

The menu options may vary depending on the version of Xcode being used.

Enter the URL for the AEP UI repository: `https://github.com/adobe/aepsdk-ui-ios.git`.

For `Dependency Rule`, select `Up to Next Major Version`.

Alternatively, if your project has a `Package.swift` file, you can add the AEPNotificationContent extension directly to your dependencies:

```swift
dependencies: [
    .package(name: "AEPNotificationContent", url: "https://github.com/adobe/aepsdk-ui-ios.git", .upToNextMajor(from: "5.0.0"))
],
targets: [
    .target(
        name: "YourNotificationContentExtensionTarget",
        dependencies: [
            .product(name: "AEPNotificationContent", package: "AEPNotificationContent")
        ]
    )
]
```

### Install using binaries

To generate `AEPNotificationContent.xcframework`, run the following command from the root directory:

```ruby
make archive
```

This will generate an XCFramework under the `build` folder. Drag and drop `AEPNotificationContent.xcframework` to your app's Notification Content extension target.

### Configure your Notification Content extension

With the `AEPNotificationContent` package now available in your application, you need to [configure your notification content extension](./configure-extension.md) to use it.
