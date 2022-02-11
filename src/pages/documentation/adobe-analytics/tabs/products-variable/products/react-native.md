#### JavaScript

**Example**

```jsx
//create a context data dictionary
var contextData = {};

// add products, a purchase id, a purchase context data key, and any other data you want to collect.
// Note the special syntax for products
contextData["&&events"] = "event1";
contextData["&&products"] = ";Running Shoes;1;69.95,;event1=5.5;eVar1=Merchandising,;Running Socks;10;29.99";
contextData["m.purchaseid"] = "1234567890";
contextData["m.purchase"] = "1";

// send the tracking call - use either a trackAction or TrackState call.
// trackAction example:
ACPCore.trackAction("purchase", contextData);
// trackState example:
ACPCore.trackState("Order Confirmation", contextData);
```