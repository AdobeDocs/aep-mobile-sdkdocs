---
title: Integrating AEP Media to Vega OS based apps
description: A step-by-step tutorial for integrating the Adobe Streaming Media for Edge Network using the AEP Vega SDK on
  Amazon Fire TV devices.
keywords:
- Tutorial
- AEP Vega SDK
- Edge Network
- Media for Edge Network
- OTT
- Kepler
---

# AEP Vega SDK integration tutorial

This document outlines the integration of Adobe Streaming Media for Edge Network on Vega OS-based Amazon Fire TV devices using the AEP Vega SDK. The AEP Vega SDK provides TypeScript packages (`@adobe/vega-aepcore` and `@adobe/vega-aepmedia`) for sending Experience events and tracking media playback through the Adobe Experience Platform Edge Network.

## Prerequisites

Before starting, ensure the following:

1. Complete the [Adobe Streaming Media for Edge Network setup](/edge/media-for-edge-network#before-starting) including report suite definition, schema setup, dataset creation, and datastream configuration.
2. [Configure the Edge extension](../edge-network/index.md#configure-the-edge-network-extension-in-data-collection-ui) and [Edge Identity extension](../identity-for-edge-network/index.md#configure-the-identity-extension-in-the-data-collection-ui) in the Data Collection UI.
3. [Configure Media for Edge Network extension in Data Collection Tags](/edge/media-for-edge-network#configure-media-for-edge-network-extension-in-the-data-collection-tags).
4. Have a working Vega React Native application where you will integrate the SDK.

## Install the AEP Vega SDK packages

The AEP Vega SDK is distributed as npm packages. Install the required core and media packages:

```bash
npm install @adobe/vega-aepcore @adobe/vega-aepmedia
```

* [**@adobe/vega-aepcore**](https://www.npmjs.com/package/@adobe/vega-aepcore) provides the foundational APIs for configuration, identity, consent, and sending Experience events to the Edge Network.
* [**@adobe/vega-aepmedia**](https://www.npmjs.com/package/@adobe/vega-aepmedia) provides media-specific tracking APIs (session creation and media event tracking) built on top of the core package.

## Initialize the SDK

Initialize the AEP Vega SDK using `AEPSDK.initialize()` with your Edge datastream ID and the Media extension registered.

<CodeBlock slots="heading, code" repeat="1" languages="TypeScript" />

### Example

```typescript
import { AEPSDK, LogLevel } from '@adobe/vega-aepcore';
import { Media } from '@adobe/vega-aepmedia';

// Initialize the SDK with configuration and media extension
AEPSDK.initialize({
    config: {
        "edge.configId": "<YOUR_DATASTREAM_ID>"
    },
    logLevel: LogLevel.DEBUG,
    extensions: [Media.EXTENSION]
});
```

### Configuration keys

| Key | Required | Description | Data Type |
| :--- | :--- | :--- | :--- |
| `edge.configId` | Yes | The datastream ID configured in the Adobe Experience Platform Data Collection UI. | String |
| `edge.domain` | No | A custom first-party domain mapped to the Adobe Edge Network domain. | String |
| `consent.default` | No | Default consent preferences. An object with `consents.collect.val` set to `y` (yes), `n` (no), or `p` (pending). | Object |

<InlineAlert variant="info" slots="text"/>

The `edge.configId` (datastream ID) must be provided in the `config` object during `AEPSDK.initialize()` or set via `AEPSDK.updateConfiguration()` before calling any other SDK APIs. Without it, the SDK cannot send events to the Edge Network.

## Update configuration

Use `AEPSDK.updateConfiguration()` to update SDK configuration after initialization.

<CodeBlock slots="heading, code" repeat="1" languages="TypeScript" />

### Example

```typescript
AEPSDK.updateConfiguration({
    "edge.domain": "your-company.data.adobedc.net"
});
```

## Set log level

Use the `AEPSDK.setLogLevel()` API with the `LogLevel` enum to control the verbosity of SDK logs during development and debugging.

<CodeBlock slots="heading, code" repeat="1" languages="TypeScript" />

### Example

```typescript
import { AEPSDK, LogLevel } from '@adobe/vega-aepcore';

// Set log level to VERBOSE for development
AEPSDK.setLogLevel(LogLevel.VERBOSE);

// Set log level to ERROR for production
// AEPSDK.setLogLevel(LogLevel.ERROR);
```

### Supported log levels

| Level | Enum value | Description |
| :--- | :--- | :--- |
| ERROR | `LogLevel.ERROR` (0) | Logs error messages only. |
| WARNING | `LogLevel.WARNING` (1) | Logs warning and error messages. |
| DEBUG | `LogLevel.DEBUG` (2) | Logs debug, info, warning, and error messages. |
| VERBOSE | `LogLevel.VERBOSE` (3) | Logs all messages including detailed internal operations. |

## Retrieve the Experience Cloud ID

The SDK automatically generates and manages the Experience Cloud ID (ECID) for device identification. Use `AEPSDK.getExperienceCloudId()` to retrieve the current ECID. This API returns a `Promise` that resolves to the ECID string, or `null` if not yet available.

<CodeBlock slots="heading, code" repeat="1" languages="TypeScript" />

### Example

```typescript
// Using async/await
const ecid = await AEPSDK.getExperienceCloudId();
if (ecid) {
    console.log("Experience Cloud ID: " + ecid);
}

// Using Promise
AEPSDK.getExperienceCloudId().then((ecid) => {
    if (ecid) {
        console.log("Experience Cloud ID: " + ecid);
    }
});
```

## Set consent preferences

Use the `AEPSDK.setConsent()` API to send user consent preferences to the Edge Network following the Adobe 2.0 consent standard.

<CodeBlock slots="heading, code" repeat="1" languages="TypeScript" />

### Example

```typescript
AEPSDK.setConsent({
    consent: [{
        standard: "Adobe",
        version: "2.0",
        value: {
            collect: { val: "y" },
            metadata: { time: new Date().toISOString() }
        }
    }]
});
```

## Send Experience events

Use the `AEPSDK.sendEvent()` API to send custom Experience events (non-media) to the Edge Network. Events are structured using the XDM schema.

For cases where you need the Edge Network response, use `AEPSDK.sendEventWithResponse()` which returns a `Promise`.

<CodeBlock slots="heading, code" repeat="2" languages="TypeScript, TypeScript" />

### sendEvent

```typescript
AEPSDK.sendEvent({
    xdm: {
        eventType: "page.view",
        someXdmKey: "someXdmValue"
    },
    data: {
        customKey: "customValue"
    }
});
```

### sendEventWithResponse

```typescript
try {
    const response = await AEPSDK.sendEventWithResponse({
        xdm: {
            eventType: "page.view",
            someXdmKey: "someXdmValue"
        },
        data: {
            customKey: "customValue"
        }
    });
    console.log("Response: " + JSON.stringify(response));
} catch (error) {
    console.error("SendEvent Error: " + error);
}
```

## Track media playback

### Create a media session

Before tracking media playback events, create a media session using `Media.createMediaSession()`. This establishes the tracking session on the Edge Network by sending a `media.sessionStart` event with the required session details.

<InlineAlert variant="warning" slots="text"/>

Only one media session can be active at a time. You must end the current session (using `media.sessionComplete` or `media.sessionEnd`) before creating a new one.

<CodeBlock slots="heading, code" repeat="1" languages="TypeScript" />

### Example

```typescript
import { Media } from '@adobe/vega-aepmedia';

Media.createMediaSession({
    xdm: {
        eventType: "media.sessionStart",
        mediaCollection: {
            playhead: 0,
            sessionDetails: {
                streamType: "video",
                friendlyName: "Episode 1 - Pilot",
                name: "episode-1",
                length: 3600,
                contentType: "vod",
                channel: "My App Channel",
                playerName: "Custom OTT Player"
            }
        }
    }
});
```

### Media session details fields

| Field | Required | Description | Data Type |
| :--- | :--- | :--- | :--- |
| `streamType` | Yes | The type of stream (for example, `video` or `audio`). | String |
| `friendlyName` | Yes | A human-readable name for the media content. | String |
| `name` | Yes | A unique content ID for the media. | String |
| `length` | Yes | The length of the media content in seconds. | Number |
| `contentType` | Yes | The content type (for example, `vod` or `live`). | String |
| `channel` | Yes | The distribution channel name. | String |
| `playerName` | Yes | The name of the media player. | String |
| `hasResume` | No | Whether the session is resuming a previous session. | Boolean |

### Send media events

Once a media session is created, use `Media.sendMediaEvent()` to track media playback interactions. Each event requires an `eventType` and a `mediaCollection` object with the current `playhead` value.

<CodeBlock slots="heading, code" repeat="1" languages="TypeScript" />

### Example

```typescript
import { Media } from '@adobe/vega-aepmedia';

// Signal that playback has started
Media.sendMediaEvent({
    xdm: {
        eventType: "media.play",
        mediaCollection: {
            playhead: 0
        }
    }
});

// Send periodic playhead updates (ping events) during playback
// These must be sent at least once per second
Media.sendMediaEvent({
    xdm: {
        eventType: "media.ping",
        mediaCollection: {
            playhead: 15
        }
    }
});

// Signal that playback has been paused
Media.sendMediaEvent({
    xdm: {
        eventType: "media.pauseStart",
        mediaCollection: {
            playhead: 30
        }
    }
});

// End the session when content finishes
Media.sendMediaEvent({
    xdm: {
        eventType: "media.sessionComplete",
        mediaCollection: {
            playhead: 3600
        }
    }
});
```

### Supported media event types

| Event type | Description |
| :--- | :--- |
| `media.play` | Indicates media playback has started or resumed. |
| `media.pauseStart` | Indicates media playback has been paused. |
| `media.ping` | Periodic playhead update during active playback. |
| `media.bufferStart` | Indicates the media player has entered a buffering state. |
| `media.bitrateChange` | Indicates a change in the media bitrate. |
| `media.adBreakStart` | Signals the start of an ad break. |
| `media.adBreakComplete` | Signals the end of an ad break. |
| `media.adStart` | Signals the start of an individual ad. |
| `media.adComplete` | Signals the completion of an individual ad. |
| `media.adSkip` | Indicates an ad was skipped. |
| `media.chapterStart` | Signals the start of a content chapter. |
| `media.chapterComplete` | Signals the completion of a content chapter. |
| `media.chapterSkip` | Indicates a chapter was skipped. |
| `media.error` | Indicates a media playback error occurred. |
| `media.statesUpdate` | Indicates a player state change (for example, fullscreen, mute). |
| `media.sessionComplete` | Signals the end of a media session when content has been viewed to completion. |
| `media.sessionEnd` | Signals the end of a media session when the user abandons playback. |

<InlineAlert variant="warning" slots="text"/>

During active playback, media ping events (`media.ping`) must be sent at least once per second with the current playhead value. Sessions that do not receive events for 10 minutes, or do not update the playhead for 30 minutes, are automatically timed out by the Edge Network.

## Complete integration example

The following example demonstrates a complete media tracking workflow, from SDK initialization through a media playback session.

<CodeBlock slots="heading, code" repeat="1" languages="TypeScript" />

### Example

```typescript
import { AEPSDK, LogLevel } from '@adobe/vega-aepcore';
import { Media } from '@adobe/vega-aepmedia';

// 1. Initialize and configure the SDK
AEPSDK.initialize({
    config: {
        "edge.configId": "<YOUR_DATASTREAM_ID>"
    },
    logLevel: LogLevel.DEBUG,
    extensions: [Media.EXTENSION]
});

// 2. Set user consent
AEPSDK.setConsent({
    consent: [{
        standard: "Adobe",
        version: "2.0",
        value: {
            collect: { val: "y" },
            metadata: { time: new Date().toISOString() }
        }
    }]
});

// 3. Create a media session
Media.createMediaSession({
    xdm: {
        eventType: "media.sessionStart",
        mediaCollection: {
            playhead: 0,
            sessionDetails: {
                streamType: "video",
                friendlyName: "Episode 1 - Pilot",
                name: "episode-1",
                hasResume: false,
                length: 3600,
                contentType: "vod",
                channel: "My App Channel",
                playerName: "Custom OTT Player"
            }
        }
    }
});

// 4. Signal playback has started
Media.sendMediaEvent({
    xdm: {
        eventType: "media.play",
        mediaCollection: {
            playhead: 0
        }
    }
});

// 5. Track an ad break
Media.sendMediaEvent({
    xdm: {
        eventType: "media.adBreakStart",
        mediaCollection: {
            playhead: 30,
            advertisingPodDetails: {
                friendlyName: "Pre-roll Ads",
                index: 0,
                offset: 0
            }
        }
    }
});

Media.sendMediaEvent({
    xdm: {
        eventType: "media.adStart",
        mediaCollection: {
            playhead: 30,
            advertisingDetails: {
                friendlyName: "Ad 1",
                name: "ad-001",
                length: 15,
                podPosition: 1
            }
        }
    }
});

Media.sendMediaEvent({
    xdm: {
        eventType: "media.adComplete",
        mediaCollection: {
            playhead: 30
        }
    }
});

Media.sendMediaEvent({
    xdm: {
        eventType: "media.adBreakComplete",
        mediaCollection: {
            playhead: 30
        }
    }
});

// 6. Track a chapter
Media.sendMediaEvent({
    xdm: {
        eventType: "media.chapterStart",
        mediaCollection: {
            playhead: 30,
            chapterDetails: {
                friendlyName: "Chapter 1",
                index: 1,
                length: 600,
                offset: 30
            }
        }
    }
});

// 7. Continue sending playhead updates during playback
//    (must be sent at least once per second)
Media.sendMediaEvent({
    xdm: {
        eventType: "media.ping",
        mediaCollection: {
            playhead: 120
        }
    }
});

Media.sendMediaEvent({
    xdm: {
        eventType: "media.chapterComplete",
        mediaCollection: {
            playhead: 630
        }
    }
});

// 8. Complete the session when content finishes
Media.sendMediaEvent({
    xdm: {
        eventType: "media.sessionComplete",
        mediaCollection: {
            playhead: 3600
        }
    }
});
```
