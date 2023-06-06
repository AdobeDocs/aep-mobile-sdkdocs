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
let mediaExtensionVersion = Media.extensionVersion()
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
NSString *mediaExtensionVersion = [AEPMobileEdgeMedia extensionVersion];
```

<Variant platform="android" api="create-tracker" repeat="8"/>

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

<Variant platform="ios" api="create-tracker" repeat="10"/>

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
id<AEPEdgeMediaTracker> tracker; 
tracker = [AEPMobileEdgeMedia createTracker];  // Use the instance for tracking media.
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
config.put(MediaConstants.TrackerConfig.CHANNEL, "custom-channel");  // Overwrites channel configured in the Data Collection UI.
config.put(MediaConstants.TrackerConfig.AD_PING_INTERVAL, 1);   // Overwrites ad content ping interval to 1 second.
config.put(MediaConstants.TrackerConfig.MAIN_PING_INTERVAL, 30);   // Overwrites main content ping interval to 30 seconds.

MediaTracker mediaTracker = Media.createTracker(config);  // Use the instance for tracking media.
```

#### Kotlin

**Example**

```java
val config = mapOf(
                MediaConstants.TrackerConfig.CHANNEL to "custom-channel",
                MediaConstants.TrackerConfig.AD_PING_INTERVAL to 1,
                MediaConstants.TrackerConfig.MAIN_PING_INTERVAL to 30,
            )
val tracker = Media.createTracker(config) // Use the instance for tracking media.
```

<Variant platform="ios" api="create-tracker-with-config" repeat="10"/>

#### Swift

**Syntax**

```swift
static func createTrackerWith(config: [String: Any]?)
```

**Example**

```swift
var config: [String: Any] = [:]
config[MediaConstants.TrackerConfig.CHANNEL] = "custom-channel" // Overrides channel configured in the Data Collection UI.
​config[MediaConstants.TrackerConfig.AD_PING_INTERVAL] = 1 // Overwrites ad content ping interval to 1 second.
config[MediaConstants.TrackerConfig.MAIN_PING_INTERVAL] = 30 // Overwrites main content ping interval to 30 seconds.

let tracker = Media.createTrackerWith(config: config)
```

#### Objective-C

**Syntax**

```objectivec
+(id<AEPEdgeMediaTracker> _Nonnull) createTrackerWithConfig:(NSDictionary<NSString *,id> * _Nullable)
```

**Example**

```objectivec
id<AEPEdgeMediaTracker> tracker; 
NSMutableDictionary* config = [NSMutableDictionary dictionary];

config[AEPEdgeMediaTrackerConfig.CHANNEL] = @"custom-channel"; // Overrides channel configured in the Data Collection UI.
config[AEPEdgeMediaTrackerConfig.AD_PING_INTERVAL] = 1; // Overwrites ad content ping interval to 1 second.
config[AEPEdgeMediaTrackerConfig.MAIN_PING_INTERVAL] = 30; // Overwrites main content ping interval to 30 seconds.

tracker = [AEPMobileEdgeMedia createTrackerWithConfig:config];
```

<Variant platform="android" api="create-media-object" repeat="8"/>

#### Java

**Syntax**

```java
public static HashMap<String, Object> createMediaObject(String name,
                                                        String id,
                                                        int length,
                                                        String streamType,
                                                        MediaType mediaType);
```

**Example**

```java
HashMap<String, Object> mediaInfo = Media.createMediaObject("videoName",
                                                            "videoId",
                                                            60,
                                                            MediaConstants.StreamType.VOD,
                                                            Media.MediaType.Video);
```

#### Kotlin

**Example**

```java
var mediaInfo = Media.createMediaObject("videoName",
                                        "videoId",
                                        60,
                                        MediaConstants.StreamType.VOD,
                                        Media.MediaType.Video)
```

<Variant platform="ios" api="create-media-object" repeat="10"/>

#### Swift

**Syntax**

```swift
static func createMediaObjectWith(name: String, 
                                    id: String, 
                                length: Int, 
                            streamType: String,
                             mediaType: MediaType) -> [String: Any]?
```

**Example**

```swift
let mediaObject = Media.createMediaObjectWith(name: "videoName",
                                                id: "videoId", 
                                            length: 60,
                                        streamType: MediaConstants.StreamType.VOD, 
                                         mediaType: MediaType.Video)
```

#### Objective-C

**Syntax**

