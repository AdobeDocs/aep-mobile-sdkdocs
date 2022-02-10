Update the `AndroidManifest.xml` file to declare the full screen activity and enable the Message Notification Handler.

#### Java

If you are using either fullscreen message or local notification functionality, update the `AndroidManifest.xml` with the following:

```xml
<activity
    android:name="com.adobe.marketing.mobile.MessageFullScreenActivity"
    android:windowSoftInputMode="adjustUnspecified|stateHidden" >
</activity>
<receiver android:name="com.adobe.marketing.mobile.MessageNotificationHandler" />
```

If you selected a modal layout, select one of the following themes for the message:

* `Theme.Translucent.NoTitleBar.Fullscreen`
* `Theme.Translucent.NoTitleBar`
* `Theme.Translucent`

**Example**

```xml
<activity
android:name="com.adobe.marketing.mobile.MessageFullScreenActivity"
android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"
android:windowSoftInputMode="adjustUnspecified|stateHidden" >
</activity>
<receiver android:name="com.adobe.marketing.mobile.MessageNotificationHandler" />
```