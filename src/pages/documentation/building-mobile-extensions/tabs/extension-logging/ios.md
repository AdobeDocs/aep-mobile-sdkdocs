#### Objective-C

**Example**

```objectivec
NSString* extensionName = @"com.example.MyExtension";
...

NSError *error = nil;
if ([ACPCore registerExtension:[MyExtension class] error:&error]) {
    [ACPCore log:ACPMobileLogLevelDebug tag:extensionName message:@"MyExtension was successfully registered"];
} else {
    [ACPCore log:ACPMobileLogLevelWarning tag:extensionName message:@"An error occurred while attempting to register MyExtension"];
}
```