---
title: Adobe Target raw API reference
description: An API reference for executing raw API requests for the Adobe Target mobile extension.
keywords:
- Adobe Target
- API reference
---

import Tabs from './tabs/raw-api-reference.md'

# Target Raw API reference

## executeRawRequest

This API can be used to retrieve prefetch or execute responses for mbox locations from the configured Target server.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=execute-raw-request"/>

iOS

<Tabs query="platform=ios&api=execute-raw-request"/>

## sendRawNotifications

This API sends notification request(s) to the configured Target server for click or display notifications. The event tokens required for the Target click or display notifications can be retrieved from a previous `executeRawRequest` API response.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=send-raw-notifications"/>

iOS

<Tabs query="platform=ios&api=send-raw-notifications"/>
