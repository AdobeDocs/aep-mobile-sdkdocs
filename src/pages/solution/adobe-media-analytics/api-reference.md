---
title: Adobe Analytics for Media API reference
description: An API reference for the Adobe Analytics for Media mobile extension.
keywords:
- Adobe Analytics for Media
- API reference
---

# API reference

## Media API reference

### extensionVersion

The `extensionVersion()` API returns the version of the Media extension that is registered with the Mobile Core extension.

To get the version of the Media extension, use the following code sample:

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static String extensionVersion() {
```

#### Example

```java
String mediaExtensionVersion = Media.extensionVersion();
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val mediaExtensionVersion = Media.extensionVersion()
```

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static var extensionVersion: String
```

#### Example

```swift
let mediaExtensionVersion  = Media.extensionVersion()
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (nonnull NSString*) extensionVersion;
```

#### Example

```objectivec
NSString *mediaExtensionVersion = [AEPMobileMedia extensionVersion];
```

### registerExtension

<InlineAlert variant="warning" slots="text1, text2"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../../../home/base/mobile-core/api-reference.md#registerextensions) API instead.

Registers the Media extension with the Mobile Core SDK.

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void registerExtension()
```

#### Example

```java
Media.registerExtension();
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
Media.registerExtension()
```

### createTracker

Creates a media tracker instance that tracks the playback session. The tracker created should be used to track the streaming content and it sends periodic pings to the media analytics backend.

The createTracker function returns the instance of MediaTracker for tracking a media session. The createTracker function with callback as a parameter has been deprecated.

If MobileCore.resetIdentities() is called in the implementation, the existing tracker will stop sending pings. You will need to create a new tracker to generate a new media session.

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static MediaTracker createTracker()
```

#### Example

```java
MediaTracker mediaTracker = Media.createTracker();  // Use the instance for tracking media.
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val tracker = Media.createTracker()
```

Creates a media tracker instance that tracks the playback session. The tracker created should be used to track the streaming content and it sends periodic pings to the media analytics backend.

If MobileCore.resetIdentities() is called in the implementation, the existing tracker will stop sending pings. You will need to create a new tracker to generate a new media session.

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func createTracker()
```

#### Example

```swift
let tracker = Media.createTracker()  // Use the instance for tracking media.
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) createTracker
```

#### Example

```objc
id<AEPMediaTracker> tracker; 
_tracker = [AEPMobileMedia createTracker];  // Use the instance for tracking media.
```

### createTrackerWithConfig

Creates a media tracker instance based on the configuration to track the playback session.

| Key | Description | Value | Required |
| :--- | :--- | :--- | :---: |
| `config.channel` | Channel name for media. Set this to overwrite the channel name configured from launch for media tracked with this tracker instance. | String | No |
| `config.downloadedcontent` | Creates a tracker instance to track downloaded media. Instead of sending periodic pings, the tracker only sends one ping for the entire content. | Boolean | No |

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static MediaTracker createTracker(Map<String, Object> config)
```

#### Example

```java
HashMap<String, Object> config = new HashMap<String, Object>();
config.put(MediaConstants.Config.CHANNEL, "custom-channel");  // Override channel configured in the Data Collection UI
config.put(MediaConstants.Config.DOWNLOADED_CONTENT, true);   // Creates downloaded content tracker
MediaTracker mediaTracker = Media.createTracker(config);  // Use the instance for tracking media.
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val config = mapOf(
                MediaConstants.Config.CHANNEL to "custom-channel",
                MediaConstants.Config.DOWNLOADED_CONTENT to true
            )
val mediaTracker = Media.createTracker(config) // Use the instance for tracking media.
```

Creates a media tracker instance based on the configuration to track the playback session.

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func createTrackerWith(config: [String: Any]?)
```

#### Example

```swift
var config: [String: Any] = [:]
config[MediaConstants.TrackerConfig.CHANNEL] = "custom-channel" // Overrides channel configured in the Data Collection UI
config[MediaConstants.TrackerConfig.DOWNLOADED_CONTENT] = true    // Creates downloaded content tracker

let tracker = Media.createTrackerWith(config: config)
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+(id<AEPMediaTracker> _Nonnull) createTrackerWithConfig:(NSDictionary<NSString *,id> * _Nullable)
```

#### Example

```objectivec
id<AEPMediaTracker> _tracker; 
NSMutableDictionary* config = [NSMutableDictionary dictionary];

config[AEPMediaTrackerConfig.CHANNEL] = @"custom-channel"; // Overrides channel configured in the Data Collection UI
config[AEPMediaTrackerConfig.DOWNLOADED_CONTENT] = [NSNumber numberWithBool:true]; // Creates downloaded content tracker

_tracker = [AEPMobileMedia createTrackerWithConfig:config];
```

### createMediaObject

Creates an instance of the Media object.

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `name` | Media name | Yes |
| `mediaId` | Media unique identifier | Yes |
| `length` | Media length | Yes |
| `streamType` | [Stream type](#stream-type) | Yes |
| `mediaType` | [Media type](#media-type) | Yes |

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static HashMap<String, Object> createMediaObject(String name,
                                                        String mediaId,
                                                        Double length,
                                                        String streamType,
                                                        MediaType mediaType);
```

#### Example

```java
HashMap<String, Object> mediaInfo = Media.createMediaObject("video-name",
                                                            "video-id",
                                                            60D,
                                                            MediaConstants.StreamType.VOD,
                                                            Media.MediaType.Video);
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
var mediaInfo = Media.createMediaObject("video-name",
                                        "video-id",
                                        60D,
                                        MediaConstants.StreamType.VOD,
                                        Media.MediaType.Video)
```

Returns a map that contains information about the media.

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func createMediaObjectWith(name: String, 
                                    id: String, 
                                length: Double, 
                            streamType: String,
                             mediaType: MediaType) -> [String: Any]?
