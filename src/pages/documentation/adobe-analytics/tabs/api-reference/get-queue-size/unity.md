#### C#

**Syntax**

```csharp
public static void GetQueueSize(AdobeGetQueueSizeCallback callback)
```

* _callback_ is a callback containing the `queue size` if the GetQueueSize API executed without any errors.

**Example**

```csharp
[MonoPInvokeCallback(typeof(AdobeGetQueueSizeCallback))]
public static void HandleAdobeGetQueueSizeCallback(long queueSize)
{
    Debug.Log("Queue size is : " + queueSize);
}
ACPAnalytics.GetQueueSize(HandleAdobeGetQueueSizeCallback);
```