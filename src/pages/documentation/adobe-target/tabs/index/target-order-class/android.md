#### Java

**Syntax**

```java
public TargetOrder(final String id, final double total, final List<String> purchasedProductIds)
```

**Example**

```java
List<String> purchasedProductIds = new ArrayList<String>();
purchasedProductIds.add("34");
purchasedProductIds.add("125");
TargetOrder targetOrder = new TargetOrder("123", 567.89, purchasedProductIds);
```