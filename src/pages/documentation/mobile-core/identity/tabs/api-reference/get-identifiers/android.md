#### Java

This API can be called with [AdobeCallback](../../api-reference.md#public-classes) or [AdobeCallbackWithError](../../api-reference.md#public-classes) for retrieving the custom identifiers from the Mobile SDK. When `AdobeCallbackWithError` is provided, this API uses a default timeout of 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../../api-reference.md#public-classes).

**Syntax**

```java
public static void getIdentifiers(final AdobeCallback<List<VisitorID>> callback);
```

* _callback_ is invoked after the customer identifiers are available.

**Example**

```java
Identity.getIdentifiers(new AdobeCallback<List<VisitorID>>() {    
    @Override    
    public void call(List<VisitorID> idList) {        
         //Process the IDs here    
    }

});
```