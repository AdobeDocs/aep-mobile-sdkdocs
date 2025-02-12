/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const lodashTemplate = require('lodash.template');


const releaseNoteTemplateGenerator = lodashTemplate(
    `
## <%= date %>

### <%= title %>

<%= note %>`
)

const releaseNoteWithoutDateTemplateGenerator = lodashTemplate(
    `
### <%= title %>

<%= note %>`
)

const BOMreleaseNoteTemplateGenerator = lodashTemplate(
    `
## <%= date %>

### <%= title %>

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

<%= note %>

</AccordionItem>

</Accordion>`
)

const BOMreleaseNoteWithoutDateTemplateGenerator = lodashTemplate(
    `
### <%= title %>

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

<%= note %>

</AccordionItem>

</Accordion>`
)

module.exports = {
    releaseNoteTemplateGenerator,
    releaseNoteWithoutDateTemplateGenerator,
    BOMreleaseNoteTemplateGenerator,
    BOMreleaseNoteWithoutDateTemplateGenerator
};