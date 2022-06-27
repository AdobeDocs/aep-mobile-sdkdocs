#### C#

**Syntax**

```csharp
void UpdateConfiguration([NullAllowed] NSDictionary config);
```

**iOS example**

```csharp
 var config = new NSMutableDictionary<NSString, NSObject>
 {
   ["global.privacy"] = new NSString("optedout")
 };
ACPCore.UpdateConfiguration(config);
```

**Android example**

```csharp
var config = new Dictionary<string, Java.Lang.Object>();
config.Add("global.privacy", "optedout");
ACPCore.UpdateConfiguration(config);
```