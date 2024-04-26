---
title: AEP SDK basic push template
description: Basic push template supported by Adobe Campaign Classic mobile extension.
keywords:
- Adobe Campaign Classic
- Push
- Push Template
- Basic
---

import Tabs from './tabs/basic.md'

# Push template - basic

A standard notification including a title, subtitle, message body, optional image, icons, link, buttons.<br />Alternate title and body can optionally be specified for when the notification is expanded by the user.

The tables below show all available properties in their respective payloads for FCM (Android) and APNS (iOS).
<br />
<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

FCM

<Tabs query="platform=fcm&template=basic"/>

APNS

<Tabs query="platform=apns&template=basic"/>
