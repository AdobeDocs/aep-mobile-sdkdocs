#### Swift

**Syntax**

```swift
static func retrieveLocationContent(_ requestArray: [TargetRequest], with targetParameters: TargetParameters? = nil)
```

* _requestArray_ - an array of `TargetRequest` objects to retrieve content
* _targetParameters_ - a `TargetParameters` object containing parameters for all locations in the requests array

**Example**

```swift
let TargetParameters1 = TargetParameters(
    parameters: ["status": "platinum"],
    profileParameters: ["age": "20"],
    order: TargetOrder(id: "ADCKKIM", total: 344.30, purchasedProductIds: ["34", "125"]),
    product: TargetProduct(productId: "24D3412", categoryId: "Books")
)

let TargetParameters2 = TargetParameters(
    parameters: ["userType": "Paid"],
    profileParameters: nil,
    order: TargetOrder(id: "ADCKKIM", total: 344.30, purchasedProductIds: ["id1", "id2"]),
    product: TargetProduct(productId: "764334", categoryId: "Online")
)

let globalTargetParameters = TargetParameters(
    parameters: ["status": "progressive"],
    profileParameters: ["age": "20-32"],
    order: TargetOrder(id: "ADCKKBC", total: 400.50, purchasedProductIds: ["34", "125"]),
    product: TargetProduct(productId: "24D334", categoryId: "Stationary")
)

let request1 = TargetRequest(mboxName: "logo", defaultContent: "BlueWhale", targetParameters: TargetParameters1) { content in
    if let content = content {
        // do something with the target content.
    }
}
let request2 = TargetRequest(mboxName: "logo", defaultContent: "red", targetParameters: TargetParameters2) { content, data in
        if let content = content {
        // do something with the target content.
    }

    // Read the data dictionary containing one or more of response tokens, analytics payload and click-tracking analytics payload, if available.
    if let data = data {
        let responseTokens = data["responseTokens"] as? [String: String] ?? [:]

        let analyticsPayload = data["analytics.payload"] as? [String: String] ?? [:]

        let clickMetricAnalyticsPayload = data["clickmetric.analytics.payload"] as? [String: String] ?? [:]
        ...
    }
}
Target.retrieveLocationContent([request1, request2], with: globalTargetParameters)
```

#### Objective-C

**Example**

```objc
NSDictionary *mboxParameters1 = @{@"status":@"platinum"};
NSDictionary *profileParameters1 = @{@"age":@"20"};
AEPTargetProduct *product1 = [[AEPTargetProduct alloc] initWithProductId:@"24D3412" categoryId:@"Books"];
AEPTargetOrder *order1 = [[AEPTargetOrder alloc] initWithId:@"ADCKKIM" total:[@(344.30) doubleValue] purchasedProductIds:@[@"34", @"125"]];

AEPTargetParameters *targetParameters1 = [[AEPTargetParameters alloc] initWithParameters:mboxParameters1 profileParameters:profileParameters1 order:order1 product:product1 ];

NSDictionary *mboxParameters2 = @{@"userType":@"Paid"};
AEPTargetProduct *product2 = [[AEPTargetProduct alloc] initWithProductId:@"764334" categoryId:@"Online"];
AEPTargetOrder *order2 = [[AEPTargetOrder alloc] initWithId:@"ADCKKIM" total:[@(344.30) doubleValue] purchasedProductIds:@[@"id1",@"id2"]];
AEPTargetParameters *targetParameters2 = [[AEPTargetParameters alloc] initWithParameters:mboxParameters2 profileParameters:nil order:order2 product:product2 ];

AEPTargetRequestObject *request1 = [[AEPTargetRequestObject alloc] initWithMboxName: @"logo" defaultContent: @"BlueWhale" targetParameters: targetParameters1 contentCallback:^(NSString * _Nullable content) {
    // do something with the received content
    NSString *targetContent = content ?: @"";
}];
AEPTargetRequestObject *request2 = [[AEPTargetRequestObject alloc] initWithMboxName: @"logo" defaultContent: @"red" targetParameters: targetParameters2 contentWithDataCallback:^(NSString * _Nullable content, NSDictionary<NSString *,id> * _Nullable data) {
    // do something with the target content.
    NSString *targetContent = content ?: @"";

    // Read the data dictionary containing one or more of response tokens, analytics payload and click-tracking analytics payload, if available.      
    if ([data count] > 0) {
        if ([data objectForKey:@"responseTokens"]) {
            // read response tokens
        }

        if ([data objectForKey:@"analytics.payload"]) {
          // read analytics payload
        }

        if ([data objectForKey:@"clickmetric.analytics.payload"]) {
          // read click-tracking analytics payload
        }
    }   
}];

// Create request object array
NSArray *requestArray = @[request1,request2];

// Creating Target parameters
NSDictionary *mboxParameters = @{@"status":@"progressive"};
NSDictionary *profileParameters = @{@"age":@"20-32"};
AEPTargetProduct *product = [[AEPTargetProduct alloc] initWithProductId:@"24D334" categoryId:@"Stationary"];
AEPTargetOrder *order = [[AEPTargetOrder alloc] initWithId:@"ADCKKBC" total:[@(400.50) doubleValue] purchasedProductIds:@[@"34", @"125"]];

AEPTargetParameters *targetParameters = [[AEPTargetParameters alloc] initWithParameters:mboxParameters
                                                                      profileParameters:profileParameters
                                                                                  order:order
                                                                                product:product];
[AEPMobileTarget retrieveLocationContent: requestArray withParameters: targetParameters];
```