#### Objective-C

**Example**

```objectivec
NSDictionary *updatedConfig = @{@"analytics.server":@"sample.analytics.tracking.server",
                                @"analytics.rsids":@"rsid1,rsid2",
                                @"analytics.batchLimit":@(10),
                                @"analytics.offlineEnabled":@YES};
[ACPCore updateConfiguration:updatedConfig];
```

#### Swift

**Example**

```swift
let updatedConfig = ["analytics.server":"sample.analytics.tracking.server", 
                     "analytics.rsids":"rsid1,rsid2", 
                     "analytics.batchLimit":10, 
                     "analytics.offlineEnabled":true]
ACPCore.updateConfiguration(updatedConfig)
```
{% endtab %}

{% tab title="React Native" %}
#### JavaScript

**Example**

```jsx
ACPCore.updateConfiguration({"analytics.server": "sample.analytics.tracking.server",
                             "analytics.rsids": "rsid1,rsid2",
                             "analytics.batchLimit": 10,
                             "analytics.offlineEnabled": true});
```