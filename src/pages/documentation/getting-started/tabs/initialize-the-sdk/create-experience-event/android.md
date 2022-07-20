#### Java

```java
Map<String, Object> reviewXdmData = new HashMap<>();
reviewXdmData.put("productSku", "demo123");
reviewXdmData.put("rating", 5);
reviewXdmData.put("reviewText", "I love this demo!");
reviewXdmData.put("reviewerId", "Anonymous user");

Map<String, Object> xdmData = new HashMap<>();
xdmData.put("eventType", "MyFirstXDMExperienceEvent");
xdmData.put(_yourTenantId, reviewXdmData);

ExperienceEvent experienceEvent = new ExperienceEvent.Builder()
                .setXdmSchema(xdmData)
                .build();
```