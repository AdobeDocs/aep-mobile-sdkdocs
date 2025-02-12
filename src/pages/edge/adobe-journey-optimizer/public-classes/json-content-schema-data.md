---
title: JsonContentSchemaData
description: The `JsonContentSchemaData` class represents a "json-content" proposition received from the remote, upon a personalization query request to the Experience Edge network.
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

# JsonContentSchemaData

Represents the proposition response object containing a `json-content` schema.

## iOS Interface

```swift
@objc(AEPJsonContentSchemaData)
@objcMembers
public class JsonContentSchemaData: NSObject, Codable {
    /// Represents the content of the JsonContentSchemaData object.  Its value's type is determined by `format`.
    public let content: Any
    
    /// Determines the value type of `content`.
    public let format: ContentType?

    ...
}
```

## Android Interface

```java
public class JsonContentSchemaData implements SchemaData {
    private Object content = null;
    private ContentType format = null;

    @Override
    @Nullable public Object getContent() { return content; }
}
```
