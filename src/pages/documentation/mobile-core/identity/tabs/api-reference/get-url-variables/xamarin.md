#### C#

**iOS Syntax**

```csharp
public unsafe static void GetUrlVariables (Action<NSString> callback);
```

* _callback_ is a callback containing the url variables in query parameter form if the `GetUrlVariables` API executed without any errors.

**Android Syntax**

```csharp
public unsafe static void GetUrlVariables (IAdobeCallback callback);
```

* _callback_ is a callback containing the url variables in query parameter form if the `GetUrlVariables` API executed without any errors.

**iOS Example**

```csharp
 ACPIdentity.GetUrlVariables(callback => {
   Console.WriteLine("Url variables: " + callback);
 });
```

**Android Example**

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