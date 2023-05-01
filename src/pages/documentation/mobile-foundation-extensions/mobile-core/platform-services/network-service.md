import Tabs from './tabs/network-service.md'

# Network Service

## Overview

The `Network Service` provides shared functionality to make asynchronous network requests and handle their responses.

## Usage

The following code snippet details how to make a simple network request and handle the response.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=usage"/>

iOS

<Tabs query="platform=ios&task=usage"/>

## Overriding NetworkService

The default implementation of the `NetworkService` provided by the SDK can be overriden to use a custom implementation to cater to your app requirements. This section walks through the steps necessary to create a custom network override, and register it with the SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=override"/>

iOS

<Tabs query="platform=ios&task=override"/>