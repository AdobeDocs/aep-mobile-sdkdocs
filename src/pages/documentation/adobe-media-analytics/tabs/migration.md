<Variant platform="aep-swift" api="extension-version" repeat="1"/>

```swift
static var extensionVersion: String
```

<Variant platform="aep-objc" api="extension-version" repeat="1"/>

```objc
+ (nonnull NSString*) extensionVersion;
```

<Variant platform="acp-objc" api="extension-version" repeat="1"/>

```objc
+ (nonnull NSString*) extensionVersion;
```

<Variant platform="aep-swift" api="create-tracker" repeat="1"/>

```swift
static func createTracker()
```

<Variant platform="aep-objc" api="create-tracker" repeat="1"/>

```objc
+ (id<AEPMediaTracker> _Nonnull) createTracker;
```

<Variant platform="acp-objc" api="create-tracker" repeat="1"/>

```objc
+(ACPMediaTracker* _Nullable) createTracker;
```

<Variant platform="aep-swift" api="create-tracker-with-config" repeat="1"/>

```swift
static func createTrackerWith(config: [String: Any]?)
```

<Variant platform="aep-objc" api="create-tracker-with-config" repeat="1"/>

```objc
+ (id<AEPMobileMediaTracker> _Nonnull) createTrackerWithConfig:(NSDictionary<NSString *,id) * _Nullable) config;
```

<Variant platform="acp-objc" api="create-tracker-with-config" repeat="1"/>

```objc
+ (ACPMediaTracker* _Nullable) createTrackerWithConfig: (NSDictionary* _Nullable) config;
```

<Variant platform="aep-swift" api="create-ad-break-object" repeat="1"/>

```swift
static func createAdBreakObjectWith(name: String, position: Int, startTime: Double) -> [String: Any]?
```

<Variant platform="aep-objc" api="create-ad-break-object" repeat="1"/>

```objc
+ (NSDictionary<NSString * ,id> * _Nullable) createAdBreakObjectWith: (NSString * _Nonnull) name
                                                             position: (NSInteger) position
                                                            startTime: (double) startTime,
```

<Variant platform="acp-objc" api="create-ad-break-object" repeat="1"/>

```objc
+ (NSDictionary* _Nonnull) createAdBreakObjectWithName: (NSString* _Nonnull) name
                                              position: (double) position
                                             startTime: (double) startTime;
```

<Variant platform="aep-swift" api="create-ad-object" repeat="1"/>

```swift
static func createAdObjectWith(name: String, id: String, position: Int, length: Double) -> [String: Any]?
```

<Variant platform="aep-objc" api="create-ad-object" repeat="1"/>

```objc
+ (NSDictionary<NSString * ,id>) * _Nullable) createAdObjectWith: (NSString * _Nonnull) name
                                                              id: (NSString * _Nonnull) id
                                                        position: (NSInteger) position
                                                          length: (double) length;
```

<Variant platform="acp-objc" api="create-ad-object" repeat="1"/>

```objc
+ (NSDictionary* _Nonnull) createAdObjectWithName: (NSString* _Nonnull) name
                                             adId: (NSString* _Nonnull) adId
                                         position: (double) position
                                           length: (double) length;
```

<Variant platform="aep-swift" api="create-chapter-object" repeat="1"/>

```swift
static func createChapterObjectWith(name: String, position: Int, length: Double, startTime: Double) -> [String: Any]?
```

<Variant platform="aep-objc" api="create-chapter-object" repeat="1"/>

```objc
+ (NSDictionary<NSString * ,id>) * _Nullable) createChapterObjectWith: (NSString * _Nonnull) name
                                                             position: (NSInteger) position
                                                               length: (double) length
                                                            startTime: (double) startTime;
```

<Variant platform="acp-objc" api="create-chapter-object" repeat="1"/>

```objc
+ (NSDictionary* _Nonnull) createChapterObjectWithName: (NSString* _Nonnull) name
                                              position: (double) position
                                                length: (double) length
                                             startTime: (double) startTime;
```

<Variant platform="aep-swift" api="create-qoe-object" repeat="1"/>

