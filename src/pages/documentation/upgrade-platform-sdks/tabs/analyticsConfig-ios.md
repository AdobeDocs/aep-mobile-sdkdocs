#### iOS

If using Cocoapods, remove the v4 Mobile SDK dependency from the Podfile:

```
target 'YourTarget' do
    pod 'AdobeMobileSDK'
    ...
end
```

Alternatively, if the v4 Mobile SDK library is linked in Xcode, select the application target and go to `Build Phases`, then `Link Binary With Libraries` and remove `AdobeMobileLibrary.a`.