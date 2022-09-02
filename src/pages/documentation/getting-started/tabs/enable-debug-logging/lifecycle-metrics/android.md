#### Java

With the `onResume` function, start Lifecycle data collection:

```java
@Override  
   public void onResume() {  
      MobileCore.setApplication(getApplication());
      MobileCore.lifecycleStart(null);
   }
```

<InlineAlert variant="info" slots="text"/>

Setting the application is only necessary on activities that are entry points for your application. However, setting the application on each `Activity` has no negative impact and ensures that the SDK always has the necessary reference to your application. As a result, you should call `setApplication` on each of your activities.

You can use the `onPause` function to pause the lifecycle data collection:

<InlineAlert variant="warning" slots="text"/>

To ensure accurate session and crash reporting, this call must be added to every `Activity`.

```java
@Override
   public void onPause() {
      MobileCore.lifecyclePause();
   }
```