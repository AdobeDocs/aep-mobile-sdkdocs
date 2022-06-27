import AppendToUrlACPObjectiveC from './tabs/migration/append-to-url/acp-objective-c.md'
import AppendToUrlAEPObjectiveC from './tabs/migration/append-to-url/aep-objective-c.md'
import AppendToUrlAEPSwift from './tabs/migration/append-to-url/aep-swift.md'
import ExtensionVersionACPObjectiveC from './tabs/migration/extension-version/acp-objective-c.md'
import ExtensionVersionAEPObjectiveC from './tabs/migration/extension-version/aep-objective-c.md'
import ExtensionVersionAEPSwift from './tabs/migration/extension-version/aep-swift.md'
import GetExperienceCloudIdACPObjectiveC from './tabs/migration/get-experience-cloud-id/acp-objective-c.md'
import GetExperienceCloudIdAEPObjectiveC from './tabs/migration/get-experience-cloud-id/aep-objective-c.md'
import GetExperienceCloudIdAEPSwift from './tabs/migration/get-experience-cloud-id/aep-swift.md'
import GetIdentifiersACPObjectiveC from './tabs/migration/get-identifiers/acp-objective-c.md'
import GetIdentifiersAEPObjectiveC from './tabs/migration/get-identifiers/aep-objective-c.md'
import GetIdentifiersAEPSwift from './tabs/migration/get-identifiers/aep-swift.md'
import GetUrlVariablesACPObjectiveC from './tabs/migration/get-url-variables/acp-objective-c.md'
import GetUrlVariablesAEPObjectiveC from './tabs/migration/get-url-variables/aep-objective-c.md'
import GetUrlVariablesAEPSwift from './tabs/migration/get-url-variables/aep-swift.md'
import SetAdvertisingIdentifierACPObjectiveC from './tabs/migration/set-advertising-identifier/acp-objective-c.md'
import SetAdvertisingIdentifierAEPObjectiveC from './tabs/migration/set-advertising-identifier/aep-objective-c.md'
import SetAdvertisingIdentifierAEPSwift from './tabs/migration/set-advertising-identifier/aep-swift.md'
import SetPushIdentifierACPObjectiveC from './tabs/migration/set-push-identifier/acp-objective-c.md'
import SetPushIdentifierAEPObjectiveC from './tabs/migration/set-push-identifier/aep-objective-c.md'
import SetPushIdentifierAEPSwift from './tabs/migration/set-push-identifier/aep-swift.md'
import SyncIdentifierACPObjectiveC from './tabs/migration/sync-identifier/acp-objective-c.md'
import SyncIdentifierAEPObjectiveC from './tabs/migration/sync-identifier/aep-objective-c.md'
import SyncIdentifierAEPSwift from './tabs/migration/sync-identifier/aep-swift.md'
import SyncIdentifiersACPObjectiveC from './tabs/migration/sync-identifiers/acp-objective-c.md'
import SyncIdentifiersAEPObjectiveC from './tabs/migration/sync-identifiers/aep-objective-c.md'
import SyncIdentifiersAEPSwift from './tabs/migration/sync-identifiers/aep-swift.md'

# Migrating to AEPIdentity reference

This document is a reference comparison of AEPIdentity (3.x) APIs against their equivalent APIs in ACPIdentity (2.x) for an iOS mobile application implementation.

## Public Classes

| Type | AEP 3.x (Swift) | AEP 3.x (Objective-C) | ACP 2.x (Objective-C) |
| :--- | :--- | :--- | :--- |
| Primary Class | Identity | AEPMobileIdentity | ACPIdentity |
| Class | MobileCore | AEPMobileCore | ACPCore |

## Identity extension APIs

For more information, please read the [Identity API reference](api-reference.md).

### appendToUrl

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<AppendToUrlAEPSwift/>

AEP 3.x (Objective-C)

<AppendToUrlAEPObjectiveC/>

ACP 2.x (Objective-C)

<AppendToUrlACPObjectiveC/>

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<ExtensionVersionAEPSwift/>

AEP 3.x (Objective-C)

<ExtensionVersionAEPObjectiveC/>

ACP 2.x (Objective-C)

<ExtensionVersionACPObjectiveC/>

### getExperienceCloudId

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<GetExperienceCloudIdAEPSwift/>

AEP 3.x (Objective-C)

<GetExperienceCloudIdAEPObjectiveC/>

ACP 2.x (Objective-C)

<GetExperienceCloudIdACPObjectiveC/>

### getIdentifiers

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<GetIdentifiersAEPSwift/>

AEP 3.x (Objective-C)

<GetIdentifiersAEPObjectiveC/>

ACP 2.x (Objective-C)

<GetIdentifiersACPObjectiveC/>

### getUrlVariables

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<GetUrlVariablesAEPSwift/>

AEP 3.x (Objective-C)

<GetUrlVariablesAEPObjectiveC/>

ACP 2.x (Objective-C)

<GetUrlVariablesACPObjectiveC/>

### setAdvertisingIdentifier

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<SetAdvertisingIdentifierAEPSwift/>

AEP 3.x (Objective-C)

<SetAdvertisingIdentifierAEPObjectiveC/>

ACP 2.x (Objective-C)

<SetAdvertisingIdentifierACPObjectiveC/>

### setPushIdentifier

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<SetPushIdentifierAEPSwift/>

AEP 3.x (Objective-C)

<SetPushIdentifierAEPObjectiveC/>

ACP 2.x (Objective-C)

<SetPushIdentifierACPObjectiveC/>

### syncIdentifier

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<SyncIdentifierAEPSwift/>

AEP 3.x (Objective-C)

<SyncIdentifierAEPObjectiveC/>

ACP 2.x (Objective-C)

<SyncIdentifierACPObjectiveC/>

### syncIdentifiers

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<SyncIdentifiersAEPSwift/>

AEP 3.x (Objective-C)

<SyncIdentifiersAEPObjectiveC/>

ACP 2.x (Objective-C)

<SyncIdentifiersACPObjectiveC/>