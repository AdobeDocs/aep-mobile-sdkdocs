---
title: Adobe Target raw API reference
description: An API reference for executing raw API requests for the Adobe Target mobile extension.
keywords:
- Adobe Target
- API reference
---

# Target Raw API reference

## executeRawRequest

This API can be used to retrieve prefetch or execute responses for mbox locations from the configured Target server.

### Android Java

* `request`: A map containing prefetch or execute request data in the Target v1 delivery API request format.
* `callback`: An AdobeCallback instance which will be called after the Target request is completed. The parameter in the callback will contain the response data if the request executed successfully, or it will contain null otherwise.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void executeRawRequest(final Map<String, Object> request, final AdobeCallback<Map<String, Object>> callback)
```

#### Example

```java
final Map<String, Object> executeMbox1 = new HashMap<String, Object>() {
    {
        put("index", 0);
        put("name", "mbox1");
        put("parameters", new HashMap<String, String>() {
            {
                put("mbox_parameter_key1", "mbox_parameter_value1");
            }
        });
        put("profileParameters", new HashMap<String, String>() {
            {
                put("subscription", "premium");
            }
        });
        put("order", new HashMap<String, Object>() {
            {
                put("id", "id1");
                put("total", 100.34);
                put("purchasedProductIds", new ArrayList<String>() {
                    {
                        add("pId1");
                    }
                });
            }
        });
        put("product", new HashMap<String, String>() {
            {
                put("id", "pId1");
                put("categoryId", "cId1");
            }
        });
    }
};

final Map<String, Object> executeMbox2 = new HashMap<String, Object>() {
    {
        put("index", 1);
        put("name", "mbox2");
        put("parameters", new HashMap<String, String>() {
            {
                put("mbox_parameter_key2", "mbox_parameter_value2");
            }
        });
    }
};

final List<Map<String, Object>> executeMboxes = new ArrayList<>();
executeMboxes.add(executeMbox1);
executeMboxes.add(executeMbox2);

final Map<String, Object> request = new HashMap<String, Object>() {
    {
        put("execute", new HashMap<String, Object>() {
            {
                put("mboxes", executeMboxes);
            }
        });
    }
};

Target.executeRawRequest(request, response -> {
    System.out.println("Received Target raw response.");

    if (response == null) {
        System.out.println("Null Target response!");
        return;
    }

    // handle response
});
```

### iOS Swift

* `request`: A dictionary containing prefetch or execute request data in the Target v1 delivery API request format.
* `completion`: A callback which will be invoked with the Target response data or error message after the request is completed.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func executeRawRequest(_ request: [[String: Any]], _ completion: @escaping ([[String: Any]]?, Error?) -> Void)
```

#### Example

```swift
let request: [String: Any] = [ 
    "execute": [ 
        "mboxes": [ 
            [
                "index": 0, 
                "name": "mbox1", 
                "parameters": [ 
                    "mbox_parameter_key1": "mbox_parameter_value1" 
                ], 
                "profileParameters": [ 
                    "subscription": "premium" 
                ], 
                "order": [ 
                    "id": "id1", 
                    "total": 100.34, 
                    "purchasedProductIds":[ 
                        "pId1"
                    ] 
                ], 
                "product": [ 
                    "id": "pId1", 
                    "categoryId": "cId1" 
                ]
            ], 
            [
                "index": 1, 
                "name": "mbox2", 
                "parameters": [ 
                    "mbox_parameter_key2": "mbox_parameter_value2" 
                ]
            ]
        ]
    ]
] 

Target.executeRawRequest(request) { responseData, error in 
    if error != nil { 
        return 
    } 
    guard let responseData = responseData, 
          !responseData.isEmpty else { 
        return 
    } 

    // handle the response   

} 
```

### iOS Objective-C

