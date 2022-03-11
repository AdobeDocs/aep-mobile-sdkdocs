This API resets the Audience Manager UUID and purges the current visitor profile from `android.content.SharedPreferences`. The Audience reset also clears the current in-memory DPID and DPUUID variables.

#### Java

**Syntax**

```java
public static void reset()
```

**Example**

```java
Audience.reset();
```