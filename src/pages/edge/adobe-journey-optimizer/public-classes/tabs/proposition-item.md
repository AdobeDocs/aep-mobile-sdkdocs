---
noIndex: true
---

<Variant platform="ios" function="generate-interaction-xdm" repeat="4"/>

#### Swift

**Syntax**

```swift
func generateInteractionXdm(_ interaction: String? = nil, withEdgeEventType eventType: MessagingEdgeEventType, forTokens tokens: [String]? = nil) -> [String: Any]?
```

* _interaction_ is a custom string value describing the interaction.
* _eventType_ is an enum specifying event type for the interaction.
* _tokens_ is an array containing the decision item tokens for recording interaction.

<Variant platform="ios" function="track" repeat="4"/>

#### Swift

**Syntax**

```swift
func track(_ interaction: String? = nil, withEdgeEventType eventType: MessagingEdgeEventType, forTokens tokens: [String]? = nil)
```

* _interaction_ is a custom string value describing the interaction.
* _eventType_ is an enum specifying event type for the interaction.
* _tokens_ is an array containing the decision item tokens for recording interaction.

<Variant platform="android" function="get-content-card-schema-data" repeat="3"/>

#### Java

**Syntax**

```java
public ContentCardSchemaData getContentCardSchemaData()
```

<Variant platform="android" function="get-inapp-schema-data" repeat="3"/>

#### Java

**Syntax**

```java
public InAppSchemaData getInAppSchemaData()
```

<Variant platform="android" function="get-item-id" repeat="3"/>

#### Java

**Syntax**

```java
public String getItemId()
```

<Variant platform="android" function="get-item-data" repeat="3"/>

#### Java

**Syntax**

```java
public Map<String, Object> getItemData()
```

<Variant platform="android" function="get-schema" repeat="3"/>

#### Java

**Syntax**

```java
public SchemaType getSchema()
```

<Variant platform="android" function="get-html-content" repeat="3"/>

#### Java

**Syntax**

```java
public String getHtmlContent()
```

<Variant platform="android" function="get-json-content-map" repeat="3"/>

#### Java

**Syntax**

```java
public Map<String, Object> getJsonContentMap()
```

<Variant platform="android" function="get-json-content-array-list" repeat="3"/>

#### Java

**Syntax**

```java
public List<Map<String, Object>> getJsonContentArrayList()
```

<Variant platform="android" function="generate-interaction-xdm" repeat="4"/>

#### Java

**Syntax**

```java
public Map<String, Object> generateInteractionXdm(@NonNull final MessagingEdgeEventType eventType)
```

* _eventType_ is an enum specifying event type for the interaction.

<Variant platform="android" function="generate-interaction-xdm-with-tokens" repeat="4"/>

#### Java

**Syntax**

```java
public Map<String, Object> generateInteractionXdm(final String interaction, @NonNull final MessagingEdgeEventType eventType, final List<String> tokens)
```

* _interaction_ is a custom string value describing the interaction.
* _eventType_ is an enum specifying event type for the interaction.
* _tokens_ is a list containing the decision item tokens for recording interaction.

<Variant platform="android" function="track" repeat="4"/>

#### Java

**Syntax**

```java
public void track(@NonNull final MessagingEdgeEventType eventType)
```

* _eventType_ is an enum specifying event type for the interaction.

<Variant platform="android" function="track-with-tokens" repeat="4"/>

#### Java

**Syntax**

```java
public void track(final String interaction, @NonNull final MessagingEdgeEventType eventType, final List<String> tokens)
```

* _interaction_ is a custom string value describing the interaction.
* _eventType_ is an enum specifying event type for the interaction.
* _tokens_ is a list containing the decision item tokens for recording interaction.
