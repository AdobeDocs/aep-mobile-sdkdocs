<TextBlock slots="heading, text" hasCodeBlock/>

#### JavaScript

**Syntax**

```jsx
var contextData = {"eventN:serial number": "&&events"};
```

**Example**

```jsx
// create a context data dictionary and add events
var contextData = {"event1:12341234": "&&events"};

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
ACPCore.trackAction("Action Name", contextData);
// trackState example:
ACPCore.trackState("State Name", contextData);
```