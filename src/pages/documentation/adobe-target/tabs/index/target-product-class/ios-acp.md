#### Swift

**Syntax**

```swift
public convenience init(id productId: String, categoryId: String?)
```

**Example**

```swift
let product = ACPTargetProduct(id: "24D334", categoryId: "Stationary")
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull instancetype) targetProductWithId: (nonnull NSString*) productId categoryId: (nullable NSString*) categoryId;
```

**Example**

```objectivec
ACPTargetProduct *product = [ACPTargetProduct targetProductWithId:@"24D334" categoryId:@"Stationary"];
```