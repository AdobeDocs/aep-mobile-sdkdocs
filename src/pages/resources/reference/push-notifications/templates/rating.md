---
title: Adobe Experience Platform SDK timer push template
description: Timer push template supported by Adobe Campaign Classic mobile extension.
keywords:
- Adobe Campaign Classic
- Push
- Push Template
- Timer
---

import Tabs from './tabs/timer.md'

# Push template - rating

A notification that allows displaying a title, text, and image, along with 3-5 image buttons that allow the user to provide "rating" feedback.</br>

After a rating is selected in the notification, an intent containing the rating is dispatched to the app.

The table below shows all available properties in the respective payload for FCM (Android).
<br />
<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

FCM

<Tabs query="platform=fcm&template=timer"/>
