# Implementation - 中文–简体

本文旨在介绍如何在微信小程序中使用Adobe Experience Platform SDK.

## 添加小程序SDK到项目中

小程序SDK可以从如下地址进行下载：[https://github.com/adobe/wechat/tree/master/dist](https://github.com/adobe/wechat/tree/master/dist)

小程序SDK下载到本地之后，可以将该SDK添加到项目路径下。然后在小程序项目的`app.js`文件中，引用下载到本地的SDK。例如：

```
const AdobeSDK = require('AdobeSDK.js');
```

## 初始化SDK

在`app.js`文件中的`onLaunch`方法中，调用`AdobeSDK.init()`，并且注意配置上正确的参数值，例如：

<InlineAlert variant="info" slots="text"/>

请联系贵公司的Adobe Analytics管理员或者Adobe咨询顾问来确定这些配置参数。

```
// App({
//   onLaunch: function () {
//     // 展示本地存储能力
//     var logs = wx.getStorageSync('logs') || []
//     logs.unshift(Date.now())
//     wx.setStorageSync('logs', logs)
    AdobeSDK.init({
       "analytics.server": "example.sc.adobedc.cn",      //必填
       "analytics.rsids": "example.reportsuite",    //必填
       "app.id": "adobe-demo",                        //必填 
       "app.version": "0.0.0.1",           //选填, default value = ''
      "analytics.offlineEnabled": true,   //选填, default value = false
       "session.timeout": 30               //选填, default value = 30
     });
// })   
```

<InlineAlert variant="info" slots="text"/>

如果在上述配置中将`analytics.offlineEnabled`配置为`True`，那么向Analytics发出的请求中会包含`timestamps(ts)`.<br/>`session.timeout`这个配置的单位是秒，指的是从`App`初始化完成开始，到一个新的`session`之间所经过的时间。这个`timeout`时间在小程序进入后台，之后被重新激活进入前台运行的场景下同样适用。该配置的缺省值是`30`秒

<InlineAlert variant="info" slots="text"/>

如果需要将数据发送给多个报表包，可以在相应配置中用逗号分割RSID。例如：<br/>`"analytics.rsids": "example.rsid1,example.rsid2"`。这个写法会把数据发送给`example.rsid1`和`example.rsid2`这两个报表包。

SDK初始化完成之后，会自动开始收集数据，并向Adobe Analytics发送生命周期指标。请在 [生命周期指标](#生命周期指标)查看完整的生命周期指标。

## 启用调试日志功能

### AdobeSDK.setDebugLoggingEnabled(flag)

用如下代码可以启用调试日志功能

```
AdobeSDK.setDebugLoggingEnabled(true)
```

### AdobeSDK.setDebugModeEnabled(flag)

确实设置下，本SDK会隐藏异常错误信息。在调试模式下，会将异常错误信息打印在控制台中。用如下代码可以打开调试模式：

```
AdobeSDK.setDebugModeEnabled(true)
```

## 追踪用户行为

下面介绍在小程序中用来追踪和监测用户行为的API。

### AdobeSDK.trackAction(actionName, contextData)

可以使用这个API来追踪和监测用户行为。每一次用户行为会触发事件，进而增加一个或多个相应指标的值。例如，可以用这个API来追踪用户订阅，用户浏览了一篇文章，或者用户升级到新级别。

<InlineAlert variant="info" slots="text"/>

发送给Analytics的trackAction请求会被当做一个事件(event)来处理，这个请求不会增加page view。在发送给Analytics中，会用action这个变量来传送值。

```
AdobeSDK.trackAction("action", { "example.key": "value" });
```

### AdobeSDK.trackState(stateName, contextData)

<InlineAlert variant="info" slots="text"/>

Analytics会把`trackState`请求当做Page View来处理。`stateName`参数的值会作为Page Name。在发送给Analytics中，会用page name变量来传送值。

<InlineAlert variant="info" slots="text"/>

可以在小程序的onShow方法中调用该API来追踪用户在不同页面间切换的行为。

```
AdobeSDK.trackState("state", { "example.key": "value" });
```

## 生命周期指标

在SDK初始化完成之后，生命周期指标会被自动发送给Analytics。下表是收集以及发送给Analytics的生命周期指标的完整列表：

### 小程序安装

| 指标名称 | 标识符 | 描述 |
|---|---|---|
| 首次打开<br/>(First Launches) | `a.InstallEvent` | 首次加载并打开小程序，或者小程序被卸载后重新加载打开小程序时触发。 |
| 安装日期<br/>(Install Date) | `a.InstallDate` | 首次打开小程序的日期 |

### 小程序升级

| 指标名称 | 标识符 | 描述 |
|---|---|---|
| 升级<br/>(Upgrades) | `a.UpgradeEvent` | 小程序版本号改变后，用户首次运行小程序时触发 |
| 距上次升级天数<br/>(Days since last upgrade) | `a.DaysSinceLastUpgrade` | 距上次小程序版本号变更后经过的天数 |
| 自上次升级后打开次数<br/>(Launches since last upgrade) | `a.LaunchesSinceUpgrade` | 自上次小程序版本变更后，打开次数。(注：小程序App的`onLaunch`函数调用次数） |

### 小程序打开

| 指标名称 | 标识符 | 描述 |
|---|---|---|
| 日用户数<br/>(Daily Engaged Users) | `a.DailyEngUserEvent` | 当用户在当日有使用小程序时触发。重要：Analytics不会自动存储该指标。如果需要使用该指标，必须用处理规则来配置自定义事件，才能记录该指标。 |
| 月用户数(Monthly Engaged Users) | `a.MonthlyEngUserEvent` | 当用户在当月有使用小程序时触发。重要：Analytics不会自动存储该指标。如果需要使用该指标，必须用处理规则来配置自定义事件，才能记录该指标。 |
| 打开次数(Launches) | `a.LaunchEvent` | 每次打开小程序运行时触发，包括小程序崩溃后重启及小程序首次打开运行。另外，在小程序被从后台唤醒到前台，且距本次打开时间超过了设置的session timeout时间时，该时间会被触发。 |
| 上次访问时长(Previous Session Length) | `a.PrevSessionLength` | 上次小程序打开，且在前台运行的总时长。以秒为单位。 |
| 打开次数(Launch Number) | `a.Launches` | 小程序打开，或者从后台被唤醒至前台的次数。 | 
| 距首次打开天数(Days since first use) | `a.DaysSinceFirstUse` | 距第一次运行该小程序的天数。 |
| 距上次打开天数(Days since last use) | `a.DaysSinceLastUse` | 距上一次运行该小程序的天数。 |
| 打开时点 (Hour of Day) | `a.HourOfDay` | 记录小程序打开时的整点值，以24小时形式计时。可用该指标来测算小程序的高峰使用时点。 |
| 打开日 (Day of Week) | `a.DayOfWeek` | 记录小程序在一周中的哪一天打开。 |

### Device information

| 指标名称 | 标识符 | 描述 |
|---|---|---|
| AppID | `a.AppID` | 用于保存小程序名称及版本。格式为：`AppName BundleVersion (app version code)`。例如：`MyAppName 1.1(1)`。该值来自于SDK初始化设置中的`app.id`。 |
| 设备名称(Device Name) | `a.DeviceName` | 用于保存设备名称。例如：iphone 5 |
| 操作系统及版本(Operation system version) | `a.OSVersion` | 用于保存操作系统名称以及版本信息。 |
| 分辨率 (Resolution) | `a.Resolution` | 屏幕的分辨率，单位是像素。例如：456 x 320 |
| 运行模式 (Run mode) | `a.RunMode` | 运行模式。该值为"Application"。 |

## 验证发送给Analytics的请求

以下为向Analytics发送请求的示例。

### 生命周期指标 - 小程序安装

```
ndh=1&c.&a.&OSVersion=iOS%2010.0.1&DeviceName=iPhone%207&Resolution=555x375&RunMode=Application&PlatformVersion=wechat-6.6.3&AppId=adobe-demo%20(0.0.0.2)&InstallEvent=InstallEvent&InstallDate=6%2F17%2F2019&LaunchEvent=LaunchEvent&PrevSessionLength=0&Launches=1&DaysSinceFirstUse=0&DaysSinceLastUse=0&MonthlyEngUserEvent=MonthlyEngUserEvent&DailyEngUserEvent=DailyEngUserEvent&HourOfDay=14&DayOfWeek=2&action=Lifecycle&TimeSinceLaunch=0&.a&.c&pe=lnk_o&pev2=ADBINTERNAL%3ALifecycle&pageName=adobe-demo%20(0.0.0.2)&aid=56025F971A9133B0-064362B2442D266E&ce=UTF-8&t=00%2F00%2F0000%2000%3A00%3A00%200%20360&ts=1560802302&cp=foreground
```

### 生命周期指标 - 小程序打开

```
ndh=1&c.&a.&OSVersion=iOS%2010.0.1&DeviceName=iPhone%207&Resolution=555x375&RunMode=Application&PlatformVersion=wechat-6.6.3&AppId=adobe-demo%20(0.0.0.1)&LaunchEvent=LaunchEvent&PrevSessionLength=8&Launches=4&DaysSinceFirstUse=0&DaysSinceLastUse=0&HourOfDay=11&DayOfWeek=2&action=Lifecycle&TimeSinceLaunch=0&.a&.c&pe=lnk_o&pev2=ADBINTERNAL%3ALifecycle&pageName=adobe-demo%20(0.0.0.1)&aid=5B2BF542EAE66678-0E94474822B39961&ce=UTF-8&t=00%2F00%2F0000%2000%3A00%3A00%200%20360&ts=1560792653&cp=foreground
```

### 生命周期指标 - 小程序升级

```
ndh=1&c.&a.&OSVersion=iOS%2010.0.1&DeviceName=iPhone%207&Resolution=555x375&RunMode=Application&PlatformVersion=wechat-6.6.3&AppId=adobe-demo%20(0.0.0.2)&UpgradeEvent=UpgradeEvent&DaysSinceLastUpgrade=0&LaunchesSinceUpgrade=1&LaunchEvent=LaunchEvent&PrevSessionLength=3&Launches=2&DaysSinceFirstUse=0&DaysSinceLastUse=0&HourOfDay=11&DayOfWeek=2&action=Lifecycle&TimeSinceLaunch=0&.a&.c&pe=lnk_o&pev2=ADBINTERNAL%3ALifecycle&pageName=adobe-demo%20(0.0.0.2)&aid=230EDCDE65A436D6-05BCD5A3D1105CA4&ce=UTF-8&t=00%2F00%2F0000%2000%3A00%3A00%200%20360&ts=1560792765&cp=foreground
```

### TrackAction

```
ndh=1&c.&a.&OSVersion=Android%205.0&DeviceName=Nexus%206&Resolution=610x412&RunMode=Application&PlatformVersion=wechat-6.6.3&AppId=adobe-demo%20(0.0.0.2)&action=Start&.a&example.&key=value&.example&.c&pe=lnk_o&pev2=AMACTION%3AStart&pageName=adobe-demo%20(0.0.0.2)&aid=2E85DEB17FFF8000-52245FFFDDC6DB5D&ce=UTF-8&t=00%2F00%2F0000%2000%3A00%3A00%200%20360&ts=1561063668&cp=foreground
```

### TrackState
```
ndh=1&c.&a.&OSVersion=Android%205.0&DeviceName=Nexus%206&Resolution=610x412&RunMode=Application&PlatformVersion=wechat-6.6.3&AppId=adobe-demo%20(0.0.0.2)&action=&TimeSinceLaunch=0&.a&.c&pageName=HomePage&aid=2E85DEB17FFF8000-52245FFFDDC6DB5D&ce=UTF-8&t=00%2F00%2F0000%2000%3A00%3A00%200%20360&ts=1561063668&cp=foreground
```

### 观看视频

[观看视频](https://video.tv.adobe.com/v/28355t1/?quality=9)

