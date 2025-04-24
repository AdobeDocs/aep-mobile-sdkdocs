---
noIndex: true
---

import Alerts from '/src/pages/resources/alerts.md'

<Variant platform="android-kotlin" task="add" repeat="3"/>

Add the required dependencies to your project by including them in the app's Gradle file.

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:edgeidentity")
implementation("com.adobe.marketing.mobile:edge")
implementation("com.adobe.marketing.mobile:optimize")
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

<Variant platform="android-groovy" task="add" repeat="3"/>

Add the required dependencies to your project by including them in the app's Gradle file.

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:edgeidentity'
implementation 'com.adobe.marketing.mobile:edge'
implementation 'com.adobe.marketing.mobile:optimize'
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

<Variant platform="ios-pods" task="add" repeat="2"/>

Add the required dependencies to your project using CocoaPods. Add following pods in your `Podfile`:

```swift
use_frameworks!
target 'YourAppTarget' do
    pod 'AEPCore', '~> 5.0'
    pod 'AEPEdge', '~> 5.0'
    pod 'AEPEdgeIdentity', '~> 5.0'
    pod 'AEPOptimize', '~> 5.0'
end
```

<Variant platform="android" task="decisionscope" repeat="2"/>

#### Java

```java
final DecisionScope decisionScope = DecisionScope("xcore:offer-activity:1111111111111111", "xcore:offer-placement:1111111111111111", 3);
```

<Variant platform="ios" task="decisionscope" repeat="4"/>

#### Swift

```swift
let decisionScope = DecisionScope(activityId: "xcore:offer-activity:1111111111111111", 
                                  placementId: "xcore:offer-placement:1111111111111111",
                                  itemCount: 3)
```

#### Objective-C

```objc
AEPDecisionScope* decisionScope = [[AEPDecisionScope alloc] initWithActivityId:@"xcore:offer-activity:1111111111111111"         
                                                                   placementId:@"xcore:offer-placement:1111111111111111" 
                                                                     itemCount:3];
```

<Variant platform="android" task="encodedscope" repeat="2"/>

#### Java

```java
final DecisionScope decisionScope = DecisionScope("eyJ4ZG06YWN0aXZpdHlJZCI6Inhjb3JlOm9mZmVyLWFjdGl2aXR5OjEyYmEyZjM4MWJjYTY3NWUiLCJ4ZG06cGxhY2VtZW50SWQiOiJ4Y29yZTpvZmZlci1wbGFjZW1lbnQ6MTJiOWEwMDA1NTUwNzM1NyIsICJ4ZG06aXRlbUNvdW50IjozfQ==");
```

<Variant platform="ios" task="encodedscope" repeat="4"/>

#### Swift

```swift
let decisionScope = DecisionScope(name: "eyJ4ZG06YWN0aXZpdHlJZCI6Inhjb3JlOm9mZmVyLWFjdGl2aXR5OjEyYmEyZjM4MWJjYTY3NWUiLCJ4ZG06cGxhY2VtZW50SWQiOiJ4Y29yZTpvZmZlci1wbGFjZW1lbnQ6MTJiOWEwMDA1NTUwNzM1NyIsICJ4ZG06aXRlbUNvdW50IjozfQ==")
```

#### Objective-C

```objc
AEPDecisionScope* decisionScope = [[AEPDecisionScope alloc] initWithName:@"eyJ4ZG06YWN0aXZpdHlJZCI6Inhjb3JlOm9mZmVyLWFjdGl2aXR5OjEyYmEyZjM4MWJjYTY3NWUiLCJ4ZG06cGxhY2VtZW50SWQiOiJ4Y29yZTpvZmZlci1wbGFjZW1lbnQ6MTJiOWEwMDA1NTUwNzM1NyIsICJ4ZG06aXRlbUNvdW50IjozfQ=="];
```

<Variant platform="android" task="target-location" repeat="2"/>

#### Java

