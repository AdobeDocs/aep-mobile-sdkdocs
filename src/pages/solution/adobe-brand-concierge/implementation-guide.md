---
title: Brand Concierge implementation guide
description: Integrate and customize the Brand Concierge extension in your Android or iOS app.
keywords:
- Brand Concierge
- Implementation
- Android
- iOS
---

import AndroidContent from './tabs/implementation-guide-android.md'
import IosContent from './tabs/implementation-guide-ios.md'

# Brand Concierge Implementation Guide

## Overview

The Brand Concierge extension provides an in-app conversational UI (a chat surface) that can be embedded into a host app with minimal UI wiring. The UI is connected to the Adobe Experience Platform by using AEP SDK shared state (Configuration + Edge Identity) to derive the service configuration needed to run a session and enable brand controlled experiences through configuration and theming.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<AndroidContent />

iOS

<IosContent />
