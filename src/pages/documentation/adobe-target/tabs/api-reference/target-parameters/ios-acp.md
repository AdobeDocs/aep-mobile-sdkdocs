#### ACPTargetParameters

This class contains mbox parameters dictionary, profile parameters dictionary, ACPTargetOrder object as well as ACPTargetProduct object.

#### Objective-C

**Syntax**

```objc
@interface ACPTargetParameters : NSObject

/* Dictionary containing key-value pairs of parameters */
@property(nonatomic, strong, nullable) NSDictionary<NSString*, NSString*>* parameters;

/* Dictionary containing key-value pairs of profile parameters */
@property(nonatomic, strong, nullable) NSDictionary<NSString*, NSString*>* profileParameters;

/* ACPTargetOrder object */
@property(nonatomic, strong, nullable) ACPTargetOrder* order;

/* ACPTargetProduct object */
@property(nonatomic, strong, nullable) ACPTargetProduct* product;
@end
```

Examples for creating instances of ACPTargetParameters can be seen in the [Target overview](../../../index.md#target-parameters)
