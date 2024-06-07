---
title: Adobe Experience Platform SDK basic push template
description: Basic push template supported by Adobe Campaign Classic mobile extension.
keywords:
- Adobe Campaign Classic
- Push
- Push Template
- Input Box
---

import Tabs from './tabs/input-box.md'

# Push template - input box

A notification including a title, message body, optional image, and a user input text field.

After receiving text input, an intent containing the input is dispatched to the app and a feedback received notification can be displayed if a feedback message or image is provided in the push payload.

The table below shows all available properties in the respective payload for FCM (Android).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

FCM

<Tabs query="platform=fcm&template=input-box"/>
