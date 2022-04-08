#### Cordova

**Example**

```jsx
ACPCore.updateConfiguration({"global.privacy":"optedout"}, function(handleCallback) {
  console.log("AdobeExperenceSDK: Update configuration successful: " + handleCallback);
}, function(handleError) {
  console.log("AdobeExperenceSDK: Failed to update configuration : " + handleError);
});
```