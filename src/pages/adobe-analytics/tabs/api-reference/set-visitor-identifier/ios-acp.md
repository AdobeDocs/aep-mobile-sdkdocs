### setVisitorIdentifier

**Syntax**

```text
+ (void) setVisitorIdentifier: (nonnull NSString*) visitorIdentifier;
```

* _visitorIdentifier_ is the new value for the visitor identifier.

**Example**

Here are examples in Objective-C and Swift:

**Objective-C**

```text
[ACPAnalytics setVisitorIdentifier:@"custom_identifier"];
```

**Swift**

```swift
ACPAnalytics.setVisitorIdentifier("custom_identifier")
```