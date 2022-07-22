#### 1. Conform to the ACPHttpConnectionPerformer protocol

The `ACPHttpConnectionPerformer` is a protocol which must be conformed to in order to override the network stack. It provides two methods which must be implemented:

1. `shouldOverride`, which takes a URL and an HTTP method. Return true if you want the network stack to be overridden by the performer, or false if not. 
2. `requestUrl`, which is the URL request override with a completion block.

#### 2. Create an ACPHttpConnection and pass relevant data from your NSURLSessionDataTask completion block

The completion block for the `requestUrl` method takes an `ACPHttpConnection` as its parameter. The `ACPHttpConnection` is used when overriding the network stack in place of the internal network connection implementation and represents the response to an HTTP request. It is to be created using the NSURLResponse and NSData from your url request response. In the case of a Network Error, or timeout, the `ACPHttpConnection*` is expected to be nil.

#### Example

<InlineAlert variant="warning" slots="text"/>

This is just an implementation example. For more information about handling network requests correctly in your mobile application, see [NSURLSessionConfiguration](https://developer.apple.com/documentation/foundation/nsurlsessionconfiguration) and [NSMutableURLRequest](https://developer.apple.com/documentation/foundation/nsmutableurlrequest).

**Objective-C**

```objectivec
#import <Foundation/Foundation.h>
#import "ACPNetworkServiceOverrider.h"

@interface SamplePerformerOverrider : NSObject<ACPHttpConnectionPerformer>

@end

@implementation SamplePerformerOverrider {
    void (^requestUrlCompletion)(ACPHttpConnection*);
}

  // Modifications here would allow for conditional overriding based on the url/method.
  // In this example it always returns true to override all network requests.
- (BOOL) shouldOverride: (NSURL*) url method: (NSString*) method {
    return true;
}

    // Network request override with a completion block. The provided parameters should be configured on the network request.
- (void) requestUrl: (NSURL*) url httpCommand: (NSString*) command connectPayload: (NSString*) payload requestPropertyDict: (NSDictionary<NSString*, NSString*>*) requestProperty connectTimeout: (NSTimeInterval) connectTimeout readTimeout: (NSTimeInterval) readTimeout completion: (void (^) (ACPHttpConnection*)) completion {

    requestUrlCompletion = completion;

    // Create the NSURLSessionConfiguration with the provided timeouts
    NSURLSessionConfiguration* config = [NSURLSessionConfiguration ephemeralSessionConfiguration];
    config.URLCache = nil;
    config.timeoutIntervalForRequest = readTimeout;
    config.timeoutIntervalForResource = connectTimeout;

    NSURLSession* session = [NSURLSession sessionWithConfiguration:config];

    // Create an NSURLRequest with the provided request parameters
    NSMutableURLRequest* request = [NSMutableURLRequest new];
    [request setCachePolicy:NSURLRequestReloadIgnoringLocalCacheData];
    [request setHTTPMethod:command];
    [request setURL:url];

      if (payload.length > 0 && [@"POST" isEqualToString:[command uppercaseString]]) {
       [request setHTTPBody:[payload dataUsingEncoding:NSUTF8StringEncoding]];
    }

    for (NSString *key in requestProperty) {
        NSString* value = requestProperty[key];
        [request setValue:value forHTTPHeaderField:key];
    }

    // Start the request
    NSURLSessionDataTask* task;
    task = [session dataTaskWithRequest:request
                      completionHandler: ^ (NSData * data, NSURLResponse * response, NSError * error) {
                if(!error) {
                    NSHTTPURLResponse* httpResponse = (NSHTTPURLResponse*)response;

            // ***** NOTE the creation of the ACPHttpConnection outlined in step 2.*****
            ACPHttpConnection* connOverride = [[ACPHttpConnection alloc] initWithResponse:httpResponse data:data];
            completion(connOverride); 
        } else {
            completion(nil);
        }
    }];
    [task resume];
}

@end
```

**Swift**

```swift
import Foundation
import ACPCore

class SamplePerformerOverrider: NSObject, ACPHttpConnectionPerformer {

    // Modifications here would allow for conditional overriding based on the url/method.
    // In this example it always returns true to override all network requests.
    func shouldOverride(_ url: URL, method: String) -> Bool {
      return true
    }

    // Network request override with a completion block. The provided parameters should be configured on the network request.
    func request(_ url: URL, httpCommand command: String, connectPayload payload: String, requestPropertyDict requestProperty: [String : String], connectTimeout: TimeInterval, readTimeout: TimeInterval, completion: @escaping (ACPHttpConnection?) -> Void) {

      // Create the URLSessionConfiguration with the provided timeouts
      let config = URLSessionConfiguration.ephemeral
      config.urlCache = nil
      config.timeoutIntervalForRequest = readTimeout
      config.timeoutIntervalForResource = connectTimeout

      let session = URLSession(configuration: config)

      // Create an NSURLRequest with the provided request parameters
      let request = NSMutableURLRequest.init(url: url)
      request.cachePolicy = NSURLRequest.CachePolicy.reloadIgnoringLocalCacheData
      request.httpMethod = command

      if !payload.isEmpty && "POST" == command.uppercased() {
        request.httpBody = payload.data(using: .utf8)
      }

      for property in requestProperty {
        request.setValue(property.value, forHTTPHeaderField: property.key)
      }

      // Start the request
      let task = session.dataTask(with: url, completionHandler: { (data, response, error) in
        if error == nil {
          let httpResponse = response as? HTTPURLResponse
          // create ACPHttpConnection object with the data received and call the completion handler
          let connectionOverride = ACPHttpConnection(response: httpResponse, data: data)
          completion(connectionOverride)
        } else {
          completion(nil)
        }
      })
      task.resume()
    }
}
```

#### 3: Register your ACPHttpConnectionPerformer with the SDK

This step should occur prior to any other interactions with the AEP SDK. While it's possible to register the network override at any point during the application lifecycle, the override will only function for network requests performed after the registration has taken place.

#### Example

**Objective-C**

```objectivec
#import "SamplePerformerOverrider.h"
#import "ACPCore.h"

@implementation AppDelegate

-(BOOL)application:(UIApplication *)application 
didFinishLaunchingWithOptions:(NSDictionary<UIApplicationLaunchOptionsKey, id> *)launchOptions {
        ...
        [ACPNetworkServiceOverrider setHttpConnectionPerformer:[[SamplePerformerOverrider alloc] init]];
        ...
        [ACPCore start:^{
        ...
        }];
```

**Swift**

```swift
import ACPCore

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?
    func applicationDidFinishLaunching(_ application: UIApplication) {
        ...
        ACPNetworkServiceOverrider.setHttpConnectionPerformer(SamplePerformerOverrider())
        ACPCore.start {
        ...
        }
```