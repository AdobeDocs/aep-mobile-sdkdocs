```swift
import AEPServices

// Add a computed variable to your type or use it directly in the function where required
private var systemInfoService: SystemInfoService {
  return ServiceProvider.shared.systemInfoService
}

// ...
let locale = systemInfoService.getActiveLocaleName()
```