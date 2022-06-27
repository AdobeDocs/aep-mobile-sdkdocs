#### C#

**Syntax**

```csharp
public static void AppendToUrl(string url, AdobeIdentityAppendToUrlCallback callback)
```

* _url_ _(String)_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _callback_ is a callback containing the provided URL with the visitor information appended if the `AppendToUrl` API executed without any errors.

**Example**

```csharp
[MonoPInvokeCallback(typeof(AdobeIdentityAppendToUrlCallback))]
public static void HandleAdobeIdentityAppendToUrlCallback(string url)
{
    print("Url is : " + url);
}
ACPIdentity.AppendToUrl("https://www.adobe.com", HandleAdobeIdentityAppendToUrlCallback);
```