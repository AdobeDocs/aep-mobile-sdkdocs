#### C#

**Syntax**

```csharp
public static void GetUrlVariables(AdobeGetUrlVariables callback)
```

* _callback_ is a callback containing the url variables in query parameter form if the `GetUrlVariables` API executed without any errors.

**Example**

```csharp
[MonoPInvokeCallback(typeof(AdobeGetUrlVariables))]
public static void HandleAdobeGetUrlVariables(string urlVariables)
{
  print("Url variables are : " + urlVariables);
}
ACPIdentity.GetUrlVariables(HandleAdobeGetUrlVariables);
```