#### English

<InlineAlert variant="info" slots="text"/>

At this time, Experience Cloud ID (ECID or MCID) **are not** supported. To learn more about Analytics Visitor ID, see the [Adobe Analytics implementation guide](https://experienceleague.adobe.com/docs/analytics/components/cda/overview.html?lang=en).

**Configuration**

The SDK allows for easy configuration of app and Adobe Analytics-related settings, and developers can manage the queuing of Analytics requests. Queuing requests can ensure HTTP request ordering and potentially minimize the quota collision that is enforced by WeChat. Debug logging with multiple log levels is also provided for a more transparent implementation.

**Data collection**

The SDK automatically collects out-of-the-box lifecycle metrics and sends it to Adobe Analytics for reporting. Developers can also implement custom action, event, and screen tracking.

**Identity**

The SDK generates an Adobe Analytics Visitor ID (aid) to identify program users.

**Licensing**

The SDK is available as read-only open source and is distributed with an Apache 2.0 license.