```java
final DecisionScope decisionScope = DecisionScope("myTargetLocation");
```

<Variant platform="ios" task="target-location" repeat="4"/>

#### Swift

```swift
let decisionScope = DecisionScope(name: "myTargetLocation")
```

#### Objective-C

```objc
AEPDecisionScope* decisionScope = [[AEPDecisionScope alloc] initWithName:@"myTargetLocation"];
```

<Variant platform="android" task="target-parameters" repeat="2"/>

#### Java

```java
final Map<String, Object> data = new HashMap<>();
final Map<String, String> targetParameters = new HashMap<>();

// Add mbox parameters
targetParameters.put("someKey", "someValue");

// Add profile parameters - prefix with profile.
targetParameters.put("profile.membershipLevel", "platinum");

// Add product parameters
targetParameters.put("productId", "111");
targetParameters.put("categoryId", "Books");

// Add order parameters
targetParameters.put("orderId", "10");
targetParameters.put("orderTotal", "110.56");
targetParameters.put("purchasedProductIds", "111");

data.put("__adobe", new HashMap<String, Object>() {
  {
    put("target", targetParameters);
  }
});


final DecisionScope decisionScope = DecisionScope("myTargetLocation") // Target location (or mbox)

final List<DecisionScope> decisionScopes = new ArrayList<>();
decisionScopes.add(decisionScope);

Optimize.updatePropositions(decisionScopes, null, data);
```

<Variant platform="ios" task="target-parameters" repeat="4"/>

#### Swift

```swift
var data: [String: Any] = [:]
var targetParameters: [String: String] = [:]

// Add mbox parameters
targetParameters["someKey"] = "someValue"

// Add profile parameters - prefix with profile.
targetParameters["profile.membershipLevel"] = "platinum"

// Add product parameters
targetParameters["productId"] = "111"
targetParameters["categoryId"] = "Books"

// Add order parameters
targetParameters["orderId"] = "10"
targetParameters["orderTotal"] = "110.56"
targetParameters["purchasedProductIds"] = "111"

data["__adobe"] = [
  "target": targetParameters
]

let decisionScope = DecisionScope(name: "myTargetLocation") // Target location (or mbox)
Optimize.updatePropositions(for: [decisionScope] withXdm: nil andData: data)
```

#### Objective-C

```objc
NSMutableDictionary* data = [NSMutableDictionary dictionary];
NSMutableDictionary* targetParameters = [NSMutableDictionary dictionary];

// Add mbox parameters
targetParameters[@"someKey"] = @"someValue";

// Add profile parameters - prefix with profile.
targetParameters[@"profile.membershipLevel"] = @"platinum";

// Add product parameters
targetParameters[@"productId"] = @"111";
targetParameters[@"categoryId"] = @"Books";

// Add order parameters
targetParameters[@"orderId"] = @"10";
targetParameters[@"orderTotal"] = @"110.56";
targetParameters[@"purchasedProductIds"] = @"111";

[data setObject:[NSDictionary dictionaryWithObject:targetParameters forKey:@"target"] forKey:@"__adobe"];

AEPDecisionScope* decisionScope = [[AEPDecisionScope alloc] initWithName:@"myTargetLocation"]; // Target location (or mbox)
[AEPMobileOptimize updatePropositions:@[decisionScope] withXdm:nil andData:data];
```

<Variant platform="android" task="target-tpid" repeat="2"/>

#### Java

```java
final IdentityItem item = new IdentityItem("1111", AuthenticatedState.AUTHENTICATED, true);
final IdentityMap identityMap = new IdentityMap();
identityMap.addItem(item, "userCRMID") // userCRMID being used as Third Party ID
Identity.updateIdentities(identityMap);
```

<Variant platform="ios" task="target-tpid" repeat="4"/>

#### Swift

```swift
let identityMap = IdentityMap()
identityMap.add(item: IdentityItem(id: "1111", authenticatedState: AuthenticatedState.authenticated, primary: true),
                withNamespace: "userCRMID") // userCRMID being used as Third Party ID
Identity.updateIdentities(with: identityMap)
```

