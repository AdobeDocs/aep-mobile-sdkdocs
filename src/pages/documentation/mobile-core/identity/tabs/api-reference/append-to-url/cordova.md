#### Cordova

**Syntax**

```jsx
ACPIdentity.appendVisitorInfoForUrl = function(url, success, fail);
```

* _url_ _(String)_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _success_ is a callback containing the provided URL with the visitor information appended if the `appendVisitorInfoForUrl` API executed without any errors.
* _fail_ is a callback containing error information if the  `appendVisitorInfoForUrl` API was executed with errors.

**Example**

```jsx
ACPIdentity.appendVisitorInfoForUrl("https://example.com", function(handleCallback) {
  console.log("AdobeExperenceSDK: Url with Visitor Data = " + handleCallback);
}, function(handleError) {
  console.log("AdobeExperenceSDK: Failed to append URL : " + handleError);
});
```