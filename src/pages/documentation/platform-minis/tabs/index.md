<Variant language="english" repeat="10"/>

#### English

At this time, Experience Cloud ID (ECID or MCID) **are not** supported. To learn more about Analytics Visitor ID, see the [Adobe Analytics implementation guide](https://experienceleague.adobe.com/docs/analytics/components/cda/overview.html?lang=en).

**Configuration**

The SDK allows for easy configuration of app and Adobe Analytics-related settings, and developers can manage the queuing of Analytics requests. Queuing requests can ensure HTTP request ordering and potentially minimize the quota collision that is enforced by WeChat. Debug logging with multiple log levels is also provided for a more transparent implementation.

**Data collection**

The SDK automatically collects out-of-the-box lifecycle metrics and sends it to Adobe Analytics for reporting. Developers can also implement custom action, event, and screen tracking.

**Identity**

The SDK generates an Adobe Analytics Visitor ID (aid) to identify program users.

**Licensing**

The SDK is available as read-only open source and is distributed with an Apache 2.0 license.

<Variant language="chinese" repeat="10"/>

#### 中文 – 简体

**配置**

- Adobe Analytics 以及小程序基本信息相关配置
- Http 请求队列，避免小程序Http并发请求限制
- 调试日志

**数据统计**

- 小程序生命周期数据的收集，包括安装、启动等事件，以及使用时长等信息
- 自定义的页面、事件信息的收集

**用户识别**

- 使用Analytics Visitor ID标识用户
- 从服务器端获取或者小程序端自动生成

有关Analytics Visitor ID的信息，请参阅 [Adobe Analytics implementation guide](https://experienceleague.adobe.com/docs/analytics/components/cda/overview.html?lang=en)

**文档与授权**

- 提供英文的帮助文档
- SDK代码采用Apache 2.0开源协议