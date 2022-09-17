#### Java

```java
// TODO - Assignment 3
Map<String, Object> xdmData = new HashMap<String, Object>();

// 1. Add Email to the IdentityMap.
// Note: this app does not implement a logging system, so authenticatedState ambiguous is used
// in this case. The other authenticatedState values are: authenticated, loggedOut
Map<String, Object> identityMap = new HashMap<String, Object>();
identityMap.put("Email", new ArrayList<Object>() {{
  add(new HashMap<String, Object>() {{
    put("id", reviewerId);
    put("authenticatedState", "ambiguous");
  }});
}});
xdmData.put("identityMap", identityMap);

// 2. Add product review details in the custom field group
// Note: use your _tenantId here as specified in the Product Reviews Schema in Adobe Experience Platform
xdmData.put("_tenantId", new HashMap<String, Object>() {{
    put("productSku", product.sku);
    put("rating", rating);
    put("reviewText", text);
  put("reviewerId", reviewerId);
}});
```