import Tabs from './tabs/index.md'

# Lifecycle

Sessions contain information about the app's current lifecycle, such as the device information, the application install or upgrade information, the session start and pause times, the number of application launches, and additional context data that is provided by the developer through the `LifecycleStart` API. Session data is persisted, so it is available across application launches.

## Add Lifecycle to your app

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=add"/>

iOS

<Tabs query="platform=ios&task=add"/>

<!--- React Native

<Tabs query="platform=react-native&task=add"/>

Flutter

<Tabs query="platform=flutter&task=add"/> --->

## Register Lifecycle with Mobile Core and add appropriate Start/Pause calls

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=register"/>

iOS

<Tabs query="platform=ios&task=register"/>

<!--- React Native

<Tabs query="platform=react-native&task=register"/> --->

## Lifecycle metrics

The following is a complete list of all of the metrics provided on your user's app lifecycle.

### Application Context

| Metric | Key | Description |
| :----- | :--- | :--------- |
| App ID | `a.AppID` | Stores the application name and version in the following format: `AppName BundleVersion (app version code)`. An example of this format is `MyAppName 1.1(1)`. |
| Device name | `a.DeviceName` | Stores the device name. |
| Operating system version | `a.OSVersion` | Stores the operating system name and version. |
| Carrier name | `a.carrierName` | Stores the name of the mobile service provider as provided by the device. <br/><br/> This metric is **not** automatically stored in an Analytics variable. You must create a processing rule to copy this value to an Analytics variable for reporting. |
| Resolution | `a.Resolution` | The width x height in pixels. |
| Locale | `a.Locale` | The locale set for this device. For example, this value can be `en-US`. |

### Install

| Metric | Key | Description |
| :--- | :--- | :--- |
| First Launches | `a.InstallEvent` | Triggered at the first run after installation or re-installation. |
| Install Date | `a.InstallDate` | Date of first launch after installation. The format is `M/d/yyyy`, and an example is `5/3/2017`. |

### Upgrade

| Metric | Key | Description |
| :--- | :--- | :--- |
| Upgrades | `a.UpgradeEvent` | Triggered at the first run after upgrade or when the version number changes. |
| Launches since last upgrade | `a.LaunchesSinceUpgrade` | Number of days since the application version number changed. |
| Days since last upgrade | `a.DaysSinceLastUpgrade` | Number of launches since the application version number changed. |

### Launch

| Metric | Key | Description |
| :--- | :--- | :--- |
| Daily Engaged Users | `a.DailyEngUserEvent` | Triggered when the application is used on a particular day. Important: This metric is not automatically stored in an Analytics metric. You must create a processing rule that sets a custom event to capture this metric. |
| Monthly Engaged Users | `a.MonthlyEngUserEvent` | Triggered when the application is used during a particular month. Important: This metric is not automatically stored in an Analytics metric. You must create a processing rule that sets a custom event to capture this metric. |
| Launches | `a.LaunchEvent` | Triggered on every run, including crashes and installs. Also triggered when the app is resumed from the background after the lifecycle session timeout is exceeded. |
| Previous Session Length | `a.PrevSessionLength` | Reports the number of seconds that a previous application session lasted based on how long the application was open and in the foreground. |
| Ignored Session Length | `a.ignoredSessionLength` | If the last session is set to last longer than `lifecycle.sessionTimeout`, that session length is ignored and recorded here. |
| Launch Number | `a.Launches` | Number of times the application was launched or brought out of the background. |
| Days since first use | `a.DaysSinceFirstUse` | Number of days since first run. |
| Days since last use | `a.DaysSinceLastUse` | Number of days since last use. |
| Hour of Day | `a.HourOfDay` | Measures the hour the app was launched and uses the 24-hour numerical format. Used for time parting to determine peak usage times. |
| Day of Week | `a.DayOfWeek` | Measures the day of the week the app was launched. |

### Crash

| Metric | Key | Description |
| :--- | :--- | :--- |
| Crashes | `a.CrashEvent` | Triggered when the application crashed before closing. The event is sent when the application is started again after the crash. |

### Device information

| Metric | Key | Description | 
| :----- | :--- | :--------- |
| App ID | `a.AppId` | Stores the application name and version in the `AppName BundleVersion (app version code)` format. <br/><br/> An example of this format is `MyAppName 1.1(1)`. |
| Device name | `a.DeviceName` | Stores the device name. |
| Operating system version | `a.OSVersion` | Stores the operating system name and version. |
| Carrier name | `a.CarrierName` | Stores the name of the mobile service provider as provided by the devices.<br/><br/>This metric is **not** automatically saved in an Analytics variable. For reporting, you must create a processing rule to copy this value to an Analytics variable. |
| Resolution | `a.Resolution` | The width x height in pixels. | 
| Locale | `a.Locale` | The locale set for this device. For example, this can be `en-US`. |

If you need to programmatically update your SDK configuration, use the following information to change your Lifecycle configuration values:

<InlineAlert variant="warning" slots="text"/>

The time that your app spends in the background is not included in the session length.

| Key | Description |
| :---  | :-------- |
| `lifecycle.sessionTimeout` | Time, in seconds, that must elapse between the time the app is launched and before the launch is considered to be a new session. This timeout also applies when your application is sent to the background and reactivated.<br/><br/> The default value is 300 seconds (5 minutes). |
