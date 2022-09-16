#### Android

The Mobile Services SDK syntax and usage examples for these API are:

**Mobile Services SDK**

```
// syntax
public static void trackState(final String state, final Map<String, Object> contextData)

// usage
Analytics.trackState("MainPage", new HashMap<String, Object>() {{
  put("firstVisit", true);
}});
```

```
// syntax
public static void trackAction(final String action, final Map<String, Object> contextData)

// usage
Analytics.trackAction("linkClicked", new HashMap<String, Object>() {{
  put("url", "https://www.adobe.com");
}});
```

**AEP SDK**

The AEP SDKs have moved the `trackAction` and `trackState` APIs to the MobileCore extension. In addition, the context data Map has been changed from `<String, Object>` to `<String, String>`. The syntax is:

```
// syntax
public static void trackState(final String state, final Map<String, String> contextData)

// usage
MobileCore.trackState("MainPage", new HashMap<String, String>() {{
  put("firstVisit", "true");
}});
```

```
// syntax
public static void trackAction(final String action, final Map<String, String> contextData)

// usage
MobileCore.trackAction("linkClicked", new HashMap<String, String>() {{
  put("url", "https://www.adobe.com");
}});
```