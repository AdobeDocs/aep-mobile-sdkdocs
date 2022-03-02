If a notification is sent for a prefetched mbox, its contents should already have been requested with `loadRequests`, which indicates that the mbox was viewed.

#### Objective-C

**Syntax**

```objectivec
+ (void) locationClickedWithName: (nonnull NSString*) name
                  mboxParameters: (nullable NSDictionary<NSString*, NSString*>*) mboxParameters
               productParameters: (nullable NSDictionary<NSString*, NSString*>*) productParameters
                 orderParameters: (nullable NSDictionary*) orderParameters
               profileParameters: (nullable NSDictionary<NSString*, NSString*>*) profileParameters;
```

**Example**

```objectivec
// Define Mbox parameters
NSDictionary *mboxParameters = @{@"membership":@"prime"};

// Define Product parameters
NSDictionary *productParameters = @{@"id":@"CEDFJC",
                                    @"categoryId":@"Electronics"};
// Define Order parameters
NSDictionary *orderParameters = @{@"id":@"NJJICK",
                                  @"total":@"650",
                                  @"purchasedProductIds":@"81, 123, 190"};

// Define Profile parameters
NSDictionary *profileParameters = @{@"ageGroup":@"20-32"};

[ACPTarget locationClickedWithName:@"cartLocation"
                    mboxParameters:mboxParameters
                 productParameters:productParameters
                   orderParameters:orderParameters
                 profileParameters:profileParameters];
```