import Tabs from './tabs/migration.md'

# Migrating to AEPAssurance(3.x) reference

This document is a reference comparison of AEPAssurance (3.x) APIs against against their equivalent AEPAssurance (1.x) APIs.

The AEPAssurance (3.x) extension is implemented purely in Swift and is compatible with the AEPCore swift SDK. To ensure a smooth transition from the AEPAssurance (1.x) SDK, there are no major changes on the API names or definition. For more details, follow the migration guide below for your Swift or Objective-C mobile application. If explanation beyond showing API differences is necessary, it will be captured as an info hint within that API's section.

## Public classes

| Type | AEP 3.x (Swift) | AEP 3.x (Objective-C) | AEP 1.x (Objective-C) |
| :--- | :--- | :--- | :--- |
| Primary Class | Assurance | AEPMobileAssurance | AEPAssurance |

## Public APIs

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-3-swift&task=extension-version"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-3-obj-c&task=extension-version"/>

AEP 1.x (Objective-C)

<Tabs query="platform=aep-1-obj-c&task=extension-version"/>



### startSession

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-3-swift&task=start-session"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-3-obj-c&task=start-session"/>

AEP 1.x (Objective-C)

<Tabs query="platform=aep-1-obj-c&task=start-session"/>

Follow this link for step by step migration to AEPAssurance 3.x for [Swift](https://github.com/adobe/aepsdk-assurance-ios/blob/dev/Documentation/MIGRATIONSWIFT.md) and [Objective-C](https://github.com/adobe/aepsdk-assurance-ios/blob/dev/Documentation/MIGRATIONObjC.md) iOS applications.

