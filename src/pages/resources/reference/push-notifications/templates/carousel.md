---
title: Adobe Experience Platform SDK carousel push template
description: Carousel push template supported by Adobe Campaign Classic mobile extension.
keywords:
- Adobe Campaign Classic
- Push
- Push Template
- Carousel
---

import Tabs from './tabs/carousel.md'

# Push template - carousel

A notification that shows a series of three to five images that scroll on/off the sides of the notification.

If operating in automatic mode, images will rotate every five (5) seconds. If operating in manual mode, the user is required to push a button to advance forwards or backwards through the carousel.

Templates below show all available properties in their respective payloads for FCM (Android) and APNS (iOS).
<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

FCM

<Tabs query="platform=fcm&template=carousel"/>

APNS

<Tabs query="platform=apns&template=carousel"/>
