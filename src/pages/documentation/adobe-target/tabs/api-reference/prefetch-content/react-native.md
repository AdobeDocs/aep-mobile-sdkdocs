#### JavaScript

**Syntax**

```javascript
prefetchContent(prefetchObjectArray: Array<ACPTargetPrefetchObject>, parameters?: ACPTargetParameters): Promise<any>
```

* _prefetchObjectArray_ is an Array of `ACPTargetPrefetchObject` objects for various mbox locations.
* _parameters_ is the configured `ACPTargetParameters` for the prefetch request.
* A Promise object is returned and is resolved with true value or is rejected with the reason for the error.

**Example**

```javascript
var mboxParameters1 = {"status": "platinum"};
var profileParameters1 = {"age": "20"};
var product1 = new ACPTargetProduct("24D3412", "Books");
var order1 = new ACPTargetOrder("ADCKKIM", 344.30, ["34","125"]);
var targetParameters1 = new ACPTargetParameters(mboxParameters1, profileParameters1, product1, order1);

var mboxParameters2 = {"userType": "Paid"};
var product2 = new ACPTargetProduct("764334", "Online");
var order2 = new ACPTargetOrder("ADCKKIM", 344.30, ["id1","id2"]);
var targetParameters2 = new ACPTargetParameters(mboxParameters2, null, product2, order2);

// Creating Prefetch Objects
var prefetch1 = new ACPTargetPrefetchObject("logo", targetParameters1);
var prefetch2 = new ACPTargetPrefetchObject("buttonColor", targetParameters2);

// Creating prefetch Array
var prefetchList = [prefetch1, prefetch2];

// Creating Target parameters
var mboxParameters = {"status": "progressive"};
var profileParameters = {"age": "20-32"};
var product = new ACPTargetProduct("24D334", "Stationary");
var order = new ACPTargetOrder("ADCKKBC", 400.50, ["34","125"]);
var targetParameters = new ACPTargetParameters(mboxParameters, profileParameters, product, order);

// Target API Call
ACPTarget.prefetchContent(prefetchList, targetParameters).then(success => console.log(success)).catch(err => console.log(err));
```