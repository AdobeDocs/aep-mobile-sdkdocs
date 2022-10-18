#### Cordova

**Syntax**

```jsx
ACPIdentity.extensionVersion = function(success, fail);
```

* _success_ is a callback containing the ACPIdentity extension version if the `extensionVersion` API executed without any errors.
* _fail_ is a callback containing error information if the  `appendVisitorInfoForUrl` API was executed with errors.

**Example**

```jsx
ACPIdentity.extensionVersion(function (handleCallback) {
  console.log("AdobeExperienceSDK: ACPIdentity version: " + handleCallback)
}, function (handleError) {
  console.log("AdobeExperenceSDK: failed to get extension version : " + handleError)
});
```