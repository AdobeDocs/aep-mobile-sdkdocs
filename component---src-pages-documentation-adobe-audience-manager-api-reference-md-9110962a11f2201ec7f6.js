"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1179],{11762:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return c}});var i=t(87462),a=t(63366),r=(t(15007),t(64983)),o=t(91515),s=t(44008),d=["components"],l={},m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",n)}},u=m("TabsBlock"),p=m("InlineAlert"),x={_frontmatter:l},h=o.Z;function c(e){var n=e.components,t=(0,a.Z)(e,d);return(0,r.mdx)(h,(0,i.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"adobe-audience-manager-api-reference"},"Adobe Audience Manager API reference"),(0,r.mdx)("h2",{id:"extensionversion"},"extensionVersion"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"extensionVersion()")," API returns the version of the Audience extension that is registered with the Mobile Core extension."),(0,r.mdx)("p",null,"To get the version of the Audience extension, use the following code sample:"),(0,r.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(s.default,{query:"platform=android&api=extension-version",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(s.default,{query:"platform=ios&api=extension-version",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"getvisitorprofile"},"getVisitorProfile"),(0,r.mdx)("p",null,"This API returns the most recently obtained visitor profile. The visitor profile is saved in the SDK's local storage for access across multiple launches of your app. If no audience signal has been sent before, when this API is called, a null value is returned."),(0,r.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(s.default,{query:"platform=android&api=get-visitor-profile",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(s.default,{query:"platform=ios&api=get-visitor-profile",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"registerextension"},"registerExtension"),(0,r.mdx)("p",null,"This API registers an extension class that was derived from with a unique name."),(0,r.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Deprecated as of 2.0.0. Please use the ",(0,r.mdx)("a",{parentName:"p",href:"../mobile-core/api-reference.md#registerextensions"},"MobileCore.registerExtensions")," API instead."),(0,r.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(s.default,{query:"platform=android&api=register-extension",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"reset"},"reset"),(0,r.mdx)("p",null,"This API helps you reset the Audience Manager UUID and purges the current visitor profile."),(0,r.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"For more information about the UUID, the DPID, the DPUUID and other Audience Manager identifiers, see ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html"},"Index of IDs in Audience Manager"),"."),(0,r.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(s.default,{query:"platform=android&api=reset",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(s.default,{query:"platform=ios&api=reset",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"signalwithdata"},"signalWithData"),(0,r.mdx)("p",null,"This method is used to send a signal with traits to Audience Manager and get the matching segments returned in a block callback. Audience Manager sends the UUID in response to an initial signal call. The UUID is persisted on local SDK storage and is sent by the SDK to Audience Manager in all subsequent signal requests."),(0,r.mdx)("p",null,"If you are using the Experience Cloud ID (ECID) Service (formerly MCID), the ECID and other custom identifiers for the same visitor are sent with each signal request. The visitor profile that is returned by Audience Manager is saved in SDK local storage and is updated with subsequent signal calls."),(0,r.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"For more information about the UUID and other Audience Manager identifiers, see the ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html"},"index of IDs in Audience Manager"),"."),(0,r.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(s.default,{query:"platform=android&api=signal-with-data",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(s.default,{query:"platform=ios&api=signal-with-data",mdxType:"Tabs"}))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-audience-manager-api-reference-md-9110962a11f2201ec7f6.js.map