```

#### Example

```swift
let mediaObject = Media.createMediaObjectWith(name: "video-name",
                                                id: "videoId", 
                                            length: 60,
                                        streamType: MediaConstants.StreamType.VOD, 
                                         mediaType: MediaType.Video)
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (NSDictionary<NSString *, id> * _Nullable) createMediaObjectWith:(NSString * _Nonnull) id:(NSString * _Nonnull) length:(double) streamType:(NSString * _Nonnull) mediaType:(enum AEPMediaType)
```

#### Example

```objectivec
NSDictionary *mediaObject = [AEPMobileMedia createMediaObjectWith:@"video-name"
                                                                id:@"video-id" 
                                                            length:60 
                                                        streamType:AEPMediaStreamType.VOD
                                                         mediaType:AEPMediaTypeVideo];
```

### createAdBreakObject

Creates an instance of the AdBreak object.

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `name` | Ad break name such as pre-roll, mid-roll, and post-roll. | Yes |
| `position` | The number position of the ad break within the content, starting with 1. | Yes |
| `startTime` | Playhead value at the start of the ad break. | Yes |

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static HashMap<String, Object> createAdBreakObject(String name, Long position, Double startTime);
```

#### Example

```java
HashMap<String, Object> adBreakObject = Media.createAdBreakObject("adbreak-name", 1L, 0D);
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val adBreakObject = Media.createAdBreakObject("adbreak-name", 1L, 0D)
```

Returns a map that contains information about the ad break.

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func createAdBreakObjectWith(name: String,
                                position: Int, 
                                startTime: Double) -> [String: Any]?
```

#### Example

```swift
let adBreakObject = Media.createAdBreakObjectWith(name: "adbreak-name", 
                                              position: 1, 
                                             startTime: 0)
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createAdBreakObjectWith:(NSString * _Nonnull)position:(NSInteger) startTime:(double)
```

#### Example

```objectivec
NSDictionary *adBreakObject = [AEPMobileMedia createAdBreakObjectWith:@"adbreak-name" 
                                                             position:1 
                                                            startTime:0];
```

### createAdObject

Creates an instance of the Ad object.

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `name` | Friendly name of the ad. | Yes |
| `adId` | Unique identifier for the ad. | Yes |
| `position` | The number position of the ad within the ad break, starting with 1. | Yes |
| `length` | Ad length | Yes |

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static HashMap<String, Object> createAdObject(String name, String adId, Long position, Double length);
```

#### Example

```java
HashMap<String, Object> adInfo = Media.createAdObject("ad-name", "ad-id", 1L, 15D);
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val adInfo = Media.createAdObject("ad-name", "ad-id", 1L, 15D)
```

Returns a map that contains information about the ad.

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func createAdObjectWith(name: String, 
                                 id: String, 
                           position: Int, 
                             length: Double) -> [String: Any]?
