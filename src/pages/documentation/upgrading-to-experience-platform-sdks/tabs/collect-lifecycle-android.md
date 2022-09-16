#### Android

**Java**

<InlineAlert variant="info" slots="text"/>

Do not start or stop Lifecycle in a Fragment. 

In the onResume function of each of your Activities, start Lifecycle data collection:

```
@Override  
public void onResume() {  
    MobileCore.setApplication(getApplication());
    MobileCore.lifecycleStart(null);
}
```

<InlineAlert variant="info" slots="text"/>

To ensure accurate session and crash reporting, this call must be added to every Activity.

<InlineAlert variant="info" slots="text"/>

Setting the application is only necessary on activities that are entry points for your application. However, setting the application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your application. We recommend that you call `setApplication` in each of your Activities.