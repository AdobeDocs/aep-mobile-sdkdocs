---
title: Adobe Experience Platform SDK push templates
description: Learn about the push templates provided and supported by the Adobe Campaign Classic Mobile SDK extension.
keywords:
- Adobe Campaign Classic
- Push
- Push Template
- Push Templates
---

# Adobe Experience Platform - push templates

<InlineAlert variant="info" slots="text"/>

Default push template functionality is available for use with the **Adobe Campaign Classic** extension. <br /><br />Supported versions are **Android SDK version 3.1.0+** and **iOS SDK version 5.0.0+**.

## Setup

* [Android](./android/)
* [iOS](./ios/)

## Templates

View the [list of supported templates](./templates/).

## Image specifications

The tables below contain guidelines for your push notification content. **These recommendations help your images display reliably across multiple devices.** These values are guidelines only - it is still recommended to test a notification prior to sending it.

**Android**

|        **Android Image type in notification payload**        |       **ASPECT RATIOS**       | **IMAGE SIZE RANGE** | **SUPPORTED FILE TYPES** | FILE SOURCE                          |
| :----------------------------------------------------------: | :---------------------------: | :------------------: | :----------------------: | ------------------------------------ |
| adb_image (used as the main image in basic, input box, remind later, timer, and zero bezel notifications) | 1:1, 3:2, 5:4, 4:3, 2:1, 16:9 |        < 1 MB        |      PNG, JPG, WebP      | Remote URI                           |
|                        adb_small_icon                        |              1:1              |        < 1 MB        |      PNG, JPG, WebP      | Bundled Drawable Asset               |
|                        adb_large_icon                        |              1:1              |        < 1 MB        |      PNG, JPG, WebP      | Remote URI or Bundled Drawable Asset |
|                       five icon images                       |              1:1              |        < 1 MB        |      PNG, JPG, WebP      | Remote URI or Bundled Drawable Asset |
|             manual and automatic carousel images             |      1:1, 3:2, 5:4, 4:3       |        < 1 MB        |      PNG, JPG, WebP      | Remote URI                           |
|              horizontal product catalog images               |           2:1, 16:9           |        < 1 MB        |      PNG, JPG, WebP      | Remote URI                           |
|               vertical product catalog images                |      1:1, 3:2, 5:4, 4:3       |        < 1 MB        |      PNG, JPG, WebP      | Remote URI                           |

**iOS**

|    **iOS Image type in notification payload**     | **ASPECT RATIOS** | **IMAGE SIZE RANGE** | **SUPPORTED FILE TYPES** | FILE SOURCE |
| :-----------------------------------------------: | :---------------: | :------------------: | :----------------------: | ----------- |
| adb_media (used in basic and timer notifications) |        2:1        |    50 KB to 1 MB     |      PNG, JPG, WebP      | Remote URI  |
|       manual and automatic carousel images        |        2:1        |    50 KB to 1 MB     |      PNG, JPG, WebP      | Remote URI  |
