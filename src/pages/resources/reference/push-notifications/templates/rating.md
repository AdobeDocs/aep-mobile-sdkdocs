---
title: Adobe Experience Platform SDK rating push template
description: Rating push template supported by Adobe Campaign Classic mobile extension.
keywords:
- Adobe Campaign Classic
- Push
- Push Template
- Rating
---

import Tabs from './tabs/rating.md'

# Push template - rating

A notification that allows displaying a title, text, and image, along with 3-5 image buttons that allow the user to provide "rating" feedback. The number of image buttons displayed matches the number of rating actions defined in the `adb_rate_act` key-value pair.

After a rating is selected in the notification, an `Intent` containing the rating is dispatched to the app.

The table below shows all available properties in the respective payload for FCM (Android).
<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

FCM

<Tabs query="platform=fcm&template=rating"/>
