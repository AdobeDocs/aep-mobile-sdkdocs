import Tabs from './tabs/deprecated-apis.md'

# Deprecated Target APIs

The following Target APIs are **deprecated APIs** that are no longer supported on AEPTarget version 3.x and newer, and are **only** present in ACPTarget 2.x.

## Using the prefetch APIs

<InlineAlert variant="warning" slots="text"/>

The `prefetchContent` API signature has changed. Please use the parameters encapsulated in `TargetParameters` instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=prefetch-apis"/>

iOS

<Tabs query="platform=ios&api=prefetch-apis"/>

## Load Target requests

Sends a batch request to your configured Target server for multiple mbox locations that are specified.

<InlineAlert variant="warning" slots="text"/>

`loadRequests` API is deprecated and, for batch scenarios, has been replaced with `retrieveLocationContent`.

When working with prefetch APIs, and switching to the new `retrieveLocationContent` API, if you do not use `locationsDisplayed`, reporting will not work.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=load-target-requests"/>

iOS

<Tabs query="platform=ios&api=load-target-requests"/>

## locationClicked

Sends a click notification to the configured Target server for a prefetched or regular mbox location. The click metric should be enabled for the provided location name in Target.

<InlineAlert variant="warning" slots="text"/>

`locationClicked` API signature is changed and the recommended way is to use parameters encapsulated in `TargetParameters`

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=location-clicked"/>

iOS

<Tabs query="platform=ios&api=location-clicked"/>

## Public classes

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=public-classes"/>

iOS

<Tabs query="platform=ios&api=public-classes"/>

