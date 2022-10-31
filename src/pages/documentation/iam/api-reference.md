import Tabs from './tabs/api-reference.md'

# API reference

This document details how to use the in-app messaging APIs provided by the AEPMessaging framework.

## In-App Messaging APIs

#### Programmatically refresh in-app message definitions from the remote

By default, the SDK will automatically fetch in-app message definitions from the remote at the time the Messaging extension is registered. This generally happens once per app lifecycle.

Some use cases may require the client to request an update from the remote more frequently. Calling the following API will force the Messaging extension to get an updated definition of messages from the remote:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=refresh"/>

iOS

<Tabs query="platform=ios&api=refresh"/>