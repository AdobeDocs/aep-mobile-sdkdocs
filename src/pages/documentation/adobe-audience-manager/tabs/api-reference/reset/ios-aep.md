This API resets the Audience Manager UUID and purges the current visitor profile from `UserDefaults`. The Audience reset also clears the current in-memory DPID and DPUUID variables.

#### Swift

**Syntax**

```swift
static func reset()
```

**Example**

```swift
Audience.reset()
```

#### Objective-C

**Example**

```text
[AEPMobileAudience reset];
```