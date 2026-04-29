---
title: Fetch and Display Inbox
description: This tutorial explains how to fetch and display an Inbox in your application.
keywords:
- Adobe Journey Optimizer
- Guide
- Inbox
- Messaging
- Inbox UI
- InboxUI
- Surface
- SwiftUI
- UIKit
---

# Fetch and Display Inbox

This tutorial explains how to fetch and display an Inbox in your application.

## Pre-requisites

[Integrate and register the AEPMessaging extension](../../../index.md#implement-extension-in-mobile-app) in your app.

## Fetch Inbox Content

To fetch the inbox content for the surfaces configured in [Adobe Journey Optimizer](https://business.adobe.com/products/journey-optimizer/adobe-journey-optimizer.html) campaigns, call the [updatePropositionsForSurfaces](../../../code-based/api-reference.md#updatepropositionsforsurfaces) API. You should batch requests for multiple surfaces in a single API call when possible.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let inboxSurface = Surface(path: "inbox")
Messaging.updatePropositionsForSurfaces([inboxSurface])
```

## Display Inbox

To display an Inbox, call `getInboxUI` with your configured surface. This API returns an [InboxUI](../public-classes/inboxui.md) instance immediately, which manages its own state transitions — loading, loaded, and error — automatically.

<InlineAlert variant="info" slots="text"/>

Call `updatePropositionsForSurfaces` before or after calling `getInboxUI`. The Inbox will begin displaying content once the fetch completes.

### SwiftUI Application

Use the `InboxUI.view` property to embed the Inbox directly into your SwiftUI view hierarchy.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
import SwiftUI
import AEPMessaging

struct InboxPage: View {

    let inboxUI: InboxUI

    init() {
        let inboxSurface = Surface(path: "inbox")
        inboxUI = Messaging.getInboxUI(for: inboxSurface)
    }

    var body: some View {
        NavigationView {
            inboxUI.view
                .navigationTitle("Inbox")
        }
        .onAppear {
            let inboxSurface = Surface(path: "inbox")
            Messaging.updatePropositionsForSurfaces([inboxSurface])
        }
    }
}
```

### UIKit Application

To display an Inbox in UIKit, wrap the SwiftUI `InboxUI.view` using `UIHostingController`.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
import UIKit
import SwiftUI
import AEPMessaging

class InboxViewController: UIViewController {

    var inboxUI: InboxUI!

    override func viewDidLoad() {
        super.viewDidLoad()

        title = "Inbox"

        let inboxSurface = Surface(path: "inbox")
        inboxUI = Messaging.getInboxUI(for: inboxSurface)

        let hostingController = UIHostingController(rootView: inboxUI.view)

        addChild(hostingController)
        view.addSubview(hostingController.view)
        hostingController.didMove(toParent: self)

        hostingController.view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            hostingController.view.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            hostingController.view.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            hostingController.view.topAnchor.constraint(equalTo: view.topAnchor),
            hostingController.view.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])

        Messaging.updatePropositionsForSurfaces([inboxSurface])
    }
}
```

## Refreshing Inbox Data

The Inbox provides two ways to refresh content.

### Pull-to-Refresh

Enable pull-to-refresh to let users refresh content by pulling down on the Inbox.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let inboxSurface = Surface(path: "inbox")
let inboxUI = Messaging.getInboxUI(for: inboxSurface)

inboxUI.isPullToRefreshEnabled = true
```

<InlineAlert variant="info" slots="text"/>

Pull-to-refresh is disabled by default. Set `isPullToRefreshEnabled = true` to enable it.

### Programmatic Refresh

Call `refresh()` to programmatically trigger a content refresh.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
inboxUI.refresh()
```

## Best Practices

1. **Fetch Early**: Call `updatePropositionsForSurfaces` when your app launches or when the user navigates to the Inbox screen to ensure fresh content is available.

2. **Surface Naming**: Use descriptive surface paths that match your Adobe Journey Optimizer campaign configuration (e.g., `Surface(path: "inbox")`, `Surface(path: "home_feed")`).

3. **Reuse InboxUI**: Keep the `InboxUI` instance alive as long as the Inbox view is visible. The `InboxUI` maintains state and efficiently updates when content changes.

4. **Handle Multiple Surfaces**: If your app has multiple Inboxes, create separate `InboxUI` instances with different surfaces.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let notificationsInboxUI = Messaging.getInboxUI(for: Surface(path: "notifications"))
let promotionsInboxUI = Messaging.getInboxUI(for: Surface(path: "promotions"))
```

## Next Steps

* [Listening to Inbox Events](listening-inbox-events.md) - Learn how to respond to user interactions
* [Customizing Your Inbox](customizing-inbox.md) - Customize appearance, spacing, and views
