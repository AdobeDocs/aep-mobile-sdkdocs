import GetApplicationContextAndroid from './tabs/get-application-context/android.md'
import GetApplicationContextIos from './tabs/get-application-context/ios.md'

# Get the application context

In Android, you can retrieve the `android.app.Application` instance by using the `MobileCore.getApplication()` API. The returned `android.app.Application` represents the base class, which maintains the global application state. For more information, please read the [Mobile Core API reference](../mobile-core/api-reference.md).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<GetApplicationContextAndroid/>

iOS

<GetApplicationContextIos/>

