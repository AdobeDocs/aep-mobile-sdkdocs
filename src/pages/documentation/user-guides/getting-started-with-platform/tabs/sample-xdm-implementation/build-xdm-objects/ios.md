#### Swift

```swift
// TODO - Assignment 3
var xdmData : [String: Any] = [:]

// 1. Add Email to the IdentityMap.
// Note: this app does not implement a logging system, so authenticatedState ambiguous is used
// in this case. The other authenticatedState values are: authenticated, loggedOut
xdmData["identityMap"] = ["Email": [["id": reviewerEmail,
                                     "authenticatedState": "ambiguous"]]]

// 2. Add product review details in the custom field group
// Note: use your _tenantId here as specified in the Product Reviews Schema in Adobe Experience Platform
xdmData["_tenantId"] = ["productSku": products[productIndex].sku,
                         "rating": reviewRating,
                         "reviewText": reviewText,
                            "reviewerId": reviewerEmail]
```