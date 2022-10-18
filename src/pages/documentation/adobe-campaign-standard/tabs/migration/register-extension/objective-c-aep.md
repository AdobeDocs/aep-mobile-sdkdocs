<InlineAlert variant="info" slots="text"/>

Registration occurs by passing `AEPMobileCampaign` to the `[AEPMobileCore registerExtensions:completion:]` API.

```objc
[AEPMobileCore registerExtensions:@[AEPMobileCampaign.class] completion:nil];
```