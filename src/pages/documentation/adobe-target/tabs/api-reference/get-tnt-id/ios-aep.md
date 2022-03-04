#### Swift

**Syntax**

```swift
static func getTntId(_ completion: @escaping (String?, Error?) -> Void)
```

* _completion_ : invoked with the `tntId` value. If no Target ID was set, this value will be `nil`.

**Example**

```swift
Target.getTntId({ (id, err) in
    // read target's tntId        
})
```

#### Objective-C

**Example**

```objc
[AEPMobileTarget getTntId:^(NSString *tntID, NSError *error){
    // read target's tntId 
}];
```