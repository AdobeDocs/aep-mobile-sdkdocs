If a notification is sent for a prefetched mbox, its contents should already have been requested with `loadRequests`, which indicates that the mbox was viewed.

#### Java

**Syntax**

```java
public static void locationClicked(final String mboxName,
                                   final Map<String, String> mboxParameters
                                   final Map<String, String> productParameters
                                   final Map<String, Object> orderParameters
                                   final Map<String, String> profileParameters);
```

**Example**

```java
// Define Mbox parameters
Map<String, Object> mboxParameters = new HashMap<>();
mboxParameters.put("membership", "prime");

// Define Product parameters
Map<String, Object> productParameters = new HashMap<>();
productParameters.put("id", "CEDFJC");
productParameters.put("categoryId","Electronics");

List<String> purchasedIds = new ArrayList<String>();
purchasedIds.add("81");
purchasedIds.add("123");
purchasedIds.add("190");

// Define Order parameters
Map<String, Object> orderParameters = new HashMap<>();
orderParameters.put("id", "NJJICK");
orderParameters.put("total", "650");
orderParameters.put("purchasedProductIds",  purchasedIds);

// Creating Profile parameters
Map<String, Object> profileParameters = new HashMap<>();
profileParameters.put("ageGroup", "20-32");

Target.locationClicked("cartLocation", mboxParameters, productParameters, orderParameters, profileParameters);
```