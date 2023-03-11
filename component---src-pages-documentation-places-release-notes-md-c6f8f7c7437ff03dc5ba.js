"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5401],{87789:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return c}});var t=n(87462),l=n(63366),o=(n(15007),n(64983)),i=n(91515),r=["components"],d={},s={_frontmatter:d},m=i.Z;function c(e){var a=e.components,n=(0,l.Z)(e,r);return(0,o.mdx)(m,(0,t.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"release-notes"},"Release Notes"),(0,o.mdx)("h2",{id:"march-6-2023"},"March 6, 2023"),(0,o.mdx)("h3",{id:"ios-places-303"},"iOS Places 3.0.3"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Fixed the friendly name for the extension to be ",(0,o.mdx)("inlineCode",{parentName:"li"},"Places")," instead of fully qualified extension name."),(0,o.mdx)("li",{parentName:"ul"},"Updated ",(0,o.mdx)("inlineCode",{parentName:"li"},"nearbyPois")," in shared state to be an array of POI objects (represented as dictionaries).")),(0,o.mdx)("h2",{id:"february-3-2023"},"February 3, 2023"),(0,o.mdx)("h3",{id:"android-places-200"},"Android Places 2.0.0"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Major version update for ",(0,o.mdx)("a",{parentName:"li",href:"./index.md"},"Adobe Experience Platform Location Service")," for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-places-android"},"open source project on GitHub"),".")),(0,o.mdx)("p",null,"Please note that the following improvements have been made in the current release:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"getNearbyPointsOfInterest")," API without the errorCallback has been removed. Alternatively, use the below overloaded API which provides both successCallback and errorCallback:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"public static void getNearbyPointsOfInterest(final Location location,\n      final int limit,\n      final AdobeCallback<List<PlacesPOI>> successCallback,\n      final AdobeCallback<PlacesRequestError> errorCallback)\n")),(0,o.mdx)("ol",{start:2},(0,o.mdx)("li",{parentName:"ol"},"The public classes ",(0,o.mdx)("inlineCode",{parentName:"li"},"PlacesAuthorizationStatus"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"PlacesPOI"),", and ",(0,o.mdx)("inlineCode",{parentName:"li"},"PlacesRequestError")," are consolidated under the ",(0,o.mdx)("inlineCode",{parentName:"li"},"places")," subpackage and require updating the import statements as shown below:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.places.PlacesAuthorizationStatus;\nimport com.adobe.marketing.mobile.places.PlacesPOI;\nimport com.adobe.marketing.mobile.places.PlacesRequestError;\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-places-release-notes-md-c6f8f7c7437ff03dc5ba.js.map