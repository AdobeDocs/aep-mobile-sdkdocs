#### Objective-C

**Syntax**

```objc
+ (void) retrieveLocationContent: (nonnull NSArray<ACPTargetRequestObject*>*) requests
                  withParameters: (nullable ACPTargetParameters*) parameters;
```

* _requests_ is an NSArray of `ACPTargetRequestObject` objects for various mbox locations.
* _parameters_ is the configured `ACPTargetParameters` for the load request.

**Example**

```objc
NSDictionary *mboxParameters1 = @{@"status":@"platinum"};
ACPTargetProduct *product1 = [ACPTargetProduct targetProductWithId:@"24D3412" categoryId:@"Books"];
ACPTargetOrder *order1 = [ACPTargetOrder targetOrderWithId:@"ADCKKIM" total:@(344.30) purchasedProductIds:@[@"a", @"b"]];

NSDictionary *mboxParameters2 = @{@"userType":@"Paid"};
ACPTargetProduct *product2 = [ACPTargetProduct targetProductWithId:@"764334" categoryId:@"Online"];
ACPTargetOrder *order2 = [ACPTargetOrder targetOrderWithId:@"4t4uxksa" total:@(54.90) purchasedProductIds:@[@"id1",@"id2"]];

ACPTargetParameters *params1 = [ACPTargetParameters targetParametersWithParameters:mboxParameters1
                                                    profileParameters:nil
                                                              product:product1
                                                                order:order1];
ACPTargetRequestObject *request1 = [ACPTargetRequestObject targetRequestObjectWithName:@"logo" targetParameters:params1
defaultContent:@"BlueWhale" callback:^(NSString * _Nullable content) {
    // do something with the received content
  }];

ACPTargetParameters *params2 = [ACPTargetParameters targetParametersWithParameters:mboxParameters2
                                                    profileParameters:nil
                                                              product:product2
                                                                order:order2];
ACPTargetRequestObject *request2 = [ACPTargetRequestObject targetRequestObjectWithName:@"logo" targetParameters:params2
defaultContent:@"red" callback:^(NSString * _Nullable content) {
    // do something with the received content
  }];

// Create request object array
NSArray *requestArray = @[request1,request2];

// Creating Target parameters
NSDictionary *mboxParameters = @{@"status":@"progressive"};
NSDictionary *profileParameters = @{@"age":@"20-32"};
ACPTargetProduct *product = [ACPTargetProduct targetProductWithId:@"24D334" categoryId:@"Stationary"];
ACPTargetOrder *order = [ACPTargetOrder targetOrderWithId:@"ADCKKBC" total:@(400.50) purchasedProductIds:@[@"34", @"125"]];

ACPTargetParameters *targetParameters = [ACPTargetParameters targetParametersWithParameters:mboxParameters
                                                    profileParameters:profileParameters
                                                              product:product
                                                                order:order];
// Call the API
[ACPTarget retrieveLocationContent:requestArray withParameters:targetParameters];
```

#### Swift

**Example**

```swift
let mboxParameters1 = [
"status": "platinum"
]
let product1 = ACPTargetProduct(id: "24D3412", categoryId: "Books")
let order1 = ACPTargetOrder(id: "ADCKKIM", total: NSNumber(value: 344.30), purchasedProductIds: ["a", "b"])

let mboxParameters2 = [
"userType": "Paid"
]
let product2 = ACPTargetProduct(id: "764334", categoryId: "Online")
let order2 = ACPTargetOrder(id: "4t4uxksa", total: NSNumber(value: 54.90), purchasedProductIds: ["id1", "id2"])

let params1 = ACPTargetParameters(parameters: mboxParameters1, profileParameters: nil, product: product1, order: order1)
let request1 = ACPTargetRequestObject(name: "logo", targetParameters: params1, defaultContent: "BlueWhale", callback: { content in
// do something with the received content
})

let params2 = ACPTargetParameters(parameters: mboxParameters2, profileParameters: nil, product: product2, order: order2)
let request2 = ACPTargetRequestObject(name: "logo", targetParameters: params2, defaultContent: "red", callback: { content in
// do something with the received content
})

// Create request object array
let requestArray = [request1, request2]

// Creating Target parameters
let mboxParameters = [
"status": "progressive"
]
let profileParameters = [
"age": "20-32"
]
let product = ACPTargetProduct(id: "24D334", categoryId: "Stationary")
let order = ACPTargetOrder(id: "ADCKKBC", total: NSNumber(value: 400.50), purchasedProductIds: ["34", "125"])

let targetParameters = ACPTargetParameters(parameters: mboxParameters, profileParameters: profileParameters, product: product, order: order)

// Call the API
ACPTarget.retrieveLocationContent(requestArray, with: targetParameters)
```