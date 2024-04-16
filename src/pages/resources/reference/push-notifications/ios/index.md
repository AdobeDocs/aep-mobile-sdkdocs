---
title: AEP SDK push templates
description: OOTB push templates supported by the Adobe Journey Optimizer and Adobe Campaign Classic mobile SDK extensions.
keywords:
- Adobe Campaign Classic
- Adobe Journey Optimizer
- Push
- Push Template
- Push Templates
---

# Push templates setup - iOS

Installing the AEPNotificationContent package

## Prerequisites

Make sure you have [created a notification extension](./create-extension.md) and configured your app to [use Adobe Campaign Classic](./../../../../solution/adobe-campaign-classic/).

## Install using [CocoaPods](https://guides.cocoapods.org/using/using-cocoapods.html)

```ruby
# Podfile
use_frameworks!

# for app development, include all the following pods
target 'YOUR_NOTIFICATION_CONTENT_EXTENSION_NAME' do
      pod 'AEPNotificationContent', :git => 'https://github.com/adobe/aepsdk-notificationcontent-ios.git', :branch => 'dev-v5.0.0'
end
```

Replace `YOUR_NOTIFICATION_CONTENT_EXTENSION_NAME` and then, in the `Podfile` directory, run:

```
$ pod install
```

### Install using [Swift Package Manager](https://github.com/apple/swift-package-manager)

To add the AEPNotificationContent Package to your application, from the Xcode menu select:

`File > Add Packages...`

<InlineAlert variant="info" slots="text"/>

The menu options may vary depending on the version of Xcode being used.

Enter the URL for the AEPNotificationContent package repository: `https://github.com/adobe/aepsdk-notificationcontent-ios.git`.

For `Dependency Rule`, select `Up to Next Major Version`.

Alternatively, if your project has a `Package.swift` file, you can add the AEPNotificationContent extension directly to your dependencies:

```swift
dependencies: [
    .package(name: "AEPNotificationContent", url: "https://github.com/adobe/aepsdk-notificationcontent-ios.git", .upToNextMajor(from: "5.0.0"))
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

```
make archive
```

This will generate an XCFramework under the `build` folder. Drag and drop `AEPNotificationContent.xcframework` to your app's Notification Content extension target.

### Configure your Notification Content extension

With the `AEPNotificationContent` package now available in your application, you need to [configure your notification content extension](./configure-extension.md) to use it.
