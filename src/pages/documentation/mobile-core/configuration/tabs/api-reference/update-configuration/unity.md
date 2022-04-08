#### C#

**Syntax**

```csharp
public static void UpdateConfiguration(Dictionary<string, object> config);
```

**Example**

```csharp
var dict = new Dictionary<string, object>();
dict.Add("newConfigKey", "newConfigValue");
ACPCore.UpdateConfiguration(dict);
```