---
noIndex: true
---

<Variant platform="vega" task="initialize" repeat="1"/>

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

<Variant platform="vega" task="update-configuration" repeat="1"/>

```typescript
AEPSDK.updateConfiguration({
    "edge.domain": "your-company.data.adobedc.net"
});
```

<Variant platform="vega" task="set-log-level" repeat="1"/>

```typescript
import { AEPSDK, LogLevel } from '@adobe/vega-aepcore';

// Set log level to VERBOSE for development
AEPSDK.setLogLevel(LogLevel.VERBOSE);

// Set log level to ERROR for production
// AEPSDK.setLogLevel(LogLevel.ERROR);
```

<Variant platform="vega" task="get-ecid" repeat="1"/>

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

<Variant platform="vega" task="set-consent" repeat="1"/>

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

<Variant platform="vega" task="send-event" repeat="2"/>

**`sendEvent`** sends an event without waiting for a response:

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

**`sendEventWithResponse`** sends an event and returns the Edge Network response as a `Promise`:

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

<Variant platform="vega" task="create-media-session" repeat="1"/>

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

<Variant platform="vega" task="send-media-event" repeat="1"/>

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

<Variant platform="vega" task="full-example" repeat="1"/>

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
