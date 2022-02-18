#### Java

**Syntax**

```java
// Returns the title from the remote message
public String getTitle()

// Returns the body from the remote message 
public String getBody()

// Returns the sound from the remote message 
// The sound string represents the filename of a sound resource bundled in the app.
public String getSound()

// Returns the notification badge count from the remote message 
public int getBadgeCount()

// Returns the notification priority from the remote message. 
// For more information, please read the Firebase documentation (https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#notificationpriority) 
public int getNotificationPriority()

// Returns the channel ID from the remote message. 
public String getChannelId()

// Returns the icon string from the remote message.
// The icon string represents the drawable resource name in the app.
public String getIcon()

// Returns the image URL from the remote message.
public String getImageUrl()

// Returns the data map from the remote message.
public Map<String, String> getData()

// Returns an ActionType object which represents the type of action which needs to be performed on push notification interaction.
// More information about the ActionType enum definition can be found in the ActionType section below.
public ActionType getActionType()

// Returns the action URI as a string. The action URI is used to direct the push notification interaction.
public String getActionUri()

// Returns a list of ActionButtons. More information about the ActionButtons class definition can be found in the ActionButtons section below.
public List<ActionButton> getActionButtons()
```

**Internal classes and enums**

**ActionType**

```java
public enum ActionType {
    DEEPLINK, WEBURL, DISMISS, NONE
}
```

**ActionButtons**

```java
// Constructor
public ActionButton(final String label, final String link, final String type)

// Public APIs

// Returns the label for the action button
public String getLabel()

// Returns the link for the action button
public String getLink()

// Returns the ActionType for the action button
public ActionType getType()
```