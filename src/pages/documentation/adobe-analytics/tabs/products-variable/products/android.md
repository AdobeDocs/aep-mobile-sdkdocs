#### Java

**Example**

```java
//create a context data dictionary 
HashMap cdata = new HashMap<String, String>(); 

// add products, a purchase id, a purchase context data key, and any other data you want to collect. 
// Note the special syntax for products 
cdata.put("&&events", "event1"); 
cdata.put("&&products", ";Running Shoes;1;69.95;event1=5.5;eVar1=Merchandising,;Running Socks;10;29.99"); 
cdata.put("myapp.purchase", "1"); 
cdata.put("myapp.purchaseid", "1234567890"); 

// send the tracking call - use either a trackAction or trackState call. 
// trackAction example: 
MobileCore.trackAction("purchase", cdata); 
// trackState example: 
MobileCore.trackState("Order Confirmation", cdata);
```