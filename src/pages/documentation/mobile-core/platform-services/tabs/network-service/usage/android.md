```java
import com.adobe.marketing.mobile.services.*;

AndroidNetworkService androidNetworkService = new AndroidNetworkService(ServiceProvider.getInstance().getNetworkService());
androidNetworkService.connectUrlAsync(url,
											  POST, payload,
		null, 10000, 10000, new NetworkService.Callback() {
			@Override
			public void call(NetworkService.HttpConnection connection) {
				// handle `httpConnection`
			}
});
```