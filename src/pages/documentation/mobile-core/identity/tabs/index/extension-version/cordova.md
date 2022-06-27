#### Cordova

```jsx
ACPIdentity.extensionVersion(function (handleCallback) {
  console.log("AdobeExperienceSDK: ACPIdentity version: " + handleCallback)
}, function (handleError) {
  console.log("AdobeExperenceSDK: failed to get extension version : " + handleError)
});
```