<Variant platform="android" api="extension-version" repeat="8"/>

#### Java

**Syntax**

```java
public static String extensionVersion();
```

**Example**

```java
String extensionVersion = Edge.extensionVersion();
```

#### Kotlin

**Example**

```java
val extensionVersion = EdgeBridge.extensionVersion()
```

<Variant platform="ios" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static let extensionVersion
```

**Example**

```swift
let extensionVersion = Edge.extensionVersion
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
NSString *extensionVersion = [AEPMobileEdge extensionVersion];
```

<Variant platform="android" api="get-location-hint" repeat="9"/>

#### Java

**Syntax**

```java
public static void getLocationHint(final AdobeCallback<String> callback)
```

* _callback_ is invoked with the location hint. The location hint value may be null if the location hint expired or was not set. The callback may be invoked on a different thread. If `AdobeCallbackWithError` is provided, the default timeout is 1000ms and the `fail` method is called if the operation times out or an unexpected error occurs.

**Example**

```java
Edge.getLocationHint(new AdobeCallbackWithError<String>() {
    @Override
    public void call(final String hint) {
        // Handle the hint here
    }

    @Override
    public void fail(AdobeError adobeError) {
        // Handle the error here
    }
});
```

#### Kotlin

**Example**

```java
Edge.getLocationHint(object: AdobeCallbackWithError<String> {
    override fun call(hint: String) {
      // Handle the hint here
    }
    override fun fail(error: AdobeError?) {
      // Handle the error here
    }
})
```

<Variant platform="ios" api="get-location-hint" repeat="11"/>

#### Swift

**Syntax**

```swift
static func getLocationHint(completion: @escaping (String?, Error?) -> Void)
```
* _completion_ is invoked with the location hint, or an `AEPError` if the request times out or an unexpected error occurs. The location hint value may be nil if the location hint expired or was not set. The default timeout is 1000ms. The completion handler may be invoked on a different thread.

**Example**

```swift
Edge.getLocationHint { (hint, error) in
  if let error = error {
    // Handle the error here
  } else {
    // Handle the location hint here
  }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getLocationHint:^(NSString * _Nullable hint, NSError * _Nullable error)completion
```

**Example**

```objectivec
[AEPMobileEdge getLocationHint:^(NSString *hint, NSError *error) {   
    // handle the error and the hint here
}];
```

<Variant platform="android" api="register-extension" repeat="5"/>

#### Java

**Syntax**

```java
public static void registerExtension();
```

**Example**

```java
Edge.registerExtension();
```

<Variant platform="ios" api="register-extension" repeat="12"/>

#### Swift

Use the MobileCore API to register the Edge extension.

**Syntax**

```swift
// MobileCore
public static func registerExtensions(_ extensions: [Extension.Type], _ completion: (() -> Void)? = nil)
```

**Example**

```swift
import AEPEdge

...
MobileCore.registerExtensions([Edge.self, ...], {
  // Processing after registration
})
```

#### Objective-C

Use the AEPMobileCore API to register the Edge extension.

**Syntax**

```objectivec
+ (void) registerExtensions: (NSArray<Class*>* _Nonnull) extensions 
                  completion: (void (^ _Nullable)(void)) completion;
```

**Example**

```objectivec
@import AEPEdge;

[AEPMobileCore registerExtensions:@[AEPMobileEdge.class] completion:nil];...

```

<Variant platform="android" api="send-event" repeat="13"/>

#### Java

**Syntax**

```java
public static void sendEvent(final ExperienceEvent experienceEvent, final EdgeCallback callback);
```

* _experienceEvent_ - the XDM [Experience Event](#experienceevent) to be sent to Adobe Experience Platform Edge Network
* _completion_ - optional callback to be invoked when the request is complete, returning the associated [EdgeEventHandle(s)](#edgeeventhandle) received from the Adobe Experience Platform Edge Network. It may be invoked on a different thread.

**Example**

```java
// Create Experience Event from map
Map<String, Object> xdmData = new HashMap<>();
xdmData.put("eventType", "SampleXDMEvent");
xdmData.put("sample", "data");
    
ExperienceEvent experienceEvent = new ExperienceEvent.Builder()
  .setXdmSchema(xdmData)
  .build();
```

```java
// Example 1 - send the Experience Event without handling the Edge Network response
Edge.sendEvent(experienceEvent, null);
```

```java
// Example 2 - send the Experience Event and handle the Edge Network response onComplete
Edge.sendEvent(experienceEvent, new EdgeCallback() {
  @Override
  public void onComplete(final List<EdgeEventHandle> handles) {
        // Handle the Edge Network response 
  }
});
```

#### Kotlin

**Example**

```java
// Create Experience Event from map
val xdmData = mutableMapOf<String, Any>()
xdmData["eventType"] = "SampleXDMEvent"
xdmData["sample"] = "data"

val experienceEvent = ExperienceEvent.Builder()
  .setXdmSchema(xdmData)
  .build()
```

```java
// Example 1 - send the Experience Event without handling the Edge Network response
Edge.sendEvent(experienceEvent, null)
```

```java
// Example 2 - send the Experience Event and handle the Edge Network response onComplete
Edge.sendEvent(experienceEvent) {
  // Handle the Edge Network response 
}
```

<Variant platform="ios" api="send-event" repeat="15"/>

#### Swift

**Syntax**

```swift
static func sendEvent(experienceEvent: ExperienceEvent, _ completion: (([EdgeEventHandle]) -> Void)? = nil)
```

* _experienceEvent_ - the XDM [Experience Event](#experienceevent) to be sent to Adobe Experience Platform Edge Network
* _completion_ - optional callback to be invoked when the request is complete, returning the associated [EdgeEventHandle(s)](#edgeeventhandle) received from the Adobe Experience Platform Edge Network. It may be invoked on a different thread.

**Example**

```swift
// Create Experience Event from dictionary:
var xdmData : [String: Any] = ["eventType" : "SampleXDMEvent",
                              "sample": "data"]
let experienceEvent = ExperienceEvent(xdm: xdmData)
```

```swift
// Example 1 - send the Experience Event without handling the Edge Network response
Edge.sendEvent(experienceEvent: experienceEvent)
```

```swift
// Example 2 - send the Experience Event and handle the Edge Network response onComplete
Edge.sendEvent(experienceEvent: experienceEvent) { (handles: [EdgeEventHandle]) in
            // Handle the Edge Network response
        }
```

#### Objective-C

**Syntax**

```objectivec
+ (void) sendExperienceEvent:(AEPExperienceEvent * _Nonnull) completion:^(NSArray<AEPEdgeEventHandle *> * _Nonnull)completion
```

**Example**

```objectivec
// Create Experience Event from dictionary:
NSDictionary *xdmData = @{ @"eventType" : @"SampleXDMEvent"};
NSDictionary *data = @{ @"sample" : @"data"};
```

```objectivec
// Example 1 - send the Experience Event without handling the Edge Network response
[AEPMobileEdge sendExperienceEvent:event completion:nil];
```

```objectivec
// Example 2 - send the Experience Event and handle the Edge Network response onComplete
[AEPMobileEdge sendExperienceEvent:event completion:^(NSArray<AEPEdgeEventHandle *> * _Nonnull handles) {
  // handle the Edge Network response
}];
```

<Variant platform="android" api="set-location-hint" repeat="9"/>

#### Java

**Syntax**

```java
public static void setLocationHint(final String hint)
```
- _hint_ the Edge Network location hint to use when connecting to the Adobe Experience Platform Edge Network.

**Example**

```java
Edge.setLocationHint(hint);
```

#### Kotlin

**Example**

```java
Edge.setLocationHint(hint)
```

<Variant platform="ios" api="set-location-hint" repeat="11"/>

#### Swift

**Syntax**

```swift
@objc(setLocationHint:)
public static func setLocationHint(_ hint: String?)
```
- _hint_ the Edge Network location hint to use when connecting to the Adobe Experience Platform Edge Network.

**Example**

```swift
Edge.setLocationHint(hint)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) setLocationHint: (NSString * _Nullable hint);
```

**Example**

```objectivec
[AEPMobileEdge setLocationHint:hint];
```

<Variant platform="android" api="xdm-schema" repeat="5"/>

#### Java

```java
/**
 * The interface that represents an Experience XDM event data schema.
 */
