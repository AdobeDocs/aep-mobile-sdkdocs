---
title: Code-based Experiences & Content Cards - API Reference
description: This document lists the public APIs available in the Messaging extension for implementing code-based experiences and content cards.
keywords:
- Adobe Journey Optimizer
- API reference
- Messaging
- Code-based Experiences
- Content Cards
---

# Code-based Experiences & Content Cards - API reference

This document lists the public APIs available in the Messaging extension for implementing code-based experiences and content cards.

## getPropositionsForSurfaces

The `getPropositionsForSurfaces` API retrieves the previously fetched propositions from the SDK's in-memory propositions cache for the provided surfaces. The completion handler is invoked with the decision propositions corresponding to the given surfaces or `AEPError`, if it occurs.

If a requested surface was not previously cached prior to calling `getPropositionsForSurfaces` (using the `updatePropositionsForSurfaces` API), no propositions will be returned for that surface.

### Android Java

* _surfaces_ is a list of surfaces for which propositions are requested.
* _callback_ `call` method is invoked with propositions map of type `Map<Surface, List<Proposition>>`. If the callback is an instance of [AdobeCallbackWithError](../../../home/base/mobile-core/api-reference.md#adobecallbackwitherror), and if the operation times out or an error occurs in retrieving propositions, the `fail` method is invoked with the appropriate [AdobeError](../../../home/base/mobile-core/api-reference.md#adobeerror).

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

```java
public static void getPropositionsForSurfaces(@NonNull final List<Surface> surfaces, @NonNull final AdobeCallback<Map<Surface, List<Proposition>>> callback)
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

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

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Example

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

### iOS Swift

* _surfaces_ is an array of surfaces for which propositions are requested.
* _completion_ is invoked with propositions dictionary of type `[Surface: [Proposition]]`. An `Error` is returned if SDK fails to retrieve the propositions.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func getPropositionsForSurfaces(_ surfacePaths: [Surface], _ completion: @escaping ([Surface: [Proposition]]?, Error?) -> Void)
```

#### Example

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

### iOS Objective-C

* _surfaces_ is an array of surfaces for which propositions are requested.
* _completion_ is invoked with propositions dictionary of type `NSDictionary<AEPSurface*, NSArray<AEPProposition*>*>`. An `NSError` is returned if SDK fails to retrieve the propositions.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) getPropositionsForSurfaces: (NSArray<AEPSurface*>* _Nonnull) surfaces 
              completion: (void (^ _Nonnull)(NSDictionary<AEPSurface*, NSArray<AEPProposition*>*>* _Nullable propositionsDict, NSError* _Nullable error)) completion;
```

#### Example

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

## updatePropositionsForSurfaces

The `updatePropositionsForSurfaces` API dispatches an event for the Edge network extension to fetch personalization decisions from the AJO campaigns for the provided surfaces array. The returned decision propositions are cached in-memory by the Messaging extension.

To retrieve previously cached decision propositions, use `getPropositionsForSurfaces` API.

### Android Java

* _surfaces_ is a list of surfaces for which propositions need updating.

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

```java
public static void updatePropositionsForSurfaces(@NonNull final List<Surface> surfaces)
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
val surface1 = Surface("myActivity#button")
val surface2 = Surface("myActivityAttributes")
val surfaces = listOf(surface1, surface2)

Messaging.updatePropositionsForSurfaces(surfaces)
```

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
final Surface surface1 = new Surface("myActivity#button");
final Surface surface2 = new Surface("myActivityAttributes");

final List<Surface> surfaces = new ArrayList<>();
surfaces.add(surface1);
surfaces.add(surface2);

Messaging.updatePropositionsForSurfaces(surfaces)
```

### iOS Swift

* _surfaces_ is an array of surfaces for which propositions need updating.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func updatePropositionsForSurfaces(_ surfaces: [Surface])
```

#### Example

```swift
let surface1 = Surface(path: "myView#button")
let surface2 = Surface(path: "myViewAttributes")

Messaging.updatePropositionsForSurfaces([surface1, surface2])
```

### iOS Objective-C

* _surfaces_ is an array of surfaces for which propositions need updating.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) updatePropositionsForSurfaces: (NSArray<AEPSurface*>* _Nonnull) surfaces;
```

#### Example

```objc
AEPSurface* surface1 = [[AEPSurface alloc] initWithPath: @"myView#button"];
AEPSurface* surface2 = [[AEPSurface alloc] initWithPath: @"myView#button"];

[AEPMobileMessaging updatePropositionsForSurfaces: @[surface1, surface2]]; 
```

## updatePropositionsForSurfacesWithCompletionHandler

The `updatePropositionsForSurfaces` API dispatches an event for the Edge network extension to fetch personalization decisions from the AJO campaigns for the provided surfaces array. The returned decision propositions are cached in-memory by the Messaging extension.

If provided, `completion` will be called on the Messaging extension's background thread once the response has been fully processed. `true` will be passed to the `completion` method if a network response was returned and successfully processed.

To retrieve previously cached decision propositions, use `getPropositionsForSurfaces` API.

### Android Java

* _surfaces_ is a list of surfaces for which propositions need updating.
* _callback_ `call` method is invoked with `true` if a network response was returned and successfully processed, `false` otherwise

<CodeBlock slots="heading, code" repeat="1" />

#### Syntax

```java
public static void updatePropositionsForSurfaces(@NonNull final List<Surface> surfaces, @Nullable final AdobeCallback<Boolean> callback)
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

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

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Example

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

### iOS Swift

* _surfaces_ is an array of surfaces for which propositions need updating.
* _completion_ is invoked with `true` if a network response was returned and successfully processed, `false` otherwise

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func updatePropositionsForSurfaces(_ surfaces: [Surface], _ completion: ((Bool) -> Void)? = nil)
```

#### Example

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

### iOS Objective-C

* _surfaces_ is an array of surfaces for which propositions need updating.
* _completion_ is invoked with `true` if a network response was returned and successfully processed, `false` otherwise

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) updatePropositionsForSurfaces: (NSArray<AEPSurface*>* _Nonnull) surfaces
                            completion: (void (^)(BOOL)) completion;
```

#### Example

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
