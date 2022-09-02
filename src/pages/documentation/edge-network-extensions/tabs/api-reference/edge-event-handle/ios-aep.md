#### Swift

```swift
@objc(AEPEdgeEventHandle)
public class EdgeEventHandle: NSObject, Codable {
    /// Payload type
    @objc public let type: String?

    /// Event payload values
    @objc public let payload: [[String: Any]]?
}
```