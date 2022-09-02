#### Java

To create events in Android, you must first import `com.adobe.marketing.mobile.Event`:

```java
import com.adobe.marketing.mobile.Event;

...
List<Integer> pageOrder = new ArrayList<Integer>();
pageOrder.add(1);
pageOrder.add(2);
pageOrder.add(3);
Map<String, Object> eventData = new HashMap<String, Object>();
eventData.put("id", "clickid53");
eventData.put("localTemp", 72.6);
eventData.put("pageClicks", 23);
eventData.put("pageOrder", pageOrder);
Event newEvent = new Event.Builder("MyCustomEvent",             
                                   "com.myCompany.eventType.custom",
                                   "com.myCompany.eventSource.custom")
                                   .setEventData(eventData).build();
```