```objectivec
+ (NSDictionary<NSString *, id> * _Nullable) createMediaObjectWith:(NSString * _Nonnull) id:(NSString * _Nonnull) length:(NSInteger) streamType:(NSString * _Nonnull) mediaType:(enum AEPEdgeMediaType)
```

**Example**

```objectivec
NSDictionary *mediaObject = [AEPMobileEdgeMedia createMediaObjectWith:@"videoName"
                                                                id:@"videoId" 
                                                            length:60 
                                                        streamType:AEPEdgeMediaStreamType.VOD
                                                         mediaType:AEPEdgeMediaTypeVideo];
```

<Variant platform="android" api="create-ad-break-object" repeat="8"/>

#### Java

**Syntax**

```java
public static HashMap<String, Object> createAdBreakObject(String name, int position, int startTime);
```

**Example**

```java
HashMap<String, Object> adBreakInfo = Media.createAdBreakObject("adbreakName", 1, 0);
```

#### Kotlin

**Example**

```java
val adBreakInfo = Media.createAdBreakObject("adbreakName", 1, 0)
```

<Variant platform="ios" api="create-ad-break-object" repeat="10"/>

#### Swift

**Syntax**

```swift
static func createAdBreakObjectWith(name: String,
                                position: Int, 
                               startTime: Int) -> [String: Any]?
```

**Example**

```swift
let adBreakInfo = Media.createAdBreakObjectWith(name: "adbreakName", 
                                              position: 1, 
                                             startTime: 0)
```

#### Objective-C

**Syntax**

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createAdBreakObjectWith:(NSString * _Nonnull)position:(NSInteger) startTime:(NSInteger)
```

**Example**

```objectivec
NSDictionary *adBreakInfo = [AEPMobileEdgeMedia createAdBreakObjectWith:@"adbreakName" 
                                                                 position:1 
                                                                startTime:0];
```

<Variant platform="android" api="create-ad-object" repeat="8"/>

#### Java

**Syntax**

```java
public static HashMap<String, Object> createAdObject(String name, String id, int position, int length);
```

**Example**

```java
HashMap<String, Object> adInfo = Media.createAdObject("adName", "adId", 1, 15);
```

#### Kotlin

**Example**

```java
val adInfo = Media.createAdObject("adName", "adId", 1, 15)
```

<Variant platform="ios" api="create-ad-object" repeat="10"/>

#### Swift

**Syntax**

```swift
static func createAdObjectWith(name: String, 
                                 id: String, 
                           position: Int, 
                             length: Int) -> [String: Any]?
```

**Example**

```swift
let adInfo = Media.createObjectWith(name: "adName", 
                                        id: "adId", 
                                  position: 0, 
                                    length: 30)
```

#### Objective-C

**Syntax**

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createAdObjectWith:(NSString * _Nonnull)
                                                               id:(NSString * _Nonnull) 
                                                         position:(NSInteger) 
                                                           length:(NSInteger)
```

**Example**

```objectivec
NSDictionary *adInfo = [AEPMobileEdgeMedia createAdObjectWith:@"adName" 
                                                             id:@"adId" 
                                                       position:0 
                                                         length:30];
```

<Variant platform="android" api="create-chapter-object" repeat="8"/>

#### Java

**Syntax**

```java
public static HashMap<String, Object> createChapterObject(String name,
                                                          int position,
                                                          int length,
                                                          int startTime);
```

**Example**

```java
HashMap<String, Object> chapterInfo = Media.createChapterObject("chapterName", 1, 60, 0);
```

#### Kotlin

**Example**

```java
val chapterInfo = Media.createChapterObject("chapterName", 1, 60, 0)
```

<Variant platform="ios" api="create-chapter-object" repeat="10"/>

#### Swift

**Syntax**

```swift
static func createChapterObjectWith(name: String, 
                                position: Int, 
                                  length: Int, 
                               startTime: Int) -> [String: Any]?
```

**Example**

```swift
let chapterInfo = Media.createChapterObjectWith(name: "chapterName", 
                                              position: 1, 
                                                length: 60, 
                                             startTime: 0)
```

#### Objective-C

**Syntax**

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createChapterObjectWith:(NSString * _Nonnull)
                                                              position:(NSInteger) 
                                                                length:(NSInteger) 
                                                             startTime:(NSInteger)
```

**Example**

```objectivc
NSDictionary *chapterInfo = [AEPMobileEdgeMedia createChapterObjectWith:@"chapterName" 
                                                                 position:1 
                                                                   length:60 
                                                                startTime:0];
