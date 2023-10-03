---
title: Consent for Edge Network API reference
description: An API reference for the Consent for Edge Network mobile extension.
keywords:
- API reference
- Consent for Edge Network
- Edge Network
---

import Tabs from './tabs/api-reference.md'

# API Reference

## extensionVersion

The extensionVersion() API returns the version of the client-side Consent extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

## getConsents

Retrieves the current consent preferences stored in the Consent extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-consents"/>

iOS

<Tabs query="platform=ios&api=get-consents"/>

## registerExtension

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

## updateConsents

Merges the existing consents with the given consents. Duplicate keys will take the value of those passed in the API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-consents"/>

iOS

<Tabs query="platform=ios&api=update-consents"/>

<InlineAlert variant="info" slots="text"/>

The updateConsents API automatically includes the following properties in its request to Edge Network: `standard` with the value `Adobe` and `version` with the value `2.0`. Additionally, the property `metadata` is set to the time at which the API is called.

In the following, you can see an example in a request that set collect consent to `y`:
```json
    "consent": [
        {
        "standard": "Adobe",
        "version": "2.0",
        "value": {
            "metadata": {
            "time": "xxxx-xx-xxxxx:xx:xx.xxxx"
            },
            "collect": {
            "val": "y"
            }
          }
        }
     ]
```
For additional information about the management of consent preferences, please refer to the [Privacy and GDPR documentation](../resources/privacy-and-gdpr.md#using-experience-platform-sdks-for-edge-network).
