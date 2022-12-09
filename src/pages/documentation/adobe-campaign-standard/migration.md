import Tabs from './tabs/migration.md'

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

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=extension-version"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=extension-version"/>

ACP 1.x (Objective-C)

<Tabs query="platform=acp-objc&api=extension-version"/>


### registerExtension

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=register-extension"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=register-extension"/>

ACP 1.x (Objective-C)

<Tabs query="platform=acp-objc&api=register-extension"/>

### resetLinkageFields

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=reset-linkage-fields"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=reset-linkage-fields"/>

ACP 1.x (Objective-C)

<Tabs query="platform=acp-objc&api=reset-linkage-fields"/>

### setLinkageFields

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=set-linkage-fields"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=set-linkage-fields"/>

ACP 1.x (Objective-C)

<Tabs query="platform=acp-objc&api=set-linkage-fields"/>
