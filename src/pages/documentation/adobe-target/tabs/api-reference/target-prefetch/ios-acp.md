#### ACPTargetPrefetchObject

This class contains the name of the Target location/mbox and target parameters to be used in a prefetch request.

#### Objective-C

**Syntax**

```objc
@interface ACPTargetPrefetchObject : NSObject

/* The name of the Target location/mbox */
@property(nonatomic, strong, nullable) NSString* name;

/* Target parameters associated with the prefetch object. You can set all other parameters in this object */
@property(nonatomic, strong, nullable) ACPTargetParameters* targetParameters;
@end
```

**Example**

The following method can be used to create an instance of ACPTargetPrefetchObject that might be used to make a prefetch request to the configured Target server to prefetch content for mbox locations.

```objc
+ (nonnull instancetype) targetPrefetchObjectWithName: (nonnull NSString*) name
                                     targetParameters: (nullable ACPTargetParameters*) targetParameters;
```