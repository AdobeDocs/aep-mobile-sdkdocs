import Tabs from './tabs/migration.md'

# Migrating to AEPCampaignClassic reference

This document is a reference comparison of AEPCampaignClassic (3.x) APIs against their equivalent APIs in ACPCampaignClassic (2.x) for an iOS mobile application implementation.

The AEPCampaignClassic extension is implemented purely in Swift and is compatible with the AEPCore Swift SDK. To ensure a smooth transition from the ACPCampaignClassic SDK, there are no major changes on the API names or definition. For more details, follow the migration guide below for your Swift or Objective-C mobile application. If explanation beyond showing API differences is necessary, it will be captured as a note within that API's section.

## AEPCampaignClassic classes

| Type | AEP (3.x) | AEP 3.x (Objective-C) | ACP (2.x) |
| :--- | :--- | :--- | :--- |
| Primary Class (Module) | CampaignClassic | AEPMobileCampaignClassic | ACPCampaignClassic |

## AEPCampaignClassic APIs

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=extension-version"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=extension-version"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=extension-version"/>

### registerExtension

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=register-extension"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=register-extension"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=register-extension"/>

### registerDevice

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=register-device"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=register-device"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=register-device"/>

### trackNotificationClick

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=track-notification-click"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=track-notification-click"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=track-notification-click"/>

### trackNotificationReceive

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=track-notification-receive"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=track-notification-receive"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=track-notification-receive"/>