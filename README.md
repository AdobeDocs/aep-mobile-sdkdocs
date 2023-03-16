# Adobe I/O Documentation Template

This is a site template built with the [Adobe I/O Theme](https://github.com/adobe/aio-theme).

View the [demo](https://adobedocs.github.io/dev-site-documentation-template/) running on Github Pages.  

## Where to ask for help

The slack channel #adobeio-onsite-onboarding is our main point of contact for help. Feel free to join the channel and ask any questions. 

## How to develop

For local development, simply use :
```
$ yarn
$ yarn dev
```

For the documentation developer, please read these sections on how to:
- [Arrange the structure content of your docs](https://github.com/adobe/aio-theme#content-structure)
- [Linking to pages](https://github.com/adobe/aio-theme#links)
- [Using assets](https://github.com/adobe/aio-theme-aio#assets)
- [Setting Global Navigation](https://github.com/adobe/aio-theme#global-navigation)
- [Setting Side Navigation](https://github.com/adobe/aio-theme#side-navigation)
- [Using content blocks](https://github.com/adobe/aio-theme#jsx-blocks)
- [Notes on using Markdown](https://github.com/adobe/aio-theme#writing-enhanced-markdown)

For more in-depth [instructions](https://github.com/adobe/aio-theme#getting-started).

### How do I add a new API to an API reference?

To add a new API to an API reference guide, you'll want to go to the api-reference.md of the extension you're updating.

On this page, determine where to place the API - since most of the API reference's are in alphabetical order, place it accordingly.

To add a Tabs block, add the following blurb:

```md
<TabsBlock orientation="horizontal" slots="heading, content" repeat="{API_NUMBERS}"/>
```

| Parameter | Description | 
| --------- | ----------- |
| `{API_NUMBERS}` | The number of platforms the API is represented on. |

After adding the tab block, you'll need to add the following blurb, repeated for the number of platforms the API is on:

```md
{PLATFORM_NAME_HEADER}

<Tabs query="platform={PLATFORM_NAME}&api={API_NAME}"/>
```

| Parameter | Description | Example |
| --------- | ----------- | ------- |
| `{PLATFORM_NAME_HEADER}` | The name of the platform the API is for. Since this name is publicly displayed, use the proper capitalizations for this name. | Android |
| `{PLATFORM_NAME}` | The name of the platform the API is for. This name **must** match the name used within the imported Variant block. | `android` |
| `{API_NAME}` | The name of the API. This name **must** match the name used within the imported Variant block. | `get-identities` |

A full example of a tab block with the variant blocks would be as follows:

```markdown
## getIdentities

Get all identities in the Identity for Edge Network extension, including customer identifiers which were previously added.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-identities"/>

iOS

<Tabs query="platform=ios&api=get-identities"/>
```

The above example creates a tab block and inserts the API reference for the two platforms, Android and iOS, for the getIdentities API.

After adding your Tab block and queries, you'll need to add the actual content of the APIs. Open the `api-reference.md` file within the `tabs` folder of your extension.

Within this file you'll need to add a Variant block, followed by the API information:

```md
<Variant platform="{PLATFORM_NAME}" api="{API_NAME}" repeat="{PARAGRAPH_NUMBERS}"/>
```

| Parameter | Description | Example |
| --------- | ----------- | ------- |
| `{PLATFORM_NAME}` | The name of the platform for the API. This **must** match the name within the previously written query. | `android` |
| `{API_NAME}` | The name of the API. This **must** match the name within the previously written query. | `get-identities` |
| `{PARAGRAPH_NUMBERS}` | The number of paragraphs within the API blurb. Please note that **each new line counts as a new paragraph**. Additionally, a code block and a list count only as **one** paragraph, despite how long a code block or list can be. If you are unsure about what number to put here, make sure you run the documentation site locally and ensure it renders properly. |

An full example of a Variant block with the API information can be seen below:

````md
<Variant platform="android" api="get-identities" repeat="7"/>

When [AdobeCallbackWithError](../mobile-core/api-reference.md#public-classes) is provided, and you are fetching the identities from the Mobile SDK, the timeout value is 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../mobile-core/api-reference.md#public-classes).

#### Java

**Syntax**

```java
public static void getIdentities(final AdobeCallback<IdentityMap> callback);
```

* _callback_ is invoked after the identities are available. The return format is an instance of [IdentityMap](#identitymap). The callback may be invoked on a different thread.

**Example**

```java
Identity.getIdentities(new AdobeCallback<IdentityMap>() {    
    @Override    
    public void call(IdentityMap identityMap) {        
         //Handle the IdentityMap returned here    
    }
});
```
````

This format of adding a Tab block and Variant block applies for all areas where tabs are used.

### What is the proper formatting for an API reference?

For each API reference, at a minimum, the following information should be included within the Variant block:

- API language
- Syntax
- Example

A proper example for an API blurb would be as follows:

````md
#### Java

**Syntax**

```java
public static void getIdentities(final AdobeCallback<IdentityMap> callback);
```

**Example**

```java
Identity.getIdentities(new AdobeCallback<IdentityMap>() {    
    @Override    
    public void call(IdentityMap identityMap) {        
         //Handle the IdentityMap returned here    
    }
});
```
````

If necessary, you can include more information, such as **specific information** for that language and descriptions of the parameters for the API.

### How do I add an inline alert to the documentation?

To add an inline alert (or hint bubble) to the documentation, you need to an InlineAlert block.

A proper example for an inline alert would be as follows:

````md
<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK for Android supports Google Android API 19 (KitKat) or later.
````

Supported values for the `variant` include the following:

- `info`
- `help`
- `error`
- `success`
- `warning`
- `neutral`

More information about the `InlineAlert` block can be found within the [Adobe I/O GitHub](https://github.com/adobe/aio-theme#inlinealert-block-updated-2022-06-08).

If you want to include a hint that has multiple lines, you'll need to include an HTML line break tag.

An example of this can be seen below:

````md
<InlineAlert variant="info" slots="text"/>

**Swift SDKs are here!**<br/>We've released Swift versions of our iOS SDKs for Core and select extensions - please scroll down for available Swift extensions and reference documentation for more information.
````

## How to deploy

For any team that wishes to deploy to the adobe.io and stage.adobe.io website, they must be in contact with the dev-site team. Teams will be given a path that will follow the pattern `adobe.io/{product}/`. This will allow doc developers to setup their subpaths to look something like:
```
adobe.io/{product}/docs
adobe.io/{product}/community
adobe.io/{product}/community/code_of_conduct
adobe.io/{product}/community/contribute
```

### Launching a deploy

You can deploy using the GitHub actions deploy workflow see [deploy instructions](https://github.com/adobe/aio-theme#deploy-to-azure-storage-static-websites).