```

<Variant platform="android" api="create-qoe-object" repeat="8"/>

#### Java

**Syntax**

```java
public static HashMap<String, Object> createQoEObject(int bitrate,
                                                      int startupTime,
                                                      int fps,
                                                      int droppedFrames);
```

**Example**

```java
HashMap<String, Object> qoeInfo = Media.createQoEObject(10000000, 2, 23, 10);
```

#### Kotlin

**Example**

```java
val qoeInfo = Media.createQoEObject(10000000, 2, 23, 10)
```

<Variant platform="ios" api="create-qoe-object" repeat="10"/>

#### Swift

**Syntax**

```swift
static func createQoEObjectWith(bitrate: Int, 
                            startupTime: Int, 
                                    fps: Int, 
                          droppedFrames: Int) -> [String: Any]?
```

**Example**

```swift
let qoeInfo = Media.createQoEObjectWith(bitrate: 500000, 
                                      startupTime: 2, 
                                              fps: 24, 
                                    droppedFrames: 10)
```

#### Objective-C

**Syntax**

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createQoEObjectWith:(NSInteger) 
                                                         startTime:(NSInteger) 
                                                               fps:(NSInteger) 
                                                     droppedFrames:(NSInteger)
```

**Example**

```objectivec
NSDictionary *qoeInfo = [AEPMobileEdgeMedia createQoEObjectWith:500000 
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
HashMap<String, Object> fullScreenState = Media.createStateObject(MediaConstants.PlayerState.FULLSCREEN);
```

#### Kotlin

**Example**

```java
val fullScreenState = Media.createStateObject(MediaConstants.PlayerState.FULLSCREEN)
```

<Variant platform="ios" api="create-state-object" repeat="10"/>

#### Swift

**Syntax**

```swift
static func createStateObjectWith(stateName: String) -> [String: Any]
```

**Example**

```swift
let fullScreenState = Media.createStateObjectWith(stateName: MediaConstants.PlayerState.FULLSCREEN)
```

#### Objective-C

**Syntax**

```objectivec
+ (NSDictionary  <NSString *, id> * _Nullable) createStateObjectWith:(NSString * _Nonnull)
```

**Example**

```objectivec
NSDictionary* fullScreenState = [AEPMobileEdgeMedia createStateObjectWith:AEPEdgeMediaPlayerState.FULLSCREEN]
```

<Variant platform="android" api="track-session-start" repeat="8"/>

#### Java

**Syntax**

```java
public void trackSessionStart(Map<String, Object> mediaInfo, Map<String, String> contextData);
```

**Example**

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

#### Kotlin

**Example**

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

<Variant platform="ios" api="track-session-start" repeat="10"/>

#### Swift

**Syntax**

```swift
public func trackSessionStart(info: [String: Any], metadata: [String: String]? = nil)
```

**Example**

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

#### Objective-C

**Syntax**

```objectivec
+ (void) trackSessionStart:(NSDictionary<NSString *,id> * _Nonnull) metadata:(NSDictionary<NSString *,NSString *> * _Nullable)
```

**Example**

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
tracker.trackPlay()
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
[tracker trackPlay];
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
tracker.trackPause()
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
[tracker trackPause];
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
tracker.trackComplete()
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
[tracker trackComplete];
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
tracker.trackSessionEnd()
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
[tracker trackSessionEnd];
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
tracker.trackError("errorId")
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
[tracker trackError:@"errorId"];
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

#### Kotlin

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

#### Objective-C

**Syntax**

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

<Variant platform="android" api="update-current-playhead" repeat="12"/>

#### Java

**Syntax**

```java
public void updateCurrentPlayhead(int time);
```

**Example**

```java
tracker.updateCurrentPlayhead(1);
```

**Live streaming example**

```java
//Calculation for number of seconds since midnight UTC of the day
int timeFromMidnightInSecond = (int)((System.currentTimeMillis() / 1000) % 86400);

tracker.updateCurrentPlayhead(timeFromMidnightInSecond);
```

#### Kotlin

**Example**

```java
tracker.updateCurrentPlayhead(1)
```

**Live streaming example**

```java
val timeFromMidnightInSecond = ((System.currentTimeMillis() / 1000) % 86400).toInt()
tracker.updateCurrentPlayhead(timeFromMidnightInSecond)
}
```

<Variant platform="ios" api="update-current-playhead" repeat="12"/>

