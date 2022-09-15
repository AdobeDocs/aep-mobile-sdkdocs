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

1. In the Data Collection UI, click the **Extensions** tab.
2. On the **Catalog** tab, locate the **AEP Assurance** extension, and click **Install**.
3. Follow the publishing process to update the Mobile SDK configuration.

![](./assets/index/assurance-extension.png)

## Add the AEP Assurance extension to your app

### Import the library to your app code

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&task=import-library"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&task=import-library"/>

iOS (ACP 1.x)

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

{% tabs %}
{% tab title="Android" %}

{% endtab %}

{% tab title="iOS (AEP 3.x)" %}

To start using the extension library, you must first register the extension with the [Mobile Core](../mobile-core/index.md) extension.

#### Swift

```swift
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

        let extensions = [Assurance.self, ...]
        MobileCore.registerExtensions(extensions, {
            // set app id from the Data Collection UI    
		        MobileCore.configureWith(appId: "yourAppId")  
        })

        return true
    }
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    NSArray *extensionsToRegister = @[AEPMobileAssurance.class, ...];
    [AEPMobileCore registerExtensions:extensionsToRegister completion:^{
        // set app id from the Data Collection UI
        [AEPMobileCore configureWithAppId: @"yourAppId"];
    }];

    return YES;
}

```

{% endtab %}

{% tab title="iOS (ACP 1.x)" %}

To start using the extension library, you must first register the extension with the [Mobile Core](../mobile-core/index.md) extension.

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
	   // set app id from the Data Collection UI
     ACPCore.configure(withAppId: "yourAppId")
     AEPAssurance.registerExtension()
     ACPCore.start(nil)
     return true;
}
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [ACPCore configureWithAppId:@"yourAppId"]; // set app id from the Data Collection UI
    [AEPAssurance registerExtension];
    [ACPCore start:nil];
    return YES;
 }
```

{% endtab %}

{% tab title="React Native" %}
#### JavaScript

When using React Native, register AEP Assurance with Mobile Core in native code as shown on the Android and iOS tabs.
{% endtab %}

{% tab title="Flutter" %}
#### Dart

When using Flutter, register AEP Assurance with Mobile Core in native code as shown on the Android and iOS tabs.
{% endtab %}

{% tab title="Cordova" %}
#### JavaScript

When using Cordova, register AEP Assurance with Mobile Core in native code as shown on the Android and iOS tabs.
{% endtab %}

{% tab title="Unity" %}
#### C\#

Register the extension in the `start()` function:

```csharp
using com.adobe.marketing.mobile;
using using AOT;

public class MainScript : MonoBehaviour
{
    [MonoPInvokeCallback(typeof(AdobeStartCallback))]
    public static void HandleStartAdobeCallback()
    {   
        // set app id from the Data Collection UI
        ACPCore.ConfigureWithAppID("yourAppId");
    }

    // Start is called before the first frame update
    void Start()
    {   
        AEPAssurance.registerExtension();
        ACPCore.Start(HandleStartAdobeCallback);
    }
}
```
{% endtab %}

{% tab title="Xamarin" %}
**iOS**

Register the AEPAssurance extension in your app's `FinishedLaunching()` function:

```csharp
public override bool FinishedLaunching(UIApplication app, NSDictionary options)
{
  global::Xamarin.Forms.Forms.Init();
  LoadApplication(new App());
  AEPAssurance.RegisterExtension();
  // start Mobile Core
  ACPCore.Start(startCallback);
  return base.FinishedLaunching(app, options);
}

private void startCallback()
{
  // set app id from the Data Collection UI
  ACPCore.ConfigureWithAppID("yourAppId");
}
```

**Android**

Register the AEPAssurance extension in your app's `OnCreate()` function:

```csharp
protected override void OnCreate(Bundle savedInstanceState)
{
  base.OnCreate(savedInstanceState);
  global::Xamarin.Forms.Forms.Init(this, savedInstanceState);
  LoadApplication(new App());
  AEPAssurance.RegisterExtension();

  // start Mobile Core
  ACPCore.Start(new CoreStartCompletionCallback());
}

class CoreStartCompletionCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object callback)
  {
    // set app id from the Data Collection UI
    ACPCore.ConfigureWithAppID("yourAppId");
  }
}
```
{% endtab %}
{% endtabs %}

### Implement AEP Assurance session start APIs \(iOS only\)

(session start APIs for other platforms listed [here](https://aep-sdks.gitbook.io/docs/foundation-extensions/adobe-experience-platform-assurance/assurance-api-reference) )

The [startSession](./assurance-api-reference.md#startsession) API needs to be called to begin an Adobe Experience Platform Assurance session. When called, SDK displays a PIN authentication overlay to begin a session.

{% hint style="info" %}

You may call this API when the app launches with a url (see code snippet below for sample usage)

The AEP Assurance Android extension does not require this API to be called since it registers the app lifecycle handlers which automatically pick up any deep links and use them to start the session.

When using the AEP Assurance iOS extension, you should call this API when the app launches with a url (see code snippet below for sample usage).

{% endhint %}

{% tabs %}

{% tab title="iOS (AEP 3.x)" %}

#### Swift

**Example**

```swift
    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        Assurance.startSession(url: url)
        return true
    }
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `scene(_:openURLContexts:)` method as follows:

```swift
    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
        // Called when the app in background is opened with a deep link.
        if let deepLinkURL = URLContexts.first?.url {
            Assurance.startSession(url: deepLinkURL)
        }
    }

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        // Called when the app launches with the deep link
        if let deepLinkURL = connectionOptions.urlContexts.first?.url {
            Assurance.startSession(url: deepLinkURL)
        }
    }
```



#### Objective-C

**Syntax**

```objectivec
static func startSession(url: URL?)
```

**Example**

```objectivec
- (BOOL)application:(UIApplication *)app openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    [AEPMobileAssurance startSessionWithUrl:url];
    return true;
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `scene(_:openURLContexts:)` method as follows:

```objectivec

- (void)scene:(UIScene *)scene willConnectToSession:(UISceneSession *)session options:(UISceneConnectionOptions *)connectionOptions {    
    NSURL *deepLinkURL = connectionOptions.URLContexts.allObjects.firstObject.URL;
    [AEPMobileAssurance startSessionWithUrl:deepLinkURL];
}


- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {
    [AEPMobileAssurance startSessionWithUrl:URLContexts.allObjects.firstObject.URL];
}

```

{% endtab %}

{% tab title="iOS (AEP 1.x)" %}

#### Swift

**Example**

```swift
func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    AEPAssurance.startSession(url)
    return true
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `scene(_:openURLContexts:)` method as follows:

```swift
func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    AEPAssurance.startSession((URLContexts.first!).url)
}
```
#### Objective-C

**Syntax**

```objectivec
+ (void) startSession: (NSURL* _Nonnull) url;
```

**Example**

```objectivec
- (BOOL)application:(UIApplication *)app openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    [AEPAssurance startSession:url];
    return true;
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `scene(_:openURLContexts:)` method as follows:

```objectivec
- (void) scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {
    UIOpenURLContext * urlContext = URLContexts.anyObject;
    if (urlContext != nil) {
        [AEPAssurance startSession:urlContext.URL];
    }
}
```

{% endtab %}
{% endtabs %}
