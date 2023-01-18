const BUILD = {
    allRenderFn: false,
    cmpDidLoad: true,
    cmpDidUnload: false,
    cmpDidUpdate: true,
    cmpDidRender: true,
    cmpWillLoad: true,
    cmpWillUpdate: true,
    cmpWillRender: true,
    connectedCallback: true,
    disconnectedCallback: true,
    element: true,
    event: true,
    hasRenderFn: true,
    lifecycle: true,
    hostListener: true,
    hostListenerTargetWindow: true,
    hostListenerTargetDocument: true,
    hostListenerTargetBody: true,
    hostListenerTargetParent: false,
    hostListenerTarget: true,
    member: true,
    method: true,
    mode: true,
    observeAttribute: true,
    prop: true,
    propMutable: true,
    reflect: true,
    scoped: true,
    shadowDom: true,
    slot: true,
    cssAnnotations: true,
    state: true,
    style: true,
    svg: true,
    updatable: true,
    vdomAttribute: true,
    vdomXlink: true,
    vdomClass: true,
    vdomFunctional: true,
    vdomKey: true,
    vdomListener: true,
    vdomRef: true,
    vdomPropOrAttr: true,
    vdomRender: true,
    vdomStyle: true,
    vdomText: true,
    watchCallback: true,
    taskQueue: true,
    hotModuleReplacement: false,
    isDebug: false,
    isDev: false,
    isTesting: false,
    hydrateServerSide: false,
    hydrateClientSide: false,
    lifecycleDOMEvents: false,
    lazyLoad: false,
    profile: false,
    slotRelocation: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    hydratedAttribute: false,
    hydratedClass: true,
    safari10: false,
    scriptDataOpts: false,
    scopedSlotTextContentFix: false,
    shadowDomShim: false,
    slotChildNodesFix: false,
    invisiblePrehydration: true,
    propBoolean: true,
    propNumber: true,
    propString: true,
    cssVarShim: false,
    constructableCSS: true,
    cmpShouldUpdate: true,
    devTools: false,
    dynamicImportShim: false,
    shadowDelegatesFocus: true,
    initializeNextTick: false,
    asyncLoading: false,
    asyncQueue: false,
    transformTagName: false,
    attachStyles: true,
};

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 *
 * Modified for Stencil's renderer and slot projection
 */
({
    isDev: BUILD.isDev ? true : false,
    isBrowser: true,
    isServer: false,
    isTesting: BUILD.isTesting ? true : false,
});
BUILD.isTesting
    ? ['STENCIL:'] // E2E testing
    : [
        '%cstencil',
        'color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px',
    ];
const win = typeof window !== 'undefined' ? window : {};
BUILD.cssVarShim ? win.CSS : null;
const doc = win.document || { head: {} };
const H = (win.HTMLElement || class {
});
BUILD.shadowDomShim && BUILD.shadowDom
    ? /*@__PURE__*/ (() => (doc.head.attachShadow + '').indexOf('[native') > -1)()
    : true;
BUILD.constructableCSS
    ? /*@__PURE__*/ (() => {
        try {
            new CSSStyleSheet();
            return typeof new CSSStyleSheet().replaceSync === 'function';
        }
        catch (e) { }
        return false;
    })()
    : false;

class LocalElement {
  constructor() {
    console.log("LocalElement");
  }
}

(class extends H {
  constructor() {
    console.log("MyClass constructor");
  }
});

(class extends LocalElement {
  constructor() {
    console.log("MyClass constructor");
  }
});
