---
title: Media for Edge Network API reference
description: An API reference for the Media for Edge Network mobile extension.
keywords:
- API reference
- Edge Network
- Media for Edge Network
---

# API reference

## Edge Media API reference

### extensionVersion

The `extensionVersion()` API returns the version of the Media for Edge Network extension that is registered with the Mobile Core extension.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static String extensionVersion() {
```

### Example

```java
String mediaExtensionVersion = Media.extensionVersion();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
val mediaExtensionVersion = Media.extensionVersion()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static var extensionVersion: String
```

### Example

```swift
let mediaExtensionVersion = Media.extensionVersion()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (nonnull NSString*) extensionVersion;
```

### Example

```objectivec
NSString *mediaExtensionVersion = [AEPMobileEdgeMedia extensionVersion];
```

### resetIdentities

Immediately aborts all the active tracking sessions and clears all the MediaTracker instances.

See [MobileCore.resetIdentities](../../home/base/mobile-core/api-reference.md#resetidentities) for more details.

### createTracker

Creates a MediaTracker instance that should be used to track a playback session. The tracker sends periodic heartbeat pings to the Experience Edge Network.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static MediaTracker createTracker()
```

### Example

```java
MediaTracker mediaTracker = Media.createTracker();  // Use the instance for tracking media.
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
val tracker = Media.createTracker()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func createTracker()
```

### Example

```swift
let tracker = Media.createTracker()  // Use the instance for tracking media.
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (void) createTracker
```

### Example

```objc
id<AEPEdgeMediaTracker> tracker;
tracker = [AEPMobileEdgeMedia createTracker];  // Use the instance for tracking media.
```

### createTrackerWithConfig

Creates a MediaTracker instance that should be used to track a playback session. The tracker sends periodic heartbeat pings to the Experience Edge Network.

| Key | Description | Value | Required |
| :--- | :--- | :--- | :---: |
| `config.channel` | The channel name for media. Set this to overwrite the channel name configured in the Data Collection UI for media tracked with this tracker instance. | String | No |
| `config.mainpinginterval` | Overwrites the default main content tracking interval `(in seconds)`. The value should be in the allowed range `[10-50] seconds`. The default value is 10 seconds. | Int | No |
| `config.adpinginterval` | Overwrites the default ad content tracking interval `(in seconds)`. The value should be in the allowed range `[1-10] seconds`. The default value is 10 seconds. | Int | No |

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static MediaTracker createTracker(Map<String, Object> config)
```

### Example

```java
HashMap<String, Object> config = new HashMap<String, Object>();
config.put(MediaConstants.TrackerConfig.CHANNEL, "custom-channel");  // Overwrites channel configured in the Data Collection UI.
config.put(MediaConstants.TrackerConfig.AD_PING_INTERVAL, 1);   // Overwrites ad content ping interval to 1 second.
config.put(MediaConstants.TrackerConfig.MAIN_PING_INTERVAL, 30);   // Overwrites main content ping interval to 30 seconds.

MediaTracker mediaTracker = Media.createTracker(config);  // Use the instance for tracking media.
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
val config = mapOf(
                MediaConstants.TrackerConfig.CHANNEL to "custom-channel",
                MediaConstants.TrackerConfig.AD_PING_INTERVAL to 1,
                MediaConstants.TrackerConfig.MAIN_PING_INTERVAL to 30,
            )
val tracker = Media.createTracker(config) // Use the instance for tracking media.
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func createTrackerWith(config: [String: Any]?)
```

### Example

```swift
var config: [String: Any] = [:]
config[MediaConstants.TrackerConfig.CHANNEL] = "custom-channel" // Overrides channel configured in the Data Collection UI.
​config[MediaConstants.TrackerConfig.AD_PING_INTERVAL] = 1 // Overwrites ad content ping interval to 1 second.
config[MediaConstants.TrackerConfig.MAIN_PING_INTERVAL] = 30 // Overwrites main content ping interval to 30 seconds.

let tracker = Media.createTrackerWith(config: config)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+(id<AEPEdgeMediaTracker> _Nonnull) createTrackerWithConfig:(NSDictionary<NSString *,id> * _Nullable)
```

### Example

```objectivec
id<AEPEdgeMediaTracker> tracker;
NSMutableDictionary* config = [NSMutableDictionary dictionary];

config[AEPEdgeMediaTrackerConfig.CHANNEL] = @"custom-channel"; // Overrides channel configured in the Data Collection UI.
config[AEPEdgeMediaTrackerConfig.AD_PING_INTERVAL] = 1; // Overwrites ad content ping interval to 1 second.
config[AEPEdgeMediaTrackerConfig.MAIN_PING_INTERVAL] = 30; // Overwrites main content ping interval to 30 seconds.

tracker = [AEPMobileEdgeMedia createTrackerWithConfig:config];
```

### createMediaObject

Creates an instance of the Media object which is a map/dictionary that contains information about the media.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `name` | The friendly name of the media.  | Yes |
| `id` | The unique identifier for the media. | Yes |
| `length` | The length of the media in seconds. | Yes |
| `streamType` | [Stream type](#stream-type) | Yes |
| `mediaType` | [Media type](#media-type) | Yes |

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static HashMap<String, Object> createMediaObject(String name,
                                                        String id,
                                                        int length,
                                                        String streamType,
                                                        MediaType mediaType);
```

### Example

```java
HashMap<String, Object> mediaInfo = Media.createMediaObject("videoName",
                                                            "videoId",
                                                            60,
                                                            MediaConstants.StreamType.VOD,
                                                            Media.MediaType.Video);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
var mediaInfo = Media.createMediaObject("videoName",
                                        "videoId",
                                        60,
                                        MediaConstants.StreamType.VOD,
                                        Media.MediaType.Video)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func createMediaObjectWith(name: String,
                                    id: String,
                                length: Int,
                            streamType: String,
                             mediaType: MediaType) -> [String: Any]?
```

### Example

```swift
let mediaObject = Media.createMediaObjectWith(name: "videoName",
                                                id: "videoId",
                                            length: 60,
                                        streamType: MediaConstants.StreamType.VOD,
                                         mediaType: MediaType.Video)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (NSDictionary<NSString *, id> * _Nullable) createMediaObjectWith:(NSString * _Nonnull) id:(NSString * _Nonnull) length:(NSInteger) streamType:(NSString * _Nonnull) mediaType:(enum AEPEdgeMediaType)
```

### Example

```objectivec
NSDictionary *mediaObject = [AEPMobileEdgeMedia createMediaObjectWith:@"videoName"
                                                                id:@"videoId"
                                                            length:60
                                                        streamType:AEPEdgeMediaStreamType.VOD
                                                         mediaType:AEPEdgeMediaTypeVideo];
```

### createAdBreakObject

Creates an instance of the AdBreak object which is a map/dictionary that contains information about the ad break.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `name` | The friendly name of ad break such as pre-roll, mid-roll, and post-roll. | Yes |
| `position` | The numeric position of the ad break within the content, starting with 1. | Yes |
| `startTime` | The playhead value in seconds at the start of the ad break. | Yes |

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static HashMap<String, Object> createAdBreakObject(String name, int position, int startTime);
```

### Example

```java
HashMap<String, Object> adBreakInfo = Media.createAdBreakObject("adbreakName", 1, 0);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
val adBreakInfo = Media.createAdBreakObject("adbreakName", 1, 0)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func createAdBreakObjectWith(name: String,
                                position: Int,
                               startTime: Int) -> [String: Any]?
```

### Example

```swift
let adBreakInfo = Media.createAdBreakObjectWith(name: "adbreakName",
                                              position: 1,
                                             startTime: 0)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createAdBreakObjectWith:(NSString * _Nonnull)position:(NSInteger) startTime:(NSInteger)
```

### Example

```objectivec
NSDictionary *adBreakInfo = [AEPMobileEdgeMedia createAdBreakObjectWith:@"adbreakName"
                                                                 position:1
                                                                startTime:0];
```

### createAdObject

Creates an instance of the Ad object which is a map/dictionary that contains information about the Ad.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `name` | The friendly name of the Ad. | Yes |
| `id` | The unique identifier for the Ad. | Yes |
| `position` | The numeric position of the Ad within the ad break, starting with 1. | Yes |
| `length` | The length of Ad in seconds. | Yes |

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static HashMap<String, Object> createAdObject(String name, String id, int position, int length);
```

### Example

```java
HashMap<String, Object> adInfo = Media.createAdObject("adName", "adId", 1, 15);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
val adInfo = Media.createAdObject("adName", "adId", 1, 15)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func createAdObjectWith(name: String,
                                 id: String,
                           position: Int,
                             length: Int) -> [String: Any]?
```

### Example

```swift
let adInfo = Media.createObjectWith(name: "adName",
                                        id: "adId",
                                  position: 0,
                                    length: 30)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createAdObjectWith:(NSString * _Nonnull)
                                                               id:(NSString * _Nonnull)
                                                         position:(NSInteger)
                                                           length:(NSInteger)
```

### Example

```objectivec
NSDictionary *adInfo = [AEPMobileEdgeMedia createAdObjectWith:@"adName"
                                                             id:@"adId"
                                                       position:0
                                                         length:30];
```

### createChapterObject

Creates an instance of the Chapter object which is a map/dictionary that contains information about the chapter.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `name` | The friendly name of the Chapter. | Yes |
| `position` | The numeric position of the Chapter within the content, starting with 1. | Yes |
| `length` | The length of Chapter in seconds. | Yes |
| `startTime` | The playhead value at the start of the Chapter. | Yes |

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static HashMap<String, Object> createChapterObject(String name,
                                                          int position,
                                                          int length,
                                                          int startTime);
```

### Example

```java
HashMap<String, Object> chapterInfo = Media.createChapterObject("chapterName", 1, 60, 0);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
val chapterInfo = Media.createChapterObject("chapterName", 1, 60, 0)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func createChapterObjectWith(name: String,
                                position: Int,
                                  length: Int,
                               startTime: Int) -> [String: Any]?
```

### Example

```swift
let chapterInfo = Media.createChapterObjectWith(name: "chapterName",
                                              position: 1,
                                                length: 60,
                                             startTime: 0)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createChapterObjectWith:(NSString * _Nonnull)
                                                              position:(NSInteger)
                                                                length:(NSInteger)
                                                             startTime:(NSInteger)
```

### Example

```objectivc
NSDictionary *chapterInfo = [AEPMobileEdgeMedia createChapterObjectWith:@"chapterName"
                                                                 position:1
                                                                   length:60
                                                                startTime:0];
```

### createQoEObject

Creates an instance of the QoE (Quality of Experience) object which is a map/dictionary that contains information about the quality of experience.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `bitrate` | The bitrate of media in bits per second. | Yes |
| `startupTime` | The start up time of media in seconds. | Yes |
| `fps` | The current frames per second. | Yes |
| `droppedFrames` | The number of dropped frames so far. | Yes |

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static HashMap<String, Object> createQoEObject(int bitrate,
                                                      int startupTime,
                                                      int fps,
                                                      int droppedFrames);
```

### Example

```java
HashMap<String, Object> qoeInfo = Media.createQoEObject(10000000, 2, 23, 10);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
val qoeInfo = Media.createQoEObject(10000000, 2, 23, 10)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func createQoEObjectWith(bitrate: Int,
                            startupTime: Int,
                                    fps: Int,
                          droppedFrames: Int) -> [String: Any]?
```

### Example

```swift
let qoeInfo = Media.createQoEObjectWith(bitrate: 500000,
                                      startupTime: 2,
                                              fps: 24,
                                    droppedFrames: 10)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createQoEObjectWith:(NSInteger)
                                                         startTime:(NSInteger)
                                                               fps:(NSInteger)
                                                     droppedFrames:(NSInteger)
```

### Example

```objectivec
NSDictionary *qoeInfo = [AEPMobileEdgeMedia createQoEObjectWith:500000
                                                        startTime:2
                                                              fps:24
                                                    droppedFrames:10];
```

### createStateObject

Creates an instance of the Player State object which is a dictionary that contains information about the player state.

| Parameter | Description | Required |
| --- | --- | --- |
| `name` | The player state name. Use [Player State constants](#player-state-constants) to track standard player states. | Yes |

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static HashMap<String, Object> createStateObject(String stateName);
```

### Example

```java
HashMap<String, Object> fullScreenState = Media.createStateObject(MediaConstants.PlayerState.FULLSCREEN);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
val fullScreenState = Media.createStateObject(MediaConstants.PlayerState.FULLSCREEN)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func createStateObjectWith(stateName: String) -> [String: Any]
```

### Example

```swift
let fullScreenState = Media.createStateObjectWith(stateName: MediaConstants.PlayerState.FULLSCREEN)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createStateObjectWith:(NSString * _Nonnull)
```

### Example

```objectivec
NSDictionary* fullScreenState = [AEPMobileEdgeMedia createStateObjectWith:AEPEdgeMediaPlayerState.FULLSCREEN]
```

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

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public void trackSessionStart(Map<String, Object> mediaInfo, Map<String, String> contextData);
```

### Example

```java
HashMap<String, Object> mediaInfo = Media.createMediaObject("mediaName", "mediaId", 60, MediaConstants.StreamType.VOD, Media.MediaType.Video);

HashMap<String, String> mediaMetadata = new HashMap<String, String>();
// Standard metadata keys provided by adobe.
mediaMetadata.put(MediaConstants.VideoMetadataKeys.EPISODE, "Sample Episode");
mediaMetadata.put(MediaConstants.VideoMetadataKeys.SHOW, "Sample Show");

// Custom metadata keys
mediaMetadata.put("isUserLoggedIn", "false");
mediaMetadata.put("tvStation", "Sample TV Station");

tracker.trackSessionStart(mediaInfo, mediaMetadata);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
val mediaInfo = Media.createMediaObject(
                        "mediaName",
                        "mediaId",
                        60,
                        MediaConstants.StreamType.VOD,
                        Media.MediaType.Video
                    )

val mediaMetadata = mapOf<String, String>(
    // Standard metadata keys provided by Adobe
    MediaConstants.VideoMetadataKeys.EPISODE to "Sample Episode",
    MediaConstants.VideoMetadataKeys.SHOW to "Sample Show",
    // Custom metadata keys
    "isUserLoggedIn" to "false",
    "tvStation" to "Sample TV Station"
)

tracker.trackSessionStart(mediaInfo, mediaMetadata)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public func trackSessionStart(info: [String: Any], metadata: [String: String]? = nil)
```

### Example

```swift
let mediaInfo = Media.createMediaObjectWith(name: "videoName", id: "videoId", length: 60, streamType: MediaConstants.StreamType.VOD, mediaType: MediaType.Video)

var mediaMetadata: [String: String] = [
  // Standard metadata keys provided by Adobe
  MediaConstants.VideoMetadataKeys.SHOW : "Sample Show",
  MediaConstants.VideoMetadataKeys.SEASON : "Sample Season",
  // Custom metadata keys
  "isUserLoggedIn" : "false",
  "isUserLoggedIn" : "Sample TV station"
]

tracker.trackSessionStart(info: mediaInfo, metadata: mediaMetadata)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (void) trackSessionStart:(NSDictionary<NSString *,id> * _Nonnull) metadata:(NSDictionary<NSString *,NSString *> * _Nullable)
```

### Example

```objectivec
NSDictionary *mediaInfo = [AEPMobileEdgeMedia createMediaObjectWith:@"videoName" id:@"videoId" length:60 streamType:AEPEdgeMediaStreamType.VOD mediaType:AEPEdgeMediaTypeVideo];

NSMutableDictionary *mediaMetadata = [[NSMutableDictionary alloc] init];
// Standard metadata keys provided by Adobe
[mediaMetadata setObject:@"Sample Show" forKey:AEPEdgeMediaVideoMetadataKeys.SHOW];
[mediaMetadata setObject:@"Sample Season" forKey:AEPEdgeMediaVideoMetadataKeys.SEASON];

// Custom metadata keys
[mediaMetadata setObject:@"false" forKey:@"isUserLoggedIn"];
[mediaMetadata setObject:@"Sample TV station" forKey:@"tvStation"];

[tracker trackSessionStart:mediaInfo metadata:mediaMetadata];
```

### trackPlay

Tracks the media play, or resume, after a previous pause.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public void trackPlay();
```

### Example

```java
tracker.trackPlay();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
tracker.trackPlay()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
func trackPlay()
```

### Example

```swift
tracker.trackPlay()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
- (void) trackPlay;
```

### Example

```objectivec
[tracker trackPlay];
```

### trackPause

Tracks the media pause.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public void trackPause();
```

### Example

```java
tracker.trackPause();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
tracker.trackPause()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
func trackPause()
```

### Example

```swift
tracker.trackPause()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
- (void) trackPause
```

### Example

```objectivec
[tracker trackPause];
```

### trackComplete

Tracks the completion of the media playback session. Call this method only when the media has been completely viewed. If the viewing session is ended before the media is completely viewed, use [`trackSessionEnd`](#tracksessionend) instead.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public void trackComplete();
```

### Example

```java
tracker.trackComplete();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
tracker.trackComplete()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
func trackComplete()
```

### Example

```swift
tracker.trackComplete()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
- (void) trackComplete
```

### Example

```objectivec
[tracker trackComplete];
```

### trackSessionEnd

Tracks the end of a media playback session. Call this method when the viewing session ends, even if the user has not viewed the media to completion. If the media is viewed to completion, use [`trackComplete`](#trackcomplete) instead.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public void trackSessionEnd();
```

### Example

```java
tracker.trackSessionEnd();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```kotlin
tracker.trackSessionEnd()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
func trackSessionEnd()
```

### Example

```swift
tracker.trackSessionEnd()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
- (void) trackSessionEnd
```

### Example

```objectivec
[tracker trackSessionEnd];
```

### trackError

Tracks an error in media playback.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `errorId` |  The custom error Identifier. | Yes |

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public void trackError(String errorId);
```

### Example

```java
tracker.trackError("errorId");
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
tracker.trackError("errorId")
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
func trackError(errorId: String)
```

### Example

```swift
tracker.trackError(errorId: "errorId")
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
- (void) trackError:(NSString * _Nonnull)
```

### Example

```objectivec
[tracker trackError:@"errorId"];
```

### trackEvent

Tracks media events.

| Parameter | Description | Required |
| :--- | :--- | :--: |
| `event` | The media event being tracked, use [Media event constants](#media-events) | Yes|
| `info` | For an `AdBreakStart` event, the AdBreak information is created by using the `createAdBreakObjectWith` method.\<br/\> For an `AdStart` event, the Ad information is created by using the `createAdObjectWith` method.\<br/\> For a `ChapterStart` event, the Chapter information is created by using the `createChapterObjectWith` method.\<br/\> For a `StateStart` and `StateEnd` event, the State information is created by using the `createStateObjectWith` method. | Yes/No* |
| metadata | Optional context data can be provided for `AdStart` and `ChapterStart` events. This is not required for other events. | No |

<InlineAlert variant="info" slots="text"/>

*`info` is a required parameter for `AdBreakStart`, `AdStart`, `ChapterStart`, `StateStart`, `StateEnd` events. Not set for any other event types.

<InlineAlert variant="info" slots="text"/>

Ad ping interval can now be customized to duration between 1 to 10 seconds using [`createTrackerWithConfig`](#createtrackerwithconfig) API.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

### Syntax

```java
  public void trackEvent(Media.Event event,
                         Map<String, Object> info,
                         Map<String, String> data);
```

**Examples**

**Tracking player states**

```java
// StateStart
  HashMap<String, Object> fullScreenState = Media.createStateObject(MediaConstants.PlayerState.FULLSCREEN);
  tracker.trackEvent(Media.Event.StateStart, fullScreenState, null);

// StateEnd
  HashMap<String, Object> fullScreenState = Media.createStateObject(MediaConstants.PlayerState.FULLSCREEN);
  tracker.trackEvent(Media.Event.StateEnd, fullScreenState, null);
```

**Tracking ad breaks**

```java
// AdBreakStart
  HashMap<String, Object> adBreakInfo = Media.createAdBreakObject("adbreakName", 1, 0);
  tracker.trackEvent(Media.Event.AdBreakStart, adBreakInfo, null);

// AdBreakComplete
  tracker.trackEvent(Media.Event.AdBreakComplete, null, null);
```

**Tracking ads**

```java
// AdStart
  HashMap<String, Object> adInfo = Media.createAdObject("adName", "adId", 1, 15);

  HashMap<String, String> adMetadata = new HashMap<String, String>();
  // Standard metadata keys provided by Adobe
  adMetadata.put(MediaConstants.AdMetadataKeys.ADVERTISER, "Sample Advertiser");
  adMetadata.put(MediaConstants.AdMetadataKeys.CAMPAIGN_ID, "Sample Campaign");
  // Custom metadata keys
  adMetadata.put("affiliate", "Sample Affiliate");

  tracker.trackEvent(Media.Event.AdStart, adInfo, adMetadata);

// AdComplete
  tracker.trackEvent(Media.Event.AdComplete, null, null);

// AdSkip
  tracker.trackEvent(Media.Event.AdSkip, null, null);
```

**Tracking chapters**

```java
// ChapterStart
  HashMap<String, Object> chapterInfo = Media.createChapterObject("chapterName", 1, 60, 0);

  HashMap<String, String> chapterMetadata = new HashMap<String, String>();
  chapterMetadata.put("segmentType", "Sample Segment type");

  tracker.trackEvent(Media.Event.ChapterStart, chapterInfo, chapterMetadata);

// ChapterComplete
  tracker.trackEvent(Media.Event.ChapterComplete, null, null);

// ChapterSkip
  tracker.trackEvent(Media.Event.ChapterSkip, null, null);
```

**Tracking playback events**

```java
// BufferStart
  tracker.trackEvent(Media.Event.BufferStart, null, null);

// BufferComplete
  tracker.trackEvent(Media.Event.BufferComplete, null, null);

// SeekStart
  tracker.trackEvent(Media.Event.SeekStart, null, null);

// SeekComplete
  tracker.trackEvent(Media.Event.SeekComplete, null, null);
```

**Tracking bitrate changes**

```java
// If the new bitrate value is available provide it to the tracker.
  HashMap<String, Object> qoeInfo = Media.createQoEObject(2000000, 2, 25, 10);
  tracker.updateQoEObject(qoeInfo);

// Bitrate change
  tracker.trackEvent(Media.Event.BitrateChange, null, null);
```

### Android Kotlin

**Examples**

**Tracking player states**

```java
// StateStart
    val stateInfo = Media.createStateObject(MediaConstants.PlayerState.FULLSCREEN)
    tracker.trackEvent(Media.Event.StateStart, stateInfo, null)

// StateEnd
    val stateInfo = Media.createStateObject(MediaConstants.PlayerState.FULLSCREEN)
    tracker.trackEvent(Media.Event.StateEnd, stateInfo, null)
```

**Tracking ad breaks**

```java
// AdBreakStart
    val adBreakInfo = Media.createAdBreakObject("adbreakName", 1, 0)
    tracker.trackEvent(Media.Event.AdBreakStart, adBreakInfo, null)

// AdBreakComplete
    tracker.trackEvent(Media.Event.AdBreakComplete, null, null)
```

**Tracking ads**

```java
//AdStart
    val adInfo = Media.createAdObject("adName", "adId", 1, 15)

    val adMetadata = mapOf<String, String>(
    // Standard metadata keys provided by Adobe
    MediaConstants.AdMetadataKeys.ADVERTISER to "Sample Advertiser",
    MediaConstants.AdMetadataKeys.CAMPAIGN_ID to "Sample Campaign",
    // Custom metadata keys
    "affiliate" to "Sample Affiliate",
    "tvStation" to "Sample TV Station"
    )

    tracker.trackEvent(Media.Event.AdStart, adInfo, adMetadata)

// AdComplete
    tracker.trackEvent(Media.Event.AdComplete, null, null)

// AdSkip
    tracker.trackEvent(Media.Event.AdSkip, null, null)
```

**Tracking chapters**

```java
// ChapterStart
  val chapterInfo = Media.createChapterObject("chapterName", 1L, 60, 0)

  val chapterMetadata = mapOf<String, String>(
    "segmentType" to "Sample Segment type"
  )

  tracker.trackEvent(Media.Event.ChapterStart, chapterInfo, chapterMetadata)

// ChapterComplete
  tracker.trackEvent(Media.Event.ChapterComplete, null, null)

// ChapterSkip
  tracker.trackEvent(Media.Event.ChapterSkip, null, null)
```

**Tracking playback events**

```java
// BufferStart
   tracker.trackEvent(Media.Event.BufferStart, null, null)

// BufferComplete
   tracker.trackEvent(Media.Event.BufferComplete, null, null)

// SeekStart
   tracker.trackEvent(Media.Event.SeekStart, null, null)

// SeekComplete
   tracker.trackEvent(Media.Event.SeekComplete, null, null)
```

**Tracking bitrate changes**

```java
// If the new bitrate value is available provide it to the tracker.
  val qoeInfo = Media.createQoEObject(2000000, 2, 25, 10)
  tracker.updateQoEObject(qoeInfo)

// Bitrate change
  tracker.trackEvent(Media.Event.BitrateChange, null, null)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

### Syntax

```swift
func trackEvent(event: MediaEvent, info: [String: Any]?, metadata: [String: String]?)
```

**Examples**

**Tracking player states**

```swift
// StateStart
  let fullScreenState = Media.createStateObjectWith(stateName: MediaConstants.PlayerState.FULLSCREEN)
  tracker.trackEvent(event: MediaEvent.StateStart, info: fullScreenState, metadata: nil)

// StateEnd
  let fullScreenState = Media.createStateObjectWith(stateName: MediaConstants.PlayerState.FULLSCREEN)
  tracker.trackEvent(event: MediaEvent.StateEnd, info: fullScreenState, metadata: nil)
```

**Tracking ad breaks**

```swift
// AdBreakStart
  let adBreakInfo = Media.createAdBreakObjectWith(name: "adbreakName", position: 1, startTime: 0)
  tracker.trackEvent(event: MediaEvent.AdBreakStart, info: adBreakInfo, metadata: nil)

// AdBreakComplete
  tracker.trackEvent(event: MediaEvent.AdBreakComplete, info: nil, metadata: nil)
```

**Tracking ads**

```swift
// AdStart
  let adInfo = Media.createObjectWith(name: "adName", id: "adId", position: 0, length: 30)

// Standard metadata keys provided by Adobe
  var adMetadata: [String: String] = [:]
  adMetadata[MediaConstants.AdMetadataKeys.ADVERTISER] = "Sample Advertiser"
  adMetadata[MediaConstants.AdMetadataKeys.CAMPAIGN_ID] = "Sample Campaign"

// Custom metadata keys
  adMetadata["affiliate"] = "Sample Affiliate"

  tracker.trackEvent(event: MediaEvent.AdStart, info: adInfo, metadata: adMetadata)

// AdComplete
  tracker.trackEvent(event: MediaEvent.AdComplete, info: nil, metadata: nil)

// AdSkip
   tracker.trackEvent(event: MediaEvent.AdSkip, info: nil, metadata: nil)
```

**Tracking chapters**

```swift
// ChapterStart
  let chapterInfo = Media.createChapterObjectWith(name: "chapterName", position: 1, length: 60, startTime: 0)
  let chapterMetadata = ["segmentType": "Sample Segment type"]

  tracker.trackEvent(event: MediaEvent.ChapterStart, info: chapterInfo, metadata: chapterMetadata)

// ChapterComplete
  tracker.trackEvent(event: MediaEvent.ChapterComplete, info: nil, metadata: nil)

// ChapterSkip
  tracker.trackEvent(event: MediaEvent.ChapterSkip, info: nil, metadata: nil)
```

**Tracking playback events**

```swift
// BufferStart
   tracker.trackEvent(event: MediaEvent.BufferStart, info: nil, metadata: nil)

// BufferComplete
   tracker.trackEvent(event: MediaEvent.BufferComplete, info: nil, metadata: nil)

// SeekStart
   tracker.trackEvent(event: MediaEvent.SeekStart, info: nil, metadata: nil)

// SeekComplete
   tracker.trackEvent(event: MediaEvent.SeekComplete, info: nil, metadata: nil)
```

**Tracking bitrate change**

```swift
// If the new bitrate value is available provide it to the tracker.
  let qoeInfo = Media.createQoEObjectWith(bitrate: 500000, startupTime: 2, fps: 24, droppedFrames: 10)
  tracker.updateQoEObject(qoeInfo)

// Bitrate change
  tracker.trackEvent(event: MediaEvent.BitrateChange, info: nil, metadata: nil)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="1" />

### Syntax

```objectivec
- (void) trackEvent:(enum AEPEdgeMediaEvent) info:(NSDictionary<NSString *,id> * _Nullable) metadata:(NSDictionary<NSString *,NSString *> * _Nullable)
```

**Examples**

**Tracking player states**

```objectivec
// StateStart
  NSDictionary* fullScreenState = [AEPMobileEdgeMedia createStateObjectWith:AEPEdgeMediaPlayerState.FULLSCREEN];
  [tracker trackEvent:AEPEdgeMediaEventStateStart info:fullScreenState metadata:nil];

// StateEnd
  NSDictionary* fullScreenState = [AEPMobileEdgeMedia createStateObjectWith:AEPEdgeMediaPlayerState.FULLSCREEN];
  [tracker trackEvent:AEPEdgeMediaEventStateEnd info:fullScreenState metadata:nil];
```

**Tracking ad breaks**

```objectivec
// AdBreakStart
  NSDictionary *adBreakInfo = [AEPMobileEdgeMedia createAdBreakObjectWith:@"adbreakName" position:1 startTime:0];
  [tracker trackEvent:AEPEdgeMediaEventAdBreakStart info:adBreakInfo metadata:nil];

// AdBreakComplete
  [tracker trackEvent:AEPEdgeMediaEventAdBreakComplete info:nil metadata:nil];
```

**Tracking ads**

```objectivec
// AdStart
  NSDictionary *adInfo = [AEPMobileEdgeMedia createAdObjectWith:@"adName" id:@"adId" position:0 length:30];
  NSMutableDictionary* adMetadata = [[NSMutableDictionary alloc] init];

// Standard metadata keys provided by adobe.
  [adMetadata setObject:@"Sample Advertiser" forKey:AEPEdgeAdMetadataKeys.ADVERTISER];
  [adMetadata setObject:@"Sample Campaign" forKey:AEPEdgeAdMetadataKeys.CAMPAIGN_ID];

// Custom metadata keys
  [adMetadata setObject:@"Sample Affiliate" forKey:@"affiliate"];

  [tracker trackEvent:AEPEdgeMediaEventAdStart info:adInfo metadata:adMetadata];

// AdComplete
  [tracker trackEvent:AEPEdgeMediaEventAdComplete info:nil metadata:nil];

// AdSkip
  [tracker trackEvent:AEPEdgeMediaEventAdSkip info:nil metadata:nil];
```

**Tracking chapters**

```objectivec
// ChapterStart
  NSDictionary *chapterInfo = [AEPMobileEdgeMedia createChapterObjectWith:@"chapterName" position:1 length:60 startTime:0];

  NSMutableDictionary *chapterMetadata = [[NSMutableDictionary alloc] init];
  [chapterMetadata setObject:@"Sample Segment type" forKey:@"segmentType"];

  [tracker trackEvent:AEPEdgeMediaEventChapterStart info:chapterInfo metadata:chapterMetadata];

// ChapterComplete
  [tracker trackEvent:AEPEdgeMediaEventChapterComplete info:nil metadata:nil];

// ChapterSkip
  [tracker trackEvent:AEPEdgeMediaEventChapterSkip info:nil metadata:nil];
```

**Tracking playback events**

```objectivec
// BufferStart
  [tracker trackEvent:AEPEdgeMediaEventBufferStart info:nil metadata:nil];

// BufferComplete
  [tracker trackEvent:AEPEdgeMediaEventBufferComplete info:nil metadata:nil];

// SeekStart
  [tracker trackEvent:AEPEdgeMediaEventSeekStart info:nil metadata:nil];

// SeekComplete
  [tracker trackEvent:AEPEdgeMediaEventSeekComplete info:nil metadata:nil];
```

**Tracking bitrate change**

```objectivec
// If the new bitrate value is available provide it to the tracker.
  NSDictionary *qoeInfo = [AEPMobileEdgeMedia createQoEObjectWith:50000 startTime:2 fps:24 droppedFrames:10];

// Bitrate change
  [tracker trackEvent:AEPEdgeMediaEventBitrateChange info:nil metadata:nil];
```

### updateCurrentPlayhead

Provides the current media playhead value to the MediaTracker instance. For accurate tracking, call this method every time the playhead value changes. If the player does not notify playhead value changes, call this method once every second with the most recent playhead value.

| Parameter | Description | Required |
| :--- | :--- | :---: |
| `time` | Current playhead value in seconds.\<br/\>\<br/\> For video-on-demand (VOD), the value is specified in seconds from the beginning of the media item.\<br/\>\<br/\> For live streaming, if the player does not provide information about the content duration, the value can be specified as the number of seconds since midnight UTC of that day.| Yes |

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public void updateCurrentPlayhead(int time);
```

### Example

```java
tracker.updateCurrentPlayhead(1);
```

**Live streaming example**

```java
//Calculation for number of seconds since midnight UTC of the day
int timeFromMidnightInSecond = (int)((System.currentTimeMillis() / 1000) % 86400);

tracker.updateCurrentPlayhead(timeFromMidnightInSecond);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
tracker.updateCurrentPlayhead(1)
```

**Live streaming example**

```java
val timeFromMidnightInSecond = ((System.currentTimeMillis() / 1000) % 86400).toInt()
tracker.updateCurrentPlayhead(timeFromMidnightInSecond)
}
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
func updateCurrentPlayhead(time: Int)
```

### Example

```swift
tracker.updateCurrentPlayhead(1)
```

**Live streaming example**

```swift
//Calculation for number of seconds since midnight UTC of the day
let secondsSince1970: TimeInterval = (Date().timeIntervalSince1970)
let timeFromMidnightInSecond = Int(secondsSince1970.truncatingRemainder(dividingBy: 86400))

tracker.updateCurrentPlayhead(time: timeFromMidnightInSecond)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
- (void) updateCurrentPlayhead:(NSInteger)
```

### Example

```objectivec
[tracker updateCurrentPlayhead:1];
```

### updateQoEObject

Provides the MediaTracker with the current Quality of Experience (QoE) information. For accurate tracking, call this method every time the media player provides the updated QoE information.

| Parameter | Description |  Required |
| :--- | :--- |
| `qoeObject` | Current QoE information that was created by using the [createQoEObject](#createqoeobject) method. | Yes |

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public void updateQoEObject(Map<String, Object> qoeInfo);
```

### Example

```java
HashMap<String, Object> qoeInfo = Media.createQoEObject(1000000, 2, 25, 10);
tracker.updateQoEObject(qoeInfo);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
val qoeInfo = Media.createQoEObject(1000000, 2, 25, 10)
tracker.updateQoEObject(qoeInfo)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
func updateQoEObject(qoe: [String: Any])
```

### Example

```swift
let qoeInfo = Media.createQoEObjectWith(bitrate: 500000, startupTime: 2, fps: 24, droppedFrames: 10)
tracker.updateQoEObject(qoe: qoeInfo)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
- (void) updateQoEObject:(NSDictionary<NSString *,id> * _Nonnull)
```

### Example

```objectivec
NSDictionary *qoeInfo = [AEPMobileEdgeMedia createQoEObjectWith:50000 startTime:2 fps:24 droppedFrames:10]
[tracker updateQoEObject:qoeInfo];
```

## Media constants

### Media type

Defines the type of media that is currently being tracked. It can be either `MediaType.Video` or `MediaType.Audio`.

```java
public class Media {

  public enum MediaType {
      /**
      * Constant defining media type for Video streams
      */
      Video,

      /**
      * Constant defining media type for Audio streams
      */
      Audio
  }

}
```

### Example
### Android Java

```java
HashMap<String, Object> mediaInfo = Media.createMediaObject("videoName",
                                                            "videoId",
                                                            60,
                                                            MediaConstants.StreamType.VOD,
                                                            Media.MediaType.Video)
```

### Android Kotlin

```kotlin
val mediaInfo = Media.createMediaObject("videoName",
                                        "videoId",
                                        60,
                                        MediaConstants.StreamType.VOD,
                                        Media.MediaType.Video)
```

```swift
@objc(AEPEdgeMediaType)
public enum MediaType: Int, RawRepresentable {
 //Constant defining media type for Video streams
 case Audio
 //Constant defining media type for Audio streams
 case Video
}
```

### Example
### iOS Swift

```swift
var mediaObject = Media.createMediaObjectWith(name: "videoName",
                                                id: "videoId",
                                            length: 60,
                                        streamType: MediaConstants.StreamType.VOD,
                                        mediaType: MediaType.Video)
```

### iOS Objective-C

```objc
NSDictionary *mediaObject = [AEPMobileEdgeMedia createMediaObjectWith:@"videoName"
                                                               id:@"videoId"
                                                               length:60
                                                           streamType:AEPEdgeMediaStreamType.VOD
                                                            mediaType:AEPEdgeMediaTypeVideo];
```

### Stream type

Defines the type of streamed content that is currently being tracked. Use the available constants or custom defined stream type values.

```java
public class MediaConstants {

  public static final class StreamType {
      /**
      * Constant defining stream type for VOD streams
      */
      public static final String VOD = "vod";

      /**
      * Constant defining stream type for Live streams
      */
      public static final String LIVE = "live";

      /**
      * Constant defining stream type for Linear streams
      */
      public static final String LINEAR = "linear";

      /**
      * Constant defining stream type for Podcast streams
      */
      public static final String PODCAST = "podcast";

      /**
      * Constant defining stream type for Audiobook streams
      */
      public static final String AUDIOBOOK = "audiobook";

      /**
      * Constant defining stream type for AOD streams
      */
      public static final String AOD = "aod";
  }

}
```

### Example
### Android Java

```java
HashMap<String, Object> mediaInfo = Media.createMediaObject("videoName",
                                                            "videoId",
                                                            60,
                                                            MediaConstants.StreamType.VOD,
                                                            Media.MediaType.Video)
```

### Android Kotlin

```kotlin
val mediaInfo = Media.createMediaObject("videoName",
                                        "videoId",
                                        60,
                                        MediaConstants.StreamType.VOD,
                                        Media.MediaType.Video)
```

```swift
public class MediaConstants: NSObject {
  @objc(AEPEdgeMediaStreamType)
  public class StreamType: NSObject {
     // Constant defining stream type for VOD streams.
        public static let VOD = "vod"
     // Constant defining stream type for Live streams.
        public static let LIVE = "live"
     // Constant defining stream type for Linear streams.
        public static let LINEAR = "linear"
     // Constant defining stream type for Podcast streams.
        public static let PODCAST = "podcast"
     // Constant defining stream type for Audiobook streams.
        public static let AUDIOBOOK = "audiobook"
     // Constant defining stream type for AOD streams.
        public static let AOD = "aod"
    }
}
```

### Example
### iOS Swift

```swift
var mediaObject = Media.createMediaObjectWith(name: "videoName",
                                                id: "videoId",
                                            length: 60,
                                        streamType: MediaConstants.StreamType.VOD,
                                         mediaType: MediaType.Video)
```

### iOS Objective-C

```objc
NSDictionary *mediaObject = [AEPMobileEdgeMedia createMediaObjectWith:@"videoName"
                                                               id:@"videoId"
                                                           length:60
                                                       streamType:AEPEdgeMediaStreamType.VOD
                                                        mediaType:AEPEdgeMediaTypeVideo];
```

### Standard video constants

Defines the standard video constants used as keys when creating or modifying video metadata dictionaries. Use the available constant values or custom defined video metadata key values.

```java
public class MediaConstants {

  public static final class VideoMetadataKeys {
    public static final String AD_LOAD = "adLoad";
    public static final String ASSET_ID = "assetID";
    public static final String AUTHORIZED = "isAuthenticated";
    public static final String DAY_PART = "dayPart";
    public static final String EPISODE = "episode";
    public static final String FEED = "feed";
    public static final String FIRST_AIR_DATE = "firstAirDate";
    public static final String FIRST_DIGITAL_DATE = "firstDigitalDate";
    public static final String GENRE = "genre";
    public static final String MVPD = "mvpd";
    public static final String NETWORK = "network";
    public static final String ORIGINATOR = "originator";
    public static final String SEASON = "season";
    public static final String SHOW = "show";
    public static final String SHOW_TYPE = "showType";
    public static final String STREAM_FORMAT = "streamFormat";
    public static final String RATING = "rating";
  }

}
```

### Example
### Android Java

```java
HashMap<String, Object> mediaInfo = Media.createMediaObject("videoName",
                                                            "videoId",
                                                            60,
                                                            MediaConstants.StreamType.VOD,
                                                            Media.MediaType.Video)

HashMap<String, String> videoMetadata = new HashMap<String, String>();

// Standard Video Metadata
videoMetadata.put(MediaConstants.VideoMetadataKeys.SHOW, "Sample Show");
videoMetadata.put(MediaConstants.VideoMetadataKeys.SEASON, "Sample Season");

tracker.trackSessionStart(mediaInfo, videoMetadata);
```

### Android Kotlin

```kotlin
val mediaInfo = Media.createMediaObject("videoName",
                                        "videoId",
                                        60,
                                        MediaConstants.StreamType.VOD,
                                        Media.MediaType.Video)

val videoMetadata = mutableMapOf(MediaConstants.VideoMetadataKeys.SHOW to "Sample Show",
                                 MediaConstants.VideoMetadataKeys.SEASON to "Sample Season")

tracker.trackSessionStart(mediaInfo, videoMetadata)
```

```swift
public class MediaConstants: NSObject {
  @objc(AEPEdgeMediaVideoMetadataKeys)
  public class VideoMetadataKeys: NSObject {
        public static let AD_LOAD = "adLoad"
        public static let ASSET_ID = "assetID"
        public static let AUTHORIZED = "isAuthenticated"
        public static let DAY_PART = "dayPart"
        public static let EPISODE = "episode"
        public static let FEED = "feed"
        public static let FIRST_AIR_DATE = "firstAirDate"
        public static let FIRST_DIGITAL_DATE = "firstDigitalDate"
        public static let GENRE = "genre"
        public static let MVPD = "mvpd"
        public static let NETWORK = "network"
        public static let ORIGINATOR = "originator"
        public static let RATING = "rating"
        public static let SEASON = "season"
        public static let SHOW = "show"
        public static let SHOW_TYPE = "showType"
        public static let STREAM_FORMAT = "streamFormat"
    }
}
```

### Example
### iOS Swift

```swift
var mediaInfo = Media.createMediaObjectWith(name: "videoName", id: "videoId", length: 60, streamType: MediaConstants.StreamType.VOD, mediaType: MediaType.Video)

var videoMetadata: [String: String] = [:]
// Standard Video Metadata
videoMetadata[MediaConstants.VideoMetadataKeys.SHOW] = "Sample Show"
videoMetadata[MediaConstants.VideoMetadataKeys.SEASON] = "Sample Season"

tracker.trackSessionStart(info: mediaInfo, metadata: videoMetadata)
```

### iOS Objective-C

```objc
NSDictionary *mediaInfo = [AEPMobileEdgeMedia createMediaObjectWith:@"videoName" id:@"videoId" length:60 streamType:AEPEdgeMediaStreamType.VOD mediaType:AEPEdgeMediaTypeVideo];

NSMutableDictionary *videoMetadata = [[NSMutableDictionary alloc] init];
// Standard Video Metadata
[videoMetadata setObject:@"Sample Show" forKey:AEPEdgeMediaVideoMetadataKeys.SHOW];
[videoMetadata setObject:@"Sample Season" forKey:AEPEdgeMediaVideoMetadataKeys.SEASON];

[tracker trackSessionStart:mediaInfo metadata:videoMetadata];
```

### Standard audio constants

Defines the standard audio constants used as keys when creating or modifying audio metadata dictionaries. Use the available constant values or custom defined audio metadata key values.

```java
public class MediaConstants {

  public static final class AudioMetadataKeys {
    public static final String ALBUM = "album";
    public static final String ARTIST = "artist";
    public static final String AUTHOR = "author";
    public static final String LABEL = "label";
    public static final String PUBLISHER = "publisher";
    public static final String STATION = "station";
  }

}
```

### Example
### Android Java

```java
HashMap<String, Object> mediaInfo = Media.createMediaObject("videoName",
                                                            "videoId",
                                                            60,
                                                            MediaConstants.StreamType.AOD,
                                                            Media.MediaType.Audio)

HashMap<String, String> audioMetadata = new HashMap<String, String>();

// Standard Video Metadata
audioMetadata.put(MediaConstants.AudioMetadataKeys.ARTIST, "Sample Artist");
audioMetadata.put(MediaConstants.AudioMetadataKeys.ALBUM, "Sample Album");

tracker.trackSessionStart(mediaInfo, audioMetadata);
```

### Android Kotlin

```kotlin
val mediaInfo = Media.createMediaObject("videoName",
                                        "videoId",
                                        60,
                                        MediaConstants.StreamType.AOD,
                                        Media.MediaType.Audio)

val audioMetadata = mutableMapOf(MediaConstants.AudioMetadataKeys.ARTIST to "Sample Artist",
                                 MediaConstants.AudioMetadataKeys.ALBUM to "Sample Album")

tracker.trackSessionStart(mediaInfo, audioMetadata)
```

```swift
public class MediaConstants: NSObject {
  @objc(AEPEdgeMediaAudioMetadataKeys)
  public class AudioMetadataKeys: NSObject {
      public static let ALBUM = "album"
      public static let ARTIST = "artist"
      public static let AUTHOR = "author"
      public static let LABEL = "label"
      public static let PUBLISHER = "publisher"
      public static let STATION = "station"
    }
}
```

### Example
### iOS Swift

```swift
var audioObject = Media.createMediaObjectWith(name: "audioName", id: "audioId", length: 30, streamType: MediaConstants.StreamType.AOD, mediaType: MediaType.AUDIO)

var audioMetadata: [String: String] = [:]
// Standard Audio Metadata
audioMetadata[MediaConstants.AudioMetadataKeys.ARTIST] = "Sample Artist"
audioMetadata[MediaConstants.AudioMetadataKeys.ALBUM] = "Sample Album"

tracker.trackSessionStart(info: audioObject, metadata: audioMetadata)
```

### iOS Objective-C

```objc
NSDictionary *audioObject = [AEPMobileEdgeMedia createMediaObjectWith:@"audioName" id:@"audioid" length:30 streamType:AEPEdgeMediaStreamType.AOD mediaType:AEPEdgeMediaTypeAudio];

NSMutableDictionary *audioMetadata = [[NSMutableDictionary alloc] init];
// Standard Audio Metadata
[audioMetadata setObject:@"Sample Artist" forKey:AEPEdgeMediaAudioMetadataKeys.ARTIST];
[audioMetadata setObject:@"Sample Album" forKey:AEPEdgeMediaAudioMetadataKeys.ALBUM];

[tracker trackSessionStart:audioObject metadata:audioMetadata];
```

### Standard ad constants

Defines the standard metadata keys for ads.

```java
public class MediaConstants {

  public static final class AdMetadataKeys {
    public static final String ADVERTISER = "advertiser";
    public static final String CAMPAIGN_ID = "campaignID";
    public static final String CREATIVE_ID = "creativeID";
    public static final String CREATIVE_URL = "creativeURL";
    public static final String PLACEMENT_ID = "placementID";
    public static final String SITE_ID = "siteID";
  }

}
```

### Example
### Android Java

```java
HashMap<String, Object> adInfo = Media.createAdObject("adName", "adId", 1, 15);

HashMap<String, String> adMetadata = new HashMap<String, String>();

// Standard Video Metadata
adMetadata.put(MediaConstants.AdMetadataKeys.ADVERTISER, "Sample Advertiser");
adMetadata.put(MediaConstants.AdMetadataKeys.CAMPAIGN_ID, "Sample Campaign");

tracker.trackEvent(Media.Event.AdStart, adInfo, adMetadata);
```

### Android Kotlin

```java
val adInfo = Media.createAdObject("adName", "adId", 1, 15)
val adMetadata = mutableMapOf(MediaConstants.AdMetadataKeys.ADVERTISER to "Sample Advertiser",
                              MediaConstants.AdMetadataKeys.CAMPAIGN_ID to "Sample Campaign")

tracker.trackEvent(Media.Event.AdStart, adInfo, adMetadata)
```

```swift
public class MediaConstants: NSObject {
  @objc(AEPEdgeAdMetadataKeys)
  public class AdMetadataKeys: NSObject {
      public static let ADVERTISER = "advertiser"
      public static let CAMPAIGN_ID = "campaignID"
      public static let CREATIVE_ID = "creativeID"
      public static let CREATIVE_URL = "creativeURL"
      public static let PLACEMENT_ID = "placementID"
      public static let SITE_ID = "siteID"
    }
}
```

### Example
### iOS Swift

```swift
let adInfo = Media.createObjectWith(name: "adName", id: "adId", position: 0, length: 30)
var adMetadata: [String: String] = [:]
// Standard Ad Metadata
adMetadata[MediaConstants.AdMetadataKeys.ADVERTISER] = "Sample Advertiser"
adMetadata[MediaConstants.AdMetadataKeys.CAMPAIGN_ID] = "Sample Campaign"

tracker.trackEvent(event: MediaEvent.AdStart, info: adInfo, metadata: adMetadata)
```

### iOS Objective-C

```objc
NSDictionary *adInfo = [AEPMobileEdgeMedia createAdObjectWith:@"adName" id:@"adId" position:0 length:30];

NSMutableDictionary *adMetadata = [[NSMutableDictionary alloc] init];
// Standard Ad Metadata
[adMetadata setObject:@"Sample Advertiser" forKey:AEPEdgeAdMetadataKeys.ADVERTISER];
[adMetadata setObject:@"Sample Campaign" forKey:AEPEdgeAdMetadataKeys.CAMPAIGN_ID];

[tracker trackEvent:AEPEdgeMediaEventAdStart info:adInfo metadata:adMetadata];
```

### Player state constants

Defines the state of the media player that is currently being tracked. Use the available constant values or custom defined player state values.

```java
public class MediaConstants {

  public static final class PlayerState {
    public static final String FULLSCREEN = "fullscreen";
    public static final String PICTURE_IN_PICTURE = "pictureInPicture";
    public static final String CLOSED_CAPTION = "closeCaption";
    public static final String IN_FOCUS = "inFocus";
    public static final String MUTE = "mute";
  }

}
```

### Example
### Android Java

```java
HashMap<String, Object> fullScreenState = Media.createStateObject(MediaConstants.PlayerState.FULLSCREEN);
```

### Android Kotlin

```java
val fullScreenState = Media.createStateObject(MediaConstants.PlayerState.FULLSCREEN)
```

```swift
public class MediaConstants: NSObject {
  @objc(AEPEdgeMediaPlayerState)
  public class PlayerState: NSObject {
        public static let FULLSCREEN = "fullscreen"
        public static let PICTURE_IN_PICTURE = "pictureInPicture"
        public static let CLOSED_CAPTION = "closeCaption"
        public static let IN_FOCUS = "inFocus"
        public static let MUTE = "mute"
    }
}
```

### Example
### iOS Swift

```swift
let inFocusState = Media.createStateObjectWith(stateName: MediaConstants.PlayerState.IN_FOCUS)
tracker.trackEvent(event: MediaEvent.StateStart, info: inFocusState, metadata: nil)
```

### iOS Objective-C

```objc
NSDictionary* inFocusState = [AEPMobileEdgeMedia createStateObjectWith:AEPEdgeMediaPlayerState.IN_FOCUS];
[tracker trackEvent:AEPEdgeMediaEventStateStart info:muteState metadata:nil];
```

### Media events

Defines the media event that is currently being tracked. Only the available constant values are allowed.

```java
public class Media {

    /**
    * These enumeration values define the type of a tracking event
    */
    public enum Event {
      /**
      * Constant defining event type for AdBreak start
      */
      AdBreakStart,

      /**
      * Constant defining event type for AdBreak complete
      */
      AdBreakComplete,

      /**
      * Constant defining event type for Ad start
      */
      AdStart,

      /**
      * Constant defining event type for Ad complete
      */
      AdComplete,

      /**
      * Constant defining event type for Ad skip
      */
      AdSkip,

      /**
      * Constant defining event type for Chapter start
      */
      ChapterStart,

      /**
      * Constant defining event type for Chapter complete
      */
      ChapterComplete,

      /**
      * Constant defining event type for Chapter skip
      */
      ChapterSkip,

      /**
      * Constant defining event type for Seek start
      */
      SeekStart,

      /**
      * Constant defining event type for Seek complete
      */
      SeekComplete,

      /**
      * Constant defining event type for Buffer start
      */
      BufferStart,

      /**
      * Constant defining event type for Buffer complete
      */
      BufferComplete,

      /**
      * Constant defining event type for change in Bitrate
      */
      BitrateChange,

      /**
      * Constant defining event type for State start
      */
      StateStart,

      /**
      * Constant defining event type for State end
      */
      StateEnd
  }

}
```

**Examples**
### Android Java

```java
tracker.trackEvent(Media.Event.BitrateChange, null, null);
```

### Android Kotlin

```java
tracker.trackEvent(Media.Event.BitrateChange, null, null)
```

```swift
@objc(AEPEdgeMediaEvent)
public enum MediaEvent: Int, RawRepresentable {
 // event type for AdBreak start
    case AdBreakStart
 // event type for AdBreak Complete
    case AdBreakComplete
 // event type for Ad Start
    case AdStart
 // event type for Ad Complete
    case AdComplete
 // event type for Ad Skip
    case AdSkip
 // event type for Chapter Start
    case ChapterStart
 // event type for Chapter Complete
    case ChapterComplete
 // event type for Chapter Skip
    case ChapterSkip
 // event type for Seek Start
    case SeekStart
 // event type for Seek Complete
    case SeekComplete
 // event type for Buffer Start
    case BufferStart
 // event type for Buffer Complete
    case BufferComplete
 // event type for change in Bitrate
    case BitrateChange
 // event type for Player State Start
    case StateStart
 // event type for Player State End
    case StateEnd
}
```

### Example
### iOS Swift

```swift
tracker.trackEvent(event: MediaEvent.BitrateChange, info: nil, metadata: nil)
```

### iOS Objective-C

```objc
[tracker trackEvent:AEPEdgeMediaEventBitrateChange info:nil metadata:nil];
```

### Media resume

Constant to denote that the current tracking session is resuming a previously closed session. This information **must** be provided when starting a tracking session.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

### Syntax

```java
public class MediaConstants {

  public static final class MediaObjectKey {
      /**
      * Constant defining explicit media resumed property. Set this to true on MediaObject if resuming a previously closed session.
      */
      public static final String RESUMED;
  }

}
```

### Example

### Android Java

```java
HashMap<String, Object> mediaInfo = Media.createMediaObject("mediaName", "mediaId", 60, MediaConstants.StreamType.VOD, Media.MediaType.Video);

// Attach media resumed information.
mediaInfo.put(MediaConstants.MediaObjectKey.RESUMED, true);

tracker.trackSessionStart(mediaInfo, null);
```

### Android Kotlin

```java
val mediaInfo = Media.createMediaObject("mediaName", "mediaId", 60, MediaConstants.StreamType.VOD, Media.MediaType.Video)

// Attach media resumed information.
mediaInfo[MediaConstants.MediaObjectKey.RESUMED] = true

tracker.trackSessionStart(mediaInfo, null)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public class MediaConstants: NSObject {
 @objc(AEPEdgeMediaObjectKey)
 public class MediaObjectKey: NSObject {
        public static let RESUMED = "media.resumed"
    }
}
```

### Example

```swift
var mediaObject = Media.createMediaObjectWith(name: "videoName", id: "videoId", length: 60, streamType: MediaConstants.StreamType.VOD, mediaType: MediaType.Video)
mediaObject[MediaConstants.MediaObjectKey.RESUMED] = true

tracker.trackSessionStart(info: mediaObject, metadata: nil)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
@interface AEPEdgeMediaObjectKey : NSObject
+ (NSString * _Nonnull)RESUMED
```

### Example

```objectivec
NSDictionary *mediaObject = [AEPMobileEdgeMedia createMediaObjectWith:@"videoName" id:@"videoId" length:60 streamType:AEPEdgeMediaStreamType.VOD mediaType:AEPEdgeMediaTypeVideo];

// Attach media resumed information.
NSMutableDictionary *obj  = [mediaObject mutableCopy];
[obj setObject:@YES forKey:AEPEdgeMediaObjectKey.RESUMED];

[tracker trackSessionStart:obj metadata:nil];
```

