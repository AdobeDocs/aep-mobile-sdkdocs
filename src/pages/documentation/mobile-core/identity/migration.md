import Tabs from './tabs/migration.md'

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

<Tabs query="platform=aep-swift&api=append-to-url"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=append-to-url"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=append-to-url"/>

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>


AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=extension-version"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=extension-version"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=extension-version"/>

### getExperienceCloudId

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>


AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=get-experience-cloud-id"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=get-experience-cloud-id"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=get-experience-cloud-id"/>

### getIdentifiers

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=get-identifiers"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=get-identifiers"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=get-identifiers"/>

### getUrlVariables

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=get-url-variables"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=get-url-variables"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=get-url-variables"/>

### setAdvertisingIdentifier

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=set-advertising-identifier"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=set-advertising-identifier"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=set-advertising-identifier"/>

### setPushIdentifier

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=set-push-identifier"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=set-push-identifier"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=set-push-identifier"/>

### syncIdentifier

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=sync-identifier"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=sync-identifier"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=sync-identifier"/>

### syncIdentifiers

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=sync-identifiers"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=sync-identifiers"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=sync-identifiers"/>