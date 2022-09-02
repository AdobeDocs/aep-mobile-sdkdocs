#### Swift

```swift
var xdmData : [String: Any] = [:]
xdmData["eventType"] = "MyFirstXDMExperienceEvent"
xdmData[_yourTenantId] = ["productSku": "demo123",
                          "rating": 5,
                          "reviewText": "I love this demo!",
                          "reviewerId": "Anonymous user"]
let experienceEvent = ExperienceEvent(xdm: xdmData)
```

#### Objective-C

```objc
NSDictionary<NSString*, NSObject*>* xdmData;
[xdmData setValue:@"MyFirstXDMExperienceEvent" forKey:@"eventType"];
[xdmData setValue:@{@"productSku": @"demo123",
                    @"rating": @5,
                    @"reviewText": @"I love this demo!",
                    @"reviewerId": @"Anonymous user"}
                      forKey:_yourTenantId];
AEPExperienceEvent *experienceEvent = [[AEPExperienceEvent alloc] initWithXdm:xdmData data:nil datasetIdentifier:nil];
```