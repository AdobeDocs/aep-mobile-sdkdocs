The Android SDK automatically registers an `Application.ActivityLifecycleCallbacks`and listens for `onActivityResumed`. When an activity is resumed, SDK collects the data from the activity. Currently, it is being used in the following scenarios:

* Tracking deep link clickthrough
* Tracking push message clickthrough
* Tracking Local Notification clickthrough