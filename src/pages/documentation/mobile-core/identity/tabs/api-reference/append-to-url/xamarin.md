#### C#

**iOS Syntax**

```csharp
public unsafe static void AppendToUrl (NSUrl baseUrl, Action<NSUrl> callback);
```

* baseUrl _(NSUrl)_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _callback_ is a callback containing the provided URL with the visitor information appended if the `AppendToUrl` API executed without any errors.

**Android Syntax**

```csharp
public unsafe static void AppendVisitorInfoForURL (string baseURL, IAdobeCallback callback);
```

* baseURL _(string)_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _callback_ is a callback containing the provided URL with the visitor information appended if the `AppendVisitorInfoForURL` API executed without any errors.

**iOS Example**

```csharp
ACPIdentity.AppendToUrl(url, callback => {
  Console.WriteLine("Appended url: " + callback);
});
```

**Android Example**

```csharp
ACPIdentity.AppendVisitorInfoForURL("https://example.com", new StringCallback());

class StringCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object stringContent)
  {
    if (stringContent != null)
    {
      Console.WriteLine("Appended url: " + stringContent);
    }
    else
    {
      Console.WriteLine("null content in string callback");
    }
  }
}
```