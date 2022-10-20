import Tabs from './tabs/migration.md'

# Migrating to AEPLifecycle reference

This document is a reference comparison of AEPLifecycle (3.x) APIs against their equivalent APIs in ACPLifecycle (2.x) for an iOS mobile application implementation.

## Public `Classes`

| Type | AEP 3.x (Swift) | AEP 3.x (Objective-C) | ACP 2.x (Objective-C) |
| :--- | :--- | :--- | :--- |
| Primary Class | Lifecycle | AEPMobileLifecycle | ACPLifecycle |
| Class | MobileCore | AEPMobileCore | ACPCore |

## Lifecycle extension APIs

For more information, please read the [Lifecycle API reference](./api-reference.md).

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=extension-version"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=extension-version"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=extension-version"/>

### lifecycleStart

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=lifecycle-start"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=lifecycle-start"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=lifecycle-start"/>

### lifecyclePause

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=lifecycle-pause"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=lifecycle-pause"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=lifecycle-pause"/>

