---
title: AEPButton
description: The AEPButton class is a fundamental UI component used to create interactive buttons for content cards.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Customizing UI
- Card Templates
- Content Card Templates
- Small Image Template
- AEPButton
---

# AEPButton

The AEPButton class is a fundamental UI component used to create interactive buttons for content cards.

Customization of the button's properties can be achieved with a custom view modifier. 

AEPButton conforms to `ObservableObject`, allowing it to be used reactively in SwiftUI views.

## Public Properties

| Property |	Type |	Description |
| --- | --- | --- |
| text | [AEPText](aeptext.md) |	The text model representing the button's label. |
| modifier |	`AEPViewModifier` |	A custom view modifier that can be applied to the button view for additional styling. |

<InlineAlert variant="info" slots="text"/>

All properties are marked with [@Published](https://developer.apple.com/documentation/combine/published). Any changes will trigger updates to the UI.

## Customization

You can customize the `AEPButton` properties when working with a template that includes a button. Here's an example:

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
class MyCustomizer: ContentCardCustomizing {
    func customize(template: SmallImageTemplate) {
        // Customize the button element
        template.buttons?.first?.text.font = .headline
        template.buttons?.first?.text.textColor = .white
        template.buttons?.first?.modifier = AEPViewModifier(MyButtonModifier())
    }
    
    struct MyButtonModifier: ViewModifier {
        func body(content: Content) -> some View {
            content
                .padding()
                .background(Color.blue)
                .cornerRadius(10)
        }
    }
}
```