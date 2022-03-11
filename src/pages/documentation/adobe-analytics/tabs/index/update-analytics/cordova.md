#### Cordova

**Example**

```jsx
ACPCore.updateConfiguration({"analytics.server": "sample.analytics.tracking.server",
                             "analytics.rsids": "rsid1,rsid2",
                             "analytics.batchLimit": 10,
                             "analytics.offlineEnabled": true}, function(handleCallback) {
  console.log("AdobeExperenceSDK: Analytics configuration update success: " + handleCallback);
}, function(handleError) {
  console.log("AdobeExperenceSDK: Failed to update analytics configuration: " + handleError);
});
```