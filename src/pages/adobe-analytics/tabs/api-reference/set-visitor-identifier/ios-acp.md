#### Objective-C

**Syntax**

```objc
+ (void) setVisitorIdentifier: (nonnull NSString*) visitorIdentifier;
```

* _visitorIdentifier_ is the new value for the visitor identifier.

**Example**

```objc
[ACPAnalytics setVisitorIdentifier:@"custom_identifier"];
```

#### Swift

**Example**

```swift
ACPAnalytics.setVisitorIdentifier("custom_identifier")
```