#### C#

From least to most verbose, the order of Mobile SDK logging modes is as follows for iOS:

* ACPMobileLogLevel.Error;
* ACPMobileLogLevel.Warning;
* ACPMobileLogLevel.Debug;
* ACPMobileLogLevel.Verbose;

From least to most verbose, the order of Mobile SDK logging modes is as follows for Android:

* LoggingMode.Error;
* LoggingMode.Warning;
* LoggingMode.Debug;
* LoggingMode.Verbose;

**iOS syntax**

```csharp
public static ACPMobileLogLevel LogLevel { get, set }
```

**Android syntax**

```csharp
public unsafe static LoggingMode LogLevel { get, set }
```

**iOS example**

```csharp
ACPCore.LogLevel = ACPMobileLogLevel.Verbose;
```

**Android example**

```csharp
ACPCore.LogLevel = LoggingMode.Verbose;
```