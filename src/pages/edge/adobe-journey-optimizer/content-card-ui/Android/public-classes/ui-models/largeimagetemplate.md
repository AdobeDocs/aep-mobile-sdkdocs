---
title: LargeImageTemplate
description: This document contains information on the LargeImageTemplate class.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Customizing UI
- Card Templates
- Content Card Templates
- Small Image Template
- Android
---

# LargeImageTemplate

Class which implements [AepUITemplateType](./aepuitemplatetype.md) and represents a large image template.

## Public Properties

| Property     | Type                               | Description                                                  |
| ------------ | ---------------------------------- | ------------------------------------------------------------ |
| `id`         | String                             | The unique identifier for this template.                     |
| `title`      | [AepText](./aeptext.md)            | The title text and display settings.                         |
| `body`       | [AepText](./aeptext.md)?           | The body text and display settings.                          |
| `image`      | [AepImage](./aepimage.md)?         | The details of the image to be displayed.                    |
| `actionUrl`  | String?                            | The URL to be opened when the large image card is clicked.   |
| `buttons`    | List<[AepButton](./aepbutton.md)>? | The details for the large image template buttons.            |
| `dismissBtn` | [AepIcon](./aepicon.md)?           | The details for the large image template dismiss button.     |

## Methods

### getType

Returns the type of this template, which is `AepUITemplateType.LARGE_IMAGE`.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

``` kotlin
override fun getType() = AepUITemplateType.LARGE_IMAGE
```


