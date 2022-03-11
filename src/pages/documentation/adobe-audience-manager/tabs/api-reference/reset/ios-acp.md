The `reset` API resets the Audience Manager UUID and purges the current visitor profile from `UserDefaults`. The Audience reset also clears the current in-memory DPID and DPUUID variables.

#### Objective-C

**Syntax**

```text
+ (void) reset;
```

**Example**

```text
[ACPAudience reset];
```

#### Swift

**Syntax**

```objectivec
+ (void) reset;
```

**Example**

```swift
ACPAudience.reset()
```