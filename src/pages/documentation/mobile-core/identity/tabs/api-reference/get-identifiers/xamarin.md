#### C#

**iOS Syntax**

```csharp
public unsafe static void GetIdentifiers (Action<ACPMobileVisitorId[]> callback);
```

* _callback_ is a callback containing the previously synced identifiers if the `GetIdentifiers` API executed without any errors.

**Android Syntax**

```csharp
public unsafe static void GetIdentifiers (IAdobeCallback callback);
```

* _callback_ is a callback containing the previously synced identifiers if the `GetIdentifiers` API executed without any errors.

**iOS Example**

```csharp
Action<ACPMobileVisitorId[]> callback = new Action<ACPMobileVisitorId[]>(handleCallback);
ACPIdentity.GetIdentifiers(callback);

private void handleCallback(ACPMobileVisitorId[] ids)
{
  String visitorIdsString = "[]";
  if (ids.Length != 0)
  {
    visitorIdsString = "";
    foreach (ACPMobileVisitorId id in ids)
    {
      visitorIdsString = visitorIdsString + "[Id: " + id.Identifier + ", Type: " + id.IdType + ", Origin: " + id.IdOrigin + ", Authentication: " + id.AuthenticationState + "]";
    }
  }
  Console.WriteLine("Retrieved visitor ids: " + visitorIdsString);
}
```

**Android Example**

```csharp
ACPIdentity.GetIdentifiers(new GetIdentifiersCallback());

class GetIdentifiersCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object retrievedIds)
  {
    System.String visitorIdsString = "[]";
    if (retrievedIds != null)
    {
      var ids = GetObject<JavaList>(retrievedIds.Handle, JniHandleOwnership.DoNotTransfer);
      if (ids != null && ids.Count > 0)
      {
        visitorIdsString = "";
        foreach (VisitorID id in ids)
        {
          visitorIdsString = visitorIdsString + "[Id: " + id.Id + ", Type: " + id.IdType + ", Origin: " + id.IdOrigin + ", Authentication: " + id.GetAuthenticationState() + "]";
        }
      }
    }
    Console.WriteLine("Retrieved visitor ids: " + visitorIdsString);
  }
}
```