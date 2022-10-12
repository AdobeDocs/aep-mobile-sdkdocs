import Importlifecycleandroid from './tabs/import-lifecycle-android.md'
import Importlifecycleios from './tabs/import-lifecycle-ios.md'
import Collectlifecycleandroid from './tabs/collect-lifecycle-android.md'
import Collectlifecycleios from './tabs/collect-lifecycle-ios.md'
import Pauselifecycleandroid from './tabs/pause-lifecycle-android.md'
import Pauselifecycleios from './tabs/pause-lifecycle-ios.md'

# Manual Lifecycle Implementation

<InlineAlert variant="info" slots="text"/>

In version 4 of the iOS SDK, this implementation was completed automatically.<br/>When upgrading to the Experience Platform SDK, you must add code to continue collecting Lifecycle metrics.

## Importing and registering the Lifecycle extension

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<Importlifecycleandroid/>

#### iOS

<Importlifecycleios/>

## Start collecting Lifecycle information

You can start collecting Lifecycle information at any time in your app, but we recommend that you start as soon as your app enters the foreground. This allows Lifecycle metrics to be correctly attributed to all of your users' activities for their current session.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<Collectlifecycleandroid/>

#### iOS

<Collectlifecycleios/>

## Pause Lifecycle Collection

You should pause Lifecycle collection when the user stops using your app. The best time to do this is usually when your app has entered the background.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<Pauselifecycleandroid/>

#### iOS

<Pauselifecycleios/>
