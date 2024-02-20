Starting in Spring 2024, Apple will require developers to implement new privacy features to receive approval for apps submitted to the App Store. Some features are already in use, like Privacy Nutrition Labels. These labels help end-users understand the data collected by apps as well as third-party SDKs like those provided by Adobe. To facilitate this, Apple is requiring that app developers provide details in the Privacy Manifest regarding the data their apps (and included third-party SDKs) track.

**Required Reasons API**

To address concerns regarding fingerprinting, Apple will require developers to declare the reasons for using specific APIs. One of these APIs is the UserDefaults API, which Adobe currently uses to store user identifiers and lifecycle data. The Adobe Experience Platform Mobile SDK needs to store this data on the device in order to function, however, that data does not need to be stored in UserDefaults. Adobe has started using device storage rather than UserDefaults. In December, we released version 4.2.1 of the iOS Core extension that includes logic to migrate data stored by the AEP Mobile SDK away from UserDefaults to local storage for iOS and iPadOS. 

<InlineAlert variant="info" slots="text"/>

tvOS does not allow local storage for applications, so until further notice, the AEP Mobile SDK will continue to store User Identifiers and Lifecycle Data in UserDefaults.

**Specific Values to be included in the Privacy Manifest**

AEP Mobile SDK customers are responsible for updating and maintaining their app’s Privacy Manifest. Which extensions customers use, and the specific actions performed using the AEP Mobile SDK, may affect what customers should include in the Privacy Manifest Data Use section. The below chart is intended to help guide customers’ understanding of how AEP Mobile SDK data can be used:

| **AEP Mobile SDK Extension** | **Data** | [**Linked to User**](https://developer.apple.com/app-store/app-privacy-details/#linked-data) | [**Used For Tracking**](https://developer.apple.com/app-store/app-privacy-details/#user-tracking) | **Reason for Collection** |
| --- | --- | --- | --- | --- |
| \- Analytics<br><br>\- Core<br><br>\- Identity<br><br>\- Edge Identity | User ID | **No –** when customer is not capturing authenticated identities in the Identity Map<br><br>**Yes** **–** when customer is capturing authenticated identities in the Identity Map | **No –** when customer is not capturing authenticated identities in the Identity Map<br><br>**Yes** **–** when customer is capturing authenticated identities in the Identity Map | \- Developer’s Advertising or Marketing |
| \- Analytics<br><br>\- Edge<br><br>\- Edge Bridge<br><br>\- Edge Media<br><br>\-Media Analytics | Product interaction | **No –** when customer is not capturing authenticated identities in the Identity Map<br><br>**Yes** **–** when customer is capturing authenticated identities in the Identity Map | **No –** when customer is not capturing authenticated identities in the Identity Map<br><br>**Yes** **–** when customer is capturing authenticated identities in the Identity Map | \- Developer’s Advertising or Marketing<br><br>\- Analytics<br><br>\- Product Personalization |
| \- Lifecycle | Other Data Types | **No –** when customer is not capturing authenticated identities in the Identity Map<br><br>**Yes** **–** when customer is capturing authenticated identities in the Identity Map | **No –** when customer is not capturing authenticated identities in the Identity Map<br><br>**Yes** **–** when customer is capturing authenticated identities in the Identity Map | \- Developer’s Advertising or Marketing<br><br>\- Analytics<br><br>\- Product Personalization |
| \- Messaging<br><br>\- Optimize | Other Data Types | **No –** when customer is not capturing authenticated identities in the Identity Map<br><br>**Yes** **–** when customer is capturing authenticated identities in the Identity Map | **No –** when customer is not capturing authenticated identities in the Identity Map<br><br>**Yes** **–** when customer is capturing authenticated identities in the Identity Map | \- Developer’s Advertising or Marketing<br><br>\- Product Personalization |

**Signed XCFrameworks**

Starting with version 5 of the AEP Mobile SDKs for Apple, Adobe will provide signed XCFrameworks that customers can include in their applications. Use of signed XCFrameworks is recommended but not required.

**Tracking Domains**

Apple is introducing NSPrivacyTrackingDomains in iOS 17's Privacy Manifests. This array lists the URLs that apps connect to for tracking purposes. If users haven't granted tracking permission via the App Tracking Transparency framework, requests to these domains will fail, resulting in errors for the app. The Privacy Manifest for Analytics-Swift includes the endpoint where Segment events are sent.

The following Adobe URLs are used to interact with the Adobe solutions:

adobedtm.com

omtrdc.net

adobedc.net

demdex.net

If you choose to use DNS CNAMES for your data collection, they should be listed as well.
