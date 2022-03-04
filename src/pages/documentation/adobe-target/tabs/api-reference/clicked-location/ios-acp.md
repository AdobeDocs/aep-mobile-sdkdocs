#### Objective-C

**Syntax**

```objc
+ (void) locationClickedWithName: (nonnull NSString*) name targetParameters: (nullable ACPTargetParameters*) parameters;
```

* _name_ is an NSString that contains the mbox location for which the click notification will be sent to Target.
* _parameters_ is the configured `ACPTargetParameters` for the request.

**Example**

```objc
// Mbox parameters
NSDictionary *mboxParameters = @{@"membership":@"prime"};

// Product parameters
NSDictionary *productParameters = @{@"id":@"CEDFJC",
                                    @"categoryId":@"Electronics"};
// Order parameters
NSDictionary *orderParameters = @{@"id":@"NJJICK",
                                    @"total":@"650",
                                    @"purchasedProductIds":@"81, 123, 190"};

// Profile parameters
NSDictionary *profileParameters = @{@"ageGroup":@"20-32"};

// Create Target parameters
ACPTargetProduct *product = [ACPTargetProduct targetProductWithId:@"24D334" categoryId:@"Stationary"];
ACPTargetOrder *order = [ACPTargetOrder targetOrderWithId:@"ADCKKBC" total:@(400.50) purchasedProductIds:@[@"34", @"125"]];
ACPTargetParameters *targetParameters = [ACPTargetParameters targetParametersWithParameters:nil
                                                    profileParameters:nil
                                                              product:product
                                                                order:order];

[ACPTarget locationClickedWithName:@"cartLocation" targetParameters:targetParameters];
```

#### Swift

**Example**

```swift
// Mbox parameters
let mboxParameters = [
"membership": "prime"
]

// Product parameters
let productParameters = [
"id": "CEDFJC",
"categoryId": "Electronics"
]

// Order parameters
let orderParameters = [
"id": "NJJICK",
"total": "650",
"purchasedProductIds": "81, 123, 190"
]

// Profile parameters
let profileParameters = [
"ageGroup": "20-32"
]

// Create Target parameters
let product = ACPTargetProduct(id: "24D334", categoryId: "Stationary")
let order = ACPTargetOrder(id: "ADCKKBC", total: NSNumber(value: 400.50), purchasedProductIds: ["34", "125"])
let targetParameters = ACPTargetParameters(parameters: nil, profileParameters: nil, product: product, order: order)

ACPTarget.locationClicked(withName: "cartLocation", targetParameters: targetParameters)
```