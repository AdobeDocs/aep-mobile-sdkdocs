#### Java

```java
// Case 1: to use ADBMobileConfig.json in the assets folder
// No code is needed

// Case 2: to use a config json from a absolute path:
MobileCore.configureWithFileInPath("absolute/path/to/exampleJSONfile.json");

// Case 3: to use a config json in Assets folder
MobileCore.configureWithFileInAssets("exampleJSONfile.json");
```