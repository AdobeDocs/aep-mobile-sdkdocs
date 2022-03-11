#### Objective-C

**Syntax**

```objectivec
+ (nonnull instancetype) targetOrderWithId: (nonnull NSString*) orderId total: (nullable NSNumber*) total purchasedProductIds: (nullable NSArray <NSString*>*)  purchasedProductIds;
```

**Example**

```objectivec
ACPTargetOrder *order = [ACPTargetOrder targetOrderWithId:@"ADCKKBC" total:@(400.50) purchasedProductIds:@[@"34", @"125"]];
```

#### Swift

**Syntax**
```swift
public convenience init(id orderId: String, total: NSNumber?, purchasedProductIds: [String]?)
```

**Example**

```swift
let order = ACPTargetOrder(id: "ADCKKBC", total: NSNumber(value: 400.50), purchasedProductIds: ["34", "125"])
```