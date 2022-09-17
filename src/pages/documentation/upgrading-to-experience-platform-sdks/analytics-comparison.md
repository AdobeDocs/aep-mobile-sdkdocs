import analyticsconfigandroid from "../tabs/analyticsConfig-android.md"
import analyticsconfigios from "../tabs/analyticsConfig-ios.md"
import aepinstallandroid from "../tabs/aep-install-android.md"
import aepinstallios from "../tabs/aep-install-ios.md"
import apichangesandroid from "../tabs/api-changes-android.md"
import apichangesios from "../tabs/api-changes-ios.md"
import privacychangesandroid from "../tabs/privacy-changes-android.md"
import privacychangesios from "../tabs/privacy-changes-ios.md"

# V4 Mobile SDKs to Experience Platform Analytics migration

## Configuration

The Adobe Experience Platform Analytics extension uses [tags](https://experience.adobe.com/#/data-collection/) to configure the Adobe Experience Platform SDKs. This replaces the ADBMobileConfig.json which the Mobile Services SDK used for configuration. To get started with the AEP SDKs:

1. Create a mobile property on Launch. <br/>See [Set up a mobile property](https://aep-sdks.gitbook.io/docs/getting-started/create-a-mobile-property) for more information.
1. Configure your mobile app with the create mobile property.<br/>The AEP Mobile Core extension provides general functionality required by all the Adobe AEP extensions. The Configuration extension is built into the Mobile Core and contains the configureWithAppId API. This API is used to link the Launch mobile property with your mobile app. The documentation for this API can be seen at the [Configuration API Reference](https://aep-sdks.gitbook.io/docs/foundation-extensions/mobile-core/configuration/configuration-api-reference#configurewithappid) page. A code sample showing the usage of this API is provided below.
1. Once all the Platform extensions are imported and configured correctly, remove the v4 Mobile SDK dependency. <br/>This step is mandatory and a mix of v4 and AEP API calls is not supported.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<analyticsconfigandroid/>

#### iOS

<analyticsconfigios/>

## Analytics Migration Overview

For an overview of the API mapping between the Mobile Services SDK and Adobe Experience Platform SDKs, see the [API Change Log](https://aep-sdks.gitbook.io/docs/resources/upgrading-to-aep/api-change-log). This section describes the Analytics-specific changes made with the AEP Analytics extension.

### Deprecated API

| API | Notes |
|---|---|
| trackActionFromBackground ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/actions.html?lang=en)) | Deprecated |
| trackLocation:data: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/location-ios/geo-poi.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/location/geo-poi.html?lang=en)) | This functionality is available in the [Places extension](https://aep-sdks.gitbook.io/docs/foundation-extensions/places). |
| trackBeacon:Data: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/location-ios/ibeacon.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/location/beacon.html?lang=en)) | Support modified. [See guide](https://aep-sdks.gitbook.io/docs/resources/user-guides/track-beacon). |
| trackingClearCurrentBeacon ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/location-ios/ibeacon.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/location/beacon.html?lang=en)) | Support modified. [See guide](https://aep-sdks.gitbook.io/docs/resources/user-guides/track-beacon). |
| trackLifetimeValueIncrease:data: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/lifetime-value.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/lifetime-value.html?lang=en)) | This functionality can be recreated using the [Analytics](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-analytics) and [User Profile extensions](https://aep-sdks.gitbook.io/docs/foundation-extensions/profile).
| trackTimedActionStart: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/timed-actions.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/timed-actions.html?lang=en)) | This functionality can be recreated using the [Analytics](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-analytics) and [User Profile extensions](https://aep-sdks.gitbook.io/docs/foundation-extensions/profile).
| trackTimedActionUpdate: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/timed-actions.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/timed-actions.html?lang=en)) | This functionality can be recreated using the [Analytics](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-analytics) and [User Profile extensions](https://aep-sdks.gitbook.io/docs/foundation-extensions/profile).
| trackTimedActionEnd: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/timed-actions.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/timed-actions.html?lang=en)) | This functionality can be recreated using the [Analytics](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-analytics) and [User Profile extensions](https://aep-sdks.gitbook.io/docs/foundation-extensions/profile).
| trackTimedActionExists: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/timed-actions.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/timed-actions.html?lang=en)) | This functionality can be recreated using the [Analytics](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-analytics) and [User Profile extensions](https://aep-sdks.gitbook.io/docs/foundation-extensions/profile).

## AEP SDK Installation and Setup

### Register the AEP Extensions and link the app to the configuration created with Data Collection tags

In your app's Application class add the Adobe Experience Platform extension registration and configuration code:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<aepinstallandroid/>

#### iOS

<aepinstallios/>

For more details, see [Add Analytics to your application](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-analytics#add-analytics-to-your-application).

## API changes

### Track App State and Track App Actions

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<apichangesandroid/>

#### iOS

<apichangesios/>

## Privacy status changes in the AEP SDK

The privacy status API `setPrivacyStatus` and `getPrivacyStatus` can be found in the MobileCore. Like the Mobile Services SDK, the Analytics extension will follow these behaviors depending on the privacy status set:

**Opted in:** Analytics hits will be sent.

**Unknown:** Analytics hits will be queued.

**Opted out:** Analytics hits will be dropped.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<privacychangesandroid/>

#### iOS

<privacychangesios/>