```

#### Example

```swift
let adObject = Media.createObjectWith(name: "ad-name", 
                                        id: "ad-id", 
                                  position: 0, 
                                    length: 30)
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createAdObjectWith: (NSString * _Nonnull
                                                               id:(NSString * _Nonnull) 
                                                         position:(NSInteger) 
                                                           length:(double)
```

#### Example

```objectivec
NSDictionary *adObject = [AEPMobileMedia createAdObjectWith:@"ad-name" 
                                                         id:@"ad-id" 
                                                   position:0 
                                                     length:30];
```

### createChapterObject

Creates an instance of the Chapter object.

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `name` | Chapter name | Yes |
| `position` | The number position of the chapter within the content, starting with 1. | Yes |
| `length` | Chapter length | Yes |
| `startTime` | Playhead value at the start of the chapter | Yes |

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static HashMap<String, Object> createChapterObject(String name,
                                                          Long position,
                                                          Double length,
                                                          Double startTime);
```

#### Example

```java
HashMap<String, Object> chapterInfo = Media.createChapterObject("chapter-name", 1L, 60D, 0D);
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val chapterInfo = Media.createChapterObject("chapter-name", 1L, 60D, 0D)
```

Returns a map that contains information about the chapter.

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func createChapterObjectWith(name: String, 
                                position: Int, 
                                  length: Double, 
                               startTime: Double) -> [String: Any]?
```

#### Example

```swift
let chapterObject = Media.createChapterObjectWith(name: "chapter_name", 
                                              position: 1, 
                                                length: 60, 
                                             startTime: 0)
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createChapterObjectWith:(NSString * _Nonnull)
                                                              position:(NSInteger) 
                                                                length:(double) 
                                                             startTime:(double)
```

#### Example

```objectivc
NSDictionary *chapterObject = [AEPMobileMedia createChapterObjectWith:@"chapter_name" 
                                                             position:1 
                                                               length:60 
                                                            startTime:0];
```

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

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static HashMap<String, Object> createQoEObject(Long bitrate,
                                                      Double startupTime,
                                                      Double fps,
                                                      Long droppedFrames);
```

#### Example

```java
HashMap<String, Object> qoeInfo = Media.createQoEObject(10000000L, 2D, 23D, 10D);
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val qoeInfo = Media.createQoEObject(10000000L, 2D, 23D, 10D)
```

Returns a map that contains information about the quality of experience.

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func createQoEObjectWith(bitrate: Double, 
                            startupTime: Double, 
                                    fps: Double, 
                          droppedFrames: Double) -> [String: Any]?
```

#### Example

```swift
let qoeObject = Media.createQoEObjectWith(bitrate: 500000, 
                                      startupTime: 2, 
                                              fps: 24, 
                                    droppedFrames: 10)
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createQoEObjectWith:(double) 
                                                         startTime:(double) 
                                                               fps:(double) 
                                                     droppedFrames:(double)
```

#### Example

```objectivec
NSDictionary *qoeObject = [AEPMobileMedia createQoEObjectWith:500000 
                                                    startTime:2 
                                                          fps:24 
                                                droppedFrames:10];
```

### createStateObject

Creates an instance of the Player State object.

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `name` | State name(Use [Player State constants](#player-state-constants) to track standard player states) | Yes |

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static HashMap<String, Object> createStateObject(String stateName);
```

#### Example

```java
HashMap<String, Object> playerStateInfo = Media.createStateObject("fullscreen");
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val playerStateInfo = Media.createStateObject("fullscreen")
```

Returns a map that contains information about the player state.

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func createStateObjectWith(stateName: String) -> [String: Any]
```

#### Example

```swift
let fullScreenState = Media.createStateObjectWith(stateName: "fullscreen")
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createStateObjectWith:(NSString * _Nonnull)
```

#### Example

```objectivec
NSDictionary* fullScreenState = [AEPMobileMedia createStateObjectWith:AEPMediaPlayerState.FULLSCREEN]
```

## Media tracker API reference

### trackSessionStart

Tracks the intention to start playback. This starts a tracking session on the media tracker instance. To learn how to resume a previously closed session, please read the [media resume guide](#media-resume)

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `mediaInfo` | Media information created using the [createMediaObject](#createmediaobject) method. | Yes |
| `contextData` | Media context data. For standard metadata keys, use [standard video constants](#standard-video-constants) or [standard audio constants](#standard-audio-constants). | No |

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public void trackSessionStart(Map<String, Object> mediaInfo, Map<String, String> contextData);
```

#### Example

```java
HashMap<String, Object> mediaObject = Media.createMediaObject("media-name", "media-id", 60D, MediaConstants.StreamType.VOD, Media.MediaType.Video);

HashMap<String, String> mediaMetadata = new HashMap<String, String>();
// Standard metadata keys provided by adobe.
mediaMetadata.put(MediaConstants.VideoMetadataKeys.EPISODE, "Sample Episode");
mediaMetadata.put(MediaConstants.VideoMetadataKeys.SHOW, "Sample Show");

// Custom metadata keys
mediaMetadata.put("isUserLoggedIn", "false");
mediaMetadata.put("tvStation", "Sample TV Station");

_tracker.trackSessionStart(mediaInfo, mediaMetadata);
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val mediaObject = Media.createMediaObject(
                        "media-name",
                        "media-id",
                        60.0,
                        MediaConstants.StreamType.VOD,
                        Media.MediaType.Video
                    )

val mediaMetadata = HashMap<String, String>()
// Standard metadata keys provided by adobe.
mediaMetadata[MediaConstants.VideoMetadataKeys.EPISODE] = "Sample Episode" 
mediaMetadata[MediaConstants.VideoMetadataKeys.SHOW] = "Sample Show"
// Custom metadata keys
mediaMetadata["isUserLoggedIn"] = "false"
mediaMetadata["tvStation"] = "Sample TV Station"

tracker.trackSessionStart(mediaInfo, mediaMetadata)
```

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
public func trackSessionStart(info: [String: Any], metadata: [String: String]? = nil)
```

#### Example

```swift
let mediaObject = Media.createMediaObjectWith(name: "video-name", id: "videoId", length: 60, streamType: MediaConstants.StreamType.VOD, mediaType: MediaType.Video)

var videoMetadata: [String: String] = [:]
// Sample implementation for using video standard metadata keys
videoMetadata[MediaConstants.VideoMetadataKeys.SHOW] = "Sample show"
videoMetadata[MediaConstants.VideoMetadataKeys.SEASON] = "Sample season"

// Sample implementation for using custom metadata keys
videoMetadata["isUserLoggedIn"] = "false"
videoMetadata["tvStation"] = "Sample TV station"

tracker.trackSessionStart(info: mediaObject, metadata: videoMetadata)
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) trackSessionStart:(NSDictionary<NSString *,id> * _Nonnull) metadata:(NSDictionary<NSString *,NSString *> * _Nullable)
```

#### Example

```objectivec
NSDictionary *mediaObject = [AEPMobileMedia createMediaObjectWith:@"video-name" id:@"video-id" length:60 streamType:AEPMediaStreamType.VOD mediaType:AEPMediaTypeVideo];

NSMutableDictionary *videoMetadata = [[NSMutableDictionary alloc] init];
// Sample implementation for using standard video metadata keys
[videoMetadata setObject:@"Sample show" forKey:AEPVideoMetadataKeys.SHOW];
[videoMetadata setObject:@"Sample Season" forKey:AEPVideoMetadataKeys.SEASON];

// Sample implementation for using custom metadata keys
[videoMetadata setObject:@"false" forKey:@"isUserLoggedIn"];
[videoMetadata setObject:@"Sample TV station" forKey:@"tvStation"];

[_tracker trackSessionStart:mediaObject metadata:videoMetadata];
```

### trackPlay

Tracks the media play, or resume, after a previous pause.

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public void trackPlay();
```

#### Example

```java
tracker.trackPlay();
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
tracker.trackPlay();
```

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
func trackPlay()
```

#### Example

```swift
tracker.trackPlay()
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
- (void) trackPlay;
```

#### Example

```objectivec
[_tracker trackPlay];
```

### trackPause

Tracks the media pause.

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public void trackPause();
```

#### Example

```java
tracker.trackPause();
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
tracker.trackPause();
```

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
func trackPause()
```

#### Example

```swift
tracker.trackPause()
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
- (void) trackPause
```

#### Example

```objectivec
[_tracker trackPause];
```

### trackComplete

Tracks media complete. Call this method only when the media has been completely viewed.

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public void trackComplete();
```

#### Example

