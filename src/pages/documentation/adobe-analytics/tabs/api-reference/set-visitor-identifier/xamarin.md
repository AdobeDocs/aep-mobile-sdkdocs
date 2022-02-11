#### C#

**iOS syntax**

```csharp
public static void SetVisitorIdentifier (string visitorIdentifier);
```

* _visitorIdentifier_ is the new value for the visitor identifier.

**Android syntax**

```csharp
public unsafe static void SetVisitorIdentifier (string visitorID);
```

* _visitorID_ is the new value for the visitor identifier.

**Example**

```csharp
ACPAnalytics.SetVisitorIdentifier("VisitorIdentifier");
```