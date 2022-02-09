import ClearQueueAEPSwift from './tabs/migration/clear-queue/aep-swift.md'
import ClearQueueAEPObjectiveC from './tabs/migration/clear-queue/aep-objective-c.md'
import ClearQueueACPObjectiveC from './tabs/migration/clear-queue/acp-objective-c.md'
import ExtensionVersionAEPSwift from './tabs/migration/extension-version/aep-swift.md'
import ExtensionVersionAEPObjectiveC from './tabs/migration/extension-version/aep-objective-c.md'
import ExtensionVersionACPObjectiveC from './tabs/migration/extension-version/acp-objective-c.md'
import GetQueueSizeAEPSwift from './tabs/migration/get-queue-size/aep-swift.md'
import GetQueueSizeAEPObjectiveC from './tabs/migration/get-queue-size/aep-objective-c.md'
import GetQueueSizeACPObjectiveC from './tabs/migration/get-queue-size/acp-objective-c.md'
import GetTrackingIdentifierAEPSwift from './tabs/migration/get-tracking-identifier/aep-swift.md'
import GetTrackingIdentifierAEPObjectiveC from './tabs/migration/get-tracking-identifier/aep-objective-c.md'
import GetTrackingIdentifierACPObjectiveC from './tabs/migration/get-tracking-identifier/acp-objective-c.md'
import GetVisitorIdentifierAEPSwift from './tabs/migration/get-visitor-identifier/aep-swift.md'
import GetVisitorIdentifierAEPObjectiveC from './tabs/migration/get-visitor-identifier/aep-objective-c.md'
import GetVisitorIdentifierACPObjectiveC from './tabs/migration/get-visitor-identifier/acp-objective-c.md'
import SendQueuedHitsAEPSwift from './tabs/migration/send-queued-hits/aep-swift.md'
import SendQueuedHitsAEPObjectiveC from './tabs/migration/send-queued-hits/aep-objective-c.md'
import SendQueuedHitsACPObjectiveC from './tabs/migration/send-queued-hits/acp-objective-c.md'
import SetVisitorIdentifierAEPSwift from './tabs/migration/set-visitor-identifier/aep-swift.md'
import SetVisitorIdentifierAEPObjectiveC from './tabs/migration/set-visitor-identifier/aep-objective-c.md'
import SetVisitorIdentifierACPObjectiveC from './tabs/migration/set-visitor-identifier/acp-objective-c.md'

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

#### AEP 3.x (Swift)

<ClearQueueAEPSwift/>

#### AEP 3.x (Objective-C)

<ClearQueueAEPObjectiveC/>

#### ACP 2.x (Objective-C)

<ClearQueueACPObjectiveC/>

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<ExtensionVersionAEPSwift/>

#### AEP 3.x (Objective-C)

<ExtensionVersionAEPObjectiveC/>

#### ACP 2.x (Objective-C)

<ExtensionVersionACPObjectiveC/>

### getQueueSize

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<GetQueueSizeAEPSwift/>

#### AEP 3.x (Objective-C)

<GetQueueSizeAEPObjectiveC/>

#### ACP 2.x (Objective-C)

<GetQueueSizeACPObjectiveC/>

### getTrackingIdentifier

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<GetTrackingIdentifierAEPSwift/>

#### AEP 3.x (Objective-C)

<GetTrackingIdentifierAEPObjectiveC/>

#### ACP 2.x (Objective-C)

<GetTrackingIdentifierACPObjectiveC/>

### getVisitorIdentifier

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<GetVisitorIdentifierAEPSwift/>

#### AEP 3.x (Objective-C)

<GetVisitorIdentifierAEPObjectiveC/>

#### ACP 2.x (Objective-C)

<GetVisitorIdentifierACPObjectiveC/>

### sendQueuedHits

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<SendQueuedHitsAEPSwift/>

#### AEP 3.x (Objective-C)

<SendQueuedHitsAEPObjectiveC/>

#### ACP 2.x (Objective-C)

<SendQueuedHitsACPObjectiveC/>

### setVisitorIdentifier

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<SetVisitorIdentifierAEPSwift/>

#### AEP 3.x (Objective-C)

<SetVisitorIdentifierAEPObjectiveC/>

#### ACP 2.x (Objective-C)

<SetVisitorIdentifierACPObjectiveC/>