```swift
static func createQoEObjectWith(bitrate: Double, startupTime: Double, fps: Double, droppedFrames: Double) -> [String: Any]?
```

<Variant platform="aep-swift" api="create-media-object" repeat="1"/>

```swift
static func createMediaObjectWith(name: String, id: String, length: Double, streamType: String, mediaType: MediaType) -> [String: Any]?
```

<Variant platform="aep-objc" api="create-media-object" repeat="1"/>

```objc
+ (NSDictionary*<NSString *,id> *_Nullable) createMediaObjectWith: (NSString *, _Nonnull) name 
                                                               id: (NSString * _Nonnull) id
                                                           length: (double) length
                                                       streamType: (NSString * _Nonnull) streamType
                                                        mediaType: (enum AEPMediaType) mediaType;
```

<Variant platform="acp-objc" api="create-media-object" repeat="1"/>

```objc
+ (NSDictionary* _Nonnull) createMediaObjectWithName: (NSString* _Nonnull) name
                                             mediaId: (NSString* _Nonnull) mediaId
                                              length: (double) length
                                          streamType: (NSString* _Nonnull) streamType
                                           mediaType: (ACPMediaType) mediaType;
```

<Variant platform="aep-objc" api="create-qoe-object" repeat="1"/>

```objc
+ (NSDictionary<NSString * ,id>) * _Nullable) createQoEObjectWith: (double) bitrate
                                                        startTime: (double) startTime
                                                              fps: (double) fps 
                                                    droppedFrames: (double) droppedFrames;
```

<Variant platform="acp-objc" api="create-qoe-object" repeat="1"/>

```objc
+ (NSDictionary* _Nonnull) createQoEObjectWithBitrate: (double) bitrate
                                          startupTime: (double) startupTime
                                                  fps: (double) fps
                                        droppedFrames: (double) droppedFrames;
```

<Variant platform="aep-swift" api="create-state-object" repeat="1"/>

```swift
static func createStateObjectWith(stateName: String) -> [String: Any]
```

<Variant platform="aep-objc" api="create-state-object" repeat="1"/>

```objc
+ (NSDictionary<NSString * ,id>) * _Nullable) createStateObjectWith: (NSString * _Nonnull) stateName;
```

<Variant platform="acp-objc" api="create-state-object" repeat="1"/>

```objc
+ (NSDictionary* _Nonnull) createStateObjectWithName: (NSString* _Nonnull) stateName;
```

<Variant platform="aep-swift" api="track-event" repeat="1"/>

```swift
func trackEvent(event: MediaEvent, info: [String: Any]?, metadata: [String: String]?)
```

<Variant platform="aep-objc" api="track-event" repeat="1"/>

```objc
- (void) trackEvent: (enum AEPMediaEvent) event
               info: (NSDictionary* <NSString *,id> * _Nullable) info
               data: (NSDictionary* <NSString *,NSString> * _Nullable) data;
```

<Variant platform="acp-objc" api="track-event" repeat="1"/>

```objc
  - (void) trackEvent: (ACPMediaEvent) event
                 info: (NSDictionary* _Nullable) info
                 data: (NSDictionary* _Nullable) data;
```

<Variant platform="aep-swift" api="track-session-start" repeat="1"/>

```swift
public func trackSessionStart(info: [String: Any], metadata: [String: String]? = nil)
```

<Variant platform="aep-objc" api="track-session-start" repeat="1"/>

```objc
- (void) trackSessionStart:(NSDictionary<NSString *,id> * _Nonnull) mediaInfo metadata:(NSDictionary<NSString *,NSString *> * _Nullable) data;
```

<Variant platform="acp-objc" api="track-session-start" repeat="1"/>

```objc
- (void) trackSessionStart: (NSDictionary* _Nonnull) mediaInfo data: (NSDictionary* _Nullable) contextData;
```

<Variant platform="aep-swift" api="track-play" repeat="1"/>

```swift
func trackPlay()
```

<Variant platform="aep-objc" api="track-play" repeat="1"/>

```objc
- (void) trackPlay;
```

<Variant platform="acp-objc" api="track-play" repeat="1"/>

