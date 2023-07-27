"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7986],{27993:function(e,n,o){o.r(n),o.d(n,{_frontmatter:function(){return m},default:function(){return u}});var t,i=o(87462),a=o(63366),r=(o(15007),o(64983)),p=o(91515),d=o(40901),l=["components"],m={},s=(t="Variant",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),c={_frontmatter:m},g=p.Z;function u(e){var n=e.components,o=(0,a.Z)(e,l);return(0,r.mdx)(g,(0,i.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(s,{platform:"android",task:"download",repeat:"5",mdxType:"Variant"}),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Add the Mobile Core and Edge extensions to your project using the app's Gradle file.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"implementation platform('com.adobe.marketing.mobile:sdk-bom:2.+')\nimplementation 'com.adobe.marketing.mobile:core'\nimplementation 'com.adobe.marketing.mobile:edge'\nimplementation 'com.adobe.marketing.mobile:edgeidentity'\n")),(0,r.mdx)(d.default,{query:"platform=android-gradle&componentClass=InlineNestedAlert",mdxType:"Alerts"}),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"Import the Mobile Core and Edge extensions in your Application class.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Edge;\nimport com.adobe.marketing.mobile.edge.identity.Identity;\n")),(0,r.mdx)(s,{platform:"ios",task:"download",repeat:"7",mdxType:"Variant"}),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Add the Mobile Core and Edge extensions to your project using CocoaPods. Add following pods in your ",(0,r.mdx)("inlineCode",{parentName:"li"},"Podfile"),":")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"use_frameworks!\ntarget 'YourTargetApp' do\n    pod 'AEPCore'\n    pod 'AEPEdge'\n    pod 'AEPEdgeIdentity'\n    pod 'AEPEdgeConsent' // Recommended when using the setAdvertisingIdentifier API\nend\n")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"Import the Mobile Core and Edge libraries:")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Swift")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"// AppDelegate.swift\nimport AEPCore\nimport AEPEdge\nimport AEPEdgeIdentity\nimport AEPEdgeConsent\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Objective-C")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},"// AppDelegate.h\n@import AEPCore;\n@import AEPEdge;\n@import AEPEdgeIdentity;\n@import AEPEdgeConsent;\n")),(0,r.mdx)(s,{platform:"android",task:"register",repeat:"2",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'public class MobileApp extends Application {\n    // Set up the preferred Environment File ID from your mobile property configured in Data Collection UI\n    private final String ENVIRONMENT_FILE_ID = "";\n\n    @Override\n    public void onCreate() {\n      super.onCreate();\n      MobileCore.setApplication(this);\n      MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);\n\n      // Register Adobe Experience Platform SDK extensions\n      MobileCore.registerExtensions(\n         Arrays.asList(Edge.EXTENSION, Identity.EXTENSION),\n         o -> Log.debug("MobileApp", "MobileApp", "Adobe Experience Platform Mobile SDK initialized.")\n       );\n    }\n}\n')),(0,r.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'class MobileApp : Application() {\n    // Set up the preferred Environment File ID from your mobile property configured in Data Collection UI\n    private var ENVIRONMENT_FILE_ID: String = ""\n    override fun onCreate() {\n        super.onCreate()\n        MobileCore.setApplication(this)\n        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)\n        // Register Adobe Experience Platform SDK extensions\n        MobileCore.registerExtensions(\n            listOf(Edge.EXTENSION, Identity.EXTENSION)\n        ) {\n            Log.debug("MobileApp", "MobileApp", "Adobe Experience Platform Mobile SDK initialized.")\n        }\n    }\n}\n')),(0,r.mdx)(s,{platform:"ios",task:"register",repeat:"4",mdxType:"Variant"}),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Swift")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},'// AppDelegate.swift\nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    MobileCore.registerExtensions([Identity.self, Consent.self, Edge.self], {\n    MobileCore.configureWith(appId: "yourAppId")\n  })\n  ...\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Objective-C")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},'// AppDelegate.m\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [AEPMobileCore registerExtensions:@[AEPMobileEdgeIdentity.class, AEPMobileEdgeConsent.class, AEPMobileEdge.class] completion:^{\n    ...\n  }];\n  [AEPMobileCore configureWithAppId: @"yourAppId"];\n  ...\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-identity-for-edge-network-tabs-index-md-edc969d32e5cf49a7200.js.map