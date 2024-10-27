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

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
protocol ContentCardCustomizing {
    func customize(template: SmallImageTemplate)
}
```

## Methods

### customize 

Customize content cards with [SmallImageTemplate](../PublicClasses/Template/smallimage-template.md).

#### Parameters

- _template_ - The `SmallImageTemplate` instance to be customized.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

``` swift
func customize(template: SmallImageTemplate)
```