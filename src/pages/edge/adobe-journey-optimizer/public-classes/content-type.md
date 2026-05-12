---
title: ContentType
description: Enum representing the ContentTypes used in schema-based objects.
keywords:
- Adobe Journey Optimizer
- Messaging
- iOS
- Android
- Proposition
- Schema
- ContentType
- Content type
---

# Enum - ContentType

Enum representing content types found within a schema object.

## Definition

### Android Java

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

### iOS Swift

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

## String values

Below is the table of values returned by calling the `toString` method for each case:

### Android

| Case | String value |
| ---- | ------------ |
| `APPLICATION_JSON` | `application/json` |
| `TEXT_HTML` | `text/html` |
| `TEXT_XML` | `text/xml` |
| `TEXT_PLAIN` | `text/plain` |
| `UNKNOWN` | (empty string) |

### iOS

| Case | String value |
| ---- | ------------ |
| `.applicationJson` | `application/json` |
| `.testHtml` | `text/html` |
| `.textXml` | `text/xml` |
| `.textPlain` | `text/plain` |
| `.unknown` | (empty string) |

