import ExtensionVersionAEPObjectiveC from './tabs/migration/extension-version/aep-objective-c.md'
import ExtensionVersionAEPSwift from './tabs/migration/extension-version/aep-swift.md'
import ExtensionVersionACPObjectiveC from './tabs/migration/extension-version/acp-objective-c.md'
import LifecycleStartAEPObjectiveC from './tabs/migration/lifecycle-start/aep-objective-c.md'
import LifecycleStartAEPSwift from './tabs/migration/lifecycle-start/aep-swift.md'
import LifecycleStartACPObjectiveC from './tabs/migration/lifecycle-start/acp-objective-c.md'
import LifecyclePauseAEPObjectiveC from './tabs/migration/lifecycle-pause/aep-objective-c.md'
import LifecyclePauseAEPSwift from './tabs/migration/lifecycle-pause/aep-swift.md'
import LifecyclePauseACPObjectiveC from './tabs/migration/lifecycle-pause/acp-objective-c.md'

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

<ExtensionVersionAEPSwift/>

AEP 3.x (Objective-C)

<ExtensionVersionAEPObjectiveC/>

ACP 2.x (Objective-C)

<ExtensionVersionACPObjectiveC/>

### lifecycleStart

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<LifecycleStartAEPSwift/>

AEP 3.x (Objective-C)

<LifecycleStartAEPObjectiveC/>

ACP 2.x (Objective-C)

<LifecycleStartACPObjectiveC/>

### lifecyclePause

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<LifecyclePauseAEPSwift/>

AEP 3.x (Objective-C)

<LifecyclePauseAEPObjectiveC/>

ACP 2.x (Objective-C)

<LifecyclePauseACPObjectiveC/>

