#### Swift

**Syntax**

```swift
func updateCurrentPlayhead(time: Double)
```

**Example**

```swift
tracker.updateCurrentPlayhead(1);
```

**Live streaming example**

```swift
let secondsSince1970: TimeInterval = (Date().timeIntervalSince1970)
let timeFromMidnightInSecond = secondsSince1970.truncatingRemainder(dividingBy: 86400)

tracker.updateCurrentPlayhead(time: timeFromMidnightInSecond)
```

#### Objective-C

**Example**

```objc
[_tracker updateCurrentPlayhead:1];
```