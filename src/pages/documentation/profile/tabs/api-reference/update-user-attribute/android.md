#### Java

**Syntax**

```java
public static void updateUserAttribute(String attributeName, 
                                       Object attributeValue)
```

**Example**

You want to update `username` of a user obtained in the log in page :

```java
UserProfile.updateUserAttribute("username", "Will Smith");
```