public interface Schema {

    /**
     * Returns the version of this schema as defined in the Adobe Experience Platform.
     * @return the version of this schema.
     */
    String getSchemaVersion();

    /**
     * Returns the identifier for this schema as defined in the Adobe Experience Platform.
     * The identifier is a URI where this schema is defined.
     * @return the URI identifier for this schema.
     */
    String getSchemaIdentifier();

    /**
     * Returns the identifier for this dataset as defined in the Adobe Experience Platform.
     * @return the dataset ID
     */
    String getDatasetIdentifier();

    /**
     * Serialize this {@code Schema} object to a map with the same format as its XDM schema.
     * @return the XDM-formatted map of this {@code Schema} object.
     */
    Map<String, Object> serializeToXdm();
}
```

By implementing the **Property** interface, you can define complex properties for your XDM Schema. A complex property is defined as not being a primitive type, String, or Date.

```java
public interface Property {

    /**
     * Serialize this {@code Property} object to a map with the same format as its XDM schema.
     * @return XDM-formatted map of this {@code Property} object.
     */
    Map<String, Object> serializeToXdm();
}
```

When defining your custom XDM schema(s), implement these interfaces to ensure that the AEP Edge extension successfully serializes the provided data before sending it to Adobe Experience Platform Edge Network.

<Variant platform="ios" api="xdm-schema" repeat="2"/>

#### Swift

```swift
/// An interface representing a Platform XDM Event Data schema.
public protocol XDMSchema: Encodable {

