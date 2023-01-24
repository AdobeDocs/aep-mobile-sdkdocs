<Variant platform="android" task="create" repeat="2"/>

#### Java

```java
Map<String, Object> reviewXdmData = new HashMap<>();
reviewXdmData.put("productSku", "demo123");
reviewXdmData.put("rating", 5);
reviewXdmData.put("reviewText", "I love this demo!");
reviewXdmData.put("reviewerId", "Anonymous user");

Map<String, Object> xdmData = new HashMap<>();
xdmData.put("eventType", "MyFirstXDMExperienceEvent");
xdmData.put(_yourTenantId, reviewXdmData);

ExperienceEvent experienceEvent = new ExperienceEvent.Builder()
                .setXdmSchema(xdmData)
                .build();
```

<Variant platform="ios" task="create" repeat="4"/>

#### Swift

```swift
var xdmData : [String: Any] = [:]
xdmData["eventType"] = "MyFirstXDMExperienceEvent"
xdmData[_yourTenantId] = ["productSku": "demo123",
                          "rating": 5,
                          "reviewText": "I love this demo!",
                          "reviewerId": "Anonymous user"]
let experienceEvent = ExperienceEvent(xdm: xdmData)
```

#### Objective-C

```objc
NSDictionary<NSString*, NSObject*>* xdmData;
[xdmData setValue:@"MyFirstXDMExperienceEvent" forKey:@"eventType"];
[xdmData setValue:@{@"productSku": @"demo123",
                    @"rating": @5,
                    @"reviewText": @"I love this demo!",
                    @"reviewerId": @"Anonymous user"}
                      forKey:_yourTenantId];
AEPExperienceEvent *experienceEvent = [[AEPExperienceEvent alloc] initWithXdm:xdmData data:nil datasetIdentifier:nil];
```

<Variant platform="android" task="send" repeat="2"/>

#### Java

```java
Edge.sendEvent(experienceEvent, null);
```

<Variant platform="ios" task="send" repeat="4"/>

#### Swift

```swift
Edge.sendEvent(experienceEvent: experienceEvent)
```

#### Objective-C

```objc
[AEPMobileEdge sendExperienceEvent:event completion:nil];
```

<Variant platform="android" task="track-action" repeat="5"/>

#### Java 

**Syntax**

```java
public static void trackAction(final String action, final Map<String, String> contextData)
```

**Example**

```java
Map<String, String> additionalContextData = new HashMap<String, String>();
additionalContextData.put("customKey", "value");
MobileCore.trackAction("loginClicked", additionalContextData);
```

<Variant platform="ios" task="track-action" repeat="10"/>

#### Swift

**Syntax**

```swift
static func track(action: String?, data: [String: Any]?)
```

**Example**

```swift
MobileCore.track(action: "actionName", data: ["key": "value"])
```

#### Objective-C

**Syntax**

```swift
@objc(trackAction:data:)
static func track(action: String?, data: [String: Any]?)
```

**Example**

```objectivec
[AEPMobileCore trackAction:@"action name" data:@{@"key": @"value"}];
```

<!-- <Variant platform="react-native" task="track-action" repeat="5"/>

#### JavaScript

**Syntax**

```jsx
trackAction(action?: String, contextData?: { string: string });
```

**Example**

```jsx
ACPCore.trackAction("action", {"mytest": "action"});
``` -->

<!-- <Variant platform="flutter" task="track-action" repeat="5"/>

#### Dart

**Syntax**

```dart
Future<void> trackAction(String action, {Map<String, String> data});
```

**Example**

```dart
FlutterACPCore.trackAction("mytest",  data: {"mytest": "action"});J
``` -->

<!-- <Variant platform="cordova" task="track-action" repeat="2"/>

#### Javascript

```javascript
ACPCore.trackAction("cordovaAction", {"cordovaKey":"cordovaValue"}, successCallback, errorCallback);
```

<Variant platform="unity" task="track-action" repeat="2"/>

#### C#

```csharp
var contextData = new Dictionary<string, string>();
contextData.Add("key", "value");
ACPCore.TrackAction("action name", contextData);
```

<Variant platform="xamarin" task="track-action" repeat="5"/>

#### C#

**iOS**

```csharp
var data = new NSMutableDictionary<NSString, NSString>
{
  ["key"] = new NSString("value")
};
ACPCore.TrackAction("action", data);
```

**Android**

```csharp
var data = new Dictionary<string, string>();
data.Add("key", "value");
ACPCore.TrackAction("action", data);
``` -->

<Variant platform="android" task="track-state" repeat="6"/>

On Android, `trackState` is typically called each time a new activity is loaded.

#### Java

**Syntax**

```java
public static void trackState(final String state, final Map<String, String> contextData)
```

**Example**

```java
Map<String, String> additionalContextData = new HashMap<String, String>();         
additionalContextData.put("customKey", "value");         
MobileCore.trackState("homePage", additionalContextData);
```

<Variant platform="ios" task="track-state" repeat="10"/>

#### Swift

**Syntax**

```swift
static func track(state: String?, data: [String: Any]?) 
```

**Example**

```swift
MobileCore.track(state: "state name", data: ["key": "value"])
```

#### Objective-C

**Syntax**

```swift
@objc(trackState:data:)
static func track(state: String?, data: [String: Any]?) 
```

**Example**

```objectivec
[AEPMobileCore trackState:@"state name" data:@{@"key": @"value"}];
```

<!-- <Variant platform="react-native" task="track-state" repeat="5"/>

#### JavaScript

**Syntax**

```jsx
trackState(state?: String, contextData?: { string: string });
```

**Example**

```jsx
ACPCore.trackState("state", {"mytest": "state"});
``` -->

<!-- <Variant platform="flutter" task="track-state" repeat="5"/>

#### Dart

**Syntax**

```dart
Future<void> trackState(String state, {Map<String, String> data});
```

**Example**

```dart
FlutterACPCore.trackState("state",  data: {"mytest": "state"});
``` -->

<!-- <Variant platform="cordova" task="track-state" repeat="2"/>

#### Javascript

```javascript
ACPCore.trackState("cordovaState", {"cordovaKey":"cordovaValue"}, successCallback, errorCallback);
```

<Variant platform="unity" task="track-state" repeat="2"/>

#### C#

```csharp
var dict = new Dictionary<string, string>();
dict.Add("key", "state value");
ACPCore.TrackState("state", dict);
```

<Variant platform="xamarin" task="track-state" repeat="5"/>

#### C#

**iOS**

```csharp
var data = new NSMutableDictionary<NSString, NSString>
{
  ["key"] = new NSString("value")
};
ACPCore.TrackState("state", data);
```

**Android**

```csharp
var data = new Dictionary<string, string>();
data.Add("key", "value");
ACPCore.TrackState("state", data);
``` -->