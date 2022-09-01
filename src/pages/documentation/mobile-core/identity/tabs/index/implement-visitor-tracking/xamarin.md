#### C#

To append visitor information to the URL that is being used to open the web view, call [AppendToUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

**iOS**

```csharp
ACPIdentity.AppendToUrl(url, callback => {
  Console.WriteLine("Appended url: " + callback);
});
```

To append visitor information to the URL that is being used to open the web view, call [AppendVisitorInfoForUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

**Android**

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

Alternately, you can call [GetUrlVariables](api-reference.md#geturlvariables) and build your own URL:

**iOS**

```csharp
ACPIdentity.GetUrlVariables(callback => {
  Console.WriteLine("Url variables: " + callback);
});
```

**Android**

```csharp
ACPIdentity.GetUrlVariables(new StringCallback());

class StringCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object stringContent)
  {
    if (stringContent != null)
    {
      Console.WriteLine("Url variables: " + stringContent);
    } 
    else 
    {
      Console.WriteLine("null content in string callback");
    }
  }
}
```