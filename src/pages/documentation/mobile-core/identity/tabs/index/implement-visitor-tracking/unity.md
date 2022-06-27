#### C#

To append visitor information to the URL that is being used to open the web view, call [AppendToUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

```csharp
[MonoPInvokeCallback(typeof(AdobeIdentityAppendToUrlCallback))]
public static void HandleAdobeIdentityAppendToUrlCallback(string url)
{
    print("Url is : " + url);
}
ACPIdentity.AppendToUrl("https://www.adobe.com", HandleAdobeIdentityAppendToUrlCallback);
```

Alternately, you can call [GetUrlVariables](api-reference.md#geturlvariables) and build your own URL:

```csharp
[MonoPInvokeCallback(typeof(AdobeGetUrlVariables))]
public static void HandleAdobeGetUrlVariables(string urlVariables)
{
    print("Url variables are : " + urlVariables);
}
ACPIdentity.GetUrlVariables(HandleAdobeGetUrlVariables);
```