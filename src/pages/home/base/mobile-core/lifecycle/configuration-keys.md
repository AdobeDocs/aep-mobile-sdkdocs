---
title: Mobile Core Lifecycle extension configuration keys
description: A guide explaining how to use the Mobile Core Lifecycle extension configuration keys.
keywords:
- Configuration keys
- Lifecycle
- Lifecycle for Mobile Core
- Mobile Core
---

# Configuration keys

## lifecycle.sessionTimeout

<InlineAlert variant="warning" slots="text"/>

This configuration setting is only used in the Analytics use case, when using the [Lifecycle data content response](./event-reference.md#lifecycle-data-content-response) event to determine session length. <br/><br/> In the Platform use case, events are dispatched based on [Lifecycle Application Foreground](./event-reference.md#lifecycle-application-foreground) and [Lifecycle Application Background](./event-reference.md#lifecycle-application-background) and not on a set session timeout.

Number of seconds that must elapse between the app entering the background and subsequently re-entering the foreground in order for the SDK to create a new session.

The default value is 300 seconds (5 minutes).

<InlineAlert variant="info" slots="text"/>

The time that your app spends in the background is **not** included in the session length.
