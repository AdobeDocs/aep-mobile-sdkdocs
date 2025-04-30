---
noIndex: true
---

<Variant platform="android" api="clear-propositions" repeat="5"/>

#### Java

#### Syntax

```java
public static void clearCachedPropositions()
```

#### Example

```java
Optimize.clearCachedPropositions();
```

<Variant platform="ios" api="clear-propositions" repeat="10"/>

#### Swift

#### Syntax

```swift
static func clearCachedPropositions()
```

#### Example

```swift
Optimize.clearCachedPropositions()
```

#### Objective-C

#### Syntax

```objc
+ (void) clearCachedPropositions;
```

#### Example

```objc
[AEPMobileOptimize clearCachedPropositions];
```

<Variant platform="android" api="extension-version" repeat="5"/>

#### Java

#### Syntax

```java
public static String extensionVersion()
```

#### Example

```java
Optimize.extensionVersion();
```

<Variant platform="ios" api="extension-version" repeat="10"/>

#### Swift

#### Syntax

```swift
static var extensionVersion: String
```

#### Example

```swift
let extensionVersion = Optimize.extensionVersion
```

#### Objective-C

#### Syntax

```objc
+ (nonnull NSString*) extensionVersion;
```

#### Example

```objc
NSString *extensionVersion = [AEPMobileOptimize extensionVersion];
```

<Variant platform="android" api="get-propositions" repeat="6"/>

#### Java

#### Syntax

```java
public static void getPropositions(final List<DecisionScope> decisionScopes, final AdobeCallback<Map<DecisionScope, OptimizeProposition>> callback)
```

