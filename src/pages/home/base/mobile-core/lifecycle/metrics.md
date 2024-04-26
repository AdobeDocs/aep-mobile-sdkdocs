---
title: Lifecycle data
description: A guide explaining the Mobile Core Lifecycle extension's data, usually used with Adobe Analytics extensions.
keywords:
- Lifecycle
- Lifecycle for Mobile Core
- Analytics
- Mobile Core
- Data
---

# Lifecycle data

When used with the [Analytics extension](../../../../solution/adobe-analytics/index.md), this data is collected and sent to Analytics on every session start. Sessions are determined by the [sessionTimeout](./configuration-keys.md#lifecyclesessiontimeout) configuration.

<InlineAlert variant="warning" slots="text"/>

This data is not used with Lifecycle for Edge Network. Instead, view the [Lifecycle for Edge Network data](../../../../edge/lifecycle-for-edge-network/metrics.md) reference.

## Lifecycle data content response data

The following data is collected on each [Lifecycle data content response](./event-reference.md#lifecycle-data-content-response) event.

### Install

| **Data** | **Key** | **Description** |
| :--- | :--- | :--- |
| First Launches | `a.InstallEvent` | Triggered at the first run after installation or re-installation. |
| Install Date | `a.InstallDate` | Date of first launch after installation. The format is `M/d/yyyy`, and an example is `5/3/2017`. |

### Upgrade

| **Data** | **Key** | **Description** |
| :--- | :--- | :--- |
| Upgrades | `a.UpgradeEvent` | Triggered at the first run after upgrade or when the version number changes. |
| Days since last upgrade | `a.DaysSinceLastUpgrade` | Number of days since the application version number changed. <br/><br/> **Important**: This data is **not** automatically stored in an Analytics metric. You must create a processing rule that sets a custom event to capture this data. |
| Launches since last upgrade | `a.LaunchesSinceUpgrade` | Number of launches since the application version number changed. <br/><br/> **Important**: This data is **not** automatically stored in an Analytics metric. You must create a processing rule that sets a custom event to capture this data. |

### Launch

| **Data** | **Key** | **Description** |
| :--- | :--- | :--- |
| Daily Engaged Users | `a.DailyEngUserEvent` | Triggered when the application is used on a particular day.<br/><br/> **Important**: This data is **not** automatically stored in an Analytics metric. You must create a processing rule that sets a custom event to capture this data. |
| Monthly Engaged Users | `a.MonthlyEngUserEvent` | Triggered when the application is used during a particular month.<br/><br/> **Important**: This data is **not** automatically stored in an Analytics metric. You must create a processing rule that sets a custom event to capture this data. |
| Launches | `a.LaunchEvent` | Triggered on every run, including crashes and installs. Also triggered when the app is resumed from the background after the lifecycle session timeout is exceeded. |
| Previous Session Length | `a.PrevSessionLength` | Reports the number of seconds that a previous application session lasted based on how long the application was open and in the foreground. |
| Ignored Session Length | `a.ignoredSessionLength` | If the last session is set to last longer than `lifecycle.sessionTimeout`, that session length is ignored and recorded here. |
| Launch Number | `a.Launches` | Number of times the application was launched or brought out of the background. |
| Days since first use | `a.DaysSinceFirstUse` | Number of days since first run. |
| Days since last use | `a.DaysSinceLastUse` | Number of days since last use. |
| Hour of Day | `a.HourOfDay` | Measures the hour the app was launched and uses the 24-hour numerical format. Used for time parting to determine peak usage times. |
| Day of Week | `a.DayOfWeek` | Measures the day of the week the app was launched. |

### Crash

| **Data** | **Key** | **Description** |
| :--- | :--- | :--- |
| Crashes | `a.CrashEvent` | Triggered when the application crashed before closing. The event is sent when the application is started again after the crash. |

### Device information

| **Data** | **Key** | **Description** |
| :--------- | :------ | :-------------- |
| App ID | `a.AppId` | Stores the application name and version in the following format: `AppName BundleVersion (app version code)`. An example of this format is `MyAppName 1.1(1)`. |
| Device name | `a.DeviceName` | Store the device name. |
| Operating system version | `a.OSVersion` | Stores the operating system's name and version. |
| Carrier name | `a.CarrierName` | Stores the name of the mobile service provider as provided by the device. <br/><br/> **Important:** This data is **not** automatically stored in an Analytics variable. You must create a processing rule to copy this value to an Analytics variable for reporting. |
| Resolution | `a.Resolution` | The width x height in pixels. |
| Locale | `a.locale` | The locale set for the application. For example, `en-US`. |
| System Locale | `a.systemLocale` | The locale set for this device. For example, `en-US`. |
