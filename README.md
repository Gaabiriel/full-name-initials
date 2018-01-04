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
import { BagdeNameInitialsComponent } from 'metronic-badge-name-initials';

 declarations: [
    BagdeNameInitialsComponent
  ],
  exports: [
    BagdeNameInitialsComponent
  ], 
  entryComponents: [
    BagdeNameInitialsComponent
  ],
 ```
 
#### ExampleComponent
```typescript
import { BagdeNameInitialsComponent } from 'metronic-badge-name-initials';

e.g:
 
 In ng2-smart-table settings
 
  columns: {
      example: {
        title: 'example',
        type: 'custom',
        renderComponent: BagdeNameInitialsComponent
      },
 

```

