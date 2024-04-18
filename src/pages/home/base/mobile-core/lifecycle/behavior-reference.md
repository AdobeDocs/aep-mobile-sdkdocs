---
title: Mobile Core Lifecycle behavior reference
description: A reference for understanding how Lifecycle behaves under different scenarios.
keywords:
- Lifecycle
- Lifecycle V1
- Lifecycle for Mobile Core
- Lifecycle for solution extensions
- Lifecycle for Analytics
- Lifecycle iOS
- Lifecycle Android
- Product reference
---

# Lifecycle behavior reference

The Lifecycle extension relies solely on the Lifecycle events dispatched by the [`lifecycleStart`](api-reference.md#lifecyclestart) and [`lifecyclePause`](api-reference.md#lifecyclepause) calls to determine the start of new sessions and to calculate lifecycle data.

## General behavior

A Lifecycle session is the time between a `lifecycleStart` call and a `lifecyclePause` call. A new session is detected when `lifecycleStart` is called after a `lifecyclePause` and the [Lifecycle session timeout](configuration-keys.md#lifecyclesessiontimeout) has elapsed.

All events that are not Lifecycle start or Lifecycle pause do not affect Lifecycle state or data. The starting of MobileCore via `registerExtensions` does not automatically start a Lifecycle session nor does it affect Lifecycle data.

### Consecutive `lifecycleStart` API calls

Consecutive `lifecycleStart` calls will not update the session start timestamp from the initial `lifecycleStart` call, and Lifecycle data is not changed.

<InlineAlert variant="info" slots="text"/>

In this case, a Lifecycle shared state is dispatched with its data reflecting the start timestamp from the initial `lifecycleStart` call. This can be verified in both application logs or Assurance.

### Consecutive `lifecyclePause` API calls

Consecutive `lifecyclePause` calls will update the persisted pause timestamp. On the next `lifecycleStart` API call, the last pause timestamp is used to determine if the previous session has timed out and a new session is started.

## Expected Lifecycle scenarios

The following Lifecycle workflows show examples of the expected ordering of Lifecycle events.

**App first launch after installation**

1. *App launched*
2. `lifecycleStart` (Start of new session)
3. `lifecyclePause`
4. *App closed by user*

![](./assets/android/lifecycle-first-launch.svg)

<!-- mermaid.js diagram definition
graph LR
    A(["1.<br/>App launched"])
    A ==> B("2.<br/><code>lifecycleStart</code><br>(Start of new session)")
    B ==> C(3.<br/><code>lifecyclePause</code>)
    C ==> D(["4.<br/>App closed by user"])

    classDef dashedPill fill:#d3d3d3,stroke:#000,stroke-dasharray: 5 5,color:#000;
    classDef regularPill fill:#3273de,stroke:#3273de,color:#fff;
    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;

    class A,D regularPill;
    class B,C regularBox;
-->

**Subsequent app launches, continue session with app close**

1. Expected Lifecycle event(s)
2. `lifecyclePause`
3. *App closed by user* 
4. *App launched* (Session timeout window did <b>not</b> pass)
5. `lifecycleStart` (Continue current session)

![](./assets/android/lifecycle-continue-session.svg)

<!-- mermaid.js diagram definition
graph LR
    A("1.<br/>Expected Lifecycle event(s)")
    A ==> B(2.<br/><code>lifecyclePause</code>)
    B ==> C(["3.<br/>App closed by user"])
    C ==> D(["4.<br/>App launched<br>(Session timeout window<br>did <b>not</b> pass)"])
    D ==> E("5.<br/><code>lifecycleStart</code><br>(Continue current session)")

    classDef dashedPill fill:#d3d3d3,stroke:#000,stroke-dasharray: 5 5,color:#000;
    classDef regularPill fill:#3273de,stroke:#3273de,color:#fff;
    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;

    class A,B,E regularBox;
    class C,D regularPill;
-->

**Subsequent app launches, continue session without app close**

1. *App launched*
2. `lifecycleStart` (Start of new session)
3. `lifecyclePause`
4. `lifecycleStart` (Continue current session)
5. `lifecyclePause`
5. *App closed by user*

![](./assets/android/lifecycle-continue-without-close.svg)

<!-- mermaid.js diagram definition
graph LR
    A(["1.<br/>App launched"])
    A ==> B("2.<br/><code>lifecycleStart</code><br>(Start of new session)")
    B ==> C(3.<br/><code>lifecyclePause</code>)
    C ==> D("4.<br/><code>lifecycleStart</code><br>(Continue current session)")
    D ==> E(5.<br/><code>lifecyclePause</code>)
    E ==> F(["6.<br/>App closed by user"])
    subgraph "Can repeat any number of times"
        E ==> D
    end

    classDef dashedPill fill:#d3d3d3,stroke:#000,stroke-dasharray: 5 5,color:#000;
    classDef regularPill fill:#3273de,stroke:#3273de,color:#fff;
    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;

    class A,F regularPill;
    class B,C,D,E regularBox;
-->


**Subsequent app launches, new session**

1. Expected Lifecycle event(s)
2. `lifecyclePause`
3. *App closed by user*
4. *Session timeout window passed*
5. *App launched*
6. `lifecycleStart` (Start of new session)

![](./assets/android/lifecycle-subsequent-new-session.svg)

<!-- mermaid.js diagram definition
graph LR
    A("1.<br/>Expected Lifecycle event(s)")
    A ==> B(2.<br/><code>lifecyclePause</code>)
    B ==> C(["3.<br/>App closed by user"])
    C ==> D(["4.<br/>Session timeout<br>window passed"])
    D ==> E(["5.<br/>App launched"])
    E ==> F("6.<br/><code>lifecycleStart</code><br>(Start of new session)")

    classDef dashedPill fill:#d3d3d3,stroke:#000,stroke-dasharray: 5 5,color:#000;
    classDef regularPill fill:#3273de,stroke:#3273de,color:#fff;
    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;

    class A,B,F regularBox;
    class C,D,E regularPill;
-->

**On app crash or force close**

1. *App launched*
2. `lifecycleStart`
3. *App crashed/force closed (unable to call `lifecyclePause`)*
4. *App launched*
5. `lifecycleStart` (Crash reported)

![](./assets/android/lifecycle-crash.svg)

<!-- mermaid.js diagram definition
graph LR
    A(["1.<br/>App launched"])
    A ==> B(2.<br/><code>lifecycleStart</code>)
    B ==> C(["3.<br/>App crashed/force closed<br>(Unable to call <code>lifecyclePause</code>)"])
    C ==> D(["4.<br/>App launched"])
    D ==> E("5.<br/><code>lifecycleStart</code><br>(Crash reported)")

    classDef dashedPill fill:#d3d3d3,stroke:#000,stroke-dasharray: 5 5,color:#000;
    classDef regularPill fill:#3273de,stroke:#3273de,color:#fff;
    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;

    class A,C,D regularPill;
    class B,E regularBox;
-->

## Troubleshooting unexpected Lifecycle scenarios

The following Lifecycle workflows show examples of the unexpected ordering of Lifecycle events that can impact Lifecycle data and can indicate an incorrect implementation of the Lifecycle APIs.

**Missing pause, app terminated**  
This scenario looks the same as a standard crash, but the underlying reason is an incorrect implementation where `lifecyclePause` is not called before the app is terminated.

1. Expected Lifecycle event(s)
2. `lifecycleStart`
3. *App closed by user (missing `lifecyclePause` call)*
4. *App terminated*
5. `lifecycleStart` (Crash reported)

![](./assets/android/lifecycle-missing-pause-terminated.svg)

**Missing pause, app still in memory**  
This scenarios shows an example of [consecutive `lifecycleStart` API calls](#consecutive-lifecyclestart-api-calls). The app close is not detected because `lifecyclePause` is not called. As the app is not removed from memory, the current session continues.

1. Expected Lifecycle event(s)
2. `lifecycleStart`
3. *App closed by user* (missing `lifecyclePause` call)
4. *App launched*
5. `lifecycleStart` (Session continues)

![](./assets/android/lifecycle-missing-pause-not-terminated.svg)

<!-- mermaid.js diagram definition
graph LR
    A("1.<br/>Expected Lifecycle event(s)")
    A ==> B(2.<br/><code>lifecycleStart</code>)
    B ==> C(["3.<br/>App closed by user<br>(Missing <code>lifecyclePause</code> call)"])
    C ==> D(["4.<br/>App launched"])
    D ==> E(5.<br/><code>lifecycleStart</code>)

    classDef regularPill fill:#3273de,stroke:#3273de,color:#fff;
    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;

    class A,B,E regularBox;
    class D regularPill;
    class C incorrectBox;
-->

In this scenario, the `lifecycleStart` call (5) is not detected as a new session nor a crash. It will have the consequences of a [consecutive `lifecycleStart` API call](#consecutive-lifecyclestart-api-calls).

**Missing start**  
This scenario shows an example of [consecutive `lifecyclePause` API calls](#consecutive-lifecyclepause-api-calls). The new session is not detected because `lifecycleStart` is not called.

1. Expected Lifecycle event(s)
2. `lifecyclePause`
3. *App closed by user*
4. Optionally: *Session timeout window passed*
5. *App launched*
6. `lifecyclePause` (missing `lifecycleStart` call)

![](./assets/android/lifecycle-missing-start.svg)

<!-- mermaid.js diagram definition
graph LR
    A("1.<br/>Expected Lifecycle event(s)")
    A ==> B(2.<br/><code>lifecyclePause</code>)
    B ==> C(["3.<br/>App closed by user"])
    C ==> D(["4.<br/>(Optionally)<br>Session timeout window passed"])
    D ==> E(["5.<br/>App launched"])
    E ==> F("6.<br/><code>lifecyclePause</code><br>(Missing <code>lifecycleStart</code> call)")

    classDef dashedPill fill:#d3d3d3,stroke:#000,stroke-dasharray: 5 5,color:#000;
    classDef regularPill fill:#3273de,stroke:#3273de,color:#fff;
    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;

    class A,B regularBox;
    class C,E regularPill;
    class D dashedPill;
    class F incorrectBox;
-->

In this scenario, the last `lifecyclePause` call (6) is effectively a [consecutive `lifecyclePause` API call](#consecutive-lifecyclepause-api-calls), with the consequences of:

1. Actual app background time - the time between `lifecyclePause` calls (2) and (6) - to be included in Lifecycle data calculations.
2. Potentially affecting detection of a new session start.
