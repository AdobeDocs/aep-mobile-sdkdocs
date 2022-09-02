#### Java

**Syntax**

```java
public static void sendEvent(final ExperienceEvent experienceEvent, final EdgeCallback callback);
```
* _experienceEvent_ - the XDM [Experience Event](#experienceevent) to be sent to Adobe Experience Platform Edge Network
* _completion_ - optional callback to be invoked when the request is complete, returning the associated [EdgeEventHandle(s)](#edgeeventhandle) received from the Adobe Experience Platform Edge Network. It may be invoked on a different thread.

**Example**

```java
// create experience event from Map
Map<String, Object> xdmData = new HashMap<>();
xdmData.put("eventType", "SampleXDMEvent");
xdmData.put("sample", "data");
		
ExperienceEvent experienceEvent = new ExperienceEvent.Builder()
	.setXdmSchema(xdmData)
	.build();
```
```java
// example 1 - send the experience event without handling the Edge Network response
Edge.sendEvent(experienceEvent, null);
```
```java
// example 2 - send the experience event and handle the Edge Network response onComplete
Edge.sendEvent(experienceEvent, new EdgeCallback() {
  @Override
  public void onComplete(final List<EdgeEventHandle> handles) {
        // handle the Edge Network response 
  }
});
```