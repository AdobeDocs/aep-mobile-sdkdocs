import Tabs from './tabs/analytics.md'

# Adobe Mobile Library (v4) to Experience Platform Analytics migration

## Configuration

The Adobe Experience Platform Analytics extension uses [tags](https://experience.adobe.com/#/data-collection/) to configure the Experience Platform SDKs. This replaces the ADBMobileConfig.json which the Mobile Services SDK used for configuration. To get started with the AEP SDKs:

1. Create a mobile property on tags. <br/>See [Set up a mobile property](../../getting-started/create-a-mobile-property.md) for more information.
2. Configure your mobile app with the create mobile property.<br/>The AEP Mobile Core extension provides general functionality required by all the Adobe AEP extensions. The Configuration extension is built into the Mobile Core and contains the configureWithAppId API. This API is used to link the tag mobile property with your mobile app. The documentation for this API can be seen at the [Configuration API Reference](../../mobile-core/configuration/api-reference.md#configurewithappid) page. A code sample showing the usage of this API is provided below.
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
| trackActionFromBackground | Deprecated |
| trackLocation:data: | This functionality is available in the [Places extension](../../places/index.md). |
| trackBeacon:Data: | Support modified. [See guide](../../adobe-analytics/track-beacon.md). |
| trackingClearCurrentBeacon | Support modified. [See guide](../../adobe-analytics/track-beacon.md). |
| trackLifetimeValueIncrease:data: | This functionality can be recreated using the [Analytics](../../adobe-analytics/index.md) and [User Profile](../../profile/index.md) extensions.
| trackTimedActionStart: | This functionality can be recreated using the [Analytics](../../adobe-analytics/index.md) and [User Profile](../../profile/index.md) extensions.
| trackTimedActionUpdate: | This functionality can be recreated using the [Analytics](../../adobe-analytics/index.md) and [User Profile](../../profile/index.md) extensions.
| trackTimedActionEnd: | This functionality can be recreated using the [Analytics](../../adobe-analytics/index.md) and [User Profile](../../profile/index.md) extensions.
| trackTimedActionExists: | This functionality can be recreated using the [Analytics](../../adobe-analytics/index.md) and [User Profile](../../profile/index.md) extensions.

## Experience Platform extensions installation and setup

### Register the extensions and link the app to the configuration created with Data Collection tags

In your app's Application class add the mobile extension registration and configuration code:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=aep-install"/>

iOS

<Tabs query="platform=ios&task=aep-install"/>

For more details, see [Add Analytics to your application](../../adobe-analytics/index.md#add-analytics-to-your-application).

## API changes

### Track app states and actions

#### Adobe Mobile Library (v4)

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=api-changes-v4"/>

iOS

<Tabs query="platform=ios&task=api-changes-v4"/>

#### Experience Platform Mobile SDKs

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=api-changes-aep"/>

iOS

<Tabs query="platform=ios&task=api-changes-aep"/>


## Privacy status changes in the Experience Platform SDK

The privacy APIs `setPrivacyStatus` and `getPrivacyStatus` can be found in the MobileCore. Similar to the v4 SDK, the Analytics extension will follow these behaviors depending on the privacy status set:

* **Opted in:** Analytics hits will be sent.
* **Unknown:** Analytics hits will be queued.
* **Opted out:** Analytics hits will be dropped.

### Experience Platform Mobile SDKs

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=privacy-changes-aep"/>

iOS

<Tabs query="platform=ios&task=privacy-changes-aep"/>
