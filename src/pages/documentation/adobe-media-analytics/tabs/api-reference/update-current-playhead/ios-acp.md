#### Objective-C

**Syntax**

```objc
- (void) updateCurrentPlayhead: (double) time;
```

**Example**

```objc
[_tracker updateCurrentPlayhead:1];
```

**Live streaming example**

```objc
double secondsSince1970 = [[NSDate date] timeIntervalSince1970];
double timeFromMidnightInSecond = fmod(secondsSince1970 , 86400);

[_tracker updateCurrentPlayhead: timeFromMidnightInSecond];
```

#### Swift

**Example**

```swift
_tracker.updateCurrentPlayhead(1)
```