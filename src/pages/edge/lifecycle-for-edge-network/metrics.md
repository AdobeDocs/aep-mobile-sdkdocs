---
title: Lifecycle for Edge Network data
description: A guide explaining the data for the Lifecycle for Edge Network mobile extension.
keywords:
- Edge Network
- Lifecycle for Edge Network
- Data
---

# Lifecycle for Edge Network data

When used with the [Edge Network extension](../edge-network/index.md), the following data is collected and sent to Platform on every application launch. An additional [rule in the mobile property](./index.md#configure-a-rule-to-forward-lifecycle-data-to-platform) is required to send Lifecycle data to the Edge Network extension.

When the Analytics service is enabled in the datastream configuration, the XDM Lifecycle data is automatically mapped to Analytics. See the [XDM object variable mapping to Adobe Analytics](https://experienceleague.adobe.com/en/docs/analytics/implementation/aep-edge/xdm-var-mapping) documentation for more information.

<InlineAlert variant="warning" slots="text"/>

This data is not used with Lifecycle for Analytics. Instead, view the [Lifecycle data](../../home/base/mobile-core/lifecycle/metrics.md) reference.

## Lifecycle Application Foreground data

The following data is collected on each [Lifecycle Application Foreground](../../home/base/mobile-core/lifecycle/event-reference.md#lifecycle-application-foreground) event. The structure of this data is defined in the Experience Data Model (XDM) field group [AEP Mobile Lifecycle Details](https://github.com/adobe/xdm/blob/master/docs/reference/adobe/experience/aep-mobile-lifecycle-details.schema.md).

### Application

| **Property** | **Type** | **Description** |
| :--- | :--- | :--- |
| xdm:id | String | Identifier of the application. |
| xdm:name | String | Name of the application. |
| xdm:version | String | Version of the application. |
| xdm:isLaunch | boolean | Indicates the application has launched. Every application foreground event sets `isLaunch` to `true`. |
| xdm:isInstall | boolean | Indicates the application was installed. If `true`, signifies the first launch of the application. The Experience Event's timestamp property can be used as the application's install date. |
| xdm:isUpgrade | boolean | Indicates the application was upgraded. If `true`, signifies the first launch of the application after an upgrade. |
| dc:language | String | The language of the application to represent the user's linguistic, geographical, or cultural preferences for data presentation. |

<InlineAlert variant="info" slots="text1, text2, text3, text4"/>

For the [Edge Network extension](../edge-network/index.md), the `xdm:isUpgrade` property, which identifies app upgrades, is collected within the [Lifecycle extension](../../home/base/mobile-core/lifecycle/) by comparing version information at each app launch. Starting with Lifecycle extension for Android version 3.0.1 and Lifecycle extension for iOS version 5.1.0, there is an enhancement to the method of calculating this property.

**xdm:isUpgrade (Previous Method)**
In Lifecycle extension for Android version (2.0.0 - 3.0.0) and Lifecycle extension for iOS version (4.0.0 - 5.0.0), the app upgrade event is detected by comparing the `build number`s on iOS and the `version name`s on Android.

**xdm:isUpgrade (New Method)**
Starting with Lifecycle extension for Android version 3.0.1 and Lifecycle extension for iOS version 5.1.0, the app upgrade event is detected through comparisions of the `xdm:version` properties which has the format  `versionName (versionCode)` on Android and `Version (Build)` on iOS.

This change now more accurately detects when an application upgrade occurs. Applications which only change the build number on iOS or the version name on Android when upgrading, may see an increase in Lifecycle upgrade events. Other applications, however, should not see a change to Lifecycle upgrade events.

### Device

| **Property** | **Type** | **Description** |
| :--- | :--- | :--- |
| xdm:type | String | The type of device being tracked. |
| xdm:manufacturer | String | The name of the organization who owns the design and creation of the device. |
| xdm:model | String | The name of the model for the device. |
| xdm:modelNumber | String | The unique model number designation assigned by the manufacturer for this device. |
| xdm:screenHeight | integer | The number of vertical pixels of the device's active display in the default orientation. |
| xdm:screenWidth | integer | The number of horizontal pixels of the device's active display in the default orientation. |

### Environment

| **Property** | **Type** | **Description** |
| :--- | :--- | :--- |
| xdm:type | String | The type of the application environment. |
| xdm:carrier | String | A mobile network carrier or MNO, also known as a wireless service provider, wireless carrier, cellular company, or mobile network carrier. |
| xdm:operatingSystem | String | The name of the operating system used when the observation was made. |
| xdm:operatingSystemVersion | String | The full version identifier for the operating system used when the observation was made. |
| dc:language | String | The language of the environment to represent the user's linguistic, geographical, or cultural preferences for data presentation. |

## Lifecycle Application Background data

The following data is collected on each [Lifecycle Application Background](../../home/base/mobile-core/lifecycle/event-reference.md#lifecycle-application-background) event. The structure of this data is defined in the Experience Data Model (XDM) field group [AEP Mobile Lifecycle Details](https://github.com/adobe/xdm/blob/master/docs/reference/adobe/experience/aep-mobile-lifecycle-details.schema.md).

### Application

| **Property** | **Type** | **Description** |
| :--- | :--- | :--- |
| xdm:isClose | boolean | Indicates the application was closed. Every application background event sets `isClose` to `true`. |
| xdm:closeType | String | Type of application close, sent on application isClose. Type is `close` on graceful termination of an application, or `unknown` when application termination source is unknown. |
| xdm:sessionLength | integer | Length of the application session in seconds. Usually referred as the time the application was in foreground. Will not be less than zero. |
