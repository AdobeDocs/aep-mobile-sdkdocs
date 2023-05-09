<Variant platform="android" api="extension-version" repeat="8"/>

#### Java

**Syntax**

```java
public static String extensionVersion() {
```

**Example**

```java
String mediaExtensionVersion = Media.extensionVersion();
```

#### Kotlin

**Example**

```java
val mediaExtensionVersion = Media.extensionVersion()
```

<Variant platform="ios" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

```swift
let mediaExtensionVersion  = Media.extensionVersion()
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
NSString *mediaExtensionVersion = [AEPMobileMedia extensionVersion];
```

<Variant platform="android" api="register-extension" repeat="8"/>

#### Java

**Syntax**

```java
public static void registerExtension()
```

**Example**

```java
Media.registerExtension();
```

#### Kotlin

**Example**

```kotlin
Media.registerExtension()
```

<Variant platform="android" api="create-tracker" repeat="10"/>

The createTracker function returns the instance of MediaTracker for tracking a media session. The createTracker function with callback as a parameter has been deprecated.

If MobileCore.resetIdentities() is called in the implementation, the existing tracker will stop sending pings. You will need to create a new tracker to generate a new media session.

#### Java

**Syntax**

```java
public static MediaTracker createTracker()
```

**Example**

```java
MediaTracker mediaTracker = Media.createTracker();  // Use the instance for tracking media.
```

#### Kotlin

**Example**

```java
val tracker = Media.createTracker()
```

<Variant platform="ios" api="create-tracker" repeat="12"/>

Creates a media tracker instance that tracks the playback session. The tracker created should be used to track the streaming content and it sends periodic pings to the media analytics backend.

If MobileCore.resetIdentities() is called in the implementation, the existing tracker will stop sending pings. You will need to create a new tracker to generate a new media session.

#### Swift

**Syntax**

```swift
static func createTracker()
```

**Example**

```swift
let tracker = Media.createTracker()  // Use the instance for tracking media.
```

#### Objective-C

**Syntax**

```objectivec
+ (void) createTracker
```

**Example**

```objc
id<AEPMediaTracker> tracker; 
_tracker = [AEPMobileMedia createTracker];  // Use the instance for tracking media.
```

<Variant platform="android" api="create-tracker-with-config" repeat="8"/>

#### Java

**Syntax**

```java
public static MediaTracker createTracker(Map<String, Object> config)
```

**Example**

```java
HashMap<String, Object> config = new HashMap<String, Object>();
config.put(MediaConstants.Config.CHANNEL, "custom-channel");  // Override channel configured in the Data Collection UI
config.put(MediaConstants.Config.DOWNLOADED_CONTENT, true);   // Creates downloaded content tracker
MediaTracker mediaTracker = Media.createTracker(config);  // Use the instance for tracking media.
```

#### Kotlin

**Example**

```java
val config = mapOf(
                MediaConstants.Config.CHANNEL to "custom-channel",
                MediaConstants.Config.DOWNLOADED_CONTENT to true
            )
val mediaTracker = Media.createTracker(config) // Use the instance for tracking media.
```

<Variant platform="ios" api="create-tracker-with-config" repeat="11"/>

Creates a media tracker instance based on the configuration to track the playback session.

#### Swift

**Syntax**

```swift
static func createTrackerWith(config: [String: Any]?)
```

**Example**

```swift
var config: [String: Any] = [:]
config[MediaConstants.TrackerConfig.CHANNEL] = "custom-channel" // Overrides channel configured in the Data Collection UI
config[MediaConstants.TrackerConfig.DOWNLOADED_CONTENT] = true    // Creates downloaded content tracker

let tracker = Media.createTrackerWith(config: config)
```

#### Objective-C

**Syntax**

```objectivec
+(id<AEPMediaTracker> _Nonnull) createTrackerWithConfig:(NSDictionary<NSString *,id> * _Nullable)
```

**Example**

