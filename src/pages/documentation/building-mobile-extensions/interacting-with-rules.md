# Interacting with rules

Rules are defined in the Data Collection UI interface and can include data elements, events, conditions, and actions provided by extensions.

## Publishing rules support for tags

Your extension should publish the rules support that it provides to tag libraries. You can provide this support through the `extension.json` file in your extensions base directory.

### Publishing supported data elements

Data elements can be supported by publishing the shared state keys that you want to use in a rule. For more information, see the tags documentation on [data element types](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/web/data-element-types.html).

```json
  "dataElements": [
    {
      "displayName": "My Custom Value",
      "name": "customValue",
      "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "allOf": [{
          "$ref": "https://assets.adobedtm.com/activation/reactor/schemas/1.0/extension-definitions-mobile.json#/definitions/dataElement"
        }]
      },
    }
  ]
```

### Publishing supported conditions

Conditions can be supported by publishing the shared state keys or events that you want to use in a rule. For more information, see the tags documentation on [condition types](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/web/condition-types.html).

```json
    "events":[
    {
      "displayName": "My Custom Event",
      "name": "triggerEvent",
      "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "allOf": [{
          "$ref": "https://assets.adobedtm.com/activation/reactor/schemas/1.0/extension-definitions-mobile.json#/definitions/events"
        }]
      }
    }],
    "conditions":[
    {
      "displayName": "My Custom Condition",
      "name": "triggerCondition",
      "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "allOf": [{
          "$ref": "https://assets.adobedtm.com/activation/reactor/schemas/1.0/extension-definitions-mobile.json#/definitions/conditions"
        }]
      }
    }]
```

### Publishing supported actions

Conditions can be supported by publishing the events that you want to use in a rule. For more information, see the tags documentation on [action types](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/web/action-types.html).

```json
    "actions": [
    {
      "displayName": "My Custom Action",
      "name": "com.myCompany.eventType.doSomeWork",
      "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {},
        "allOf": [{
          "$ref": "https://assets.adobedtm.com/activation/reactor/schemas/1.0/extension-definitions-mobile.json#/definitions/consequence"
        }]
      },
    }]
```

## Supporting rules at runtime

You should provide support for the events, actions, and conditions that you published at runtime.

### Publishing a shared state `condition` at runtime

A shared state that was published by your extension can be used as a `condition` when configuring tag rules. To learn how you can publish a shared state, see the [updating the shared state document](./shared-states-and-events#updating-the-shared-state.md).

### Dispatching an event `condition` at runtime

An event that was dispatched by your extension can be used as a `condition` when configuring tag rules. To learn how you can dispatch an event, see the [dispatching events from your extension document](./dispatching-events.md).

### Handling an event `action` at runtime

For an event that your extension registered, a listener for can be used as an `action` when configuring tag rules. To learn how you can register a listener for your events, see the [listening for events document](./listening-for-events.md).

