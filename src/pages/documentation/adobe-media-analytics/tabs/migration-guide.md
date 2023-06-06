<Variant platform="android" section="install-dependency" repeat="2"/>

Download extension with dependencies using [Maven](https://maven.apache.org/) & [Gradle](https://gradle.org/)

```diff
  implementation 'com.adobe.marketing.mobile:core:2.+'
- implementation 'com.adobe.marketing.mobile:identity:2.+'
- implementation 'com.adobe.marketing.mobile:analytics:2.+'
- implementation 'com.adobe.marketing.mobile:media:3.+'
+ implementation 'com.adobe.marketing.mobile:edge:2.+'
+ implementation 'com.adobe.marketing.mobile:edgeidentity:2.+'
+ implementation 'com.adobe.marketing.mobile:edgemedia:2.+'
```

<Variant platform="ios" section="install-dependency" repeat="10"/>

Download extension with dependencies

#### 1. Using Cocoapods

```diff
  pod 'AEPCore'
- pod 'AEPAnalytics'
- pod 'AEPMedia'
+ pod 'AEPEdge'
+ pod 'AEPEdgeIdentity'
+ pod 'AEPEdgeMedia'
```

#### 2. Using SPM:

Import the package:

a. Using repository URL

```diff
- https://github.com/adobe/aepsdk-media-ios.git
+ https://github.com/adobe/aepsdk-edgemedia-ios.git
```

b. Using `Package.swift` file

Make changes to your dependencies as shown below:
   
```diff
  dependencies: [
  .package(url: "https://github.com/adobe/aepsdk-core-ios.git", .upToNextMajor(from: "4.0.0")),
- .package(url: "https://github.com/adobe/aepsdk-analytics-ios.git", .upToNextMajor(from: "4.0.0")),
- .package(url: "https://github.com/adobe/aepsdk-media-ios.git", .upToNextMajor(from: "4.0.0"))
+ .package(url: "https://github.com/adobe/aepsdk-edge-ios.git", .upToNextMajor(from: "4.0.0")),
+ .package(url: "https://github.com/adobe/aepsdk-edgeidentity-ios.git", .upToNextMajor(from: "4.0.0")),
+ .package(url: "https://github.com/adobe/aepsdk-edgemedia-ios.git", .upToNextMajor(from: "4.0.0"))
  ]
```

<Variant platform="android" section="import-dependency" repeat="4"/>

1. Import extensions

```diff
  import com.adobe.marketing.mobile.MobileCore;
- import com.adobe.marketing.mobile.Identity;
- import com.adobe.marketing.mobile.Analytics;
- import com.adobe.marketing.mobile.Media;
+ import com.adobe.marketing.mobile.Edge;
+ import com.adobe.marketing.mobile.edge.identity.Identity;
+ import com.adobe.marketing.mobile.edge.media.Media;
```

2. Register extensions

```diff
public class MainApp extends Application {
    private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";

    @Override
    public void onCreate() {
        super.onCreate();

        MobileCore.setApplication(this);
        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);

-        List<Class<? extends Extension>> extensions = Arrays.asList(
-                Media.EXTENSION, Analytics.EXTENSION, Identity.EXTENSION);
+       List<Class<? extends Extension>> extensions = Arrays.asList(
+                Media.EXTENSION, Edge.EXTENSION, Identity.EXTENSION);
        MobileCore.registerExtensions(extensions, o -> {
            Log.d(LOG_TAG, "AEP Mobile SDK is initialized");
        });
    }
}
```

<Variant platform="ios" section="import-dependency" repeat="4"/>

1. Import extensions

```diff
// AppDelegate.swift
import AEPCore
- import AEPIdentity
- import AEPAnalytics
- import AEPMedia
+ import AEPEdge
+ import AEPEdgeIdentity
+ import AEPEdgeMedia
```

2. Register extensions

```diff
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
-  MobileCore.registerExtensions([Identity.self, Analytics.self, Media.self], {
+  MobileCore.registerExtensions([Edge.self, Identity.self, Media.self], {

    MobileCore.configureWith(appId: "yourEnvironmentID")
   })
   ...
}
```


<Variant platform="android" section="api-changes" repeat="15"/>

#### package name

The Media for Edge Network extension uses the same class names as the Media Analytics extension. The Java package, however, is changed to `com.adobe.marketing.mobile.edge.media`. 

```diff
- import com.adobe.marketing.mobile.Media;
- import com.adobe.marketing.mobile.MediaConstants;
- import com.adobe.marketing.mobile.MediaTracker;
+ import com.adobe.marketing.mobile.edge.media.Media;
+ import com.adobe.marketing.mobile.edge.media.MediaConstants;
+ import com.adobe.marketing.mobile.edge.media.MediaTracker;
```

#### createMediaObject

```diff
- public static HashMap<String, Object> createMediaObject(String name,
-                                                         String id,
-                                                         double length,
-                                                         String streamType,
-                                                         MediaType mediaType);
+ public static HashMap<String, Object> createMediaObject(String name,
+                                                         String id,
+                                                         int length,
+                                                         String streamType,
+                                                         MediaType mediaType);
```

#### createAdBreakObject

```diff
- public static HashMap<String, Object> createAdBreakObject(String name, long position, double startTime);
+ public static HashMap<String, Object> createAdBreakObject(String name, int position, int startTime);
```

#### createAdObject

```diff
- public static HashMap<String, Object> createAdObject(String name, String id, long position, double length);
+ public static HashMap<String, Object> createAdObject(String name, String id, int position, int length);
```

#### createChapterObject

```diff
- public static HashMap<String, Object> createChapterObject(String name,
-                                                           long position,
-                                                           double length,
-                                                           double startTime);
+ public static HashMap<String, Object> createChapterObject(String name,
+                                                           int position,
+                                                           int length,
+                                                           int startTime);
```

#### createQoeObject

```diff
- public static HashMap<String, Object> createQoEObject(long bitrate,
-                                                       double startupTime,
-                                                       double fps,
-                                                       long droppedFrames);
+ public static HashMap<String, Object> createQoEObject(int bitrate,
+                                                       int startupTime,
+                                                       int fps,
+                                                       int droppedFrames);
```

#### updateCurrentPlayhead

```diff
- public void updateCurrentPlayhead(double time);
+ public void updateCurrentPlayhead(int time);
```

<Variant platform="ios" section="api-changes" repeat="12"/>

##### createMediaObjectWith

```diff
- static func createMediaObjectWith(name: String, id: String, length: Double, streamType: String, mediaType: MediaType) -> [String: Any]?
+ static func createMediaObjectWith(name: String, id: String, length: Int, streamType: String, mediaType: MediaType) -> [String: Any]?
```

##### createAdBreakObjectWith

```diff
- static func createAdBreakObjectWith(name: String, position: Int, startTime: Double) -> [String: Any]?
+ static func createAdBreakObjectWith(name: String, position: Int, startTime: Int) -> [String: Any]?
```

##### createAdbjectWith

```diff
- static func createAdObjectWith(name: String, id: String, position: Int, length: Double) -> [String: Any]?
+ static func createAdObjectWith(name: String, id: String, position: Int, length: Int) -> [String: Any]?
```

##### createChapterObjectWith

```diff
- static func createChapterObjectWith(name: String, position: Int, length: Double, startTime: Double) -> [String: Any]?
+ static func createChapterObjectWith(name: String, position: Int, length: Int, startTime: Int) -> [String: Any]?
```

##### createQoEObjectWith

```diff
- static func createQoEObjectWith(bitrate: Double, startupTime: Double, fps: Double, droppedFrames: Double) -> [String: Any]?
+ static func createQoEObjectWith(bitrate: Int, startupTime: Int, fps: Int, droppedFrames: Int) -> [String: Any]?
```

##### updateCurrentPlayhead

```diff
- func updateCurrentPlayhead(time: Double)
+ func updateCurrentPlayhead(time: Int)
```

<Variant platform="android" section="custom-interval" repeat="2"/>

#### Java

```diff
+ HashMap<String, Object> trackerConfig = new HashMap<>();
+ trackerConfig.put(MediaConstants.Config.AD_PING_INTERVAL, 1);

- MediaTracker tracker = Media.createTracker()
+ MediaTracker tracker = Media.createTrackerWith(trackerConfig);

HashMap<String, Object> mediaObject = Media.createMediaObject("name", "id", 30, "vod", Media.MediaType.Video);
- mediaObject.put(MediaConstants.MediaObjectKey.GRANULAR_AD_TRACKING, true)

HashMap<String, String> videoMetadata = new HashMap<String, String>();
videoMetadata.put(MediaConstants.VideoMetadataKeys.EPISODE, "Sample Episode");
videoMetadata.put(MediaConstants.VideoMetadataKeys.SHOW, "Sample Show");

tracker.trackSessionStart(mediaObject, videoMetadata)
```

<Variant platform="ios" section="custom-interval" repeat="2"/>

#### Swift

```diff
+ var trackerConfig: [String: Any] = [:]
+ trackerConfig[MediaConstants.TrackerConfig.AD_PING_INTERVAL] = 1

- let tracker = Media.createTracker()
+ let tracker = Media.createTrackerWith(config: trackerConfig)

guard var mediaObject = Media.createMediaObjectWith(name: "name", id: "id", length: 30, streamType: "vod", mediaType: MediaType.Video) else {
  return
}
- mediaObject[MediaConstants.MediaObjectKey.GRANULAR_AD_TRACKING] = true

tracker.trackSessionStart(info: mediaObject, metadata: videoMetadata)
```