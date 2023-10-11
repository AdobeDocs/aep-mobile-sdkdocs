# Upgrade to the Experience Platform SDKs

This section contains a checklist that you can use as you plan your upgrade from Adobe Mobile Library (v4) to the Experience Platform SDKs.

## Update on end of support for version 4 Mobile SDKs

<InlineAlert variant="warning" slots="text"/>

Support for the Mobile [version 4 SDKs](https://github.com/Adobe-Marketing-Cloud/mobile-services) has ended as of **August 31, 2021** ~~September 30, 2020~~.

In 2019, we announced that support for Adobe Experience Cloud's version 4 mobile SDKs would end on September 30, 2020. Customers were encouraged to migrate and adopt the latest Adobe Experience Platform Mobile SDKs at their earliest convenience.

We have received feedback from multiple customers that the COVID-19 pandemic is disrupting mobile-related teams, projects, and timelines. In an effort to assist customers during the pandemic, we extended support for version 4 mobile SDKs to **August 31, 2021**.

While customers may continue to download and use the version 4 SDKs, as of **August 31, 2021 - these SDKs are no longer supported by Adobe**. Additionally, support via Customer Care or official Adobe forums or issue repositories are no longer provided. The Adobe Experience Platform Mobile SDKs (previously referred to as v5) will exclusively support upcoming Adobe Experience Cloud features and functionality.

We recommend that you migrate to the new Experience Platform Mobile SDK as soon as possible. Please contact your Adobe Customer Success Manager if you have questions.

### End-of-support considerations

Here are end-of-support considerations for the version 4 SDKs:

* [4x SDKs](https://github.com/Adobe-Marketing-Cloud/mobile-services) no longer have support via [Adobe Customer Support](https://experienceleague.adobe.com/?support-solution=General#support) or [forums](https://github.com/Adobe-Marketing-Cloud/mobile-services/issues) beginning **August 31, 2021.**
* Adobe has released final updates for version 4 SDKs (as needed) to facilitate compatibility with upcoming OS releases including iOS 14 and Android 11.
* Starting **September 2021**, no new fixes, OS-related updates, or support for Adobe Mobile Library version 4 SDKs will be provided. Customers will be expected to use the new Experience Platform Mobile SDKs.

## Upgrade checklist

The Experience Platform SDK have been significantly architecturally re-designed, which changes how customers implement and leverage the SDKs.

<InlineAlert variant="info" slots="text"/>

The Experience Platform SDKs contain breaking changes from the version 4 SDKs.<br/>In addition to [changed APIs](api-changelog.md), the new SDK includes new APIs and deprecation of APIs such as timed action and milestone media video tracking.

Review the following checklist to understand some of the changes and what is required to upgrade:

* The Experience Platform SDKs introduce the [Mobile Core](../../base-extensions/mobile-core/index.md) and constituent extensions.<br/>Mobile Core contains core SDK functionality that is required for all implementations that require Adobe and/or third-party extensions.
* The Mobile Core and other extensions are configured in the Data Collection UI in a mobile property.<br/>When published, the Data Collection UI hosts this property configuration and makes it for your SDK implementation.
* You decide which SDK extensions to add, configure, and ultimately include in your app project.<br/>This provides the flexibility to customize your implementations.<br/>**Important:** Some extensions depend on others for proper functioning, and these are documented where applicable.
* We recommend that you ease your build process by use supported dependency managers, such as Gradle for Android and Cocoapods for iOS. The Data Collection UI provides inline instructions and specs to help you with this process.

### Get started with the upgrade

1. Begin with the [Getting Started](../../home/getting-started/create-a-mobile-property.md) section and ensure that you are appropriately provisioned for tags.
2. Ensure all of the required SDK APIs that you currently use are available in the new SDK.<br/>For more information, see [Experience Platform SDKs vs. the 4x SDKs](comparison.md).<br/>**Tip:** The Experience Platform SDK supports iOS versions 10+, Android 4.4+ (API 19+).
3. If you are implementing Analytics, see [Processing rules overview](https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/processing-rules/processing-rules.html) to map the variables and rules.
4. In the Experience Platform SDK, you need to manually implement your Lifecycle calls. For more information, see [Manual Lifecycle Implementation](lifecycle.md).

The Experience Platform SDK automatically performs migration tasks that are required to preserve locally stored user context. Without manual intervention, you should expect no change to your visitor reporting or marketing campaigns.

<InlineAlert variant="info" slots="text"/>

This client-side, SDK upgrade does not affect marketing campaigns that are in progress, reporting, or other app activities that are configured in Experience Cloud solutions.

## Get help

* Visit the SDK [community forum](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-platform/ct-p/adobe-experience-platform-community) to ask questions.
* Contact [Adobe Experience Cloud customer care](https://experienceleague.adobe.com/?support-solution=General#support) for immediate assistance.
