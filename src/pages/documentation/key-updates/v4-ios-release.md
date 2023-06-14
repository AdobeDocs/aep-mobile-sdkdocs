# Aligning major version releases for the Adobe Experience Platform Mobile SDKs for iOS

*June 14, 2023* - Adobe has recently released released major version 4 of its Adobe Experience Platform Mobile SDKs for iOS ("Mobile SDKs"). This article aims to address some of the questions we anticipate will exist around the new release.

## Why are we getting another major update already?

Apple has added an annual requirement of increasing the minimum version of Xcode used when [submitting to the App Store](https://developer.apple.com/ios/submit/). Each Xcode version only supports back to a specific minimum version of iOS. Loosely speaking, the [Xcode version and _minimum_ iOS version are correlated](https://developer.apple.com/support/xcode/). 

In order to align with Apple's changing requirements, we will also be publishing an annual major release of the Adobe Experience Platform Mobile SDKs for iOS ("Mobile SDKs"). In this yearly major update, you can expect the following changes:

* Increasing the minimum supported version of iOS and Xcode.
* If necessary, increasing the minimum supported version of Swift.

## Why are all the extensions updating to major version 4?

The main goal for this change is to simplify distribution of the Mobile SDKs. Aligning the extensions on the same major version allows us to create predictability. For example:

* All Adobe-provided Mobile SDK extensions that share a major version are compatible with one another.
* Each major version of an Adobe-provided Mobile SDK extension has a designated minimum supported OS version.

## Why did some of the extensions skip major versions?

You may be wondering "What happened to versions 2 and 3 of AEPEdge?" 

In order to achieve our goal of unifying major versions, AEPEdge (and a handful of other extensions) had to skip one or more major versions. Don't worry, you didn't miss them.

## How will net new extensions be versioned?

A new extension - that is, an extension getting its first public release - will be released with the same major version as AEPCore. As part of this major update we are introducing a new extension, AEPEdgeMedia. As you would expect, the first version of this extension is 4.0.0.

## Do I have to reimplement the SDK?

Unlike our previous major version updates, this is not a major rewrite nor does it include major feature updates or code changes. You can expect all of your API calls in the previous major version of the Mobile SDKs to continue working with the new version (with the exception of previously deprecated APIs - more on that later).

While we don't have plans for another major rewrite any time soon, if a need for one comes up, we will be sure to let you know with plenty of lead time.

Outside of major version updates, all of our extensions will continue to follow semantic versioning ([semver](https://semver.org/)) for minor and patch releases on an as-needed basis. We recommend using the [latest version](./../current-sdk-versions.md) of each extension, which will contain the most current optimizations and bug fixes.

## How does this impact the SDK going forward?

For starters, having more frequent updates allows us to better take advantage of new frameworks and APIs introduced by Apple. This will help us remain a modern SDK that remains consistent and in lock-step with iOS changes.

Another subtle benefit of regular major releases is that we can safely remove deprecated APIs from the SDK. Over time, our API footprint can become bloated as requirements change internally. Methods that were no longer preferred would get marked as deprecated, but would have to remain in the public API to preserve backwards compatibility within a major version. Starting with version 4.x of Adobe's iOS SDKs, you can expect any public API that has been marked for deprecation to be removed in the following major release. This means less confusion for your developers, and less maintenance for the team managing the Adobe SDKs - it's a win/win.

## Can I continue using the older SDK versions?

As previously mentioned, the main goal for our annual major update is to maintain support alignment with Apple. For this reason, we will not be supporting any version of our Swift SDK extensions other than the current major version. The previous major versions of the SDK will still be available in their respective repositories, but using them would be out of alignment with Apple's requirements.

## What about Android?

Google has been making regular requirements to [increase target API levels for Google Play apps](https://support.google.com/googleplay/android-developer/answer/11926878?hl=en#). While this requirement is not technically a change that breaks backwards compatibility, aligning major version updates of the Adobe Android SDKs with their deadlines gives us the opportunity to take advantage of the same benefits described above. With that in mind, you can plan to see yearly major releases for Adobe's Android SDK extensions as well.

## When will the annual major updates be released?

We plan to align as closely as possible with the changing requirements of the target platform. While the SDK release dates won't be perfectly aligned, you can count on seeing them sometime following the enforcement dates provided by Apple and Google.

Based on their previous activity, we have some good guesses on the time frame when you can expect these requirements:

* Apple has started enforcing their minimum [Xcode and iOS requirements](https://developer.apple.com/news/upcoming-requirements/) near the end of April every year. 
* Google has announced that their [Target API level deadlines will change annually on August 31st](https://support.google.com/googleplay/android-developer/answer/11926878?hl=en#). 