```objc
- (void) trackPlay;
```

<Variant platform="aep-swift" api="track-pause" repeat="1"/>

```swift
func trackPause()
```

<Variant platform="aep-objc" api="track-pause" repeat="1"/>

```objc
- (void) trackPause;
```

<Variant platform="acp-objc" api="track-pause" repeat="1"/>

```objc
- (void) trackPause;
```

<Variant platform="aep-swift" api="track-complete" repeat="1"/>

```swift
func trackComplete()
```

<Variant platform="aep-objc" api="track-complete" repeat="1"/>

```objc
- (void) trackComplete;
```

<Variant platform="acp-objc" api="track-complete" repeat="1"/>

```objc
- (void) trackComplete;
```

<Variant platform="aep-swift" api="track-session-end" repeat="1"/>

```swift
func trackSessionEnd()
```

<Variant platform="aep-objc" api="track-session-end" repeat="1"/>

```objc
- (void) trackSessionEnd;
```

<Variant platform="acp-objc" api="track-session-end" repeat="1"/>

```objc
- (void) trackSessionEnd;
```

<Variant platform="aep-swift" api="track-error" repeat="1"/>

```swift
func trackError(errorId: String)
```

<Variant platform="aep-objc" api="track-error" repeat="1"/>

```objc
- (void) trackError: (NSString* _Nonnull) errorId;
```

<Variant platform="acp-objc" api="track-error" repeat="1"/>

```objc
- (void) trackError: (NSString* _Nonnull) errorId;
```

<Variant platform="aep-swift" api="update-current-playhead" repeat="1"/>

```swift
func updateCurrentPlayhead(time: Double)
```

<Variant platform="aep-objc" api="update-current-playhead" repeat="1"/>

```objc
- (void) updateCurrentPlayhead: (double) time;
```

<Variant platform="acp-objc" api="update-current-playhead" repeat="1"/>

```objc
- (void) updateCurrentPlayhead: (double) time;
```

<Variant platform="aep-swift" api="update-qoe-object" repeat="1"/>

```swift
func updateQoEObject(qoe: [String: Any])
```

<Variant platform="aep-objc" api="update-qoe-object" repeat="1"/>

```objc
- (void) updateQoEObject: (NSDictionary*<NSString *,id> _Nonnull) qoeObject;
```

<Variant platform="acp-objc" api="update-qoe-object" repeat="1"/>

```objc
- (void) updateQoEObject: (NSDictionary* _Nonnull) qoeObject;
```

<Variant platform="aep-swift" api="media-type" repeat="1"/>

```swift
public enum MediaType: Int, RawRepresentable {
 //Constant defining media type for Video streams
 case Audio
 //Constant defining media type for Audio streams
 case Video
}
```

<Variant platform="aep-objc" api="media-type" repeat="1"/>

```objc
@objc(AEPMediaType)
public enum MediaType: Int, RawRepresentable {
 //Constant defining media type for Video streams
 case Audio
 //Constant defining media type for Audio streams
 case Video
}
```

<Variant platform="acp-objc" api="media-type" repeat="1"/>

```objc
typedef NS_ENUM(NSInteger, ACPMediaType) {
    /**
    * Constant defining media type for Video streams
    */
    ACPMediaTypeVideo,

    /**
    * Constant defining media type for Audio streams
    */
    ACPMediaTypeAudio
};
```

<Variant platform="aep-swift" api="stream-type" repeat="1"/>

```swift
public class StreamType: NSObject {
     // Constant defining stream type for VOD streams.
        public static let VOD = "vod"
}
```

<Variant platform="aep-objc" api="stream-type" repeat="1"/>

```objc
public class MediaConstants: NSObject {
  @objc(AEPMediaStreamType)
  public class StreamType: NSObject {
     // Constant defining stream type for VOD streams.
        public static let VOD = "vod"
  }
}
```

<Variant platform="acp-objc" api="stream-type" repeat="1"/>

```objc
/**
 * Constant defining stream type for VOD streams
 */
FOUNDATION_EXPORT NSString* _Nonnull const ACPMediaStreamTypeVod;
```

