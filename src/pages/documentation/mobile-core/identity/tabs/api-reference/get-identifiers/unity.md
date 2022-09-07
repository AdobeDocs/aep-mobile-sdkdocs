#### C#

**Syntax**

```csharp
public static void GetIdentifiers(AdobeGetIdentifiersCallback callback)
```

* _callback_ is a callback containing the previously synced identifiers if the `GetIdentifiers` API executed without any errors.

**Example**

```csharp
[MonoPInvokeCallback(typeof(AdobeGetIdentifiersCallback))]
public static void HandleAdobeGetIdentifiersCallback(string visitorIds)
{
    print("Ids is : " + visitorIds);
}
ACPIdentity.GetIdentifiers(HandleAdobeGetIdentifiersCallback);
```