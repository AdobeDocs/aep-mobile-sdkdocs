#### Java

```java
public class MobileApp extends Application {

    @Override
    public void onCreate() {
      super.onCreate();
      MobileCore.setApplication(this);

      try {
        Edge.registerExtension();
        com.adobe.marketing.mobile.edge.identity.Identity.registerExtension();
        // register other extensions
        MobileCore.start(new AdobeCallback() {
          @Override
          public void call(final Object o) {
            MobileCore.configureWithAppID("yourAppId");
          }});
      } catch (Exception e) {
        //Log the exception
      }
    }
}
```