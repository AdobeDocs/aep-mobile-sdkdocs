#### TargetRequest Builder

`TargetRequest` builder helps create a `TargetRequest` instance. The returned instance can be used with `loadRequests`, which accepts a `TargetRequest` object list to retrieve offers for the specified mbox locations.

**Example**

```java
TargetRequest request = new TargetRequest.Builder("mboxName","defaultContent")
                        .setMboxParameters(new HashMap<String, String>())
                        .setOrderParameters(new HashMap<String, Object>())
                        .setProductParameters(new HashMap<String, String>())
                        .setContentCallback(new AdobeCallback<String>() {
                         @Override
                         public void call(String value) {
                             // do something with target content.
                         }
                      }).build();
```

#### loadRequests

Sends a batch request to your configured Target server for multiple mbox locations that are specified in the `TargetRequest` list. Each object in the array contains a callback function, which is invoked when content is available for its given mbox location.

**Syntax**

```java
public static void loadRequests(final List<TargetRequest> requestArray,
                                final Map<String, Object> profileParameters);
```

**Example**

```java
// define parameters for first request
Map<String, Object> mboxParameters1 = new HashMap<>();
mboxParameters1.put("status", "platinum");

// define parameters for second request
Map<String, Object> mboxParameters2 = new HashMap<>();
mboxParameters2.put("userType", "paid");

List<String> purchasedIds = new ArrayList<String>();
purchasedIds.add("34");
purchasedIds.add("125");

Map<String, Object> orderParameters2 = new HashMap<>();
orderParameters2.put("id", "ADCKKIM");
orderParameters2.put("total", "344.30");
orderParameters2.put("purchasedProductIds",  purchasedIds);

Map<String, Object> productParameters2 = new HashMap<>();
productParameters2.put("id", "24D3412");
productParameters2.put("categoryId","Books");

TargetRequest request1 = new TargetRequest.Builder("mboxName1", "defaultContent1")
                .setMboxParameters(mboxParameters1)
                .setContentCallback(new AdobeCallback<String>() {
                    @Override
                    public void call(String value) {
                        // do something with target content.
                    }
                }).build();

TargetRequest request2 = new TargetRequest.Builder("mboxName2", "defaultContent2")
                .setMboxParameters(mboxParameters2)
                .setOrderParameters(orderParameters2)
                .setProductParameters(productParameters2)
                .setContentCallback(new AdobeCallback<String>() {
                    @Override
                    public void call(String value) {
                        // do something with target content.
                    }
                }).build();

// Creating Array of Request Objects
List<TargetRequest> locationRequests = new ArrayList<>();
locationRequests.add(request1);
locationRequests.add(request2);

 // Define the profile parameters map.
Map<String, Object> profileParameters = new HashMap<>();
profileParameters.put("ageGroup", "20-32");

// Call the targetLoadRequests API.
Target.loadRequests(locationRequests, profileParameters);
```