#### C#

**Syntax**

```csharp
public static void GetTrackingIdentifier(AdobeGetTrackingIdentifierCallback callback)
```

* _callback_ is a callback containing the tracking Identifier string value.

**Example**

```csharp
[MonoPInvokeCallback(typeof(AdobeGetTrackingIdentifierCallback))]
public static void HandleAdobeGetTrackingIdentifierCallback(string trackingIdentifier)
{
    Debug.Log("Tracking identifier is : " + trackingIdentifier);
}
ACPAnalytics.GetTrackingIdentifier(HandleAdobeGetTrackingIdentifierCallback);
```