---
title: InAppSchemaData
description: The `InAppSchemaData` class represents a "in-app" proposition received from the remote, upon a personalization query request to the Experience Edge network.
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

# InAppSchemaData

Represents the proposition response object containing a `in-app` schema.

## iOS Interface

```swift
@objc(AEPInAppSchemaData)
@objcMembers
public class InAppSchemaData: NSObject, Codable {
    /// Represents the content of the InAppSchemaData object.  Its value's type is determined by `contentType`.
    public let content: Any
    
    /// Determines the value type of `content`.
    public let contentType: ContentType
    
    /// Date and time this in-app campaign was published represented as epoch seconds
    public let publishedDate: Int?
    
    /// Date and time this in-app campaign will expire represented as epoch seconds
    public let expiryDate: Int?
    
    /// Dictionary containing any additional meta data for this content card
    public let meta: [String: Any]?
    
    /// Dictionary containing parameters that help control display and behavior of the in-app message on mobile
    public let mobileParameters: [String: Any]?
    
    /// Dictionary containing parameters that help control display and behavior of the in-app message on web
    public let webParameters: [String: Any]?
    
    /// Array of remote assets to be downloaded and cached for future use with the in-app message
    public let remoteAssets: [String]?

    ...
}
```

## Android Interface

```java
public class InAppSchemaData implements SchemaData {
    private Object content = null;
    private ContentType contentType = null;
    private int publishedDate = 0;
    private int expiryDate = 0;
    private Map<String, Object> meta = null;
    private Map<String, Object> mobileParameters = null;
    private Map<String, Object> webParameters = null;
    private List<String> remoteAssets = null;

    @Override
    public Object getContent() { return content; }

    public ContentType getContentType() { return contentType; }

    public int getPublishedDate() { return publishedDate; }

    public int getExpiryDate() { return expiryDate; }

    @Nullable public Map<String, Object> getMeta() { return meta; }

    @Nullable public Map<String, Object> getMobileParameters() { return mobileParameters; }

    @Nullable public Map<String, Object> getWebParameters() { return webParameters; }

    @Nullable public List<String> getRemoteAssets() { return remoteAssets; }
}
```
