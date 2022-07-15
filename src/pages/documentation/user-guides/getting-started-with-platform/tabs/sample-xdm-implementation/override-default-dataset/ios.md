#### Swift

```swift
// 3. Send the XDM data using the Edge extension, by specifying Product Reviews Dataset identifiers as
// shown in Adobe Experience Platform
// Note: the Dataset identifier specified at Event level overrises the Experience Event Dataset specified in the
// Datastream configuration
xdmData["eventType"] = "product.review"
let experienceEvent =
ExperienceEvent(xdm: xdmData, datasetIdentifier: "<DatasetIdentifier>")
Edge.sendEvent(experienceEvent: experienceEvent)
```