#### Swift

**Syntax**

```swift
func updateCurrentPlayhead(time: Int)
```

**Example**

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

#### Objective-C

**Syntax**

```objectivec
- (void) updateCurrentPlayhead:(NSInteger)
```

**Example**

```objectivec
[tracker updateCurrentPlayhead:1];
```

<Variant platform="android" api="update-qoe-object" repeat="8"/>

#### Java

**Syntax**

```java
public void updateQoEObject(Map<String, Object> qoeInfo);
```

**Example**

```java
HashMap<String, Object> qoeInfo = Media.createQoEObject(1000000, 2, 25, 10);
tracker.updateQoEObject(qoeInfo);
```

#### Kotlin

**Example**

```java
val qoeInfo = Media.createQoEObject(1000000, 2, 25, 10)
tracker.updateQoEObject(qoeInfo)
```

<Variant platform="ios" api="update-qoe-object" repeat="10"/>

#### Swift

**Syntax**

```swift
func updateQoEObject(qoe: [String: Any])
```

**Example**

```swift
let qoeInfo = Media.createQoEObjectWith(bitrate: 500000, startupTime: 2, fps: 24, droppedFrames: 10)
tracker.updateQoEObject(qoe: qoeInfo)
```

#### Objective-C

**Syntax**

```objectivec
- (void) updateQoEObject:(NSDictionary<NSString *,id> * _Nonnull)
```

**Example**

```objectivec
NSDictionary *qoeInfo = [AEPMobileEdgeMedia createQoEObjectWith:50000 startTime:2 fps:24 droppedFrames:10]
[tracker updateQoEObject:qoeInfo];
```

<Variant platform="android" api="media-type" repeat="6"/>

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

**Example**

#### Java

```java
HashMap<String, Object> mediaInfo = Media.createMediaObject("videoName",
                                                            "videoId",
                                                            60,
                                                            MediaConstants.StreamType.VOD,
                                                            Media.MediaType.Video)
```

#### Kotlin

```kotlin
val mediaInfo = Media.createMediaObject("videoName",
                                        "videoId",
                                        60,
                                        MediaConstants.StreamType.VOD,
                                        Media.MediaType.Video)
```


<Variant platform="ios" api="media-type" repeat="6"/>

```swift
@objc(AEPEdgeMediaType)
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
var mediaObject = Media.createMediaObjectWith(name: "videoName", 
                                                id: "videoId", 
                                            length: 60, 
                                        streamType: MediaConstants.StreamType.VOD, 
                                        mediaType: MediaType.Video)
```

#### Objective-C

```objc
NSDictionary *mediaObject = [AEPMobileEdgeMedia createMediaObjectWith:@"videoName"   
                                                               id:@"videoId" 
                                                               length:60 
                                                           streamType:AEPEdgeMediaStreamType.VOD 
                                                            mediaType:AEPEdgeMediaTypeVideo];
```

<Variant platform="android" api="stream-type" repeat="6"/>

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

**Example**

#### Java

```java
HashMap<String, Object> mediaInfo = Media.createMediaObject("videoName",
                                                            "videoId",
                                                            60,
                                                            MediaConstants.StreamType.VOD,
                                                            Media.MediaType.Video)
```

#### Kotlin

```kotlin
val mediaInfo = Media.createMediaObject("videoName",
                                        "videoId",
                                        60,
                                        MediaConstants.StreamType.VOD,
                                        Media.MediaType.Video)
```

<Variant platform="ios" api="stream-type" repeat="6"/>

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

**Example**

#### Swift

```swift
var mediaObject = Media.createMediaObjectWith(name: "videoName", 
                                                id: "videoId", 
                                            length: 60, 
                                        streamType: MediaConstants.StreamType.VOD,    
                                         mediaType: MediaType.Video)
```

#### Objective-C

```objc
NSDictionary *mediaObject = [AEPMobileEdgeMedia createMediaObjectWith:@"videoName" 
                                                               id:@"videoId" 
                                                           length:60
                                                       streamType:AEPEdgeMediaStreamType.VOD      
                                                        mediaType:AEPEdgeMediaTypeVideo];
```

<Variant platform="android" api="standard-video-constants" repeat="6"/>

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

**Example**

#### Java

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

#### Kotlin

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

<Variant platform="ios" api="standard-video-constants" repeat="6"/>

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

**Example**

#### Swift

