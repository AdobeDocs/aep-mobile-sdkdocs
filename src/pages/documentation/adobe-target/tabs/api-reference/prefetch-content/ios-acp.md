#### Objective-C

**Syntax**

```objc
+ (void) prefetchContent: (nonnull NSArray<ACPTargetPrefetchObject*>*) prefetchObjectArray
          withParameters: (nullable ACPTargetParameters*) parameters
                callback: (nullable void (^) (NSError* _Nullable error)) callback;
```

**Example**

```objc
NSDictionary *mboxParameters1 = @{@"status":@"platinum"};
NSDictionary *profileParameters1 = @{@"age":@"20"};
ACPTargetProduct *product1 = [ACPTargetProduct targetProductWithId:@"24D3412" categoryId:@"Books"];
ACPTargetOrder *order1 = [ACPTargetOrder targetOrderWithId:@"ADCKKIM" total:@(344.30) purchasedProductIds:@[@"34", @"125"]];

ACPTargetParameters *targetParameters1 = [ACPTargetParameters targetParametersWithParameters:mboxParameters1
profileParameters:profileParameters1
product:product1
order:order1];

NSDictionary *mboxParameters2 = @{@"userType":@"Paid"};
ACPTargetProduct *product2 = [ACPTargetProduct targetProductWithId:@"764334" categoryId:@"Online"];
ACPTargetOrder *order2 = [ACPTargetOrder targetOrderWithId:@"ADCKKIM" total:@(344.30) purchasedProductIds:@[@"id1",@"id2"]];

ACPTargetParameters *targetParameters2 = [ACPTargetParameters targetParametersWithParameters:mboxParameters2
profileParameters:nil
product:product2
order:order2];

// Creating Prefetch Objects
ACPTargetPrefetchObject *prefetch1 = [ACPTargetPrefetchObject targetPrefetchObjectWithName:@"logo"
targetParameters:targetParameters1];

ACPTargetPrefetchObject *prefetch2 = [ACPTargetPrefetchObject targetPrefetchObjectWithName:@"buttonColor"
targetParameters:targetParameters2];

// Creating prefetch Array
NSArray *prefetchArray = @[prefetch1,prefetch2];

// Creating Target parameters
NSDictionary *mboxParameters = @{@"status":@"progressive"};
NSDictionary *profileParameters = @{@"age":@"20-32"};
ACPTargetProduct *product = [ACPTargetProduct targetProductWithId:@"24D334" categoryId:@"Stationary"];
ACPTargetOrder *order = [ACPTargetOrder targetOrderWithId:@"ADCKKBC" total:@(400.50) purchasedProductIds:@[@"34", @"125"]];

ACPTargetParameters *targetParameters = [ACPTargetParameters targetParametersWithParameters:mboxParameters
profileParameters:profileParameters
product:product
order:order];

// Target API Call
[ACPTarget prefetchContent:prefetchArray withParameters:targetParameters callback:^(NSError * _Nullable error){
// do something with the callback response
}];
```

#### Swift

**Example**

```swift
let mboxParameters1 = [
"status": "platinum"
]
let profileParameters1 = [
"age": "20"
]
let product1 = ACPTargetProduct(id: "24D3412", categoryId: "Books")
let order1 = ACPTargetOrder(id: "ADCKKIM", total: NSNumber(value: 344.30), purchasedProductIds: ["34", "125"])

let targetParameters1 = ACPTargetParameters(parameters: mboxParameters1, profileParameters: profileParameters1, product: product1, order: order1)

let mboxParameters2 = [
"userType": "Paid"
]
let product2 = ACPTargetProduct(id: "764334", categoryId: "Online")
let order2 = ACPTargetOrder(id: "ADCKKIM", total: NSNumber(value: 344.30), purchasedProductIds: ["id1", "id2"])

let targetParameters2 = ACPTargetParameters(parameters: mboxParameters2, profileParameters: nil, product: product2, order: order2)

// Creating Prefetch Objects
let prefetch1 = ACPTargetPrefetchObject(name: "logo", targetParameters: targetParameters1)

let prefetch2 = ACPTargetPrefetchObject(name: "buttonColor", targetParameters: targetParameters2)

// Creating prefetch Array
let prefetchArray = [prefetch1, prefetch2]

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

// Target API Call
ACPTarget.prefetchContent(prefetchArray, with: targetParameters, callback: { error in
// do something with the callback response
})
```