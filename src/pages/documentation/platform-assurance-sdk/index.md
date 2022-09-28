import Tabs from './tabs/index.md'

# Adobe Experience Platform Assurance extension

This extension enables capabilities for Adobe Experience Platform Assurance.

To get started with Assurance in your app, you'll need to:

1. Install the AEP Assurance extension in the [Data Collection UI](https://experience.adobe.com/#/data-collection)
2. Add AEP Assurance SDK extension library to your app
   1. Import AEP Assurance into your app
   2. Register and implement extension APIs

## Install the AEP Assurance extension in the Data Collection UI

Go to the [Experience Platform Data Collection UI](https://experience.adobe.com/#/data-collection/) and select your mobile property:

1. In the Data Collection UI, select the **Extensions** tab.
2. On the **Catalog** tab, locate the **AEP Assurance** extension, and select **Install**.
3. Follow the publishing process to update the Mobile SDK configuration.

![](./assets/index/assurance-extension.png)

## Add the AEP Assurance extension to your app

### Import the library to your app code

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&task=import-library"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&task=import-library"/>

iOS (AEP 1.x)

<Tabs query="platform=ios-acp&task=import-library"/>

React Native

<Tabs query="platform=react-native&task=import-library"/>

Flutter

<Tabs query="platform=flutter&task=import-library"/>

Cordova

<Tabs query="platform=cordova&task=import-library"/>

Unity

<Tabs query="platform=unity&task=import-library"/>

Xamarin

<Tabs query="platform=xamarin&task=import-library"/>

### Register AEPAssurance with Mobile Core

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&task=register-assurance"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&task=register-assurance"/>

iOS (AEP 1.x)

<Tabs query="platform=ios-acp&task=register-assurance"/>

React Native

<Tabs query="platform=react-native&task=register-assurance"/>

Flutter

<Tabs query="platform=flutter&task=register-assurance"/>

Cordova

<Tabs query="platform=cordova&task=register-assurance"/>

Unity

<Tabs query="platform=unity&task=register-assurance"/>

Xamarin

<Tabs query="platform=xamarin&task=register-assurance"/>

### Implement AEP Assurance session start APIs (iOS only)

The [startSession](./assurance-api-reference.md#startsession) API needs to be called to begin an Adobe Experience Platform Assurance session. When called, SDK displays a PIN authentication overlay to begin a session. 

To learn how to start sessions for other platforms, please read the [Platform Assurance API guide](./api-reference.md).

<InlineAlert variant="info" slots="text"/>

You may call this API when the app launches with a url (see code snippet below for sample usage) <br/><br/> The AEP Assurance Android extension does not require this API to be called since it registers the app lifecycle handlers which automatically pick up any deep links and use them to start the session.<br/><br/>When using the AEP Assurance iOS extension, you should call this API when the app launches with a URL (see code snippet below for sample usage).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&task=register-assurance"/>

iOS (AEP 1.x)

<Tabs query="platform=ios-acp&task=register-assurance"/>
