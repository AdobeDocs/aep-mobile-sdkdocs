Call the `setApplication()` method once in the `onCreate()` method of your main activity. For example, your code might look like the following:

```java
public class MobileServicesApp extends Application {

@Override
public void onCreate() {
     super.onCreate();
     MobileCore.setApplication(this);

     try {
             Analytics.registerExtension();
             MobileServices.registerExtension(); //Register Mobile Services with Mobile Core
             Lifecycle.registerExtension();
             Identity.registerExtension();
             MobileCore.start(null);
     } catch (Exception e) {
     //Log the exception
     }
  }
}
```