    /// Returns the version of this schema as defined in the Adobe Experience Platform.
    /// - Returns: The version of this schema
    var schemaVersion: String { get }

    /// Returns the identifier for this schema as defined in the Adobe Experience Platform.
    /// The identifier is a URI where this schema is defined.
    /// - Returns: The URI identifier for this schema
    var schemaIdentifier: String { get }

    /// Returns the identifier for this dataset as defined in the Adobe Experience Platform.
    /// This is a system generated identifier for the Dataset the event belongs to.
    /// - Returns: The  identifier as a String for this dataset
    var datasetIdentifier: String { get }
}
```

<Variant platform="android" api="edge-event-handle" repeat="2"/>

#### Java

```java
/**
 * The {@link EdgeEventHandle} is a response fragment from Adobe Experience Edge Service for a sent XDM Experience Event.
 * One event can receive none, one or multiple {@link EdgeEventHandle}(s) as response.
 */
public class EdgeEventHandle {
  /**
     * @return the payload type or null if not found in the {@link JSONObject} response
     */
  public String getType() {...}

  /**
     * @return the event payload values for this {@link EdgeEventHandle} or null if not found in the {@link JSONObject} response
     */
  public List<Map<String, Object>> getPayload() {...}
}
```


<Variant platform="ios" api="edge-event-handle" repeat="2"/>

#### Swift

```swift
@objc(AEPEdgeEventHandle)
public class EdgeEventHandle: NSObject, Codable {
    /// Payload type
    @objc public let type: String?

    /// Event payload values
    @objc public let payload: [[String: Any]]?
}
```

<Variant platform="android" api="experience-event" repeat="6"/>

#### Java

```Java
public final class ExperienceEvent {

  public static class Builder {
    ...

    public Builder() {
      ...
    }

    /**
      * Sets free form data associated with this event to be passed to Adobe Experience Edge.
      *
      * @param data free form data, JSON like types are accepted
      * @return instance of current builder
      * @throws UnsupportedOperationException if this instance was already built
      */
    public Builder setData(final Map<String, Object> data) {...}

    /**
      * Solution specific XDM event data for this event.
      *
      * @param xdm {@link Schema} information
      * @return instance of current builder
      * @throws UnsupportedOperationException if this instance was already built
      */
    public Builder setXdmSchema(final Schema xdm) {...}

    /**
      * Solution specific XDM event data and dataset identifier for this event.
      *
      * @param xdm {@code Map<String, Object>} of raw XDM schema data
      * @param datasetIdentifier The Experience Platform dataset identifier where this event is sent.
      *                          If not provided, the default dataset defined in the configuration ID is used
      * @return instance of current builder
      * @throws UnsupportedOperationException if this instance was already built
      */
    public Builder setXdmSchema(final Map<String, Object> xdm, final String datasetIdentifier) {...}

    /**
      * Solution specific XDM event data for this event, passed as raw mapping of keys and
      * Object values.
      *
      * @param xdm {@code Map<String, Object>} of raw XDM schema data
      * @return instance of current builder
      * @throws UnsupportedOperationException if this instance was already built
      */
    public Builder setXdmSchema(final Map<String, Object> xdm) {...}

    /**
      * Builds and returns a new instance of {@code ExperienceEvent}.
      *
      * @return a new instance of {@code ExperienceEvent} or null if one of the required parameters is missing
      * @throws UnsupportedOperationException if this instance was already built
      */
    public ExperienceEvent build() {...}
  }

  public Map<String, Object> getData() {...}

  public Map<String, Object> getXdmSchema() {...} 
}  
```

**Examples**

```java
// Example 1
// Create Experience Event with both XDM and freeform data using maps
Map<String, Object> xdmData = new HashMap<>();
xdmData.put("eventType", "SampleXDMEvent");
xdmData.put("sample", "data");

Map<String, Object> data = new HashMap<>();
data.put("free", "form");
data.put("data", "example");

ExperienceEvent experienceEvent = new ExperienceEvent.Builder()
  .setXdmSchema(xdmData)
  .setData(data)
  .build();
```

```java
// Example 2
// Create Experience Event from XDM Schema implementation
public class XDMSchemaExample implements com.adobe.marketing.mobile.xdm.Schema {
  private String eventType;
  private String otherField;
      ...

      public String getEventType() {
        return this.eventType;
      }

      public void setEventType(final String newValue) {
        this.eventType = newValue;
      }

      public String getOtherField() {
        return this.otherField;
      }

