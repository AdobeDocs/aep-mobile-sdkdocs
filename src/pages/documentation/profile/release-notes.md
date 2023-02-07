# Release Notes

## Jan 31, 2023

### Android UserProfile 2.0.0

- Initial release to work with Android SDK 2.0. It is [open sourced on Github](https://github.com/adobe/aepsdk-userprofile-android). Also, the following APIs have been deprecated and will be removed in a future release:

  | Deprecated API                      | Recommended Alternative              |
  | ----------------------------------- | ------------------------------------ |
  | `UserProfile.registerExtension()`   | `MobileCore.registerExtensions()`    |
  | `UserProfile.updateUserAttribute()` | `UserProfile.updateUserAttributes()` |
  | `UserProfile.removeUserAttribute()` | `UserProfile.removeUserAttributes()` |

## Jul 2, 2021

### iOS AEPUserProfile 3.0.1

- Fixed a bug preventing proper data migration when presented with an `app group` .

## Feb 5, 2021

### iOS AEPUserProfile 3.0.0

- Released the brand new Adobe Experience Platform User Profile Swift SDK. It is [open sourced on Github](https://github.com/adobe/aepsdk-userprofile-ios).
