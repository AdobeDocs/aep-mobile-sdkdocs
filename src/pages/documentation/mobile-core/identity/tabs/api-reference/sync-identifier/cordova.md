#### Cordova

**Syntax**

```jsx
ACPIdentity.syncIdentifier = function(identifierType, identifier, authState, success, fail);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* _authState (ACPMobileVisitorAuthenticationState)_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.
* _success_ is a callback containing the visitor id type, value, and authentication state if the `syncIdentifier` API executed without any errors.
* _fail_ is a callback containing error information if the `syncIdentifier` API was executed with errors.

**Example**

```jsx
ACPIdentity.syncIdentifier("id1", "value1", ACPIdentity.ACPMobileVisitorAuthenticationStateUnknown, function (handleCallback) {
  console.log("AdobeExperenceSDK: Identifier synced successfully : " + handleCallback);
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to sync identifier : " + handleError);
});
```