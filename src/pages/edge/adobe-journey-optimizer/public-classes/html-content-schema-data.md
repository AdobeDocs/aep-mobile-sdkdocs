---
title: HtmlContentSchemaData
description: The `HtmlContentSchemaData` class represents a "html-content" proposition received from the remote, upon a personalization query request to the Experience Edge network.
keywords:
- Adobe Journey Optimizer
- Messaging
- Proposition
- Interface
- Android
- iOS
- Code-based Experiences
- Content Cards
---

# HtmlContentSchemaData

Represents the proposition response object containing a `html-content` schema.

## iOS Interface

```swift
@objc(AEPHtmlContentSchemaData)
@objcMembers
public class HtmlContentSchemaData: NSObject, Codable {
    /// Represents the content of the HtmlContentSchemaData object.
    public let content: String
    
    /// Determines the value type of `content`.  For HtmlContentSchemaData objects, this value is always `.textHtml`.
    public let format: ContentType?

    ...
}
```

## Android Interface

```java
public class HtmlContentSchemaData implements SchemaData {
    private String content = null;
    private ContentType format = null;

    @Override
    @Nullable public String getContent() { return content; }

    public ContentType getFormat() { return format; }
}
```
