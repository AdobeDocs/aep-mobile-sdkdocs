---
noIndex: true
---

import Tabs from './tabs/messaging-edge-event-type.md'

# Enum - MessagingEdgeEventType

Provides mapping to XDM EventType strings needed for Experience Event requests.

This enum is used in conjunction with the [`track(_:withEdgeEventType:)`](./message.md#track_withedgeeventtype) method of a `Message` object.

## Definition

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=enum"/>

iOS

<Tabs query="platform=ios&function=enum"/>

## String values

Below is the table of values returned by calling the `toString` method for each case, which are used as the XDM `eventType` in outgoing experience events:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=string-values"/>

iOS

<Tabs query="platform=ios&function=string-values"/>
