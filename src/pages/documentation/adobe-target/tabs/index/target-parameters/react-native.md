#### JavaScript

**Example**

```javascript
var mboxParameters = {"status": "platinum"};
var profileParameters = {"gender": "female"};
var targetProduct = new ACPTargetProduct("24D334", "Stationary");
var purchaseIDs = ["34","125"];
var targetOrder = new ACPTargetOrder("ADCKKBC", 400.50, purchaseIDs);
var targetParameters = new ACPTargetParameters(mboxParameters, profileParameters, targetProduct, targetOrder);
```