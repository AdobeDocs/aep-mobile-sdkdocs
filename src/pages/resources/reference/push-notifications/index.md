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

Default push template functionality is available for use with the **Adobe Campaign Classic** extension. <br /><br />This is supported by **Android SDK version 3.1.0+** and **iOS SDK version 5.0.0+**.

## Setup

* [Android](./android/)
* [iOS](./ios/)

## Templates

View the [list of supported templates](./templates/).

## Image specifications

The tables below contain guidelines for your push notification content. **These recommendations help your images display reliably across multiple devices.** These values are guidelines only - you should still test a notification prior to sending it.

**Android**

| Image type in notification payload |         Aspect Ratios         | Image Size | Supported File Types | File Source                          |
| :--------------------------------: | :---------------------------: | :--------: | :------------------: | ------------------------------------ |
|             adb_image              | 1:1, 3:2, 5:4, 4:3, 2:1, 16:9 |   < 1 MB   |    PNG, JPG, WebP    | Remote URI                           |
|           adb_small_icon           |              1:1              |   < 1 MB   |    PNG, JPG, WebP    | Bundled Drawable Asset               |
|           adb_large_icon           |              1:1              |   < 1 MB   |    PNG, JPG, WebP    | Remote URI or Bundled Drawable Asset |
|         Multi-icon images          |              1:1              |   < 1 MB   |    PNG, JPG, WebP    | Remote URI or Bundled Drawable Asset |
|         Rating icon images         |              1:1              |   < 1 MB   |    PNG, JPG, WebP    | Remote URI or Bundled Drawable Asset |
|          Carousel images           | 1:1, 3:2, 5:4, 4:3, 2:1, 16:9 |   < 1 MB   |    PNG, JPG, WebP    | Remote URI                           |
|     Filmstrip carousel images      |      1:1, 3:2, 5:4, 4:3       |   < 1 MB   |    PNG, JPG, WebP    | Remote URI                           |
| Horizontal product catalog images  |           2:1, 16:9           |   < 1 MB   |    PNG, JPG, WebP    | Remote URI                           |
|  Vertical product catalog images   |      1:1, 3:2, 5:4, 4:3       |   < 1 MB   |    PNG, JPG, WebP    | Remote URI                           |

`adb_image` is used as the main image in basic, input box, remind later, timer, and zero bezel notifications.

**iOS**

| Image type in notification payload | Aspect Ratios |  Image Size   | Supported File Types | File Source |
| :--------------------------------: | :-----------: | :-----------: | :------------------: | ----------- |
|             adb_media              |      2:1      | 50 KB to 1 MB |    PNG, JPG, WebP    | Remote URI  |
|          Carousel images           |      2:1      | 50 KB to 1 MB |    PNG, JPG, WebP    | Remote URI  |

 `adb_media` is used as the main image in basic and timer notifications
