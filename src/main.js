import { HTMLElement as ExternalElement } from "@stencil/core/internal/client/index.js";
import { LocalElement } from "./local-element.js";

const MyClassExtendsExternalClass = class extends ExternalElement {
  constructor() {
    console.log("MyClass constructor");
  }
};

const MyClassExtendsLocalElement = class extends LocalElement {
  constructor() {
    console.log("MyClass constructor");
  }
};

const MyClass = class {
  constructor() {
    console.log("MyClass constructor");
  }
};
