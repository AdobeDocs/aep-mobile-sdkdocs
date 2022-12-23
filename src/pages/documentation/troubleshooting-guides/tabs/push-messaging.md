<Variant platform="android" task="set-push" repeat="5"/>

#### Java

**Syntax**

```
public static void setPushIdentifier(final String pushIdentifier);
```

**Example**

```
// retrieve the token from either GCM or FCM, and pass it to the SDK
```

<Variant platform="ios" task="set-push" repeat="10"/>

#### Swift

**Syntax**

```
Void setPushIdentifier(deviceToken: Data?)
```

**Example**

```
// pass the deviceToken that the APNS has assigned to the device
```

#### Objective-C

**Syntax**

```
+ (void) setPushIdentifier: (nullable NSData*) deviceToken;
```

**Example**
```
// pass the deviceToken that the APNS has assigned to the device
```

<!--- <Variant platform="react-native" task="set-push" repeat="3"/>

**JavaScript**

**Example**

```
ACPCore.setPushIdentifier("pushIdentifier");
``` --->