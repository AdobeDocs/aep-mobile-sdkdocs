#### Swift

**Syntax**

```objc
+ (void) setLinkageFields: (nonnull NSDictionary<NSString*, NSString*>*) linkageFields;
```

**Example**

```swift
ACPCampaign.setLinkageFields(["cusFirstName": "John", "cusLastName": "Doe", "cusEmail": "john.doe@email.com"])
```

#### Objective-C

**Example**

```objc
[ACPCampaign setLinkageFields:@{@"cusFirstName" : @"John", @"cusLastName": @"Doe", @"cusEmail": @"john.doe@email.com"}];
```