```java
tracker.trackComplete();
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
tracker.trackComplete();
```

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
func trackComplete()
```

#### Example

```swift
tracker.trackComplete()
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
- (void) trackComplete
```

#### Example

```objectivec
[_tracker trackComplete];
```

### trackSessionEnd

Tracks the end of a viewing session. Call this method even if the user does not view the media to completion.

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public void trackSessionEnd();
```

#### Example

```java
tracker.trackSessionEnd();
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
tracker.trackSessionEnd();
```

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
func trackSessionEnd()
```

#### Example

```swift
tracker.trackSessionEnd()
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
- (void) trackSessionEnd
```

#### Example

```objectivec
[_tracker trackSessionEnd];
```

### trackError

Tracks an error in media playback.

| Variable Name | Description | Required |
| :--- | :--- | :---: |
| `errorId` | Error Information | Yes |

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public void trackError(String errorId);
```

#### Example

```java
tracker.trackError("errorId");
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
tracker.trackError("errorId");
```

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
func trackError(errorId: String)
```

#### Example

```swift
tracker.trackError(errorId: "errorId")
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
- (void) trackError:(NSString * _Nonnull)
```

#### Example

```objectivec
[_tracker trackError:@"errorId"];
```

### trackEvent

Tracks media events.

| Variable Name | Description |
| :--- | :--- |
| `event` | [Media event](#media-events) |
| `info` | For an `AdBreakStart` event, the `adBreak` information is created by using the [createAdBreakObject](#createadbreakobject) method.   For an `AdStart` event, the Ad information is created by using the [createAdObject](#createadobject) method.   For `ChapterStart` event, the Chapter information is created by using the [createChapterObject](#createchapterobject) method.  For `StateStart` and `StateEnd` event, the State information is created by using the [createStateObject](#createstateobject) method. |
| `data` | Optional context data can be provided for `AdStart` and `ChapterStart` events. This is not required for other events. |

#### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

```java
  public void trackEvent(Media.Event event,
                         Map<String, Object> info,
                         Map<String, String> data);
```

**Examples**

**Tracking player states**

```java
// StateStart
  HashMap<String, Object> stateObject = Media.createStateObject("fullscreen");
  _tracker.trackEvent(Media.Event.StateStart, stateObject, null);

// StateEnd
  HashMap<String, Object> stateObject = Media.createStateObject("fullscreen");
  _tracker.trackEvent(Media.Event.StateEnd, stateObject, null);
```

**Tracking ad breaks**

```java
// AdBreakStart
  HashMap<String, Object> adBreakObject = Media.createAdBreakObject("adbreak-name", 1L, 0D);
  _tracker.trackEvent(Media.Event.AdBreakStart, adBreakObject, null);

// AdBreakComplete
  _tracker.trackEvent(Media.Event.AdBreakComplete, null, null);
```

**Tracking ads**

```java
// AdStart
  HashMap<String, Object> adObject = Media.createAdObject("ad-name", "ad-id", 1L, 15D);

  HashMap<String, String> adMetadata = new HashMap<String, String>();
  // Standard metadata keys provided by adobe.
  adMetadata.put(MediaConstants.AdMetadataKeys.ADVERTISER, "Sample Advertiser");
  adMetadata.put(MediaConstants.AdMetadataKeys.CAMPAIGN_ID, "Sample Campaign");
  // Custom metadata keys
  adMetadata.put("affiliate", "Sample affiliate");

  _tracker.trackEvent(Media.Event.AdStart, adObject, adMetadata);

// AdComplete
  _tracker.trackEvent(Media.Event.AdComplete, null, null);

// AdSkip
  _tracker.trackEvent(Media.Event.AdSkip, null, null);
```

**Tracking chapters**

```java
// ChapterStart
  HashMap<String, Object> chapterObject = Media.createChapterObject("chapter-name", 1L, 60D, 0D);

  HashMap<String, String> chapterMetadata = new HashMap<String, String>();
  chapterMetadata.put("segmentType", "Sample segment type");

  _tracker.trackEvent(Media.Event.ChapterStart, chapterDataInfo, chapterMetadata);

// ChapterComplete
  _tracker.trackEvent(Media.Event.ChapterComplete, null, null);

// ChapterSkip
  _tracker.trackEvent(Media.Event.ChapterSkip, null, null);
```

**Tracking playback events**

```java
// BufferStart
  _tracker.trackEvent(Media.Event.BufferStart, null, null);

// BufferComplete
  _tracker.trackEvent(Media.Event.BufferComplete, null, null);

// SeekStart
  _tracker.trackEvent(Media.Event.SeekStart, null, null);

// SeekComplete
  _tracker.trackEvent(Media.Event.SeekComplete, null, null);
```

**Tracking bitrate changes**

```java
// If the new bitrate value is available provide it to the tracker.
  HashMap<String, Object> qoeObject = Media.createQoEObject(2000000L, 2D, 25D, 10D);
  _tracker.updateQoEObject(qoeObject);

// Bitrate change
  _tracker.trackEvent(Media.Event.BitrateChange, null, null);
```

#### Android Kotlin

**Examples**

**Tracking player states**

```java
// StateStart
    val stateObject = Media.createStateObject("fullscreen")
    tracker.trackEvent(Media.Event.StateStart, stateObject, null)

// StateEnd
    val stateObject = Media.createStateObject("fullscreen")
    tracker.trackEvent(Media.Event.StateEnd, stateObject, null)`
```

**Tracking ad breaks**

```java
// AdBreakStart
    val adBreakObject = Media.createAdBreakObject("adbreak-name", 1L, 0.0)
    tracker.trackEvent(Media.Event.AdBreakStart, adBreakObject, null)

// AdBreakComplete
    tracker.trackEvent(Media.Event.AdBreakComplete, null, null)
```

**Tracking ads**

