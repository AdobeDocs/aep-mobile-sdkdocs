---
title: Mobile Core Rules Engine consequence details
description: A guide that explains the rule consequences/actions that can be executed as part of the Adobe Experience Platform Mobile SDK.
keywords:
- Adobe Analytics
- Adobe Campaign Standard
- Consequence details
- Mobile Core
- Profile
- Rules Engine
- Signal
---

# Rules Engine consequence details

The Adobe Experience Platform Mobile SDK supports multiple types of rule consequences (also known as actions) that can be executed when the trigger event and the conditions are met. This section contains a detailed description of each rule consequence.

## Analytics consequence

This rule consequence is currently handled by the [Analytics](../../../../solution/adobe-analytics/index.md) extension.

| Friendly name | Key | Type | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| Action | `action` | String | No | If provided, this value will be used as the action parameter in a `trackAction` call. |
| State/Page name | `state` | String | No | If provided, this value will be used as the state parameter in a `trackState` call. |
| Context data | `contextdata` | Object | No | Additional context data to be attached to the resulting Analytics request. The object should only have one level of depth that contains key-value pairs. |

## In-App message consequence

This rule consequence is currently handled by the [Campaign](../../../../solution/adobe-campaign-standard/index.md) extension.

| Friendly name | Key | Type | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| In-App template | `template` | String | Yes | Determines the display method of the In-App message. Currently supported types are `fullscreen`, `alert` and `local`. |
| Fullscreen message content | `html` | String | Yes, for fullscreen message type | Filename of the HTML content to load for a fullscreen In-App message. This file will be sourced from the same zip file the `assets/` directory from which the consequence was retrieved. The base path (`assets/`) should not be included in this value. |
| Remote assets | `remoteAssets` | Array | No, only used by the fullscreen message type | Array of strings of remote assets that should be cached by the client. These should be full-URL strings with HTTPS transport. |
| Message title | `title` | String | Yes, for the alert message type | String that defines the title of the alert message. |
| Message content | `content` | String | Yes, for the alert and the local type message types | String that defines the content of the alert or local notification. |
| Confirm button text | `confirm` | String | No, only used by alert messages | String that defines the text on the **Confirm** button in the OS-operated dialog. |
| Cancel button text | `cancel` | String | Yes, for alert message type | String that defines the text for the **Cancel** button in the OS-operated dialog. |
| Confirmation URL | `url` | String | No, only used by alert messages with the **Confirm** key | String that defines the URL to trigger when the **Confirm** button in an alert dialog is triggered. Typically used in deep link scenarios but can also be used to trigger external sites and apps. |
| Wait time | `wait` | Number | No, only used by the local notification message type | Total number of seconds to delay the triggering of a local notification. The default value is 0 (immediate). If a `date` is also provided, the wait field is ignored. |
| Fire date | `date` | Number | No, only used by the local notification message type | Represented as the number of seconds since epoch, this field indicates a specific time to deliver this local notification. If provided, this field has precedence over the **wait** field. |
| Deep link | `adb_deeplink` | String | No, only used by the local notification message type | Deep link URL to attach to the payload of the notification, which allows users who click-through the notification to be redirected to the provided URL. |
| Custom user data | `userData` | Object | No, only used by the local notification message type | A custom dictionary of pairs that will be attached to the payload of the notification. |
| Category | `category` | String | No, only used by the local notification message type | A category ID for this notification. |
| Sound | `sound` | String | No, only used by the local notification message type | The name of a custom sound to use when this notification is delivered. |

## Postback consequence

This rule is currently handled by the [Signal](../signal/index.md) extension.

| Friendly name | Key | Type | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| Description URL | `templateurl` | String | Yes | Destination URL to which the postback signal will be sent. |
| Request body | `templatebody` | String | No | A string that contains the POST body that will be sent. If this value exists, the postback is sent as a POST instead of as a GET request. You must ensure that the string is appropriately json escaped. |
| Content type | `contenttype` | String | No | Used to set the Content-Type header for POST requests. If the header is not supplied, and a request body is found, the default is `application/x-www-form-urlencoded`. |
| Connection timeout | `timeout` | Number | No | The timeout value for the network connection in seconds. The default value is 2 seconds. |

## Sync PII consequence

This rule is currently handled by the [Signal](../signal/index.md) extension.

| Friendly name | Key | Type | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| Description URL | `templateurl` | String | Yes | Destination URL to which the PII signal will be sent. Must be HTTPS, and non-HTTPS URLs will be ignored. |
| Request body | `templatebody` | String | No | A base64-encoded blob that contains the POST body to be sent. If this value exists, the PII signal will be sent as a POST instead of as a GET request. |
| Content type | `contenttype` | String | No | Used to set the Content-Type header for POST requests. If the header is not supplied, but a request body is found, the default is `application/x-www-form-urlencoded`. |
| Connection timeout | `timeout` | Number | No | The timeout value for the network connection in seconds. The default value is 2 seconds. |

## Open URL consequence

This rule is currently handled by the [Signal](../signal/index.md) extension.

| Friendly name | Key | Type | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| URL | `url` | String | Yes | URL that will be opened by the target platform. This might be a URL for a website or a deep link to an app. |

## Profile consequence

This rule is currently handled by the [Profile](../../profile/index.md) extension.

