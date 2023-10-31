# ACP SDKs end-of-support

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
| ACP iOS SDK | [Migrate to AEP iOS SDK](https://developer.adobe.com/client-sdks/previous-versions/documentation/migrate-to-swift) |
| Flutter for ACP | [Migrate to Flutter for AEP](https://github.com/adobe/aepsdk_flutter/blob/main/docs/migration.md) |
| React Native for ACP | [Migrate to React Native for AEP](https://github.com/adobe/aepsdk-react-native/blob/main/docs/migration.md) |
| Cordova | Not Supported |
| Xamarin | Not Supported |
