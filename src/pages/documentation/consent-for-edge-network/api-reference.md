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

The Consent extension uses Adobe Standard 2.0 when communicating with the Edge Network, when the updateConsents API is called.  Additionally, the property `metadata` is set to the time at which the API is called.

Here is an example where updateConsents is called to set collect consent to y and bellow you can see the snippet of the request payload sent to the Edge Network.

**Set and update Consent**

```swift
// Example in iOS (Swift),  updating users collect consent to 'yes'
let collectConsent = ["collect": ["val": "y"]]
let currentConsents = ["consents": collectConsent]
Consent.update(with: currentConsents)
```

**Request payload sent to the Edge Network**

```json
    "consent": [
        {
        "standard": "Adobe",
        "version": "2.0",
        "value": {
            "metadata": {
            "time" : "2023-10-03T17:23:04.443Z"
            },
            "collect": {
            "val": "y"
            }
          }
        }
     ]
```

For additional information about the management of consent preferences, please refer to the [Privacy and GDPR documentation](../resources/privacy-and-gdpr.md#using-experience-platform-sdks-for-edge-network).
