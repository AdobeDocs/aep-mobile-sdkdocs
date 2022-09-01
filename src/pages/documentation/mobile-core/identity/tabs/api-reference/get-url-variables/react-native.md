<InlineAlert variant="info" slots="text"/>

This method was added in react-native-acpcore v1.0.5.

#### JavaScript

**Syntax**

```jsx
getUrlVariables(): Promise<?string>;
```

**Example**

```jsx
ACPIdentity.getUrlVariables().then(urlVariables => console.log("AdobeExperenceSDK: query params = " + urlVariables));
```