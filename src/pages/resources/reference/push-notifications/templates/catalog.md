---
title: Adobe Experience Platform SDK basic push template
description: Basic push template supported by Adobe Campaign Classic mobile extension.
keywords:
- Adobe Campaign Classic
- Push
- Push Template
- Product Catalog
---

import Tabs from './tabs/catalog.md'

# Push template - product catalog

A notification containing a central image which can show one of three products.

The user can select a product thumbnail to highlight it in the main image, causing the title, body, image, and product price to update in the notification.

A call-to-action (CTA) button is provided to specify an action to take when the user interacts with a product.

The table below shows all available properties in the respective payload for FCM (Android).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

FCM

<Tabs query="platform=fcm&template=catalog"/>
