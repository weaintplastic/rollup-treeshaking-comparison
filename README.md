# rollup-treeshaking-comparison
A comparison of tree-shaking capabilities of class declarations between different rollup versions.

# Getting Started

```
npm i
npm run build
```

# Overview

We've noticed a difference in how unused class declarations are handled during tree-shaking between different version of rollup.


# Details

The critical point seems to be if a class is extending another one.
When that's the case rollup 2.53.0 and above (including v3) seem to include the class in the bundle even though unused. Prior versions successfully clear out those classes.


```js

import { HTMLElement as ExternalElement } from "@stencil/core/internal/client/index.js";
import { LocalElement } from "./local-element.js";

// Stays in the bundle with rollup 2.53.0+
const MyClassExtendsExternalClass = class extends ExternalElement {
  constructor() {
    console.log("MyClass constructor");
  }
};

// Stays in the bundle with rollup 2.53.0+
const MyClassExtendsLocalElement = class extends LocalElement {
  constructor() {
    console.log("MyClass constructor");
  }
};

// Is removed from the bundle
const MyClass = class {
  constructor() {
    console.log("MyClass constructor");
  }
};

```
