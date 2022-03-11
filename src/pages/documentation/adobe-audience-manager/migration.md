import ExtensionVersionAEPSwift from './tabs/migration/extension-version/aep-swift.md'
import ExtensionVersionAEPObjectiveC from './tabs/migration/extension-version/aep-objective-c.md'
import ExtensionVersionACPObjectiveC from './tabs/migration/extension-version/acp-objective-c.md'
import GetVisitorProfileAEPSwift from './tabs/migration/get-visitor-profile/aep-swift.md'
import GetVisitorProfileAEPObjectiveC from './tabs/migration/get-visitor-profile/aep-objective-c.md'
import GetVisitorProfileACPObjectiveC from './tabs/migration/get-visitor-profile/acp-objective-c.md'
import ResetAEPSwift from './tabs/migration/reset/aep-swift.md'
import ResetAEPObjectiveC from './tabs/migration/reset/aep-objective-c.md'
import ResetACPObjectiveC from './tabs/migration/reset/acp-objective-c.md'
import SignalWithDataAEPSwift from './tabs/migration/signal-with-data/aep-swift.md'
import SignalWithDataAEPObjectiveC from './tabs/migration/signal-with-data/aep-objective-c.md'
import SignalWithDataACPObjectiveC from './tabs/migration/signal-with-data/acp-objective-c.md'

# Migrating to AEPAudience

This document is a reference comparison of AEPAudience (3.x) APIs against their equivalent ACPAudience (2.x) APIs.

The AEPAudience extension is implemented purely in Swift and is compatible with the AEPCore Swift SDK. To ensure a smooth transition from the ACPAudience SDK, there are no major changes on the API names or definition. For more details, follow the migration guide below for your Swift or Objective-C mobile application. If explanation beyond showing API differences is necessary, it will be captured as an info hint within that API's section.

## AEPAudience classes

| Type | AEP 3.x (Swift) | AEP 3.x (Objective-C) | ACP 2.x (Objective-C) |
| :--- | :--- | :--- | :--- |
| Primary Class | Audience | AEPMobileAudience | ACPAudience |

## AEPAudience APIs

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<ExtensionVersionAEPSwift/>

#### AEP 3.x (Objective-C)

<ExtensionVersionAEPObjectiveC/>

#### ACP 2.x (Objective-C)

<ExtensionVersionACPObjectiveC/>

### getVisitorProfile

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<GetVisitorProfileAEPSwift/>

#### AEP 3.x (Objective-C)

<GetVisitorProfileAEPObjectiveC/>

#### ACP 2.x (Objective-C)

<GetVisitorProfileACPObjectiveC/>

### reset

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<ResetAEPSwift/>

#### AEP 3.x (Objective-C)

<ResetAEPObjectiveC/>

#### ACP 2.x (Objective-C)

<ResetACPObjectiveC/>

### signalWithData

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<SignalWithDataAEPSwift/>

#### AEP 3.x (Objective-C)

<SignalWithDataAEPObjectiveC/>

#### ACP 2.x (Objective-C)

<SignalWithDataACPObjectiveC/>


