#### Java

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](./api-reference.md#appendtourl-appendvisitorinfoforurl): FIX LINK

```java
Identity.appendVisitorInfoForURL("https://example.com", new AdobeCallback<String>() {    
    @Override    
    public void call(String urlWithAdobeVisitorInfo) {        
        //handle the new URL here        
        //For example, open the URL on the device browser        
        //        
        Intent i = new Intent(Intent.ACTION_VIEW);        
        i.setData(Uri.parse(urlWithAdobeVisitorInfo));        
        startActivity(i);    
    }
});
```

Alternately, starting in SDK version 1.4.0 (Identity version 1.1.0), you can call [getUrlVariables](./api-reference.md#geturlvariables) and build your own URL: FIX LINK

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