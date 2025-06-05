---
noIndex: true
---

<Variant platform="android" api="get-propositions-for-surfaces" repeat="9"/>

#### Java

**Syntax**

```java
public static void getPropositionsForSurfaces(@NonNull final List<Surface> surfaces, @NonNull final AdobeCallback<Map<Surface, List<Proposition>>> callback)
```

* _surfaces_ is a list of surfaces for which propositions are requested.
* _callback_ `call` method is invoked with propositions map of type `Map<Surface, List<Proposition>>`. If the callback is an instance of [AdobeCallbackWithError](../../../../home/base/mobile-core/api-reference.md#adobecallbackwitherror), and if the operation times out or an error occurs in retrieving propositions, the `fail` method is invoked with the appropriate [AdobeError](../../../../home/base/mobile-core/api-reference.md#adobeerror).

**Example**

#### Kotlin

```kotlin
val surface1 = Surface("myActivity#button")
val surface2 = Surface("myActivityAttributes")
val surfaces = listOf(surface1, surface2)

Messaging.getPropositionsForSurfaces(surfaces) {
  it?.let { propositionsMap ->
    if (propositionsMap.isNotEmpty()) {
      // get the propositions for the given surfaces
      propositionsMap[surface1]?.let {
        // read surface1 propositions
      }
      propositionsMap[surface2]?.let {
        // read surface2 propositions
      }
    }
  }
}
```

#### Java

```java
final Surface surface1 = new Surface("myActivity#button");
final Surface surface2 = new Surface("myActivityAttributes");

final List<Surface> surfaces = new ArrayList<>();
surfaces.add(surface1);
surfaces.add(surface2);

Messaging.getPropositionsForSurfaces(surfaces, new AdobeCallbackWithError<Map<Surface, List<Proposition>>>() {
    @Override
    public void fail(final AdobeError adobeError) {
        // handle error
    }

    @Override
    public void call(Map<Surface, List<Proposition>> propositionsMap) {
        if (propositionsMap != null && !propositionsMap.isEmpty()) {
            // get the propositions for the given surfaces
            if (propositionsMap.contains(surface1)) {
                final List<Proposition> propositions1 = propositionsMap.get(surface1)
                // read surface1 propositions
            }
            if (propositionsMap.contains(surface2)) {
                final List<Proposition> proposition2 = propositionsMap.get(surface2)
                // read surface2 propositions
            }
        }
    }
});
```

<Variant platform="ios" api="get-propositions-for-surfaces" repeat="12"/>

#### Swift

**Syntax**

```swift
static func getPropositionsForSurfaces(_ surfacePaths: [Surface], _ completion: @escaping ([Surface: [Proposition]]?, Error?) -> Void)
```

* _surfaces_ is an array of surfaces for which propositions are requested.
* _completion_ is invoked with propositions dictionary of type `[Surface: [Proposition]]`. An `Error` is returned if SDK fails to retrieve the propositions.

**Example**

```swift
let surface1 = Surface(path: "myView#button")
let surface2 = Surface(path: "myViewAttributes")

Messaging.getPropositionsForSurfaces([surface1, surface2]) { propositionsDict, error in
    guard error == nil else {
        // handle error
        return
    }

    guard let propositionsDict = propositionsDict else {
        // bail early if no propositions
        return
    }
    
    // get the propositions for the given surfaces
    if let propositions1 = propositionsDict[surface1] {
        // read surface1 propositions
    }

    if let propositions2 = propositionsDict[surface2] {
        // read surface2 propositions
    }
}
```

#### Objective-C

**Syntax**

```objc
+ (void) getPropositionsForSurfaces: (NSArray<AEPSurface*>* _Nonnull) surfaces 
              completion: (void (^ _Nonnull)(NSDictionary<AEPSurface*, NSArray<AEPProposition*>*>* _Nullable propositionsDict, NSError* _Nullable error)) completion;
```

* _surfaces_ is an array of surfaces for which propositions are requested.
* _completion_ is invoked with propositions dictionary of type `NSDictionary<AEPSurface*, NSArray<AEPProposition*>*>`. An `NSError` is returned if SDK fails to retrieve the propositions.

**Example**

```objc
AEPSurface* surface1 = [[AEPSurface alloc] initWithPath: @"myView#button"];
AEPSurface* surface2 = [[AEPSurface alloc] initWithPath: @"myView#button"];

[AEPMobileMessaging getPropositionsForSurfaces: @[surface1, surface2] 
                        completion: ^(NSDictionary<AEPDecisionScope*, NSArray<AEPProposition*>*>* propositionsDict, NSError* error) {
  if (error != nil) {
    // handle error   
    return;
  }

  NSArray<AEPProposition*>* proposition1 = propositionsDict[surface1];
  // read surface1 propositions

  NSArray<AEPProposition*>* proposition2 = propositionsDict[surface2];
  // read surface2 propositions
}];
```

<Variant platform="android" api="update-propositions-for-surfaces" repeat="9"/>

#### Java

**Syntax**

```java
public static void updatePropositionsForSurfaces(@NonNull final List<Surface> surfaces)
```

* _surfaces_ is a list of surfaces for which propositions need updating.

**Example**

#### Kotlin

```kotlin
val surface1 = Surface("myActivity#button")
val surface2 = Surface("myActivityAttributes")
val surfaces = listOf(surface1, surface2)

Messaging.updatePropositionsForSurfaces(surfaces)
```

#### Java

```java
final Surface surface1 = new Surface("myActivity#button");
final Surface surface2 = new Surface("myActivityAttributes");

final List<Surface> surfaces = new ArrayList<>();
surfaces.add(surface1);
surfaces.add(surface2);

Messaging.updatePropositionsForSurfaces(surfaces)
```

<Variant platform="ios" api="update-propositions-for-surfaces" repeat="12"/>

#### Swift

**Syntax**

```swift
static func updatePropositionsForSurfaces(_ surfaces: [Surface])
```

* _surfaces_ is an array of surfaces for which propositions need updating.

**Example**

```swift
let surface1 = Surface(path: "myView#button")
let surface2 = Surface(path: "myViewAttributes")

Messaging.updatePropositionsForSurfaces([surface1, surface2])
```

#### Objective-C

**Syntax**

```objc
+ (void) updatePropositionsForSurfaces: (NSArray<AEPSurface*>* _Nonnull) surfaces;
```

* _surfaces_ is an array of surfaces for which propositions need updating.

**Example**

```objc
AEPSurface* surface1 = [[AEPSurface alloc] initWithPath: @"myView#button"];
AEPSurface* surface2 = [[AEPSurface alloc] initWithPath: @"myView#button"];

[AEPMobileMessaging updatePropositionsForSurfaces: @[surface1, surface2]]; 
```

<Variant platform="android" api="update-propositions-for-surfaces-with-completion-handler" repeat="9"/>

#### Java

**Syntax**

```java
public static void updatePropositionsForSurfaces(@NonNull final List<Surface> surfaces, @Nullable final AdobeCallback<Boolean> callback)
```

* _surfaces_ is a list of surfaces for which propositions need updating.
* _callback_ `call` method is invoked with `true` if a network response was returned and successfully processed, `false` otherwise

**Example**

#### Kotlin

```kotlin
val surface1 = Surface("myActivity#button")
val surface2 = Surface("myActivityAttributes")
val surfaces = listOf(surface1, surface2)

Messaging.updatePropositionsForSurfaces(surfaces) { success ->
    if (success) {
        // handle success scenario
    } else {
        // handle error scenario
    }
}
```

#### Java

```java
final Surface surface1 = new Surface("myActivity#button");
final Surface surface2 = new Surface("myActivityAttributes");

final List<Surface> surfaces = new ArrayList<>();
surfaces.add(surface1);
surfaces.add(surface2);

Messaging.updatePropositionsForSurfaces(surfaces, success -> {
    if (success) {
        // handle success scenario
    } else {
        // handle error scenario
    }
});
```

<Variant platform="ios" api="update-propositions-for-surfaces-with-completion-handler" repeat="12"/>

#### Swift

**Syntax**

```swift
static func updatePropositionsForSurfaces(_ surfaces: [Surface], _ completion: ((Bool) -> Void)? = nil)
```

* _surfaces_ is an array of surfaces for which propositions need updating.
* _completion_ is invoked with `true` if a network response was returned and successfully processed, `false` otherwise

**Example**

```swift
let surface1 = Surface(path: "myView#button")
let surface2 = Surface(path: "myViewAttributes")

Messaging.updatePropositionsForSurfaces([surface1, surface2]) { success in
    if success {
        // handle success scenario
    } else {
        // handle error scenario
    }
}
```

#### Objective-C

**Syntax**

```objc
+ (void) updatePropositionsForSurfaces: (NSArray<AEPSurface*>* _Nonnull) surfaces
                            completion: (void (^)(BOOL)) completion;
```

* _surfaces_ is an array of surfaces for which propositions need updating.
* _completion_ is invoked with `true` if a network response was returned and successfully processed, `false` otherwise

**Example**

```objc
AEPSurface* surface1 = [[AEPSurface alloc] initWithPath: @"myView#button"];
AEPSurface* surface2 = [[AEPSurface alloc] initWithPath: @"myViewAttributes"];

[AEPMobileMessaging updatePropositionsForSurfaces:@[surface1, surface2] completion:^(BOOL success) {
    if (success) {
        // handle success scenario
    } else {
        // handle error scenario
    }
}];
```
