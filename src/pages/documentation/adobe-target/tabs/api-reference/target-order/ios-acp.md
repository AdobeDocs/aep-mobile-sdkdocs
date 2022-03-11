#### ACPTargetOrder

This class contains orderId, total, and an array for purchasedProductIds.

#### Objective-C

**Syntax**

```objc
@interface ACPTargetOrder : NSObject

/* Order ID */
@property(nonatomic, strong, nonnull) NSString* orderId;

/* Order total */
@property(nonatomic, strong, nullable) NSNumber* total;

/* Array of Purchased Product Ids */
@property(nonatomic, strong, nullable) NSArray<NSString*>* purchasedProductIds;
@end
```

Examples for creating instances of ACPTargetOrder can be seen in the [Target overview](../../../index.md#target-order-class)