```objectivec
id<AEPMediaTracker> _tracker; 
NSMutableDictionary* config = [NSMutableDictionary dictionary];

config[AEPMediaTrackerConfig.CHANNEL] = @"custom-channel"; // Overrides channel configured in the Data Collection UI
config[AEPMediaTrackerConfig.DOWNLOADED_CONTENT] = [NSNumber numberWithBool:true]; // Creates downloaded content tracker

_tracker = [AEPMobileMedia createTrackerWithConfig:config];
```

<Variant platform="android" api="create-media-object" repeat="8"/>

#### Java

**Syntax**

```java
public static HashMap<String, Object> createMediaObject(String name,
                                                        String mediaId,
                                                        Double length,
                                                        String streamType,
                                                        MediaType mediaType);
```

**Example**

```java
HashMap<String, Object> mediaInfo = Media.createMediaObject("video-name",
                                                            "video-id",
                                                            60D,
                                                            MediaConstants.StreamType.VOD,
                                                            Media.MediaType.Video);
```

#### Kotlin

**Example**

```java
var mediaInfo = Media.createMediaObject("video-name",
                                        "video-id",
                                        60D,
                                        MediaConstants.StreamType.VOD,
                                        Media.MediaType.Video)
```

<Variant platform="ios" api="create-media-object" repeat="11"/>

Returns a map that contains information about the media.

#### Swift

**Syntax**

```swift
static func createMediaObjectWith(name: String, 
                                    id: String, 
                                length: Double, 
                            streamType: String,
                             mediaType: MediaType) -> [String: Any]?
```

**Example**

```swift
let mediaObject = Media.createMediaObjectWith(name: "video-name",
                                                id: "videoId", 
                                            length: 60,
                                        streamType: MediaConstants.StreamType.VOD, 
                                         mediaType: MediaType.Video)
```

#### Objective-C

**Syntax**

```objectivec
+ (NSDictionary<NSString *, id> * _Nullable) createMediaObjectWith:(NSString * _Nonnull) id:(NSString * _Nonnull) length:(double) streamType:(NSString * _Nonnull) mediaType:(enum AEPMediaType)
```

**Example**

```objectivec
NSDictionary *mediaObject = [AEPMobileMedia createMediaObjectWith:@"video-name"
                                                                id:@"video-id" 
                                                            length:60 
                                                        streamType:AEPMediaStreamType.VOD
                                                         mediaType:AEPMediaTypeVideo];
```

<Variant platform="android" api="create-ad-break-object" repeat="8"/>

#### Java

**Syntax**

```java
public static HashMap<String, Object> createAdBreakObject(String name, Long position, Double startTime);
```

**Example**

```java
HashMap<String, Object> adBreakObject = Media.createAdBreakObject("adbreak-name", 1L, 0D);
```

#### Kotlin

**Example**

```java
val adBreakObject = Media.createAdBreakObject("adbreak-name", 1L, 0D)
```

<Variant platform="ios" api="create-ad-break-object" repeat="11"/>

Returns a map that contains information about the ad break.

#### Swift

**Syntax**

```swift
static func createAdBreakObjectWith(name: String,
                                position: Int, 
                                startTime: Double) -> [String: Any]?
```

**Example**

```swift
let adBreakObject = Media.createAdBreakObjectWith(name: "adbreak-name", 
                                              position: 1, 
                                             startTime: 0)
```

#### Objective-C

**Syntax**

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createAdBreakObjectWith:(NSString * _Nonnull)position:(NSInteger) startTime:(double)
```

**Example**

```objectivec
NSDictionary *adBreakObject = [AEPMobileMedia createAdBreakObjectWith:@"adbreak-name" 
                                                             position:1 
                                                            startTime:0];