<Variant platform="aep-swift" api="standard-video-constants" repeat="1"/>

```swift
public class VideoMetadataKeys: NSObject {
        public static let SHOW = "a.media.show"
}
```

<Variant platform="aep-objc" api="standard-video-constants" repeat="1"/>

```objc
public class MediaConstants: NSObject {
  @objc(AEPVideoMetadataKeys)
  public class VideoMetadataKeys: NSObject {
        public static let SHOW = "a.media.show"
  }
}
```

<Variant platform="acp-objc" api="standard-video-constants" repeat="1"/>

```objc
FOUNDATION_EXPORT NSString* _Nonnull const ACPVideoMetadataKeyShow;
```

<Variant platform="aep-swift" api="standard-audio-constants" repeat="1"/>

```swift
public class AudioMetadataKeys: NSObject {
        public static let ARTIST = "a.media.artist"
}
```

<Variant platform="aep-objc" api="standard-audio-constants" repeat="1"/>

```objc
public class MediaConstants: NSObject {
  @objc(AEPAudioMetadataKeys)
  public class AudioMetadataKeys: NSObject {
        public static let ARTIST = "a.media.artist"
  }
}
```

<Variant platform="acp-objc" api="standard-audio-constants" repeat="1"/>

```objc
FOUNDATION_EXPORT NSString* _Nonnull const ACPAudioMetadataKeyArtist;
```

<Variant platform="aep-swift" api="standard-ad-constants" repeat="1"/>

```swift
 public class AdMetadataKeys: NSObject {
        public static let ADVERTISER = "a.media.ad.advertiser"
 }
```

<Variant platform="aep-objc" api="standard-ad-constants" repeat="1"/>

```objc
public class MediaConstants: NSObject {
  @objc(AEPAdMetadataKeys)
  public class AdMetadataKeys: NSObject {
        public static let ADVERTISER = "a.media.ad.advertiser"
 }
}
```

<Variant platform="acp-objc" api="standard-ad-constants" repeat="1"/>

```objc
FOUNDATION_EXPORT NSString* _Nonnull const ACPAdMetadataKeyAdvertiser;
```

<Variant platform="aep-swift" api="player-state-constants" repeat="1"/>

```swift
public class PlayerState: NSObject {
        public static let FULLSCREEN = "fullscreen"
}
```

<Variant platform="aep-objc" api="player-state-constants" repeat="1"/>

```objc
public class MediaConstants: NSObject {
  @objc(AEPMediaPlayerState)
  public class PlayerState: NSObject {
        public static let FULLSCREEN = "fullscreen"
  }
}
```

<Variant platform="acp-objc" api="player-state-constants" repeat="1"/>

```objc
FOUNDATION_EXPORT NSString* _Nonnull const ACPMediaPlayerStateFullScreen;
```

<Variant platform="aep-swift" api="media-events" repeat="1"/>

```swift
public enum MediaEvent: Int, RawRepresentable {
 // event type for AdBreak start
    case AdBreakStart
}
```

<Variant platform="aep-objc" api="media-events" repeat="1"/>

```objc
@objc(AEPMediaEvent)
public enum MediaEvent: Int, RawRepresentable {
// event type for AdBreak start
    case AdBreakStart
}
```

<Variant platform="acp-objc" api="media-events" repeat="1"/>

```objc
typedef NS_ENUM(NSInteger, ACPMediaEvent) {
    /**
     * Constant defining event type for AdBreak start
     */
    ACPMediaEventAdBreakStart,
}
```

<Variant platform="aep-swift" api="media-resume" repeat="1"/>

```swift
 public class MediaObjectKey: NSObject {
        public static let RESUMED = "media.resumed"
    }
}
```

<Variant platform="aep-objc" api="media-resume" repeat="1"/>

```objc
public class MediaConstants: NSObject {
 @objc(AEPMediaObjectKey)
 public class MediaObjectKey: NSObject {
        public static let RESUMED = "media.resumed"
    }
}
```

<Variant platform="acp-objc" api="media-resume" repeat="1"/>

```objc
FOUNDATION_EXPORT NSString* _Nonnull const ACPMediaKeyMediaResumed;
```