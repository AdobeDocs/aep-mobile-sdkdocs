---
title: AEPImage
description: The AEPImage class is a fundamental UI component used to display images for content cards.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Customizing UI
- Card Templates
- Content Card Templates
- Small Image Template
- AEPImage
---

# AEPImage

The AEPImage class is a fundamental UI component used to display images for content cards.

Images can be displayed from various sources (URL, bundle, or SF Symbols) and their appearance can be customized. 

AEPImage conforms to `ObservableObject`, allowing it to be used reactively in SwiftUI views.

## Image Sources

The AEPImage class supports multiple sources for displaying images, with built-in support for both light and dark mode variants. 

Image sources are prioritized in the following order:

- URL images
- Bundled resource images
- SF Symbol icons

## Public properties

| Property | Type | Description | Default Value |
| --- | --- | --- | --- |
| contentMode | [ContentMode](https://developer.apple.com/documentation/uikit/uiview/1622619-contentmode) | The content mode of the image.|[ContentMode.fit](https://developer.apple.com/documentation/swiftui/contentmode/fit)
| modifier | AEPViewModifier | A custom view modifier that can be applied to the text view for additional styling. | N/A  |
| icon | String |	The name of the SF Symbol icon used in the image.<br/> This applies only to images sourced from icons. |	N/A |
| iconFont |	[Font](https://developer.apple.com/documentation/swiftui/font) |	The font of the SF Symbol icon used in the image.<br/>This applies only to images sourced from icons. |	N/A |
| iconColor |	[Color](https://developer.apple.com/documentation/swiftui/color) |	The color of the SF Symbol icon used in the image.<br/> This applies only to images sourced from icons.| [primary](https://developer.apple.com/documentation/swiftui/color/primary) |

<InlineAlert variant="info" slots="text"/>

All properties are marked with [@Published](https://developer.apple.com/documentation/combine/published). Any changes will trigger updates to the UI.

## Customization

You can customize AEPImage properties when working with a template that includes an image. Here's an example:

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
class MyCustomizer: ContentCardCustomizing {
    func customize(template: SmallImageTemplate) {
        // Customize the image element
        template.image.contentMode = .fill
        template.image.modifier = AEPViewModifier(MyImageModifier())

        // Customize the dismiss button
        // dismiss buttons are images sourced from SF Symbols icons
        template.dismissButton?.image.iconName = "xmark" // SF Symbol name
        template.dismissButton?.image.iconColor = .primary
        template.dismissButton?.image.iconFont = .system(size: 10)        
    }
    
    struct MyImageModifier: ViewModifier {
        func body(content: Content) -> some View {
            content
                .clipShape(Circle())
                .overlay(Circle().stroke(Color.red, lineWidth: 2))
        }
    }
}
```