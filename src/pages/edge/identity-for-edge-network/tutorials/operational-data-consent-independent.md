---
title: Sync operational data independently of collect consent
description: Learn how to configure and send allow-listed mobile device operational data, such as timezone and push tokens, independently of collect consent.
keywords:
- Edge Network
- Identity for Edge Network
- Operational data
- Collect consent
- Push notifications
- Tutorial
---

# Sync operational data independently of collect consent

This tutorial explains how to send selected operational data from a mobile app to Adobe Experience Platform Edge Network while collect consent is pending or set to `no`.

This capability is limited to operational data that is explicitly allowed by a Data Collection rule. It does not change the user's consent preference, enable consent-independent Experience Events, or provide a general mechanism for sending arbitrary data without consent. Use it only for approved operational-data use cases.

## How it works

```text
Mobile app
  └─ Identity API call with operational data
       ↓
Data Collection rule
  ├─ Matches the operational-data event
  └─ Allows only the selected attributes
       ↓
Edge Network
  └─ Sends allowed values to the mobile device attributes endpoint
```

If no matching rule is published, the API call does not send operational data to Edge Network. The rule controls which values are forwarded; the app should provide only the values needed for its use case.

## Prerequisites

Before you begin:

* Create a mobile property in Data Collection.
* Install the **Edge Network** and **Identity for Edge Network** extensions in the mobile property, then publish the updated configuration.
* Add the extensions as dependencies and register them with Mobile Core.
* Create and publish the Data Collection rule described below.

### Minimum SDK versions

Use the following minimum versions for the extensions included in your app:

| Extension | Android | iOS | Required for |
| --- | --- | --- | --- |
| Core | 3.11.0 | 5.13.0 | Operational-data synchronization |
| Edge Network | 3.2.0 | 5.3.0 | Operational-data synchronization |
| Identity for Edge Network | 3.2.0 | 5.2.0 | Operational-data synchronization |
| Messaging | 3.14.0 | 5.18.0 | Messaging integration with confirmed operational-data tokens |
| Messaging Live Activity | Not applicable | 5.7.0 | Automatic Live Activity token synchronization on iOS |

Messaging is optional for direct calls to `Identity.updateOperationalData`. Include the Messaging versions above when using its token synchronization integration. For automatic Live Activity token synchronization, include both Messaging and Messaging Live Activity on iOS. The Live Activity token producer is iOS-specific.

For dependency and SDK initialization instructions, see [Identity for Edge Network](../index.md).

## Configure operational-data sync optimization

In your mobile property's **Extensions** tab, open the **Identity for Edge Network** extension configuration. Use the operational profile data sync optimization setting to control whether Identity skips unchanged operational values. Save the extension configuration and include the change in the library you publish.

This setting maps to the Boolean configuration key `edgeidentity.optimizeOperationalProfileDataSync`, which defaults to `true`:

| Setting | Behavior |
| --- | --- |
| Enabled (`true`, default) | Skip unchanged timezone and push-token strings. On iOS, also skip unchanged Live Activity push-to-start token lists. |
| Disabled (`false`) | Disable Identity's operational-data deduplication and forward all rule-approved values on each update, even if they are unchanged. |

When optimization is enabled, Identity compares values with its previously confirmed operational-data values at every collect-consent state. When collect consent is `yes`, or the Consent extension is not registered, it also compares timezone with the value set through the profile attributes API and tokens with Messaging's shared state. With collect consent `no` or pending, Messaging's cached token alone does not suppress an operational-data sync; Identity's own confirmed value can still suppress it.

iOS Live Activity update tokens are not deduplicated by this setting. Disabling optimization does not bypass rule allowlisting, change consent, or cause an automatic sync by itself. An API call or a Messaging operational-data event must still provide the values.

## Configure the Data Collection rule

You can keep separate rules for timezone, push tokens, and Live Activity tokens, as in the following examples. Separate rules make each data selection easier to review; a single rule with the required selections is also supported.

### Create a timezone rule

1. In your mobile property, select **Rules**, then **Add Rule**.
2. Enter a name such as **Rule 1 - Timezone**.
3. Under **Events**, select **Add**. Select the **Edge Identity** extension and the **Sync Operational Data** event, then select **Keep Changes**. No additional event configuration is required.
4. Under **Actions**, select **Add**. Select the **Identity** extension and the **Forward Operational Data** action.
5. Select **Timezone** only. Leave push-token and Live Activity token selections unselected for this rule.
6. Select **Keep Changes**, then save the rule.

### Create a push-token rule

1. Select **Add Rule** and enter a name such as **Rule 2 - Push Token**.
2. Add the same **Edge Identity - Sync Operational Data** event used by the timezone rule.
3. Add an **Identity - Forward Operational Data** action.
4. Select **Push token** only, then select **Keep Changes** and save the rule.

### Create a Live Activity token rule for iOS

1. Select **Add Rule** and enter a name such as **Rule 3 - LiveActivity Token**.
2. Add the same **Edge Identity - Sync Operational Data** event.
3. Add an **Identity - Forward Operational Data** action.
4. Select the Live Activity push-to-start and/or update tokens required by your app. Leave timezone and push-token selections unselected unless you intentionally want this rule to forward those values too.
5. Select **Keep Changes**, then save the rule.

The action's selections correspond to these operational-data paths:

| Data Collection action selection | Operational-data path |
| --- | --- |
| Timezone | `timezone` |
| Push token | `tokens.pushNotification` |
| Live Activity push-to-start tokens | `tokens.liveActivityStart` |
| Live Activity update tokens | `tokens.liveActivityUpdate` |