| Friendly name | Key | Type | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| Operation to perform | `operation` | String | Yes | Determines the type of operation to be performed on the profile. The following operations are supported: \<ul\>\<li\> `write`: Saves the `value` in the given `key` in the shared state and the local profile. If an associated value for the key already exists, the existing value will be overwritten.\</li\>\<li\> `delete`: Removes `key` from the profile's shared state and the local profile.\</li\>\</ul\> |
| Device-side profile key | key | String | Yes | Key in the device-side profile on which the requested operation will be performed. **Note**: This key will be accessible later through the shared state from the Profile extension. For more details, please read the [user profile shared state](../../profile/index.md#shared-state). |
| Device-side profile value | value | String or Number | Yes, for write operations | New value to write to the key. |

## Attach data consequence

This rule is currently handled by the [Mobile Core](../index.md) extension.

| Friendly name | Key | Type | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| Event data | `eventdata` | object | Yes | Dictionary of key-value pairs to add to the triggering event's EventData. If a key appears in both the original event data and the payload specified in the consequence, the value from the original event is retained. For more information, see the [attach data tutorial](../../../../resources/user-guides/attach-data.md). |

## Modify data consequence

This rule is currently handled by the [Mobile Core](../index.md) extension.

| Friendly name | Key | Type | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| Event data | `eventdata` | object | Yes | Dictionary of key-value pairs to add to or replace in the triggering event's EventData. If a key appears in both the original event data and the payload specified in the consequence, the value from the consequence overrides the original. If a key is provided in the detail object with a value of null, that key will be removed from the triggering event. For more information, see the [modify data tutorial](../../../../resources/user-guides/modify-data.md). |

## Forward operational data consequence

The `forward-operational-data` consequence is processed by the [Mobile Core](../index.md) Rules Engine, starting with Core **3.11.0 on Android** and **5.13.0 on iOS**. In the Data Collection UI, this action is available under the **Identity** extension as **Forward Operational Data**.

When a rule matches, this consequence copies values from explicitly enabled paths in the triggering event's data into a new event. The new event is named **Forward operational data**, uses the type and source specified in the consequence's `detail`, and is chained to the triggering event as its parent. It does not modify the triggering event.

Core performs filtering and event dispatch only. It does not check consent, deduplicate values, validate device tokens, add application or identity information, or make a network request. The receiving extension handles those responsibilities. For the Identity and Edge Network integration, see [Sync operational data independently of collect consent](../../../../edge/identity-for-edge-network/tutorials/operational-data-consent-independent.md).

### Consequence detail fields

Set the consequence object's `type` to `forward-operational-data`. Its `detail` object supports these fields:

| Friendly name | Key | Type | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| Destination event type | `type` | String | Yes | Event type used for the dispatched event. This is distinct from the consequence object's type. |
| Destination event source | `source` | String | Yes | Event source used for the dispatched event. |
| Attribute selections | `attributes` | Array of objects | No | Paths to consider for forwarding. A missing, empty, or incorrectly typed value selects no attributes. |
| Attribute path | `attributes[].path` | Array of strings | Yes, for each selection | Non-empty sequence of exact dictionary keys to traverse in the triggering event data. |
| Attribute enabled | `attributes[].enabled` | Boolean | Yes, to forward the selection | Only Boolean `true` enables the path. A missing, false, or incorrectly typed value does not enable it. |

### Path selection and value handling

* Paths traverse dictionaries only. Use `["tokens", "pushNotification"]` for a nested value, not the dotted string `"tokens.pushNotification"`. A dot within a path segment is a literal part of that key. Array indexes and wildcard matching are not supported.
* Values are copied to the same path in the new event, preserving their types. Selecting an array or object copies the entire value; the consequence does not filter its individual elements or properties.
* Missing paths, paths through non-dictionary values, and paths resolving to `null` are omitted. Empty strings, empty arrays, empty objects, `false`, and zero are values and are preserved.
* Malformed path entries are skipped with a warning. Missing, empty, or incorrectly typed `attributes` also produces a warning.
* If no enabled path resolves to a value, Core still dispatches a chained event with an empty data object, provided the destination type and source are valid. An empty Core event does not imply that the receiving extension will send a network request.
* If the destination type or source is missing, Core logs an error and does not dispatch the consequence event. Forwarded events are subject to the Rules Engine's chained-dispatch limit.

Each consequence selects its own paths independently. Disabling a path in one consequence does not prevent another matching consequence from forwarding it.

### Example

The following consequence allows timezone and Live Activity push-to-start tokens, but disables the push notification token:

```json
{
  "id": "forward-operational-data-example",
  "type": "forward-operational-data",
  "detail": {
    "type": "com.adobe.eventType.edgeIdentity",
    "source": "com.adobe.eventSource.responseOperationalData",
    "attributes": [
      { "path": ["timezone"], "enabled": true },
      { "path": ["tokens", "pushNotification"], "enabled": false },
      { "path": ["tokens", "liveActivityStart"], "enabled": true }
    ]
  }
}
```

Given this triggering event data:

```json
{
  "timezone": "America/Los_Angeles",
  "tokens": {
    "pushNotification": "push-token",
    "liveActivityStart": [
      { "attributeType": "GameScoreLiveActivityAttributes", "value": "start-token" }
    ]
  },
  "unselectedField": "not-forwarded"
}
```

The dispatched event contains this data. The Live Activity token array remains an array rather than being converted to a string:

```json
{
  "timezone": "America/Los_Angeles",
  "tokens": {
    "liveActivityStart": [
      { "attributeType": "GameScoreLiveActivityAttributes", "value": "start-token" }
    ]
  }
}
```
