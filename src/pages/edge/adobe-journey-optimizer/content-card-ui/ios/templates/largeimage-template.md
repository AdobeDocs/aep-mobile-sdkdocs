---
title: LargeImageTemplate
description: This class represents a LargeImage templated content card authored in Adobe Journey Optimizer.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Card Templates
- Content Card Templates
- Small Image Template
- AEPStack
- AEPHStack
- AEPVStack
- AEPText
- AEPButton
- AEPImage
- ButtonHStack
- RootVStack
- TextVStack
---

# LargeImageTemplate

<InlineAlert variant="info" slots="text"/>

LargeImageTemplate is only available in AEP Messaging iOS version 5.8.0+

 This class represents a LargeImage templated content card authored in Adobe Journey Optimizer.

 A large image template content card includes a title, body, image, and a maximum of three buttons. The image is displayed prominently above the text content in a vertical layout. An optional dismiss button can be added to dismiss the content card.

 Use the LargeImageTemplate class to customize the appearance of the large image templated content cards.

 LargeImageTemplate conforms to `ObservableObject`, allowing it to be used reactively in SwiftUI views.

## Layout

<img src="../../assets/ios/largeimagetemplate-layout.png" width="500"/>

## Public properties

| Property      | Type                                           | Description                                                  |
| ------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| title         | [AEPText](../../ios/ui-elements/aeptext.md)            | The title text for the content card.                         |
| body          | [AEPText](../../ios/ui-elements/aeptext.md)            | *Optional*\<br/\>The body text of the content card                 |
| image         | [AEPImage](../../ios/ui-elements/aepimage.md)          | *Optional*\<br/\>The image to be shown on the content card.     |
| buttons       | [[AEPButton](../../ios/ui-elements/aepbutton.md)]      | *Optional*\<br/\>The list of buttons on the content card.       |
| buttonHStack  | [AEPHStack](../../ios/ui-elements/aepstack.md#aephstack)         | A horizontal stack for arranging buttons.                    |
| textVStack    | [AEPVStack](../../ios/ui-elements/aepstack.md#aepvstack)         | A vertical stack for arranging the title, body, and buttons. |
| rootVStack    | [AEPVStack](../../ios/ui-elements/aepstack.md#aepvstack)         | A vertical stack for arranging the image and text stack.   |
| dismissButton | [AEPDismissButton](../../ios/ui-elements/aepdismissbutton.md) | *Optional*\<br/\>The dismiss button for the content card.       |
