---
noIndex: true
---

<Variant platform="android" task="implement" repeat="5"/>

#### Java

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](../api-reference.md#appendtourl-appendvisitorinfoforurl):

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

Alternately, starting in SDK version 1.4.0 (Identity version 1.1.0), you can call [getUrlVariables](../api-reference.md#geturlvariables) and build your own URL:

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

<Variant platform="ios" task="implement" repeat="10"/>

To append visitor information to the URL that is being used to open the web view, call [appendToUrl](../api-reference.md#appendtourl-appendvisitorinfoforurl):

#### Swift

```swift
let url = URL(string: "https://example.com")
Identity.appendTo(url: url) { appendedUrl, error in
    if error != nil {
        // handle error here
    } else {
        // handle appended url here
    }
}
```

#### Objective-C

```objectivec
NSURL *sampleUrl = [NSURL URLWithString:@"https://example.com"];
[AEPMobileIdentity appendToUrl:sampleUrl completion:^(NSURL * _Nullable appendedUrl, NSError *error) {
    if (error != nil) {
        // Handle error here
    } else {
        // Handle appended url here
    }
}];
```

Alternately, you can call [getUrlVariables](../api-reference.md#geturlvariables) and build your own URL:

#### Swift

```swift
Identity.getUrlVariables { urlVariables, error in
    if error != nil {
        // handle error here
    } else {
        if let url = URL(string: "https://example.com?\(urlVariables ?? "")") {
            DispatchQueue.main.async {
                UIApplication.shared.open(url)
            }
        }
    }
}
```

#### Objective-C

```objectivec
[AEPMobileIdentity getUrlVariables:^(NSString * _Nullable urlVariables, NSError *error) {
    NSString *sampleURLString = @"https://example.com";
    if (error != nil) {
        // Handle variables being nil
    } else {
        NSString *stringWithData = [NSString stringWithFormat:@"%@?%@", sampleURLString, urlVariables];
        NSURL *appendedUrl = [NSURL URLWithString:stringWithData];
        dispatch_async(dispatch_get_main_queue(), ^{
            [[UIApplication sharedApplication] openURL:appendedUrl options:@{} completionHandler:nil];
        });
    }
}];
```

<!--- <Variant platform="react-native" task="implement" repeat="5"/>

#### JavaScript

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](../api-reference.md#appendtourl-appendvisitorinfoforurl):

```jsx
ACPIdentity.appendVisitorInfoForURL("www.example.com").then(urlWithVistorData => console.log("Url with Visitor Data = " + urlWithVisitorData));
```

Alternately, starting with SDK version 1.0.5, you can call [getUrlVariables](../api-reference.md#geturlvariables) and build your own URL:

```jsx
ACPIdentity.getUrlVariables().then(urlVariables => console.log("query params = " + urlVariables));
```

<Variant platform="flutter" task="implement" repeat="5"/>

#### Dart

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](../api-reference.md#appendtourl-appendvisitorinfoforurl):

```dart
String result = "";

try {
  result = await FlutterACPIdentity.appendToUrl("www.example.com");
} on PlatformException {
  log("Failed to append URL");
}
```

Alternately, starting with SDK version 1.0.0-beta.1, you can call [getUrlVariables](../api-reference.md#geturlvariables) and build your own URL:

```dart
String result = "";

try {
  result = await FlutterACPIdentity.urlVariables;
} on PlatformException {
  log("Failed to get url variables");
}
``` --->
