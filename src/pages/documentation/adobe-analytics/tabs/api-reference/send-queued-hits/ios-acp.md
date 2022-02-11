#### Objective-C

<InlineAlert variant="warning" slots="text"/>

Use caution when manually clearing the queue. This operation cannot be reverted.

**Syntax**

```objc
+ (void) sendQueuedHits;
```

**Example**

```objc
[ACPAnalytics sendQueuedHits];
```

#### Swift

**Example**

```swift
ACPAnalytics.sendQueuedHits()
```