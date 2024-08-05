---
title: Code-based Experiences & Content Cards - API Reference
description: This document lists the public APIs available in the Messaging extension for implementing code-based experiences and content cards.
keywords:
- Adobe Journey Optimizer
- API reference
- Messaging
- Code-based Experiences
- Content Cards
---

import Tabs from './tabs/api-reference.md'

# Code-based Experiences & Content Cards - API reference

This document lists the public APIs available in the Messaging extension for implementing code-based experiences and content cards.

## getPropositionsForSurfaces

The `getPropositionsForSurfaces` API retrieves the previously fetched propositions from the SDK's in-memory propositions cache for the provided surfaces. The completion handler is invoked with the decision propositions corresponding to the given surfaces or `AEPError`, if it occurs.

If a requested surface was not previously cached prior to calling `getPropositionsForSurfaces` (using the `updatePropositionsForSurfaces` API), no propositions will be returned for that surface.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-propositions-for-surfaces"/>

iOS

<Tabs query="platform=ios&api=get-propositions-for-surfaces"/>

## updatePropositionsForSurfaces

The `updatePropositionsForSurfaces` API dispatches an event for the Edge network extension to fetch personalization decisions from the AJO campaigns for the provided surfaces array. The returned decision propositions are cached in-memory by the Messaging extension.

To retrieve previously cached decision propositions, use `getPropositionsForSurfaces` API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-propositions-for-surfaces"/>

iOS

<Tabs query="platform=ios&api=update-propositions-for-surfaces"/>