### Publish the configuration and rules

1. Open **Publishing Flow** and create or update a library.
2. Include the Identity extension configuration change and all the operational-data rules you want to use.
3. Build and publish the library for the environment used by your app.
4. Launch the app with that environment's configuration and verify that it downloads the updated configuration and rules before testing a sync.

Each matching rule forwards only the values its action allows. A field unselected in one rule is not a global denial: another matching rule can still allow it. Review all matching rules when deciding which data may leave the device. No rule conditions are required for these examples; add conditions only if you need to restrict when a rule matches.

Rules do not obtain a timezone or token by themselves. The app's API call or Messaging's Live Activity integration supplies the values. If no rule matches, or the matching rules allow none of the supplied fields, no device attributes request is sent.

## Call the API

Pass the fields that your rule is configured to allow. For example, the following calls provide a timezone and push notification token.

### Android Kotlin

```kotlin
import com.adobe.marketing.mobile.edge.identity.Identity
import java.util.TimeZone

// Obtain this value from Firebase Cloud Messaging.
val pushToken = "FCM_TOKEN"

val operationalData = mapOf(
    "timezone" to TimeZone.getDefault().id,
    "tokens" to mapOf("pushNotification" to pushToken)
)

Identity.updateOperationalData(operationalData)
```

### Android Java

```java
import com.adobe.marketing.mobile.edge.identity.Identity;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

// Obtain this value from Firebase Cloud Messaging.
String pushToken = "FCM_TOKEN";

Map<String, Object> tokens = new HashMap<>();
tokens.put("pushNotification", pushToken);

Map<String, Object> operationalData = new HashMap<>();
operationalData.put("timezone", TimeZone.getDefault().getID());
operationalData.put("tokens", tokens);

Identity.updateOperationalData(operationalData);
```

### iOS Swift

```swift
import AEPEdgeIdentity

let operationalData: [String: Any] = [
    "timezone": TimeZone.current.identifier,
    "tokens": [
        "pushNotification": "APNS_TOKEN",
        "liveActivityStart": [
            ["attributeType": "GameScoreLiveActivityAttributes", "value": "PUSH_TO_START_TOKEN"]
        ],
        "liveActivityUpdate": [
            ["liveActivityID": "live-activity-id", "token": "UPDATE_TOKEN"]
        ]
    ]
]

Identity.updateOperationalData(operationalData)
```

### iOS Objective-C

```objectivec
@import AEPEdgeIdentity;

NSDictionary *operationalData = @{
    @"timezone": [NSTimeZone localTimeZone].name,
    @"tokens": @{
        @"pushNotification": @"APNS_TOKEN",
        @"liveActivityStart": @[
            @{@"attributeType": @"GameScoreLiveActivityAttributes", @"value": @"PUSH_TO_START_TOKEN"}
        ],
        @"liveActivityUpdate": @[
            @{@"liveActivityID": @"live-activity-id", @"token": @"UPDATE_TOKEN"}
        ]
    }
};

[AEPMobileEdgeIdentity updateOperationalData:operationalData];
```

The iOS `liveActivityStart` entries contain an ActivityKit attribute type and push-to-start token. The `liveActivityUpdate` entries contain a Live Activity ID and update token. Replace the example values with values supplied by your app's Live Activity and push-notification implementations. Omit fields that are not available.

## Automatically sync Live Activity tokens on iOS

When the app uses the iOS Messaging and Messaging Live Activity extensions, Messaging produces operational-data events for Live Activity tokens:

* Push-to-start tokens are sent as entries in `tokens.liveActivityStart`, each with `attributeType` and `value`.
* Update tokens are sent as entries in `tokens.liveActivityUpdate`, each with `liveActivityID` and `token`.

With collect consent set to `no` or pending, Messaging emits these values on the operational-data path, and the published rule decides whether they are forwarded to Edge Network. This is additive: the normal consent-gated token flow remains in place. When collect consent is `yes`, Messaging does not emit the operational-data event for these tokens; the existing consent-gated flow handles them instead. If the Consent extension is not registered, Edge defaults collect consent to `yes`, so the operational-data path is not used for this automatic integration.

The app does not need to call `Identity.updateOperationalData` to forward tokens already emitted by Messaging. Configure and publish a matching rule that allows the relevant Live Activity token paths. Without that rule, the event does not result in a device attributes request.

Live Activity tokens are an iOS capability. Android Edge Identity accepts JSON-compatible values through `updateOperationalData`, but this SDK does not generate or manage Live Activity tokens; do not use the iOS-only token producer guidance as an Android implementation.

## Consent, deduplication, and troubleshooting

* The API does not update or override the user's collect-consent setting. Other consent-controlled data flows remain subject to their existing behavior.
* Only values returned by a matching **Forward Operational Data** rule are sent. If the rule is missing, unpublished, or does not allow a field, that field is not forwarded.
* Identity can skip unchanged timezone, push-token, and iOS Live Activity push-to-start-token values that it has already confirmed. iOS Live Activity update-token values are not deduplicated. A skipped duplicate does not necessarily indicate a rule or network failure.
* Pass a valid, non-empty push token. The SDK can dispatch an empty token, but the service may reject it as invalid.
* If a request fails, do not treat the value as successfully synchronized. Check the Assurance network response and the SDK logs, then retry with a valid value after addressing the failure.
* Treat device tokens and other operational data according to your organization's privacy requirements. This feature is intentionally limited to operational data selected by your Data Collection rule; do not use it to send analytics, personalization, or other data outside the approved use case.

For API details, see [Operational data synchronization](../api-reference.md#operational-data-synchronization).
