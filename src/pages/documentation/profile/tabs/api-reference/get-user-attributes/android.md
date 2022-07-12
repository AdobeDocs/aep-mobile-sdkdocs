#### Java

**Syntax**

```java
public static void getUserAttributes(List<String> keys, AdobeCallback<Map<String, Object>> callback)
```

* _callback_ is invoked after the customer attributes are available.

**Example**

A retail application wants to get the `itemsAddedToCart` user data when processing checkout.

When `AdobeCallbackWithError` is provided, if the operation times out (5s) or an unexpected error occurs, the `fail` method is called with the appropriate `AdobeError`.

```java
UserProfile.getUserAttributes(Arrays.asList("itemsAddedToCart"), new AdobeCallbackWithError<Map<String, Object>>() {
            @Override
            public void fail(AdobeError adobeError) {
                // your customized code
            }
            @Override
            public void call(Map<String, Object> stringObjectMap) {
                     // your customized code
            }
        });
```