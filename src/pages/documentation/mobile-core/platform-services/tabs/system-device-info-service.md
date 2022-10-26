<Variant platform="android" task="usage" repeat="1"/>

```java
import com.adobe.marketing.mobile.services.*;

DeviceInforming deviceInfoService = ServiceProvider.getInstance().getDeviceInfoService();
String localName = deviceInfoService.getLocaleString();
```

<Variant platform="ios" task="usage" repeat="1"/>

```swift
import AEPServices

// Add a computed variable to your type or use it directly in the function where required
private var systemInfoService: SystemInfoService {
  return ServiceProvider.shared.systemInfoService
}

// ...
let locale = systemInfoService.getActiveLocaleName()
```