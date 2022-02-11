#### C#

This method forces the library to send all hits in the offline queue, regardless of how many hits are currently queued.

**Syntax**

```csharp
public static void SendQueuedHits ();
```

**Example**

```csharp
ACPAnalytics.SendQueuedHits();
```