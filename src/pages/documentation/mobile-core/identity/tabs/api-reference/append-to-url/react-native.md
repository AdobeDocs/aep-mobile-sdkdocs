#### JavaScript

**Syntax**

```jsx
appendVisitorInfoForURL(baseURL?: String): Promise<?string>;
```

* _baseUrl_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.

**Example**

```jsx
ACPIdentity.appendVisitorInfoForURL("https://example.com").then(urlWithVistorData => console.log("AdobeExperenceSDK: Url with Visitor Data = " + urlWithVisitorData));
```