#### Objective-C

```objc
AEPIdentityItem *item = [[AEPIdentityItem alloc] initWithId:@"1111" authenticatedState:AEPAuthenticatedStateAuthenticated primary:true];

AEPIdentityMap *identityMap = [[AEPIdentityMap alloc] init];
[identityMap addItem:item withNamespace:@"userCRMID"]; // userCRMID being used as Third Party ID

[AEPMobileEdgeIdentity updateIdentities:identityMap];
```

<Variant platform="android" task="proposition-tracking-offer" repeat="2"/>

#### Java

```java
public class Offer {
  ...
  /**
    * Dispatches an event for the Edge network extension to send an Experience Event to the Edge network with the display interaction data for the
    * given {@code Proposition} offer.
    */
  public void displayed() {...}

  /**
    * Dispatches an event for the Edge network extension to send an Experience Event to the Edge network with the tap interaction data for the
    * given {@code Proposition} offer.
    */
  public void tapped() {...}
}
```

<Variant platform="ios" task="proposition-tracking-offer" repeat="2"/>

#### Swift

```swift
public extension Offer {
    /// Dispatches an event for the Edge extension to send an Experience Event to the Edge network with the display interaction data for the given proposition item.
    func displayed() {...}

    /// Dispatches an event for the Edge extension to send an Experience Event to the Edge network with the tap interaction data for the given proposition item.
    func tapped() {...}
}
```

<Variant platform="android" task="send-event-offer" repeat="2"/>

#### Java

```java
offer.displayed(); // Sends an Offer display notification to Edge network
```

<Variant platform="ios" task="send-event-offer" repeat="4"/>

#### Swift

```swift
offer.displayed() // Sends an Offer display notification to Edge network
```

#### Objective-C

```objc
[offer displayed]; // Sends an Offer display notification to Edge network
```

<Variant platform="android" task="proposition-tracking-edge" repeat="2"/>

#### Java

```java
public class Offer {
  ...
  /**
    * Generates a map containing XDM formatted data for {@code Experience Event - Proposition Interactions} field group from this {@code Proposition} item.
    *
    * The returned XDM data does contain the {@code eventType} for the Experience Event with value {@code decisioning.propositionDisplay}.
    *
    * Note: The Edge sendEvent API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, and override
    * dataset identifier.
    *
    * @return {@code Map<String, Object>} containing the XDM data for the proposition interaction.
    */
  public Map<String, Object> generateDisplayInteractionXdm() {...}

  /**
    * Generates a map containing XDM formatted data for {@code Experience Event - Proposition Interactions} field group from this {@code Proposition} offer.
    *
    * The returned XDM data contains the {@code eventType} for the Experience Event with value {@code decisioning.propositionInteract}.
    *
    * Note: The Edge sendEvent API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, and override
    * dataset identifier.
    *
    * @return {@code Map<String, Object>} containing the XDM data for the proposition interaction.
    */
  public Map<String, Object> generateTapInteractionXdm() {...}
}
```

<Variant platform="ios" task="proposition-tracking-edge" repeat="2"/>

#### Swift

```swift
public extension Offer {
  /// Creates a dictionary containing XDM formatted data for `Experience Event - Proposition Interactions` field group from the given proposition option.
  ///
  /// The Edge `sendEvent(experienceEvent:_:)` API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, or override dataset identifier.
  ///
  /// - Note: The returned XDM data also contains the `eventType` for the Experience Event with value `decisioning.propositionDisplay`.
  /// - Returns A dictionary containing XDM data for the proposition interactions.
  func generateDisplayInteractionXdm() -> [String: Any] {...}

  /// Creates a dictionary containing XDM formatted data for `Experience Event - Proposition Interactions` field group from the given proposition option.
  ///
  /// The Edge `sendEvent(experienceEvent:_:)` API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, or override dataset identifier.
  ///
  /// - Note: The returned XDM data also contains the `eventType` for the Experience Event with value `decisioning.propositionInteract`.
  /// - Returns A dictionary containing XDM data for the proposition interactions.
  func generateTapInteractionXdm() -> [String: Any] {...}
}
```

