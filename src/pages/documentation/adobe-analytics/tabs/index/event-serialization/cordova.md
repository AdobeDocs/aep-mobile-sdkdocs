<TextBlock slots="heading, text" hasCodeBlock/>

#### Cordova

**Syntax**

```jsx
var contextData = {"eventN:serial number": "&&events"};
```

**Example**

```jsx
// create a context data dictionary and add events
var contextData = {"event1:12341234": "&&events"};

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
ACPCore.trackAction("Action Name", contextData, function(handleCallback) {
  console.log("AdobeExperenceSDK: Track action success: " + handleCallback);
}, function(handleError) {
  console.log("AdobeExperenceSDK: Failed to track action: " + handleError);
});
// trackState example:
ACPCore.trackState("State Name", contextData, function(handleCallback) {
  console.log("AdobeExperenceSDK: Track state success: " + handleCallback);
}, function(handleError) {
  console.log("AdobeExperenceSDK: Failed to track state: " + handleError);
});
```