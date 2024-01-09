# SDKs end-of-support announcements

## End of support for Adobe Experience Platform 1.x SDKs for Android

**Published On: January 5, 2024**

As of June 30, 2024, Adobe will officially deprecate support for the Adobe Experience Platform 1.x SDKs for Android. While the SDK will continue to function post-deprecation, it is crucial to be aware of the following changes:

### Limited Support

After the deprecation date, Adobe will no longer provide bug fixes or introduce new features for the Adobe Experience Platform 1.x SDKs on Android.

### Continued Support for Adobe Experience Platform 2.x SDKs

Adobe will continue to support Adobe Experience Platform 2.x SDKs for Android. Users on these SDK versions will continue to receive ongoing support, including bug fixes and access to new features until the release of the 3.x SDKs. We encourage users to upgrade to the latest 2.x version to stay current and benefit from Adobe’s best-in-class capabilities. To facilitate a smooth transition, comprehensive documentation outlining the upgrade process is available [here](https://developer.adobe.com/client-sdks/resources/migration/android/migrate-to-2x/).

### Upcoming Release: Adobe Experience Platform 3.x SDKs in 2024

In our commitment to innovation, Adobe is planning to release Adobe Experience Platform 3.x SDKs for Android later in 2024. This release will bring further advancements, performance improvements, and new features to elevate your development experience.

## End of support for ACP iOS SDKs and Wrappers

Since April 25, 2023, [Apple has required](https://developer.apple.com/news/?id=jd9wcyov) apps submitted to the App Store to be built with Xcode 14.1 or later. The Experience Platform Mobile SDKs and extensions outlined below were built with prior versions of Xcode and are no longer compatible with iOS and iPadOS given Apple's current App Store requirements. Consequently, on **August 31, 2023**, Adobe will be deprecating support for the following Experience Platform Mobile SDKs and wrapper extensions:

* [ACP iOS SDK](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#ios)
* [Cordova](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#cordova)
* [Flutter for ACP](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#flutter)
* [React Native for ACP](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#react-native)
* [Xamarin](https://developer.adobe.com/client-sdks/previous-versions/documentation/sdk-versions/#xamarin)

After **August 31, 2023**, applications already submitted to the App Store that contain these SDKs and wrapper extensions will continue to operate, however, Adobe will not be providing security updates or bug fixes, and these SDKs and wrapper extensions will be provided as-is exclusive of any warranty, due to the App Store policy outlined above. We encourage all customers to migrate to the latest Adobe Experience Platform versions of the Mobile SDK to ensure continued compatibility and support.

Documentation for the latest versions of the Adobe Experience Platform Mobile SDKs can be found [here](../home/current-sdk-versions.md).

Please refer to the following guides to migrate to the latest SDKs:

| **SDK** | **Migration guide** |
| :--- | :--- |
| ACP iOS SDK | [Migrate to AEP iOS SDK](../resources/migration/ios/migrate-to-3x.md) |
| Flutter for ACP | [Migrate to Flutter for AEP](https://github.com/adobe/aepsdk_flutter/blob/main/docs/migration.md) |
| React Native for ACP | [Migrate to React Native for AEP](https://github.com/adobe/aepsdk-react-native/blob/main/docs/migration.md) |
| Cordova | Not Supported |
| Xamarin | Not Supported |
