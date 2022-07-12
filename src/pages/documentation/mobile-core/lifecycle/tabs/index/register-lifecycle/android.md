### Java

1. Register the Lifecycle extension:

   ```java
   public class TargetApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);

        try {
            Lifecycle.registerExtension();
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

2. In the `onResume` function, start the lifecycle data collection:

   ```java
      @Override  
      public void onResume() {  
         MobileCore.setApplication(getApplication());
         MobileCore.lifecycleStart(null);
      }
   ```

   Setting the application is only necessary on activities that are entry points for your application. However, setting the application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your application. We recommend that you call `setApplication`in each of your activities.

3. In the `onPause` function, pause the lifecycle data collection:

   ```java
      @Override
      public void onPause() {
         MobileCore.lifecyclePause();
      }
   ```

   To ensure accurate session and crash reporting, this call must be added to every activity.