#### C#

**iOS Syntax**

```csharp
public unsafe static void GetExperienceCloudId (Action<NSString> callback);
```

* _callback_ is a callback containing the ECID if the `getExperienceCloudId` API executed without any errors.

**Android Syntax**

```csharp
public unsafe static void GetExperienceCloudId (IAdobeCallback callback);
```

* _callback_ is a callback containing the ECID if the `getExperienceCloudId` API executed without any errors.

**iOS Example**

```csharp
ACPIdentity.GetExperienceCloudId(callback => {
  Console.WriteLine("Experience Cloud Id: " + callback);
});
```

**Android Example**

```csharp
ACPIdentity.GetExperienceCloudId(new StringCallback());

class StringCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object stringContent)
  {
    if (stringContent != null)
    {
      Console.WriteLine("Experience Cloud Id: " + stringContent);
    }
    else
    {
      Console.WriteLine("null content in string callback");
    }
  }
}
```