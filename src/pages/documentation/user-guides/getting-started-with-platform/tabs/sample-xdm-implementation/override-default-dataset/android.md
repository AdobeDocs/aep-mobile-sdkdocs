#### Java

```java
// 3. Send the XDM data using the Edge extension, by specifying Product Reviews Dataset identifiers as
// shown in Adobe Experience Platform
// Note: the Dataset identifier specified at Event level overrides the Experience Event Dataset specified in the
// Datastream configuration
xdmData.put("eventType", "product.review");
ExperienceEvent event = new ExperienceEvent.Builder()
  .setXdmSchema(xdmData, "<DatasetIdentifier>")
  .build();
Edge.sendEvent(event, new EdgeCallback() {
  @Override
  public void onResponse(Map<String, Object> data) {
    Log.d("Send XDM Event", String.format("Received response for event 'product.review': %s", data));
  }
});
```