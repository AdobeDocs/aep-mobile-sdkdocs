#### TargetParameters

This class may optionally contain the mbox parameters dictionary, the profile parameters dictionary, the TargetOrder object, as well as the TargetProduct object.

#### Swift

**Syntax**

```swift
/// Target parameter class, used for specifying custom parameters to be sent in Target requests,
/// such as location (former mbox) parameters, profile parameters, order/product parameters.
@objc(AEPTargetParameters)
public class TargetParameters: NSObject, Codable {
    @objc public let parameters: [String: String]?
    @objc public let profileParameters: [String: String]?
    @objc public let order: TargetOrder?
    @objc public let product: TargetProduct?

    /// Initialize a `TargetParameters` with the mbox parameters, the profile parameters, the order parameters and the product parameters.
    /// - Parameters:
    ///   - parameters: the mbox parameters
    ///   - profileParameters: the profile parameters
    ///   - order: the order parameters
    ///   - product: the product parameters
    @objc public init(parameters: [String: String]? = nil, profileParameters: [String: String]? = nil, order: TargetOrder? = nil, product: TargetProduct? = nil) {
        self.parameters = parameters
        self.profileParameters = profileParameters
        self.order = order
        self.product = product
    }
}
```

Examples for creating instances of TargetParameters can be seen in the [Target overview](../../../index.md#target-parameters).