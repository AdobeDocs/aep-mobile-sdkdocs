```java
import com.adobe.marketing.mobile.services.*;

DeviceInforming deviceInfoService = ServiceProvider.getInstance().getDeviceInfoService();
String localName = deviceInfoService.getLocaleString();
```