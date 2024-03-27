---
title: Automatically display and track push notification
description: This document describes how to automatically display and track push notifications using the AEPMessaging extension. You should to use this method unless you have a specific requirement to manually display and track push notifications.
keywords:
- Adobe Journey Optimizer
- Messaging
- Code-based experiences
- Tutorial
---

import Tabs from './tabs/tutorial.md'

# Code-based experiences implementation tutorial

This document describes how to fetch, display and track code-based experiences  using the Adobe Journey Optimizer extension.

## Pre-requisites

[Integrate and register Messaging extension](../../../index.md#implement-extension-in-mobile-app) in your app.

## Fetch and cache the code-based content

To fetch the content for the surfaces configured in Adobe Journey Optimizer campaigns, call the [updatePropositionsForSurfaces](../api-reference.md#updatepropositionsforsurfaces) API . It is encouraged to batch requesting multiple [Surface](../public-classes/surface.md) URIs in a single API call when possible. The returned code-based experiences are cached in-memory by the Messaging extension and persists through the lifecycle of the app (i.e as long as the app is running). An example of the call is shown below.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=updatepropositionsforsurfaces"/>

iOS

<Tabs query="platform=ios&function=updatepropositionsforsurfaces"/>

## Retrieve cached propositions

To retrieve the previously fetched content from the in-memory cache, call [getPropositionsForSurfaces](../api-reference.md#getpropositionsforsurfaces)  API with a list of required surface URIs and a completion handler. The completion handler will be invoked with a list of [Proposition](../public-classes/proposition.md) objects corresponding to the requested surfaces, or AEPError object if an error occurs. If a requested surface was not previously cached prior to calling `getPropositionsForSurfaces` (using the `updatePropositionsForSurfaces` API), no propositions will be returned for that surface. The below example shows how to retrieve the content for the previously cached surfaces.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=getpropositionsforsurfaces"/>

iOS

<Tabs query="platform=ios&function=getpropositionsforsurfaces"/>

## Using the retrieved propositions

The [Proposition](../public-classes/proposition.md) object returned in the completion handler encapsulates the content specified for the corresponding surface, as well as information needed for tracking interactions with the content. Multiple Proposition  objects can be returned for a single surface based on the number of campaigns configured for it in Adobe Journey Optimizer. Each Proposition  object in turn can contain multiple items, represented by the [PropositionItem](../public-classes/proposition-item.md) class, based on how the campaign's content is defined. To access the content, iterate through the list of PropositionItem  present in the returned list of Propositions. The SchemaType of the PropositionItem indicates the type of content it contains and can be used to determine how to render or interpret the returned content. The PropositionItem  class contains helper functions to access the different types of supported content.

The below example shows how to iterate through the propositions returned earlier and display content of type HTML in a WebView. The code is solely for demonstrating the functionality offered by the SDK and should not be considered as the only way to use the returned propositions. Please adapt the solution to suit the needs of your application.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=using-propositions"/>

iOS

<Tabs query="platform=ios&function=using-propositions"/>

## Tracking interactions with code-based experiences

Since the onus of rendering the code-based experience lies with the app developer, it is your responsibility to monitor the desired end user interactions and call the appropriate tracking APIs. To record an interaction with the code-based content, call the [track](../public-classes/proposition-item.md#track) API provided in the `PropositionItem` class. The below code shows two examples of tracking: when the content is displayed to the user and when the user clicks on the content. These examples are for illustrating how to call track  API and not a recommendation on where it should be called. Please examine your app workflow to find the appropriate way to perform tracking.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=track"/>

iOS

<Tabs query="platform=ios&function=track"/>

### Tracking items from embedded decisions

When Adobe Journey Optimizer campaigns are created with embedded decisions, the server can respond with one or more items based on the number of items requested in the decision. To track these embedded items, the Adobe Journey Optimizer campaign UI provides `item._trackingToken` attributes. When authoring the campaign's content, you would need to embed the provided token as an HTML data-attribute in case of HTML content or JSON attribute in case on JSON content. The below example campaign shows content with embedded decision, where multiple paragraph tags containing image URLs can be returned.

```html
<html>
   <body>
      {{#each decisionPolicy.1234567.items as |item|}}
      <ul id={{item._id}} data-item-token="{{item._trackingToken}}"><img src="{{item.heroimage1.sourceURL}}" alt="Winter Sale" width="80%" height="50%"></ul>
      {{/each}}
   </body>
</html>
```

For the above example, the server can return a response with two decision items in the item data within a single `PropositionItem`

```html
<html>
   <body>
      <ul id="mockId1" data-item-token="mockToken1"><img src="https://image1.jpeg" alt="Winter Sale" width="80%" height="50%"></ul>
      <ul id="mockId2" data-item-token="mockToken2"><img src="https://image2.jpeg" alt="Winter Sale" width="80%" height="50%"></ul>
   </body>
</html>
```

Since the embedded items are located inside a single PropositionItem's data, the app developer will need to extract the `data-item-token` when tracking the interactions with the item. The token, along with the other tracking information, will need to be passed to the [track](../public-classes/proposition-item.md#track) API provided by the Messaging SDK. If no tracking tokens are supplied, normal tracking events will be sent. If tracking tokens were used during authoring, it will be assumed that all the corresponding embedded items were displayed. The below code shows an example of calling the track  API with tokens.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=track-with-tokens"/>

iOS

<Tabs query="platform=ios&function=track-with-tokens"/>
