#### Cordova

**Syntax**

```jsx
ACPIdentity.syncIdentifiers = function(identifiers, authState, success, fail);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

* _authState_ value indicating authentication state for the identifiers to be synced and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.
* _success_ is a callback containing the synced identifiers if the `syncIdentifiers` API executed without any errors.
* _fail_ is a callback containing error information if the `syncIdentifiers` API was executed with errors.

**Example**

```jsx
ACPIdentity.syncIdentifiers({"idType1":"idValue1", "idType2":"idValue2", "idType3":"idValue3"}, ACPIdentity.ACPMobileVisitorAuthenticationStateAuthenticated, function (handleCallback) {
  console.log("AdobeExperienceSDK: " + handleCallback)
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to sync identifiers : " + handleError)
});
```