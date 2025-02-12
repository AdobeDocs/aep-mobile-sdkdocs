---
noIndex: true
---

<Variant platform="android" function="enum" repeat="2"/>

#### Java

```java
public enum ContentType {
    APPLICATION_JSON(0),
    TEXT_HTML(1),
    TEXT_XML(2),
    TEXT_PLAIN(3),
    UNKNOWN(4);

    @Override
    public String toString();
}
```

<Variant platform="ios" function="enum" repeat="2"/>

#### Swift

```swift
@objc(AEPContentType)
public enum ContentType: Int, Codable {
    case applicationJson = 0
    case textHtml = 1
    case textXml = 2
    case textPlain = 3
    case unknown = 4

    public func toString() -> String
}
```

<Variant platform="android" function="string-values" repeat="1"/>

| Case | String value |
| ---- | ------------ |
| `APPLICATION_JSON` | `application/json` |
| `TEXT_HTML` | `text/html` |
| `TEXT_XML` | `text/xml` |
| `TEXT_PLAIN` | `text/plain` |
| `UNKNOWN` | (empty string) |

<Variant platform="ios" function="string-values" repeat="1"/>

| Case | String value |
| ---- | ------------ |
| `.applicationJson` | `application/json` |
| `.testHtml` | `text/html` |
| `.textXml` | `text/xml` |
| `.textPlain` | `text/plain` |
| `.unknown` | (empty string) |
