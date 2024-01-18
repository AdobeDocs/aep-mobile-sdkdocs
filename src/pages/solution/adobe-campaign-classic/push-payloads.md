---
title: Adobe Campaign Classic push templates
description: OOTM push templates supported by the Adobe Campaign Classic mobile extension.
keywords:
- Adobe Campaign Classic
- Push
- Push Template
---

import Tabs from './tabs/push-payloads.md'

# Adobe Campaign Classic - push templates

This document outlines out of the box push templates supported in Adobe Campaign Classic extension.

| **Template Name** | **Availability** | **Description** |
| :---------------- | :--------------- | :-------------- |
| [Basic](#basic) | **Android** - v2.1.0+ <br />**iOS** - coming soon | A basic push notification template. <br />Allows setting a title, message body, and optional image, action buttons, and click-through URL. Also supports a "remind me later" functionality which will schedule the notification to be re-delivered at a later time. |
| [Carousel](#carousel) | **Android** - v2.1.0+ <br />**iOS** - coming soon | Shows a series of two (2) to five (5) images that scroll on and off the side of the notification. <br />Available in `manual` mode (user must click a button to scroll carousel items) and `auto` mode (carousel items scroll every five seconds). |

# Template payload definitions

Templates below show all available properties in their respective payloads for FCM (Android) and APNS (iOS).

## Basic

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

FCM

<Tabs query="platform=fcm&template=basic"/>

APNS

<Tabs query="platform=apns&template=basic"/>

## Carousel

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

FCM

<Tabs query="platform=fcm&template=carousel"/>

APNS

<Tabs query="platform=apns&template=carousel"/>