import Tabs from './tabs/api-reference.md'

# API reference

## Edge Media API reference

### extensionVersion

The `extensionVersion()` API returns the version of the Media for Edge Network extension that is registered with the Mobile Core extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

### resetIdentities

Immediately aborts all the active tracking sessions and clears all the MediaTracker instances.

See [MobileCore.resetIdentities](../mobile-core/api-reference.md#resetidentities) for more details.

### createTracker

Creates a MediaTracker instance that should be used to track a playback session. The tracker sends periodic heartbeat pings to the Experience Edge Network.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-tracker"/>

iOS

<Tabs query="platform=ios&api=create-tracker"/>

### createTrackerWithConfig

Creates a MediaTracker instance that should be used to track a playback session. The tracker sends periodic heartbeat pings to the Experience Edge Network.

| Key | Description | Value | Required |
| :--- | :--- | :--- | :---: |
| `config.channel` | The channel name for media. Set this to overwrite the channel name configured in the Data Collection UI for media tracked with this tracker instance. | String | No |
| `config.mainpinginterval` | Overwrites the default main content tracking interval `(in seconds)`. The value should be in the allowed range `[10-50] seconds`. The default value is 10 seconds. | Int | No |
| `config.adpinginterval` | Overwrites the default ad content tracking interval `(in seconds)`. The value should be in the allowed range `[1-10] seconds`. The default value is 10 seconds. | Int | No |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-tracker-with-config"/>

iOS

<Tabs query="platform=ios&api=create-tracker-with-config"/>

### createMediaObject

Creates an instance of the Media object which is a map/dictionary that contains information about the media.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `name` | The friendly name of the media.  | Yes |
| `id` | The unique identifier for the media. | Yes |
| `length` | The length of the media in seconds. | Yes |
| `streamType` | [Stream type](#stream-type) | Yes |
| `mediaType` | [Media type](#media-type) | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-media-object"/>

iOS

<Tabs query="platform=ios&api=create-media-object"/>

### createAdBreakObject

Creates an instance of the AdBreak object which is a map/dictionary that contains information about the ad break.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `name` | The friendly name of ad break such as pre-roll, mid-roll, and post-roll. | Yes |
| `position` | The numeric position of the ad break within the content, starting with 1. | Yes |
| `startTime` | The playhead value in seconds at the start of the ad break. | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-ad-break-object"/>

iOS

<Tabs query="platform=ios&api=create-ad-break-object"/>

### createAdObject

Creates an instance of the Ad object which is a map/dictionary that contains information about the Ad.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `name` | The friendly name of the Ad. | Yes |
| `id` | The unique identifier for the Ad. | Yes |
| `position` | The numeric position of the Ad within the ad break, starting with 1. | Yes |
| `length` | The length of Ad in seconds. | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-ad-object"/>

iOS

<Tabs query="platform=ios&api=create-ad-object"/>

### createChapterObject

Creates an instance of the Chapter object which is a map/dictionary that contains information about the chapter.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `name` | The friendly name of the Chapter. | Yes |
| `position` | The numeric position of the Chapter within the content, starting with 1. | Yes |
| `length` | The length of Chapter in seconds. | Yes |
| `startTime` | The playhead value at the start of the Chapter. | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-chapter-object"/>

iOS

<Tabs query="platform=ios&api=create-chapter-object"/>

### createQoEObject

Creates an instance of the QoE (Quality of Experience) object which is a map/dictionary that contains information about the quality of experience.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `bitrate` | The bitrate of media in bits per second. | Yes |
| `startupTime` | The start up time of media in seconds. | Yes |
| `fps` | The current frames per second. | Yes |
| `droppedFrames` | The number of dropped frames so far. | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-qoe-object"/>

iOS

<Tabs query="platform=ios&api=create-qoe-object"/>

### createStateObject
Creates an instance of the Player State object which is a dictionary that contains information about the player state.

| Parameter | Description | Required |
| --- | --- | --- |
| `name` | The player state name. Use [Player State constants](#player-state-constants) to track standard player states. | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=create-state-object"/>

iOS

<Tabs query="platform=ios&api=create-state-object"/>

## MediaTracker API reference

<InlineAlert variant="info" slots="text"/>

The following APIs are **tracker instance** dependent. Create a tracker instance using [`createTracker`](#createtracker) or [`createTrackerWithConfig`](#createtrackerwithconfig) and call the following APIs.

### trackSessionStart

Tracks the intention to start playback. This starts a tracking session on the MediaTracker instance. To resume a previously closed session, see the [media resume guide](#media-resume).

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `mediaInfo` | Media information created using the [createMediaObject](#createmediaobject) method. | Yes |
| `contextData` | Optional Media context data. For standard metadata keys, use [standard video constants](#standard-video-constants) or [standard audio constants](#standard-audio-constants). | No |

<InlineAlert variant="info" slots="text"/>

Main ping interval can now be customized to duration between 10 to 50 seconds using [`createTrackerWithConfig`](#createtrackerwithconfig) API.

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

Tracks the completion of the media playback session. Call this method only when the media has been completely viewed. If the viewing session is ended before the media is completely viewed, use [`trackSessionEnd`](#tracksessionend) instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-complete"/>

iOS

<Tabs query="platform=ios&api=track-complete"/>

### trackSessionEnd

Tracks the end of a media playback session. Call this method when the viewing session ends, even if the user has not viewed the media to completion. If the media is viewed to completion, use [`trackComplete`](#trackcomplete) instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-session-end"/>

iOS

<Tabs query="platform=ios&api=track-session-end"/>

### trackError

Tracks an error in media playback.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `errorId` |  The custom error Identifier. | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-error"/>

iOS

<Tabs query="platform=ios&api=track-error"/>

### trackEvent

Tracks media events.

| Parameter | Description | Required |
| :--- | :--- | :--: |
| `event` | The media event being tracked, use [Media event constants](#media-events) | Yes|
| `info` | For an `AdBreakStart` event, the AdBreak information is created by using the `createAdBreakObjectWith` method.<br/> For an `AdStart` event, the Ad information is created by using the `createAdObjectWith` method.<br/> For a `ChapterStart` event, the Chapter information is created by using the `createChapterObjectWith` method.<br/> For a `StateStart` and `StateEnd` event, the State information is created by using the `createStateObjectWith` method. | Yes/No* |
| metadata | Optional context data can be provided for `AdStart` and `ChapterStart` events. This is not required for other events. | No |

<InlineAlert variant="info" slots="text"/>

*`info` is a required parameter for `AdBreakStart`, `AdStart`, `ChapterStart`, `StateStart`, `StateEnd` events. Not set for any other event types.

<InlineAlert variant="info" slots="text"/>

Ad ping interval can now be customized to duration between 1 to 10 seconds using [`createTrackerWithConfig`](#createtrackerwithconfig) API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-event"/>

iOS

<Tabs query="platform=ios&api=track-event"/>

### updateCurrentPlayhead

Provides the current media playhead value to the MediaTracker instance. For accurate tracking, call this method every time the playhead value changes. If the player does not notify playhead value changes, call this method once every second with the most recent playhead value.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `time` | Current playhead value in seconds.<br/><br/> For video-on-demand (VOD), the value is specified in seconds from the beginning of the media item.<br/><br/> For live streaming, if the player does not provide information about the content duration, the value can be specified as the number of seconds since midnight UTC of that day.| Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-current-playhead"/>

iOS

<Tabs query="platform=ios&api=update-current-playhead"/>

### updateQoEObject

Provides the MediaTracker with the current Quality of Experience (QoE) information. For accurate tracking, call this method every time the media player provides the updated QoE information.

| Parameter | Description |  Required |
| :--- | :--- |
| `qoeObject` | Current QoE information that was created by using the [createQoEObject](#createqoeobject) method. | Yes |

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-qoe-object"/>

iOS

<Tabs query="platform=ios&api=update-qoe-object"/>

## Media constants

### Media type

Defines the type of media that is currently being tracked. It can be either `MediaType.Video` or `MediaType.Audio`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=media-type"/>

iOS

<Tabs query="platform=ios&api=media-type"/>

### Stream type

Defines the type of streamed content that is currently being tracked. Use the available constants or custom defined stream type values.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=stream-type"/>

iOS

<Tabs query="platform=ios&api=stream-type"/>

### Standard video constants

Defines the standard video constants used as keys when creating or modifying video metadata dictionaries. Use the available constant values or custom defined video metadata key values.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=standard-video-constants"/>

iOS

<Tabs query="platform=ios&api=standard-video-constants"/>

### Standard audio constants

Defines the standard audio constants used as keys when creating or modifying audio metadata dictionaries. Use the available constant values or custom defined audio metadata key values.

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

Defines the state of the media player that is currently being tracked. Use the available constant values or custom defined player state values.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=player-state-constants"/>

iOS

<Tabs query="platform=ios&api=player-state-constants"/>

### Media events

Defines the media event that is currently being tracked. Only the available constant values are allowed.

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
