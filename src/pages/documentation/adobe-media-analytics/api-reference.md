import Tabs from './tabs/api-reference.md'

# API reference

## Media API reference

### extensionVersion

The `extensionVersion()` API returns the version of the Media extension that is registered with the Mobile Core extension.

To get the version of the Media extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

### registerExtension

Registers the Media extension with the Mobile Core SDK.

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

### createTracker

Creates a media tracker instance that tracks the playback session. The tracker created should be used to track the streaming content and it sends periodic pings to the media analytics backend.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-tracker"/>

iOS

<Tabs query="platform=ios&api=create-tracker"/>

### createTrackerWithConfig

Creates a media tracker instance based on the configuration to track the playback session.

| Key | Description | Value | Required |
| :--- | :--- | :--- | :---: |
| `config.channel` | Channel name for media. Set this to overwrite the channel name configured from launch for media tracked with this tracker instance. | String | No |
| `config.downloadedcontent` | Creates a tracker instance to track downloaded media. Instead of sending periodic pings, the tracker only sends one ping for the entire content. | Boolean | No |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-tracker-with-config"/>

iOS

<Tabs query="platform=ios&api=create-tracker-with-config"/>

### createMediaObject

Creates an instance of the Media object.

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `name` | Media name | Yes |
| `mediaId` | Media unique identifier | Yes |
| `length` | Media length | Yes |
| `streamType` | [Stream type](#stream-type) | Yes |
| `mediaType` | [Media type](#media-type) | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-media-object"/>

iOS

<Tabs query="platform=ios&api=create-media-object"/>

### createAdBreakObject

Creates an instance of the AdBreak object.

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `name` | Ad break name such as pre-roll, mid-roll, and post-roll. | Yes |
| `position` | The number position of the ad break within the content, starting with 1. | Yes |
| `startTime` | Playhead value at the start of the ad break. | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-ad-break-object"/>

iOS

<Tabs query="platform=ios&api=create-ad-break-object"/>

### createAdObject

Creates an instance of the Ad object.

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `name` | Friendly name of the ad. | Yes |
| `adId` | Unique identifier for the ad. | Yes |
| `position` | The number position of the ad within the ad break, starting with 1. | Yes |
| `length` | Ad length | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-ad-object"/>

iOS

<Tabs query="platform=ios&api=create-ad-object"/>

### createChapterObject

Creates an instance of the Chapter object.

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `name` | Chapter name | Yes |
| `position` | The number position of the chapter within the content, starting with 1. | Yes |
| `length` | Chapter length | Yes |
| `startTime` | Playhead value at the start of the chapter | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-chapter-object"/>

iOS

<Tabs query="platform=ios&api=create-chapter-object"/>

### createQoEObject

Creates an instance of the QoE object.

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `bitrate` | Current bitrate | Yes |
| `startupTime` | Startup time | Yes |
| `fps` | FPS value | Yes |
| `droppedFrames` | Number of dropped frames | Yes |

<InlineAlert variant="info" slots="text"/>

All the QoE values `bitrate`, `startupTime`, `fps`, `droppedFrames` would be converted to `long` for reporting purposes.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-qoe-object"/>

iOS

<Tabs query="platform=ios&api=create-qoe-object"/>

### createStateObject

Creates an instance of the Player State object.

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `name` | State name(Use [Player State constants](#player-state-constants) to track standard player states) | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-state-object"/>

iOS

<Tabs query="platform=ios&api=create-state-object"/>

## Media tracker API reference

### trackSessionStart

Tracks the intention to start playback. This starts a tracking session on the media tracker instance. To learn how to resume a previously closed session, please read the [media resume guide](#media-resume)

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `mediaInfo` | Media information created using the [createMediaObject](#createmediaobject) method. | Yes |
| `contextData` | Media context data. For standard metadata keys, use [standard video constants](#standard-video-constants) or [standard audio constants](#standard-audio-constants). | No |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-session-start"/>

iOS

<Tabs query="platform=ios&api=track-session-start"/>

### trackPlay

Tracks the media play, or resume, after a previous pause.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-play"/>

iOS

<Tabs query="platform=ios&api=track-play"/>

### trackPause

Tracks the media pause.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-pause"/>

iOS

<Tabs query="platform=ios&api=track-pause"/>

### trackComplete

Tracks media complete. Call this method only when the media has been completely viewed.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-complete"/>

iOS

<Tabs query="platform=ios&api=track-complete"/>

### trackSessionEnd

Tracks the end of a viewing session. Call this method even if the user does not view the media to completion.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-session-end"/>

iOS

<Tabs query="platform=ios&api=track-session-end"/>

### trackError

Tracks an error in media playback.

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `errorId` | Error Information | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-error"/>

iOS

<Tabs query="platform=ios&api=track-error"/>

### trackEvent

Tracks media events.

| Variable Name | Description |
| :--- | :--- |
| `event` | [Media event](#media-events) |
| `info` | For an `AdBreakStart` event, the `adBreak` information is created by using the [createAdBreakObject](#createadbreakobject) method.   For an `AdStart` event, the Ad information is created by using the [createAdObject](#createadobject) method.   For `ChapterStart` event, the Chapter information is created by using the [createChapterObject](#createchapterobject) method.  For `StateStart` and `StateEnd` event, the State information is created by using the [createStateObject](#createstateobject) method. |
| `data` | Optional context data can be provided for `AdStart` and `ChapterStart` events. This is not required for other events. |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-event"/>

iOS

<Tabs query="platform=ios&api=track-event"/>

### updateCurrentPlayhead

Provides a media tracker with the current media playhead. For accurate tracking, call this method multiple times when the playhead changes.

| Variable Name | Description |
| :--- | :--- |
| `time` | Current playhead in seconds. For video-on-demand (VOD), the value is specified in seconds from the beginning of the media item. For live streaming, the value is specified as the number of seconds since midnight UTC on that day. |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-current-playhead"/>

iOS

<Tabs query="platform=ios&api=update-current-playhead"/>

### updateQoEObject

Provides the media tracker with the current QoE information. For accurate tracking, call this method multiple times when the media player provides the updated QoE information.

| Variable name | Description |
| :--- | :--- |
| `qoeObject` | Current QoE information that was created by using the [createQoEObject](#createqoeobject) method. |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-qoe-object"/>

iOS

<Tabs query="platform=ios&api=update-qoe-object"/>

## Media constants

### Media type

Defines the type of a media that is currently tracked.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=media-type"/>

iOS

<Tabs query="platform=ios&api=media-type"/>

### Stream type

Defines the stream type of the content that is currently tracked.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=stream-type"/>

iOS

<Tabs query="platform=ios&api=stream-type"/>

### Standard video constants

Defines the standard metadata keys for video streams.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=standard-video-constants"/>

iOS

<Tabs query="platform=ios&api=standard-video-constants"/>

### Standard audio constants

Defines the standard metadata keys for audio streams.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=standard-audio-constants"/>

iOS

<Tabs query="platform=ios&api=standard-audio-constants"/>

### Standard ad constants

Defines the standard metadata keys for ads.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=standard-ad-constants"/>

iOS

<Tabs query="platform=ios&api=standard-ad-constants"/>

### Player state constants

Defines some common Player State constants.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=player-state-constants"/>

iOS

<Tabs query="platform=ios&api=player-state-constants"/>

### Media events

Defines the type of a tracking event.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=media-events"/>

iOS

<Tabs query="platform=ios&api=media-events"/>

### Media resume

Constant to denote that the current tracking session is resuming a previously closed session. This information **must** be provided when starting a tracking session.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=media-resume"/>

iOS

<Tabs query="platform=ios&api=media-resume"/>
