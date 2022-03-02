#### loadRequests

Sends a batch request to your configured Target server for multiple mbox locations that are specified in the`ACPTargetRequestObject` array. Each object in the array contains a callback function, which will be invoked when content is available for its given mbox location.

**Syntax**

```objectivec
+ (void) loadRequests: (nonnull NSArray<ACPTargetRequestObject*>*) requests
withProfileParameters: (nullable NSDictionary<NSString*, NSString*>*) profileParameters;
```

**Example**

```objectivec
NSDictionary *mboxParameters1 = @{@"status":@"platinum"};
NSDictionary *productParameters1 = @{@"id":@"24D3412",
                                        @"categoryId":@"Books"};
NSDictionary *orderParameters1 = @{@"id":@"ADCKKIM",
                                      @"total":@"344.30",
                                      @"purchasedProductIds":@"34, 125, 99"};

NSDictionary *mboxParameters2 = @{@"userType":@"Paid"};
NSDictionary *productParameters2 = @{@"id":@"764334",
                                         @"categoryId":@"Online"};
NSArray *purchaseIDs = @[@"id1",@"id2"];
NSDictionary *orderParameters2 = @{@"id":@"4t4uxksa",
                                       @"total":@"54.90",
                                       @"purchasedProductIds":purchaseIDs};

ACPTargetRequestObject *request1 = [ACPTargetRequestObject requestObjectWithName:@"logo" defaultContent:@"BlueWhale" mboxParameters:mboxParameters1 callback:^(NSString *content){
        // do something with the received content
  }];
request1.productParameters = productParameters1;
request1.orderParameters = orderParameters1;


ACPTargetRequestObject *request2 = [ACPTargetRequestObject requestObjectWithName:@"buttonColor" defaultContent:@"red" mboxParameters:mboxParameters2 callback:^(NSString *content){
        // do something with the received content
}];
request2.productParameters = productParameters1;
request2.orderParameters = orderParameters1;

// create request object array
NSArray *requestArray = @[request1,request2];

// Creating Profile parameters
NSDictionary *profileParameters = @{@"age":@"20-32"};

// Call the API
[ACPTarget loadRequests:requestArray withProfileParameters:profileParameters];
```