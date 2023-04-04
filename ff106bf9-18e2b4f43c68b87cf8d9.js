"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3823],{65612:function(e,t,a){a.r(t),a.d(t,{getQueryString:function(){return O}});var n=a(15861),o=a(64687),r=a.n(o),i=a(15007),f=a(35414),c=a(95223),d=a(40156),s=a(36440),l=a.n(s),b=a(1597),p=a(96633),m=a.n(p),u=a(158),h=(a(78248),a(26777)),v=a(88466),y=a(34899),w=a(1110),g=a(78269),S=a(73181),k=a(77158);var A=!(!{}.GATSBY_ALGOLIA_APPLICATION_ID||!{}.GATSBY_ALGOLIA_SEARCH_API_KEY),I={}.GATSBY_ALGOLIA_INDEX_ENV_PREFIX,x=null;A?x=l()({}.GATSBY_ALGOLIA_APPLICATION_ID,{}.GATSBY_ALGOLIA_SEARCH_API_KEY):console.warn("AIO: Algolia config missing.");var P=!(!{}.GATSBY_IMS_SRC||!{}.GATSBY_IMS_CONFIG),_={openAPI:{src:null,block:null,frontMatter:"openAPISpec"},frame:{src:null,block:null,frontMatter:"frameSrc"}},Z=function(e){e((function(e){return!e}))},L=function(e){return new Promise((function(t,a){var n=document.createElement("script");n.src=e,n.onload=function(e){return t(e)},n.onerror=function(e){return a(e)},n.onabort=function(e){return a(e)},document.head.appendChild(n)}))},E=function(e,t,n){var o=_[e];o.has=null==t?void 0:t[o.frontMatter],void 0!==o.has&&o.src!==o.has&&(o.src=o.has),o.src&&!o.block&&(n(!0),"openAPI"===e?o.block=(0,d.ZP)((function(){return Promise.all([a.e(4723),a.e(461),a.e(6958)]).then(a.bind(a,37831))})):"frame"===e&&(o.block=(0,d.ZP)((function(){return a.e(6008).then(a.bind(a,96008))}))),o.block.load().then((function(){n(!1)})))},G=function(e,t){var a=new URLSearchParams(window.location.search);a.set(e,t),window.history.replaceState({},"",window.location.pathname+"?"+a)},O=function(){return new URLSearchParams(window.location.search).toString()},M=function(){var e=function(e,a){return void 0===a&&(a=""),t(e)?"http://localhost:8000":function(e){return e.indexOf("developer-stage")>=0}(e)?"https://developer-stage.adobe.com"+a:"https://developer.adobe.com"+a};function t(e){return e.indexOf("localhost")>=0}var a=t(window.location.host)?e(window.location.host):""+e(window.location.host,"/search-frame"),n=new URLSearchParams(window.location.search);return n&&n.toString().length>0?a+"?"+n.toString():a},N={name:"hr37al",styles:"grid-area:main"},z={name:"boasoc",styles:"min-height:100vh;background-color:var(--spectrum-global-color-gray-50)"},C={name:"1wwehzg",styles:"min-height:100vh;background-color:transparent"};t.default=function(e){var t=e.children,a=e.pageContext,o=e.location,d=(0,i.useState)(null),s=d[0],l=d[1],p=(0,i.useState)(!0),O=p[0],q=p[1],B=(0,i.useState)(!1),R=B[0],T=B[1];(0,i.useEffect)((function(){var e={}.GATSBY_IMS_SRC,t={}.GATSBY_IMS_CONFIG;e&&t?(0,n.Z)(r().mark((function a(){var n;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,L(""+e);case 3:(n=JSON.parse(t)).onReady=function(){l(window.adobeIMS),q(!1)},window.adobeImsFactory.createIMSLib(n),window.adobeIMS.initialize(),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.error("AIO: IMS error.");case 12:return a.prev=12,q(!1),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,9,12,15]])})))():(console.warn("AIO: IMS config missing."),q(!1))}),[]);var Y=(0,b.K2)("915530536"),F=Y.allMdx,Q=Y.allSitePage,U=Y.site,D=Y.allGithub,j=Y.allGithubContributors,H=U.siteMetadata,J=U.pathPrefix,K=H.home,W=H.versions,X=H.pages,V=H.subPages,$=H.docs,ee=(0,i.useState)(!1),te=ee[0],ae=ee[1],ne=(0,i.useState)(!1),oe=ne[0],re=ne[1],ie=(0,i.useState)(!1),fe=ie[0],ce=ie[1],de=(0,i.useState)(!1),se=de[0],le=de[1],be=(0,i.useState)(!1),pe=be[0],me=be[1];(0,i.useEffect)((function(){new URL(window.location).searchParams.get(u.AQ.query)&&ae(!0)}),[ae]),(0,i.useEffect)((function(){window.onpopstate=function(){var e=new URL(window.location).searchParams;e.get(u.AQ.query)?(e.get(u.AQ.query),ae(!0)):ae(!1)}}),[]),o.pathname=(0,u.Dm)(decodeURIComponent(o.pathname)),X.forEach((function(e){(0,u.y)(e),e.menu&&e.menu.forEach((function(e){(0,u.y)(e)}))})),W&&W.forEach((function(e){(0,u.y)(e)})),(0,u.y)(K),(0,u.y)($);var ue=function e(t){(0,u.y)(t),t.pages&&t.pages.forEach((function(t){e(t)}))};V&&V.forEach((function(e){ue(e)}));var he=(0,u.A6)(o.pathname),ve=(0,u.Gh)(X),ye=(0,u.Lh)(he,V),we=(0,u.mL)(he,ve,V);we.length>0&&me(!0);var ge=null==a?void 0:a.frontmatter,Se=(0,k.ZP)(),ke=(0,k.ZP)(),Ae="aio-Search-close";if(E("openAPI",ge,ce),E("frame",ge,ce),(0,i.useEffect)((function(){A&&m().get("https://raw.githubusercontent.com/AdobeDocs/search-indices/main/product-index-map.json").then((function(e){var t=e.data;"string"==typeof t?T(JSON.parse(t)):"[object Array]"==Object.prototype.toString.call(t)&&T(t)})).catch((function(e){console.error("AIO: Failed fetching search index.\n"+e)})),window.innerWidth<=parseInt(u.q9)&&me(!0),window.addEventListener("resize",(function(){window.innerWidth<=parseInt(u.q9)&&me(!0)}))}),[]),"/search-frame"===J)return(0,c.tZ)(i.default.Fragment,null,(0,c.tZ)(f.q,null,(0,c.tZ)("noscript",null,"\n          <style>\n            #"+Se+" {\n              grid-template-columns: 0 auto;\n            }\n            \n            #"+ke+" {\n              display: none !important;\n            }\n            \n            .gatsby-resp-image-image {\n              opacity: 1 !important;\n            }\n          </style>\n        ")),(0,c.tZ)(c.xB,{styles:(0,c.iv)("@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype');font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:'adobe-clean-serif';src:url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff2'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:900;}html,body{margin:0;text-size-adjust:none;overscroll-behavior:auto contain;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:transparent;",te&&"overflow: hidden;",";}*[hidden]{display:none!important;}")}),(0,c.tZ)("div",{dir:"ltr",className:"spectrum spectrum--medium spectrum--large spectrum--light","color-scheme":"light",css:C},A&&R&&(0,c.tZ)(v.o,{algolia:x,indexAll:R,indexPrefix:I||"",showSearch:!0,setShowSearch:ae,searchButtonId:Ae,isIFramed:!0})));var Ie="",xe=function e(t,a){void 0===t&&(t=0);var n=document.getElementById("searchIframe");if(n.contentWindow.postMessage(JSON.stringify({localPathName:window.location.pathname}),"*"),"/"!==window.location.pathname&&Ie!==window.location.pathname){if(t>30)return void console.warn("Loading Search iFrame timed out");window.setTimeout((function(){e(n,t+1)}),100)}a||new URL(window.location).searchParams.get(u.AQ.query)&&ae(!0);a=!0},Pe=function e(){var t=document.getElementById("searchIframe");try{if("complete"===t.contentDocument.readyState)return void(t.onload=function(){xe()})}catch(a){window.setTimeout(e,100)}},_e=function(e){try{var t="string"==typeof e.data?JSON.parse(e.data):e.data;t.query?(G(u.AQ.query,t.query),G(u.AQ.keywords,t.keywords),G(u.AQ.index,t.index)):t.received&&(Ie=t.received)}catch(a){console.error(a)}};return(0,i.useEffect)((function(){window.addEventListener("message",_e),A&&le(!0)}),[]),(0,i.useEffect)((function(){Pe()}),[se]),(0,c.tZ)(i.default.Fragment,null,(0,c.tZ)(f.q,null,(0,c.tZ)("noscript",null,"\n          <style>\n            #"+Se+" {\n              grid-template-columns: 0 auto;\n            }\n            \n            #"+ke+" {\n              display: none !important;\n            }\n            \n            .gatsby-resp-image-image {\n              opacity: 1 !important;\n            }\n          </style>\n        ")),(0,c.tZ)(c.xB,{styles:(0,c.iv)("@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype');font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:'adobe-clean-serif';src:url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff2'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:900;}html,body{margin:0;text-size-adjust:none;overscroll-behavior:auto contain;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;",te&&"overflow: hidden;"," ",oe&&"overflow: hidden;",";}*[hidden]{display:none!important;}")}),(0,c.tZ)(h.z,{value:{ims:s,isLoadingIms:O,location:o,pageContext:a,hasSideNav:pe,siteMetadata:H,pathPrefix:J,allSitePage:Q,allMdx:F,allGithub:D,allGithubContributors:j}},(0,c.tZ)(g.H,{title:null==ge?void 0:ge.title,description:null==ge?void 0:ge.description,keywords:null==ge?void 0:ge.keywords}),(0,c.tZ)("div",{dir:"ltr",className:"spectrum spectrum--medium spectrum--large spectrum--light","color-scheme":"light",css:z},(0,c.tZ)(i.default.Fragment,null,(0,c.tZ)("div",{id:Se,css:(0,c.iv)("display:grid;grid-template-areas:'header header' 'sidenav main';grid-template-rows:var(--spectrum-global-dimension-size-800);grid-template-columns:",pe?u.dP+" auto":"0 auto",";@media screen and (max-width: ",u.Av,"){grid-template-columns:0 auto;}@media screen and (max-width: ",u.q9,"){grid-template-rows:20px;}")},(0,c.tZ)("div",{css:(0,c.iv)("grid-area:header;position:fixed;height:var(--spectrum-global-dimension-size-800);left:0;right:0;background-color:var(--spectrum-global-color-gray-50);z-index:2;@media screen and (max-width: ",u.q9,"){height:var(--spectrum-global-dimension-size-600);}")},(0,c.tZ)(w.e,{hasIMS:P,ims:s,isLoadingIms:O,home:K,versions:W,pages:X,docs:$,location:o,hasSideNav:pe,toggleSideNav:function(){Z(re)},hasSearch:A&&null!==R,showSearch:te,setShowSearch:ae,searchButtonId:Ae})),A&&se&&(0,c.tZ)("iframe",{id:"searchIframe",src:M(),tabIndex:"0",css:(0,c.iv)("position:fixed;top:var(--spectrum-global-dimension-size-800);left:0px;right:0px;bottom:0px;background-color:transparent;z-index:10;width:100%;height:100%;opacity:",te?1:0,";visibility:",te?"visible":"hidden",";@media screen and (max-width: ",u.q9,"){top:var(--spectrum-global-dimension-size-600);}")}),(0,c.tZ)("div",{id:ke,hidden:!pe,css:(0,c.iv)("grid-area:sidenav;position:fixed;z-index:1;width:",u.dP,";height:100%;background-color:var(--spectrum-global-color-gray-75);@media screen and (max-width: ",u.Av,"){transition:transform var(--spectrum-global-animation-duration-200) ease-in-out;transform:translateX(",oe?"0":"-100%",");}@media screen and (max-width: ",u.q9,"){width:95%;}")},(0,c.tZ)(y.k,{mainNavPages:X,selectedPages:ye,selectedSubPages:we,setShowSideNav:re})),(0,c.tZ)("div",{css:N},(0,c.tZ)("main",{hidden:!_.openAPI.has},_.openAPI.src&&_.openAPI.block&&(0,i.createElement)(_.openAPI.block,{src:_.openAPI.src})),(0,c.tZ)("main",{hidden:!_.frame.has},_.frame.src&&_.frame.block&&(0,i.createElement)(_.frame.block,{src:_.frame.src,height:null==ge?void 0:ge.frameHeight,location:o})),!_.openAPI.has&&!_.frame.has&&t)),(0,c.tZ)("div",{css:(0,c.iv)("position:fixed;top:0;left:0;right:0;bottom:0;display:",fe?"grid":"none",";place-items:center center;")},(0,c.tZ)(S._,{size:"L"})),pe&&(0,c.tZ)("div",{role:"presentation",css:(0,c.iv)("display:none;@media screen and (max-width: ",u.Av,"){display:block;transition:opacity 160ms ease-in;background-color:rgba(0, 0, 0, 0.4);pointer-events:none;opacity:0;position:fixed;top:0;left:0;height:100%;width:100%;",oe&&"\n                    pointer-events: auto;\n                    opacity: 1;\n                  ",";}"),onClick:function(){Z(re)}})))))}}}]);
//# sourceMappingURL=ff106bf9-18e2b4f43c68b87cf8d9.js.map