import Tabs from './tabs/migration.md'

# Migrating to AEPAnalytics

This document is a reference comparison of AEPAnalytics (3.x) APIs against their equivalent ACPAnalytics (2.x) APIs.

The AEPAnalytics extension is implemented purely in Swift and is compatible with the AEPCore Swift SDK. To ensure a smooth transition from the ACPAnalytics SDK, there are no major changes on the API names or definition. For more details, follow the migration guide below for your Swift or Objective-C mobile application. If explanation beyond showing API differences is necessary, it will be captured as an info hint within that API's section.

## AEPAnalytics classes

| Type | AEP 3.x (Swift) | AEP 3.x (Objective-C) | ACP 2.x (Objective-C) |
| :--- | :--- | :--- | :--- |
| Primary Class | Analytics | AEPMobileAnalytics | ACPAnalytics |

## AEPAnalytics APIs

### clearQueue

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=clear-queue"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=clear-queue"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=clear-queue"/>

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=extension-version"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=extension-version"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=extension-version"/>

### getQueueSize

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=get-queue-size"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=get-queue-size"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=get-queue-size"/>

### getTrackingIdentifier

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=get-tracking-identifier"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=get-tracking-identifier"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=get-tracking-identifier"/>

### getVisitorIdentifier

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=get-visitor-identifier"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=get-visitor-identifier"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=get-visitor-identifier"/>

### sendQueuedHits

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=send-queued-hits"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=send-queued-hits"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=send-queued-hits"/>

### setVisitorIdentifier

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=set-visitor-identifier"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=set-visitor-identifier"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=set-visitor-identifier"/>


