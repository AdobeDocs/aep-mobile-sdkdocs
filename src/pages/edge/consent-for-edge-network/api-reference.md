---
title: Consent for Edge Network API reference
description: An API reference for the Consent for Edge Network mobile extension.
keywords:
- API reference
- Consent for Edge Network
- Edge Network
---

import Alerts from '/src/pages/resources/alerts.md'
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

<Alerts query="platform=android-register-extension&componentClass=InlineNestedAlert"/>

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

<InlineAlert variant="info" slots="text1, text2, text3, text4, text5"/>

When `Consent.update` API is called, the Consent extension uses Adobe Standard 2.0 to communicate with the Edge Network.  Additionally, the property `metadata` is set to the time at which the API is called.

The following example shows when `Consent.update` is called to set collect consent to `y`:

```swift
// Example in iOS (Swift),  updating user's collect consent to 'yes'
let collectConsent = ["collect": ["val": "y"]]
let currentConsents = ["consents": collectConsent]
Consent.update(with: currentConsents)
```

Bellow you can see the snippet of the request payload sent to the Edge Network:

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

For additional information about the management of consent preferences, please refer to the [Privacy and GDPR documentation](../../resources/privacy-and-gdpr.md#using-experience-platform-sdks-for-edge-network).