```java
//AdStart
    val adObject = Media.createAdObject("ad-name", "ad-id", 1L, 15.0)

    val adMetadata = HashMap<String, String>()
    // Standard metadata keys provided by adobe.
    adMetadata[MediaConstants.AdMetadataKeys.ADVERTISER] = "Sample Advertiser"
    adMetadata[MediaConstants.AdMetadataKeys.CAMPAIGN_ID] = "Sample Campaign"
    // Custom metadata keys
    adMetadata["affiliate"] = "Sample affiliate"        
    tracker.trackEvent(Media.Event.AdStart, adObject, adMetadata)

// AdComplete
    tracker.trackEvent(Media.Event.AdComplete, null, null)

// AdSkip
    tracker.trackEvent(Media.Event.AdSkip, null, null)
```

**Tracking chapters**

```java
// ChapterStart
  val chapterObject = Media.createChapterObject("chapter-name", 1L, 60.0, 0.0)

  val chapterMetadata = HashMap<String, String>()
  chapterMetadata["segmentType"] = "Sample segment type"

  tracker.trackEvent(Media.Event.ChapterStart, chapterObject, chapterMetadata)

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
  val qoeObject = Media.createQoEObject(2000000L, 2D, 25D, 10D)
  tracker.updateQoEObject(qoeObject)

// Bitrate change
  tracker.trackEvent(Media.Event.BitrateChange, null, null)
```

#### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

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
  let adBreakObject = Media.createAdBreakObjectWith(name: "adbreak-name", position: 1, startTime: 0)
  tracker.trackEvent(event: MediaEvent.AdBreakStart, info: adBreakObject, metadata: nil)

// AdBreakComplete
  tracker.trackEvent(event: MediaEvent.AdBreakComplete, info: nil, metadata: nil)
```

**Tracking ads**

```swift
// AdStart
  let adObject = Media.createObjectWith(name: "adbreak-name", id: "ad-id", position: 0, length: 30)

// Standard metadata keys provided by adobe.
  var adMetadata: [String: String] = [:]
  adMetadata[MediaConstants.AdMetadataKeys.ADVERTISER] = "Sample Advertiser"
  adMetadata[MediaConstants.AdMetadataKeys.CAMPAIGN_ID] = "Sample Campaign"

// Custom metadata keys
  adMetadata["affiliate"] = "Sample affiliate"

  tracker.trackEvent(event: MediaEvent.AdStart, info: adObject, metadata: adMetadata)

// AdComplete
  tracker.trackEvent(event: MediaEvent.AdComplete, info: nil, metadata: nil)

// AdSkip
   tracker.trackEvent(event: MediaEvent.AdSkip, info: nil, metadata: nil)
```

**Tracking chapters**

```swift
// ChapterStart
  let chapterObject = Media.createChapterObjectWith(name: "chapter_name", position: 1, length: 60, startTime: 0)
  let chapterDictionary = ["segmentType": "Sample segment type"]

  tracker.trackEvent(event: MediaEvent.ChapterStart, info: chapterObject, metadata: chapterDictionary)

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
  let qoeObject = Media.createQoEObjectWith(bitrate: 500000, startupTime: 2, fps: 24, droppedFrames: 10)
  tracker.updateQoEObject(qoeObject)

// Bitrate change
  tracker.trackEvent(event: MediaEvent.BitrateChange, info: nil, metadata: nil)
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

```objectivec
- (void) trackEvent:(enum AEPMediaEvent) info:(NSDictionary<NSString *,id> * _Nullable) metadata:(NSDictionary<NSString *,NSString *> * _Nullable)
```

**Examples**

**Tracking player states**

```objectivec
// StateStart
  NSDictionary* fullScreenState = [AEPMobileMedia createStateObjectWith:AEPMediaPlayerState.FULLSCREEN];
  [_tracker trackEvent:AEPMediaEventStateStart info:fullScreenState metadata:nil];

// StateEnd
  NSDictionary* fullScreenState = [AEPMobileMedia createStateObjectWith:AEPMediaPlayerState.FULLSCREEN];
  [_tracker trackEvent:AEPMediaEventStateEnd info:fullScreenState metadata:nil];
```

**Tracking ad breaks**

```objectivec
// AdBreakStart
  NSDictionary *adBreakObject = [AEPMobileMedia createAdBreakObjectWith:@"adbreak-name" position:1 startTime:0];
  [_tracker trackEvent:AEPMediaEventAdBreakStart info:adBreakObject metadata:nil];

// AdBreakComplete
  [_tracker trackEvent:AEPMediaEventAdBreakComplete info:nil metadata:nil];
```

**Tracking ads**

```objectivec
// AdStart
  NSDictionary *adObject = [AEPMobileMedia createAdObjectWith:@"ad-name" id:@"ad-id" position:0 length:30];
  NSMutableDictionary* adMetadata = [[NSMutableDictionary alloc] init];

// Standard metadata keys provided by adobe.
  [adMetadata setObject:@"Sample Advertiser" forKey:AEPAdMetadataKeys.ADVERTISER];
  [adMetadata setObject:@"Sample Campaign" forKey:AEPAdMetadataKeys.CAMPAIGN_ID];

// Custom metadata keys
  [adMetadata setObject:@"Sample affiliate" forKey:@"affiliate"];

  [_tracker trackEvent:AEPMediaEventAdStart info:adObject metadata:adMetadata];

// AdComplete
  [_tracker trackEvent:AEPMediaEventAdComplete info:nil metadata:nil];

// AdSkip
  [_tracker trackEvent:AEPMediaEventAdSkip info:nil metadata:nil];
```

**Tracking chapters**