* _decisionScopes_ is a list of decision scopes for which propositions are requested.
* _callback_ `call` method is invoked with propositions map of type `Map<DecisionScope, OptimizeProposition>`. If the callback is an instance of [AdobeCallbackWithError](../../home/base/mobile-core/api-reference.md#adobecallbackwitherror), and if the operation times out or an error occurs in retrieving propositions, the `fail` method is invoked with the appropriate [AdobeError](../../home/base/mobile-core/api-reference.md#adobeerror).

#### Example

```java
final DecisionScope decisionScope1 = DecisionScope("xcore:offer-activity:1111111111111111", "xcore:offer-placement:1111111111111111", 2);
final DecisionScope decisionScope2 = new DecisionScope("myScope");

final List<DecisionScope> decisionScopes = new ArrayList<>();
decisionScopes.add(decisionScope1);
decisionScopes.add(decisionScope2);

Optimize.getPropositions(scopes, new AdobeCallbackWithError<Map<DecisionScope, OptimizeProposition>>() {
    @Override
    public void fail(final AdobeError adobeError) {
        // handle error
    }

    @Override
    public void call(Map<DecisionScope, OptimizeProposition> propositionsMap) {
        if (propositionsMap != null && !propositionsMap.isEmpty()) {
            // get the propositions for the given decision scopes
            if (propositionsMap.contains(decisionScope1)) {
                final OptimizeProposition proposition1 = propsMap.get(decisionScope1)
                // read proposition1 offers
            }
            if (propositionsMap.contains(decisionScope2)) {
                final OptimizeProposition proposition2 = propsMap.get(decisionScope2)
                // read proposition2 offers
            }
        }
    }
});
```

<Variant platform="android" api="get-propositions-withTimeout" repeat="6"/>

#### Java

#### Syntax

```java
public static void getPropositions(final List<DecisionScope> decisionScopes, final double timeoutSeconds, final AdobeCallback<Map<DecisionScope, OptimizeProposition>> callback)
```

* _decisionScopes_ is a list of decision scopes for which propositions are requested.
* _timeoutSeconds_ is a duration in seconds specifying the maximum time `getProposition` will wait for completion before returning [AdobeError](../../home/base/mobile-core/api-reference.md#adobeerror).
* _callback_ `call` method is invoked with propositions map of type `Map<DecisionScope, OptimizeProposition>`. If the callback is an instance of [AdobeCallbackWithError](../../home/base/mobile-core/api-reference.md#adobecallbackwitherror), and if the operation times out or an error occurs in retrieving propositions, the `fail` method is invoked with the appropriate [AdobeError](../../home/base/mobile-core/api-reference.md#adobeerror).

#### Example

```java
final DecisionScope decisionScope1 = DecisionScope("xcore:offer-activity:1111111111111111", "xcore:offer-placement:1111111111111111", 2);
final DecisionScope decisionScope2 = new DecisionScope("myScope");

final List<DecisionScope> decisionScopes = new ArrayList<>();
decisionScopes.add(decisionScope1);
decisionScopes.add(decisionScope2);

Optimize.getPropositions(scopes, 10.0, new AdobeCallbackWithError<Map<DecisionScope, OptimizeProposition>>() {
    @Override
    public void fail(final AdobeError adobeError) {
        // handle error
    }

    @Override
    public void call(Map<DecisionScope, OptimizeProposition> propositionsMap) {
        if (propositionsMap != null && !propositionsMap.isEmpty()) {
            // get the propositions for the given decision scopes
            if (propositionsMap.contains(decisionScope1)) {
                final OptimizeProposition proposition1 = propsMap.get(decisionScope1)
                // read proposition1 offers
            }
            if (propositionsMap.contains(decisionScope2)) {
                final OptimizeProposition proposition2 = propsMap.get(decisionScope2)
                // read proposition2 offers
            }
        }
    }
});
```

<Variant platform="ios" api="get-propositions" repeat="12"/>

#### Swift

#### Syntax

```swift
static func getPropositions(for decisionScopes: [DecisionScope], 
                            _ completion: @escaping ([DecisionScope: OptimizeProposition]?, Error?) -> Void)
```

* _decisionScopes_ is an array of decision scopes for which propositions are requested.
* _completion_ is invoked with propositions dictionary of type `[DecisionScope: OptimizeProposition]`. An `Error` is returned if SDK fails to retrieve the propositions.

#### Example

```swift
let decisionScope1 = DecisionScope(activityId: "xcore:offer-activity:1111111111111111", 
                                   placementId: "xcore:offer-placement:1111111111111111",
                                   itemCount: 2)
let decisionScope2 = DecisionScope(name: "myScope")

Optimize.getPropositions(for: [decisionScope1, decisionScope2]) { propositionsDict, error in

    if let error = error {
        // handle error
        return
    }

    if let propositionsDict = propositionsDict {
        // get the propositions for the given decision scopes

        if let proposition1 = propositionsDict[decisionScope1] {
            // read proposition1 offers
        }

        if let proposition2 = propositionsDict[decisionScope2] {
            // read proposition2 offers
        }
    }
}
```

#### Objective-C

#### Syntax

```objc
+ (void) getPropositions: (NSArray<AEPDecisionScope*>* _Nonnull) decisionScopes 
              completion: (void (^ _Nonnull)(NSDictionary<AEPDecisionScope*, AEPOptimizeProposition*>* _Nullable propositionsDict, NSError* _Nullable error)) completion;
```

* _decisionScopes_ is an array of decision scopes for which propositions are requested.
* _completion_ is invoked with propositions dictionary of type `NSDictionary<AEPDecisionScope*, AEPOptimizeProposition*>`. An `NSError` is returned if SDK fails to retrieve the propositions.

#### Example

```objc
AEPDecisionScope* decisionScope1 = [[AEPDecisionScope alloc] initWithActivityId: @"xcore:offer-activity:1111111111111111" 
                                                                   placementId: @"xcore:offer-placement:1111111111111111" 
                                                                     itemCount: 2];
AEPDecisionScope* decisionScope2 = [[AEPDecisionScope alloc] initWithName: @"myScope"];

[AEPMobileOptimize getPropositions: @[decisionScope1, decisionScope2] 
                        completion: ^(NSDictionary<AEPDecisionScope*, AEPOptimizeProposition*>* propositionsDict, NSError* error) {
  if (error != nil) {
    // handle error   
    return;
  }

  AEPOptimizeProposition* proposition1 = propositionsDict[decisionScope1];
  // read proposition1 offers

  AEPOptimizeProposition* proposition2 = propositionsDict[decisionScope2];
  // read proposition2 offers
}];
```

<Variant platform="ios" api="get-propositions-withTimeout" repeat="12"/>

#### Swift

#### Syntax

```swift
static func getPropositions(for decisionScopes: [DecisionScope], 
                            timeout: TimeInterval,
                            _ completion: @escaping ([DecisionScope: OptimizeProposition]?, Error?) -> Void)
```

* _decisionScopes_ is an array of decision scopes for which propositions are requested.
* _timeout_ is a duration in seconds specifying the maximum time `getProposition` will wait for completion before returning `Error`.
* _completion_ is invoked with propositions dictionary of type `[DecisionScope: OptimizeProposition]`. An `Error` is returned if SDK fails to retrieve the propositions.

#### Example

```swift
let decisionScope1 = DecisionScope(activityId: "xcore:offer-activity:1111111111111111", 
                                   placementId: "xcore:offer-placement:1111111111111111",
                                   itemCount: 2)
let decisionScope2 = DecisionScope(name: "myScope")

Optimize.getPropositions(for: [decisionScope1, decisionScope2], timeout: 1.0) { propositionsDict, error in

    if let error = error {
        // handle error
        return
    }

    if let propositionsDict = propositionsDict {
        // get the propositions for the given decision scopes

        if let proposition1 = propositionsDict[decisionScope1] {
            // read proposition1 offers
        }

        if let proposition2 = propositionsDict[decisionScope2] {
            // read proposition2 offers
        }
    }
}
```

#### Objective-C

#### Syntax

```objc
+ (void)getPropositions:(NSArray<AEPDecisionScope *> *_Nonnull) decisionScopes
                timeout:(NSTimeInterval) timeout
             completion:(void (^_Nonnull)(NSDictionary<AEPDecisionScope *, AEPOptimizeProposition *> *_Nullable propositionsDict, NSError *_Nullable error)) completion;
              
```

* _decisionScopes_ is an array of decision scopes for which propositions are requested.
* _timeout_ is a duration in seconds specifying the maximum time `getProposition` will wait for completion before returning `NSError`.
* _completion_ is invoked with propositions dictionary of type `NSDictionary<AEPDecisionScope*, AEPOptimizeProposition*>`. An `NSError` is returned if SDK fails to retrieve the propositions.

#### Example

```objc
AEPDecisionScope* decisionScope1 = [[AEPDecisionScope alloc] initWithActivityId: @"xcore:offer-activity:1111111111111111" 
                                                                   placementId: @"xcore:offer-placement:1111111111111111" 
                                                                     itemCount: 2];
AEPDecisionScope* decisionScope2 = [[AEPDecisionScope alloc] initWithName: @"myScope"];

[AEPMobileOptimize getPropositions: @[decisionScope1, decisionScope2] 
                        timeout:1.0
                        completion: ^(NSDictionary<AEPDecisionScope*, AEPOptimizeProposition*>* propositionsDict, NSError* error) {
  if (error != nil) {
    // handle error   
    return;
  }

  AEPOptimizeProposition* proposition1 = propositionsDict[decisionScope1];
  // read proposition1 offers

  AEPOptimizeProposition* proposition2 = propositionsDict[decisionScope2];
  // read proposition2 offers
}];
```

<Variant platform="android" api="on-propositions-update" repeat="6"/>

#### Java

#### Syntax

```java
public static void onPropositionsUpdate(final AdobeCallback<Map<DecisionScope, OptimizeProposition>> callback)
```

* _callback_ `call` method is invoked with propositions map of type `Map<DecisionScope, OptimizeProposition>`. Errors and empty responses for personalization queries are **not** passed back in the `call` method.

#### Example

```java
Optimize.onPropositionsUpdate(new AdobeCallback<Map<DecisionScope, OptimizeProposition>>() {
    @Override
    public void call(final Map<DecisionScope, OptimizeProposition> propositionsMap) {
        if (propositionsMap != null && !propositionsMap.isEmpty()) {
            // handle propositions
        }
    }
});
```

<Variant platform="ios" api="on-propositions-update" repeat="12"/>

#### Swift

#### Syntax

```swift
static func onPropositionsUpdate(perform action: @escaping ([DecisionScope: OptimizeProposition]?) -> Void)
```

* _action_ is invoked with propositions dictionary of type `[DecisionScope: OptimizeProposition]`. Errors and empty responses for personalization queries are **not** passed back in _action_.

#### Example

```swift
Optimize.onPropositionsUpdate { propositionsDict in
  if let propositionsDict = propositionsDict {
    // handle propositions
  }
}
```

#### Objective-C

#### Syntax

```objc
+ (void) onPropositionsUpdate: (void (^ _Nonnull)(NSDictionary<AEPDecisionScope*, AEPOptimizeProposition*>* _Nullable)) action;
```

* _action_ is invoked with propositions dictionary of type `NSDictionary<AEPDecisionScope*, AEPOptimizeProposition*>`. Errors and empty responses for personalization queries are **not** passed back in _action_.

#### Example

```objc
[AEPMobileOptimize onPropositionsUpdate: ^(NSDictionary<AEPDecisionScope*, AEPOptimizeProposition*>* propositionsDict) {
  // handle propositions
}];
```

<Variant platform="android" api="register-extension" repeat="5"/>

#### Java

#### Syntax

```java
public static void registerExtension()
```

#### Example

```java
Optimize.registerExtension();
```

<Variant platform="android" api="update-propositions" repeat="6"/>

#### Java

#### Syntax

```java
public static void updatePropositions(final List<DecisionScope> decisionScopes, final Map<String, Object> xdm, final Map<String, Object> data)
```

* _decisionScopes_ is a list of decision scopes for which propositions need updating.
* _xdm_ is a map containing additional XDM formatted data to be attached to the Experience Event.
* _data_ is a map containing additional freeform data to be attached to the Experience Event.

#### Example

```java
final DecisionScope decisionScope1 = DecisionScope("xcore:offer-activity:1111111111111111", "xcore:offer-placement:1111111111111111", 2);
final DecisionScope decisionScope2 = new DecisionScope("myScope");

final List<DecisionScope> decisionScopes = new ArrayList<>();
decisionScopes.add(decisionScope1);
decisionScopes.add(decisionScope2);

Optimize.updatePropositions(decisionScopes, 
                            new HashMap<String, Object>() {
                                {
                                    put("xdmKey", "xdmValue");
                                }
                            },
                            new HashMap<String, Object>() {
                                {
                                    put("dataKey", "dataValue");
                                }
                            });
```

<Variant platform="android" api="update-propositions-withCallback" repeat="6"/>

#### Java

#### Syntax

```java
public static void updatePropositions(final List<DecisionScope> decisionScopes, 
                                      final Map<String, Object> xdm,
                                      final Map<String, Object> data,
                                      final AdobeCallback<Map<DecisionScope, OptimizeProposition>> callback)
```

* _decisionScopes_ is a list of decision scopes for which propositions need updating.
* _xdm_ is a map containing additional XDM formatted data to be attached to the Experience Event.
* _data_ is a map containing additional freeform data to be attached to the Experience Event.
* _callback_ is an optional completion handler that is invoked at the completion of the edge request. The `call` method is invoked with propositions map of type `Map<DecisionScope, OptimizeProposition>`. If the callback is an instance of `AdobeCallbackWithOptimizeError`, and if the operation times out or an error occurs in retrieving propositions, the `fail` method is invoked with the appropriate [AEPOptimizeError](../api-reference.md#aepoptimizeerror). _Note:_ In certain cases, both the success and failure callbacks may be triggered. To handle these cases, ensure that your implementation checks for both successful propositions and errors within the callback, as both may be present simultaneously.

#### Example

```java
final DecisionScope decisionScope1 = DecisionScope("xcore:offer-activity:1111111111111111", "xcore:offer-placement:1111111111111111", 2);
final DecisionScope decisionScope2 = new DecisionScope("myScope");

final List<DecisionScope> decisionScopes = new ArrayList<>();
decisionScopes.add(decisionScope1);
decisionScopes.add(decisionScope2);

Optimize.updatePropositions(decisionScopes,
                            new HashMap<String, Object>() {
                                {
                                    put("xdmKey", "xdmValue");
                                }
                            },
                            new HashMap<String, Object>() {
                                {
                                    put("dataKey", "dataValue");
                                }
                            },
                            new AdobeCallbackWithOptimizeError<Map<DecisionScope, OptimizeProposition>>() {
                                @Override
                                public void fail(AEPOptimizeError optimizeError) {
                                    responseError = optimizeError;
                                }

                                @Override
                                public void call(Map<DecisionScope, OptimizeProposition> propositionsMap) {
                                    responseMap = propositionsMap;
                                }
                            });
```

<Variant platform="android" api="update-propositions-withCallback-withTimeout" repeat="6"/>

#### Java

#### Syntax

```java
public static void updatePropositions(final List<DecisionScope> decisionScopes, 
                                      final Map<String, Object> xdm,
                                      final Map<String, Object> data,
                                      final double timeoutSeconds, 
                                      final AdobeCallback<Map<DecisionScope, OptimizeProposition>> callback)
```

* _decisionScopes_ is a list of decision scopes for which propositions need updating.
* _xdm_ is a map containing additional XDM formatted data to be attached to the Experience Event.
* _data_ is a map containing additional freeform data to be attached to the Experience Event.
* _timeoutSeconds_ is a duration in seconds specifying the maximum time `updateProposition` will wait for completion before returning [AEPOptimizeError](../api-reference.md#aepoptimizeerror) which contains [AdobeError.CALLBACK_TIMEOUT](../../home/base/mobile-core/api-reference.md#adobeerror).
* _callback_ is an optional completion handler that is invoked at the completion of the edge request. The `call` method is invoked with propositions map of type `Map<DecisionScope, OptimizeProposition>`. If the callback is an instance of `AdobeCallbackWithOptimizeError`, and if the operation times out or an error occurs in retrieving propositions, the `fail` method is invoked with the appropriate [AEPOptimizeError](../api-reference.md#aepoptimizeerror). _Note:_ In certain cases, both the success and failure callbacks may be triggered. To handle these cases, ensure that your implementation checks for both successful propositions and errors within the callback, as both may be present simultaneously.

#### Example

```java
final DecisionScope decisionScope1 = DecisionScope("xcore:offer-activity:1111111111111111", "xcore:offer-placement:1111111111111111", 2);
final DecisionScope decisionScope2 = new DecisionScope("myScope");

final List<DecisionScope> decisionScopes = new ArrayList<>();
decisionScopes.add(decisionScope1);
decisionScopes.add(decisionScope2);

Optimize.updatePropositions(decisionScopes,
                            new HashMap<String, Object>() {
                                {
                                    put("xdmKey", "xdmValue");
                                }
                            },
                            new HashMap<String, Object>() {
                                {
                                    put("dataKey", "dataValue");
                                }
                            },
                            10.0,
                            new AdobeCallbackWithOptimizeError<Map<DecisionScope, OptimizeProposition>>() {
                                @Override
                                public void fail(AEPOptimizeError optimizeError) {
                                    responseError = optimizeError;
                                }

                                @Override
                                public void call(Map<DecisionScope, OptimizeProposition> propositionsMap) {
                                    responseMap = propositionsMap;
                                }
                            });
```

<Variant platform="ios" api="update-propositions" repeat="12"/>

#### Swift

#### Syntax

```swift
static func updatePropositions(for decisionScopes: [DecisionScope], 
                               withXdm xdm: [String: Any]?,
                               andData data: [String: Any]? = nil)
```

* _decisionScopes_ is an array of decision scopes for which propositions need updating.
* _xdm_ is a dictionary containing additional XDM formatted data to be attached to the Experience Event.
* _data_ is a dictionary containing additional freeform data to be attached to the Experience Event.

#### Example

```swift
let decisionScope1 = DecisionScope(activityId: "xcore:offer-activity:1111111111111111", 
                                   placementId: "xcore:offer-placement:1111111111111111",
                                   itemCount: 2)
let decisionScope2 = DecisionScope(name: "myScope")

Optimize.updatePropositions(for: [decisionScope1, decisionScope2] 
                            withXdm: ["xdmKey": "xdmValue"] 
                            andData: ["dataKey": "dataValue"])
```

#### Objective-C

#### Syntax

```objc
+ (void) updatePropositions: (NSArray<AEPDecisionScope*>* _Nonnull) decisionScopes 
                    withXdm: (NSDictionary<NSString*, id>* _Nullable) xdm
                    andData: (NSDictionary<NSString*, id>* _Nullable) data;
```

* _decisionScopes_ is an array of decision scopes for which propositions need updating.
* _xdm_ is a dictionary containing additional XDM formatted data to be attached to the Experience Event.
* _data_ is a dictionary containing additional freeform data to be attached to the Experience Event.

#### Example

```objc
AEPDecisionScope* decisionScope1 = [[AEPDecisionScope alloc] initWithActivityId: @"xcore:offer-activity:1111111111111111" 
                                                                   placementId: @"xcore:offer-placement:1111111111111111" 
                                                                     itemCount: 2];
AEPDecisionScope* decisionScope2 = [[AEPDecisionScope alloc] initWithName: @"myScope"]; 

[AEPMobileOptimize updatePropositions: @[decisionScope1, decisionScope2] 
                              withXdm: @{@"xdmKey": @"xdmValue"} 
                              andData: @{@"dataKey": @"dataValue"}];
```

<Variant platform="ios" api="update-propositions-withCallback" repeat="12"/>

#### Swift

#### Syntax

```swift
static func updatePropositions(for decisionScopes: [DecisionScope],
                               withXdm xdm: [String: Any]?,
                               andData data: [String: Any]? = nil,
                               _completion: (([DecisionScope: OptimizeProposition]?, Error?) -> Void)? = nil)
```

* _decisionScopes_ is an array of decision scopes for which propositions need updating.
* _xdm_ is a dictionary containing additional XDM formatted data to be attached to the Experience Event.
* _data_ is a dictionary containing additional freeform data to be attached to the Experience Event.
* _completion_ is a optional completion handler invoked at the completion of the edge request with map of successful decision scopes to propositions and errors, if any.

#### Example

```swift
let decisionScope1 = DecisionScope(activityId: "xcore:offer-activity:1111111111111111",
                                   placementId: "xcore:offer-placement:1111111111111111",
                                   itemCount: 2)
let decisionScope2 = DecisionScope(name: "myScope")

Optimize.updatePropositions(for: [decisionScope1, decisionScope2]
                            withXdm: ["xdmKey": "xdmValue"]
                            andData: ["dataKey": "dataValue"]) { data, error in
            if let error = error as? AEPOptimizeError {
                // handle error
            }
        }
```

#### Objective-C

#### Syntax

```objc
+ (void) updatePropositions: (NSArray<AEPDecisionScope*>* _Nonnull) decisionScopes
                    withXdm: (NSDictionary<NSString*, id>* _Nullable) xdm
                    andData: (NSDictionary<NSString*, id>* _Nullable) data
                 completion: (void (^ _Nonnull)(NSDictionary<AEPDecisionScope*, AEPOptimizeProposition*>* _Nullable propositionsDict, NSError* _Nullable error)) completion;
```

* _decisionScopes_ is an array of decision scopes for which propositions are requested.
* _xdm_ is a dictionary containing additional XDM formatted data to be attached to the Experience Event.
* _data_ is a dictionary containing additional freeform data to be attached to the Experience Event.
* _completion_ is invoked with propositions dictionary of type `NSDictionary<AEPDecisionScope*, AEPOptimizeProposition*>`. An `NSError` is returned if SDK fails to retrieve the propositions.

#### Example

```objc

AEPDecisionScope* decisionScope1 = [[AEPDecisionScope alloc] initWithActivityId: @"xcore:offer-activity:1111111111111111"
                                                                   placementId: @"xcore:offer-placement:1111111111111111"
                                                                     itemCount: 2];
AEPDecisionScope* decisionScope2 = [[AEPDecisionScope alloc] initWithName: @"myScope"];

[AEPMobileOptimize updatePropositions: @[decisionScope1, decisionScope2]
                              withXdm: @{@"xdmKey": @"xdmValue"}
                              andData: @{@"dataKey": @"dataValue"}]
                           completion: ^(NSDictionary<AEPDecisionScope*, AEPOptimizeProposition*>* propositionsDict, NSError* error) {
  if (error != nil) {
    // handle error
    return;
  }

  AEPOptimizeProposition* proposition1 = propositionsDict[decisionScope1];
  // read proposition1 offers

  AEPOptimizeProposition* proposition2 = propositionsDict[decisionScope2];
  // read proposition2 offers
}];
```

<Variant platform="ios" api="update-propositions-withCallback-withTimeout" repeat="12"/>

#### Swift

#### Syntax

```swift
static func updatePropositions(for decisionScopes: [DecisionScope],
                               withXdm xdm: [String: Any]?,
                               andData data: [String: Any]? = nil,
                               timeout: TimeInterval,
                               _completion: (([DecisionScope: OptimizeProposition]?, Error?) -> Void)? = nil)
```

* _decisionScopes_ is an array of decision scopes for which propositions need updating.
* _xdm_ is a dictionary containing additional XDM formatted data to be attached to the Experience Event.
* _data_ is a dictionary containing additional freeform data to be attached to the Experience Event.
* _timeout_ is a duration in seconds specifying the maximum time `updateProposition` will wait for completion before returning `AEPOptimizeError`.
* _completion_ is a optional completion handler invoked at the completion of the edge request with map of successful decision scopes to propositions and `AEPOptimizeError`, if any.

#### Example

```swift
let decisionScope1 = DecisionScope(activityId: "xcore:offer-activity:1111111111111111",
                                   placementId: "xcore:offer-placement:1111111111111111",
                                   itemCount: 2)
let decisionScope2 = DecisionScope(name: "myScope")

Optimize.updatePropositions(for: [decisionScope1, decisionScope2],
                            withXdm: ["xdmKey": "xdmValue"],
                            andData: ["dataKey": "dataValue"],
                            timeout: 1.0) { data, error in
            if let error = error as? AEPOptimizeError {
                // handle error
            }
        }
```

#### Objective-C

#### Syntax

```objc
+ (void) updatePropositions: (NSArray<AEPDecisionScope*>* _Nonnull) decisionScopes
                    withXdm: (NSDictionary<NSString*, id>* _Nullable) xdm
                    andData: (NSDictionary<NSString*, id>* _Nullable) data
                    timeout:(NSTimeInterval) timeout
                 completion: (void (^ _Nonnull)(NSDictionary<AEPDecisionScope*, AEPOptimizeProposition*>* _Nullable propositionsDict, NSError* _Nullable error)) completion;
```

* _decisionScopes_ is an array of decision scopes for which propositions are requested.
* _xdm_ is a dictionary containing additional XDM formatted data to be attached to the Experience Event.
* _data_ is a dictionary containing additional freeform data to be attached to the Experience Event.
* _timeout_ is a duration in seconds specifying the maximum time `updateProposition` will wait for completion before returning `NSError`.
* _completion_ is invoked with propositions dictionary of type `NSDictionary<AEPDecisionScope*, AEPOptimizeProposition*>`. An `NSError` is returned if SDK fails to retrieve the propositions.

#### Example

```objc

AEPDecisionScope* decisionScope1 = [[AEPDecisionScope alloc] initWithActivityId: @"xcore:offer-activity:1111111111111111"
                                                                   placementId: @"xcore:offer-placement:1111111111111111"
                                                                     itemCount: 2];
AEPDecisionScope* decisionScope2 = [[AEPDecisionScope alloc] initWithName: @"myScope"];

[AEPMobileOptimize updatePropositions: @[decisionScope1, decisionScope2]
                              withXdm: @{@"xdmKey": @"xdmValue"}
                              andData: @{@"dataKey": @"dataValue"}]
                              timeout:1.0
                              completion: ^(NSDictionary<AEPDecisionScope* AEPOptimizeProposition*>* propositionsDict, NSError* error) {
  if (error != nil) {
    // handle error
    return;
  }

  AEPOptimizeProposition* proposition1 = propositionsDict[decisionScope1];
  // read proposition1 offers

  AEPOptimizeProposition* proposition2 = propositionsDict[decisionScope2];
  // read proposition2 offers
}];
```

<Variant platform="android" api="decisionscope" repeat="2"/>

##### Java

```java
/**
 * {@code DecisionScope} class represents a scope used to fetch personalized offers from the Experience Edge network.
 */
public class DecisionScope {

    /**
     * Constructor creates a {@code DecisionScope} using the provided {@code name}.
     *
     * @param name {@link String} containing scope name.
     */
    public DecisionScope(final String name) {...}
    /**
     * Constructor creates a {@code DecisionScope} using the provided {@code activityId} and {@code placementId}.
     *
     * This constructor assumes the item count for the given scope to be {@value #DEFAULT_ITEM_COUNT}.
     *
     * @param activityId {@link String} containing activity identifier for the given scope.
     * @param placementId {@code String} containing placement identifier for the given scope.
     */
    public DecisionScope(final String activityId, final String placementId) {...}

    /**
     * Constructor creates a {@code DecisionScope} using the provided {@code activityId} and {@code placementId}.
     *
     * @param activityId {@link String} containing activity identifier for the given scope.
     * @param placementId {@code String} containing placement identifier for the given scope.
     * @param itemCount {@code String} containing number of items to be returned for the given scope.
     */
    public DecisionScope(final String activityId, final String placementId, final int itemCount) {...}

    /**
     * Gets the name for this scope.
     *
     * @return {@link String} containing the scope name.
     */
    public String getName() {...}
}
```

<Variant platform="ios" api="decisionscope" repeat="2"/>

#### Swift

```swift
/// `DecisionScope` class is used to create decision scopes for personalization query requests to Experience Edge Network.
@objc(AEPDecisionScope)
public class DecisionScope: NSObject, Codable {
    /// Decision scope name
    @objc public let name: String

    /// Creates a new decision scope using the given scope `name`.
    ///
    /// - Parameter name: string representation for the decision scope.
    @objc
    public init(name: String) {...}

    /// Creates a new decision scope using the given `activityId`, `placementId` and `itemCount`.
    ///
    /// This initializer creates a scope name by Base64 encoding the JSON string created using the provided data.
    ///
    /// If `itemCount` == 1, JSON string is
    ///
    ///     {"activityId":#activityId,"placementId":#placementId}
    /// otherwise,
    ///
    ///     {"activityId":#activityId,"placementId":#placementId,"itemCount":#itemCount}
    /// - Parameters:
    ///   - activityId: unique activity identifier for the decisioning activity.
    ///   - placementId: unique placement identifier for the decisioning activity offer.
    ///   - itemCount: number of offers to be returned from the server.
    @objc
    public convenience init(activityId: String, placementId: String, itemCount: UInt = 1) {...}
}
```

<Variant platform="android" api="proposition" repeat="2"/>

#### Java

```java
public class OptimizeProposition {

    /**
     * Constructor creates a {@code OptimizeProposition} using the provided propostion {@code id}, {@code offers}, {@code scope} and {@code scopeDetails}.
     *
     * @param id {@link String} containing proposition identifier.
     * @param offers {@code List<Offer>} containing proposition items.
     * @param scope {@code String} containing encoded scope.
     * @param scopeDetails {@code Map<String, Object>} containing scope details.
     */
    OptimizeProposition(final String id, final List<Offer> offers, final String scope, final Map<String, Object> scopeDetails) {...}

    /**
     * Gets the {@code OptimizeProposition} identifier.
     *
     * @return {@link String} containing the {@link OptimizeProposition} identifier.
     */
    public String getId() {...}

     /**
     * Gets the {@code OptimizeProposition} items.
     *
     * @return {@code List<Offer>} containing the {@link OptimizeProposition} items.
     */
    public List<Offer> getOffers() {...}

    /**
     * Gets the {@code OptimizeProposition} scope.
     *
     * @return {@link String} containing the encoded {@link OptimizeProposition} scope.
     */
    public String getScope() {...}

    /**
     * Gets the {@code OptimizeProposition} scope details.
     *
     * @return {@code Map<String, Object>} containing the {@link OptimizeProposition} scope details.
     */
    public Map<String, Object> getScopeDetails() {...}

    /**
     * Generates a map containing XDM formatted data for {@code Experience Event - OptimizeProposition Reference} field group from this {@code OptimizeProposition}.
     *
     * The returned XDM data does not contain {@code eventType} for the Experience Event.
     *
     * @return {@code Map<String, Object>} containing the XDM data for the OptimizeProposition reference.
     */
    public Map<String, Object> generateReferenceXdm() {...}
}
```

<Variant platform="ios" api="proposition" repeat="4"/>

#### Swift

```swift
/// `OptimizeProposition` class
@objc(AEPOptimizeProposition)
public class OptimizeProposition: NSObject, Codable {

    /// Unique proposition identifier
    @objc public let id: String

    /// Array containing proposition decision options
    @objc public lazy var offers: [Offer] = {...}()

    /// Decision scope string
    @objc public let scope: String

    /// Scope details dictionary
    @objc public var scopeDetails: [String: Any]
}
```

The `OptimizeProposition` class extension provides a method for generating XDM data for Proposition Reference field group which can be used for proposition tracking.

```swift
/// `OptimizeProposition` extension
@objc
public extension OptimizeProposition {
    /// Creates a dictionary containing XDM formatted data for `Experience Event - Proposition Reference` field group from the given proposition.
    ///
    /// The Edge `sendEvent(experienceEvent:_:)` API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, or override dataset identifier.
    ///
    /// - Note: The returned XDM data does not contain an `eventType` for the Experience Event.
    /// - Returns A dictionary containing XDM data for the proposition reference.
    func generateReferenceXdm() -> [String: Any] {...}
}
```

<Variant platform="android" api="offer" repeat="2"/>

#### Java

```java
public class Offer {

    /**
     * {@code Offer} Builder.
     */
    public static class Builder {
        
        /**
        * Builder constructor with required {@code Offer} attributes as parameters.
        *
        * It sets default values for remaining {@link Offer} attributes.
        *
        * @param id required {@link String} containing {@code Offer} identifier.
        * @param type required {@link OfferType} indicating the {@code Offer} type.
        * @param content required {@code String} containing the {@code Offer} content.
        */
        public Builder(final String id, final OfferType type, final String content) {...}

        /**
        * Sets the etag for this {@code Offer}.
        *
        * @param etag {@link String} containing {@link Offer} etag.
        * @return this Offer {@link Builder}
        * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.
        */
        public Builder setEtag(final String etag) {...}

        /**
         * Sets the score for this {@code Offer}.
         *
         * @param score {@code double} containing {@link Offer} score.
         * @return this Offer {@link Builder}
         * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.
         */
        public Builder setScore(final double score) {...}

        /**
        * Sets the schema for this {@code Offer}.
        *
        * @param schema {@link String} containing {@link Offer} schema.
        * @return this Offer {@link Builder}
        * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.
        */
        public Builder setSchema(final String schema) {...} 

        /**
         * Sets the metadata for this {@code Offer}.
         *
         * @param meta {@code Map<String, Object>} containing {@link Offer} metadata.
         * @return this Offer {@link Builder}
         * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.
         */
        public Builder setMeta(final Map<String, Object> meta) {...}

        /**
        * Sets the language for this {@code Offer}.
        *
        * @param language {@code List<String>} containing supported {@link Offer} language.
        * @return this Offer {@link Builder}
        * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.
        */
        public Builder setLanguage(final List<String> language) {...}

        /**
        * Sets the characteristics for this {@code Offer}.
        *
        * @param characteristics {@code Map<String, String>} containing {@link Offer} characteristics.
        * @return this Offer {@link Builder}
        * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.
        */
        public Builder setCharacteristics(final Map<String, String> characteristics) {...}

        /**
        * Builds and returns the {@code Offer} object.
        *
        * @return {@link Offer} object or null.
        * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.
        */
        public Offer build() {...}
    }

    /**
     * Gets the {@code Offer} identifier.
     *
     * @return {@link String} containing the {@link Offer} identifier.
     */
    public String getId() {...}

    /**
     * Gets the {@code Offer} etag.
     *
     * @return {@link String} containing the {@link Offer} etag.
     */
    public String getEtag() {...}

    /**
     * Gets the {@code Offer} score.
     *
     * @return {@code double} containing the {@link Offer} score.
     */
    public double getScore() {...}

    /**
     * Gets the {@code Offer} schema.
     *
     * @return {@link String} containing the {@link Offer} schema.
     */
    public String getSchema() {...}

    /**
     * Gets the {@code Offer} metadata.
     *
     * @return {@code Map<String, Object>} containing the {@link Offer} metadata.
     */
    public Map<String, Object> getMeta() {...}

    /**
     * Gets the {@code Offer} type.
     *
     * @return {@link OfferType} indicating the {@link Offer} type.
     */
    public OfferType getType() {...}

    /**
     * Gets the {@code Offer} language.
     *
     * @return {@code List<String>} containing the supported {@link Offer} language.
     */
    public List<String> getLanguage() {...}

    /**
     * Gets the {@code Offer} content.
     *
     * @return {@link String} containing the {@link Offer} content.
     */
    public String getContent() {...}

    /**
     * Gets the {@code Offer} characteristics.
     *
     * @return {@code Map<String, String>} containing the {@link Offer} characteristics.
     */
    public Map<String, String> getCharacteristics() {...}

    /**
     * Gets the containing {@code OptimizeProposition} for this {@code Offer}.
     *
     * @return {@link OptimizeProposition} instance.
     */
    public OptimizeProposition getProposition() {...}

    /**
     * Dispatches an event for the Edge network extension to send an Experience Event to the Edge network with the display interaction data for the
     * given {@code OptimizeProposition} offer.
     */
    public void displayed() {...}

    /**
     * Dispatches an event for the Edge network extension to send an Experience Event to the Edge network with the tap interaction data for the
     * given {@code OptimizeProposition} offer.
     */
    public void tapped() {...}

    /**
     * Generates a map containing XDM formatted data for {@code Experience Event - Proposition Interactions} field group from this {@code OptimizeProposition} item.
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
     * Generates a map containing XDM formatted data for {@code Experience Event - Proposition Interactions} field group from this {@code OptimizeProposition} offer.
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

<Variant platform="ios" api="offer" repeat="4"/>

#### Swift

```swift
/// `Offer` class
@objc(AEPOffer)
public class Offer: NSObject, Codable {
    /// Unique Offer identifier
    @objc public let id: String

    /// Offer revision detail at the time of the request
    @objc public let etag: String

    /// Offer priority score
    @objc public let score: Double

    /// Offer schema string
    @objc public let schema: String

    /// Offer metadata
    @objc public let meta: [String: Any]?
    
    /// Offer type as represented in enum `OfferType`
    @objc public let type: OfferType

    /// Optional Offer language array
    @objc public let language: [String]?

    /// Offer content string
    @objc public let content: String

    /// Optional Offer characteristics dictionary
    @objc public let characteristics: [String: String]?
}
```

The `Offer` class extension provides methods for generating XDM data for Proposition Interactions field group which can be used for proposition tracking. It also contains direct methods for tracking proposition display and tap interactions.

```swift
/// `Offer` extension
@objc
public extension Offer {
    /// Creates a dictionary containing XDM formatted data for `Experience Event - Proposition Interactions` field group from the given proposition option.
    ///
    /// The Edge `sendEvent(experienceEvent:_:)` API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, or override dataset identifier.
    /// If the proposition reference within the option is released and no longer valid, the method returns `nil`.
    ///
    /// - Note: The returned XDM data also contains the `eventType` for the Experience Event with value `decisioning.propositionDisplay`.
    /// - Returns A dictionary containing XDM data for the proposition interactions.
    func generateDisplayInteractionXdm() -> [String: Any]? {...}

    /// Creates a dictionary containing XDM formatted data for `Experience Event - Proposition Interactions` field group from the given proposition option.
    ///
    /// The Edge `sendEvent(experienceEvent:_:)` API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, or override dataset identifier.
    /// If the proposition reference within the option is released and no longer valid, the method returns `nil`.
    ///
    /// - Note: The returned XDM data also contains the `eventType` for the Experience Event with value `decisioning.propositionInteract`.
    /// - Returns A dictionary containing XDM data for the proposition interactions.
    func generateTapInteractionXdm() -> [String: Any]? {...}

    /// Dispatches an event for the Edge extension to send an Experience Event to the Edge network with the display interaction data for the given proposition item.
    func displayed() {...}

    /// Dispatches an event for the Edge extension to send an Experience Event to the Edge network with the tap interaction data for the given proposition item.
    func tapped() {...}
}
```

<Variant platform="android" api="offertype" repeat="2"/>

#### Java

```java
public enum OfferType {
    UNKNOWN, JSON, TEXT, HTML, IMAGE;

    @Override
    public String toString() {...}

    /**
     * Returns the {@code OfferType} for the given {@code format}.
     *
     * @param format {@link String} containing the {@link Offer} format.
     * @return {@link OfferType} indicating the {@code Offer} format.
     */
    public static OfferType from(final String format) {...}
}
```

<Variant platform="ios" api="offertype" repeat="2"/>

#### Swift

```swift
/// Enum representing the supported Offer Types.
public enum OfferType: Int, Codable {

    /// Unknown Offer type
    case unknown = 0

    /// JSON Offer
    case json = 1

    /// Plain text Offer
    case text = 2

    /// Html Offer
    case html = 3

    /// Image Offer
    case image = 4

    /// Initializes OfferType with the provided format string.
    /// - Parameter format: Offer format string
    init(from format: String) {...}
}
```

<Variant platform="android" api="offerutils" repeat="2"/>

#### Kotlin

```kotlin
object OfferUtils {
    /**
     * Dispatches an event for the Edge network extension to send an Experience Event to the Edge
     * network with the display interaction data for the given list of [Offer]s.
     *
     * This function extracts unique [OptimizeProposition]s from the list of offers based on their
     * proposition ID and dispatches an event with multiple propositions.
     *
     * @see XDMUtils.trackWithData
     */
    @JvmStatic
    fun List<Offer>.displayed() {...}

    /**
     * Generates a map containing XDM formatted data for `Experience Event - OptimizeProposition
     * Interactions` field group from the given list of [Offer]s.
     *
     * This function extracts unique [OptimizeProposition]s from the list of offers based on their
     * proposition ID and generates XDM data for the interaction.
     *
     * @return [Map] containing the XDM data for the proposition interaction, or null if the list is empty
     * or no valid propositions are found
     */
    @JvmStatic
    fun List<Offer>.generateDisplayInteractionXdm(): Map<String, Any>? {...}
}
```

<Variant platform="ios" api="optimize" repeat="2"/>

#### Swift

```swift
@objc
public extension Optimize {
    /// This API dispatches an event for the Edge extension to send an Experience Event to the Edge network with the display interaction data for list of offers passed.
    ///
    /// - Parameter offers: An array of offer.
    @objc(displayed:)
    static func displayed(for offers: [Offer]) {...}
}
```

<Variant platform="ios" api="optimizeerror" repeat="4"/>

#### Swift

Error details received from Edge response along with [AEPError](../../../home/base/mobile-core/tabs/api-reference/#aeperror) object returned with values:

* _AEPError.callbackTimeout_ is returned when request timeout without any response.
* _AEPError.serverErrors_ is returned for HTTP Status 500.
* _AEPError.invalidRequest_ is returned for HTTP Status 400 - 499 (except 408 and 429).

```swift
@objc(AEPOptimizeError)
public class AEPOptimizeError: NSObject, Error {
    // This is a URI reference (RFC3986) that identifies the problem type  
    public let type: String?

    // This is the HTTP status code generated by the server for this occurrence of the problem.
    public let status: Int?

    // This is a short, human-readable summary of the problem type.
    public let title: String?

    // This is human-readable description of the problem type.
    public let detail: String?

    // This is a map of additional properties that aid in debugging such as the request ID or the org ID. In some cases, it might contain data specific to the error at hand, such as a list of validation errors.
    public let report: [String: Any]?

    // This ia a mandatory AEPError representing the high level error status
    public var aepError = AEPError.unexpected

    // Initializer for AEPOptimizeError based based on the Error details returned by Edge respose
    public init(type: String?, status: Int?, title: String?, detail: String?, aepError: AEPError? = nil) {...}
}
```

<Variant platform="android" api="optimizeerror" repeat="4"/>

#### Kotlin

Error details received from Edge response along with [AdobeError](../../../home/base/mobile-core/tabs/api-reference/#adobeerror) object returned with values:

* _AdobeError.CALLBACK_TIMEOUT_ is returned when request timeout without any response.
* _AdobeError.SERVER_ERROR_ is returned for HTTP Status 500.
* _AdobeError.INVALID_REQUEST_ is returned for HTTP Status 400 - 499 (except 408 and 429).

```kotlin
class AEPOptimizeError(val type: String? = "",
                       val status: Int? = 0,
                       val title: String? = "", 
                       val detail: String? = "", 
                       var report: Map<String, Any>?, 
                       var adobeError: AdobeError?) {...}
```
