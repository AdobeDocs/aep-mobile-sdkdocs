<InlineAlert variant="warning" slots="text"/>

Adobe Experience Platform SDKs for iOS support **iOS 10 or later**; **requires** Swift 5.1 or newer; **and** Xcode 11.0 or newer.

<InlineAlert variant="success" slots="header, text"/>

Apple M1 compatibility

In order to support the new Apple M1 architecture while maintaining support for existing Intel architecture, the Adobe Experience Platform SDKs are now distributed using XCFrameworks. <br/><br/>Please see the [release notes](../release-notes/2020#december-18-2020) and the document on [current SDK versions](../resources/upgrading-to-aep/current-sdk-versions.md) for more information on the latest extension versions.

1. Open a previously created and configured **Mobile** property in Launch, and click on the **Environments** tab, and then click on the install package icon (![](./assets/get-the-sdk/package.png)).
2. On the **Mobile Install Instructions** dialog box, select **iOS**.
3. Follow the instructions for using CocoaPods with iOS.
4. Under the initialization code, choose Objective C or Swift.

The necessary dependencies and initialization code can be copied from the dialog box to your app project.

You should see a pop-up similar to the following image:

![](./assets/get-the-sdk/obj-c.png)