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

The Lifecycle extension relies solely on the Lifecycle events dispatched by the `lifecycleStart` and `lifecyclePause` calls to determine the start of new sessions and to calculate lifecycle metrics.

## General behavior

All events that are **not** Lifecycle start or Lifecycle pause **do not** affect lifecycle state or metrics. The starting of MobileCore via `registerExtensions` also **does not** start a Lifecycle session nor affect lifecycle metrics.

## Correct call patterns

There are generally three main flows for a correct implementation.

**On app first launch after fresh install**

1. *App launched*
2. Start <- Start of new session
3. Pause
4. Start
5. Pause
6. *App backgrounded*

**On app subsequent launches**

1. *App launched*
2. Start
3. Pause
4. *App backgrounded*
5. *Session timeout window passes*
6. *App launched*
7. Start <- Start of new session
8. ...

**On app crash or force close**

1. *App launched*
2. Start
3. App crashed/force closed - consequences:
   1. Causes missing pause call
   2. App removed from device memory
4. *Session timeout window passes*
5. *App launched*
6. Start <- Crash detected

## Incorrect call patterns

### Start-after-start

Start-after-start causes the Lifecycle extension's shared state version to be updated, but crucially, the start time in persistence **is not** changed. Start-after-start means that: 

1. No new session detection logic will be run nor will lifecycle metrics will be incremented.
2. All lifecycle metrics calculated in the shared state dispatched as a consequence reflect the original start time, not any start-after-start timestamps.

This behavior is only ungated after a pause is seen, and the next start will handle session timeout and other lifecycle logic as normal.

### Pause-after-pause

Pause-after-pause causes the Lifecycle extension's pause timestamp in persistence to be updated to the most recent pause seen. There is no gating behavior like in the start-after-start case. The largest consequence of an unintended pause-after-pause is usually stitching together distinct sessions.

**Missing pause, app terminated** (looks the same as a standard crash, but the reason for the missing pause is different)

1. ...
2. Start
3. *App backgrounded* (missing pause)
4. *App removed from device memory* (user or device initated)
5. Start <- Crash

**Missing pause, app still in memory**

1. ...
2. Start
3. *App backgrounded* (missing pause) + optionally: *Session timeout window passes*
4. Start <- **Not** a crash nor a new session, treated as a start after start - emits lifecycle metrics and does not update the start timestamp in persistence


**Missing start** - extended session length error

1. ...
2. Pause
3. *App backgrounded*
4. *Session timeout window passes* + optionally: *Session timeout window passes*
5. Pause (missing start) <- Moves the pause timestamp to here, effectively stitching together inactive time since the last background, AND not detecting a new session start
