---
title: Places behavior reference
description: A reference for understanding how Places behaves under different scenarios.
keywords:
- Places
- Places behavior reference
- Product reference
---

# Places behavior reference

The Places extension provides three different point of interest (POI) states that can be interacted with using rules. This document explains general Places behavior, what states are available, and how states change through different scenarios.

## Terms

For definitions of key terms, see [Places Terminology](https://experienceleague.adobe.com/en/docs/places/using/home#terminology).

#### Library rank

A **library rank**, also referred to as **weight**, is the priority assigned to a library when multiple libraries are in use. A smaller rank value (for example, 1) indicates a higher priority, while a larger rank value (for example, 4) indicates a lower priority. This ranking is one of the factors used to determine which library’s points of interest (POIs) take precedence when overlaps occur.

#### Membership time to live

**Membership time to live** specifies how long POI states (Current POI, Last Entered POI, Last Exited POI) remain valid. This duration applies globally to all POIs and has a default value of one hour. The duration is refreshed in the following cases:

* On every POI entry or exit event.
* When calling [`getNearbyPointsOfInterest`](/src/pages/solution/places/api-reference.md#getnearbypointsofinterest).

To modify this value, use the `places.membershipttl` key. For additional details, see [Places configuration](/src/pages/solution/places/index.md#configuration-keys).

## Places states

There are three primary Places states: Current POI, Last Entered POI, and Last Exited POI. These states are also stored in device persistence and carry across app sessions. In a tags mobile property, rules can define Places conditions based on these states. Scenarios illustrating how these states change are provided in the [Scenarios](#scenarios) section.

### Current POI

When multiple POIs are simultaneously in the entered state, they are evaluated in the following order of precedence:

1. Library rank: Lower rank values represent higher priority.  
2. Radius: The POI with the smaller radius is prioritized.  
3. Most recent entry signal or closest POI: The evaluation depends on the API used:  
   * For [`processRegionEvent`](/src/pages/solution/places/api-reference.md#processregionevent), [`processGeofence`](/src/pages/solution/places/api-reference.md#processgeofence), and [`processGeofenceEvent`](/src/pages/solution/places/api-reference.md#processgeofenceevent), the POI associated with the most recent entry signal takes priority.  
   * For [`getNearbyPointsOfInterest`](/src/pages/solution/places/api-reference.md#getnearbypointsofinterest), the POI closest to the provided latitude and longitude takes priority.  

### Entered state

A POI is in the entered state when an entry signal is sent using the [`processRegionEvent`](/src/pages/solution/places/api-reference.md#processregionevent) API on iOS or the [`processGeofence`](/src/pages/solution/places/api-reference.md#processgeofence) and [`processGeofenceEvent`](/src/pages/solution/places/api-reference.md#processgeofenceevent) APIs on Android.
POIs remain in the entered state across app sessions until one of the following occurs:

1. An exit signal is sent for the POI using the [`processRegionEvent`](/src/pages/solution/places/api-reference.md#processregionevent) API on iOS or the [`processGeofence`](/src/pages/solution/places/api-reference.md#processgeofence) and [`processGeofenceEvent`](/src/pages/solution/places/api-reference.md#processgeofenceevent) APIs on Android.  
2. The membership time to live value expires.  
3. The entered state is recalculated for all received POIs using the lat/lon provided when calling the [`getNearbyPointsOfInterest`](/src/pages/solution/places/api-reference.md#getnearbypointsofinterest) API.  

Even with a correct geofence and Places API implementation, device operating systems may not provide geofence exit signals for various reasons, which can impact the final Places state.

### Last entered POI

The last entered POI represents the POI that was most recently entered, which is identified by receiving an entry signal. The expiration time for this value is determined by the [membership time to live](#membership-time-to-live).  

### Last exited POI

The last exited POI represents the POI that was most recently exited, which is identified by receiving an exit signal. The expiration time for this value is determined by the [membership time to live](#membership-time-to-live).  

## Scenarios

These scenarios assume that Places has been implemented to receive geofence entry and exit events from the mobile device operating system. In all cases, a Places event and a Places XDM Edge event are dispatched for the signal and POI provided to the [`processRegionEvent`](/src/pages/solution/places/api-reference.md#processregionevent) API on iOS or the [`processGeofence`](/src/pages/solution/places/api-reference.md#processgeofence) and [`processGeofenceEvent`](/src/pages/solution/places/api-reference.md#processgeofenceevent) APIs on Android.

The bolded POIs under each state indicate when a state is updated due to the location event at each step.

### Initial app state

The app starts in a clean state with no previous Places events or persistent storage values.

### Scenario: Non-intersecting points

#### Enter POI A

The user has entered the radius for POI A:  

* **Current POI** is set to POI A.  
* **Last Entered POI** is set to POI A.  
* **Last Exited POI** remains unchanged as none.  

<!-- 
Note for diagram maintainers:
The original draw.io source file which contains all diagram pages is also included with the assets to easily modify as needed and export in the desired format. 
- Exported as SVG with options:
- Size: Diagram
- Transparent background
- Appearance: Light (Dark mode is not currently supported, so dynamically switching SVGs perform worse.)
 -->
![](/src/pages/solution/places/assets/behavior-reference/non-intersecting-enter-A.svg)

#### Exit POI A

The user has exited the radius for POI A:  

* **Current POI** is set to none.  
* **Last Entered POI** remains unchanged as POI A.  
* **Last Exited POI** is set to POI A.  

![](/src/pages/solution/places/assets/behavior-reference/non-intersecting-exit-A.svg)

#### Enter POI B

The user has entered the radius for POI B:  

* **Current POI** is set to POI B.  
* **Last Entered POI** is set to POI B.  
* **Last Exited POI** remains unchanged as POI A.  

![](/src/pages/solution/places/assets/behavior-reference/non-intersecting-enter-B.svg)

### Scenario: Intersecting points

#### Enter POI A

The user has entered the radius for POI A:  

* **Current POI** is set to POI A.  
* **Last Entered POI** is set to POI A.  
* **Last Exited POI** remains unchanged as none.  

![](/src/pages/solution/places/assets/behavior-reference/intersecting-enter-A.svg)

#### Enter POI B

The user has entered the radius for POI B:  

* **Current POI** remains unchanged as POI A.  
  * This illustrates how library rankings influence the Current POI when multiple POIs are entered. Although POI B was most recently entered, POI A remains the Current POI due to its higher library ranking. Refer to [Current POI](#current-poi) for the complete list of criteria.  
* **Last Entered POI** is set to POI B.  
* **Last Exited POI** remains unchanged as none.  

![](/src/pages/solution/places/assets/behavior-reference/intersecting-enter-B.svg)

#### Exit POI A

The user has exited the radius for POI A:  

* **Current POI** is set to POI B.  
  * POI A is removed from the entered POIs list, while POI B remains. Notice that Current POI updates to POI B upon receiving an exit signal.  
* **Last entered POI** remains unchanged and is set to POI B.  
* **Last exited POI** is set to POI A.  

![](/src/pages/solution/places/assets/behavior-reference/intersecting-exit-A.svg)
