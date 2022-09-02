#### Java

```java
/**
 * The interface that represents an Experience XDM event data schema.
 */
public interface Schema {

    /**
     * Returns the version of this schema as defined in the Adobe Experience Platform.
     * @return the version of this schema.
     */
    String getSchemaVersion();

    /**
     * Returns the identifier for this schema as defined in the Adobe Experience Platform.
     * The identifier is a URI where this schema is defined.
     * @return the URI identifier for this schema.
     */
    String getSchemaIdentifier();

    /**
     * Returns the identifier for this dataset as defined in the Adobe Experience Platform.
     * @return the dataset ID
     */
    String getDatasetIdentifier();

    /**
     * Serialize this {@code Schema} object to a map with the same format as its XDM schema.
     * @return the XDM-formatted map of this {@code Schema} object.
     */
    Map<String, Object> serializeToXdm();
}
```

By implementing the **Property** interface, you can define complex properties for your XDM Schema. A complex property is defined as not being a primitive type, String, or Date.

```java
public interface Property {

    /**
     * Serialize this {@code Property} object to a map with the same format as its XDM schema.
     * @return XDM-formatted map of this {@code Property} object.
     */
    Map<String, Object> serializeToXdm();
}
```
When defining your custom XDM schema(s), implement these interfaces to ensure that the AEP Edge extension successfully serializes the provided data before sending it to Adobe Experience Platform Edge Network.