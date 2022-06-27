#### JavaScript

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

```jsx
ACPIdentity.appendVisitorInfoForURL("www.example.com").then(urlWithVistorData => console.log("Url with Visitor Data = " + urlWithVisitorData));
```

Alternately, starting with SDK version 1.0.5, you can call [getUrlVariables](api-reference.md#geturlvariables) and build your own URL:

```jsx
ACPIdentity.getUrlVariables().then(urlVariables => console.log("query params = " + urlVariables));
```