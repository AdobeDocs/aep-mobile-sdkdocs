<Variant platform="android" task="get" repeat="6"/>

#### Java

`MobileCore.getApplication` may return `null` if the `android.app.Application` object was destroyed or if `MobileCore.setApplication`was not previously called.

**Syntax**

```java
public static Application getApplication()
```

**Example**

```java
Application app = MobileCore.getApplication();
if (app != null) {
    ...
}
```