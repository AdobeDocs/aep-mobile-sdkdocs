import ExtensionVersionAEPSwift from './tabs/migration/extension-version/aep-swift.md'
import ExtensionVersionAEPObjectiveC from './tabs/migration/extension-version/aep-objective-c.md'
import ExtensionVersionACPObjectiveC from './tabs/migration/extension-version/acp-objective-c.md'

# Migrating to AEPSignal reference

This document is a reference comparison of AEPSignal (3.x) APIs against their equivalent ACPSignal (2.x) APIs.

The AEPSignal extension is implemented purely in Swift and is compatible with the AEPCore Swift SDK. To ensure a smooth transition from the ACPSignal SDK, there are no major changes on the API names or definitions. For more details, follow the migration guide below for your Swift or Objective-C mobile application. If explanation beyond showing API differences is necessary, it will be captured as an info hint within that API's section.

## Public classes

| Type | AEP 3.x (Swift) | AEP 3.x (Objective-C) | ACP 2.x (Objective-C) |
| :--- | :--- | :--- | :--- |
| Primary Class | Signal | AEPMobileSignal | ACPSignal |

## Public APIs

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<ExtensionVersionAEPSwift/>

AEP 3.x (Objective-C)

<ExtensionVersionAEPObjectiveC/>

ACP 2.x (Objective-C)

<ExtensionVersionACPObjectiveC/>