```

<Variant platform="android" api="create-ad-object" repeat="8"/>

#### Java

**Syntax**

```java
public static HashMap<String, Object> createAdObject(String name, String adId, Long position, Double length);
```

**Example**

```java
HashMap<String, Object> adInfo = Media.createAdObject("ad-name", "ad-id", 1L, 15D);
```

#### Kotlin

**Example**

```java
val adInfo = Media.createAdObject("ad-name", "ad-id", 1L, 15D)
```

<Variant platform="ios" api="create-ad-object" repeat="11"/>

Returns a map that contains information about the ad.

#### Swift

**Syntax**

```swift
static func createAdObjectWith(name: String, 
                                 id: String, 
                           position: Int, 
                             length: Double) -> [String: Any]?
```

**Example**

```swift
let adObject = Media.createObjectWith(name: "ad-name", 
                                        id: "ad-id", 
                                  position: 0, 
                                    length: 30)
```

#### Objective-C

**Syntax**

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createAdObjectWith: (NSString * _Nonnull
                                                               id:(NSString * _Nonnull) 
                                                         position:(NSInteger) 
                                                           length:(double)
```

**Example**

```objectivec
NSDictionary *adObject = [AEPMobileMedia createAdObjectWith:@"ad-name" 
                                                         id:@"ad-id" 
                                                   position:0 
                                                     length:30];
```

<Variant platform="android" api="create-chapter-object" repeat="8"/>

#### Java

**Syntax**

```java
public static HashMap<String, Object> createChapterObject(String name,
                                                          Long position,
                                                          Double length,
                                                          Double startTime);
```

**Example**

```java
HashMap<String, Object> chapterInfo = Media.createChapterObject("chapter-name", 1L, 60D, 0D);
```

#### Kotlin

**Example**

```java
val chapterInfo = Media.createChapterObject("chapter-name", 1L, 60D, 0D)
```

<Variant platform="ios" api="create-chapter-object" repeat="11"/>

Returns a map that contains information about the chapter.

#### Swift

**Syntax**

```swift
static func createChapterObjectWith(name: String, 
                                position: Int, 
                                  length: Double, 
                               startTime: Double) -> [String: Any]?
```

**Example**

```swift
let chapterObject = Media.createChapterObjectWith(name: "chapter_name", 
                                              position: 1, 
                                                length: 60, 
                                             startTime: 0)
```

#### Objective-C

**Syntax**

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createChapterObjectWith:(NSString * _Nonnull)
                                                              position:(NSInteger) 
                                                                length:(double) 
                                                             startTime:(double)
```

**Example**

```objectivc
NSDictionary *chapterObject = [AEPMobileMedia createChapterObjectWith:@"chapter_name" 
                                                             position:1 
                                                               length:60 
                                                            startTime:0];
```

<Variant platform="android" api="create-qoe-object" repeat="8"/>

#### Java

**Syntax**

```java
public static HashMap<String, Object> createQoEObject(Long bitrate,
                                                      Double startupTime,
                                                      Double fps,
                                                      Long droppedFrames);
```

**Example**

```java
HashMap<String, Object> qoeInfo = Media.createQoEObject(10000000L, 2D, 23D, 10D);
```

#### Kotlin

**Example**

```java
val qoeInfo = Media.createQoEObject(10000000L, 2D, 23D, 10D)
```

<Variant platform="ios" api="create-qoe-object" repeat="11"/>

Returns a map that contains information about the quality of experience.

#### Swift

**Syntax**

```swift
static func createQoEObjectWith(bitrate: Double, 
                            startupTime: Double, 
                                    fps: Double, 
                          droppedFrames: Double) -> [String: Any]?
```

**Example**

```swift
let qoeObject = Media.createQoEObjectWith(bitrate: 500000, 
                                      startupTime: 2, 
                                              fps: 24, 
                                    droppedFrames: 10)
```

#### Objective-C

**Syntax**

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createQoEObjectWith:(double) 
                                                         startTime:(double) 
                                                               fps:(double) 
                                                     droppedFrames:(double)
```

**Example**

```objectivec
NSDictionary *qoeObject = [AEPMobileMedia createQoEObjectWith:500000 
                                                    startTime:2 
                                                          fps:24 
                                                droppedFrames:10];
```

