import ExtensionVersionAndroid from './tabs/api-reference/extension-version/android.md'
import ExtensionVersionIosAEP from './tabs/api-reference/extension-version/ios-aep.md'
import ExtensionVersionIosACP from './tabs/api-reference/extension-version/ios-acp.md'
import LifecycleStartAndroid from './tabs/api-reference/lifecycle-start/android.md'
import LifecycleStartIosAEP from './tabs/api-reference/lifecycle-start/ios-aep.md'
import LifecycleStartIosACP from './tabs/api-reference/lifecycle-start/ios-acp.md'
import LifecyclePauseAndroid from './tabs/api-reference/lifecycle-pause/android.md'
import LifecyclePauseIosAEP from './tabs/api-reference/lifecycle-pause/ios-aep.md'
import LifecyclePauseIosACP from './tabs/api-reference/lifecycle-pause/ios-acp.md'

# Lifecycle API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Lifecycle extension that is registered with the Mobile Core extension.

To get the version of the Lifecycle extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<ExtensionVersionAndroid/>

iOS (AEP 3.x)

<ExtensionVersionIosAEP/>

iOS (ACP 2.x)

<ExtensionVersionIosACP/>

## lifecycleStart

Starts the collection of lifecycle data.

**For Analytics use case:** Use this API to start a new lifecycle session or resume a previously paused lifecycle session. If a previously paused session timed out, then a new session is created. If a current session is running, then calling this method does nothing.

**For Platform use case:** Use this API to dispatch a [Lifecycle Application Foreground](./event-reference.md#lifecycle-application-foreground) event when the application is launched.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<LifecycleStartAndroid/>

iOS (AEP 3.x)

<LifecycleStartIosAEP/>

iOS (ACP 2.x)

<LifecycleStartIosACP/>

### lifecyclePause

Pauses the collection of lifecycle data.

**For Analytics use case:** Use this API to pause the collection of lifecycle data.

**For Platform use case:** Use this API to dispatch a [Lifecycle Application Background](./event-reference.md#lifecycle-application-background) event when the application closes.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<LifecyclePauseAndroid/>

iOS (AEP 3.x)

<LifecyclePauseIosAEP/>

iOS (ACP 2.x)

<LifecyclePauseIosACP/>

