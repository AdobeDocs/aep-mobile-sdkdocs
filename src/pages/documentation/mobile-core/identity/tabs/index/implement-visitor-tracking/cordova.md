#### Cordova

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

```jsx
ACPIdentity.appendVisitorInfoForUrl("https://example.com", function(handleCallback) {
  console.log("AdobeExperenceSDK: Url with Visitor Data = " + handleCallback);
}, function(handleError) {
  console.log("AdobeExperenceSDK: Failed to append URL : " + handleError);
});
```

Alternately, you can call [getUrlVariables](api-reference.md#geturlvariables) and build your own URL:

```jsx
ACPIdentity.getUrlVariables(function (handleCallback) {
  console.log("AdobeExperienceSDK: Url variables: " + handleCallback);
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to retrieve url variables : " + handleError);
});
```