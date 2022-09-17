#### Android

**Java**

<InlineAlert variant="info" slots="text"/>

Do not start or stop Lifecycle in a Fragment. 

We recommend pausing Lifecycle from the `onPause` function in your Activities:

```
@Override
public void onPause() {
    MobileCore.lifecyclePause();
}
```

<InlineAlert variant="info" slots="text"/>

To ensure accurate session and crash reporting, this call must be added to every Activity.