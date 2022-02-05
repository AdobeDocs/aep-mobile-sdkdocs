### sendQueuedHits

This method forces the library to send all hits in the offline queue, regardless of how many hits are currently queued.

<InlineAlert variant="warning" slots="text"/>
Use caution when manually clearing the queue. This operation cannot be reverted.


**Syntax**

```text
+ (void) sendQueuedHits;
```

**Example**

**Objective-C**

```text
[ACPAnalytics sendQueuedHits];
```

**Swift**

```swift
ACPAnalytics.sendQueuedHits()
```