---
title: iOS 17 Privacy Manifest Requirements
description: The requirements for Apple's new privacy manifests
keywords:
- Privacy manifest
- iOS 17
---

# iOS 17 Privacy Manifest Requirements

Starting in Spring 2024, Apple will require developers to implement new privacy features to receive approval for apps submitted to the App Store. Some features are already in use, like Privacy Nutrition Labels. These labels help end-users understand the data collected by apps as well as third-party SDKs like those provided by Adobe. To facilitate this, Apple is requiring that app developers provide details in the Privacy Manifest regarding the data their apps (and included third-party SDKs) track.

## Required Reasons API

To address concerns regarding fingerprinting, Apple will require developers to declare the reasons for using specific APIs. One of these APIs is the UserDefaults API, which Adobe currently uses to store user identifiers and lifecycle data. The Adobe Experience Platform Mobile SDK needs to store this data on the device in order to function, however, that data does not need to be stored in UserDefaults. Adobe has started using device storage rather than UserDefaults. In December, we released version 4.2.1 of the iOS Core extension that includes logic to migrate data stored by the Mobile SDK away from UserDefaults to local storage for iOS and iPadOS. Starting with version 5 of the Mobile SDK for iOS/iPadOS, Adobe will include a Privacy Manifest. **Adobe recommends that all customers upgrade to version 5**. 

<InlineAlert variant="info" slots="text"/>

tvOS does not allow local storage for applications, so until further notice, the Mobile SDK will continue to store User Identifiers and Lifecycle Data in UserDefaults.

<InlineAlert variant="info" slots="text"/>

Some customers may choose not to update to version 5 of the Mobile SDK and may still want to submit applications to the App Store. Customers who choose to do this should update their application to include version 4.2.1 or greater of the iOS Mobile SDK Core extension and include their own Privacy Manifest in the application that includes reason 1C8F.1 as the reason for accessing User Defaults.

## Specific Values to be included in the Privacy Manifest

Mobile SDK customers are responsible for updating and maintaining their app’s Privacy Manifest. Which extensions customers use, and the specific actions performed using the Mobile SDK, may affect what customers should include in the Privacy Manifest Data Use section. The below chart is intended to help guide customers’ understanding of how Mobile SDK data can be used:

| **Mobile SDK Extension** | **Data** | [**Linked to User**](https://developer.apple.com/app-store/app-privacy-details/#linked-data) | [**Used For Tracking**](https://developer.apple.com/app-store/app-privacy-details/#user-tracking) | **Reason for Collection** |
| --- | --- | --- | --- | --- |
| <ul><li>Analytics</li><li>Core</li><li>Identity</li><li>Edge Identity</li></ul> | User ID | **No –** when the customer is not capturing authenticated identities in the Identity Map<br/><br/>**Yes** **–** when the customer is capturing authenticated identities in the Identity Map | **No –** when the customer is not capturing authenticated identities in the Identity Map<br/><br/>**Yes** **–** when the customer is capturing authenticated identities in the Identity Map | <ul><li>Developer’s Advertising or Marketing</li></ul> |
| <ul><li>Analytics</li><li>Edge</li><li>Edge Bridge</li><li>Edge Media</li><li>Media Analytics</li></ul> | Product interaction | **No –** when the customer is not capturing authenticated identities in the Identity Map<br/><br/>**Yes** **–** when the customer is capturing authenticated identities in the Identity Map | **No –** when the customer is not capturing authenticated identities in the Identity Map<br/><br/>**Yes** **–** when the customer is capturing authenticated identities in the Identity Map | <ul><li>Developer’s Advertising or Marketing</li><li>Analytics</li><li>Product Personalization</li></ul> |
| <ul><li>Lifecycle</li></ul> | Other Data Types | **No –** when the customer is not capturing authenticated identities in the Identity Map<br/><br/>**Yes** **–** when the customer is capturing authenticated identities in the Identity Map | **No –** when the customer is not capturing authenticated identities in the Identity Map<br/><br/>**Yes** **–** when the customer is capturing authenticated identities in the Identity Map | <ul><li>Developer’s Advertising or Marketing</li><li>Analytics</li><li>Product Personalization</li></ul> |
| <ul><li>Messaging</li><li>Optimize</li></ul> | Other Data Types | **No –** when the customer is not capturing authenticated identities in the Identity Map<br/><br/>**Yes** **–** when the customer is capturing authenticated identities in the Identity Map | **No –** when the customer is not capturing authenticated identities in the Identity Map<br/><br/>**Yes** **–** when the customer is capturing authenticated identities in the Identity Map | <ul><li>Developer’s Advertising or Marketing</li><li>Product Personalization</li></ul> |

## Signed XCFrameworks

Starting with version 5 of the Mobile SDKs for Apple, Adobe will provide signed XCFrameworks that customers can include in their applications. Use of signed XCFrameworks is recommended but not required.

## Tracking Domains

These are the domains Adobe uses to send data which you choose to collect. If you use Adobe products in a way Apple defines as "[tracking](https://developer.apple.com/app-store/user-privacy-and-data-use/)", you may need to add these domains to your Privacy Manifest's NSPrivacyTrackingDomains list.

<InlineAlert variant="warning" slots="text"/>

Please note, that any domains that are added, will be blocked if the user does not grant permissions through the App Tracking Transparency framework which will significantly impact the functionality of the SDK.

* omtrdc.net
* adobedc.net
* demdex.net

<InlineAlert variant="info" slots="text"/>

If you choose to use DNS CNAMEs for your data collection, you may choose to add those CNAMEs to the Tracking Domains instead of the domain names listed above.
