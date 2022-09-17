#### Android

```
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Analytics;
import com.adobe.marketing.mobile.Identity;

@Override
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  setContentView(R.layout.main);

  MobileCore.setApplication(getApplication());
  MobileCore.setLogLevel(LoggingMode.DEBUG);
  try {
    Analytics.registerExtension();
    Identity.registerExtension();
    MobileCore.start(new AdobeCallback() {
      @Override
      public void call(Object o) {
        // add your app id from the "Environments" tab on Launch.
        MobileCore.configureWithAppID("your-app-id");
      }
    });
  } catch (InvalidInitException e) {
    e.printStackTrace();
  }
}
```