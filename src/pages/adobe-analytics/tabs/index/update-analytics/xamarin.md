#### C#

**iOS example**

```csharp
var config = new NSMutableDictionary<NSString, NSObject>
{
  ["analytics.server"] = new NSString("sample.analytics.tracking.server"),
  ["analytics.rsids"] = new NSString("rsid1,rsid2"),
  ["analytics.batchLimit"] = new NSNumber(10),
  ["analytics.offlineEnabled"] = new NSNumber(true)
};
ACPCore.UpdateConfiguration(config);
```

**Android example**

```csharp
var config = new Dictionary<string, Java.Lang.Object>();
config.Add("analytics.server", "sample.analytics.tracking.server");
config.Add("analytics.rsids", "rsid1,rsid2");
config.Add("analytics.batchLimit", 10);
config.Add("analytics.offlineEnabled", true);
ACPCore.UpdateConfiguration(config);
```