import Tabs from './tabs/lifecycle.md'

# Manual Lifecycle Implementation

<InlineAlert variant="info" slots="text"/>

In version 4 of the iOS SDK, this implementation was completed automatically.<br/>When upgrading to the Experience Platform SDK, you must add code to continue collecting Lifecycle metrics.

## Importing and registering the Lifecycle extension

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=import"/>

iOS

<Tabs query="platform=ios&task=import"/>

## Start collecting Lifecycle information

You can start collecting Lifecycle information at any time in your app, but we recommend that you start as soon as your app enters the foreground. This allows Lifecycle metrics to be correctly attributed to all of your users' activities for their current session.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=collect"/>

iOS

<Tabs query="platform=ios&task=collect"/>

## Pause Lifecycle Collection

You should pause Lifecycle collection when the user stops using your app. The best time to do this is usually when your app has entered the background.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=pause"/>

iOS

<Tabs query="platform=ios&task=pause"/>