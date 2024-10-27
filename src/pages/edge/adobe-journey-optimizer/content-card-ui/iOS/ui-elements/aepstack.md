---
title: AEPStack
description: A layout container used to arrange multiple UI elements horizontally or vertically.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Customizing UI
- Card Templates
- Content Card Templates
- Small Image Template
- AEPStack
- AEPHStack
- AEPVStack
- ButtonHStack
- RootHStack
- TextVStack
---

# AEPStack

The AEPStack class is a fundamental layout container used to arrange multiple UI elements horizontally or vertically.

AEPStack conforms to `ObservableObject`, allowing it to be used reactively in SwiftUI views.

## Public Properties

| Property | Type | Description | Default Value |
| --- | --- | --- | --- |
| spacing |	CGFloat |	The spacing between child views in the stack. | 8 |
| modifier |	AEPViewModifier |	A custom view modifier for additional styling. | N/A |

<InlineAlert variant="info" slots="text"/>

All properties are marked with [@Published](https://developer.apple.com/documentation/combine/published). Any changes will trigger updates to your UI.

# AEPHStack

The AEPHStack class extends AEPStack and arranges its child views horizontally. It provides additional customization for aligning child views vertically.

## Public Properties

| Property | Type | Description | Default Value |
| --- | --- | --- | --- |
| alignment | [VerticalAlignment](https://developer.apple.com/documentation/swiftui/verticalalignment) | The vertical alignment of child views in the stack.	| [center](https://developer.apple.com/documentation/swiftui/verticalalignment/center) |

# AEPVStack

The AEPVStack class extends AEPStack and arranges its child views vertically. It provides additional customization for aligning child views horizontally.

## Public Properties

| Property | Type | Description | Default Value |
| --- | --- | --- | --- |
| alignment | [HorizontalAlignment](https://developer.apple.com/documentation/swiftui/horizontalalignment) | The horizontal alignment of child views in the stack.| [center](https://developer.apple.com/documentation/swiftui/horizontalalignment/center) |

## Customization

Below is an example of how to customize the AEPHStack and AEPVStack properties when working with a `SmallImageTemplate`:

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
class MyCustomizer : ContentCardCustomizing {
    
    func customize(template: SmallImageTemplate) {        
        // customize stack properties
        template.rootHStack.spacing = 10
        template.textVStack.alignment = .leading
        template.textVStack.spacing = 20
        
        // Customize the button stack 
        template.buttonHStack.modifier = AEPViewModifier(ButtonHStackModifier())        
    }
    
    struct ButtonStackModifier: ViewModifier {
        func body(content: Content) -> some View {
            content
                .frame(maxWidth: .infinity, alignment: .trailing)
        }
    }
}
```