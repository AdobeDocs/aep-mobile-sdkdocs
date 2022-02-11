#### Cordova

**Syntax**

```jsx
ACPAnalytics.getVisitorIdentifier = function(success, fail);
```

* _success_ is a callback containing the `Visitor Identifier` string if the getVisitorIdentifier API executed without any errors.
* _fail_ is a callback containing error information if the getVisitorIdentifier API was executed with errors.

**Example**

```jsx
ACPAnalytics.getVisitorIdentifier(function (handleCallback) {
  console.log("AdobeExperienceSDK: Retrieved custom visitor identifier: " + handleCallback);
} ,function (handleError) {
  console.log("AdobeExperenceSDK: Failed to retrieve custom visitor identifier: " + handleError);
});
```