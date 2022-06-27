**AuthenticationState**

This class is used to indicate the authentication state for the current `VisitorID`.

```java
public enum AuthenticationState {        
       UNKNOWN,        
       AUTHENTICATED,        
       LOGGED_OUT;
}
```

**VisitorID**

This class is an identifier to be used with the Adobe Experience Cloud Identity Service.

```java
public class VisitorID {    
     //Constructor    
     public VisitorID(String idOrigin, String idType, String id, VisitorID.AuthenticationState authenticationState);

     public VisitorID.AuthenticationState getAuthenticationState();   

     public final String getId();  

     public final String getIdOrigin();  

     public final String getIdType();

}
```