# Migrating to AEPMedia reference

This document is a reference comparison of AEPMedia (3.x) APIs against their equivalent ACPMedia (2.x) APIs.

The AEPMedia extension is implemented purely in Swift and is compatible with the AEPCore Swift SDK. To ensure a smooth transition from the ACPMedia SDK, there are no major changes on the API names or definition. For more details, follow the migration guide below for your Swift or Objective-C mobile application. If explanation beyond showing API differences is necessary, it will be captured as an info hint within that API's section.

## AEPMedia classes

| Type | AEP 3.x (Swift) | AEP 3.x (Objective-C) | ACP 2.x (Objective-C) |
| :--- | :--- | :--- | :--- |
| Primary Class | Media | AEPMobileMedia | ACPMedia |

## AEPMedia APIs

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<ExtensionVersionAEPSwift/>

AEP 3.x (Objective-C)

<ExtensionVersionAEPObjectiveC/>

ACP 2.x (Objective-C)

<ExtensionVersionACPObjectiveC/>

### createTracker

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<CreateTrackerAEPSwift/>

AEP 3.x (Objective-C)

<CreateTrackerAEPObjectiveC/>

ACP 2.x (Objective-C)

<CreateTrackerACPObjectiveC/>

### createTrackerWithConfig

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<CreateTrackerWithConfigAEPSwift/>

AEP 3.x (Objective-C)

<CreateTrackerWithConfigAEPObjectiveC/>

ACP 2.x (Objective-C)

<CreateTrackerWitHConfigACPObjectiveC/>

### createMediaObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<CreateMediaObjectAEPSwift/>

AEP 3.x (Objective-C)

<CreateMediaObjectAEPObjectiveC/>

ACP 2.x (Objective-C)

<CreateMediaObjectACPObjectiveC/>

### createAdBreakObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<CreateAdBreakObjectAEPSwift/>

AEP 3.x (Objective-C)

<CreateAdBreakObjectAEPObjectiveC/>

ACP 2.x (Objective-C)

<CreateAdBreakObjectACPObjectiveC/>

### createAdObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<CreateAdObjectAEPSwift/>

AEP 3.x (Objective-C)

<CreateAdObjectAEPObjectiveC/>

ACP 2.x (Objective-C)

<CreateAdObjectACPObjectiveC/>

### createChapterObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<CreateChapterObjectAEPSwift/>

AEP 3.x (Objective-C)

<CreateChapterObjectAEPObjectiveC/>

ACP 2.x (Objective-C)

<CreateChapterObjectACPObjectiveC/>

### createQoEObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<CreateQoeObjectAEPSwift/>

AEP 3.x (Objective-C)

<CreateQoeObjectAEPObjectiveC/>

ACP 2.x (Objective-C)

<CreateQoeObjectACPObjectiveC/>

### createStateObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<CreateStateObjectAEPSwift/>

AEP 3.x (Objective-C)

<CreateStateObjectAEPObjectiveC/>

ACP 2.x (Objective-C)

<CreateStateObjectACPObjectiveC/>

## Media tracker API reference

### trackEvent

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<TrackEventAEPSwift/>

AEP 3.x (Objective-C)

<TrackEventAEPObjectiveC/>

ACP 2.x (Objective-C)

<TrackEventACPObjectiveC/>

### trackSessionStart

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<TrackSessionStartAEPSwift/>

AEP 3.x (Objective-C)

<TrackSessionStartAEPObjectiveC/>

ACP 2.x (Objective-C)

<TrackSessionStartACPObjectiveC/>

### trackPlay

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<TrackPlayAEPSwift/>

AEP 3.x (Objective-C)

<TrackPlayAEPObjectiveC/>

ACP 2.x (Objective-C)

<TrackPlayACPObjectiveC/>

### trackPause

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<TrackPauseAEPSwift/>

AEP 3.x (Objective-C)

<TrackPauseAEPObjectiveC/>

ACP 2.x (Objective-C)

