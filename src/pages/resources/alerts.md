
<!-- InlineNestedAlert - Warning for dynamic dependency versions: Android Gradle -->
<Variant platform="android-gradle" componentClass="InlineNestedAlert" repeat="1"/>

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../resources/manage-gradle-dependencies.md) for more information.

</InlineNestedAlert>

<!-- InlineNestedAlert - Warning for registerExtension removal in v3.0.0 of Android mobile SDKs -->
<Variant platform="android-register-extension" componentClass="InlineNestedAlert" repeat="1"/>

<InlineNestedAlert variant="warning" header="true" iconPosition="left">

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../../home/base/mobile-core/api-reference.md#registerextensions) API instead.

</InlineNestedAlert>

<!-- InlineNestedAlert - Alert for initialize API's available android versions -->
<Variant platform="initialize-android-version" componentClass="InlineNestedAlert" repeat="1"/>

<InlineNestedAlert variant="warning" header="true" iconPosition="left">

This API is available starting from **Android BOM version 3.8.0**.

</InlineNestedAlert>

<!-- InlineNestedAlert - Alert for initialize API's available ios versions -->
<Variant platform="initialize-ios-version" componentClass="InlineNestedAlert" repeat="1"/>

<InlineNestedAlert variant="warning" header="true" iconPosition="left">

This API is available starting from **iOS version 5.4.0**.

</InlineNestedAlert>
