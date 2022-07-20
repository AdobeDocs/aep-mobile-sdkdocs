
Create a `Podfile` if you do not already have one:

```pod
pod init
```

Add the dependencies to your `Podfile` for each extension.

```pod
use_frameworks!
pod 'AEPCore', '~> 1.0'
pod 'AEPUserProfile', '~> 1.0'
```

If Cocoapods cannot not find the dependencies, you may need to run this command:

```pod
pod repo update
```

Save the `Podfile` and run install:

```pod
pod install
```