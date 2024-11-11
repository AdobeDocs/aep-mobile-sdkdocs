---
title: SmallImageTemplate
description: This document contains information on the SmallImageTemplate class.
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

# SmallImageTemplate

Class which implements [AepUITemplateType](./aepuitemplatetype) and represents a small Image template.

## Public Properties

| Property   | Type                               | Description                                                  |
| ---------- | ---------------------------------- | ------------------------------------------------------------ |
| id         | String                             | The unique identifier for this template.                     |
| title      | [AepText](./aeptext.md)            | The title text and display settings.                         |
| body       | [AepText](./aeptext.md)?           | The body text and display settings.                          |
| image      | [AepImage](./aepimage.md)?         | The details of the image to be displayed.                    |
| actionUrl  | String?                            | The URL to be opened when the the small image card is clicked. |
| buttons    | List<[AepButton](./aepbutton.md)>? | The details for the small image template buttons.            |
| dismissBtn | [AepIcon](./aepicon.md)?           | The details for the small image template dismiss button.     |

## Methods

### getType 

Returns the type of this template, which is `AepUITemplateType.SMALL_IMAGE`.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

``` kotlin
override fun getType() = AepUITemplateType.SMALL_IMAGE
```