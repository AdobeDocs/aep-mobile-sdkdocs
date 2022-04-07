#### Java

This API can be called with [AdobeCallback](../api-reference.md#adobecallback) or [AdobeCallbackWithError](../api-reference.md#adobecallbackwitherror) for retrieving the ECID from the Mobile SDK. When `AdobeCallbackWithError` is provided, this API uses a default timeout of 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../api-reference.md#adobeerror).

**Syntax**

```java
public static void getExperienceCloudId(final AdobeCallback<String> callback);
```

* _callback_ is invoked after the ECID is available.

**Example**

```java
Identity.getExperienceCloudId(new AdobeCallback<String>() {    
    @Override    
    public void call(String id) {        
         //Handle the ID returned here    
    }
});
```