<Variant platform="android" api="create-state-object" repeat="8"/>

#### Java

**Syntax**

```java
public static HashMap<String, Object> createStateObject(String stateName);
```

**Example**

```java
HashMap<String, Object> playerStateInfo = Media.createStateObject("fullscreen");
```

#### Kotlin

**Example**

```java
val playerStateInfo = Media.createStateObject("fullscreen")
```

<Variant platform="ios" api="create-state-object" repeat="11"/>

Returns a map that contains information about the player state.

#### Swift

**Syntax**

```swift
static func createStateObjectWith(stateName: String) -> [String: Any]
```

**Example**

```swift
let fullScreenState = Media.createStateObjectWith(stateName: "fullscreen")
```

#### Objective-C

**Syntax**

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createStateObjectWith:(NSString * _Nonnull)
```

**Example**

```objectivec
NSDictionary* fullScreenState = [AEPMobileMedia createStateObjectWith:AEPMediaPlayerState.FULLSCREEN]
```

<Variant platform="android" api="track-session-start" repeat="8"/>

#### Java

**Syntax**

```java
public void trackSessionStart(Map<String, Object> mediaInfo, Map<String, String> contextData);
```

**Example**

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

#### Kotlin

**Example**

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

<Variant platform="ios" api="track-session-start" repeat="10"/>

#### Swift

**Syntax**

```swift
public func trackSessionStart(info: [String: Any], metadata: [String: String]? = nil)
```

**Example**

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

#### Objective-C

**Syntax**

```objectivec
+ (void) trackSessionStart:(NSDictionary<NSString *,id> * _Nonnull) metadata:(NSDictionary<NSString *,NSString *> * _Nullable)
```

**Example**

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

<Variant platform="android" api="track-play" repeat="8"/>

#### Java

**Syntax**

```java
public void trackPlay();
```

**Example**

```java
tracker.trackPlay();
```

#### Kotlin

**Example**

```java
tracker.trackPlay();
```

<Variant platform="ios" api="track-play" repeat="10"/>

#### Swift

**Syntax**

```swift
func trackPlay()
```

**Example**

```swift
tracker.trackPlay()
```

#### Objective-C

**Syntax**

```objectivec
- (void) trackPlay;
```

**Example**

```objectivec
[_tracker trackPlay];
```

<Variant platform="android" api="track-pause" repeat="8"/>

#### Java

**Syntax**

```java
public void trackPause();
```

**Example**

```java
tracker.trackPause();
```

#### Kotlin

**Example**

```java
tracker.trackPause();
```

<Variant platform="ios" api="track-pause" repeat="10"/>

#### Swift

**Syntax**

```swift
func trackPause()
```

**Example**

```swift
tracker.trackPause()
```

#### Objective-C

**Syntax**

```objectivec
- (void) trackPause
```

**Example**

```objectivec
[_tracker trackPause];
```

<Variant platform="android" api="track-complete" repeat="8"/>

#### Java

**Syntax**

```java
public void trackComplete();
```

**Example**

```java
tracker.trackComplete();
```

#### Kotlin

**Example**

```java
tracker.trackComplete();
```

<Variant platform="ios" api="track-complete" repeat="10"/>

#### Swift

**Syntax**

```swift
func trackComplete()
```

**Example**

```swift
tracker.trackComplete()
```

#### Objective-C

**Syntax**

```objectivec
- (void) trackComplete
```

**Example**

```objectivec
[_tracker trackComplete];
```

<Variant platform="android" api="track-session-end" repeat="8"/>

#### Java

**Syntax**

```java
public void trackSessionEnd();
```

**Example**

```java
tracker.trackSessionEnd();
```

#### Kotlin

**Example**

```kotlin
tracker.trackSessionEnd();
```

<Variant platform="ios" api="track-session-end" repeat="10"/>

#### Swift

**Syntax**

```swift
func trackSessionEnd()
```

**Example**

```swift
tracker.trackSessionEnd()
```

#### Objective-C

**Syntax**

```objectivec
- (void) trackSessionEnd
```

**Example**

```objectivec
[_tracker trackSessionEnd];
```

<Variant platform="android" api="track-error" repeat="8"/>

#### Java

**Syntax**

```java
public void trackError(String errorId);
```

**Example**

```java
tracker.trackError("errorId");
```

#### Kotlin

**Example**

```java
tracker.trackError("errorId");
```

<Variant platform="ios" api="track-error" repeat="10"/>

#### Swift

**Syntax**

```swift
func trackError(errorId: String)
```

**Example**

```swift
tracker.trackError(errorId: "errorId")
```

#### Objective-C

**Syntax**

```objectivec
- (void) trackError:(NSString * _Nonnull)
```

**Example**

```objectivec
[_tracker trackError:@"errorId"];
```

<Variant platform="android" api="track-event" repeat="30"/>

#### Java

**Syntax**

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

#### Kotlin

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

<Variant platform="ios" api="track-event" repeat="32"/>

#### Swift

**Syntax**

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

#### Objective-C

**Syntax**

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

<Variant platform="android" api="update-current-playhead" repeat="12"/>

#### Java

**Syntax**

```java
public void updateCurrentPlayhead(double time);
```

**Example**

```java
tracker.updateCurrentPlayhead(1);
```

**Live streaming example**

```java
//Calculation for number of seconds since midnight UTC of the day
double timeFromMidnightInSecond = (System.currentTimeMillis()/1000) % 86400;

