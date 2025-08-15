---
title: ImageOnlyTemplate
description: This document contains information on the ImageOnlyTemplate class.
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

# ImageOnlyTemplate

<InlineAlert variant="info" slots="text"/>

ImageOnlyTemplate is only available in AEP SDK BOM version 3.15.0+.

Class which implements [AepUITemplateType](./aepuitemplatetype.md) and represents an image-only template.

## Public Properties

| Property     | Type                             | Description                                               |
| ------------ | -------------------------------- | --------------------------------------------------------- |
| `id`         | String                           | The unique identifier for this template.                  |
| `image`      | [AepImage](./aepimage.md)        | The details of the image to be displayed.                 |
| `actionUrl`  | String?                          | The URL to be opened when the image-only card is clicked. |
| `dismissBtn` | [AepIcon](./aepicon.md)?         | The details for the image-only template dismiss button.   |

## Methods

### getType

Returns the type of this template, which is `AepUITemplateType.IMAGE_ONLY`.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

``` kotlin
override fun getType() = AepUITemplateType.IMAGE_ONLY
```
