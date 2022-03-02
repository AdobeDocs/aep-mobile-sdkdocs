#### Java

In your Application's `onCreate()` method, after calling the `setApplication()` method, register Target with Mobile Core.

Here is code sample that calls these set up methods:

```java
public class TargetApp extends Application {

 @Override
 public void onCreate() {
     super.onCreate();
     MobileCore.setApplication(this);
     MobileCore.configureWithAppId("yourAppId");

     try {
         Target.registerExtension();
         Identity.registerExtension();
         MobileCore.start(null);
     } catch (Exception e) {
         //Log the exception
     }
 }
}
```