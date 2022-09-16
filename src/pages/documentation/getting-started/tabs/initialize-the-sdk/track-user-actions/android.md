#### Java 

**Syntax**

```java
public static void trackAction(final String action, final Map<String, String> contextData)
```

**Example**

```java
Map<String, String> additionalContextData = new HashMap<String, String>();
additionalContextData.put("customKey", "value");
MobileCore.trackAction("loginClicked", additionalContextData);
```