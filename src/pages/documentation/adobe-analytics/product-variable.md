import Tabs from './tabs/product-variable.md'

# Products variable

## Set the products variable

Since the products variable cannot be set by processing rules, you need to set serialized events directly on the hits that are sent to Analytics.

To set the products variable, set a context data key to `&&products`, and set the value to the products or merchandising variable. For more information, see the [implementing a merchandising variable tutorial](https://experienceleague.adobe.com/docs/analytics/components/dimensions/evar-merchandising.html).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="5"/>

Android

<Tabs query="platform=android&task=set-variable"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&task=set-variable"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&task=set-variable"/>

React Native

<Tabs query="platform=react-native&task=set-variable"/>

Flutter

<Tabs query="platform=flutter&task=set-variable"/>

A sample network request can be seen in the image below:

![Sample network request](./assets/product-variable/sample-network-request.png)

_`products`_ is set directly on the image request, and the other variables are set as context data. All context data variables must be mapped by using processing rules:

![Map products](./assets/product-variable/map-products.png)

You do **not** need to map the `products` variable using processing rules because it is set directly on the image request by the SDK.

## Products variable with merchandising eVars and product-specific events

The following code samples show an example of the products variable with merchandising eVars and product-specific events.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="5"/>

Android

<Tabs query="platform=android&task=products"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&task=products"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&task=products"/>

React Native

<Tabs query="platform=react-native&task=products"/>

Flutter

<Tabs query="platform=flutter&task=products"/>

<InlineAlert variant="info" slots="text"/> 

If you trigger a product-specific event by using the `&&products` variable, you must also set that event in the `&&events` variable. If you do not set that event, it is filtered out during processing.

