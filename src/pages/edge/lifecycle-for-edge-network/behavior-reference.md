---
title: Mobile Core Lifecycle for Edge Network behavior reference
description: A reference for understanding how Lifecycle for Edge Network behaves under different scenarios.
keywords:
- Lifecycle
- Lifecycle V2
- Lifecycle for Mobile Core
- Lifecycle for Platform
- Lifecycle for Edge Network
- Lifecycle Edge
- Lifecycle iOS
- Lifecycle Android
- Product reference
---

# Lifecycle for Edge Network behavior reference

The Lifecycle for Edge Network extension introduces a new way of collecting Lifecycle data and tracking sessions. Unlike the previous Lifecycle extension, which used a configurable timeout window for session tracking, this extension emits Application Launch and Close events, treating each pair as an independent session. As a result of not relying on a session timeout window to identify new sessions, the potential Lifecycle states are simplified.

## General behavior

The Lifecycle for Edge Network extension relies solely on the Lifecycle events dispatched by the [`lifecycleStart`](../../home/base/mobile-core/lifecycle/api-reference.md#lifecyclestart) and [`lifecyclePause`](../../home/base/mobile-core/lifecycle/api-reference.md#lifecyclepause) calls to determine the start and end of new sessions and to calculate lifecycle data.

A Lifecycle session is the time between a `lifecycleStart` call and a `lifecyclePause` call. A new session is detected when `lifecycleStart` is called after app first launch or after a `lifecyclePause`.

All events that are not Lifecycle start or Lifecycle pause do not affect Lifecycle state or data. Starting MobileCore using `registerExtensions` does not automatically start a Lifecycle session nor does it affect Lifecycle data.

#### Event reference

Events dispatched by the Lifecycle extension to support Adobe Experience Platform Edge Network workflows include:

* [Lifecycle Application Launch (Foreground)](../../home/base/mobile-core/lifecycle/event-reference.md#lifecycle-application-foreground)
* [Lifecycle Application Close (Background)](../../home/base/mobile-core/lifecycle/event-reference.md#lifecycle-application-background)

For full event details, please read the [Lifecycle event reference](../../home/base/mobile-core/lifecycle/event-reference.md).

#### Data payloads

The Lifecycle for Edge Network event payloads are defined by the Platform Mobile Lifecycle Details XDM field group, and include information about the application, device, and environment when the event occurred. Please refer to [Lifecycle for Edge Network data](metrics.md) for the data included with these events.

## Expected Lifecycle scenarios

The following Lifecycle workflows show examples of the expected ordering of Lifecycle events.

### App launch and close

This scenario shows the standard Lifecycle workflow, with expected Lifecycle API calls.

![](./assets/index/lifecycle-app-launch-and-close.svg)

<!-- 
%%{
  init: {
    'themeVariables': {
      'lineColor': '#7a7a7a'
    }
  }
}%%
graph LR
    A(["1.<br/>App launched"]) ==> graph1
    graph1 ==> D(["3.<br/>App closed by user"])
    D ==> graph2

    subgraph graph1 [" "]
        direction TB
        B("2a.<br/><code>lifecycleStart</code><br/>(Start of new session)") ==> C("2b.<br/>Application Launch (Foreground)")
    end

    subgraph graph2 [" "]
        direction TB
        E(4a.<br/><code>lifecyclePause</code>) ==> F("4b.<br/>Application Close (Background)<br/>(Close type: close)")
    end

    classDef dashedPill fill:#d3d3d3,stroke:#000,stroke-dasharray: 5 5,color:#000;
    classDef regularPill fill:#3273de,stroke:#3273de,color:#fff;
    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;
    classDef transparentSubgraph fill:transparent,stroke:#7a7a7a;

    class A,D regularPill;
    class B,C,E,F regularBox;
    class graph1,graph2 transparentSubgraph;
-->

### On app crash or force close

This scenario shows the standard Lifecycle workflow when the application crashes or is force closed, preventing `lifecyclePause` from being called.

![](./assets/index/lifecycle-crash.svg)

<!-- mermaid.js diagram definition
%%{
  init: {
    'themeVariables': {
      'lineColor': '#7a7a7a'
    }
  }
}%%
graph LR
    A(["1.<br/>App launched"]) ==> graph1
    graph1 ==> D(["3.<br/>App crashed/force closed<br/>(Unable to call <code>lifecyclePause</code>)"])
    D ==> E(["4.<br/>App launched"])
    E ==> graph2

    subgraph graph1 [" "]
        direction TB
        B("2a.<br/><code>lifecycleStart</code><br/>") ==> C("2b.<br/>Application Launch (Foreground)")
    end

    subgraph graph2 [" "]
        direction TB
        F("5a.<br/><code>lifecycleStart</code><br/>") ==> G("5b.<br/>Application Close (Background)<br/>(Close type: unknown)")
        G ==> H("5c.<br/>Application Launch (Foreground)")
    end

    classDef dashedPill fill:#d3d3d3,stroke:#000,stroke-dasharray: 5 5,color:#000;
    classDef regularPill fill:#3273de,stroke:#3273de,color:#fff;
    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;
    classDef transparentSubgraph fill:transparent,stroke:#7a7a7a;

    class A,D,E regularPill;
    class B,C,F,G,H regularBox;
    class graph1,graph2 transparentSubgraph;
-->

### Rapid successive lifecyclePause and lifecycleStart calls

This scenario shows the handling of rapid successive calls to `lifecyclePause` followed by `lifecycleStart`. This is designed to accommodate use cases such as in Android, where Lifecycle APIs are linked to the Android Activity lifecycle callback methods. When users transition between activities within the same app, this logic prevents these transitions from being tracked as individual sessions.

![](./assets/index/lifecycle-rapid-successive-calls.svg)

<!-- 
%%{
  init: {
    'themeVariables': {
      'lineColor': '#7a7a7a'
    }
  }
}%%
graph LR
    A(["1.<br/>App launched<br/>(ex: Activity A)"]) ==> graph1
    graph1 ==> D(["3.<br/>Activity B launched<br/>(Activity A closing)"])
    D ==> graph2
    graph2 == < 0.5 sec ==> graph3

    subgraph graph1 [" "]
        direction TB
        B("2a.<br/><code>lifecycleStart</code><br/>(Activity A)") ==> C("2b.<br/>Application Launch (Foreground)")
    end

    subgraph graph2 [" "]
        direction TB
        E("4a.<br/><code>lifecyclePause</code><br/>(Activity A)") ==> F("4b.<br/>Pause task queued")
    end

    subgraph graph3 [" "]
        direction TB
        G("5a.<br/><code>lifecycleStart</code><br/>(Activity B)") ==> H("5b.<br/>1. Cancels pause task (4b)<br/>2. No Application Launch event<br/>3. No Lifecycle data changes")
    end

    classDef dashedPill fill:#d3d3d3,stroke:#000,stroke-dasharray: 5 5,color:#000;
    classDef regularPill fill:#3273de,stroke:#3273de,color:#fff;
    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;
    classDef transparentSubgraph fill:transparent,stroke:#7a7a7a;

    class A,D regularPill;
    class B,C,E,F,G,H regularBox;
    class graph1,graph2,graph3 transparentSubgraph;
  -->

## Troubleshooting unexpected Lifecycle scenarios

The following Lifecycle workflows show examples of the unexpected ordering of Lifecycle events that can impact Lifecycle data and can indicate an incorrect implementation of the Lifecycle APIs. To address the following scenarios, refer to the [implementation guide for Lifecycle](/src/pages/home/base/mobile-core/lifecycle/index.md).

### Consecutive Lifecycle API calls

Consecutive `lifecycleStart` and consecutive `lifecyclePause` API calls will not update their respective timestamps stored in persistence, and Lifecycle data is not changed.

#### Consecutive `lifecycleStart` API calls

![](./assets/index/lifecycle-start-after-start.svg)

<!-- 
%%{
  init: {
    'themeVariables': {
      'lineColor': '#7a7a7a'
    }
  }
}%%
graph LR
    graph1 == "1. App still in memory<br>2. <code>lifecyclePause</code> not called" ==> graph2

    subgraph graph1 [" "]
        direction TB
        B(1a.<br/><code>lifecycleStart</code>) ==> C("1b.<br/>Application Launch (Foreground)")
        class graph1 transparentSubgraph;
    end

    subgraph graph2 [" "]
        direction TB
        E(2a.<br/><code>lifecycleStart</code>) ==> F("2b.<br/>Call ignored, no event dispatched")
        class graph2 transparentSubgraph;
    end

    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;
    classDef transparentSubgraph fill:transparent,stroke:#7a7a7a;

    class B,C,F regularBox;
    class E incorrectBox;
 -->

#### Consecutive `lifecyclePause` API calls

![](./assets/index/lifecycle-pause-after-pause.svg)

<!-- 
%%{
  init: {
    'themeVariables': {
      'lineColor': '#7a7a7a'
    }
  }
}%%
graph LR
    graph1 == "1. App still in memory<br>2. <code>lifecycleStart</code> not called" ==> graph2

    subgraph graph1 [" "]
        direction TB
        B(1a.<br/><code>lifecyclePause</code>) ==> C("1b.<br/>Application Close (Background)")
        class graph1 transparentSubgraph;
    end

    subgraph graph2 [" "]
        direction TB
        E(2a.<br/><code>lifecyclePause</code>) ==> F("2b.<br/>Call ignored, no event dispatched")
        class graph2 transparentSubgraph;
    end

    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;
    classDef transparentSubgraph fill:transparent,stroke:#7a7a7a;

    class B,C,F regularBox;
    class E incorrectBox;
 -->

### Missing pause, app terminated

This scenario looks the same as a standard crash, but the underlying reason is an incorrect implementation where `lifecyclePause` is not called before the app is terminated.

![](./assets/index/lifecycle-missing-pause-terminated.svg)

<!-- mermaid.js diagram definition
%%{
  init: {
    'themeVariables': {
      'lineColor': '#7a7a7a'
    }
  }
}%%
graph LR
    A(["1.<br/>App launched"]) ==> graph1
    graph1 ==> D(["3.<br/>App closed normally<br/>(Incorrect implementation:<br/>Missing <code>lifecyclePause</code>)"])
    D ==> E(["4.<br/>App removed<br/>from memory"])
    E ==> F(["5.<br/>App launched"])
    F ==> graph2

    subgraph graph1 [" "]
        direction TB
        B("2a.<br/><code>lifecycleStart</code><br/>") ==> C("2b.<br/>Application Launch (Foreground)")
    end

    subgraph graph2 [" "]
        direction TB
        G("6a.<br/><code>lifecycleStart</code><br/>") ==> H("6b.<br/>Application Close (Background)<br/>(Close type unknown)")
        H ==> I("6c.<br/>Application Launch (Foreground)")
    end

    classDef dashedPill fill:#d3d3d3,stroke:#000,stroke-dasharray: 5 5,color:#000;
    classDef regularPill fill:#3273de,stroke:#3273de,color:#fff;
    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;
    classDef transparentSubgraph fill:transparent,stroke:#7a7a7a;

    class A,E,F regularPill;
    class D incorrectBox;
    class B,C,G,H,I regularBox;
    class graph1,graph2 transparentSubgraph;
-->

### Missing pause, app still in memory

This scenario shows an example of [consecutive `lifecycleStart` API calls](#consecutive-lifecyclestart-api-calls). The app close is not detected because `lifecyclePause` is not called. As the app is not removed from memory, the current session continues.

![](./assets/index/lifecycle-missing-pause-not-terminated.svg)

<!-- mermaid.js diagram definition
%%{
  init: {
    'themeVariables': {
      'lineColor': '#7a7a7a'
    }
  }
}%%
graph LR
    A(["1.<br/>App launched"]) ==> graph1
    graph1 ==> D(["3.<br/>App closed normally<br/>(Incorrect implementation:<br/>Missing <code>lifecyclePause</code>)"])
    D ==> E(["4.<br/>App launched<br/>(Still in memory)"])
    E ==> graph2

    subgraph graph1 [" "]
        direction TB
        B("2a.<br/><code>lifecycleStart</code><br/>") ==> C("2b.<br/>Application Launch (Foreground)")
    end

    subgraph graph2 [" "]
        direction TB
        F("5a.<br/><code>lifecycleStart</code><br/>(Consecutive start)") ==> G("5b.<br/>Call ignored, no event dispatched")
    end

    classDef dashedPill fill:#d3d3d3,stroke:#000,stroke-dasharray: 5 5,color:#000;
    classDef regularPill fill:#3273de,stroke:#3273de,color:#fff;
    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;
    classDef transparentSubgraph fill:transparent,stroke:#7a7a7a;

    class A,E regularPill;
    class D incorrectBox;
    class B,C,F,G regularBox;
    class graph1,graph2 transparentSubgraph;
-->

In this scenario, the `lifecycleStart` call (5a) is not detected as a new session nor a crash. It will have the consequence of a [consecutive `lifecycleStart` API call](#consecutive-lifecyclestart-api-calls).

### Missing start

This scenario shows an example of a missing `lifecycleStart` call (1). The new session is not detected because `lifecycleStart` is not called.

![](./assets/index/lifecycle-missing-start.svg)

<!-- mermaid.js diagram definition
%%{
  init: {
    'themeVariables': {
      'lineColor': '#7a7a7a'
    }
  }
}%%
graph LR
    A(["1.<br/>App launched<br/>(Incorrect implementation:<br/>Missing <code>lifecycleStart</code>)"]) ==> B(["2.<br/>App closed normally"])
    B ==> graph1

    subgraph graph1 [" "]
        direction TB
        C(3a.<br/><code>lifecyclePause</code>) ==> D("3b.<br/>Application Close (Background)")
    end

    classDef dashedPill fill:#d3d3d3,stroke:#000,stroke-dasharray: 5 5,color:#000;
    classDef regularPill fill:#3273de,stroke:#3273de,color:#fff;
    classDef regularBox fill:#009c3b,stroke:#009c3b,color:#fff;
    classDef incorrectBox fill:#EB1000,stroke:#EB1000,color:#fff;
    classDef transparentSubgraph fill:transparent,stroke:#7a7a7a;

    class B regularPill;
    class A incorrectBox;
    class C,D regularBox;
    class graph1 transparentSubgraph;
-->

In this scenario, the `lifecyclePause` call (3a) will dispatch an Application Close event only if the Lifecycle extension state is not already set to Pause (that is, `lifecyclePause` has not been called before the current call). Otherwise, it is effectively a [consecutive `lifecyclePause` API call](#consecutive-lifecyclepause-api-calls).
