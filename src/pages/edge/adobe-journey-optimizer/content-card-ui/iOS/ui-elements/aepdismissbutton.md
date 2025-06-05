---
title: AEPDismissButton
description: The AEPDismissButton class is a fundamental UI component used to create a dismiss button for content cards.
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
- AEPDismissButton
---

# AEPDismissButton

The AEPDismissButton class is a fundamental UI component used to create a dismiss button for content cards.

Customization of the dismiss button's properties can be achieved with a custom view modifier.

AEPDismissButton conforms to `ObservableObject`, allowing it to be used reactively in SwiftUI views.

## Public Properties

| Property |	Type |	Description |
| --- | --- | --- |
| image | [AEPImage](aepimage.md) |	The image model representing the dismiss button's image. |
| alignment | [Alignment](https://developer.apple.com/documentation/swiftui/alignment) |	The alignment of the dismiss button within the content card. |
| modifier |	`AEPViewModifier` |	A custom view modifier that can be applied to the dismiss button view for additional styling. |

<InlineAlert variant="info" slots="text"/>

All properties are marked with [@Published](https://developer.apple.com/documentation/combine/published). Any changes will trigger updates to the UI.

## Customization

You can customize the AEPDismissButton properties when working with a template that includes a dismiss button. Here's an example:

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
class MyCustomizer: ContentCardCustomizing {
    func customize(template: SmallImageTemplate) {        
        // Customize the dismiss button
        template.dismissButton?.image.icon = "xmark.diamond"  // SF Symbol name
        template.dismissButton?.image.iconColor = .primary
        template.dismissButton?.image.iconFont = .system(size: 10)
        template.dismissButton?.alignment = .topTrailing
        template.dismissButton?.modifier = AEPViewModifier(MyDismissButtonModifier())
    }
    
    struct MyDismissButtonModifier: ViewModifier {
        func body(content: Content) -> some View {
            content
                .padding()                
        }
    }
}
```