```objectivec
// ChapterStart
  NSDictionary *chapterObject = [AEPMobileMedia createChapterObjectWith:@"chapter_name" position:1 length:60 startTime:0];

  NSMutableDictionary *chapterMetadata = [[NSMutableDictionary alloc] init];
  [chapterMetadata setObject:@"Sample segment type" forKey:@"segmentType"];

  [_tracker trackEvent:AEPMediaEventChapterStart info:chapterObject metadata:chapterMetadata];

// ChapterComplete
  [_tracker trackEvent:AEPMediaEventChapterComplete info:nil metadata:nil];

// ChapterSkip
  [_tracker trackEvent:AEPMediaEventChapterSkip info:nil metadata:nil];
```

**Tracking playback events**

```objectivec
// BufferStart
  [_tracker trackEvent:AEPMediaEventBufferStart info:nil metadata:nil];

// BufferComplete
  [_tracker trackEvent:AEPMediaEventBufferComplete info:nil metadata:nil];

// SeekStart
  [_tracker trackEvent:AEPMediaEventSeekStart info:nil metadata:nil];

// SeekComplete
  [_tracker trackEvent:AEPMediaEventSeekComplete info:nil metadata:nil];
```

**Tracking bitrate change**

```objectivec
// If the new bitrate value is available provide it to the tracker.
  NSDictionary *qoeObject = [AEPMobileMedia createQoEObjectWith:50000 startTime:2 fps:24 droppedFrames:10];

// Bitrate change
  [_tracker trackEvent:AEPMediaEventBitrateChange info:nil metadata:nil];
```

### updateCurrentPlayhead

Provides a media tracker with the current media playhead. For accurate tracking, call this method multiple times when the playhead changes.

| Variable Name | Description |
| :--- | :--- |
| `time` | Current playhead in seconds. For video-on-demand (VOD), the value is specified in seconds from the beginning of the media item. For live streaming, the value is specified as the number of seconds since midnight UTC on that day. |

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public void updateCurrentPlayhead(double time);
```

#### Example

```java
tracker.updateCurrentPlayhead(1);
```

**Live streaming example**

```java
//Calculation for number of seconds since midnight UTC of the day
double timeFromMidnightInSecond = (System.currentTimeMillis()/1000) % 86400;

tracker.updateCurrentPlayhead(timeFromMidnightInSecond);
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
tracker.updateCurrentPlayhead(1);
```

**Live streaming example**

```java
val timeFromMidnightInSecond = (System.currentTimeMillis() / 1000 % 86400).toDouble()
tracker.updateCurrentPlayhead(timeFromMidnightInSecond);
}
```

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
func updateCurrentPlayhead(time: Double)
```

#### Example

```swift
tracker.updateCurrentPlayhead(1);
```

**Live streaming example**

```swift
//Calculation for number of seconds since midnight UTC of the day
let secondsSince1970: TimeInterval = (Date().timeIntervalSince1970)
let timeFromMidnightInSecond = secondsSince1970.truncatingRemainder(dividingBy: 86400)

tracker.updateCurrentPlayhead(time: timeFromMidnightInSecond)
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
- (void) updateCurrentPlayhead:(double)
```

#### Example

```objectivec
[_tracker updateCurrentPlayhead:1];
```

### updateQoEObject

Provides the media tracker with the current QoE information. For accurate tracking, call this method multiple times when the media player provides the updated QoE information.

