<Variant lang="java" repeat="1"/>

```java
public class MainApp extends Application {
    private static final String ENVIRONMENT_FILE_ID = "ENVIRONMENT_FILE_ID";

    @Override
    public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);
        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);
        List<Class<? extends Extension>> extensions = new ArrayList<>();
        extensions.add(Lifecycle.EXTENSION);
        extensions.add(Signal.EXTENSION);
        extensions.add(UserProfile.EXTENSION);
        extensions.add(Assurance.EXTENSION);
        extensions.add(Identity.EXTENSION);
        MobileCore.registerExtensions(extensions, o -> {
            Log.d(LOG_TAG, "AEP Mobile SDK is initialized");
        });
}
}


```

<Variant lang="kotlin" repeat="1"/>

```kotlin
class MyApp : Application() {
    val ENVIRONMENT_FILE_ID = "ENVIRONMENT_FILE_ID"

    override fun onCreate() {
        super.onCreate()
        MobileCore.setApplication(this)
        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)
        val extensions = listOf(
            Identity.EXTENSION,
            Signal.EXTENSION,
            Lifecycle.EXTENSION,
            UserProfile.EXTENSION,
            Assurance.EXTENSION
            )
        MobileCore.registerExtensions(extensions) {
            Log.d(LOG_TAG, "AEP Mobile SDK is initialized")
        }
    }
}
```
