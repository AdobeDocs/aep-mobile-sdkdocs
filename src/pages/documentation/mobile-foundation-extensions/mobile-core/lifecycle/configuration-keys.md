# Configuration keys

## lifecycle.sessionTimeout

<InlineAlert variant="warning" slots="text"/>

This configuration setting is only used in the Analytics use case, when using the [Lifecycle data content response](./event-reference.md#lifecycle-data-content-response) event to determine session length. <br/><br/> In the Platform use case, events are dispatched based on [Lifecycle Application Foreground](./event-reference.md#lifecycle-application-foreground) and [Lifecycle Application Background](./event-reference.md#lifecycle-application-background) and not on a set session timeout.

Specifies the length of time, in seconds, that must elapse between the time the app is launched and before the launch is considered to be a new session. This timeout also applies when your application is sent to the background and reactivated.

The default value is 300 seconds (5 minutes).

<InlineAlert variant="info" slots="text"/>

The time that your app spends in the background is **not** included in the session length.