| Variable name | Description |
| :--- | :--- |
| `qoeObject` | Current QoE information that was created by using the [createQoEObject](#createqoeobject) method. |

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public void updateQoEObject(Map<String, Object> qoeObject);
```

#### Example

```java
HashMap<String, Object> qoeObject = Media.createQoEObject(1000000L, 2D, 25D, 10D);
tracker.updateQoEObject(qoeObject);
```

#### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val qoeObject = Media.createQoEObject(1000000L, 2D, 25D, 10D)
tracker.updateQoEObject(qoeObject)
```

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
func updateQoEObject(qoe: [String: Any])
```

#### Example

```swift
let qoeObject = Media.createQoEObjectWith(bitrate: 500000, startupTime: 2, fps: 24, droppedFrames: 10)
tracker.updateQoEObject(qoe: qoeObject)
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
- (void) updateQoEObject:(NSDictionary<NSString *,id> * _Nonnull)
```

#### Example

```objectivec
NSDictionary *qoeObject = [AEPMobileMedia createQoEObjectWith:50000 startTime:2 fps:24 droppedFrames:10]
[_tracker updateQoEObject:qoeObject];
```

## Media constants

### Media type

Defines the type of a media that is currently tracked.

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

```swift
@objc(AEPMediaType)
public enum MediaType: Int, RawRepresentable {
 //Constant defining media type for Video streams
 case Audio
 //Constant defining media type for Audio streams
 case Video
}
```

**Example**

#### iOS Swift

```swift
var mediaObject = Media.createMediaObjectWith(name: "video-name", 
                                                id: "videoId", 
                                                length: "60", 
                                                streamType: MediaConstants.StreamType.VOD, 
                                                mediaType: MediaType.Video)
```

#### iOS Objective-C

```objc
NSDictionary *mediaObject = [AEPMobileMedia createMediaObjectWith:@"video-name"   
                                                               id:@"video-id" 
                                                               length:60 streamType:AEPMediaStreamType.VOD mediaType:AEPMediaTypeVideo];
```

### Stream type

Defines the stream type of the content that is currently tracked.

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

```swift
public class MediaConstants: NSObject {
  @objc(AEPMediaStreamType)
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

**Example**

#### iOS Swift

```swift
var mediaObject = Media.createMediaObjectWith(name: "video-name", 
                                                id: "videoId", 
                                            length: "60", 
                                        streamType: MediaConstants.StreamType.VOD,    
                                         mediaType: MediaType.Video)
```

#### iOS Objective-C

```objc
NSDictionary *mediaObject = [AEPMobileMedia createMediaObjectWith:@"video-name" 
                                                               id:@"video-id" 
                                                           length:60
                                                       streamType:AEPMediaStreamType.VOD      
                                                        mediaType:AEPMediaTypeVideo];
```

### Standard video constants

Defines the standard metadata keys for video streams.

```java
public class MediaConstants {

  public static final class VideoMetadataKeys {
      public static final String SHOW = "a.media.show";
      public static final String SEASON = "a.media.season";
      public static final String EPISODE = "a.media.episode";
      public static final String ASSET_ID = "a.media.asset";
      public static final String GENRE = "a.media.genre";
      public static final String FIRST_AIR_DATE = "a.media.airDate";
      public static final String FIRST_DIGITAL_DATE = "a.media.digitalDate";
      public static final String RATING = "a.media.rating";
      public static final String ORIGINATOR = "a.media.originator";
      public static final String NETWORK = "a.media.network";
      public static final String SHOW_TYPE = "a.media.type";
      public static final String AD_LOAD = "a.media.adLoad";
      public static final String MVPD = "a.media.pass.mvpd";
      public static final String AUTHORIZED = "a.media.pass.auth";
      public static final String DAY_PART = "a.media.dayPart";
      public static final String FEED = "a.media.feed";
      public static final String STREAM_FORMAT = "a.media.format";
  }

}
```

```swift
public class MediaConstants: NSObject {
  @objc(AEPVideoMetadataKeys)
  public class VideoMetadataKeys: NSObject {
        public static let SHOW = "a.media.show"
        public static let SEASON = "a.media.season"
        public static let EPISODE = "a.media.episode"
        public static let ASSET_ID = "a.media.asset"
        public static let GENRE = "a.media.genre"
        public static let FIRST_AIR_DATE = "a.media.airDate"
        public static let FIRST_DIGITAL_DATE = "a.media.digitalDate"
        public static let RATING = "a.media.rating"
        public static let ORIGINATOR = "a.media.originator"
        public static let NETWORK = "a.media.network"
        public static let SHOW_TYPE = "a.media.type"
        public static let AD_LOAD = "a.media.adLoad"
        public static let MVPD = "a.media.pass.mvpd"
        public static let AUTHORIZED = "a.media.pass.auth"
        public static let DAY_PART = "a.media.dayPart"
        public static let FEED = "a.media.feed"
        public static let STREAM_FORMAT = "a.media.format"
    }
}
```

**Example**

#### iOS Swift

```swift
var mediaObject = Media.createMediaObjectWith(name: "video-name", id: "videoId", length: "60", streamType: MediaConstants.StreamType.VOD, mediaType: MediaType.Video)

var videoMetadata: [String: String] = [:]
// Standard Video Metadata
videoMetadata[MediaConstants.VideoMetadataKeys.SHOW] = "Sample show"
videoMetadata[MediaConstants.VideoMetadataKeys.SEASON] = "Sample season"

tracker.trackSessionStart(info: mediaObject, metadata: videoMetadata)
```

#### iOS Objective-C

```objc
NSDictionary *mediaObject = [AEPMobileMedia createMediaObjectWith:@"video-name" id:@"video-id" length:60 streamType:AEPMediaStreamType.VOD mediaType:AEPMediaTypeVideo];

NSMutableDictionary *videoMetadata = [[NSMutableDictionary alloc] init];
// Standard Video Metadata
[videoMetadata setObject:@"Sample show" forKey:AEPVideoMetadataKeys.SHOW];
[videoMetadata setObject:@"Sample Season" forKey:AEPVideoMetadataKeys.SEASON];

[_tracker trackSessionStart:mediaObject metadata:videoMetadata];
```

### Standard audio constants

Defines the standard metadata keys for audio streams.

```java
public class MediaConstants {

  public static final class AudioMetadataKeys {
    public static final String ARTIST = "a.media.artist";
    public static final String ALBUM = "a.media.album";
    public static final String LABEL = "a.media.label";
    public static final String AUTHOR = "a.media.author";
    public static final String STATION = "a.media.station";
    public static final String PUBLISHER = "a.media.publisher";
  }

}
```

```swift
public class MediaConstants: NSObject {
  @objc(AEPAudioMetadataKeys)
  public class AudioMetadataKeys: NSObject {
        public static let ARTIST = "a.media.artist"
        public static let ALBUM = "a.media.album"
        public static let LABEL = "a.media.label"
        public static let AUTHOR = "a.media.author"
        public static let STATION = "a.media.station"
        public static let PUBLISHER = "a.media.publisher"
    }
}
```

**Example**

#### iOS Swift

```swift
var audioObject = Media.createMediaObjectWith(name: "audio-name", id: "audioId", length: 30, streamType: MediaConstants.StreamType.AOD, mediaType: MediaType.AUDIO)

var audioMetadata: [String: String] = [:]
// Standard Audio Metadata
audioMetadata[MediaConstants.AudioMetadataKeys.ARTIST] = "Sample artist"
audioMetadata[MediaConstants.AudioMetadataKeys.ALBUM] = "Sample album"

tracker.trackSessionStart(info: audioObject, metadata: audioMetadata)
```

#### iOS Objective-C

```objc
NSDictionary *audioObject = [AEPMobileMedia createMediaObjectWith:@"audio-name" id:@"audioid" length:30 streamType:AEPMediaStreamType.AOD mediaType:AEPMediaTypeAudio];

NSMutableDictionary *audioMetadata = [[NSMutableDictionary alloc] init];
// Standard Audio Metadata
[audioMetadata setObject:@"Sample artist" forKey:AEPAudioMetadataKeys.ARTIST];
[audioMetadata setObject:@"Sample album" forKey:AEPAudioMetadataKeys.ALBUM];

[_tracker trackSessionStart:audioObject metadata:audioMetadata];
```

### Standard ad constants

Defines the standard metadata keys for ads.

```java
public class MediaConstants {

  public static final class AdMetadataKeys {
    public static final String ADVERTISER = "a.media.ad.advertiser";
    public static final String CAMPAIGN_ID = "a.media.ad.campaign";
    public static final String CREATIVE_ID = "a.media.ad.creative";
    public static final String PLACEMENT_ID = "a.media.ad.placement";
    public static final String SITE_ID = "a.media.ad.site";
    public static final String CREATIVE_URL = "a.media.ad.creativeURL";
  }

}
```

```swift
public class MediaConstants: NSObject {
  @objc(AEPAdMetadataKeys)
  public class AdMetadataKeys: NSObject {
        public static let ADVERTISER = "a.media.ad.advertiser"
        public static let CAMPAIGN_ID = "a.media.ad.campaign"
        public static let CREATIVE_ID = "a.media.ad.creative"
        public static let PLACEMENT_ID = "a.media.ad.placement"
        public static let SITE_ID = "a.media.ad.site"
        public static let CREATIVE_URL = "a.media.ad.creativeURL"
    }
}
```

**Example**

#### iOS Swift

```swift
let adObject = Media.createObjectWith(name: "adbreak-name", id: "ad-id", position: 0, length: 30)
var adMetadata: [String: String] = [:]
// Standard Ad Metadata
adMetadata[MediaConstants.AdMetadataKeys.ADVERTISER] = "Sample Advertiser"
adMetadata[MediaConstants.AdMetadataKeys.CAMPAIGN_ID] = "Sample Campaign"

tracker.trackEvent(event: MediaEvent.AdStart, info: adObject, metadata: adMetadata)
```

#### iOS Objective-C

```objc
NSDictionary *adObject = [AEPMobileMedia createAdObjectWith:@"ad-name" id:@"ad-id" position:0 length:30];

NSMutableDictionary *adMetadata = [[NSMutableDictionary alloc] init];
// Standard Ad Metadata
[adMetadata setObject:@"Sample Advertiser" forKey:AEPAdMetadataKeys.ADVERTISER];
[adMetadata setObject:@"Sample Campaign" forKey:AEPAdMetadataKeys.CAMPAIGN_ID];

[_tracker trackEvent:AEPMediaEventAdStart info:adObject metadata:adMetadata];
```

### Player state constants

Defines some common Player State constants.

```java
public class MediaConstants {

  public static final class PlayerState {
    public static final String FULLSCREEN = "fullscreen";
    public static final String PICTURE_IN_PICTURE = "pictureInPicture";
    public static final String CLOSED_CAPTION = "closedCaptioning";
    public static final String IN_FOCUS = "inFocus";
    public static final String MUTE = "mute";
  }

}
```

```swift
public class MediaConstants: NSObject {
  @objc(AEPMediaPlayerState)
  public class PlayerState: NSObject {
        public static let FULLSCREEN = "fullscreen"
        public static let PICTURE_IN_PICTURE = "pictureInPicture"
        public static let CLOSED_CAPTION = "closedCaptioning"
        public static let IN_FOCUS = "inFocus"
        public static let MUTE = "mute"
    }
}
```

**Example**

#### iOS Swift

```swift
let inFocusState = Media.createStateObjectWith(stateName: MediaConstants.PlayerState.IN_FOCUS)
tracker.trackEvent(event: MediaEvent.StateStart, info: inFocusState, metadata: nil)
```

#### iOS Objective-C

```objc
NSDictionary* inFocusState = [AEPMobileMedia createStateObjectWith:AEPMediaPlayerState.IN_FOCUS];
[_tracker trackEvent:AEPMediaEventStateStart info:muteState metadata:nil];
```

### Media events

Defines the type of a tracking event.

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

```swift
@objc(AEPMediaEvent)
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

**Example**

#### iOS Swift

```swift
tracker.trackEvent(event: MediaEvent.BitrateChange, info: nil, metadata: nil)
```

#### iOS Objective-C

```objc
[_tracker trackEvent:AEPMediaEventBitrateChange info:nil metadata:nil];
```

### Media resume

Constant to denote that the current tracking session is resuming a previously closed session. This information **must** be provided when starting a tracking session.

#### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

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

#### Example

```java
HashMap<String, Object> mediaObject = Media.createMediaObject("media-name", "media-id", 60D, MediaConstants.StreamType.VOD, Media.MediaType.Video);

// Attach media resumed information.
mediaObject.put(MediaConstants.MediaObjectKey.RESUMED, true);

_tracker.trackSessionStart(mediaObject, null);
```

#### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
public class MediaConstants: NSObject {
 @objc(AEPMediaObjectKey)
 public class MediaObjectKey: NSObject {
        public static let RESUMED = "media.resumed"
    }
}
```

#### Example

```swift
var mediaObject = Media.createMediaObjectWith(name: "video-name", id: "videoId", length: "60", streamType: MediaConstants.StreamType.VOD, mediaType: MediaType.Video)
mediaObject[MediaConstants.MediaObjectKey.RESUMED] = true

tracker.trackSessionStart(info: mediaObject, metadata: nil)
```

#### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
@interface AEPMediaObjectKey : NSObject
+ (NSString * _Nonnull)RESUMED
```

#### Example

```objectivec
NSDictionary *mediaObject = [AEPMobileMedia createMediaObjectWith:@"video-name" id:@"video-id" length:60 streamType:AEPMediaStreamType.VOD mediaType:AEPMediaTypeVideo];

// Attach media resumed information.    
NSMutableDictionary *obj  = [mediaObject mutableCopy];
[obj setObject:@YES forKey:AEPMediaObjectKey.RESUMED];

[_tracker trackSessionStart:obj metadata:nil];
```

