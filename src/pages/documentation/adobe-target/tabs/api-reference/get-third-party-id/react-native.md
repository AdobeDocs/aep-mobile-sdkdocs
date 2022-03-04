#### JavaScript

**Syntax**

```javascript
getThirdPartyId(): Promise<string>
```

* A _Promise_ object is returned and is resolved with the `thirdPartyId` value.

**Example**

```javascript
ACPTarget.getThirdPartyId().then(thirdPartyId => {
            // read Target thirdPartyId 
});
```