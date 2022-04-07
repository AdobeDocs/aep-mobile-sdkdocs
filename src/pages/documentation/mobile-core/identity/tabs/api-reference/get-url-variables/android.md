#### Java

<InlineAlert variant="info" slots="text"/>

This method was added in Core version 1.4.0 and Identity version 1.1.0.

This API can be called with [AdobeCallback](../api-reference.md#adobecallback) or [AdobeCallbackWithError](../api-reference.md#adobecallbackwitherror) for retrieving the attributes from the Mobile SDK. When `AdobeCallbackWithError` is provided, this API uses a default timeout of 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../api-reference.md#adobeerror).

**Syntax**

```java
public static void getUrlVariables(final AdobeCallback<String> callback);
```

* _callback_ has an NSString value that contains the visitor identifiers as a query string after the service request is complete.

**Example**

```java
Identity.getUrlVariables(new AdobeCallback<String>() {    
    @Override    
    public void call(String stringWithAdobeVisitorInfo) {        
        //handle the URL query parameter string here
        //For example, open the URL on the device browser        
        //        
        Intent i = new Intent(Intent.ACTION_VIEW);        
        i.setData(Uri.parse("https://example.com?" + urlWithAdobeVisitorInfo));        
        startActivity(i);    
    }
});
```