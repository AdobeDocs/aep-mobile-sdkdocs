To append visitor information to the URL that is being used to open the web view, call [appendToUrl](api-reference.md#appendtourl-appendvisitorinfoforurl): FIX LINK

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

Alternately, you can call [getUrlVariables](api-reference.md#geturlvariables) and build your own URL:

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