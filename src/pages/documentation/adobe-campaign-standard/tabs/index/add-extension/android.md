1. Add the Campaign Standard, [Mobile Core](../mobile-core/index.md) and [Profile](../profile/index.md) extensions to your project using the app's Gradle file.

   ```java
    implementation 'com.adobe.marketing.mobile:campaign:1.+'
    implementation 'com.adobe.marketing.mobile:userprofile:1.+'
    implementation 'com.adobe.marketing.mobile:sdk-core:1.+'
   ```

2. Import the Campaign Standard, [Mobile Core](../mobile-core/index.md), [Profile](../profile/index.md), [Lifecycle](../mobile-core/lifecycle/index.md), and [Signal](../mobile-core/signals/index.md) extensions in your application's main activity.

   ```java
    import com.adobe.marketing.mobile.AdobeCallback;
    import com.adobe.marketing.mobile.Campaign;
    import com.adobe.marketing.mobile.Identity;
    import com.adobe.marketing.mobile.Lifecycle;
    import com.adobe.marketing.mobile.MobileCore;
    import com.adobe.marketing.mobile.Signal;
    import com.adobe.marketing.mobile.UserProfile;
   ```

<InlineAlert variant="info" slots="text"/>

To complete a manual installation, go to the [Adobe Experience Platform SDKs for Android GitHub](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) repo, fetch the Mobile Core, Campaign Standard, Profile, Lifecycle, and Signal artifacts, and complete the steps in the [manual installation](https://github.com/Adobe-Marketing-Cloud/acp-sdks/blob/master/README.md#manual-installation) section.