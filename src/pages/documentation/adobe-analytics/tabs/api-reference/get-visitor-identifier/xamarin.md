#### C#

**iOS syntax**

```csharp
public unsafe static void GetVisitorIdentifier (Action<NSString> callback);
```

* _callback_ is a callback containing the visitor Identifier string value.

**iOS example**

```csharp
ACPAnalytics.GetVisitorIdentifier(callback => {
  Console.WriteLine("Visitor identifier: " + callback);
});
```

**Android syntax**

```csharp
public unsafe static void GetVisitorIdentifier (IAdobeCallback callback);
```

* _callback_ is a callback containing the visitor Identifier string value.

**Android example**

```csharp
ACPAnalytics.GetVisitorIdentifier(new StringCallback());

class StringCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object stringContent)
  {
    if (stringContent != null)
    {
      Console.WriteLine("Visitor identifier: " + stringContent);
    }
    else
    {
      Console.WriteLine("null content in string callback");
    }
  }
}
```