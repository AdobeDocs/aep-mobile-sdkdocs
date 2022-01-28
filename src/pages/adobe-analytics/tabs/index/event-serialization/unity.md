### C\#

**Syntax**

```csharp
var contextData = new Dictionary<string, string>();
contextData.Add("key", "trackAction");
```

**Example**

```csharp
// create a context data dictionary and add events
var contextData = new Dictionary<string, string>();
contextData.Add("key", "trackAction");

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
ACPCore.TrackAction("Action Name", contextData);

// trackState example:
ACPCore.TrackState("State Name", contextData);
```