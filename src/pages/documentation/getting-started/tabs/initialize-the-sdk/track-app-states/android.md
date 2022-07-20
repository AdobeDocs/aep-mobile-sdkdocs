On Android, `trackState` is typically called each time a new activity is loaded.

#### Java

**Syntax**

```java
public static void trackState(final String state, final Map<String, String> contextData)
```

**Example**

```java
Map<String, String> additionalContextData = new HashMap<String, String>();         
additionalContextData.put("customKey", "value");         
MobileCore.trackState("homePage", additionalContextData);
```