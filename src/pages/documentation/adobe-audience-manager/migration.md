import Tabs from './tabs/migration.md'

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

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=extension-version"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=extension-version"/>


ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=extension-version"/>

### getVisitorProfile

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=get-visitor-profile"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=get-visitor-profile"/>


ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=get-visitor-profile"/>

### reset

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=reset"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=reset"/>


ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=reset"/>

### signalWithData

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=signal-with-data"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=signal-with-data"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=signal-with-data"/>



