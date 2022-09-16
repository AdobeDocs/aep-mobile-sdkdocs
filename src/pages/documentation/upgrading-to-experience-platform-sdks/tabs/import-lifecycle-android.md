#### Android

**Java**

Import the Lifecycle framework:

```
import com.adobe.marketing.mobile.*;
```

Register the framework with Mobile Core:

```
public class MyApp extends Application {​
​
    @Override
    public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);
​
        try {
            Lifecycle.registerExtension();
        } catch (Exception e) {
            // Log the exception
        }
    }
}
```