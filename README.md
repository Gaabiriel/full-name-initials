[![npm version](https://badge.fury.io/js/metronic-badge-name-initials.svg)](https://badge.fury.io/js/metronic-badge-name-initials)

# metronic-badge-name-initials

A node.js component that return the name's initials

## Installation 
```sh
npm install metronic-badge-name-initials --save
```
## Usage

#### SharedComponent

```typescript
import { BadgeNameInitialsComponent } from 'metronic-badge-name-initials';

  declarations: [
    BadgeNameInitialsComponent
  ],
  exports: [
    BadgeNameInitialsComponent
  ], 
  entryComponents: [
    BadgeNameInitialsComponent
  ],
 ```
 
#### ExampleComponent
```typescript
import { BadgeNameInitialsComponent } from 'metronic-badge-name-initials';

e.g:
 
 In ng2-smart-table settings
 
  columns: {
      example: {
        title: 'example',
        type: 'custom',
        renderComponent: BadgeNameInitialsComponent
      },
 

```