<Variant platform="android" task="send-event-edge" repeat="2"/>

#### Java

```java
// When a proposition is retrieved using getPropositions API or onUpdatePropositions API callback 
// and the corresponding offer is displayed, invoke method on Offer object to get the XDM data.

final Map<String, Object> displayInteractionXdm = offer.generateDisplayInteractionXdm() // Offer display tracking XDM
final Map<String, Object> additionalData = new HashMap<>();
additionalData.put("someDataKey", "someDataValue");

final ExperienceEvent experienceEvent = new ExperienceEvent.Builder().setXdmSchema(displayInteractionXdm).setData(additionalData).build();
Edge.sendEvent(experienceEvent, null)
```

<Variant platform="ios" task="send-event-edge" repeat="4"/>

#### Swift

```swift
// When a proposition is retrieved using getPropositions API or onUpdatePropositions API callback 
// and the corresponding offer is displayed, invoke method on Offer object to get the XDM data.

let displayInteractionXdm = offer.generateDisplayInteractionXdm() // Offer display tracking XDM
let additionalData: [String: Any] = ["someDataKey": "someDataValue"]

let experienceEvent = ExperienceEvent(xdm: displayInteractionXdm, data: additionalData)
Edge.sendEvent(experienceEvent)
```

#### Objective-C

```objc
// When a proposition is retrieved using getPropositions API or onUpdatePropositions API callback 
// and the corresponding offer is displayed, invoke method on Offer object to get the XDM data.

NSDictionary* displayInteractionXdm = [offer generateDisplayInteractionXdm];
NSDictionary* additionalData = @{@"someDataKey": @"someDataValue"};

AEPExperienceEvent* experienceEvent = [[AEPExperienceEvent alloc] initWithXdm:displayInteractionXdm data:additionalData datasetIdentifier:nil];
[AEPMobileEdge sendExperienceEvent:event completion:nil];
```

<Variant platform="android" task="proposition-tracking-batch" repeat="11"/>

### Java

#### Syntax

```java
public static void display(final List<Offer> offers)
```

* _offers_ is a list of offers to be displayed. These offers can be from different propositions.

#### Example

```java
// Create a list of offers from different propositions
final List<Offer> offersToDisplay = new ArrayList<>();
offersToDisplay.add(proposition1.getOffers().get(0));
offersToDisplay.add(proposition2.getOffers().get(0));
// Send list of offers to multiple offers display track public API
OfferUtils.display(offersToDisplay);
```

### Kotlin

#### Syntax

```kotlin
fun List<Offer>.displayed()
```

#### Example

```kotlin
// Create a list of offers from different propositions
val offersToDisplay = listOf(
    proposition1.offers[0],
    proposition2.offers[0]
)
// Send list of offers to multiple offers display track public API
offersToDisplay.display()
```

<Variant platform="ios" task="proposition-tracking-batch" repeat="11"/>

### Swift

#### Syntax

```swift
static func display(_ offers: [Offer])
```

#### Example

```swift
// Create an array of offers from different propositions
let offersToDisplay = [
    proposition1.offers[0],
    proposition2.offers[0]
]
// Send array of offers to multiple offers display track public API
Optimize.display(offersToDisplay)
```

### Objective-C

#### Syntax

```objc
+ (void)display:(NSArray<AEPOffer *> *)offers;
```

#### Example

```objc
// Create an array of offers from different propositions
NSArray<AEPOffer *> *offersToDisplay = @[
    proposition1.offers[0],
    proposition2.offers[0]
];
// Send array of offers to multiple offers display track public API
[AEPOfferUtils display:offersToDisplay];
```
