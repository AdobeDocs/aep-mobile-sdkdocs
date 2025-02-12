---
title: Adobe Experience Platform Assurance Review & Simulate
description: This is a feature of the Adobe Experience Platform Assurance which allows the users to review the content sent to devices for each request and simulate different experiences on the same devices in real time.
keywords:
- Adobe Experience Platform Assurance
- Review & Simulate Feature Introduction
---

# Adobe Experience Platform Assurance Review & Simulate

This is a feature of the Adobe Experience Platform Assurance which allows the users to review the content sent to devices for each request and simulate different experiences on the same devices in real time.

## Review Requests and Results

1. [Setup and connect](./assurance-for-decisioning.md) ot an Assurance session.
2. To review the personlization requests and results navigate to ‘Review & Simulate’ tab.
   Make sure that at least one decision scope has been set up in the application to be able review them. 

3. In the review tab you can see all personalization requests in the session. If you do not see any request, trigger an update request from the application.

   ![](./assets/review-simulate/assurance-review-tab.png)

4. Select any request to see more information about it in the expanded right panel. To see the preview the result, click the ‘Returned Content’ button available in the right panel. 

   ![](./assets/review-simulate/assurance-result-preview.png)


## Simulate Different Results

The result of each personalization request is customized for each user based on several deciding factors as configured. A unique experience is served for each user. Simulate allows the user to view all available experiences on the device in real time.  

To simulate specific experiences served against a scope follow the following steps:

1. Move to ‘Simulate’ tab in ‘Review & Simulate’ section.

   ![](./assets/review-simulate/assurance-simulate-tab.png)

2. There are two ways to select activities that user wants to simulate:
   * Locations requested during Session - These are scopes/locations that were requested during the current session. 
      * Select the scope you want to customize from the drop-down menu. 
      * Upon Selection a list of all available experiences related to the selected scope will be shown. 
      
   ![](./assets/review-simulate/assurance-simulate-options.png)

   * Locations not requested during session - Any activity, whether active or inactive, can also be simulated as long as application is listening to them.
      * Click on **Select specific target activities**
      * A list of available activities will be shown, you may select appropriate workspace and search through the list.
      * Select Activities that you want to simulate and click continue. 
      * Upon Selection a list of all available experiences related to the selected scopes will be shown.
   
   ![](./assets/review-simulate/assurance-simulate-specific.png)

3. Click on any Experience to send it over to the device in real time. 

   ![](./assets/review-simulate/assurance-simulate-device.png)

4. Simulate results can be updated on device via these two callbacks:
   1. [getPropositions](https://developer.adobe.com/client-sdks/edge/adobe-journey-optimizer-decisioning/api-reference/#getpropositions) - This needs to be triggered by application to get updated results after simulation.
   2. [onPropositionsUpdate](https://developer.adobe.com/client-sdks/edge/adobe-journey-optimizer-decisioning/api-reference/#onpropositionsupdate) - This provides a callback as soon as simulation is done and can be used to update data in real time.