tracker.updateCurrentPlayhead(timeFromMidnightInSecond);
```

#### Kotlin

**Example**

```java
tracker.updateCurrentPlayhead(1);
```

**Live streaming example**

```java
val timeFromMidnightInSecond = (System.currentTimeMillis() / 1000 % 86400).toDouble()
tracker.updateCurrentPlayhead(timeFromMidnightInSecond);
}
```

<Variant platform="ios" api="update-current-playhead" repeat="12"/>

#### Swift

**Syntax**

```swift
func updateCurrentPlayhead(time: Double)
```

**Example**

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

#### Objective-C

**Syntax**

```objectivec
- (void) updateCurrentPlayhead:(double)
```

**Example**

```objectivec
[_tracker updateCurrentPlayhead:1];
```

<Variant platform="android" api="update-qoe-object" repeat="8"/>

#### Java

**Syntax**

```java
public void updateQoEObject(Map<String, Object> qoeObject);
```

**Example**

```java
HashMap<String, Object> qoeObject = Media.createQoEObject(1000000L, 2D, 25D, 10D);
tracker.updateQoEObject(qoeObject);
```

#### Kotlin

**Example**

```java
val qoeObject = Media.createQoEObject(1000000L, 2D, 25D, 10D)
tracker.updateQoEObject(qoeObject)
```

<Variant platform="ios" api="update-qoe-object" repeat="10"/>

#### Swift

**Syntax**

```swift
func updateQoEObject(qoe: [String: Any])
```

**Example**

```swift
let qoeObject = Media.createQoEObjectWith(bitrate: 500000, startupTime: 2, fps: 24, droppedFrames: 10)
tracker.updateQoEObject(qoe: qoeObject)
```

#### Objective-C

**Syntax**

```objectivec
- (void) updateQoEObject:(NSDictionary<NSString *,id> * _Nonnull)
```

**Example**

```objectivec
NSDictionary *qoeObject = [AEPMobileMedia createQoEObjectWith:50000 startTime:2 fps:24 droppedFrames:10]
[_tracker updateQoEObject:qoeObject];
```

<Variant platform="android" api="media-type" repeat="1"/>

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

<Variant platform="ios" api="media-type" repeat="6"/>

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

#### Swift

```swift
var mediaObject = Media.createMediaObjectWith(name: "video-name", 
                                                id: "videoId", 
                                                length: "60", 
                                                streamType: MediaConstants.StreamType.VOD, 
                                                mediaType: MediaType.Video)
