#### C#

**Syntax**

```csharp
public static void GetExperienceCloudId(AdobeGetExperienceCloudIdCallback callback)
```

* _callback_ is a callback containing the ECID if the `GetExperienceCloudId` API executed without any errors.

**Example**

```csharp
[MonoPInvokeCallback(typeof(AdobeGetExperienceCloudIdCallback))]
public static void HandleAdobeGetExperienceCloudIdCallback(string cloudId)
{
    print("ECID is : " + cloudId);
}
ACPIdentity.GetExperienceCloudId(HandleAdobeGetExperienceCloudIdCallback);
```