#### Java

**Syntax**

```java
public static void removeUserAttributes(List<String> attributeNames)
```

**Example**

You want to remove `username`, `usertype` user data when session timeout occurs.

```java
UserProfile.removeUserAttributes(Arrays.asList("username", "usertype"));
```