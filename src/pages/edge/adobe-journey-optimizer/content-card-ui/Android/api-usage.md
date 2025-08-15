---
title: Content Card UI API Usage
description: Learn how to use the Messaging extension APIs to implement content card with UI.
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

# API Reference

This document provides information on how to use the Messaging APIs to receive content card views in your application.

## getContentCardUI

The `getContentCardUI` method retrieves a [Flow](https://developer.android.com/kotlin/flow) of [Result](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/) which contains a list [AepUI](./public-classes/aepui.md) objects for the provided surface. These `AepUI` objects represent templated content cards whose UI can be rendered using provided card composables.

<InlineAlert variant="info" slots="text"/>

Calling this API will only retrieve the content cards are already downloaded and cached by the Messaging extension. This API will not download content cards from Adobe Journey Optimizer. You must call [`updatePropositionsForSurfaces`](../../code-based/api-reference.md#updatePropositionsForSurfaces) API from the AEPMessaging extension with the desired surfaces prior to calling this API.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
suspend fun getContentCardUI(): Flow<Result<List<AepUI<*, *>>>>
```

#### Example

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
// Download the content cards for homepage surface using Messaging extension
val surfaces = mutableListOf<Surface>()
val surface = Surface("homepage")
surfaces.add(surface)
Messaging.updatePropositionsForSurfaces(surfaces)

// Initialize the ContentCardUIProvider
val contentCardUIProvider = ContentCardUIProvider(surface)

// get the content cards within a view model
class MyScreenViewModel : ViewModel {
  private val contentCardUIProvider = MessagingContentCardProvider(...)
  private val _aepUIList = MutableStateFlow<List<AepUI<*, *>>>(emptyList())
  val aepUIList: StateFlow<List<AepUI<*, *>>> = _aepUIList.asStateFlow()

  // fetch the list of cards when necessary 
  viewModelScope.launch {
      contentCardUIProvider.getContentCardUI().collect { aepUiResult ->
          aepUiResult.onSuccess { aepUi ->
              _aepUIList.value = aepUi
          }
          aepUiResult.onFailure { throwable ->
              // handle failure
          }
      }
  }
}
```
