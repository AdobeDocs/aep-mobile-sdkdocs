#### C#

Retrieves the Analytics tracking identifier.

**iOS syntax**

```csharp
public unsafe static void GetTrackingIdentifier (Action<NSString> callback);
```

* _callback_ is a callback containing the tracking Identifier string value.

**iOS example**

```csharp
ACPAnalytics.GetTrackingIdentifier(callback => {
  Console.WriteLine("Tracking identifier: " + callback);
});
```

**Android syntax**

```csharp
public unsafe static void GetTrackingIdentifier (IAdobeCallback callback);
```

* _callback_ is a callback containing the tracking Identifier string value.

**Android example**

```csharp
ACPAnalytics.GetTrackingIdentifier(new StringCallback());

class StringCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object stringContent)
  {
    if (stringContent != null)
    {
      Console.WriteLine("Tracking identifier: " + stringContent);
    }
    else
    {
      Console.WriteLine("null content in string callback");
    }
  }
}
```