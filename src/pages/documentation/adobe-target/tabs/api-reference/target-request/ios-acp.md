#### ACPTargetRequestObject

This class extends `ACPTargetPrefetchObject` by adding default content and a callback block that will be invoked to return mbox content from Target.

#### Objective-C

**Syntax**

```objc
@interface ACPTargetRequestObject : ACPTargetPrefetchObject

/* The default content that will be returned if Target servers are unreachable */   
@property(nonatomic, strong, nonnull) NSString* defaultContent;

/* Optional. When batch requesting Target locations, callback will be invoked when content is available for this location. */
@property(nonatomic, strong, nullable) void (^callback)(NSString* __nullable content);
@end
```

**Example**

The following method can be used to create an instance of ACPTargetRequestObject that might be used to make a batch request to the configured Target server to fetch content for mbox locations.

```objc
+ (nonnull instancetype) targetRequestObjectWithName: (nonnull NSString*) name
                                    targetParameters: (nullable ACPTargetParameters*) targetParameters
                                      defaultContent: (nonnull NSString*) defaultContent
                                            callback: (nullable void (^) (NSString* __nullable content)) callback;
```