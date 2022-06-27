#### C#

**iOS syntax**

```csharp
public static void SyncIdentifiers (NSDictionary identifiers);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**Android syntax**

```csharp
public unsafe static void SyncIdentifiers (IDictionary<string, string> identifiers);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**iOS example**

```csharp
var ids = new NSMutableDictionary<NSString, NSObject>
{
  ["idsType1"] = new NSString("idValue1"),
  ["idsType2"] = new NSString("idValue2"),
  ["idsType3"] = new NSString("idValue3")
};
ACPIdentity.SyncIdentifiers(ids);
```

**Android example**

```csharp
var ids = new Dictionary<string, string>();
ids.Add("idsType1", "idValue1");
ids.Add("idsType2", "idValue2");
ids.Add("idsType3", "idValue3");
ACPIdentity.SyncIdentifiers(ids);
```