---
title: ContentCardCustomizing
description: A protocol to be implemented for customizing content cards based on the template type.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Tutorial
- Customizing UI
- UI
- Card Templates
---

# ContentCardCustomizing

Protocol defining methodology for customizing content cards based on the template type.

## Protocol Definition

<CodeBlock slots="heading, code" repeat="1" />

### Swift

```swift
protocol ContentCardCustomizing {
    func customize(template: SmallImageTemplate)
}
```

## Methods

### customize

Customize content cards with [SmallImageTemplate](../templates/smallimage-template.md).

#### Parameters

* _template_ - The `SmallImageTemplate` instance to be customized.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" />

#### Swift

```swift
func customize(template: SmallImageTemplate)
```
