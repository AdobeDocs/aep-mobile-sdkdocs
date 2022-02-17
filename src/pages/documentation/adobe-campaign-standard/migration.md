import ExtensionVersionAEPSwift from './tabs/migration/extension-version/swift-aep.md'
import ExtensionVersionACPObjectiveC from './tabs/migration/extension-version/objective-c-acp.md'
import ExtensionVersionAEPObjectiveC from './tabs/migration/extension-version/objective-c-aep.md'
import RegisterExtensionAEPSwift from './tabs/migration/register-extension/swift-aep.md'
import RegisterExtensionACPObjectiveC from './tabs/migration/register-extension/objective-c-acp.md'
import RegisterExtensionAEPObjectiveC from './tabs/migration/register-extension/objective-c-aep.md'
import ResetLinkageFieldsAEPSwift from './tabs/migration/reset-linkage-fields/swift-aep.md'
import ResetLinkageFieldsACPObjectiveC from './tabs/migration/reset-linkage-fields/objective-c-acp.md'
import ResetLinkageFieldsAEPObjectiveC from './tabs/migration/reset-linkage-fields/objective-c-aep.md'
import SetLinkageFieldsAEPSwift from './tabs/migration/set-linkage-fields/swift-aep.md'
import SetLinkageFieldsACPObjectiveC from './tabs/migration/set-linkage-fields/objective-c-acp.md'
import SetLinkageFieldsAEPObjectiveC from './tabs/migration/set-linkage-fields/objective-c-aep.md'

# Migrating to AEPCampaign reference

This document is a reference comparison of ACPCampaign (1.x) APIs against their equivalent APIs in AEPCampaign (3.x) for an iOS mobile application implementation.

The AEPCampaign extension is implemented purely in Swift and is compatible with the AEPCore Swift SDK. To ensure a smooth transition from the ACPCampaign SDK, there are no major changes on the API names or definition. For more details, follow the migration guide below for your Swift or Objective-C mobile application. If explanation beyond showing API differences is necessary, it will be captured as an info hint within that API's section.

## AEPCampaign classes

| Type | AEP (3.x) | AEP 3.x (Objective-C) | ACP (1.x) |
| :--- | :--- | :--- | :--- |
| Primary Class (Module) | Campaign | AEPMobileCampaign | ACPCampaign |

## AEPCampaign APIs

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<ExtensionVersionAEPSwift/>

#### AEP 3.x (Objective-C)

<ExtensionVersionAEPObjectiveC/>

#### ACP 1.x (Objective-C)

<ExtensionVersionACPObjectiveC/>

### registerExtension

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<RegisterExtensionAEPSwift/>

#### AEP 3.x (Objective-C)

<RegisterExtensionAEPObjectiveC/>

#### ACP 1.x (Objective-C)

<RegisterExtensionACPObjectiveC/>

### resetLinkageFields

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<ResetLinkageFieldsAEPSwift/>

#### AEP 3.x (Objective-C)

<ResetLinkageFieldsAEPObjectiveC/>

#### ACP 1.x (Objective-C)

<ResetLinkageFieldsACPObjectiveC/>

### setLinkageFields

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### AEP 3.x (Swift)

<SetLinkageFieldsAEPSwift/>

#### AEP 3.x (Objective-C)

<SetLinkageFieldsAEPObjectiveC/>

#### ACP 1.x (Objective-C)

<SetLinkageFieldsACPObjectiveC/>

