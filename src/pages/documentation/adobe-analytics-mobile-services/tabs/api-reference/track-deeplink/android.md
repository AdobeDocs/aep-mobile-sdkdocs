#### Java

**Syntax**

```java
public static void trackAdobeDeepLink(final Uri uri)
```

**Example**

```java
Uri testUri = new Uri.Builder()
        .scheme("adobelinktest")
        .appendQueryParameter("a.deeplink.id", "test_deeplinkId")
        .appendQueryParameter("a.launch.campaign.trackingcode", "code")
        .appendQueryParameter("test_key", "test_value")        
        .build();

        MobileServices.trackAdobeDeepLink(testUri);
```
