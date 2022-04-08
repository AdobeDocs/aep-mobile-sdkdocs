import CollectLaunchInfoAEPObjectiveC from './tabs/migration/collect-launch-info/aep-objective-c.md'
import CollectLaunchInfoAEPSwift from './tabs/migration/collect-launch-info/aep-swift.md'
import CollectLaunchInfoACPObjectiveC from './tabs/migration/collect-launch-info/acp-objective-c.md'
import CollectPiiAEPObjectiveC from './tabs/migration/collect-pii/aep-objective-c.md'
import CollectPiiAEPSwift from './tabs/migration/collect-pii/aep-swift.md'
import CollectPiiACPObjectiveC from './tabs/migration/collect-pii/acp-objective-c.md'
import ConfigureWithAppIdAEPObjectiveC from './tabs/migration/configure-with-app-id/aep-objective-c.md'
import ConfigureWithAppIdAEPSwift from './tabs/migration/configure-with-app-id/aep-swift.md'
import ConfigureWithAppIdACPObjectiveC from './tabs/migration/configure-with-app-id/acp-objective-c.md'
import ConfigureWithFileInPathAEPObjectiveC from './tabs/migration/configure-with-file-in-path/aep-objective-c.md'
import ConfigureWithFileInPathAEPSwift from './tabs/migration/configure-with-file-in-path/aep-swift.md'
import ConfigureWithFileInPathACPObjectiveC from './tabs/migration/configure-with-file-in-path/acp-objective-c.md'
import ExtensionVersionAEPObjectiveC from './tabs/migration/extension-version/aep-objective-c.md'
import ExtensionVersionAEPSwift from './tabs/migration/extension-version/aep-swift.md'
import ExtensionVersionACPObjectiveC from './tabs/migration/extension-version/acp-objective-c.md'
import GetSdkIdentitiesAEPObjectiveC from './tabs/migration/get-sdk-identities/aep-objective-c.md'
import GetSdkIdentitiesAEPSwift from './tabs/migration/get-sdk-identities/aep-swift.md'
import GetSdkIdentitiesACPObjectiveC from './tabs/migration/get-sdk-identities/acp-objective-c.md'
import RegisterUrlHandlerAEPObjectiveC from './tabs/migration/register-url-handler/aep-objective-c.md'
import RegisterUrlHandlerAEPSwift from './tabs/migration/register-url-handler/aep-swift.md'
import RegisterUrlHandlerACPObjectiveC from './tabs/migration/register-url-handler/acp-objective-c.md'
import SetAppGroupAEPObjectiveC from './tabs/migration/set-app-group/aep-objective-c.md'
import SetAppGroupAEPSwift from './tabs/migration/set-app-group/aep-swift.md'
import SetAppGroupACPObjectiveC from './tabs/migration/set-app-group/acp-objective-c.md'
import SetLogLevelAEPObjectiveC from './tabs/migration/set-log-level/aep-objective-c.md'
import SetLogLevelAEPSwift from './tabs/migration/set-log-level/aep-swift.md'
import SetLogLevelACPObjectiveC from './tabs/migration/set-log-level/acp-objective-c.md'
import TrackActionAEPObjectiveC from './tabs/migration/track-action/aep-objective-c.md'
import TrackActionAEPSwift from './tabs/migration/track-action/aep-swift.md'
import TrackActionACPObjectiveC from './tabs/migration/track-action/acp-objective-c.md'
import TrackStateAEPObjectiveC from './tabs/migration/track-state/aep-objective-c.md'
import TrackStateAEPSwift from './tabs/migration/track-state/aep-swift.md'
import TrackStateACPObjectiveC from './tabs/migration/track-state/acp-objective-c.md'
import UpdateConfigurationAEPObjectiveC from './tabs/migration/update-configuration/aep-objective-c.md'
import UpdateConfigurationAEPSwift from './tabs/migration/update-configuration/aep-swift.md'
import UpdateConfigurationACPObjectiveC from './tabs/migration/update-configuration/acp-objective-c.md'


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

<TrackActionAEPSwift/>

AEP 3.x (Objective-C)

<TrackActionAEPObjectiveC/>

ACP 2.x (Objective-C)

<TrackActionACPObjectiveC/>

### trackState

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<TrackStateAEPSwift/>

AEP 3.x (Objective-C)

<TrackStateAEPObjectiveC/>

ACP 2.x (Objective-C)

<TrackStateACPObjectiveC/>

### collectPii

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<CollectPiiAEPSwift/>

AEP 3.x (Objective-C)

<CollectPiiAEPObjectiveC/>

ACP 2.x (Objective-C)

<CollectPiiACPObjectiveC/>

### collectLaunchInfo

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<CollectLaunchInfoAEPSwift/>

AEP 3.x (Objective-C)

<CollectLaunchInfoAEPObjectiveC/>

ACP 2.x (Objective-C)

<CollectLaunchInfoACPObjectiveC/>

### getSdkIdentities

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<GetSdkIdentitiesAEPSwift/>

AEP 3.x (Objective-C)

<GetSdkIdentitiesAEPObjectiveC/>

ACP 2.x (Objective-C)

<GetSdkIdentitiesACPObjectiveC/>

### setLogLevel

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<SetLogLevelAEPSwift/>

AEP 3.x (Objective-C)

<SetLogLevelAEPObjectiveC/>

ACP 2.x (Objective-C)

<SetLogLevelACPObjectiveC/>

### registerURLHandler

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<RegisterUrlHandlerAEPSwift/>

AEP 3.x (Objective-C)

<RegisterUrlHandlerAEPObjectiveC/>

ACP 2.x (Objective-C)

<RegisterUrlHandlerACPObjectiveC/>

### setAppGroup

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<SetAppGroupAEPSwift/>

AEP 3.x (Objective-C)

<SetAppGroupAEPObjectiveC/>

ACP 2.x (Objective-C)

<SetAppGroupACPObjectiveC/>

### configureWithAppId

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<ConfigureWithAppIdAEPSwift/>

AEP 3.x (Objective-C)

<ConfigureWithAppIdAEPObjectiveC/>

ACP 2.x (Objective-C)

<ConfigureWithAppIdACPObjectiveC/>

### updateConfiguration

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<UpdateConfigurationAEPSwift/>

AEP 3.x (Objective-C)

<UpdateConfigurationAEPObjectiveC/>

ACP 2.x (Objective-C)

<UpdateConfigurationACPObjectiveC/>

### configureWithFileInPath

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<ConfigureWithFileInPathAEPSwift/>

AEP 3.x (Objective-C)

<ConfigureWithFileInPathAEPObjectiveC/>

ACP 2.x (Objective-C)

<ConfigureWithFileInPathACPObjectiveC/>

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<ExtensionVersionAEPSwift/>

AEP 3.x (Objective-C)

<ExtensionVersionAEPObjectiveC/>

ACP 2.x (Objective-C)

<ExtensionVersionACPObjectiveC/>

