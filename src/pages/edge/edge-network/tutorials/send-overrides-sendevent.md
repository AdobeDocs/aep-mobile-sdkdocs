---
title: Sending configuration overrides using sendEvent
description: Learn how to 
keywords:
- Edge Network
- Datastream config overrides
- Datastream ID override
- Guide
---

# Sending configuration overrides using sendEvent

Datastream overrides let you define additional configuration settings for your datastreams, allowing you to trigger different datastream behaviors on a per event basis.

## Prerequisites

Before continuing with this tutorial, please ensure that the Edge extension version meets the minimum requirements:

* [Edge](../../index.md) extension version >= **2.4.0** (Android) and >= **4.3.0** (iOS).

Additionally, please complete the following tutorials:

* [Configure datastreams](../../../home/getting-started/configure-datastreams.md)
* [Define overrides in your datastream configuration](https://experienceleague.adobe.com/docs/experience-platform/datastreams/configure.html?lang=en)

## Datastream ID override

After configuring the datastream overrides, you can now send these overrides to the Edge Network through Mobile SDK. Sending the overrides using the `sendEvent` API is the final step of activating the datastream configuration overrides.

The following examples demonstrate what a datastream ID override looks like in a Mobile SDK integration:

<CodeBlock slots="heading, code" repeat="2" languages="iOS (Swift), Android (Kotlin)" />

iOS (Swift)

```swift
// Create Experience event from dictionary
var xdmData: [String: Any] = [
  "eventType": "SampleXDMEvent",
  "sample": "data",
]
let experienceEvent = ExperienceEvent(xdm: xdmData, datastreamIdOverride: "SampleDatastreamId")

Edge.sendEvent(experienceEvent: experienceEvent) { (handles: [EdgeEventHandle]) in
  // Handle the Edge Network response
}
```

Android (Kotlin)

```kotlin
// Create experience event from Map
val xdmData = mutableMapOf < String, Any > ()
xdmData["eventType"] = "SampleXDMEvent"
xdmData["sample"] = "data"

val experienceEvent = ExperienceEvent.Builder()
    .setXdmSchema(xdmData)
    .setDatastreamIdOverride("SampleDatastreamId")
    .build()

Edge.sendEvent(experienceEvent) {
    // Handle the Edge Network response
}
```

## Datastream configuration override

The following examples demonstrate what a datastream configuration override could look like in a Mobile SDK integration:

<CodeBlock slots="heading, code" repeat="2" languages="iOS (Swift), Android (Kotlin)" />

iOS (Swift)

```swift
// Create Experience event from dictionary
var xdmData: [String: Any] = [
  "eventType": "SampleXDMEvent",
  "sample": "data",
]

let configOverrides: [String: Any] = [
  "com_adobe_experience_platform": [
    "datasets": [
      "event": [
        "datasetId": "SampleEventDatasetIdOverride"
      ]
    ]
  ],
  "com_adobe_analytics": [
  "reportSuites": [
        "MyFirstOverrideReportSuite",
          "MySecondOverrideReportSuite",
          "MyThirdOverrideReportSuite"
      ]
  ],
  "com_adobe_identity": [
    "idSyncContainerId": "1234567"
  ],
  "com_adobe_target": [
    "propertyToken": "<YOUR_PROPERTY_TOKEN>"
 ],
]

let experienceEvent = ExperienceEvent(xdm: xdmData, datastreamConfigOverride: configOverrides)

Edge.sendEvent(experienceEvent: experienceEvent) { (handles: [EdgeEventHandle]) in
  // Handle the Edge Network response
}
```

Android (Kotlin)

```kotlin
// Create experience event from Map
val xdmData = mutableMapOf < String, Any > ()
xdmData["eventType"] = "SampleXDMEvent"
xdmData["sample"] = "data"

val configOverrides = mapOf(
    "com_adobe_experience_platform"
    to mapOf(
        "datasets"
        to mapOf(
            "event"
            to mapOf("datasetId"
                to "SampleEventDatasetIdOverride")
        )
    ),
    "com_adobe_analytics"
    to mapOf(
        "reportSuites"
        to listOf(
            "MyFirstOverrideReportSuite",
            "MySecondOverrideReportSuite",
            "MyThirdOverrideReportSuite"
        )
    ),
    "com_adobe_identity"
    to mapOf(
        "idSyncContainerId"
        to "1234567"
    ),
    "com_adobe_target"
    to mapOf(
        "propertyToken"
        to "<YOUR_PROPERTY_TOKEN>"
    )
)

val experienceEvent = ExperienceEvent.Builder()
    .setXdmSchema(xdmData)
    .setDatastreamConfigOverride(configOverrides)
    .build()

Edge.sendEvent(experienceEvent) {
    // Handle the Edge Network response
}
```

## Payload example

The following example shows a sample payload after overriding the datastream configurations:

```json
{
  "meta": {
    "configOverrides": {
      "com_adobe_experience_platform": {
        "datasets": {
          "event": {
            "datasetId": "SampleProfileDatasetIdOverride"
          }
        }
      },
      "com_adobe_analytics": {
        "reportSuites": [
        "MyFirstOverrideReportSuite",
        "MySecondOverrideReportSuite",
        "MyThirdOverrideReportSuite"
        ]
      },
      "com_adobe_identity": {
        "idSyncContainerId": "1234567"
      },
      "com_adobe_target": {
        "propertyToken": "<YOUR_PROPERTY_TOKEN>"
      }
    },
    "state": {  }
  },
  "events": [  ]
}
```
