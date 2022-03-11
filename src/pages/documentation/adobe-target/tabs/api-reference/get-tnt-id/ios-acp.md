#### Objective-C

**Syntax**

```objc
+ (void) getTntId: (nonnull void (^) (NSString* __nullable tntId)) callback;
```

* _callback_ is invoked with the `tntId` value. If no Target ID was set, this value will be `nil`.

**Example**

```objc
[ACPTarget getTntId:^(NSString *tntId){
       // read target's tntId
}];
```

#### Swift

**Example**

```swift
ACPTarget.getTntId({tntId in
       // read target's tntId
})
```