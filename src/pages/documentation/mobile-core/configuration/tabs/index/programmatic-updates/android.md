#### Java

**Syntax**

```java
public static void updateConfiguration(final Map<String, Object> configMap);
```

**Example**

```java
HashMap<String, Object> data = new HashMap<String, Object>();
data.put("global.privacy", "optedout");
MobileCore.updateConfiguration(data);
```