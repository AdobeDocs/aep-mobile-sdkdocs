#### Swift

**Syntax**

```swift
public convenience init(parameters: [AnyHashable: Any]?, profileParameters: [AnyHashable: Any]?, order: ACPTargetOrder?, product: ACPTargetProduct?)
```

**Example**

```swift
let mboxParameters = [
"status": "Platinum"
]
let profileParameters = [
"gender": "female"
]

let product = ACPTargetProduct(id: "24D334", categoryId: "Stationary")

let order = ACPTargetOrder(id: "ADCKKBC", total: NSNumber(value: 400.50), purchasedProductIds: ["34", "125"])

let targetParameters = ACPTargetParameters(parameters: mboxParameters, profileParameters: profileParameters, product: product, order: order)
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull instancetype) targetParametersWithParameters: (nullable NSDictionary*) targetParameters profileParameters: (nullable NSDictionary*) profileParameters product: (nullable ACPTargetProduct*) product order: (nullable ACPTargetOrder*) order;
```

**Example**

```objectivec
NSDictionary *mboxParameters = @{@"status":@"Platinum"};
NSDictionary *profileParameters = @{@"gender":@"female"};

ACPTargetProduct *product = [ACPTargetProduct targetProductWithId:@"24D334" categoryId:@"Stationary"];

ACPTargetOrder *order = [ACPTargetOrder targetOrderWithId:@"ADCKKBC" total:@(400.50) purchasedProductIds:@[@"34", @"125"]];

ACPTargetParameters *targetParameters = [ACPTargetParameters targetParametersWithParameters:mboxParameters
profileParameters:profileParameters
product:product
order:order];
```