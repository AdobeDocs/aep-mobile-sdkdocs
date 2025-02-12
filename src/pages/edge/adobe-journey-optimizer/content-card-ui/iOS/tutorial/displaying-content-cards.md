---
title: Fetch and Display Content Cards
description: This tutorial explains how to fetch and display content cards in your application.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Customizing UI
- Card Templates
- Content Card Templates
- Small Image Template
- Surface
- ContentCardUI
- Update Propositions
---

# Fetch and Display Content Cards

This tutorial explains how to fetch and display content cards in your application.

## Pre-requisites

[Integrate and register the AEPMessaging extension](../../../index.md#implement-extension-in-mobile-app) in your app.

## Fetch Content Cards

To fetch the content cards for the surfaces configured in [Adobe Journey Optimizer](https://business.adobe.com/products/journey-optimizer/adobe-journey-optimizer.html) campaigns, call the [updatePropositionsForSurfaces](https://developer.adobe.com/client-sdks/edge/adobe-journey-optimizer/code-based/api-reference/#updatepropositionsforsurfaces) API. You should batch requests for multiple surfaces in a single API call when possible. The returned content cards are cached in-memory by the Messaging extension and persist through the application's lifecycle.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let homePageSurface = Surface(path: "homepage")
Messaging.updatePropositionsForSurfaces([homePageSurface])
```

## Retrieve Content Cards

To retrieve the content cards for a specific surface, call `getContentCardsUI`. This API returns an array of [ContentCardUI](../public-classes/contentcardui.md) objects representing content cards for which the user is qualified.

`ContentCardUI` objects are created only for content cards with templates recognized by the Messaging extension. The array of `ContentCardUI` objects may contain multiple content card template types.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let homePageSurface = Surface(path: "homepage")
Messaging.getContentCardsUI(surface: homePageSurface) { result in
    switch result {
    case .success(let contentCards):
        // use the contentCards array to display content cards in your application
    case .failure(let error):
        // handle error here
    }
}
```

<InlineAlert variant="info" slots="text"/>

Note - Only content cards for which the user has qualified are returned by the getContentCardUI API. User qualification is determined by the delivery rules configured in Adobe Journey Optimizer.

## Display Content Cards

To display content cards in your app, use the `ContentCardUI` objects returned by the `getContentCardsUI` API. The `ContentCardUI` objects provide the user interface for templated content cards in your application. Whether your application is built using SwiftUI or UIKit, you can seamlessly incorporate and display these content cards using the `ContentCardUI` objects.

### SwiftUI Application

Below is an example of how to display content cards in a SwiftUI application:

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
struct HomePage: View {
    
    @State var savedCards : [ContentCardUI] = []
    
    var body: some View {
        ScrollView (.vertical, showsIndicators: false) {
            LazyVStack(spacing: 20) {
                 ForEach(savedCards) { card in
                     card.view
                         .frame(height: 120)
                }
            }
        }
        .padding()
        .onAppear() {
            // Retrieve the content cards for the homepage surface
            let homePageSurface = Surface(path: "homepage")
            AEPSwiftUI.getContentCardsUI(for: homePageSurface) { result in
                switch result {
                case .success(let cards):
                    savedCards = cards
                    
                case .failure(let error):
                    // handle error here
                }
            }
        }
    }
}
```

Refer to this [TestApp](https://github.com/adobe/aepsdk-messaging-ios/tree/main/TestApps/MessagingDemoAppSwiftUI) for a complete example of how to display, customize and listen to UI events from content cards in a SwiftUI application.

### UIKit Application

Below is an example of how to display content cards in a UIKit application using a UITableView:

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
class HomeViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    @IBOutlet var tableView : UITableView!
    var savedCards : [ContentCardUI] = []
        
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.delegate = self
        tableView.dataSource = self
        
        // Retrieve the content cards for the homepage surface
        let homePageSurface = Surface(path: "homepage")
        AEPSwiftUI.getContentCardsUI(for: homePageSurface) { result in
            switch result {
            case .success(let cards):
                self.savedCards = cards
                DispatchQueue.main.async {
                    self.tableView.reloadData()
                }
                
            case .failure(let error):
                // handle error here
            }
        }
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        cell.contentView.subviews.forEach { $0.removeFromSuperview() }

        // Get the SwiftUI view for the content card
        let contentCard = savedCards[indexPath.row]
        let swiftUIView = contentCard.view

        // Wrap the SwiftUI view in a UIHostingController
        let hostingController = UIHostingController(rootView: swiftUIView)
        hostingController.view.translatesAutoresizingMaskIntoConstraints = false

        // Add the hosting controller's view to the cell's content view
        cell.contentView.addSubview(hostingController.view)

        // Set up constraints to make the SwiftUI view fill the cell
        NSLayoutConstraint.activate([
            hostingController.view.leadingAnchor.constraint(equalTo: cell.contentView.leadingAnchor, constant: 10),
            hostingController.view.trailingAnchor.constraint(equalTo: cell.contentView.trailingAnchor, constant: -10),
            hostingController.view.topAnchor.constraint(equalTo: cell.contentView.topAnchor, constant: 10),
            hostingController.view.bottomAnchor.constraint(equalTo: cell.contentView.bottomAnchor, constant: -10)
        ])

        return cell
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return savedCards.count
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 120
    }
}
```

Refer to this [TestApp](https://github.com/adobe/aepsdk-messaging-ios/tree/main/TestApps/MessagingDemoAppObjC) for a complete example of how to display, customize, and listen to UI events from content cards in a UIKit application.
