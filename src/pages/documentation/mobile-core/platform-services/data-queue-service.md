import UsageIos from './tabs/data-queue-service/usage/ios.md'
import UsageAndroid from './tabs/data-queue-service/usage/android.md'

# DataQueue Service

## Overview

The `DataQueue Service` provides access to thread-safe FIFO queues. This service is particularly useful when used in conjunction with a `PersistentHitQueue`.

## Usage

The following code snippet shows how to create a `DataQueue` and add a `DataEntity` to the queue.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<UsageAndroid/>

iOS

<UsageIos/>