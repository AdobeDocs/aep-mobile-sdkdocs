<Variant platform="ios" extension="edge" version="3" repeat="2"/>

#### Swift

```swift
import AEPEdge
let date = Date()
let formattedDate = XDMFormatters.dateToFullDateString(date)
let formattedDateWithMs = XDMFormatters.dateToISO8601String(date)
```

<Variant platform="ios" extension="edge" version="4" repeat="2"/>

#### Swift

```swift
import AEPServices
let date = Date()
let formattedDate = date.getISO8601FullDate()
let formattedDateWithMs = date.getISO8601UTCDateWithMilliseconds()
```
