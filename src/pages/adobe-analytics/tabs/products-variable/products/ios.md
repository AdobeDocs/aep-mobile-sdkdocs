#### Objective-C

**Example**

```objectivec
//create a context data dictionary 
NSMutableDictionary *contextData = [NSMutableDictionary dictionary]; 

// add products, a purchase id, a purchase context data key, and any other data you want to collect. 
// Note the special syntax for products 
[contextData setObject:@"event1" forKey:@"&&events"]; 
[contextData setObject:@";Running Shoes;1;69.95;event1=5.5;eVar1=Merchandising,;Running Socks;10;29.99" forKey:@"&&products"]; 
[contextData setObject:@"1234567890" forKey:@"m.purchaseid"]; 
[contextData setObject:@"1" forKey:@"m.purchase"]; 

// send the tracking call - use either a trackAction or trackState call. 
// trackAction example: 
[ACPCore trackAction:@"purchase" data:contextData]; 
// trackState example: 
[ACPCore trackState:@"Order Confirmation" data:contextData];
```

#### Swift

**Example**

```swift
//create a context data dictionary
var contextData:[String:String]=[:] 

// add products, a purchase id, a purchase context data key, and any other data you want to collect.
// Note the special syntax for products
contextData["&&events"] = "event1"
contextData["&&products"] = ";Running Shoes;1;69.95,;event1=5.5;eVar1=Merchandising,;Running Socks;10;29.99"
contextData["m.purchaseid"] = "1234567890"
contextData["m.purchase"] = "1"

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
ACPCore.trackAction("purchase", data: contextData)
// trackState example:
ACPCore.trackState("Order Confirmation", data: contextData)
```