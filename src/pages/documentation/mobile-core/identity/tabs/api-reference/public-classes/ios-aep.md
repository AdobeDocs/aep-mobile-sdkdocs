**MobileVisitorAuthenticationState**

This is used to indicate the authentication state for the current `Identifiable`.

```swift
@objc(AEPMobileVisitorAuthState) public enum MobileVisitorAuthenticationState: Int, Codable {
    case unknown = 0
    case authenticated = 1
    case loggedOut = 2
}
```

**Identifiable**

```swift
@objc(AEPIdentifiable) public protocol Identifiable {
    /// Origin of the identifier
    var origin: String? { get }

    /// Type of the identifier
    var type: String? { get }

    /// The identifier
    var identifier: String? { get }

    /// The authentication state for the identifier
    var authenticationState: MobileVisitorAuthenticationState { get }
}
```