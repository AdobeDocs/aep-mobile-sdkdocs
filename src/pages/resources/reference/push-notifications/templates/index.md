---
title: AEP SDK push templates
description: OOTB push templates supported by the Adobe Journey Optimizer and Adobe Campaign Classic mobile SDK extensions.
keywords:
- Adobe Campaign Classic
- Adobe Journey Optimizer
- Push
- Push Template
- Push Templates
---

# Adobe Experience Platform - push templates

This document outlines each supported out of the box push template.

<InlineAlert variant="info" slots="text"/>

Out of the box push template functionality is currently only available for use with the **Adobe Campaign Classic** extension. <br /><br />Push templates functionality requires **Android SDK version 3.1.0+** or **iOS SDK version 5.1.0+**.

| **Template Name** | **Availability** | **Description** |
| :---------------- | :--------------- | :-------------- |
| [Basic](./basic) | **Android** - v3.1.0+ <br />**iOS** - 5.1.0+ | A basic push notification template. <br />Allows setting a title, message body, and optional image, action buttons, and click-through URL. <br /><br />For **Android only**, it also supports a "remind me later" functionality which will schedule the notification to be re-delivered at a later time. |
| [Carousel](./carousel) | **Android** - v3.1.0+ <br />**iOS** - 5.1.0+ | Shows a series of three (3) to five (5) images that scroll on and off the side of the notification. <br /><br />Available in `manual` mode (user must click a button to scroll carousel items) and `auto` mode (carousel items scroll every five seconds). |
| [Timer](./timerl) | **Android** - v3.1.0+ <br />**iOS** - 5.1.0+ | Notification containing title, body, and image.  Configure a countdown timer which upon expiry can cause a new title, body, and image to be shown. |