      public void setOtherField(final String newValue) {
        this.otherField = newValue;
      }
      }

// Create Experience Event from Schema
XDMSchemaExample xdmData = new XDMSchemaExample();
xdmData.setEventType("SampleXDMEvent");
xdmData.setOtherField("OtherFieldValue");

ExperienceEvent experienceEvent = new ExperienceEvent.Builder()
  .setXdmSchema(xdmData)
  .build();
```

```java
// Example 3
// Set the destination Dataset identifier to the current Experience Event
Map<String, Object> xdmData = new HashMap<>();
xdmData.put("eventType", "SampleXDMEvent");
xdmData.put("sample", "data");

ExperienceEvent experienceEvent = new ExperienceEvent.Builder()
  .setXdmSchema(xdmData, "datasetIdExample")
  .build();
```

<Variant platform="ios" api="experience-event" repeat="10"/>

```swift
@objc(AEPExperienceEvent)
public class ExperienceEvent: NSObject {

    /// XDM formatted data, use an `XDMSchema` implementation for a better XDM data injection and format control
    @objc public let xdm: [String: Any]?

    /// Optional free-form data associated with this event
    @objc public let data: [String: Any]?

    /// Adobe Experience Platform dataset identifier, if not set the default dataset identifier set in the Edge Configuration is used
    @objc public let datasetIdentifier: String?

    /// Initialize an Experience Event with the provided event data
    /// - Parameters:
    ///   - xdm:  XDM formatted data for this event, passed as a raw XDM Schema data dictionary.
    ///   - data: Any free form data in a [String : Any] dictionary structure.
    ///   - datasetIdentifier: The Experience Platform dataset identifier where this event should be sent to; if not provided, the default dataset identifier set in the Edge configuration is used
    @objc public init(xdm: [String: Any], data: [String: Any]? = nil, datasetIdentifier: String? = nil) {...}

    /// Initialize an Experience Event with the provided event data
    /// - Parameters:
    ///   - xdm: XDM formatted event data passed as an XDMSchema
    ///   - data: Any free form data in a [String : Any] dictionary structure.
    public init(xdm: XDMSchema, data: [String: Any]? = nil) {...}
}
```

#### Swift

**Examples**

```swift
// Example 1
// Create Experience Event with both XDM and freeform data using dictionaries
var xdmData : [String: Any] = ["eventType" : "SampleXDMEvent",
                              "sample": "data"]

let experienceEvent = ExperienceEvent(xdm: xdmData, data: ["free": "form", "data": "example"])
```

```swift
// Example 2
// Create Experience Event from XDM Schema implementation
import AEPEdge

public struct XDMSchemaExample : XDMSchema {
    public let schemaVersion = "1.0" // Returns the version of this schema as defined in the Adobe Experience Platform.
    public let schemaIdentifier = "" // The URI identifier for this schema
    public let datasetIdentifier = "" // The identifier for the Dataset this event belongs to.

    public init() {}

    public var eventType: String?
    public var otherField: String?

    enum CodingKeys: String, CodingKey {
    case eventType = "eventType"
    case otherField = "otherField"
    }		
}

extension XDMSchemaExample {
    public func encode(to encoder: Encoder) throws {
      var container = encoder.container(keyedBy: CodingKeys.self)
      if let unwrapped = eventType { try container.encode(unwrapped, forKey: .eventType) }
      if let unwrapped = otherField { try container.encode(unwrapped, forKey: .otherField) }
    }
}
...

// Create Experience Event from XDMSchema
var xdmData = XDMSchemaExample()
xdmData.eventType = "SampleXDMEvent"
xdm.otherField = "OtherFieldValue"
let event = ExperienceEvent(xdm: xdmData)
```

```swift
// Example 3
// Set the destination Dataset identifier to the current Experience Event
var xdmData : [String: Any] = ["eventType" : "SampleXDMEvent",
                              "sample": "data"]

let experienceEvent = ExperienceEvent(xdm: xdmData, datasetIdentifier: "datasetIdExample")
```

#### Objective-C

**Examples**

```objectivec
// Example 1
// Create Experience Event with both XDM and freeform data using dictionaries
NSDictionary *xdmData = @{ @"eventType" : @"SampleXDMEvent"};
NSDictionary *data = @{ @"sample" : @"data"};
    
    AEPExperienceEvent *event = [[AEPExperienceEvent alloc] initWithXdm:xdmData data:data datasetIdentifier:nil];
```

```objectivec
// Example 2
// Set the destination Dataset identifier to the current Experience Event
NSDictionary *xdmData = @{ @"eventType" : @"SampleXDMEvent"};
   
AEPExperienceEvent *event = [[AEPExperienceEvent alloc] initWithXdm:xdmData data:nil datasetIdentifier:@"datasetIdExample"];
```