* `request`: A dictionary containing prefetch or execute request data in the Target v1 delivery API request format.
* `completion`: A callback which will be invoked with the Target response data or error message after the request is completed.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void)executeRawRequest:(nonnull NSDictionary<NSString *, id> *)request completion:(void (nonnull ^)(nullable NSDictionary<NSString *, id> *, nullable NSError *))completion
```

#### Example

```objc
NSDictionary *request = @{ 
    @"execute": @{ 
        @"mboxes": @[ 
            @{ 
                @"index": @(0), 
                @"name": @"mbox1", 
                @"parameters": @{ 
                    @"mbox_parameter_key1": @"mbox_parameter_value1" 
                }, 
                @"profileParameters": @{ 
                    @"subscription": @"premium" 
                }, 
                @"order": @{ 
                    @"id": @"id1", 
                    @"total": @(100.34), 
                    @"purchasedProductIds": @[ 
                        @"pId1" 
                    ]
                }, 
                @"product": @{ 
                    @"id": @"pId1", 
                    @"categoryId": @"cId1" 
                } 
            }, 
            @{ 
                @"index": @(1), 
                @"name": @"mbox2", 
                @"parameters": @{ 
                    @"mbox_parameter_key2": @"mbox_parameter_value2" 
                } 
            } 
        ] 
    } 
}; 

[AEPMobileTarget executeRawRequest:request completion:^(NSDictionary<NSString *,id> * _Nullable data, NSError * _Nullable err) { 
    if (err != nil) { 
        NSLog(@"Error: %@", err); 
        return; 
    } 

    NSLog(@"Target raw response >> %@", data); 

    // handle response 
}]; 
```

## sendRawNotifications

This API sends notification request(s) to the configured Target server for click or display notifications. The event tokens required for the Target click or display notifications can be retrieved from a previous `executeRawRequest` API response.

### Android Java

* `request`: A map containing notifications data in the Target v1 delivery API request format.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void sendRawNotifications(final Map<String, Object> request)
```

#### Example

```java
final List<Map<String, Object>> notifications = new ArrayList<>();
final Map<String, Object> notification = new HashMap<String, Object>() {
    {
        put("id", "0");
        put("timestamp", (long)(System.currentTimeMillis()));
        put("type", "click");
        put("mbox", new HashMap<String, Object>() {
            {
                put("name", "mbox1");
            }
        });
        put("tokens", new ArrayList<String>() {
            {
                add("someClickToken");
            }
        });
        put("parameters", new HashMap<String, Object>() {
            {
                put("mbox_parameter_key3", "mbox_parameter_value3");
            }
        });
    }
};
notifications.add(notification);
final Map<String, Object> request = new HashMap<>();
request.put("notifications", notifications);
Target.sendRawNotifications(request);
```

### iOS Swift

* `request`: A dictionary containing notifications data in the Target v1 delivery API request format.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func sendRawNotifications(_ request: [String: Any]) 
```

#### Example

```swift
var notifications: [[String: Any]] = [] 

let notification: [String: Any] = [
    "id": "0", 
    "timestamp": Int64(Date().timeIntervalSince1970 * 1000.0), 
    "type": "click", 
    "mbox": [ 
        "name": "mbox1" 
    ], 
    "tokens": [ 
        "someClickToken" 
    ], 
    "parameters": [ 
        "mbox_parameter_key3": "mbox_parameter_value3" 
    ] 

] 
notifications.append(notification) 

Target.sendRawNotifications([ 
    "notifications": notifications 
]) 
```

### iOS Objective-C

* `request`: A dictionary containing notifications data in the Target v1 delivery API request format.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void)sendRawNotifications:(nonnull NSDictionary<NSString *, id> *)request
```

#### Example

```objc
NSMutableArray *notifications = [[NSMutableArray alloc] init]; 

NSDictionary* notification = @{ 

    @"id": @"0", 
    @"timestamp": @((long)([[NSDate date] timeIntervalSince1970] * 1000.0)), 
    @"type": @"click", 
    @"mbox": @{ 
        @"name": @"mbox1", 
    }, 
    @"tokens": @[ @"someClickToken" ], 
    @"parameters": @{ 
        @"mbox_parameter_key3": @"mbox_parameter_value3" 
    } 

}; 
[notifications addObject:notification]; 

NSDictionary *request = @{ 
    @"notifications": notifications 
}; 
[AEPMobileTarget sendRawNotifications:request];  
```

