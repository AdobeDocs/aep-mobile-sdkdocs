#### setSmallIconResourceId

This API sets the small icon that is used for notifications that are created by the SDK. This icon appears in the status bar and is the secondary image that is displayed shown when the user sees the complete notification in the notification center.

**Syntax**

```java
public static void setSmallIconResourceId(final int resourceId);
```

**Example**

```java
MobileCore.setSmallIconResourceID(R.drawable.appIcon);
```

#### setLargeIconResourceId

This API sets the large icon that is used for notifications that are created by the SDK. This icon is the primary image that is displayed when the user sees the complete notification in the notification center.

**Syntax**

```java
public static void setLargeIconResourceId(final int resourceId);
```

**Example**

```java
MobileCore.setLargeIconResourceId(R.drawable.appIcon);
```