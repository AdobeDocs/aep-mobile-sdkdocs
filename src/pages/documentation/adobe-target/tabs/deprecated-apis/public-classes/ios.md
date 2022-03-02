#### ACPTargetRequestObject

This class extends `ACPTargetPrefetchObject` by adding default content and a function pointer property that will be used as a callback when requesting content from Target:

```objectivec
@interface ACPTargetRequestObject : ACPTargetPrefetchObject

///< The default content that will be returned if Target servers are unreachable
@property(nonatomic, strong, nonnull) NSString* defaultContent;

///< Optional. When batch requesting Target locations, callback will be invoked when content is available for this location.
@property(nonatomic, strong, nullable) void (^callback)(NSString* __nullable content);
@end
```

The following method can be used to create an instance of a Target prefetch object that might be used to make a batch request to the configured Target server to prefetch content for mbox locations:

```objc
+ (nonnull instancetype) requestObjectWithName: (nonnull NSString*) name
                                defaultContent: (nonnull NSString*) defaultContent
                                mboxParameters: (nullable NSDictionary<NSString*, NSString*>*) mboxParameters
                                      callback: (nullable void (^) (NSString* __nullable content)) callback;
```

#### ACPTargetPrefetchObject

This class contains the name of the Target location/mbox and parameter dictionary for mbox parameters, product parameters, and order parameters that will be used in a prefetch:

```objectivec
@interface ACPTargetPrefetchObject : NSObject

///< The name of the Target location/mbox
@property(nonatomic, strong, nullable) NSString* name;

///< Dictionary containing key-value pairs of mbox parameters
@property(nonatomic, strong, nullable) NSDictionary<NSString*, NSString*>* mboxParameters;

///< Dictionary containing key-value pairs of product parameters
@property(nonatomic, strong, nullable) NSDictionary<NSString*, NSString*>* productParameters;

///< Dictionary containing key-value pairs of order parameters
@property(nonatomic, strong, nullable) NSDictionary* orderParameters;
@end
```

The following method can be used to create an instance of a Target prefetch object that might be used to make a batch request to the configured Target server to prefetch content for mbox locations:

```objc
+ (nonnull instancetype) prefetchObjectWithName: (nonnull NSString*) name
                                 mboxParameters: (nullable NSDictionary*) mboxParameters;
```