```

#### Objective-C

```objc
NSDictionary *mediaObject = [AEPMobileMedia createMediaObjectWith:@"video-name"   
                                                               id:@"video-id" 
                                                               length:60 streamType:AEPMediaStreamType.VOD mediaType:AEPMediaTypeVideo];
```

<Variant platform="android" api="stream-type" repeat="1"/>

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

<Variant platform="ios" api="stream-type" repeat="6"/>

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

#### Swift

```swift
var mediaObject = Media.createMediaObjectWith(name: "video-name", 
                                                id: "videoId", 
                                            length: "60", 
                                        streamType: MediaConstants.StreamType.VOD,    
                                         mediaType: MediaType.Video)
```

#### Objective-C

```objc
NSDictionary *mediaObject = [AEPMobileMedia createMediaObjectWith:@"video-name" 
                                                               id:@"video-id" 
                                                           length:60
                                                       streamType:AEPMediaStreamType.VOD      
                                                        mediaType:AEPMediaTypeVideo];
```

<Variant platform="android" api="standard-video-constants" repeat="1"/>

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

<Variant platform="ios" api="standard-video-constants" repeat="6"/>

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

#### Swift

```swift
var mediaObject = Media.createMediaObjectWith(name: "video-name", id: "videoId", length: "60", streamType: MediaConstants.StreamType.VOD, mediaType: MediaType.Video)

var videoMetadata: [String: String] = [:]
// Standard Video Metadata
videoMetadata[MediaConstants.VideoMetadataKeys.SHOW] = "Sample show"
videoMetadata[MediaConstants.VideoMetadataKeys.SEASON] = "Sample season"

tracker.trackSessionStart(info: mediaObject, metadata: videoMetadata)
```

#### Objective-C

```objc
NSDictionary *mediaObject = [AEPMobileMedia createMediaObjectWith:@"video-name" id:@"video-id" length:60 streamType:AEPMediaStreamType.VOD mediaType:AEPMediaTypeVideo];

NSMutableDictionary *videoMetadata = [[NSMutableDictionary alloc] init];
// Standard Video Metadata
[videoMetadata setObject:@"Sample show" forKey:AEPVideoMetadataKeys.SHOW];
[videoMetadata setObject:@"Sample Season" forKey:AEPVideoMetadataKeys.SEASON];

[_tracker trackSessionStart:mediaObject metadata:videoMetadata];
```

<Variant platform="android" api="standard-audio-constants" repeat="1"/>

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

<Variant platform="ios" api="standard-audio-constants" repeat="6"/>

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

#### Swift

```swift
var audioObject = Media.createMediaObjectWith(name: "audio-name", id: "audioId", length: 30, streamType: MediaConstants.StreamType.AOD, mediaType: MediaType.AUDIO)

var audioMetadata: [String: String] = [:]
// Standard Audio Metadata
audioMetadata[MediaConstants.AudioMetadataKeys.ARTIST] = "Sample artist"
audioMetadata[MediaConstants.AudioMetadataKeys.ALBUM] = "Sample album"

tracker.trackSessionStart(info: audioObject, metadata: audioMetadata)
```

#### Objective-C

```objc
NSDictionary *audioObject = [AEPMobileMedia createMediaObjectWith:@"audio-name" id:@"audioid" length:30 streamType:AEPMediaStreamType.AOD mediaType:AEPMediaTypeAudio];

NSMutableDictionary *audioMetadata = [[NSMutableDictionary alloc] init];
// Standard Audio Metadata
[audioMetadata setObject:@"Sample artist" forKey:AEPAudioMetadataKeys.ARTIST];
[audioMetadata setObject:@"Sample album" forKey:AEPAudioMetadataKeys.ALBUM];