```swift
var mediaInfo = Media.createMediaObjectWith(name: "videoName", id: "videoId", length: 60, streamType: MediaConstants.StreamType.VOD, mediaType: MediaType.Video)

var videoMetadata: [String: String] = [:]
// Standard Video Metadata
videoMetadata[MediaConstants.VideoMetadataKeys.SHOW] = "Sample Show"
videoMetadata[MediaConstants.VideoMetadataKeys.SEASON] = "Sample Season"

tracker.trackSessionStart(info: mediaInfo, metadata: videoMetadata)
```

#### Objective-C

```objc
NSDictionary *mediaInfo = [AEPMobileEdgeMedia createMediaObjectWith:@"videoName" id:@"videoId" length:60 streamType:AEPEdgeMediaStreamType.VOD mediaType:AEPEdgeMediaTypeVideo];

NSMutableDictionary *videoMetadata = [[NSMutableDictionary alloc] init];
// Standard Video Metadata
[videoMetadata setObject:@"Sample Show" forKey:AEPEdgeMediaVideoMetadataKeys.SHOW];
[videoMetadata setObject:@"Sample Season" forKey:AEPEdgeMediaVideoMetadataKeys.SEASON];

[tracker trackSessionStart:mediaInfo metadata:videoMetadata];
```

<Variant platform="android" api="standard-audio-constants" repeat="6"/>

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
**Example**

#### Java

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

#### Kotlin

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

<Variant platform="ios" api="standard-audio-constants" repeat="6"/>

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

**Example**

#### Swift

```swift
var audioObject = Media.createMediaObjectWith(name: "audioName", id: "audioId", length: 30, streamType: MediaConstants.StreamType.AOD, mediaType: MediaType.AUDIO)

var audioMetadata: [String: String] = [:]
// Standard Audio Metadata
audioMetadata[MediaConstants.AudioMetadataKeys.ARTIST] = "Sample Artist"
audioMetadata[MediaConstants.AudioMetadataKeys.ALBUM] = "Sample Album"

tracker.trackSessionStart(info: audioObject, metadata: audioMetadata)
```

#### Objective-C

```objc
NSDictionary *audioObject = [AEPMobileEdgeMedia createMediaObjectWith:@"audioName" id:@"audioid" length:30 streamType:AEPEdgeMediaStreamType.AOD mediaType:AEPEdgeMediaTypeAudio];

NSMutableDictionary *audioMetadata = [[NSMutableDictionary alloc] init];
// Standard Audio Metadata
[audioMetadata setObject:@"Sample Artist" forKey:AEPEdgeMediaAudioMetadataKeys.ARTIST];
[audioMetadata setObject:@"Sample Album" forKey:AEPEdgeMediaAudioMetadataKeys.ALBUM];

[tracker trackSessionStart:audioObject metadata:audioMetadata];
```

<Variant platform="android" api="standard-ad-constants" repeat="6"/>

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

**Example**

#### Java

```java
HashMap<String, Object> adInfo = Media.createAdObject("adName", "adId", 1, 15);

HashMap<String, String> adMetadata = new HashMap<String, String>();
                
// Standard Video Metadata
adMetadata.put(MediaConstants.AdMetadataKeys.ADVERTISER, "Sample Advertiser");
adMetadata.put(MediaConstants.AdMetadataKeys.CAMPAIGN_ID, "Sample Campaign");

tracker.trackEvent(Media.Event.AdStart, adInfo, adMetadata);
```

#### Kotlin

```java
val adInfo = Media.createAdObject("adName", "adId", 1, 15)
val adMetadata = mutableMapOf(MediaConstants.AdMetadataKeys.ADVERTISER to "Sample Advertiser",
                              MediaConstants.AdMetadataKeys.CAMPAIGN_ID to "Sample Campaign")


tracker.trackEvent(Media.Event.AdStart, adInfo, adMetadata)
```

<Variant platform="ios" api="standard-ad-constants" repeat="6"/>

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

**Example**

#### Swift

```swift
let adInfo = Media.createObjectWith(name: "adName", id: "adId", position: 0, length: 30)
var adMetadata: [String: String] = [:]
// Standard Ad Metadata
adMetadata[MediaConstants.AdMetadataKeys.ADVERTISER] = "Sample Advertiser"
adMetadata[MediaConstants.AdMetadataKeys.CAMPAIGN_ID] = "Sample Campaign"

tracker.trackEvent(event: MediaEvent.AdStart, info: adInfo, metadata: adMetadata)
```

