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

This document outlines the push templates that are supported by default.

<InlineAlert variant="info" slots="text"/>

Default push template functionality is available for use with the **Adobe Campaign Classic** extension. <br /><br />Supported versions are **Android SDK version 3.1.0+** and **iOS SDK version 5.0.0+**.

| Template Name | Compatibility | Description | Sample |
| :------------ | :------------ | :---------- | :----- |
| [Basic](./basic) | **Android**<br />**> Product**<br /> *Adobe Campaign Classic*<br /> **> SDK Extension**<br /> *CampaignClassic 3.1.0+* <br /><br />**iOS**<br /> **> Product**<br />*Adobe Campaign Classic*<br /> **> SDK Extension**<br /> *AEPNotificationContent 5.0.0+* | A basic push notification template. <br />Allows setting a title, message body, and optional image, action buttons, and click-through URL. <br /><br />For **Android only**, it also supports a "remind me later" functionality which will schedule the notification to be re-delivered at a later time. | ![gif of sample basic notification](./../templates/assets/basic.gif) |
| [Carousel](./carousel) | **Android**<br />**> Product**<br /> *Adobe Campaign Classic*<br /> **> SDK Extension**<br />  *CampaignClassic 3.1.0+* <br /><br />**iOS**<br /> **> Product**<br />*Adobe Campaign Classic*<br /> **> SDK Extension**<br /> *AEPNotificationContent 5.0.0+* | Shows a series of three (3) to five (5) images that scroll on and off the side of the notification. <br /><br />Available in `manual` mode (user must click a button to scroll carousel items) and `auto` mode (carousel items scroll every five seconds). | ![gif of sample carousel notification](./../templates/assets/carousel.gif) |
| [Timer](./timerl) | **Android**<br />**> Product**<br /> *Adobe Campaign Classic*<br /> **> SDK Extension**<br />  *CampaignClassic 3.1.0+* <br />**iOS**<br /> **> Product**<br />*Adobe Campaign Classic*<br /> **> SDK Extension**<br /> *AEPNotificationContent 5.0.0+* | Notification containing title, body, and image.  Configure a countdown timer which upon expiry can cause a new title, body, and image to be shown. | ![gif of sample timer notification](./../templates/assets/timer.gif) |
| [Input Box](./input_box) | **Android**<br />**> Product**<br /> *Adobe Campaign Classic*<br /> **> SDK Extension**<br />  *CampaignClassic 3.1.0+* <br /> | Notification containing title, body, and image.  The notification contains a user input field which can receive user text input to be sent to the app via intent. After input is received the notification can be updated with a feedback image and/or feedback message. |  |
| [Zero Bezel](./zero_bezel) | **Android**<br />**> Product**<br /> *Adobe Campaign Classic*<br /> **> SDK Extension**<br />  *CampaignClassic 3.1.0+* <br /> | Notification containing title, body, and an edge to edge background image which fills the notification area. |  |
| [Product Catalog](./catalog) | **Android**<br />**> Product**<br /> *Adobe Campaign Classic*<br /> **> SDK Extension**<br />  *CampaignClassic 3.1.0+* <br /> | Notification containing a main product image which can be changed by pressing one of the three product thumbnails present on the notification. The notification also contains a CTA button to redirect the app user to a specified uri. <br />Product catalog notifications have two layout styles: vertical and horizontal. The vertical layout should be used with 4:3 aspect ratio images and the horizontal layout should be used with wide screen aspect ratio images. |  |
| [Rating](./rating) | **Android**<br />**> Product**<br /> *Adobe Campaign Classic*<br /> **> SDK Extension**<br />  *CampaignClassic 3.1.0+* <br /> | Notification containing title, body, and image.  The notification contains three to five customizable rating icons which can be pressed to provide a rating to the app via an intent. |  |
| [Five icon](./five_icon) | **Android**<br />**> Product**<br /> *Adobe Campaign Classic*<br /> **> SDK Extension**<br />  *CampaignClassic 3.1.0+* <br /> | Notification containing three to five icons. Each icon can be pressed to be redirected to a specified uri. The notification is persistent and will remain in the notification tray when it is interacted with. |  |
