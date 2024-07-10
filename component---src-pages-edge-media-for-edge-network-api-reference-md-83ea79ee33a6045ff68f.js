"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8211],{92015:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return u}});var n=a(87462),d=a(63366),r=(a(15007),a(64983)),m=a(91515),i=a(78819),o=["components"],l={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)}},s=p("TabsBlock"),x=p("InlineAlert"),c={_frontmatter:l},h=m.Z;function u(e){var t=e.components,a=(0,d.Z)(e,o);return(0,r.mdx)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"api-reference"},"API reference"),(0,r.mdx)("h2",{id:"edge-media-api-reference"},"Edge Media API reference"),(0,r.mdx)("h3",{id:"extensionversion"},"extensionVersion"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"extensionVersion()")," API returns the version of the Media for Edge Network extension that is registered with the Mobile Core extension."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=extension-version",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=extension-version",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"resetidentities"},"resetIdentities"),(0,r.mdx)("p",null,"Immediately aborts all the active tracking sessions and clears all the MediaTracker instances."),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"../../home/base/mobile-core/api-reference.md#resetidentities"},"MobileCore.resetIdentities")," for more details."),(0,r.mdx)("h3",{id:"createtracker"},"createTracker"),(0,r.mdx)("p",null,"Creates a MediaTracker instance that should be used to track a playback session. The tracker sends periodic heartbeat pings to the Experience Edge Network."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=create-tracker",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=create-tracker",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"createtrackerwithconfig"},"createTrackerWithConfig"),(0,r.mdx)("p",null,"Creates a MediaTracker instance that should be used to track a playback session. The tracker sends periodic heartbeat pings to the Experience Edge Network."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Key"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Value"),(0,r.mdx)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"config.channel")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The channel name for media. Set this to overwrite the channel name configured in the Data Collection UI for media tracked with this tracker instance."),(0,r.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,r.mdx)("td",{parentName:"tr",align:"center"},"No")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"config.mainpinginterval")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Overwrites the default main content tracking interval ",(0,r.mdx)("inlineCode",{parentName:"td"},"(in seconds)"),". The value should be in the allowed range ",(0,r.mdx)("inlineCode",{parentName:"td"},"[10-50] seconds"),". The default value is 10 seconds."),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Int"),(0,r.mdx)("td",{parentName:"tr",align:"center"},"No")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"config.adpinginterval")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Overwrites the default ad content tracking interval ",(0,r.mdx)("inlineCode",{parentName:"td"},"(in seconds)"),". The value should be in the allowed range ",(0,r.mdx)("inlineCode",{parentName:"td"},"[1-10] seconds"),". The default value is 10 seconds."),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Int"),(0,r.mdx)("td",{parentName:"tr",align:"center"},"No")))),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=create-tracker-with-config",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=create-tracker-with-config",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"createmediaobject"},"createMediaObject"),(0,r.mdx)("p",null,"Creates an instance of the Media object which is a map/dictionary that contains information about the media."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,r.mdx)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The friendly name of the media."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"id")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The unique identifier for the media."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"length")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The length of the media in seconds."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"streamType")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"#stream-type"},"Stream type")),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"mediaType")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"#media-type"},"Media type")),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")))),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=create-media-object",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=create-media-object",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"createadbreakobject"},"createAdBreakObject"),(0,r.mdx)("p",null,"Creates an instance of the AdBreak object which is a map/dictionary that contains information about the ad break."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,r.mdx)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The friendly name of ad break such as pre-roll, mid-roll, and post-roll."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"position")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The numeric position of the ad break within the content, starting with 1."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"startTime")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The playhead value in seconds at the start of the ad break."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")))),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=create-ad-break-object",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=create-ad-break-object",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"createadobject"},"createAdObject"),(0,r.mdx)("p",null,"Creates an instance of the Ad object which is a map/dictionary that contains information about the Ad."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,r.mdx)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The friendly name of the Ad."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"id")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The unique identifier for the Ad."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"position")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The numeric position of the Ad within the ad break, starting with 1."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"length")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The length of Ad in seconds."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")))),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=create-ad-object",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=create-ad-object",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"createchapterobject"},"createChapterObject"),(0,r.mdx)("p",null,"Creates an instance of the Chapter object which is a map/dictionary that contains information about the chapter."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,r.mdx)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The friendly name of the Chapter."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"position")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The numeric position of the Chapter within the content, starting with 1."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"length")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The length of Chapter in seconds."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"startTime")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The playhead value at the start of the Chapter."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")))),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=create-chapter-object",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=create-chapter-object",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"createqoeobject"},"createQoEObject"),(0,r.mdx)("p",null,"Creates an instance of the QoE (Quality of Experience) object which is a map/dictionary that contains information about the quality of experience."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,r.mdx)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"bitrate")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The bitrate of media in bits per second."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"startupTime")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The start up time of media in seconds."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"fps")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The current frames per second."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"droppedFrames")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The number of dropped frames so far."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")))),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=create-qoe-object",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=create-qoe-object",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"createstateobject"},"createStateObject"),(0,r.mdx)("p",null,"Creates an instance of the Player State object which is a dictionary that contains information about the player state."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},"The player state name. Use ",(0,r.mdx)("a",{parentName:"td",href:"#player-state-constants"},"Player State constants")," to track standard player states."),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes")))),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=create-state-object",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=create-state-object",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"mediatracker-api-reference"},"MediaTracker API reference"),(0,r.mdx)(x,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"The following APIs are ",(0,r.mdx)("strong",{parentName:"p"},"tracker instance")," dependent. Create a tracker instance using ",(0,r.mdx)("a",{parentName:"p",href:"#createtracker"},(0,r.mdx)("inlineCode",{parentName:"a"},"createTracker"))," or ",(0,r.mdx)("a",{parentName:"p",href:"#createtrackerwithconfig"},(0,r.mdx)("inlineCode",{parentName:"a"},"createTrackerWithConfig"))," and call the following APIs."),(0,r.mdx)("h3",{id:"tracksessionstart"},"trackSessionStart"),(0,r.mdx)("p",null,"Tracks the intention to start playback. This starts a tracking session on the MediaTracker instance. To resume a previously closed session, see the ",(0,r.mdx)("a",{parentName:"p",href:"#media-resume"},"media resume guide"),"."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,r.mdx)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"mediaInfo")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Media information created using the ",(0,r.mdx)("a",{parentName:"td",href:"#createmediaobject"},"createMediaObject")," method."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"contextData")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Optional Media context data. For standard metadata keys, use ",(0,r.mdx)("a",{parentName:"td",href:"#standard-video-constants"},"standard video constants")," or ",(0,r.mdx)("a",{parentName:"td",href:"#standard-audio-constants"},"standard audio constants"),"."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"No")))),(0,r.mdx)(x,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Main ping interval can now be customized to duration between 10 to 50 seconds using ",(0,r.mdx)("a",{parentName:"p",href:"#createtrackerwithconfig"},(0,r.mdx)("inlineCode",{parentName:"a"},"createTrackerWithConfig"))," API."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=track-session-start",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=track-session-start",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"trackplay"},"trackPlay"),(0,r.mdx)("p",null,"Tracks the media play, or resume, after a previous pause."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=track-play",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=track-play",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"trackpause"},"trackPause"),(0,r.mdx)("p",null,"Tracks the media pause."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=track-pause",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=track-pause",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"trackcomplete"},"trackComplete"),(0,r.mdx)("p",null,"Tracks the completion of the media playback session. Call this method only when the media has been completely viewed. If the viewing session is ended before the media is completely viewed, use ",(0,r.mdx)("a",{parentName:"p",href:"#tracksessionend"},(0,r.mdx)("inlineCode",{parentName:"a"},"trackSessionEnd"))," instead."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=track-complete",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=track-complete",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"tracksessionend"},"trackSessionEnd"),(0,r.mdx)("p",null,"Tracks the end of a media playback session. Call this method when the viewing session ends, even if the user has not viewed the media to completion. If the media is viewed to completion, use ",(0,r.mdx)("a",{parentName:"p",href:"#trackcomplete"},(0,r.mdx)("inlineCode",{parentName:"a"},"trackComplete"))," instead."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=track-session-end",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=track-session-end",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"trackerror"},"trackError"),(0,r.mdx)("p",null,"Tracks an error in media playback."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,r.mdx)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"errorId")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The custom error Identifier."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")))),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=track-error",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=track-error",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"trackevent"},"trackEvent"),(0,r.mdx)("p",null,"Tracks media events."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,r.mdx)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"event")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The media event being tracked, use ",(0,r.mdx)("a",{parentName:"td",href:"#media-events"},"Media event constants")),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"info")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"For an ",(0,r.mdx)("inlineCode",{parentName:"td"},"AdBreakStart")," event, the AdBreak information is created by using the ",(0,r.mdx)("inlineCode",{parentName:"td"},"createAdBreakObjectWith")," method.",(0,r.mdx)("br",null)," For an ",(0,r.mdx)("inlineCode",{parentName:"td"},"AdStart")," event, the Ad information is created by using the ",(0,r.mdx)("inlineCode",{parentName:"td"},"createAdObjectWith")," method.",(0,r.mdx)("br",null)," For a ",(0,r.mdx)("inlineCode",{parentName:"td"},"ChapterStart")," event, the Chapter information is created by using the ",(0,r.mdx)("inlineCode",{parentName:"td"},"createChapterObjectWith")," method.",(0,r.mdx)("br",null)," For a ",(0,r.mdx)("inlineCode",{parentName:"td"},"StateStart")," and ",(0,r.mdx)("inlineCode",{parentName:"td"},"StateEnd")," event, the State information is created by using the ",(0,r.mdx)("inlineCode",{parentName:"td"},"createStateObjectWith")," method."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes/No*")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"metadata"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Optional context data can be provided for ",(0,r.mdx)("inlineCode",{parentName:"td"},"AdStart")," and ",(0,r.mdx)("inlineCode",{parentName:"td"},"ChapterStart")," events. This is not required for other events."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"No")))),(0,r.mdx)(x,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"*",(0,r.mdx)("inlineCode",{parentName:"p"},"info")," is a required parameter for ",(0,r.mdx)("inlineCode",{parentName:"p"},"AdBreakStart"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"AdStart"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"ChapterStart"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"StateStart"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"StateEnd")," events. Not set for any other event types."),(0,r.mdx)(x,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Ad ping interval can now be customized to duration between 1 to 10 seconds using ",(0,r.mdx)("a",{parentName:"p",href:"#createtrackerwithconfig"},(0,r.mdx)("inlineCode",{parentName:"a"},"createTrackerWithConfig"))," API."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=track-event",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=track-event",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"updatecurrentplayhead"},"updateCurrentPlayhead"),(0,r.mdx)("p",null,"Provides the current media playhead value to the MediaTracker instance. For accurate tracking, call this method every time the playhead value changes. If the player does not notify playhead value changes, call this method once every second with the most recent playhead value."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,r.mdx)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"time")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Current playhead value in seconds.",(0,r.mdx)("br",null),(0,r.mdx)("br",null)," For video-on-demand (VOD), the value is specified in seconds from the beginning of the media item.",(0,r.mdx)("br",null),(0,r.mdx)("br",null)," For live streaming, if the player does not provide information about the content duration, the value can be specified as the number of seconds since midnight UTC of that day."),(0,r.mdx)("td",{parentName:"tr",align:"center"},"Yes")))),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=update-current-playhead",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=update-current-playhead",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"updateqoeobject"},"updateQoEObject"),(0,r.mdx)("p",null,"Provides the MediaTracker with the current Quality of Experience (QoE) information. For accurate tracking, call this method every time the media player provides the updated QoE information."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"qoeObject")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Current QoE information that was created by using the ",(0,r.mdx)("a",{parentName:"td",href:"#createqoeobject"},"createQoEObject")," method.")))),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=update-qoe-object",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=update-qoe-object",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"media-constants"},"Media constants"),(0,r.mdx)("h3",{id:"media-type"},"Media type"),(0,r.mdx)("p",null,"Defines the type of media that is currently being tracked. It can be either ",(0,r.mdx)("inlineCode",{parentName:"p"},"MediaType.Video")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"MediaType.Audio"),"."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=media-type",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=media-type",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"stream-type"},"Stream type"),(0,r.mdx)("p",null,"Defines the type of streamed content that is currently being tracked. Use the available constants or custom defined stream type values."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=stream-type",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=stream-type",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"standard-video-constants"},"Standard video constants"),(0,r.mdx)("p",null,"Defines the standard video constants used as keys when creating or modifying video metadata dictionaries. Use the available constant values or custom defined video metadata key values."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=standard-video-constants",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=standard-video-constants",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"standard-audio-constants"},"Standard audio constants"),(0,r.mdx)("p",null,"Defines the standard audio constants used as keys when creating or modifying audio metadata dictionaries. Use the available constant values or custom defined audio metadata key values."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=standard-audio-constants",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=standard-audio-constants",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"standard-ad-constants"},"Standard ad constants"),(0,r.mdx)("p",null,"Defines the standard metadata keys for ads."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=standard-ad-constants",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=standard-ad-constants",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"player-state-constants"},"Player state constants"),(0,r.mdx)("p",null,"Defines the state of the media player that is currently being tracked. Use the available constant values or custom defined player state values."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=player-state-constants",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=player-state-constants",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"media-events"},"Media events"),(0,r.mdx)("p",null,"Defines the media event that is currently being tracked. Only the available constant values are allowed."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=media-events",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=media-events",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"media-resume"},"Media resume"),(0,r.mdx)("p",null,"Constant to denote that the current tracking session is resuming a previously closed session. This information ",(0,r.mdx)("strong",{parentName:"p"},"must")," be provided when starting a tracking session."),(0,r.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&api=media-resume",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(i.default,{query:"platform=ios&api=media-resume",mdxType:"Tabs"}))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-media-for-edge-network-api-reference-md-83ea79ee33a6045ff68f.js.map