[_tracker trackSessionStart:audioObject metadata:audioMetadata];
```

<Variant platform="android" api="standard-ad-constants" repeat="1"/>

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

<Variant platform="ios" api="standard-ad-constants" repeat="6"/>

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

#### Swift

```swift
let adObject = Media.createObjectWith(name: "adbreak-name", id: "ad-id", position: 0, length: 30)
var adMetadata: [String: String] = [:]
// Standard Ad Metadata
adMetadata[MediaConstants.AdMetadataKeys.ADVERTISER] = "Sample Advertiser"
adMetadata[MediaConstants.AdMetadataKeys.CAMPAIGN_ID] = "Sample Campaign"

tracker.trackEvent(event: MediaEvent.AdStart, info: adObject, metadata: adMetadata)
```

#### Objective-C

```objc
NSDictionary *adObject = [AEPMobileMedia createAdObjectWith:@"ad-name" id:@"ad-id" position:0 length:30];

NSMutableDictionary *adMetadata = [[NSMutableDictionary alloc] init];
// Standard Ad Metadata
[adMetadata setObject:@"Sample Advertiser" forKey:AEPAdMetadataKeys.ADVERTISER];
[adMetadata setObject:@"Sample Campaign" forKey:AEPAdMetadataKeys.CAMPAIGN_ID];

[_tracker trackEvent:AEPMediaEventAdStart info:adObject metadata:adMetadata];
```

<Variant platform="android" api="player-state-constants" repeat="1"/>

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

<Variant platform="ios" api="player-state-constants" repeat="6"/>

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

#### Swift

```swift
let inFocusState = Media.createStateObjectWith(stateName: MediaConstants.PlayerState.IN_FOCUS)
tracker.trackEvent(event: MediaEvent.StateStart, info: inFocusState, metadata: nil)
```

#### Objective-C

```objc
NSDictionary* inFocusState = [AEPMobileMedia createStateObjectWith:AEPMediaPlayerState.IN_FOCUS];
[_tracker trackEvent:AEPMediaEventStateStart info:muteState metadata:nil];
```

<Variant platform="android" api="media-events" repeat="1"/>

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


<Variant platform="ios" api="media-events" repeat="6"/>

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

#### Swift

```swift
tracker.trackEvent(event: MediaEvent.BitrateChange, info: nil, metadata: nil)
```

#### Objective-C

```objc
[_tracker trackEvent:AEPMediaEventBitrateChange info:nil metadata:nil];
```

<Variant platform="android" api="media-resume" repeat="5"/>

#### Java

**Syntax**

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

**Example**

```java
HashMap<String, Object> mediaObject = Media.createMediaObject("media-name", "media-id", 60D, MediaConstants.StreamType.VOD, Media.MediaType.Video);

// Attach media resumed information.
mediaObject.put(MediaConstants.MediaObjectKey.RESUMED, true);

_tracker.trackSessionStart(mediaObject, null);
```

<Variant platform="ios" api="media-resume" repeat="10"/>

#### Swift

**Syntax**

```swift
public class MediaConstants: NSObject {
 @objc(AEPMediaObjectKey)
 public class MediaObjectKey: NSObject {
        public static let RESUMED = "media.resumed"
    }
}
```

**Example**

```swift
var mediaObject = Media.createMediaObjectWith(name: "video-name", id: "videoId", length: "60", streamType: MediaConstants.StreamType.VOD, mediaType: MediaType.Video)
mediaObject[MediaConstants.MediaObjectKey.RESUMED] = true

tracker.trackSessionStart(info: mediaObject, metadata: nil)
```

#### Objective-C

**Syntax**

```objectivec
@interface AEPMediaObjectKey : NSObject
+ (NSString * _Nonnull)RESUMED
```

**Example**

```objectivec
NSDictionary *mediaObject = [AEPMobileMedia createMediaObjectWith:@"video-name" id:@"video-id" length:60 streamType:AEPMediaStreamType.VOD mediaType:AEPMediaTypeVideo];

// Attach media resumed information.    
NSMutableDictionary *obj  = [mediaObject mutableCopy];
[obj setObject:@YES forKey:AEPMediaObjectKey.RESUMED];

[_tracker trackSessionStart:obj metadata:nil];
```
