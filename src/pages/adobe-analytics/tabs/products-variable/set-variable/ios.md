#### Objective-C

**Syntax**

```objectivec
[contextData setObject:@"Category;Product;Quantity;Price[,Category;Product;Quantity;Price]" forKey:@"&&products"];
```

**Example**

```objectivec
//create a context data dictionary
NSMutableDictionary *contextData = [NSMutableDictionary dictionary];

// add products, a purchase id, a purchase context data key, and any other data you want to collect.
// Note the special syntax for products
[contextData setObject:@";Running Shoes;1;69.95,;Running Socks;10;29.99" forKey:@"&&products"];
[contextData setObject:@"1234567890" forKey:@"m.purchaseid"];
[contextData setObject:@"1" forKey:@"m.purchase"];

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
[ACPCore trackAction:@"purchase" data:contextData];
// trackState example:
[ACPCore trackState:@"Order Confirmation" data:contextData];
```

#### Swift

**Syntax**

```swift
contextData["&&products"] = "Category;Product;Quantity;Price[,Category;Product;Quantity;Price]"
```

**Example**

```swift
//create a context data dictionary
var contextData:[String:String]=[:] 

// add products, a purchase id, a purchase context data key, and any other data you want to collect.
// Note the special syntax for products
contextData["&&products"] = ";Running Shoes;1;69.95,;Running Socks;10;29.99"
contextData["m.purchaseid"] = "1234567890"
contextData["m.purchase"] = "1"

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
ACPCore.trackAction("purchase", data: contextData)
// trackState example:
ACPCore.trackState("Order Confirmation", data: contextData)
```