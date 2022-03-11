#### Swift

**Syntax**

```swift
static func setPreviewRestartDeepLink(_ deeplink: URL)
```

* _deeplink_ : a `URL` that contains the preview restart deeplink.

**Example**

```swift
if let url = URL(string: "myapp://HomePage") {
    Target.setPreviewRestartDeepLink(url)
}
```

#### Objective-C

**Example**

```objc
[AEPMobileTarget setPreviewRestartDeepLink:@"myapp://HomePage"];
```