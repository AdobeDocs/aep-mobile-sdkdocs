#### Cordova

**Syntax**

```jsx
ACPIdentity.getIdentifiers(success, fail);
```

* _success_ is a callback containing the previously synced identifiers if the `getIdentifiers` API executed without any errors.
* _fail_ is a callback containing error information if the `getIdentifiers` API was executed with errors.

**Example**

```jsx
ACPIdentity.getIdentifiers(function (handleCallback) {
  console.log("AdobeExperienceSDK: Visitor identifiers: " + handleCallback);
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to retrieve visitor identifiers : " + handleError);
});
```