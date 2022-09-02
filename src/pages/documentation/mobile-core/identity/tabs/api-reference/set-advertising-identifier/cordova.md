#### Cordova

**Syntax**

```jsx
ACPCore.setAdvertisingIdentifier(identifier, success, fail);
```

* _identifier_ _(String)_ provides developers with a simple, standard system to continue to track the Ads through their apps.
* _success_ is a callback containing a general success message if the `setAdvertisingIdentifier` API executed without any errors.
* _fail_ is a callback containing error information if the `setAdvertisingIdentifier` API was executed with errors.

**Example**

```jsx
ACPCore.setAdvertisingIdentifier("ADVTID", function (handleCallback) {
  console.log("AdobeExperienceSDK: Advertising identifier successfully set.");
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to set advertising identifier : " + handleError);
});
```