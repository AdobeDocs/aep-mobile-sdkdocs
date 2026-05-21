---
title: AEPText
description: A fundamental UI component used to display text for content cards.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Customizing UI
- Card Templates
- Content Card Templates
- Small Image Template
- AEPText
- TextVStack
---

# AEPText

The AEPText class is a fundamental UI component used to display text for content cards.

This class allows you to customize the text element with properties like font, color, and modifier.

AEPText class conforms to `ObservableObject`, allowing it to be used reactively in SwiftUI views.

## Properties

| Property | Type | Description | Default Value |
| --- | --- | --- | --- |
| content | String | The actual text content to be displayed. | N/A |
| font | [Font](https://developer.apple.com/documentation/swiftui/font) | The font to be used for the text. | See [Default font values](#default-font-values) below. |
| color | [Color](https://developer.apple.com/documentation/swiftui/color) | The color of the text. | See [Default color values](#default-color-values) below. |
| modifier | AEPViewModifier | A custom view modifier that can be applied to the text view for additional styling. | N/A |

### Default font values

The default font depends on the type of text:

* **Title**: System font, Size 15, Medium weight
* **Body**: System font, Size 13, Regular weight
* **ButtonText**: System font, Size 13, Regular weight

### Default color values

The default color depends on the type of text:

* **Title**: [primary](https://developer.apple.com/documentation/swiftui/color/primary)
* **Body**: [secondary](https://developer.apple.com/documentation/swiftui/color/primary)
* **ButtonText**: [blue](https://developer.apple.com/documentation/swiftui/color/blue)

<InlineAlert variant="info" slots="text"/>

All properties are marked with [@Published](https://developer.apple.com/documentation/combine/published). Any changes will trigger updates to your UI.

## Customization

Below is an example of how to customize the `AEPText` properties when working with a `SmallImageTemplate`:

<CodeBlock slots="heading, code" repeat="1" />

### Swift

```swift
class MyCustomizer : ContentCardCustomizing {

    func customize(template: SmallImageTemplate) {
        // Customize the title text element
        template.title.font = .subheadline
        template.title.textColor = .green
        template.title.modifier = AEPViewModifier(MyTitleModifier())

        // Customize the body text element, if available
        template.body?.font = .caption
    }

    struct MyTitleModifier: ViewModifier {
        func body(content: Content) -> some View {
            content
                .padding()
                .background(Color.yellow)
                .cornerRadius(5)
        }
    }
}
```
