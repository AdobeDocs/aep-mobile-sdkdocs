---
title: Places behavior reference
description: A reference for understanding how Places behaves under different scenarios.
keywords:
- Places
- Places behavior reference
- Product reference
---

# Places behavior reference

The Places extension provides three different point of interest (POI) states that can be interacted with using rules. This document explains what states are available and how they change through different scenarios.

## Terms

For definitions of key terms, see [Places Terminology](https://experienceleague.adobe.com/en/docs/places/using/home#terminology).

A library **rank** (also sometimes known as **weight**) is the priority assigned to a library when multiple libraries are used. A lower rank value (ex: 1) represents higher priority, while a higher rank value (ex: 4) represents lower priority. This ranking determines which library’s POIs take precedence in cases of overlap.

## Places rules conditions

In a tags mobile property, rules can define Places conditions based on the following states: Current POI, Last Entered POI, and Last Exited POI. Scenarios illustrating how these states change are provided in the [Scenarios](#scenarios) section.

### Current POI

When multiple POIs are entered simultaneously, they are evaluated in the following order of precedence:

1. Library rank, where the lower the rank, the higher the priority.  
2. Radius, where the POI with the smaller radius takes priority. 
3. The POI for which the entry was signaled (that is, the most recently entered POI). 

### Current POI

When multiple POIs are simultaneously in the entered state, they are evaluated in the following order of precedence:

1. Library rank: Lower rank values represent higher priority.  
2. Radius: The POI with the smaller radius is prioritized.  
3. Entry signal: The POI associated with the most recent entry signal takes priority.  

### Entered state

POIs remain in the entered state across app sessions until one of the following occurs:

1. An exit signal is sent for the POI using the [`processRegionEvent`](/src/pages/solution/places/api-reference.md#processregionevent) API on iOS or the [`processGeofence`](/src/pages/solution/places/api-reference.md#processgeofence) and [`processGeofenceEvent`](/src/pages/solution/places/api-reference.md#processgeofenceevent) APIs on Android.  
2. The entered state is recalculated for all POIs by calling the [`getNearbyPointsOfInterest`](/src/pages/solution/places/api-reference.md#getnearbypointsofinterest) API.

### Last entered POI

This refers to the most recently entered POI.  
- There is no expiration time for this value. It remains unchanged across app sessions until an entry event updates it.

### Last exited POI

This refers to the most recently exited POI.  
- There is no expiration time for this value. It remains unchanged across app sessions until an exit event updates it.

## Scenarios

These scenarios assume that Places has been implemented to receive geofence entry and exit events from the operating system. In all cases, a Places event and a Places XDM Edge event are dispatched for the signal and POI provided to the [`processRegionEvent`](/src/pages/solution/places/api-reference.md#processregionevent) API on iOS or the [`processGeofence`](/src/pages/solution/places/api-reference.md#processgeofence) and [`processGeofenceEvent`](/src/pages/solution/places/api-reference.md#processgeofenceevent) APIs on Android.

The bolded POIs under each state indicate when a state is updated due to the location event at each step.

### Initial app state

The app starts in a clean state with no previous Places events or persistent storage values.

### Scenario: Non-intersecting points

#### Enter POI A

The user has entered the radius for POI A:  
- **Current POI** is set to POI A.  
- **Last Entered POI** is set to POI A.  
- **Last Exited POI** remains unchanged as none.  

<!-- 
Note for diagram maintainers:
The original draw.io source files are also included with the assets to easily modify as needed and export in the desired format. 
- Exported as SVG with options:
- Size: Diagram
- Transparent background
- Appearance: Light
 -->
![](/src/pages/solution/places/assets/behavior-reference/non-intersecting-enter-A.svg)

#### Exit POI A

The user has exited the radius for POI A:  
- **Current POI** is set to none.  
- **Last Entered POI** remains unchanged as POI A.  
- **Last Exited POI** is set to POI A.  

![](/src/pages/solution/places/assets/behavior-reference/non-intersecting-exit-A.svg)

#### Enter POI B

The user has entered the radius for POI B:  
- **Current POI** is set to POI B.  
- **Last Entered POI** is set to POI B.  
- **Last Exited POI** remains unchanged as POI A.  

![](/src/pages/solution/places/assets/behavior-reference/non-intersecting-enter-B.svg)

### Scenario: Intersecting points

#### Enter POI A

The user has entered the radius for POI A:  
- **Current POI** is set to POI A.  
- **Last Entered POI** is set to POI A.  
- **Last Exited POI** remains unchanged as none.  

![](/src/pages/solution/places/assets/behavior-reference/intersecting-enter-A.svg)

#### Enter POI B

The user has entered the radius for POI B:  
- **Current POI** remains unchanged as POI A.  
  - This demonstrates how library rankings determine the Current POI when multiple POIs are entered. Although POI B was most recently entered, POI A remains the Current POI due to its higher library ranking.  
- **Last Entered POI** is set to POI B.  
- **Last Exited POI** remains unchanged as none.  

![](/src/pages/solution/places/assets/behavior-reference/intersecting-enter-B.svg)

#### Exit POI A

The user has exited the radius for POI A:  
- **Current POI** is set to POI B.  
- **Last Entered POI** remains unchanged as POI B.  
- **Last Exited POI** is set to POI A.  

![](/src/pages/solution/places/assets/behavior-reference/intersecting-exit-A.svg)