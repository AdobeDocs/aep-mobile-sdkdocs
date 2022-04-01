#### C#

**Syntax**

```csharp
public static void TrackAction(string name, Dictionary<string, string> contextDataDict)
```

* * _name_ contains the name of the action to track.
* _contextDataDict_ contains the context data to attach on the hit.

**Example**

```csharp
var contextData = new Dictionary<string, string>();
contextData.Add("key", "value");
ACPCore.TrackAction("action", contextData);
```