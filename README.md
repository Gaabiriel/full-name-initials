[![npm version](https://badge.fury.io/js/mypluralize.svg)](https://www.npmjs.com/package/metronic-badge-name-initials)

# metronic-badge-name-initials

A node.js component that return the name's initials

## Installation 
```sh
npm install metronic-badge-name-initials --save
```

### Angular
```typescript
In SharedComponent
import { BagdeNameInitialsComponent } from 'metronic-badge-name-initials';

 declarations: [
    BagdeNameInitialsComponent
  ],
  exports: [
  BagdeNameInitialsComponent
  ], entryComponents: [
  BagdeNameInitialsComponent
  ],
  
In your Component
import { BagdeNameInitialsComponent } from 'metronic-badge-name-initials';

ex:
 in ng2 smart table settings, inside collums add following code
  columns: {
      example: {
        title: 'example',
        type: 'custom',
        renderComponent: BagdeNameInitialsComponent
      },
 

```
```sh
Output should be 'Geese'
Output should be 'Gun'
```
