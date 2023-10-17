"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7711],{72755:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return c}});var i=n(87462),o=n(63366),d=(n(15007),n(64983)),a=n(91515),r=n(44071),s=["components"],l={},h=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",t)}},m=h("InlineAlert"),p=h("TabsBlock"),u={_frontmatter:l},x=a.Z;function c(e){var t=e.components,n=(0,o.Z)(e,s);return(0,d.mdx)(x,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,d.mdx)("h2",{id:"q-i-am-using-edge-and-adobe-solutions-extensions-which-identity-extension-should-i-install-and-register"},"Q: I am using Edge and Adobe Solutions extensions, which Identity extension should I install and register?"),(0,d.mdx)("p",null,"A: Both."),(0,d.mdx)("p",null,"When using both Adobe Experience Platform Edge and Adobe Solutions extensions, both Identity for Edge Network and Identity for Experience Cloud ID Service extensions can be registered with the Mobile SDK at the same time."),(0,d.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The following instructions are for configuring an application using both Edge Network and Adobe Solutions mobile extensions. If an application will include only Adobe Experience Platform Edge extensions, follow the instructions ",(0,d.mdx)("a",{parentName:"p",href:"./index.md#download-and-import-the-identity-extension"},"here"),"."),(0,d.mdx)("h3",{id:"download-and-import-the-identity-and-identity-for-edge-network-extensions"},"Download and import the Identity and Identity for Edge Network extensions"),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(r.default,{query:"platform=android&task=download",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(r.default,{query:"platform=ios&task=download",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"register-the-identity-and-identity-for-edge-network-extensions-with-mobile-core"},"Register the Identity and Identity for Edge Network extensions with Mobile Core"),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(r.default,{query:"platform=android&task=register",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(r.default,{query:"platform=ios&task=register",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"q-will-an-existing-experience-cloud-id-ecid-migrate-to-the-identity-for-edge-network-extension"},"Q: Will an existing Experience Cloud ID (ECID) migrate to the Identity for Edge Network extension?"),(0,d.mdx)("p",null,"A: Yes."),(0,d.mdx)("p",null,"If the application previously installed the Identity for Experience Cloud ID Service extension and upgrades to the Identity for Edge Network extension, the existing ECID value is migrated to the Identity for Edge Network extension on first launch of the application."),(0,d.mdx)("p",null,"Note, however, if the Mobile SDK's privacy status was set to ",(0,d.mdx)("inlineCode",{parentName:"p"},"optedOut")," at the time the application is upgraded, the Identity for Experience Cloud ID Service extension will not have an ECID, as it was cleared. In this case, the Identity for Edge Network extension will generate a new ECID."),(0,d.mdx)("h2",{id:"q-what-is-the-experience-cloud-id-ecid-used-by-the-sdk-when-using-both-aep-edge-extensions-and-adobe-solutions-extensions"},"Q: What is the Experience Cloud ID (ECID) used by the SDK when using both AEP Edge extensions and Adobe Solutions extensions?"),(0,d.mdx)("p",null,"A: The Identity for Edge Network extension and the Identity for Experience Cloud ID Service extension each manage their own ECID. However, the two ECIDs are synced as part of the XDM IdentityMap."),(0,d.mdx)("p",null,"At first launch of the application after upgrading to the Identity for Edge Network extension, the existing ECID from the Identity for Experience Cloud ID Service extension is migrated to the Identity for Edge Network extension. In this case both extensions will have the same ECID value."),(0,d.mdx)("p",null,"The ",(0,d.mdx)("a",{parentName:"p",href:"./api-reference.md#resetidentities"},"resetIdentities")," API causes the Identity for Edge Network extension and the Identity for Experience Cloud ID Service extension to independently generate new ECID values. After calling this API, the ECID used by each identity extension will be different."),(0,d.mdx)("p",null,"Changing the privacy status to ",(0,d.mdx)("inlineCode",{parentName:"p"},"optedOut")," will clear the ECID value used by the Identity for Experience Cloud ID Service extension. Changing the privacy status back to ",(0,d.mdx)("inlineCode",{parentName:"p"},"optedIn")," will generate a new ECID used by the Identity for Experience Cloud ID Service extension. Privacy status changes do not change the ECID used by the Identity for Edge Network extension. Changing the privacy status will cause the ECID used by each identity extension to be different."),(0,d.mdx)("p",null,"When each identity extension has a different ECID, the Identity for Edge Network extension will include the Identity for Experience Cloud ID Service ECID in its ",(0,d.mdx)("a",{parentName:"p",href:"./api-reference.md#identitymap"},"IdentityMap"),", and so the Adobe Experience Platform Identity Service will link the the two ECIDs in the customer's Identity Graph."),(0,d.mdx)("p",null,"The following example shows an IdentityMap containing the ECIDs from both Identity for Edge Network extension and Identity for Experience Cloud ID Service extension. The ECID from the Identity for Edge Network extension is always listed first in the list of ECIDs."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},'"identityMap" : {\n      "ECID" : [\n        {\n          "id" : "73586628797489658169123381027155647197",\n          "authenticatedState" : "ambiguous",\n          "primary" : false\n        },\n        {\n          "id" : "81117527655405132265917409409236407340",\n          "authenticatedState" : "ambiguous",\n          "primary" : false\n        }\n      ]\n    }\n')),(0,d.mdx)("h2",{id:"q-i-set-privacy-status-to-opted-out-why-do-i-see-an-ecid-value-when-calling-identitygetexperiencecloudid"},"Q: I set privacy status to opted out, why do I see an ECID value when calling ",(0,d.mdx)("inlineCode",{parentName:"h2"},"Identity.getExperienceCloudId()"),"?"),(0,d.mdx)("p",null,"A: The Identity for Edge Network extension does not change its ECID based on privacy status changes."),(0,d.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The Identity for Edge Network extension and the Identity for Experience Cloud ID Service extension each manage their own ECID value and are generated independently of each other."),(0,d.mdx)("p",null,"The Identity for Edge Network extension does not clear its stored identities or regenerate the ECID due to privacy status changes. Instead, use the ",(0,d.mdx)("a",{parentName:"p",href:"./api-reference.md#resetidentities"},"resetIdentities")," API. Note this API does not clear the ECID but instead generates a new ECID."),(0,d.mdx)("p",null,"Each identity extension has its own API to retrieve their respective ECIDs as well. Use ",(0,d.mdx)("a",{parentName:"p",href:"./api-reference.md#getexperiencecloudid"},"Identity.getExperienceCloudId")," to get the Identity for Edge Network extension's ECID, and ",(0,d.mdx)("a",{parentName:"p",href:"../mobile-core/identity/api-reference.md#getexperiencecloudid"},"Identity.getExperienceCloudId")," to get the Identity for Experience Cloud ID Service extension's ECID."),(0,d.mdx)("h2",{id:"q-how-can-i-get-all-the-identifiers-used-by-the-sdk-when-using-both-edge-extensions-and-adobe-solutions-extensions"},"Q: How can I get all the identifiers used by the SDK when using both Edge extensions and Adobe Solutions extensions?"),(0,d.mdx)("p",null,"A: Use both ",(0,d.mdx)("inlineCode",{parentName:"p"},"getSdkIdentities")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"getIdentities")),(0,d.mdx)("p",null,"To get the identifiers used by the Adobe Solutions extensions, call ",(0,d.mdx)("a",{parentName:"p",href:"../../home/base/mobile-core/api-reference.md#getsdkidentities"},"getSdkIdentities"),"."),(0,d.mdx)("p",null,"To get the identifiers used by the Edge extensions, call ",(0,d.mdx)("a",{parentName:"p",href:"./api-reference.md#getidentities"},"getIdentities"),"."),(0,d.mdx)("h2",{id:"q-how-can-i-clear-all-the-identifiers-from-the-sdk-when-using-both-edge-extensions-and-adobe-solutions-extensions"},"Q: How can I clear all the identifiers from the SDK when using both Edge extensions and Adobe Solutions extensions?"),(0,d.mdx)("p",null,"A: Set privacy status to ",(0,d.mdx)("inlineCode",{parentName:"p"},"optedOut")," and call ",(0,d.mdx)("inlineCode",{parentName:"p"},"resetIdentities")),(0,d.mdx)("p",null,"To clear the identifiers used by the Adobe Solutions extensions, call ",(0,d.mdx)("a",{parentName:"p",href:"../../resources/privacy-and-gdpr.md#set-and-get-privacy-status"},"setPrivacyStatus")," and set the privacy status to ",(0,d.mdx)("inlineCode",{parentName:"p"},"optedOut"),"."),(0,d.mdx)("p",null,"To clear the identifiers used by the Edge extensions, call ",(0,d.mdx)("a",{parentName:"p",href:"../../home/base/mobile-core/api-reference.md#resetidentities"},"resetIdentities")),(0,d.mdx)("h2",{id:"q-what-steps-are-needed-to-generate-a-new-experience-cloud-id-ecid-for-a-user-when-using-both-edge-extensions-and-adobe-solutions-extensions"},"Q: What steps are needed to generate a new Experience Cloud ID (ECID) for a user when using both Edge extensions and Adobe Solutions extensions?"),(0,d.mdx)("p",null,"A: Both identity extensions' ECID must be regenerated in sequence to avoid linking the old and new ECIDs in Adobe Experience Platform."),(0,d.mdx)("p",null,"When using Real-time Customer Profile and Identity Service, the ECIDs from both identity extensions are linked together in the customer's Identity Graph. Care must be taken when regenerating new ECIDs such that the old and new ECIDs are not linked within the same Identity Graph."),(0,d.mdx)("p",null,"Perform the following API calls to regenerate the ECIDs in sequence:"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"Set ",(0,d.mdx)("a",{parentName:"li",href:"../../resources/privacy-and-gdpr.md#set-and-get-privacy-status"},"privacy status")," to ",(0,d.mdx)("inlineCode",{parentName:"li"},"optedOut")," to clear the ECID from the Identity direct service extension."),(0,d.mdx)("li",{parentName:"ol"},"Call ",(0,d.mdx)("a",{parentName:"li",href:"./api-reference.md#resetidentities"},"resetIdentities")," to regenerate a new ECID in the Identity for Edge Network extension."),(0,d.mdx)("li",{parentName:"ol"},"Call ",(0,d.mdx)("a",{parentName:"li",href:"./api-reference.md#getexperiencecloudid"},"getExperienceCloudId")," on the Identity for Edge Network extension. This ensures the new ECID is generated before continuing."),(0,d.mdx)("li",{parentName:"ol"},"Set ",(0,d.mdx)("a",{parentName:"li",href:"../../resources/privacy-and-gdpr.md#set-and-get-privacy-status"},"privacy status")," to ",(0,d.mdx)("inlineCode",{parentName:"li"},"optedIn")," to generate a new ECID in the Identity direct service extension.")),(0,d.mdx)("p",null,"After completing the above steps, each identity extension will have its own, different, ECID. The new ECIDs will get linked under a new Identity Graph for the customer."),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(r.default,{query:"platform=android&task=link",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(r.default,{query:"platform=ios&task=link",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"q-can-i-safely-remove-the-identity-for-experience-cloud-id-service-extension-in-an-app-if-i-am-using-the-edge-network-extension"},"Q: Can I safely remove the Identity for Experience Cloud ID Service extension in an app if I am using the Edge Network extension?"),(0,d.mdx)("p",null,"If no other extension relies on the Identity for Experience Cloud ID Service extension, you can safely remove it. Please refer to the ",(0,d.mdx)("a",{parentName:"p",href:"../../solution/adobe-analytics/migrate-to-edge-network.md#identity-consideration-for-the-migration"},"Identity consideration document")," for more information."),(0,d.mdx)("h2",{id:"q-i-am-passing-the-ecid-from-to-the-webview-using-geturlvariables-api-but-the-web-interactions-get-a-new-ecid-assigned-how-do-i-fix-this"},"Q: I am passing the ECID from to the WebView using ",(0,d.mdx)("inlineCode",{parentName:"h2"},"getUrlVariables")," API, but the web interactions get a new ECID assigned, how do I fix this?"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"Ensure that the output from the ",(0,d.mdx)("inlineCode",{parentName:"li"},"getUrlVariables")," API includes accurate ",(0,d.mdx)("strong",{parentName:"li"},"ECID")," and ",(0,d.mdx)("strong",{parentName:"li"},"Experience Cloud orgID")," values. Please note that the orgID set up for the Mobile SDK must match the orgID configured in the Web SDK."),(0,d.mdx)("li",{parentName:"ol"},"Make sure the timestamp (TS) included in the ",(0,d.mdx)("inlineCode",{parentName:"li"},"getUrlVariables")," result did not expire (that is, it is not older than 5 minutes since the time it was retrieved). For this reason, it is recommended that the result from ",(0,d.mdx)("inlineCode",{parentName:"li"},"getUrlVariables")," is not cached and reused in the app, but retrieved on demand before loading the WebView."),(0,d.mdx)("li",{parentName:"ol"},"The query string returned by the ",(0,d.mdx)("inlineCode",{parentName:"li"},"getUrlVariables")," API is already encoded, so please ensure that you do not re-encode the generated query string.")),(0,d.mdx)("p",null,"For further information, refer to the documentation on ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-platform/edge/identity/id-sharing.html?lang=en"},"mobile-to-web and cross-domain ID sharing")," and ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/platform-learn/implement-mobile-sdk/app-implementation/web-views.html?lang=en#implementation"},"handling WebViews"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-identity-for-edge-network-faq-md-01bdbff4c2728c8f03c9.js.map