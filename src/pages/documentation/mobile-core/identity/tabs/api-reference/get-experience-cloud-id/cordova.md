#### Cordova

**Syntax**

```jsx
ACPIdentity.getExperienceCloudId(success, fail);
```

* _success_ is a callback containing the ECID if the `getExperienceCloudId` API executed without any errors.
* _fail_ is a callback containing error information if the `getExperienceCloudId` API was executed with errors.

**Example**

```jsx
ACPIdentity.getExperienceCloudId(function (handleCallback) {
  console.log("AdobeExperienceSDK: experienceCloudId: " + handleCallback)
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to retrieve experienceCloudId : " + handleError);
});
```