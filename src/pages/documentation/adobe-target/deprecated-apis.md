import LoadTargetRequestsIos from './tabs/deprecated-apis/load-target-requests/ios.md'
import LoadTargetRequestsAndroid from './tabs/deprecated-apis/load-target-requests/android.md'
import LocationClickedIos from './tabs/deprecated-apis/location-clicked/ios.md'
import LocationClickedAndroid from './tabs/deprecated-apis/location-clicked/android.md'
import PrefetchApisIos from './tabs/deprecated-apis/prefetch-apis/ios.md'
import PrefetchApisAndroid from './tabs/deprecated-apis/prefetch-apis/android.md'
import PublicClassesIos from './tabs/deprecated-apis/public-classes/ios.md'
import PublicClassesAndroid from './tabs/deprecated-apis/public-classes/android.md'

# Deprecated Target APIs

The following Target APIs are **deprecated APIs** that are no longer supported on AEPTarget version 3.x and newer, and are **only** present in ACPTarget 2.x.

## Using the prefetch APIs

<InlineAlert variant="warning" slots="text"/>

The `prefetchContent` API signature has changed. Please use the parameters encapsulated in `TargetParameters` instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<PrefetchApisAndroid/>

iOS

<PrefetchApisIos/>

## Load Target requests

Sends a batch request to your configured Target server for multiple mbox locations that are specified.

<InlineAlert variant="warning" slots="text"/>

`loadRequests` API is deprecated and, for batch scenarios, has been replaced with `retrieveLocationContent`.

When working with prefetch APIs, and switching to the new `retrieveLocationContent` API, if you do not use `locationsDisplayed`, reporting will not work.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<LoadTargetRequestsAndroid/>

iOS

<LoadTargetRequestsIos/>

## locationClicked

Sends a click notification to the configured Target server for a prefetched or regular mbox location. The click metric should be enabled for the provided location name in Target.

<InlineAlert variant="warning" slots="text"/>

`locationClicked` API signature is changed and the recommended way is to use parameters encapsulated in `TargetParameters`

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<LocationClickedAndroid/>

iOS

<LocationClickedIos/>

## Public classes

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<PublicClassesAndroid/>

iOS

<PublicClassesIos/>

