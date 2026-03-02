---
title: InboxContentSchemaData
description: The `InboxContentSchemaData` class represents an inbox content schema received from the remote, upon a personalization query to the Experience Edge network.
keywords:
- Adobe Journey Optimizer
- Messaging
- Proposition
- Interface
- Android
- Inbox
- Code-based Experiences
---

# InboxContentSchemaData

Represents the proposition response object containing a `inbox-item` schema.

## Android Interface

```java
public class InboxContentSchemaData implements SchemaData {
    // Map containing the inbox content data
    private Map<String, Object> content = null;

    // Map containing additional metadata for this inbox content
    private Map<String, Object> metadata = null;

    ...

    @Override
    public Map<String, Object> getContent() {
        return content;
    }

    public Map<String, Object> getMetadata() {
        return metadata;
    }
}
```

### Public functions

#### getContent

Gets the content map for this inbox schema data.

**Syntax**

```java
public Map<String, Object> getContent()
```

**Returns**

A `Map<String, Object>` containing the inbox content, or `null` if not present or parsing failed.

#### getMetadata

Gets the metadata map for this inbox schema data.

**Syntax**

```java
public Map<String, Object> getMetadata()
```

**Returns**

A `Map<String, Object>` containing the inbox metadata, or `null` if not present or parsing failed.