#### Objective-C

```objc
NSDictionary *adInfo = [AEPMobileEdgeMedia createAdObjectWith:@"adName" id:@"adId" position:0 length:30];

NSMutableDictionary *adMetadata = [[NSMutableDictionary alloc] init];
// Standard Ad Metadata
[adMetadata setObject:@"Sample Advertiser" forKey:AEPEdgeAdMetadataKeys.ADVERTISER];
[adMetadata setObject:@"Sample Campaign" forKey:AEPEdgeAdMetadataKeys.CAMPAIGN_ID];

[tracker trackEvent:AEPEdgeMediaEventAdStart info:adInfo metadata:adMetadata];
```

<Variant platform="android" api="player-state-constants" repeat="6"/>

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

**Example**

#### Java

```java
HashMap<String, Object> fullScreenState = Media.createStateObject(MediaConstants.PlayerState.FULLSCREEN);
```

#### Kotlin

```java
val fullScreenState = Media.createStateObject(MediaConstants.PlayerState.FULLSCREEN)
```


<Variant platform="ios" api="player-state-constants" repeat="6"/>

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

**Example**

#### Swift

```swift
let inFocusState = Media.createStateObjectWith(stateName: MediaConstants.PlayerState.IN_FOCUS)
tracker.trackEvent(event: MediaEvent.StateStart, info: inFocusState, metadata: nil)
```

#### Objective-C

```objc
NSDictionary* inFocusState = [AEPMobileEdgeMedia createStateObjectWith:AEPEdgeMediaPlayerState.IN_FOCUS];
[tracker trackEvent:AEPEdgeMediaEventStateStart info:muteState metadata:nil];
```

<Variant platform="android" api="media-events" repeat="6"/>

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

#### Java

```java
tracker.trackEvent(Media.Event.BitrateChange, null, null);
```

#### Kotlin

```java
tracker.trackEvent(Media.Event.BitrateChange, null, null)
```


<Variant platform="ios" api="media-events" repeat="6"/>

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

**Example**

#### Swift

```swift
tracker.trackEvent(event: MediaEvent.BitrateChange, info: nil, metadata: nil)
```

#### Objective-C

```objc
[tracker trackEvent:AEPEdgeMediaEventBitrateChange info:nil metadata:nil];
```

<Variant platform="android" api="media-resume" repeat="8"/>

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

#### Java

```java
HashMap<String, Object> mediaInfo = Media.createMediaObject("mediaName", "mediaId", 60, MediaConstants.StreamType.VOD, Media.MediaType.Video);

// Attach media resumed information.
mediaInfo.put(MediaConstants.MediaObjectKey.RESUMED, true);

tracker.trackSessionStart(mediaInfo, null);
```

#### Kotlin

```java
val mediaInfo = Media.createMediaObject("mediaName", "mediaId", 60, MediaConstants.StreamType.VOD, Media.MediaType.Video)

// Attach media resumed information.
mediaInfo[MediaConstants.MediaObjectKey.RESUMED] = true

tracker.trackSessionStart(mediaInfo, null)
```

<Variant platform="ios" api="media-resume" repeat="10"/>

#### Swift

**Syntax**

```swift
public class MediaConstants: NSObject {
 @objc(AEPEdgeMediaObjectKey)
 public class MediaObjectKey: NSObject {
        public static let RESUMED = "media.resumed"
    }
}
```

**Example**

```swift
var mediaObject = Media.createMediaObjectWith(name: "videoName", id: "videoId", length: 60, streamType: MediaConstants.StreamType.VOD, mediaType: MediaType.Video)
mediaObject[MediaConstants.MediaObjectKey.RESUMED] = true

tracker.trackSessionStart(info: mediaObject, metadata: nil)
```

#### Objective-C

**Syntax**

```objectivec
@interface AEPEdgeMediaObjectKey : NSObject
+ (NSString * _Nonnull)RESUMED
```

**Example**

```objectivec
NSDictionary *mediaObject = [AEPMobileEdgeMedia createMediaObjectWith:@"videoName" id:@"videoId" length:60 streamType:AEPEdgeMediaStreamType.VOD mediaType:AEPEdgeMediaTypeVideo];

// Attach media resumed information.    
NSMutableDictionary *obj  = [mediaObject mutableCopy];
[obj setObject:@YES forKey:AEPEdgeMediaObjectKey.RESUMED];

[tracker trackSessionStart:obj metadata:nil];
```
