### Java

After calling the `setApplication()` method in the `onCreate()` method, register the Signal extension. If the registration was not successful, an `InvalidInitException` is thrown.

```java
public class MobileApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);
        try {
            Signal.registerExtension();
            // register other extensions
            MobileCore.start(new AdobeCallback () {
                @Override
                public void call(Object o) {
                    MobileCore.configureWithAppID("yourAppId");
                }
            });    
        } catch (Exception e) {
            //Log the exception
         }
    }
}
```

<InlineAlert variant="info" slots="text"/>

The Signal extension is automatically included in the Mobile Core extension by Maven. When you manually install the Signal extension, ensure that you add the `signal-1.x.x.aar` library to your project.