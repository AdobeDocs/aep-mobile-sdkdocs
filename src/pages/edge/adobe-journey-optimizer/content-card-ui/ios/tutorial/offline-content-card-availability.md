---
title: Offline Content Card Availability
description: This tutorial explains how to enable offline availability for Content Cards so they display on launch without a network connection.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Offline
- Persistence
- Cache
- Surface
- ContentCardUI
- Update Propositions
---

# Offline Content Card Availability

This tutorial explains how to enable offline availability for Content Cards, allowing them to display when your app launches without a network connection.

## Overview

When offline availability is enabled, Content Cards fetched from Adobe Journey Optimizer are persisted to the device. On the next app launch, the SDK loads them from disk before any network response arrives, so users see content immediately regardless of connectivity.

<InlineAlert variant="info" slots="text"/>

This feature is **opt-in** and must be enabled through the Adobe Journey Optimizer extension configuration in Adobe Experience Platform Data Collection (Tags). It requires **AEPMessaging** version **5.16.0** or later, as well as **AEPCore** and **AEPServices** version **5.11.0** or later.

## Pre-requisites

1. [Integrate and register the AEPMessaging extension](../../../index.md#implement-extension-in-mobile-app) in your app.
2. Ensure you are using **AEPMessaging** version **5.16.0** or later (which requires **AEPCore** and **AEPServices** **5.11.0** or later).

## Step 1: Enable offline availability in Tags

1. Sign in to [Adobe Experience Platform Data Collection](https://experience.adobe.com/#/data-collection) and open **Tags**.
2. Select your mobile property and open the **Adobe Journey Optimizer** extension configuration.
3. Enable the **Content Card Offline Availability** setting.
4. Save and publish your Tags configuration.

Once enabled, Content Cards returned by any successful `updatePropositionsForSurfaces` call are automatically written to a disk cache.

## Step 2: Fetch Content Cards as usual

No code changes are required to enable persistence. Continue calling `updatePropositionsForSurfaces` as you normally would. When the device is online and the call succeeds, the SDK automatically writes the returned cards to disk.

<CodeBlock slots="heading, code" repeat="1" />

### Swift

```swift
let homePageSurface = Surface(path: "homepage")
Messaging.updatePropositionsForSurfaces([homePageSurface])
```

## Step 3: Retrieve Content Cards — with or without a network call

This is where offline availability is leveraged. You can call `getContentCardsUI` **without calling `updatePropositionsForSurfaces` first** in the current session. If a prior session successfully fetched cards for the surface and the offline feature was enabled, the SDK loads those cards from the disk cache and returns them immediately — even with no network connection.

<CodeBlock slots="heading, code" repeat="1" />

### Swift

```swift
let homePageSurface = Surface(path: "homepage")

// Cards are served from the disk cache if a prior session fetched them successfully —
// no updatePropositionsForSurfaces call is needed in the current session
Messaging.getContentCardsUI(for: homePageSurface) { result in
    switch result {
    case .success(let contentCards):
        // display contentCards
    case .failure(let error):
        // handle error
    }
}
```

<InlineAlert variant="warning" slots="text"/>

`getContentCardsUI` only returns cards from the disk cache when **all** of the following conditions are met: the Content Card Offline Availability setting was enabled in Tags when the cards were originally fetched, a prior session had a successful `updatePropositionsForSurfaces` call for that surface, **and** the setting is still enabled in the current session. If the setting is disabled after cards have been persisted, the SDK clears the disk cache and filters out any disk-origin cards — so turning the feature off removes offline availability immediately, even for previously cached content. If none of the conditions are met, the result is empty until `updatePropositionsForSurfaces` succeeds in the current session.

## Step 4: Clear the cache when needed

Use `clearCachedPropositions` to remove all persisted Content Cards and the in-memory cache. This is useful, for example, when a user logs out.

<CodeBlock slots="heading, code" repeat="1" />

### Swift

```swift
Messaging.clearCachedPropositions()
```

<InlineAlert variant="info" slots="text"/>

Resetting identities via `MobileCore.resetIdentities()` also automatically clears persisted Content Cards, ensuring cached content is never carried across user identities.

## How it works

| Scenario | Behavior |
| :--- | :--- |
| App launches online, fetch succeeds | Cards returned from network; written to disk cache |
| App launches offline | Cards loaded from disk cache; shown while app waits for network |
| Fetch fails (network error) | Disk cache is preserved unchanged |
| Fetch succeeds after a failed attempt | Disk cache is updated with the new cards |
| `clearCachedPropositions` called | Memory and disk cache are both cleared |
| `MobileCore.resetIdentities()` called | Persisted cards are automatically cleared |

## Tracking and analytics

The SDK sends a `decisioning.propositionDisplay` event to Adobe Experience Platform when a Content Card is displayed. Each card item in that event includes a `servedFromPersistentCache` flag under `items[].data.characteristics`:

| Value | Meaning |
| :--- | :--- |
| `false` | Card was served from a live network response in this session |
| `true` | Card was loaded from the disk cache (for example, at cold launch before a network response arrived) |

The following example shows the relevant portion of a display event as captured in Assurance:

```json
{
  "xdm": {
    "eventType": "decisioning.propositionDisplay",
    "_experience": {
      "decisioning": {
        "propositionEventType": { "display": 1 },
        "propositions": [
          {
            "id": "c1984e87-6c5e-4441-8691-f148af4975d8",
            "scope": "mobileapp://com.example.app/homepage",
            "items": [
              {
                "id": "cd20a906-f444-45fe-bdd8-868acc8a00b0",
                "data": {
                  "characteristics": {
                    "servedFromPersistentCache": true
                  }
                }
              }
            ]
          }
        ]
      }
    }
  }
}
```

## What is and is not persisted

| Content type | Persisted for offline availability |
| :--- | :--- |
| Content Cards | Yes |
| Inbox | No |
| Code-Based Experiences | No |
