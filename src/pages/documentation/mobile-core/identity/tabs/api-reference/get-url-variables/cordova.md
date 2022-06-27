#### Cordova

**Syntax**

```jsx
ACPIdentity.getUrlVariables(success, fail);
```

* _success_ is a callback containing the url variables in query parameter form if the `getUrlVariables` API executed without any errors.
* _fail_ is a callback containing error information if the `getUrlVariables` API was executed with errors.

**Example**

```jsx
ACPIdentity.getUrlVariables(function (handleCallback) {
  console.log("AdobeExperienceSDK: Url variables: " + handleCallback);
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to retrieve url variables : " + handleError);
});
```