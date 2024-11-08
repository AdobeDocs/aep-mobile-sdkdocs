---
title: SmallImageTemplate
description: This class represents a SmallImage templated content card authored in Adobe Journey Optimizer.
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
- RootHStack
- TextVStack
---

# SmallImageTemplate

 This class represents a SmallImage templated content card authored in Adobe Journey Optimizer.
 
 A small image template content card includes a title, body, image, and a maximum of three buttons. The image is displayed in line with the text content. An optional dismiss button can be added to dismiss the content card.

 Use the SmallImageTemplate class to customize the appearance of the small image templated content cards.

 SmallImageTemplate conforms to `ObservableObject`, allowing it to be used reactively in SwiftUI views.

## Layout

<img src="../../assets/iOS/smallimagetemplate-layout.png" width="500"/>

## Public properties

| Property      | Type                                           | Description                                                  |
| ------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| title         | [AEPText](../ui-elements/aeptext.md)            | The title text for the content card.                         |
| body          | [AEPText](../ui-elements/aeptext.md)            | *Optional*<br/>The body text of the content card                 |
| image         | [AEPImage](../ui-elements/aepimage.md)          | *Optional*<br/>The image to be shown on the content card.     |
| buttons       | [[AEPButton](../ui-elements/aepbutton.md)]      | *Optional*<br/>The list of buttons on the content card.       |
| buttonHStack  | [AEPHStack](../ui-elements/aepstack.md#aephstack)         | A horizontal stack for arranging buttons.                    |
| textVStack    | [AEPVStack](../ui-elements/aepstack.md#aepvstack)         | A vertical stack for arranging the title, body, and buttons. |
| rootHStack    | [AEPHStack](../ui-elements/aepstack.md#aephstack)         | A horizontal stack for arranging the image and text stack.   |
| dismissButton | [AEPDismissButton](../ui-elements/aepdismissbutton.md) | *Optional*<br/>The dismiss button for the content card.       |
