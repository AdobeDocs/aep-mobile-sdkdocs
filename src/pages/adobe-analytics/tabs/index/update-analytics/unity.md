### C#

**Example**

```csharp
var dict = new Dictionary<string, object>();
dict.Add("analytics.server": "sample.analytics.tracking.server");
dict.Add("analytics.rsids": "rsid1,rsid2");
dict.Add("analytics.batchLimit": 10);
dict.Add("analytics.offlineEnabled": true);
ACPCore.UpdateConfiguration(dict);
```