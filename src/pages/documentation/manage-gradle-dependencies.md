# Manage dependencies using Gradle

Installation via [Maven](https://maven.apache.org/) & [Gradle](https://gradle.org/) is the easiest and recommended way to get the AEP SDK into your Android app. 

The Android installation instructions generated for mobile properties in the Data Collection UI, as indicated in our [getting started guide](https://developer.adobe.com/client-sdks/documentation/getting-started/get-the-sdk/), use dynamic versioning for Gradle dependencies. This is done to simplify getting started with the latest versions of our SDKs. Use of dynamic dependency version is not recommended as it makes builds non-deterministic. This causes builds to break without any obvious change, and worse, can be caused by a transitive dependency that the build author has no control over.

To have predictable builds, follow one of these approaches when managing gradle dependencies. 

## Resolve dependencies using IDE

To ensure consistent builds, it is best to explicitly specify the versions of dependencies and manually update them as necessary. This allows for full control over version updates and the ability to thoroughly review the dependency changelog and assess the changes before implementation.

IDEs such as Android Studio or IntelliJ highlight dynamic or outdated dependencies as warnings. Follow the suggestions provided to update them to appropriate version.

![Dynamic dependency warning](./assets/manage-gradle-dependencies/dynamic-dependencies.png)
![Outdated dependency warning](./assets/manage-gradle-dependencies/outdated-dependencies.png)

## Locking dependency versions

Gradle dependency locking is a feature that allows developers to lock the versions of dependencies used in a project, ensuring that the same versions are used consistently across different builds and environments. This increases build's stability and predictability, and prevents version conflicts or unexpected behavior caused by using different versions of dependencies.

Please refer to the gradle [locking dependency versions guide](https://docs.gradle.org/current/userguide/dependency_locking.html) to enable dependency locking in your project.