#### C#

<InlineAlert variant="warning" slots="text"/>

`ACPCore.Application` may be `null` if the `Application` object was destroyed or was not set in the Core.

**Example**

```csharp
var app = ACPCore.Application;
if (app != null) {
    ...
}
```