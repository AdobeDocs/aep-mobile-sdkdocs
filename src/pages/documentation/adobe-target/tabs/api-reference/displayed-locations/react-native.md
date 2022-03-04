#### JavaScript

**Syntax**

```javascript
locationsDisplayed(mboxNames: Array<string>, parameters?: ACPTargetParameters)
```

* _mboxNames_ is an Array of the mbox locations for which the display notification will be sent to Target.
* _targetParameters_ is the configured `ACPTargetParameters` for the request.

**Example**

```javascript
var product = new ACPTargetProduct("24D334", "Stationary");
var order = new ACPTargetOrder("ADCKKBC", 400.50, ["34", "125"]);
var targetParameters = new ACPTargetParameters(null, null, product, order);

ACPTarget.locationsDisplayed(["mboxName1", "mboxName2"], targetParameters);
```