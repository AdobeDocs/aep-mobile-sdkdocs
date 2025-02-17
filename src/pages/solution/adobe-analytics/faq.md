---
title: Adobe Analytics FAQ
description: A frequently asked questions guide for the Adobe Analytics mobile extension.
keywords:
- Adobe Analytics
- FAQ
- Frequently asked questions
- Troubleshooting
---

# Frequently asked questions

## How can I set up, configure, or troubleshoot processing rules?

To learn about processing rules please read the [processing rules tips and tricks guide](https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/processing-rules/processing-rules-tips.html).

## Why are my Analytics identifiers (AID / MID) changing?

If you see SDK identifiers unexpectedly change, try the following fixes to address the issue. If none of these work, contact Customer Care at your earliest convenience for resolution:

* Ensure that no other versions of the SDK are running - for instance, if you are upgrading SDK versions from 4x to Experience Platform Mobile SDKs - remove all references to 4x SDKs. For 4x SDKs you may look (and remove) for the adobeMobileLibrary/AdobeMobile/AdobeMobileSDK dependency or lib in the project or if the verbose logs indicate ADBMobile prefixed entries.
* Examine app code for logic clearing app user defaults and/or shared preferences. SDK identifiers are stored in app user defaults and shared preferences and may not be cleared for proper functioning of the SDK.
* APIs such as setPrivacyStatus / resetIdentities clear SDK-stored identifiers - ensure that you are appropriately calling these APIs to avoid resetting SDK identifiers.

## Why are Crashes inflated in the Analytics report

The metric `Crashes` is computed based on the Lifecycle start and pause API calls implemented in your mobile application. How can you verify if the implementation is correct:

* Ensure that the Lifecycle extension is registered.
* Verify that both MobileCore APIs `lifecycleStart` and `lifecyclePause` are implemented in the application based on the recommended settings for each platform. See the [Lifecycle guide for adding appropriate start/pause calls](/src/pages/home/base/mobile-core/lifecycle/index.md#add-lifecycle-start-and-pause-calls).
* For more details, see also [Tracking app crashes in iOS](../../home/base/mobile-core/lifecycle/ios.md#tracking-app-crashes-in-ios) and [Android](../../home/base/mobile-core/lifecycle/android.md#tracking-app-crashes-in-android).

## How are mobile visits different from launches?

A launch is measured by the SDK when a user opens the app for the first time or returns to the app after having been out of the app for longer than the specified timeout value. The typical timeout is 5 minutes (300 seconds) in the [lifecycleTimeout](../../home/base/mobile-core/lifecycle/index.md#device-information) configuration setting.

A visit is a server-side calculation by Adobe Analytics and is based on the first and last data hits that are sent by the SDK without exceeding a visit timeout. Typically, session timeouts are set at 30 minutes for a report suite. Although visits come from traditional web analytics, these hits still provide valuable insights into how users enter and exit from your app.

## Can I send my analytics data to multiple report suites?

Yes. To capture data in multiple report suites, please read the [report suites guide](./index.md#report-suites).

## I don't see data in my Adobe Analytics report suite - what can I do?

If you have followed the documentation and are unable to see reporting data in your Adobe Analytics dashboard, please consider the following next steps:

### Verify that the Analytics extension is registered

The [Analytics extension](./index.md) and its dependent [Identity extension](../../home/base/mobile-core/identity/index.md) should be registered and configured correctly for the SDK to start processing trackAction/trackState requests.

### Verify that network requests are sent to Adobe Analytics

You can use [Adobe Experience Platform Assurance](https://experienceleague.adobe.com/docs/experience-platform/assurance/home.html) to verify events are being sent to Adobe Analytics.

### Ensure appropriate timestamp configuration

Ensure that your SDK timestamp configuration is aligned with the report suite's timestamp settings. That is, `analytics.offlineEnabled` in the SDK configuration block for the tags mobile property is aligned with the setting of Timestamp Configuration in your report suite. You may find Timestamp at Analytics &gt; Admin &gt; Report Suites &gt; General &gt; Timestamp Configuration.

The following settings explain how settings between the SDK and your report suite should be aligned:

* `analytics.offlineEnabled = true` ties to timestamps required or optional
* `analytics.offlineEnabled = false` ties to timestamps not allowed or optional

### Verify current privacy status

In the mobile property (tag) in the Data Collection UI, select the property from the list, then select **Configure**. If the "Privacy" setting is "Opted Out" the request is dropped by the SDK. If the setting is "Unknown" the request is queued on the device until the status changes to "Opted In" or "Opted Out". If these settings are managed in your app, navigate to the screen where the Privacy settings are updated with the SDK.

### Contact Adobe Customer Care

If you are unable to resolve your concerns through resources provided here, please contact [Adobe Experience Cloud customer care](https://experienceleague.adobe.com/?support-solution=General#support) for immediate assistance.

## How do I send data to Adobe Analytics in React Native and Flutter?

In the latest SDK version (AEP-prefixed) for React Native and Flutter, you can send data to Analytics via the Edge Network using the Edge Network extension and `sendEvent` API. If you want a drop-in migration solution for an existing `trackAction` / `trackState` implementation, you can do this with the help of the Edge Bridge extension. You can learn more about these options in the [migration guide](./migrate-to-edge-network.md).
