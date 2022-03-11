#### ACPTargetParameters

This class contains an mbox parameters dictionary, a profile parameters dictionary, an `ACPTargetOrder` object, and an `ACPTargetProduct` object.

#### JavaScript

**Syntax**

```javascript
class ACPTargetParameters {
  parameters: {string: string};
  profileParameters: {string: string};
  order: ACPTargetOrder;
  product: ACPTargetProduct;

  constructor(parameters?: {string: string}, profileParameters?: {string: string}, product?: ACPTargetProduct, order?: ACPTargetOrder) {
      this.parameters = parameters;
    this.profileParameters = profileParameters;
    this.product = product;
    this.order = order;
  }
}
```