<TextBlock slots="heading, text" hasCodeBlock/>

aaaa

#### C#

<CodeBlock slots="heading, code" repeat="2" languages="csharp, csharp" />

## iOS syntax

```csharp
var contextData = new NSMutableDictionary<NSString, NSString>
{
  ["&&events"] = new NSString("eventN:serial number")
};
```

## iOS example

```csharp
// create a context data dictionary and add events
var contextData = new NSMutableDictionary<NSString, NSString>
{
  ["&&events"] = new NSString("event1:12341234")
};

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
ACPCore.TrackAction("Action Name", contextData);

// trackState example:
ACPCore.TrackState("State Name", contextData);
```

ESXT

**Android syntax**

```csharp
var contextData = new Dictionary<string, string>();
contextData.Add("&&events", "event1:12341234");
```

**Android example**

```csharp
// create a context data dictionary and add events
var contextData = new Dictionary<string, string>();
contextData.Add("&&events", "event1:12341234");

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
ACPCore.TrackAction("Action Name", contextData);

// trackState example:
ACPCore.TrackState("State Name", contextData);
```