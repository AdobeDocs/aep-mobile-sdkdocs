import PrivacyTabs from './tabs/privacy-and-gdpr.md'

# Privacy and GDPR

The Adobe Experience Platform SDKs give you controls to manage consent and privacy obligations, such as the European Union's General Data Protection Regulation (GDPR). Developers can retrieve locally stored identities and set opt status flags for data collection and transmission.

Before implementing these controls, read the [Adobe Experience Platform Privacy Service documentation](https://experienceleague.adobe.com/docs/experience-platform/privacy/home.html).

When Adobe provides software and services to an enterprise, Adobe acts as a data processor for any personal data it processes and stores as part of providing these services. As a data processor, Adobe processes personal data in accordance with your company's permission and instructions, as set out in your agreement with Adobe. As a data controller, you can use the Experience Platform SDKs to support privacy retrieve and delete requests from your mobile apps.

## Setup steps

The following sections provide details on how you can collect consent and privacy status to ensure collection of data suits your user's preferences.

Depending on the mobile extensions you use, there are two ways of collecting and enforcing consent preferences when using the Experience Platform SDKs:

1. When using the **Edge Network** mobile extensions, you should use the [Consent for Edge Network](./consent-for-edge-network/index.md) extension.
2. When using **Adobe Experience Cloud** mobile extensions, you should use privacy status settings.

The two options are documented in detail below.

<InlineAlert variant="info" slots="text"/>

If you are using a mix of Edge Network and Adobe Experience Cloud mobile extensions, please follow the steps for configuring both consent and privacy status settings. See also the [frequently asked questions](./identity-for-edge-network/faq.md) about consent and privacy settings or identities.

## Using Experience Platform SDKs for Edge Network

## Update and get collect consent preferences

You can set the collect consent status to ensure collection of data suits your user's preferences.

| Extension        | Collect (y)   | Collect (n)       | Collect (pending) |
| :--------------- | :------------ | :---------------- | :---------------- |
| **Edge Network** | Hits are sent | Hits are not sent | Hits are queued   |

> **Note:** When no default collect consent value is defined in configuration, the SDK defaults to Yes (y) for collect consent.

<InlineAlert variant="warning" slots="text"/>

Updating the collect consent status to No (n) does not reset or clear the identities of the current user. If you need to reset all current identities, use the [MobileCore.resetIdentities()](./mobile-core/api-reference.md#resetidentities) API.

### Collect consent settings

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<PrivacyTabs query="platform=android&task=collect-consent-settings"/>

iOS

<PrivacyTabs query="platform=ios&task=collect-consent-settings"/>

### getConsents

You can programmatically view the current collect consent preferences status in a dictionary representation by using the following API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<PrivacyTabs query="platform=android&task=get-consents"/>

iOS

<PrivacyTabs query="platform=ios&task=get-consents"/>

### updateConsents

Use this example to programmatically update the consent collect for the application user.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<PrivacyTabs query="platform=android&task=update-consents"/>

iOS

<PrivacyTabs query="platform=ios&task=update-consents"/>

### getIdentities

When using the Edge Network extensions, use the [Identity.getIdentities](./identity-for-edge-network/api-reference.md#getidentities) API to retrieve all the identifier data stored locally by the SDK and send this data to your servers.

## Configuration keys

To programmatically update the SDK configuration, use the following information to change your default consent values. For more information, see the [configuration API reference](./mobile-core/configuration/api-reference.md).

| Key | Description |
| :--- | :--------- |
| `consent.default` | Defines the set of default consent preferences for the SDK in XDM format. For more details, see [Privacy/Personalization/Marketing Preferences (Consents) Schema](https://github.com/adobe/xdm/blob/master/docs/reference/mixins/profile/profile-consents.schema.md). |

## Using Adobe Experience Cloud Solution extensions

## Set and get privacy status

You can set a privacy status to ensure collection of data suits your user's preferences.

| **Expected Behavior** | Opt In | Opt Out | Opt Unknown |
| :-------------------- | :----- | :------ | :---------- |
| **Analytics** | Hits are sent | Hits are not sent | Hits are queued |
| **Audience** **Manager** | Signals, ID syncs are sent | Signals, ID syncs are not sent | Syncs are queued |
| **Campaign Classic** | User data is stored, calls are sent | User data is cleared, calls are not sent | User data is stored, calls are not sent |
| **Target** | Mbox requests are sent | Mbox requests are not sent | Mbox requests are queued |
| **Campaign Standard** | User data is stored, calls are sent | User data is cleared, calls are not sent | User data is stored, calls are queued |

<InlineAlert variant="info" slots="text"/>

**Analytics users**: If your report suite is not timestamp enabled, hits are discarded until the privacy status changes to `opt in`.

### setPrivacyStatus

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<PrivacyTabs query="platform=android&task=set-privacy-status"/>

iOS

<PrivacyTabs query="platform=ios&task=set-privacy-status"/>

### getPrivacyStatus

You can also programmatically view the current privacy status by using the following:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<PrivacyTabs query="platform=android&task=get-privacy-status"/>

iOS

<PrivacyTabs query="platform=ios&task=get-privacy-status"/>

### getSdkIdentities

To retrieve all the identifier data stored locally by the SDK as a JSON string, use the [getSdkIdentities](./mobile-core/api-reference.md#getsdkidentities) API from the Mobile Core extension.

<InlineAlert variant="info" slots="text"/>

When using both Edge Network and Adobe Solutions extensions, use both [Identity.getIdentities](./identity-for-edge-network/api-reference.md#getidentities) API and [MobileCore.getSdkIdentities](./mobile-core/api-reference.md#getsdkidentities) APIs to retrieve all the identifier data stored locally by the SDK.

## Configuration keys

To update the SDK configuration, programmatically, use the following information to change your privacy configuration values. For more information, [Configuration API reference](./mobile-core/configuration/api-reference.md).

| Key | Description |
| :--- | :--- |
| `global.privacy` | Setting to control privacy opt status; values may include `optedin`, `optedout`, `optunknown` |

## Video

<Media slots="video"/>

<https://www.youtube.com/watch?v=kgUJNFQp3PI>

## Additional information

* For more information about GDPR, see [GDPR and Your Business](https://www.adobe.com/privacy/general-data-protection-regulation.html)
* To see the Privacy Service API documentation, go to [Privacy Service API](https://experienceleague.adobe.com/docs/experience-platform/privacy/home.html)

