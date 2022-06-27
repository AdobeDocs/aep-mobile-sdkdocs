#### Java

After calling the `setApplication()` method in the `onCreate()` method, register the extension. If the registration was not successful, an `InvalidInitException` is thrown.

```java
public class MobileApp extends Application {
@Override
public void onCreate() {
super.onCreate();
     MobileCore.setApplication(this);
     try {
         Identity.registerExtension();
     } catch (Exception e) {
         //Log the exception
     }
  }
}
```