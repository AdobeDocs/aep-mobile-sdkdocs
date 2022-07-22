```java
import com.adobe.marketing.mobile.services.*;

DataQueue dataQueue = ServiceProvider.getInstance().getDataQueueService().getDataQueue(name);
DataEntity dataEntity = new DataEntity(mydata);
dataQueue.add(dataEntity);
```