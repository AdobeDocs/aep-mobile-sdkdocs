#### Swift

**Syntax**
```swift
public init(productId: String, categoryId: String? = nil)
```

**Example**

```swift
let product = TargetProduct(productId: "pId1", categoryId: "cId1")
```

#### Objective-C

**Syntax**
```objectivec
- (nonnull instancetype) initWithProductId:(nonnull NSString*) productId categoryId:(nullable NSString*) categoryId;
```

**Example**

```objectivec
AEPTargetProduct *product =[[AEPTargetProduct alloc] initWithProductId:@"pId1" categoryId:@"cId1"];
```