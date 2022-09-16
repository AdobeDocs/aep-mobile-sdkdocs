```swift
import AEPServices

// Create a `DataQueue`
guard let dataQueue = ServiceProvider.shared.dataQueueService.getDataQueue(label: name) else {
  Log.error(label: "\(name):\(#function)", "Failed to create Data Queue")
  return
}

// Create a `DataEntity`
let entity = DataEntity(data: myData)

// Add entity to `dataQueue`
dataQueue.add(entity)
```