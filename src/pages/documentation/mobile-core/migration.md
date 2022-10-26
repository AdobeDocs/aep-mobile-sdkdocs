import Tabs from './tabs/migration.md'

# Migrating to AEPCore reference

This document is a reference comparison of ACPCore (2.x) APIs against their equivalent APIs in AEPCore (3.x).

## Primary `Classes`

| Type | AEP 3.x (Swift) | AEP 3.x (Objective-C) | ACP 2.x (Objective-C) |
| :--- | :--- | :--- | :--- |
| Primary Class | MobileCore | AEPMobileCore | ACPCore |
| Enum | LogLevel | AEPLogLevel | ACPMobileLogLevel |

## Core extension APIs

### trackAction

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=track-action"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=track-action"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=track-action"/>

### trackState

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=track-state"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=track-state"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=track-state"/>

### collectPii

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=collect-pii"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=collect-pii"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=collect-pii"/>

### collectLaunchInfo

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=collect-launch-info"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=collect-launch-info"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=collect-launch-info"/>

### getSdkIdentities

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=get-sdk-identities"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=get-sdk-identities"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=get-sdk-identities"/>

### setLogLevel

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=set-log-level"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=set-log-level"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=set-log-level"/>

### registerURLHandler

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=register-url-handler"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=register-url-handler"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=register-url-handler"/>

### setAppGroup

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=set-app-group"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=set-app-group"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=set-app-group"/>

### configureWithAppId

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=configure-with-app-id"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=configure-with-app-id"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=configure-with-app-id"/>

### updateConfiguration

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=update-configuration"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=update-configuration"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=update-configuration"/>

### configureWithFileInPath

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=configure-with-file-in-path"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=configure-with-file-in-path"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=configure-with-file-in-path"/>

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="platform=aep-swift&api=extension-version"/>

AEP 3.x (Objective-C)

<Tabs query="platform=aep-objc&api=extension-version"/>

ACP 2.x (Objective-C)

<Tabs query="platform=acp-objc&api=extension-version"/>

