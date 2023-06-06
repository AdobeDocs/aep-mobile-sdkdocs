import Tabs from './tabs/migration-guide.md'

# Migrating to Adobe Streaming Media for Edge Network extension

## Configuration Changes

**Media**

| Name | Key | Value | Required |
| --- | --- | --- | --- |
| `Collection API Server` | "media.trackingServer" | String | Yes |
| `Channel` | "media.channel" | String | No |
| `Player Name` | "media.playerName" | String | No |
| `Application Version` | "media.appVersion" | String | No |

**Media for Edge Network**

| Name | Key | Value | Required |
| --- | --- | --- | --- |
| `Channel` | "edgeMedia.channel" | String | **Yes** |
| `Player Name` | "edgeMedia.playerName" | String | **Yes** |
| `Application Version` | "edgeMedia.appVersion" | String | No |


## Dependency Changes

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

| Media | EdgeMedia |
| :---: | :---: |
| Core | Core |
| Analytics | Edge |
| Identity | EdgeIdentity |
| Media | EdgeMedia |

iOS

| AEPMedia | AEPEdgeMedia |
| :---: | :---: |
| AEPCore | AEPCore |
| AEPAnalytics | AEPEdge |
| AEPIdentity |AEPEdgeIdentity |
| AEPMedia | AEPEdgeMedia |

Refer to the guide on how to [configure and setup Media for Edge Network](../media-for-edge-network/index.md) to learn more.


## Install extensions 

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&section=install-dependency"/>

iOS 

<Tabs query="platform=ios&section=install-dependency"/>


## Import & Register extensions 

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&section=import-dependency"/>

iOS

<Tabs query="platform=ios&section=import-dependency"/>


## Public API changes

All numeric parameters of the public APIs have been updated to type `Integer`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&section=api-changes"/>

iOS

<Tabs query="platform=ios&section=api-changes"/>


## Granular ad tracking

Media extension allowed for ad content tracking of `1 second` when setting the `MediaConstants.MediaObjectKey.GRANULAR_AD_TRACKING` key in the media object. 

Media for Edge Network extension supports customizable ping intervals. `Ad content` tracking interval can be set in the range `[1-10] seconds`, and `main content` tracking interval can be set in the range `[10-50] seconds`. For more details, refer to the [createTrackerWithConfig API](../media-for-edge-network/api-reference.md/#createtrackerwithconfig).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&section=custom-interval"/>

iOS

<Tabs query="platform=ios&section=custom-interval"/>


## Downloaded content tracking

Media for Edge Network extension currently does not support the downloaded content tracking workflow.


## API reference
The Media for Edge Network extension offers APIs that are similar to those provided by the Media Analytics extension. To explore the Media for Edge Network extension APIs and understand their usage, please refer to the [API reference docs](../media-for-edge-network/api-reference.md).