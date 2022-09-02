### Java

**Syntax**

```java
public static void lifecycleStart(final Map<String, String> additionalContextData);
```

**Example**

```java
MobileCore.lifecycleStart(null);
```

If you need to collect additional lifecycle data:

```java
contextData.put("myapp.category", "Game");
MobileCore.lifecycleStart(additionalContextData);
```

<InlineAlert variant="warning" slots="text"/>

This method should be called from the Activity onResume method.