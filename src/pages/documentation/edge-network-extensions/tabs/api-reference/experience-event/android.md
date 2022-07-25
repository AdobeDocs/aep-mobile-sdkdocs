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
//Example 1
// set freeform data to the Experience event
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
//Example 2
// Create Experience Event from XDM Schema implementations
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
//Example 3
// Set the destination Dataset identifier to the current Experience event:
Map<String, Object> xdmData = new HashMap<>();
xdmData.put("eventType", "SampleXDMEvent");
xdmData.put("sample", "data");

ExperienceEvent experienceEvent = new ExperienceEvent.Builder()
  .setXdmSchema(xdmData, "datasetIdExample")
  .build();
```