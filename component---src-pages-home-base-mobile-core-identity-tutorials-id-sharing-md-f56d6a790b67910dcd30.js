"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8331],{77047:function(e,t,i){i.r(t),i.d(t,{_frontmatter:function(){return l},default:function(){return b}});var n=i(87462),r=i(63366),a=(i(15007),i(64983)),o=i(91515),s=i(63939),d=["components"],l={},m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",t)}},p=m("InlineAlert"),u=m("TabsBlock"),h={_frontmatter:l},c=o.Z;function b(e){var t=e.components,i=(0,r.Z)(e,d);return(0,a.mdx)(c,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"mobile-to-web-identity-sharing"},"Mobile to web identity sharing"),(0,a.mdx)("p",null,"If your app opens mobile web content, you need to ensure that visitors are not identified separately as they move between the native and mobile web."),(0,a.mdx)("h2",{id:"visitor-ids-in-apps"},"Visitor IDs in apps"),(0,a.mdx)("p",null,'The Mobile SDK generates a unique visitor ID when the app is installed. This ECID is stored in persistent memory on the mobile device and is sent with every hit. The ECID is removed "when the user uninstalls the app, sets the Mobile SDK global privacy status to ',(0,a.mdx)("inlineCode",{parentName:"p"},"optedout"),", or calls the ",(0,a.mdx)("a",{parentName:"p",href:"../api-reference/#resetidentities"},"resetIdentities"),' API".'),(0,a.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"When the Mobile SDK privacy status is set to ",(0,a.mdx)("inlineCode",{parentName:"p"},"optedout"),", and the ECID is removed, a new unique visitor ID (ECID) is generated when the user sets the global privacy status to ",(0,a.mdx)("inlineCode",{parentName:"p"},"optedin"),"."),(0,a.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"App visitor IDs persist through upgrades."),(0,a.mdx)("h2",{id:"visitor-ids-in-the-mobile-web"},"Visitor IDs in the mobile web"),(0,a.mdx)("p",null,"Typical mobile web implementations use one of the Adobe JavaScript libraries available for web platform, such as Adobe Experience Platform Web SDK, or ",(0,a.mdx)("inlineCode",{parentName:"p"},"AppMeasurement.js"),". These libraries have their own methods of generating unique visitor IDs, which causes a different visitor ID to be generated when you open mobile web content from your app."),(0,a.mdx)("p",null,"To use the same visitor ID in the app and mobile web and pass the visitor ID to the mobile web in the URL, complete the following steps:"),(0,a.mdx)("h2",{id:"implementing-visitor-tracking-between-an-app-and-the-mobile-web"},"Implementing visitor tracking between an app and the mobile web"),(0,a.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"Android"),(0,a.mdx)(s.default,{query:"platform=android&task=implement",mdxType:"Tabs"}),(0,a.mdx)("p",null,"iOS"),(0,a.mdx)(s.default,{query:"platform=ios&task=implement",mdxType:"Tabs"}),(0,a.mdx)("p",null,"The ID service code on the destination domain extracts the ECID from the URL instead of sending a request to Adobe for a new ID. The ID service code on the destination page uses this ECID to track the visitor. On hits from the mobile web content, verify that the ",(0,a.mdx)("inlineCode",{parentName:"p"},"mid")," parameter exists on each hit, and that this value matches the ",(0,a.mdx)("inlineCode",{parentName:"p"},"mid"),"value that is being sent by the app code."),(0,a.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.mdx)("p",null,"To ensure that the visitor tracking was properly implemented, please verify the following conditions:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Ensure that the output from the ",(0,a.mdx)("a",{parentName:"li",href:"../api-reference.md#appendtourl--appendvisitorinfoforurl"},(0,a.mdx)("inlineCode",{parentName:"a"},"appendToUrl"))," or ",(0,a.mdx)("a",{parentName:"li",href:"../api-reference.md#geturlvariables"},(0,a.mdx)("inlineCode",{parentName:"a"},"getUrlVariables"))," API includes accurate ECID and Experience Cloud orgID values. Please note that the orgID set up for the Mobile SDK ",(0,a.mdx)("strong",{parentName:"li"},"must")," match the orgID configured in the web implementation."),(0,a.mdx)("li",{parentName:"ul"},"Ensure the timestamp (",(0,a.mdx)("inlineCode",{parentName:"li"},"TS"),") included in the ",(0,a.mdx)("a",{parentName:"li",href:"../api-reference.md#appendtourl--appendvisitorinfoforurl"},(0,a.mdx)("inlineCode",{parentName:"a"},"appendToUrl"))," or ",(0,a.mdx)("a",{parentName:"li",href:"../api-reference.md#geturlvariables"},(0,a.mdx)("inlineCode",{parentName:"a"},"getUrlVariables"))," result did ",(0,a.mdx)("strong",{parentName:"li"},"not")," expire. Since the results expire five minutes after retrieval, you should ",(0,a.mdx)("strong",{parentName:"li"},"not")," cache and re-use the results in your application. Instead, please retrieve the result on demand before loading the WebView."),(0,a.mdx)("li",{parentName:"ul"},"Ensure you do ",(0,a.mdx)("strong",{parentName:"li"},"not")," re-encode the generated query string. The query string returned by the ",(0,a.mdx)("a",{parentName:"li",href:"../api-reference.md#geturlvariables"},(0,a.mdx)("inlineCode",{parentName:"a"},"getUrlVariables"))," API is already URL encoded.")),(0,a.mdx)("p",null,"Once you've confirmed the mobile setup, check your web implementation."),(0,a.mdx)("p",null,"If you're using the Adobe Experience Platform Web SDK, ensure that you're using the latest version of Web SDK. For further information, please read the guide on ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/en/docs/experience-platform/web-sdk/identity/id-sharing"},"mobile-to-web and cross-domain ID sharing")," in Web SDK."),(0,a.mdx)("p",null,"If you're using the AppMeasurement.js library, ensure that you're using the latest version of the Visitor ID and the AppMeasurement libraries. For further information, please read the guide on the ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/en/docs/id-service/using/id-service-api/configurations/overwrite-visitor-id"},"overwriteCrossDomainMCIDAndAID API")," in Identity Service."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-home-base-mobile-core-identity-tutorials-id-sharing-md-f56d6a790b67910dcd30.js.map