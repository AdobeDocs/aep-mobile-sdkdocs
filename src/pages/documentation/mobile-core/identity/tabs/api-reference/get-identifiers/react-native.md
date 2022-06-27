#### JavaScript

**Syntax**

```jsx
getIdentifiers(): Promise<Array<?ACPVisitorID>>;
```

**Example**

```jsx
ACPIdentity.getIdentifiers().then(identifiers => console.log("AdobeExperienceSDK: Identifiers = " + identifiers));
```