<TrackPauseACPObjectiveC/>

### trackComplete

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<TrackCompleteAEPSwift/>

AEP 3.x (Objective-C)

<TrackCompleteAEPObjectiveC/>

ACP 2.x (Objective-C)

<TrackCompleteACPObjectiveC/>

### trackSessionEnd

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<TrackSessionEndAEPSwift/>

AEP 3.x (Objective-C)

<TrackSessionEndAEPObjectiveC/>

ACP 2.x (Objective-C)

<TrackSessionEndACPObjectiveC/>

### trackError

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<TrackErrorAEPSwift/>

AEP 3.x (Objective-C)

<TrackErrorAEPObjectiveC/>

ACP 2.x (Objective-C)

<TrackErrorACPObjectiveC/>

### updateCurrentPlayhead

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<UpdateCurrentPlayheadAEPSwift/>

AEP 3.x (Objective-C)

<UpdateCurrentPlayheadAEPObjectiveC/>

ACP 2.x (Objective-C)

<UpdateCurrentPlayheadACPObjectiveC/>

### updateQoEObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<UpdateQoeObjectAEPSwift/>

AEP 3.x (Objective-C)

<UpdateQoeObjectAEPObjectiveC/>

ACP 2.x (Objective-C)

<UpdateQoeObjectACPObjectiveC/>

## Media constants

### Media type

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<MediaTypeAEPSwift/>

AEP 3.x (Objective-C)

<MediaTypeAEPObjectiveC/>

ACP 2.x (Objective-C)

<MediaTypeACPObjectiveC/>

### Stream type

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<StreamTypeAEPSwift/>

AEP 3.x (Objective-C)

<StreamTypeAEPObjectiveC/>

ACP 2.x (Objective-C)

<StreamTypeACPObjectiveC/>

<InlineAlert variant="info" slots="text"/>

For the full list of constant type, please refer to the [Media API reference]((api-reference.md#stream-type)).

### Standard video constants

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<StandardVideoConstantsAEPSwift/>

<InlineAlert variant="info" slots="text"/>

For the full list of constant type, please refer to the [Media API reference](./api-reference.md#standard-video-constants).

### Standard audio constants

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<StandardAudioConstantsAEPSwift/>

AEP 3.x (Objective-C)

<StandardAudioConstantsAEPObjectiveC/>

ACP 2.x (Objective-C)

<StandardAudioConstantsACPObjectiveC/>

<InlineAlert variant="info" slots="text"/>

For the full list of constant type, please refer to the [Media API reference](./api-reference.md#standard-audio-constants).

### Standard ad constants

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<StandardAdConstantsAEPSwift/>

AEP 3.x (Objective-C)

<StandardAdConstantsAEPObjectiveC/>

ACP 2.x (Objective-C)

<StandardAdConstantsACPObjectiveC/>

<InlineAlert variant="info" slots="text"/>

For the full list of constant type, please refer to the [Media API reference](./api-reference.md#standard-ad-constants).

### Player state constants

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<PlayerStateConstantsAEPSwift/>

AEP 3.x (Objective-C)

<PlayerStateConstantsAEPObjectiveC/>

ACP 2.x (Objective-C)

<PlayerStateConstantsACPObjectiveC/>

<InlineAlert variant="info" slots="text"/>

For the full list of constant type, please refer to the [Media API reference](./api-reference.md#player-state-constants).

### Media events

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<MediaEventsAEPSwift/>

AEP 3.x (Objective-C)

<MediaEventsAEPObjectiveC/>

ACP 2.x (Objective-C)

<MediaEventsACPObjectiveC/>

<InlineAlert variant="info" slots="text"/>

For the full list of constant type, please refer to the [Media API reference](./api-reference.md#media-events).

### Media resume

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<MediaResumeAEPSwift/>

AEP 3.x (Objective-C)

<MediaResumeAEPObjectiveC/>

ACP 2.x (Objective-C)

<MediaResumeACPObjectiveC/>