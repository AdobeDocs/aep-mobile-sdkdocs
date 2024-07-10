"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7650],{5345:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return p},default:function(){return u}});var o,t=i(87462),a=i(63366),d=(i(15007),i(64983)),m=i(91515),r=i(47968),l=["components"],p={},s=(o="Variant",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),c={_frontmatter:p},g=m.Z;function u(e){var n=e.components,i=(0,a.Z)(e,l);return(0,d.mdx)(g,(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)(s,{platform:"android",task:"add",repeat:"11",mdxType:"Variant"}),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"Add the Media for Edge Network extension and its dependencies to your project using the app's Gradle file.")),(0,d.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-kotlin"},'implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))\nimplementation("com.adobe.marketing.mobile:core")\nimplementation("com.adobe.marketing.mobile:edge")\nimplementation("com.adobe.marketing.mobile:edgeidentity")\nimplementation("com.adobe.marketing.mobile:edgemedia")\n')),(0,d.mdx)("h4",{id:"groovy"},"Groovy"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')\nimplementation 'com.adobe.marketing.mobile:core'\nimplementation 'com.adobe.marketing.mobile:edge'\nimplementation 'com.adobe.marketing.mobile:edgeidentity'\nimplementation 'com.adobe.marketing.mobile:edgemedia'\n")),(0,d.mdx)(r.default,{query:"platform=android-gradle&componentClass=InlineNestedAlert",mdxType:"Alerts"}),(0,d.mdx)("ol",{start:2},(0,d.mdx)("li",{parentName:"ol"},"Import the libraries in your application's main activity.")),(0,d.mdx)("h4",{id:"java"},"Java"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Edge;\nimport com.adobe.marketing.mobile.edge.identity.Identity;\nimport com.adobe.marketing.mobile.edge.media.Media;\n")),(0,d.mdx)("h4",{id:"kotlin-1"},"Kotlin"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-kotlin"},"import com.adobe.marketing.mobile.MobileCore\nimport com.adobe.marketing.mobile.Edge\nimport com.adobe.marketing.mobile.edge.identity.Identity\nimport com.adobe.marketing.mobile.edge.media.Media\n")),(0,d.mdx)(s,{platform:"ios",task:"add",repeat:"7",mdxType:"Variant"}),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"To add the Media for Edge Network extension and its dependencies to your project, add the following pods to your ",(0,d.mdx)("inlineCode",{parentName:"li"},"Podfile"),":")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'AEPCore', '~> 5.0'\npod 'AEPEdge', '~> 5.0'\npod 'AEPEdgeIdentity', '~> 5.0'\npod 'AEPEdgeMedia', '~> 5.0'\n")),(0,d.mdx)("ol",{start:2},(0,d.mdx)("li",{parentName:"ol"},"In Xcode project, import the Media extension:")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Swift")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPCore\nimport AEPEdge\nimport AEPEdgeIdentity\nimport AEPEdgeMedia\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Objective-C")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPCore;\n@import AEPEdge;\n@import AEPEdgeIdentity;\n@import AEPEdgeMedia;\n")),(0,d.mdx)(s,{platform:"android",task:"register",repeat:"5",mdxType:"Variant"}),(0,d.mdx)("p",null,"To register Media with Mobile Core, import the Media library and register it:"),(0,d.mdx)("h4",{id:"java-1"},"Java"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},'public class MainApp extends Application {\n     private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";\n\n     @Override\n     public void onCreate() {\n         super.onCreate();\n\n         MobileCore.setApplication(this);\n         MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);\n\n         List<Class<? extends Extension>> extensions = Arrays.asList(\n            Edge.EXTENSION, Identity.EXTENSION, Media.EXTENSION);\n         MobileCore.registerExtensions(extensions, o -> {\n             Log.d(LOG_TAG, "AEP Mobile SDK is initialized");\n         });\n     }\n }\n')),(0,d.mdx)("h4",{id:"kotlin-2"},"Kotlin"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-kotlin"},'class MyApp : Application() {\n    val ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID"\n\n    override fun onCreate() {\n        super.onCreate()\n        MobileCore.setApplication(this)\n        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)\n\n        val extensions = listOf(Edge.EXTENSION, Identity.EXTENSION, Media.EXTENSION)\n        MobileCore.registerExtensions(extensions) {\n            Log.d(LOG_TAG, "AEP Mobile SDK is initialized")\n        }\n    }\n}\n')),(0,d.mdx)(s,{platform:"ios",task:"register",repeat:"6",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"swift"},"Swift"),(0,d.mdx)("p",null,"In your app's ",(0,d.mdx)("inlineCode",{parentName:"p"},"_:didFinishLaunchingWithOptions")," function, register the Audience Manager extension with the Mobile Core:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n   MobileCore.registerExtensions([Edge.self, Identity.self, Media.self], {\n   MobileCore.configureWith(appId: "yourEnvironmentId")\n })\n ...\n}\n')),(0,d.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,d.mdx)("p",null,"In your app's ",(0,d.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions"),", register Media with Mobile Core:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objectivec"},'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [AEPMobileCore registerExtensions:@[AEPMobileEdgeMedia.class, AEPMobileEdge.class, AEPMobileEdgeIdentity.class] completion:^{\n    [AEPMobileCore configureWithAppId: @"yourEnvironmentId"];\n  }];\n  ...\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-media-for-edge-network-tabs-index-md-6aa421ce8e3e4cce7314.js.map