import Tabs from './tabs/analytics-comparison.md'

# V4 Mobile SDKs to Experience Platform Analytics migration

## Configuration

The Adobe Experience Platform Analytics extension uses [tags](https://experience.adobe.com/#/data-collection/) to configure the Adobe Experience Platform SDKs. This replaces the ADBMobileConfig.json which the Mobile Services SDK used for configuration. To get started with the AEP SDKs:

1. Create a mobile property on tags. <br/>See [Set up a mobile property](../getting-started/create-a-mobile-property.md) for more information.
2. Configure your mobile app with the create mobile property.<br/>The AEP Mobile Core extension provides general functionality required by all the Adobe AEP extensions. The Configuration extension is built into the Mobile Core and contains the configureWithAppId API. This API is used to link the tag mobile property with your mobile app. The documentation for this API can be seen at the [Configuration API Reference](../mobile-core/configuration/api-reference.md#configurewithappid) page. A code sample showing the usage of this API is provided below.
3. Once all the Platform extensions are imported and configured correctly, remove the v4 Mobile SDK dependency. <br/>This step is mandatory and a mix of v4 and AEP API calls is not supported.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=config"/>

iOS

<Tabs query="platform=ios&task=config"/>

## Analytics Migration Overview

For an overview of the API mapping between the Mobile Services SDK and Adobe Experience Platform SDKs, see the [API Change Log](./api-changelog.md). This section describes the Analytics-specific changes made with the AEP Analytics extension.

### Deprecated API

| API | Notes |
|---|---|
| trackActionFromBackground ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/actions.html?lang=en)) | Deprecated |
| trackLocation:data: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/location-ios/geo-poi.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/location/geo-poi.html?lang=en)) | This functionality is available in the [Places extension](../places/index.md). |
| trackBeacon:Data: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/location-ios/ibeacon.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/location/beacon.html?lang=en)) | Support modified. [See guide](../user-guides/track-beacon.md). |
| trackingClearCurrentBeacon ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/location-ios/ibeacon.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/location/beacon.html?lang=en)) | Support modified. [See guide](../user-guides/track-beacon.md). |
| trackLifetimeValueIncrease:data: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/lifetime-value.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/lifetime-value.html?lang=en)) | This functionality can be recreated using the [Analytics](../adobe-analytics/index.md) and [User Profile extensions](../profile/index.md).
| trackTimedActionStart: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/timed-actions.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/timed-actions.html?lang=en)) | This functionality can be recreated using the [Analytics](../adobe-analytics/index.md) and [User Profile extensions](../profile/index.md).
| trackTimedActionUpdate: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/timed-actions.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/timed-actions.html?lang=en)) | This functionality can be recreated using the [Analytics](../adobe-analytics/index.md) and [User Profile extensions](../profile/index.md).
| trackTimedActionEnd: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/timed-actions.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/timed-actions.html?lang=en)) | This functionality can be recreated using the [Analytics](../adobe-analytics/index.md) and [User Profile extensions](../profile/index.md).
| trackTimedActionExists: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/timed-actions.html?lang=en), [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/timed-actions.html?lang=en)) | This functionality can be recreated using the [Analytics](../adobe-analytics/index.md) and [User Profile extensions](../profile/index.md).

## AEP SDK Installation and Setup

### Register the AEP Extensions and link the app to the configuration created with Data Collection tags

In your app's Application class add the Adobe Experience Platform extension registration and configuration code:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=aep-install"/>

iOS

<Tabs query="platform=ios&task=aep-install"/>

For more details, see [Add Analytics to your application](../adobe-analytics/index.md#add-analytics-to-your-application).

## API changes

### Track App State and Track App Actions

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=api-changes"/>

iOS

<Tabs query="platform=ios&task=api-changes"/>

## Privacy status changes in the AEP SDK

The privacy status API `setPrivacyStatus` and `getPrivacyStatus` can be found in the MobileCore. Like the Mobile Services SDK, the Analytics extension will follow these behaviors depending on the privacy status set:

**Opted in:** Analytics hits will be sent.

**Unknown:** Analytics hits will be queued.

**Opted out:** Analytics hits will be dropped.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=privacy-changes"/>

iOS

<Tabs query="platform=ios&task=privacy-changes"/>