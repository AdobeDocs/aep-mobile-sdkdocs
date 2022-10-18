import Tabs from './tabs/migration.md'

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

<Tabs query="platform=aep-swift&api=extension-version"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=extension-version"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=extension-version"/>

### createTracker

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=create-tracker"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=create-tracker"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=create-tracker"/>

### createTrackerWithConfig

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=create-tracker-with-config"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=create-tracker-with-config"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=create-tracker-with-config"/>

### createMediaObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=create-media-object"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=create-media-object"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=create-media-object"/>

### createAdBreakObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=create-ad-break-object"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=create-ad-break-object"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=create-ad-break-object"/>

### createAdObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=create-ad-object"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=create-ad-object"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=create-ad-object"/>

### createChapterObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=create-chapter-object"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=create-chapter-object"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=create-chapter-object"/>

### createQoEObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=create-qoe-object"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=create-qoe-object"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=create-qoe-object"/>

### createStateObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=create-state-object"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=create-state-object"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=create-state-object"/>

## Media tracker API reference

### trackEvent

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=track-event"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=track-event"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=track-event"/>

### trackSessionStart

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=track-session-start"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=track-session-start"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=track-session-start"/>

### trackPlay

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=track-play"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=track-play"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=track-play"/>

### trackPause

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=track-pause"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=track-pause"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=track-pause"/>

### trackComplete

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=track-complete"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=track-complete"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=track-complete"/>

### trackSessionEnd

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=track-session-end"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=track-session-end"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=track-session-end"/>

### trackError

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=track-error"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=track-error"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=track-error"/>

### updateCurrentPlayhead

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=update-current-playhead"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=update-current-playhead"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=update-current-playhead"/>

### updateQoEObject

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=update-qoe-object"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=update-qoe-object"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=update-qoe-object"/>

## Media constants

### Media type

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=media-type"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=media-type"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=media-type"/>

### Stream type

<InlineAlert variant="info" slots="text"/>

For the full list of constant type, please refer to the [Media API reference](./api-reference.md#stream-type).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=stream-type"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=stream-type"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=stream-type"/>

### Standard video constants

<InlineAlert variant="info" slots="text"/>

For the full list of constant type, please refer to the [Media API reference](./api-reference.md#standard-video-constants).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=standard-video-constants"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=standard-video-constants"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=standard-video-constants"/>

### Standard audio constants

<InlineAlert variant="info" slots="text"/>

For the full list of constant type, please refer to the [Media API reference](./api-reference.md#standard-audio-constants).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=standard-audio-constants"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=standard-audio-constants"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=standard-audio-constants"/>

### Standard ad constants

<InlineAlert variant="info" slots="text"/>

For the full list of constant type, please refer to the [Media API reference](./api-reference.md#standard-ad-constants).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=standard-ad-constants"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=standard-ad-constants"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=standard-ad-constants"/>

### Player state constants

<InlineAlert variant="info" slots="text"/>

For the full list of constant type, please refer to the [Media API reference](./api-reference.md#player-state-constants).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=player-state-constants"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=player-state-constants"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=player-state-constants"/>

### Media events

<InlineAlert variant="info" slots="text"/>

For the full list of constant type, please refer to the [Media API reference](./api-reference.md#media-events).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=media-events"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=media-events"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=media-events"/>

### Media resume

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=media-resume"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=media-resume"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=media-resume"/>