import ExtensionVersionAEPSwift from './tabs/migration/extension-version/aep-swift.md'
import ExtensionVersionAEPObjectiveC from './tabs/migration/extension-version/aep-objective-c.md'
import ExtensionVersionACPObjectiveC from './tabs/migration/extension-version/acp-objective-c.md'
import UpdateUserAttributesAEPSwift from './tabs/migration/update-user-attributes/aep-swift.md'
import UpdateUserAttributesAEPObjectiveC from './tabs/migration/update-user-attributes/aep-objective-c.md'
import UpdateUserAttributesACPObjectiveC from './tabs/migration/update-user-attributes/acp-objective-c.md'
import RemoveUserAttributeAEPSwift from './tabs/migration/remove-user-attribute/aep-swift.md'
import RemoveUserAttributeAEPObjectiveC from './tabs/migration/remove-user-attribute/aep-objective-c.md'
import RemoveUserAttributeACPObjectiveC from './tabs/migration/remove-user-attribute/acp-objective-c.md'
import GetUserAttributesAEPSwift from './tabs/migration/get-user-attributes/aep-swift.md'
import GetUserAttributesAEPObjectiveC from './tabs/migration/get-user-attributes/aep-objective-c.md'
import GetUserAttributesACPObjectiveC from './tabs/migration/get-user-attributes/acp-objective-c.md'

# Migrating to AEPUserProfile

This document is a reference comparison of ACPUserProfile (2.x) APIs against their equivalent APIs in AEPUserProfile (3.x).

## Primary `Classes`

| Type | AEP 3.x (Swift) | AEP 3.x (Objective-C) | ACP 2.x (Objective-C) |
| :--- | :--- | :--- | :--- |
| Primary Class | UserProfile | AEPMobileUserProfile | ACPUserProfile |

## UserProfile extension APIs

For more information, please read the [Profile API reference](./api-reference.md).

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<ExtensionVersionAEPSwift/>

AEP 3.x (Objective-C)

<ExtensionVersionAEPObjectiveC/>

ACP 2.x (Objective-C)

<ExtensionVersionACPObjectiveC/>

### updateUserAttributes

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<UpdateUserAttributesAEPSwift/>

AEP 3.x (Objective-C)

<UpdateUserAttributesAEPObjectiveC/>

ACP 2.x (Objective-C)

<UpdateUserAttributesACPObjectiveC/>

### removeUserAttribute

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<RemoveUserAttributeAEPSwift/>

AEP 3.x (Objective-C)

<RemoveUserAttributeAEPObjectiveC/>

ACP 2.x (Objective-C)

<RemoveUserAttributeACPObjectiveC/>

### getUserAttributes

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<GetUserAttributesAEPSwift/>

AEP 3.x (Objective-C)

<GetUserAttributesAEPObjectiveC/>

ACP 2.x (Objective-C)

<GetUserAttributesACPObjectiveC/>