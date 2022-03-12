<InlineAlert variant="info" slots="text"/>

Registration occurs by passing `AEPMobileTarget` to the `[AEPMobileCore registerExtensions:completion:]` API.

```objc
[AEPMobileCore registerExtensions:@[AEPMobileTarget.class] completion:nil];
```