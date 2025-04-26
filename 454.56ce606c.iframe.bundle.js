(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[454],{

/***/ "./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VA: () => (/* binding */ __export)
/* harmony export */ });
/* unused harmony exports __commonJS, __toESM */
var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty;var __commonJS=(cb,mod)=>function(){return mod||(0, cb[__getOwnPropNames(cb)[0]])((mod={exports:{}}).exports,mod),mod.exports};var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0});},__copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:!0}):target,mod));




/***/ }),

/***/ "./node_modules/@storybook/addon-docs/dist/preview.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  parameters: () => (/* reexport */ parameters)
});

// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs
var chunk_H6MOWX77 = __webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs");
;// ./node_modules/@storybook/addon-docs/dist/chunk-PRSJUHPQ.mjs


var preview_exports={};(0,chunk_H6MOWX77/* __export */.VA)(preview_exports,{parameters:()=>parameters});var excludeTags=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((acc,entry)=>{let[tag,option]=entry;return option.excludeFromDocsStories&&(acc[tag]=!0),acc},{}),parameters={docs:{renderer:async()=>{let{DocsRenderer}=await Promise.all(/* import() */[__webpack_require__.e(303), __webpack_require__.e(738)]).then(__webpack_require__.bind(__webpack_require__, "./node_modules/@storybook/addon-docs/dist/DocsRenderer-CFRXHY34.mjs"));return new DocsRenderer},stories:{filter:story=>(story.tags||[]).filter(tag=>excludeTags[tag]).length===0&&!story.parameters.docs?.disable}}};



;// ./node_modules/@storybook/addon-docs/dist/preview.mjs




/***/ }),

/***/ "./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  argsEnhancers: () => (/* reexport */ argsEnhancers),
  loaders: () => (/* reexport */ loaders)
});

// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("storybook/internal/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__"
var external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_ = __webpack_require__("storybook/internal/preview-errors");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
;// ./node_modules/uuid/dist/esm-browser/native.js
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const esm_browser_native = ({
  randomUUID
});
;// ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
;// ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_browser_stringify = ((/* unused pure expression or super */ null && (stringify)));
;// ./node_modules/uuid/dist/esm-browser/v4.js




function v4(options, buf, offset) {
  if (esm_browser_native.randomUUID && !buf && !options) {
    return esm_browser_native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);
;// ./node_modules/@storybook/addon-actions/dist/preview.mjs





var ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`;var config={depth:10,clearOnStoryChange:!0,limit:50};var findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return !proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=e=>!!(typeof e=="object"&&e&&findProto(e,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&typeof e.persist=="function"),serializeArg=a=>{if(isReactSyntheticEvent(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return typeof view=="object"&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a},generateId=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?esm_browser_v4():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__" in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>render.phase==="playing"||render.phase==="rendering");if(storyRenderer){let deprecated=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),minDepth=5,serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:minDepth+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit);};return handler.isAction=!0,handler.implicit=options.implicit,handler}var isInInitialArgs=(name,initialArgs)=>typeof initialArgs[name]>"u"&&!(name in initialArgs),inferActionsFromArgTypesRegex=context=>{let{initialArgs,argTypes,id,parameters:{actions}}=context;if(!actions||actions.disable||!actions.argTypesRegex||!argTypes)return {};let argTypesRegex=new RegExp(actions.argTypesRegex);return Object.entries(argTypes).filter(([name])=>!!argTypesRegex.test(name)).reduce((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(name,{implicit:!0,id})),acc),{})},addActionsFromArgTypes=context=>{let{initialArgs,argTypes,parameters:{actions}}=context;return actions?.disable||!argTypes?{}:Object.entries(argTypes).filter(([name,argType])=>!!argType.action).reduce((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(typeof argType.action=="string"?argType.action:name)),acc),{})};var argsEnhancers=[addActionsFromArgTypes,inferActionsFromArgTypesRegex];var subscribed=!1,logActionsWhenMockCalled=context=>{let{parameters:{actions}}=context;if(!actions?.disable&&!subscribed&&"__STORYBOOK_TEST_ON_MOCK_CALL__" in external_STORYBOOK_MODULE_GLOBAL_.global&&typeof external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let onMockCall=external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__;onMockCall((mock,args)=>{let name=mock.getMockName();name!=="spy"&&(!/^next\/.*::/.test(name)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(prefix=>name.startsWith(prefix)))&&action(name)(args);}),subscribed=!0;}},loaders=[logActionsWhenMockCalled];



;// ./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs



/***/ }),

/***/ "./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  decorators: () => (/* reexport */ decorators),
  initialGlobals: () => (/* reexport */ initialGlobals),
  parameters: () => (/* reexport */ parameters)
});

// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("storybook/internal/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_CLIENT_LOGGER__"
var external_STORYBOOK_MODULE_CLIENT_LOGGER_ = __webpack_require__("storybook/internal/client-logger");
// EXTERNAL MODULE: ./node_modules/ts-dedent/esm/index.js
var esm = __webpack_require__("./node_modules/ts-dedent/esm/index.js");
;// ./node_modules/@storybook/addon-backgrounds/dist/preview.mjs





var PARAM_KEY="backgrounds";var DEFAULT_BACKGROUNDS={light:{name:"light",value:"#F8F8F8"},dark:{name:"dark",value:"#333"}};var{document: preview_document,window: preview_window}=external_STORYBOOK_MODULE_GLOBAL_.global,isReduceMotionEnabled=()=>!!preview_window?.matchMedia("(prefers-reduced-motion: reduce)")?.matches,clearStyles=selector=>{(Array.isArray(selector)?selector:[selector]).forEach(clearStyle);},clearStyle=selector=>{let element=preview_document.getElementById(selector);element&&element.parentElement?.removeChild(element);},addGridStyle=(selector,css)=>{let existingStyle=preview_document.getElementById(selector);if(existingStyle)existingStyle.innerHTML!==css&&(existingStyle.innerHTML=css);else {let style=preview_document.createElement("style");style.setAttribute("id",selector),style.innerHTML=css,preview_document.head.appendChild(style);}},addBackgroundStyle=(selector,css,storyId)=>{let existingStyle=preview_document.getElementById(selector);if(existingStyle)existingStyle.innerHTML!==css&&(existingStyle.innerHTML=css);else {let style=preview_document.createElement("style");style.setAttribute("id",selector),style.innerHTML=css;let gridStyleSelector=`addon-backgrounds-grid${storyId?`-docs-${storyId}`:""}`,existingGridStyle=preview_document.getElementById(gridStyleSelector);existingGridStyle?existingGridStyle.parentElement?.insertBefore(style,existingGridStyle):preview_document.head.appendChild(style);}};var defaultGrid={cellSize:100,cellAmount:10,opacity:.8},BG_SELECTOR_BASE="addon-backgrounds",GRID_SELECTOR_BASE="addon-backgrounds-grid",transitionStyle=isReduceMotionEnabled()?"":"transition: background-color 0.3s;",withBackgroundAndGrid=(StoryFn,context)=>{let{globals,parameters:parameters2,viewMode,id}=context,{options=DEFAULT_BACKGROUNDS,disable,grid=defaultGrid}=parameters2[PARAM_KEY]||{},data=globals[PARAM_KEY]||{},backgroundName=data.value,item=backgroundName?options[backgroundName]:void 0,value=item?.value||"transparent",showGrid=data.grid||!1,shownBackground=!!item&&!disable,backgroundSelector=viewMode==="docs"?`#anchor--${id} .docs-story`:".sb-show-main",gridSelector=viewMode==="docs"?`#anchor--${id} .docs-story`:".sb-show-main",isLayoutPadded=parameters2.layout===void 0||parameters2.layout==="padded",defaultOffset=viewMode==="docs"?20:isLayoutPadded?16:0,{cellAmount,cellSize,opacity,offsetX=defaultOffset,offsetY=defaultOffset}=grid,backgroundSelectorId=viewMode==="docs"?`${BG_SELECTOR_BASE}-docs-${id}`:`${BG_SELECTOR_BASE}-color`,backgroundTarget=viewMode==="docs"?id:null;(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)(()=>{let backgroundStyles=`
    ${backgroundSelector} {
      background: ${value} !important;
      ${transitionStyle}
      }`;if(!shownBackground){clearStyles(backgroundSelectorId);return}addBackgroundStyle(backgroundSelectorId,backgroundStyles,backgroundTarget);},[backgroundSelector,backgroundSelectorId,backgroundTarget,shownBackground,value]);let gridSelectorId=viewMode==="docs"?`${GRID_SELECTOR_BASE}-docs-${id}`:`${GRID_SELECTOR_BASE}`;return (0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)(()=>{if(!showGrid){clearStyles(gridSelectorId);return}let gridSize=[`${cellSize*cellAmount}px ${cellSize*cellAmount}px`,`${cellSize*cellAmount}px ${cellSize*cellAmount}px`,`${cellSize}px ${cellSize}px`,`${cellSize}px ${cellSize}px`].join(", "),gridStyles=`
        ${gridSelector} {
          background-size: ${gridSize} !important;
          background-position: ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px !important;
          background-blend-mode: difference !important;
          background-image: linear-gradient(rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
           linear-gradient(rgba(130, 130, 130, ${opacity/2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${opacity/2}) 1px, transparent 1px) !important;
        }
      `;addGridStyle(gridSelectorId,gridStyles);},[cellAmount,cellSize,gridSelector,gridSelectorId,showGrid,offsetX,offsetY,opacity]),StoryFn()};var getBackgroundColorByName=(currentSelectedValue,backgrounds=[],defaultName)=>{if(currentSelectedValue==="transparent")return "transparent";if(backgrounds.find(background=>background.value===currentSelectedValue)||currentSelectedValue)return currentSelectedValue;let defaultBackground=backgrounds.find(background=>background.name===defaultName);if(defaultBackground)return defaultBackground.value;if(defaultName){let availableColors=backgrounds.map(background=>background.name).join(", ");external_STORYBOOK_MODULE_CLIENT_LOGGER_.logger.warn((0,esm/* dedent */.T)`
        Backgrounds Addon: could not find the default color "${defaultName}".
        These are the available colors for your story based on your configuration:
        ${availableColors}.
      `);}return "transparent"};var withBackground=(StoryFn,context)=>{let{globals,parameters:parameters2}=context,globalsBackgroundColor=globals[PARAM_KEY]?.value,backgroundsConfig=parameters2[PARAM_KEY],selectedBackgroundColor=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useMemo)(()=>backgroundsConfig.disable?"transparent":getBackgroundColorByName(globalsBackgroundColor,backgroundsConfig.values,backgroundsConfig.default),[backgroundsConfig,globalsBackgroundColor]),isActive=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useMemo)(()=>selectedBackgroundColor&&selectedBackgroundColor!=="transparent",[selectedBackgroundColor]),selector=context.viewMode==="docs"?`#anchor--${context.id} .docs-story`:".sb-show-main",backgroundStyles=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useMemo)(()=>`
      ${selector} {
        background: ${selectedBackgroundColor} !important;
        ${isReduceMotionEnabled()?"":"transition: background-color 0.3s;"}
      }
    `,[selectedBackgroundColor,selector]);return (0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)(()=>{let selectorId=context.viewMode==="docs"?`addon-backgrounds-docs-${context.id}`:"addon-backgrounds-color";if(!isActive){clearStyles(selectorId);return}addBackgroundStyle(selectorId,backgroundStyles,context.viewMode==="docs"?context.id:null);},[isActive,backgroundStyles,context]),StoryFn()};var withGrid=(StoryFn,context)=>{let{globals,parameters:parameters2}=context,gridParameters=parameters2[PARAM_KEY].grid,isActive=globals[PARAM_KEY]?.grid===!0&&gridParameters.disable!==!0,{cellAmount,cellSize,opacity}=gridParameters,isInDocs=context.viewMode==="docs",defaultOffset=parameters2.layout===void 0||parameters2.layout==="padded"?16:0,offsetX=gridParameters.offsetX??(isInDocs?20:defaultOffset),offsetY=gridParameters.offsetY??(isInDocs?20:defaultOffset),gridStyles=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useMemo)(()=>{let selector=context.viewMode==="docs"?`#anchor--${context.id} .docs-story`:".sb-show-main",backgroundSize=[`${cellSize*cellAmount}px ${cellSize*cellAmount}px`,`${cellSize*cellAmount}px ${cellSize*cellAmount}px`,`${cellSize}px ${cellSize}px`,`${cellSize}px ${cellSize}px`].join(", ");return `
      ${selector} {
        background-size: ${backgroundSize} !important;
        background-position: ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${opacity/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${opacity/2}) 1px, transparent 1px) !important;
      }
    `},[cellSize]);return (0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)(()=>{let selectorId=context.viewMode==="docs"?`addon-backgrounds-grid-docs-${context.id}`:"addon-backgrounds-grid";if(!isActive){clearStyles(selectorId);return}addGridStyle(selectorId,gridStyles);},[isActive,gridStyles,context]),StoryFn()};var decorators=globalThis.FEATURES?.backgroundsStoryGlobals?[withBackgroundAndGrid]:[withGrid,withBackground],parameters={[PARAM_KEY]:{grid:{cellSize:20,opacity:.5,cellAmount:5},disable:!1,...!globalThis.FEATURES?.backgroundsStoryGlobals&&{values:Object.values(DEFAULT_BACKGROUNDS)}}},modern={[PARAM_KEY]:{value:void 0,grid:!1}},initialGlobals=globalThis.FEATURES?.backgroundsStoryGlobals?modern:{[PARAM_KEY]:null};



;// ./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs



/***/ }),

/***/ "./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: external "__STORYBOOK_MODULE_CORE_EVENTS__"
var external_STORYBOOK_MODULE_CORE_EVENTS_ = __webpack_require__("storybook/internal/core-events");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("storybook/internal/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
;// ./node_modules/@storybook/addon-highlight/dist/preview.mjs




var ADDON_ID="storybook/highlight",HIGHLIGHT_STYLE_ID="storybookHighlight",HIGHLIGHT=`${ADDON_ID}/add`,RESET_HIGHLIGHT=`${ADDON_ID}/reset`;var{document: preview_document}=external_STORYBOOK_MODULE_GLOBAL_.global,highlightStyle=(color="#FF4785",style="dashed")=>`
  outline: 2px ${style} ${color};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),highlight=infos=>{let id=HIGHLIGHT_STYLE_ID;resetHighlight();let elements=Array.from(new Set(infos.elements)),sheet=preview_document.createElement("style");sheet.setAttribute("id",id),sheet.innerHTML=elements.map(target=>`${target}{
          ${highlightStyle(infos.color,infos.style)}
         }`).join(" "),preview_document.head.appendChild(sheet);},resetHighlight=()=>{let id=HIGHLIGHT_STYLE_ID,sheetToBeRemoved=preview_document.getElementById(id);sheetToBeRemoved&&sheetToBeRemoved.parentNode?.removeChild(sheetToBeRemoved);};channel.on(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,resetHighlight);channel.on(RESET_HIGHLIGHT,resetHighlight);channel.on(HIGHLIGHT,highlight);

;// ./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs



/***/ }),

/***/ "./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  decorators: () => (/* reexport */ decorators),
  initialGlobals: () => (/* reexport */ initialGlobals)
});

// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("storybook/internal/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
;// ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}



;// ./node_modules/@storybook/addon-measure/dist/preview.mjs




var PARAM_KEY="measureEnabled";function getDocumentWidthAndHeight(){let container=external_STORYBOOK_MODULE_GLOBAL_.global.document.documentElement,height=Math.max(container.scrollHeight,container.offsetHeight);return {width:Math.max(container.scrollWidth,container.offsetWidth),height}}function createCanvas(){let canvas=external_STORYBOOK_MODULE_GLOBAL_.global.document.createElement("canvas");canvas.id="storybook-addon-measure";let context=canvas.getContext("2d");invariant(context!=null);let{width,height}=getDocumentWidthAndHeight();return setCanvasWidthAndHeight(canvas,context,{width,height}),canvas.style.position="absolute",canvas.style.left="0",canvas.style.top="0",canvas.style.zIndex="2147483647",canvas.style.pointerEvents="none",external_STORYBOOK_MODULE_GLOBAL_.global.document.body.appendChild(canvas),{canvas,context,width,height}}function setCanvasWidthAndHeight(canvas,context,{width,height}){canvas.style.width=`${width}px`,canvas.style.height=`${height}px`;let scale=external_STORYBOOK_MODULE_GLOBAL_.global.window.devicePixelRatio;canvas.width=Math.floor(width*scale),canvas.height=Math.floor(height*scale),context.scale(scale,scale);}var state={};function init(){state.canvas||(state=createCanvas());}function clear(){state.context&&state.context.clearRect(0,0,state.width??0,state.height??0);}function draw(callback){clear(),callback(state.context);}function rescale(){invariant(state.canvas,"Canvas should exist in the state."),invariant(state.context,"Context should exist in the state."),setCanvasWidthAndHeight(state.canvas,state.context,{width:0,height:0});let{width,height}=getDocumentWidthAndHeight();setCanvasWidthAndHeight(state.canvas,state.context,{width,height}),state.width=width,state.height=height;}function destroy(){state.canvas&&(clear(),state.canvas.parentNode?.removeChild(state.canvas),state={});}var colors={margin:"#f6b26b",border:"#ffe599",padding:"#93c47d",content:"#6fa8dc",text:"#232020"},labelPadding=6;function roundedRect(context,{x,y,w,h,r}){x=x-w/2,y=y-h/2,w<2*r&&(r=w/2),h<2*r&&(r=h/2),context.beginPath(),context.moveTo(x+r,y),context.arcTo(x+w,y,x+w,y+h,r),context.arcTo(x+w,y+h,x,y+h,r),context.arcTo(x,y+h,x,y,r),context.arcTo(x,y,x+w,y,r),context.closePath();}function positionCoordinate(position,{padding,border,width,height,top,left}){let contentWidth=width-border.left-border.right-padding.left-padding.right,contentHeight=height-padding.top-padding.bottom-border.top-border.bottom,x=left+border.left+padding.left,y=top+border.top+padding.top;return position==="top"?x+=contentWidth/2:position==="right"?(x+=contentWidth,y+=contentHeight/2):position==="bottom"?(x+=contentWidth/2,y+=contentHeight):position==="left"?y+=contentHeight/2:position==="center"&&(x+=contentWidth/2,y+=contentHeight/2),{x,y}}function offset(type,position,{margin,border,padding},labelPaddingSize,external){let shift=dir=>0,offsetX=0,offsetY=0,locationMultiplier=external?1:.5,labelPaddingShift=external?labelPaddingSize*2:0;return type==="padding"?shift=dir=>padding[dir]*locationMultiplier+labelPaddingShift:type==="border"?shift=dir=>padding[dir]+border[dir]*locationMultiplier+labelPaddingShift:type==="margin"&&(shift=dir=>padding[dir]+border[dir]+margin[dir]*locationMultiplier+labelPaddingShift),position==="top"?offsetY=-shift("top"):position==="right"?offsetX=shift("right"):position==="bottom"?offsetY=shift("bottom"):position==="left"&&(offsetX=-shift("left")),{offsetX,offsetY}}function collide(a,b){return Math.abs(a.x-b.x)<Math.abs(a.w+b.w)/2&&Math.abs(a.y-b.y)<Math.abs(a.h+b.h)/2}function overlapAdjustment(position,currentRect,prevRect){return position==="top"?currentRect.y=prevRect.y-prevRect.h-labelPadding:position==="right"?currentRect.x=prevRect.x+prevRect.w/2+labelPadding+currentRect.w/2:position==="bottom"?currentRect.y=prevRect.y+prevRect.h+labelPadding:position==="left"&&(currentRect.x=prevRect.x-prevRect.w/2-labelPadding-currentRect.w/2),{x:currentRect.x,y:currentRect.y}}function textWithRect(context,type,{x,y,w,h},text){return roundedRect(context,{x,y,w,h,r:3}),context.fillStyle=`${colors[type]}dd`,context.fill(),context.strokeStyle=colors[type],context.stroke(),context.fillStyle=colors.text,context.fillText(text,x,y),roundedRect(context,{x,y,w,h,r:3}),context.fillStyle=`${colors[type]}dd`,context.fill(),context.strokeStyle=colors[type],context.stroke(),context.fillStyle=colors.text,context.fillText(text,x,y),{x,y,w,h}}function configureText(context,text){context.font="600 12px monospace",context.textBaseline="middle",context.textAlign="center";let metrics=context.measureText(text),actualHeight=metrics.actualBoundingBoxAscent+metrics.actualBoundingBoxDescent,w=metrics.width+labelPadding*2,h=actualHeight+labelPadding*2;return {w,h}}function drawLabel(context,measurements,{type,position="center",text},prevRect,external=!1){let{x,y}=positionCoordinate(position,measurements),{offsetX,offsetY}=offset(type,position,measurements,labelPadding+1,external);x+=offsetX,y+=offsetY;let{w,h}=configureText(context,text);if(prevRect&&collide({x,y,w,h},prevRect)){let adjusted=overlapAdjustment(position,{x,y,w,h},prevRect);x=adjusted.x,y=adjusted.y;}return textWithRect(context,type,{x,y,w,h},text)}function floatingOffset(alignment,{w,h}){let deltaW=w*.5+labelPadding,deltaH=h*.5+labelPadding;return {offsetX:(alignment.x==="left"?-1:1)*deltaW,offsetY:(alignment.y==="top"?-1:1)*deltaH}}function drawFloatingLabel(context,measurements,{type,text}){let{floatingAlignment:floatingAlignment2,extremities}=measurements,x=extremities[floatingAlignment2.x],y=extremities[floatingAlignment2.y],{w,h}=configureText(context,text),{offsetX,offsetY}=floatingOffset(floatingAlignment2,{w,h});return x+=offsetX,y+=offsetY,textWithRect(context,type,{x,y,w,h},text)}function drawStack(context,measurements,stack,external){let rects=[];stack.forEach((l,idx)=>{let rect=external&&l.position==="center"?drawFloatingLabel(context,measurements,l):drawLabel(context,measurements,l,rects[idx-1],external);rects[idx]=rect;});}function labelStacks(context,measurements,labels,externalLabels){let stacks=labels.reduce((acc,l)=>(Object.prototype.hasOwnProperty.call(acc,l.position)||(acc[l.position]=[]),acc[l.position]?.push(l),acc),{});stacks.top&&drawStack(context,measurements,stacks.top,externalLabels),stacks.right&&drawStack(context,measurements,stacks.right,externalLabels),stacks.bottom&&drawStack(context,measurements,stacks.bottom,externalLabels),stacks.left&&drawStack(context,measurements,stacks.left,externalLabels),stacks.center&&drawStack(context,measurements,stacks.center,externalLabels);}var colors2={margin:"#f6b26ba8",border:"#ffe599a8",padding:"#93c47d8c",content:"#6fa8dca8"},SMALL_NODE_SIZE=30;function pxToNumber(px){return parseInt(px.replace("px",""),10)}function round(value){return Number.isInteger(value)?value:value.toFixed(2)}function filterZeroValues(labels){return labels.filter(l=>l.text!==0&&l.text!=="0")}function floatingAlignment(extremities){let windowExtremities={top:external_STORYBOOK_MODULE_GLOBAL_.global.window.scrollY,bottom:external_STORYBOOK_MODULE_GLOBAL_.global.window.scrollY+external_STORYBOOK_MODULE_GLOBAL_.global.window.innerHeight,left:external_STORYBOOK_MODULE_GLOBAL_.global.window.scrollX,right:external_STORYBOOK_MODULE_GLOBAL_.global.window.scrollX+external_STORYBOOK_MODULE_GLOBAL_.global.window.innerWidth},distances={top:Math.abs(windowExtremities.top-extremities.top),bottom:Math.abs(windowExtremities.bottom-extremities.bottom),left:Math.abs(windowExtremities.left-extremities.left),right:Math.abs(windowExtremities.right-extremities.right)};return {x:distances.left>distances.right?"left":"right",y:distances.top>distances.bottom?"top":"bottom"}}function measureElement(element){let style=external_STORYBOOK_MODULE_GLOBAL_.global.getComputedStyle(element),{top,left,right,bottom,width,height}=element.getBoundingClientRect(),{marginTop,marginBottom,marginLeft,marginRight,paddingTop,paddingBottom,paddingLeft,paddingRight,borderBottomWidth,borderTopWidth,borderLeftWidth,borderRightWidth}=style;top=top+external_STORYBOOK_MODULE_GLOBAL_.global.window.scrollY,left=left+external_STORYBOOK_MODULE_GLOBAL_.global.window.scrollX,bottom=bottom+external_STORYBOOK_MODULE_GLOBAL_.global.window.scrollY,right=right+external_STORYBOOK_MODULE_GLOBAL_.global.window.scrollX;let margin={top:pxToNumber(marginTop),bottom:pxToNumber(marginBottom),left:pxToNumber(marginLeft),right:pxToNumber(marginRight)},padding={top:pxToNumber(paddingTop),bottom:pxToNumber(paddingBottom),left:pxToNumber(paddingLeft),right:pxToNumber(paddingRight)},border={top:pxToNumber(borderTopWidth),bottom:pxToNumber(borderBottomWidth),left:pxToNumber(borderLeftWidth),right:pxToNumber(borderRightWidth)},extremities={top:top-margin.top,bottom:bottom+margin.bottom,left:left-margin.left,right:right+margin.right};return {margin,padding,border,top,left,bottom,right,width,height,extremities,floatingAlignment:floatingAlignment(extremities)}}function drawMargin(context,{margin,width,height,top,left,bottom,right}){let marginHeight=height+margin.bottom+margin.top;context.fillStyle=colors2.margin,context.fillRect(left,top-margin.top,width,margin.top),context.fillRect(right,top-margin.top,margin.right,marginHeight),context.fillRect(left,bottom,width,margin.bottom),context.fillRect(left-margin.left,top-margin.top,margin.left,marginHeight);let marginLabels=[{type:"margin",text:round(margin.top),position:"top"},{type:"margin",text:round(margin.right),position:"right"},{type:"margin",text:round(margin.bottom),position:"bottom"},{type:"margin",text:round(margin.left),position:"left"}];return filterZeroValues(marginLabels)}function drawPadding(context,{padding,border,width,height,top,left,bottom,right}){let paddingWidth=width-border.left-border.right,paddingHeight=height-padding.top-padding.bottom-border.top-border.bottom;context.fillStyle=colors2.padding,context.fillRect(left+border.left,top+border.top,paddingWidth,padding.top),context.fillRect(right-padding.right-border.right,top+padding.top+border.top,padding.right,paddingHeight),context.fillRect(left+border.left,bottom-padding.bottom-border.bottom,paddingWidth,padding.bottom),context.fillRect(left+border.left,top+padding.top+border.top,padding.left,paddingHeight);let paddingLabels=[{type:"padding",text:padding.top,position:"top"},{type:"padding",text:padding.right,position:"right"},{type:"padding",text:padding.bottom,position:"bottom"},{type:"padding",text:padding.left,position:"left"}];return filterZeroValues(paddingLabels)}function drawBorder(context,{border,width,height,top,left,bottom,right}){let borderHeight=height-border.top-border.bottom;context.fillStyle=colors2.border,context.fillRect(left,top,width,border.top),context.fillRect(left,bottom-border.bottom,width,border.bottom),context.fillRect(left,top+border.top,border.left,borderHeight),context.fillRect(right-border.right,top+border.top,border.right,borderHeight);let borderLabels=[{type:"border",text:border.top,position:"top"},{type:"border",text:border.right,position:"right"},{type:"border",text:border.bottom,position:"bottom"},{type:"border",text:border.left,position:"left"}];return filterZeroValues(borderLabels)}function drawContent(context,{padding,border,width,height,top,left}){let contentWidth=width-border.left-border.right-padding.left-padding.right,contentHeight=height-padding.top-padding.bottom-border.top-border.bottom;return context.fillStyle=colors2.content,context.fillRect(left+border.left+padding.left,top+border.top+padding.top,contentWidth,contentHeight),[{type:"content",position:"center",text:`${round(contentWidth)} x ${round(contentHeight)}`}]}function drawBoxModel(element){return context=>{if(element&&context){let measurements=measureElement(element),marginLabels=drawMargin(context,measurements),paddingLabels=drawPadding(context,measurements),borderLabels=drawBorder(context,measurements),contentLabels=drawContent(context,measurements),externalLabels=measurements.width<=SMALL_NODE_SIZE*3||measurements.height<=SMALL_NODE_SIZE;labelStacks(context,measurements,[...contentLabels,...paddingLabels,...borderLabels,...marginLabels],externalLabels);}}}function drawSelectedElement(element){draw(drawBoxModel(element));}var deepElementFromPoint=(x,y)=>{let element=external_STORYBOOK_MODULE_GLOBAL_.global.document.elementFromPoint(x,y),crawlShadows=node=>{if(node&&node.shadowRoot){let nestedElement=node.shadowRoot.elementFromPoint(x,y);return node.isEqualNode(nestedElement)?node:nestedElement.shadowRoot?crawlShadows(nestedElement):nestedElement}return node};return crawlShadows(element)||element};var nodeAtPointerRef,pointer={x:0,y:0};function findAndDrawElement(x,y){nodeAtPointerRef=deepElementFromPoint(x,y),drawSelectedElement(nodeAtPointerRef);}var withMeasure=(StoryFn,context)=>{let{measureEnabled}=context.globals;return (0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)(()=>{let onPointerMove=event=>{window.requestAnimationFrame(()=>{event.stopPropagation(),pointer.x=event.clientX,pointer.y=event.clientY;});};return document.addEventListener("pointermove",onPointerMove),()=>{document.removeEventListener("pointermove",onPointerMove);}},[]),(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)(()=>{let onPointerOver=event=>{window.requestAnimationFrame(()=>{event.stopPropagation(),findAndDrawElement(event.clientX,event.clientY);});},onResize=()=>{window.requestAnimationFrame(()=>{rescale();});};return context.viewMode==="story"&&measureEnabled&&(document.addEventListener("pointerover",onPointerOver),init(),window.addEventListener("resize",onResize),findAndDrawElement(pointer.x,pointer.y)),()=>{window.removeEventListener("resize",onResize),destroy();}},[measureEnabled,context.viewMode]),StoryFn()};var decorators=[withMeasure],initialGlobals={[PARAM_KEY]:!1};



;// ./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs



/***/ }),

/***/ "./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  decorators: () => (/* reexport */ decorators),
  initialGlobals: () => (/* reexport */ initialGlobals)
});

// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("storybook/internal/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
// EXTERNAL MODULE: ./node_modules/ts-dedent/esm/index.js
var esm = __webpack_require__("./node_modules/ts-dedent/esm/index.js");
;// ./node_modules/@storybook/addon-outline/dist/preview.mjs




var PARAM_KEY="outline";var clearStyles=selector=>{(Array.isArray(selector)?selector:[selector]).forEach(clearStyle);},clearStyle=input=>{let selector=typeof input=="string"?input:input.join(""),element=external_STORYBOOK_MODULE_GLOBAL_.global.document.getElementById(selector);element&&element.parentElement&&element.parentElement.removeChild(element);},addOutlineStyles=(selector,css)=>{let existingStyle=external_STORYBOOK_MODULE_GLOBAL_.global.document.getElementById(selector);if(existingStyle)existingStyle.innerHTML!==css&&(existingStyle.innerHTML=css);else {let style=external_STORYBOOK_MODULE_GLOBAL_.global.document.createElement("style");style.setAttribute("id",selector),style.innerHTML=css,external_STORYBOOK_MODULE_GLOBAL_.global.document.head.appendChild(style);}};function outlineCSS(selector){return (0,esm/* dedent */.T)`
    ${selector} body {
      outline: 1px solid #2980b9 !important;
    }

    ${selector} article {
      outline: 1px solid #3498db !important;
    }

    ${selector} nav {
      outline: 1px solid #0088c3 !important;
    }

    ${selector} aside {
      outline: 1px solid #33a0ce !important;
    }

    ${selector} section {
      outline: 1px solid #66b8da !important;
    }

    ${selector} header {
      outline: 1px solid #99cfe7 !important;
    }

    ${selector} footer {
      outline: 1px solid #cce7f3 !important;
    }

    ${selector} h1 {
      outline: 1px solid #162544 !important;
    }

    ${selector} h2 {
      outline: 1px solid #314e6e !important;
    }

    ${selector} h3 {
      outline: 1px solid #3e5e85 !important;
    }

    ${selector} h4 {
      outline: 1px solid #449baf !important;
    }

    ${selector} h5 {
      outline: 1px solid #c7d1cb !important;
    }

    ${selector} h6 {
      outline: 1px solid #4371d0 !important;
    }

    ${selector} main {
      outline: 1px solid #2f4f90 !important;
    }

    ${selector} address {
      outline: 1px solid #1a2c51 !important;
    }

    ${selector} div {
      outline: 1px solid #036cdb !important;
    }

    ${selector} p {
      outline: 1px solid #ac050b !important;
    }

    ${selector} hr {
      outline: 1px solid #ff063f !important;
    }

    ${selector} pre {
      outline: 1px solid #850440 !important;
    }

    ${selector} blockquote {
      outline: 1px solid #f1b8e7 !important;
    }

    ${selector} ol {
      outline: 1px solid #ff050c !important;
    }

    ${selector} ul {
      outline: 1px solid #d90416 !important;
    }

    ${selector} li {
      outline: 1px solid #d90416 !important;
    }

    ${selector} dl {
      outline: 1px solid #fd3427 !important;
    }

    ${selector} dt {
      outline: 1px solid #ff0043 !important;
    }

    ${selector} dd {
      outline: 1px solid #e80174 !important;
    }

    ${selector} figure {
      outline: 1px solid #ff00bb !important;
    }

    ${selector} figcaption {
      outline: 1px solid #bf0032 !important;
    }

    ${selector} table {
      outline: 1px solid #00cc99 !important;
    }

    ${selector} caption {
      outline: 1px solid #37ffc4 !important;
    }

    ${selector} thead {
      outline: 1px solid #98daca !important;
    }

    ${selector} tbody {
      outline: 1px solid #64a7a0 !important;
    }

    ${selector} tfoot {
      outline: 1px solid #22746b !important;
    }

    ${selector} tr {
      outline: 1px solid #86c0b2 !important;
    }

    ${selector} th {
      outline: 1px solid #a1e7d6 !important;
    }

    ${selector} td {
      outline: 1px solid #3f5a54 !important;
    }

    ${selector} col {
      outline: 1px solid #6c9a8f !important;
    }

    ${selector} colgroup {
      outline: 1px solid #6c9a9d !important;
    }

    ${selector} button {
      outline: 1px solid #da8301 !important;
    }

    ${selector} datalist {
      outline: 1px solid #c06000 !important;
    }

    ${selector} fieldset {
      outline: 1px solid #d95100 !important;
    }

    ${selector} form {
      outline: 1px solid #d23600 !important;
    }

    ${selector} input {
      outline: 1px solid #fca600 !important;
    }

    ${selector} keygen {
      outline: 1px solid #b31e00 !important;
    }

    ${selector} label {
      outline: 1px solid #ee8900 !important;
    }

    ${selector} legend {
      outline: 1px solid #de6d00 !important;
    }

    ${selector} meter {
      outline: 1px solid #e8630c !important;
    }

    ${selector} optgroup {
      outline: 1px solid #b33600 !important;
    }

    ${selector} option {
      outline: 1px solid #ff8a00 !important;
    }

    ${selector} output {
      outline: 1px solid #ff9619 !important;
    }

    ${selector} progress {
      outline: 1px solid #e57c00 !important;
    }

    ${selector} select {
      outline: 1px solid #e26e0f !important;
    }

    ${selector} textarea {
      outline: 1px solid #cc5400 !important;
    }

    ${selector} details {
      outline: 1px solid #33848f !important;
    }

    ${selector} summary {
      outline: 1px solid #60a1a6 !important;
    }

    ${selector} command {
      outline: 1px solid #438da1 !important;
    }

    ${selector} menu {
      outline: 1px solid #449da6 !important;
    }

    ${selector} del {
      outline: 1px solid #bf0000 !important;
    }

    ${selector} ins {
      outline: 1px solid #400000 !important;
    }

    ${selector} img {
      outline: 1px solid #22746b !important;
    }

    ${selector} iframe {
      outline: 1px solid #64a7a0 !important;
    }

    ${selector} embed {
      outline: 1px solid #98daca !important;
    }

    ${selector} object {
      outline: 1px solid #00cc99 !important;
    }

    ${selector} param {
      outline: 1px solid #37ffc4 !important;
    }

    ${selector} video {
      outline: 1px solid #6ee866 !important;
    }

    ${selector} audio {
      outline: 1px solid #027353 !important;
    }

    ${selector} source {
      outline: 1px solid #012426 !important;
    }

    ${selector} canvas {
      outline: 1px solid #a2f570 !important;
    }

    ${selector} track {
      outline: 1px solid #59a600 !important;
    }

    ${selector} map {
      outline: 1px solid #7be500 !important;
    }

    ${selector} area {
      outline: 1px solid #305900 !important;
    }

    ${selector} a {
      outline: 1px solid #ff62ab !important;
    }

    ${selector} em {
      outline: 1px solid #800b41 !important;
    }

    ${selector} strong {
      outline: 1px solid #ff1583 !important;
    }

    ${selector} i {
      outline: 1px solid #803156 !important;
    }

    ${selector} b {
      outline: 1px solid #cc1169 !important;
    }

    ${selector} u {
      outline: 1px solid #ff0430 !important;
    }

    ${selector} s {
      outline: 1px solid #f805e3 !important;
    }

    ${selector} small {
      outline: 1px solid #d107b2 !important;
    }

    ${selector} abbr {
      outline: 1px solid #4a0263 !important;
    }

    ${selector} q {
      outline: 1px solid #240018 !important;
    }

    ${selector} cite {
      outline: 1px solid #64003c !important;
    }

    ${selector} dfn {
      outline: 1px solid #b4005a !important;
    }

    ${selector} sub {
      outline: 1px solid #dba0c8 !important;
    }

    ${selector} sup {
      outline: 1px solid #cc0256 !important;
    }

    ${selector} time {
      outline: 1px solid #d6606d !important;
    }

    ${selector} code {
      outline: 1px solid #e04251 !important;
    }

    ${selector} kbd {
      outline: 1px solid #5e001f !important;
    }

    ${selector} samp {
      outline: 1px solid #9c0033 !important;
    }

    ${selector} var {
      outline: 1px solid #d90047 !important;
    }

    ${selector} mark {
      outline: 1px solid #ff0053 !important;
    }

    ${selector} bdi {
      outline: 1px solid #bf3668 !important;
    }

    ${selector} bdo {
      outline: 1px solid #6f1400 !important;
    }

    ${selector} ruby {
      outline: 1px solid #ff7b93 !important;
    }

    ${selector} rt {
      outline: 1px solid #ff2f54 !important;
    }

    ${selector} rp {
      outline: 1px solid #803e49 !important;
    }

    ${selector} span {
      outline: 1px solid #cc2643 !important;
    }

    ${selector} br {
      outline: 1px solid #db687d !important;
    }

    ${selector} wbr {
      outline: 1px solid #db175b !important;
    }`}var withOutline=(StoryFn,context)=>{let{globals}=context,isActive=[!0,"true"].includes(globals[PARAM_KEY]),isInDocs=context.viewMode==="docs",outlineStyles=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useMemo)(()=>outlineCSS(isInDocs?'[data-story-block="true"]':".sb-show-main"),[context]);return (0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)(()=>{let selectorId=isInDocs?`addon-outline-docs-${context.id}`:"addon-outline";return isActive?addOutlineStyles(selectorId,outlineStyles):clearStyles(selectorId),()=>{clearStyles(selectorId);}},[isActive,outlineStyles,context]),StoryFn()};var decorators=[withOutline],initialGlobals={[PARAM_KEY]:!1};



;// ./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs



/***/ }),

/***/ "./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  initialGlobals: () => (/* reexport */ initialGlobals)
});

;// ./node_modules/@storybook/addon-viewport/dist/preview.mjs
var PARAM_KEY="viewport";var modern={[PARAM_KEY]:{value:void 0,isRotated:!1}},legacy={viewport:"reset",viewportRotated:!1},initialGlobals=globalThis.FEATURES?.viewportStoryGlobals?modern:legacy;



;// ./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs



/***/ }),

/***/ "./node_modules/@storybook/addon-links/dist/preview.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decorators: () => (/* binding */ decorators)
/* harmony export */ });
/* harmony import */ var storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("storybook/internal/preview-api");
/* harmony import */ var storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var storybook_internal_core_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("storybook/internal/core-events");
/* harmony import */ var storybook_internal_core_events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(storybook_internal_core_events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@storybook/global");
/* harmony import */ var _storybook_global__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_global__WEBPACK_IMPORTED_MODULE_2__);





var PARAM_KEY="links";var{document,HTMLElement}=_storybook_global__WEBPACK_IMPORTED_MODULE_2__.global;var navigate=params=>storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_0__.addons.getChannel().emit(storybook_internal_core_events__WEBPACK_IMPORTED_MODULE_1__.SELECT_STORY,params);var linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),navigate({kind,story}));},hasListener=!1,on=()=>{hasListener||(hasListener=!0,document.addEventListener("click",linksListener));},off=()=>{hasListener&&(hasListener=!1,document.removeEventListener("click",linksListener));},withLinks=(0,storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_0__.makeDecorator)({name:"withLinks",parameterName:PARAM_KEY,wrapper:(getStory,context)=>(on(),storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_0__.addons.getChannel().once(storybook_internal_core_events__WEBPACK_IMPORTED_MODULE_1__.STORY_CHANGED,off),getStory(context))});var decorators=[withLinks];




/***/ }),

/***/ "./node_modules/@storybook/core/dist/csf/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aj: () => (/* binding */ D),
/* harmony export */   bU: () => (/* binding */ W),
/* harmony export */   hX: () => (/* binding */ z)
/* harmony export */ });
/* unused harmony exports __definePreview, combineTags, isExportStory, isMeta, isStory, parseKind, storyNameFromExport, toId */
/* harmony import */ var _storybook_core_preview_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("storybook/internal/preview-api");
/* harmony import */ var _storybook_core_preview_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_core_preview_api__WEBPACK_IMPORTED_MODULE_0__);
var b = Object.create;
var f = Object.defineProperty;
var v = Object.getOwnPropertyDescriptor;
var P = Object.getOwnPropertyNames;
var O = Object.getPrototypeOf, _ = Object.prototype.hasOwnProperty;
var s = (e, r) => f(e, "name", { value: r, configurable: !0 });
var $ = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var j = (e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let a of P(r))
      !_.call(e, a) && a !== t && f(e, a, { get: () => r[a], enumerable: !(n = v(r, a)) || n.enumerable });
  return e;
};
var C = (e, r, t) => (t = e != null ? b(O(e)) : {}, j(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  r || !e || !e.__esModule ? f(t, "default", { value: e, enumerable: !0 }) : t,
  e
));

// ../node_modules/@ngard/tiny-isequal/index.js
var T = $((g) => {
  Object.defineProperty(g, "__esModule", { value: !0 }), g.isEqual = /* @__PURE__ */ function() {
    var e = Object.prototype.toString, r = Object.getPrototypeOf, t = Object.getOwnPropertySymbols ? function(n) {
      return Object.keys(n).concat(Object.getOwnPropertySymbols(n));
    } : Object.keys;
    return function(n, a) {
      return (/* @__PURE__ */ s(function d(o, i, p) {
        var c, u, l, m = e.call(o), h = e.call(i);
        if (o === i) return !0;
        if (o == null || i == null) return !1;
        if (p.indexOf(o) > -1 && p.indexOf(i) > -1) return !0;
        if (p.push(o, i), m != h || (c = t(o), u = t(i), c.length != u.length || c.some(function(A) {
          return !d(o[A], i[A], p);
        }))) return !1;
        switch (m.slice(8, -1)) {
          case "Symbol":
            return o.valueOf() == i.valueOf();
          case "Date":
          case "Number":
            return +o == +i || +o != +o && +i != +i;
          case "RegExp":
          case "Function":
          case "String":
          case "Boolean":
            return "" + o == "" + i;
          case "Set":
          case "Map":
            c = o.entries(), u = i.entries();
            do
              if (!d((l = c.next()).value, u.next().value, p)) return !1;
            while (!l.done);
            return !0;
          case "ArrayBuffer":
            o = new Uint8Array(o), i = new Uint8Array(i);
          case "DataView":
            o = new Uint8Array(o.buffer), i = new Uint8Array(i.buffer);
          case "Float32Array":
          case "Float64Array":
          case "Int8Array":
          case "Int16Array":
          case "Int32Array":
          case "Uint8Array":
          case "Uint16Array":
          case "Uint32Array":
          case "Uint8ClampedArray":
          case "Arguments":
          case "Array":
            if (o.length != i.length) return !1;
            for (l = 0; l < o.length; l++) if ((l in o || l in i) && (l in o != l in i || !d(o[l], i[l], p))) return !1;
            return !0;
          case "Object":
            return d(r(o), r(i), p);
          default:
            return !1;
        }
      }, "n"))(n, a, []);
    };
  }();
});

// src/csf/toStartCaseStr.ts
function R(e) {
  return e.replace(/_/g, " ").replace(/-/g, " ").replace(/\./g, " ").replace(/([^\n])([A-Z])([a-z])/g, (r, t, n, a) => `${t} ${n}${a}`).replace(
  /([a-z])([A-Z])/g, (r, t, n) => `${t} ${n}`).replace(/([a-z])([0-9])/gi, (r, t, n) => `${t} ${n}`).replace(/([0-9])([a-z])/gi, (r, t, n) => `${t}\
 ${n}`).replace(/(\s|^)(\w)/g, (r, t, n) => `${t}${n.toUpperCase()}`).replace(/ +/g, " ").trim();
}
s(R, "toStartCaseStr");

// src/csf/includeConditionalArg.ts
var y = C(T(), 1);
var x = /* @__PURE__ */ s((e) => e.map((r) => typeof r < "u").filter(Boolean).length, "count"), E = /* @__PURE__ */ s((e, r) => {
  let { exists: t, eq: n, neq: a, truthy: d } = e;
  if (x([t, n, a, d]) > 1)
    throw new Error(`Invalid conditional test ${JSON.stringify({ exists: t, eq: n, neq: a })}`);
  if (typeof n < "u")
    return (0, y.isEqual)(r, n);
  if (typeof a < "u")
    return !(0, y.isEqual)(r, a);
  if (typeof t < "u") {
    let i = typeof r < "u";
    return t ? i : !i;
  }
  return (typeof d > "u" ? !0 : d) ? !!r : !r;
}, "testValue"), z = /* @__PURE__ */ s((e, r, t) => {
  if (!e.if)
    return !0;
  let { arg: n, global: a } = e.if;
  if (x([n, a]) !== 1)
    throw new Error(`Invalid conditional value ${JSON.stringify({ arg: n, global: a })}`);
  let d = n ? r[n] : t[a];
  return E(e.if, d);
}, "includeConditionalArg");

// src/csf/csf-factories.ts

function L(e) {
  let r, t = {
    _tag: "Preview",
    input: e,
    get composed() {
      if (r)
        return r;
      let { addons: n, ...a } = e;
      return r = (0,_storybook_core_preview_api__WEBPACK_IMPORTED_MODULE_0__.normalizeProjectAnnotations)((0,_storybook_core_preview_api__WEBPACK_IMPORTED_MODULE_0__.composeConfigs)([...n ?? [], a])), r;
    },
    meta(n) {
      return I(n, this);
    }
  };
  return globalThis.globalProjectAnnotations = t.composed, t;
}
s(L, "__definePreview");
function W(e) {
  return e != null && typeof e == "object" && "_tag" in e && e?._tag === "Preview";
}
s(W, "isPreview");
function H(e) {
  return e != null && typeof e == "object" && "_tag" in e && e?._tag === "Meta";
}
s(H, "isMeta");
function I(e, r) {
  return {
    _tag: "Meta",
    input: e,
    preview: r,
    get composed() {
      throw new Error("Not implemented");
    },
    story(t) {
      return U(t, this);
    }
  };
}
s(I, "defineMeta");
function U(e, r) {
  return {
    _tag: "Story",
    input: e,
    meta: r,
    get composed() {
      throw new Error("Not implemented");
    }
  };
}
s(U, "defineStory");
function K(e) {
  return e != null && typeof e == "object" && "_tag" in e && e?._tag === "Story";
}
s(K, "isStory");

// src/csf/index.ts
var D = /* @__PURE__ */ s((e) => e.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(/-+/g,
"-").replace(/^-+/, "").replace(/-+$/, ""), "sanitize"), w = /* @__PURE__ */ (/* unused pure expression or super */ null && (s((e, r) => {
  let t = D(e);
  if (t === "")
    throw new Error(`Invalid ${r} '${e}', must include alphanumeric characters`);
  return t;
}, "sanitizeSafe"))), ee = /* @__PURE__ */ (/* unused pure expression or super */ null && (s((e, r) => `${w(e, "kind")}${r ? `--${w(r, "name")}` : ""}`, "toId"))), re = /* @__PURE__ */ (/* unused pure expression or super */ null && (s((e) => R(
e), "storyNameFromExport")));
function S(e, r) {
  return Array.isArray(r) ? r.includes(e) : e.match(r);
}
s(S, "matches");
function te(e, { includeStories: r, excludeStories: t }) {
  return (
    // https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs
    e !== "__esModule" && (!r || S(e, r)) && (!t || !S(e, t))
  );
}
s(te, "isExportStory");
var ne = /* @__PURE__ */ (/* unused pure expression or super */ null && (s((e, { rootSeparator: r, groupSeparator: t }) => {
  let [n, a] = e.split(r, 2), d = (a || e).split(t).filter((o) => !!o);
  return {
    root: a ? n : null,
    groups: d
  };
}, "parseKind"))), oe = /* @__PURE__ */ (/* unused pure expression or super */ null && (s((...e) => {
  let r = e.reduce((t, n) => (n.startsWith("!") ? t.delete(n.slice(1)) : t.add(n), t), /* @__PURE__ */ new Set());
  return Array.from(r);
}, "combineTags")));



/***/ }),

/***/ "./node_modules/@storybook/core/dist/docs-tools/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C2: () => (/* binding */ cn),
/* harmony export */   Op: () => (/* binding */ yn),
/* harmony export */   Y1: () => (/* binding */ gt)
/* harmony export */ });
/* unused harmony exports ADDON_ID, MAX_DEFAULT_VALUE_SUMMARY_LENGTH, MAX_TYPE_SUMMARY_LENGTH, PANEL_ID, PARAM_KEY, TypeSystem, convert, createSummaryValue, extractComponentDescription, extractComponentProps, extractComponentSectionArray, extractComponentSectionObject, getDocgenDescription, getDocgenSection, hasDocgen, hasDocsOrControls, isDefaultValueBlacklisted, isTooLongForDefaultValueSummary, isTooLongForTypeSummary, isValidDocgenSection, normalizeNewlines, parseJsDoc, str */
/* harmony import */ var _storybook_core_preview_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("storybook/internal/preview-errors");
/* harmony import */ var _storybook_core_preview_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_core_preview_errors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsdoc_type_pratt_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/jsdoc-type-pratt-parser/dist/index.js");
/* harmony import */ var jsdoc_type_pratt_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsdoc_type_pratt_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_core_preview_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("storybook/internal/preview-api");
/* harmony import */ var _storybook_core_preview_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_core_preview_api__WEBPACK_IMPORTED_MODULE_2__);
var De = Object.defineProperty;
var o = (e, t) => De(e, "name", { value: t, configurable: !0 });

// src/docs-tools/argTypes/convert/flow/convert.ts

var he = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => e.name === "literal", "isLiteral"))), be = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => e.value.replace(/['|"]/g, ""), "toEnumOp\
tion"))), Pe = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => {
  switch (e.type) {
    case "function":
      return { name: "function" };
    case "object":
      let t = {};
      return e.signature.properties.forEach((r) => {
        t[r.key] = d(r.value);
      }), {
        name: "object",
        value: t
      };
    default:
      throw new Te({ type: e, language: "Flow" });
  }
}, "convertSig"))), d = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => {
  let { name: t, raw: r } = e, n = {};
  switch (typeof r < "u" && (n.raw = r), e.name) {
    case "literal":
      return { ...n, name: "other", value: e.value };
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...n, name: t };
    case "Array":
      return { ...n, name: "array", value: e.elements.map(d) };
    case "signature":
      return { ...n, ...Pe(e) };
    case "union":
      return e.elements?.every(he) ? { ...n, name: "enum", value: e.elements?.map(be) } : { ...n, name: t, value: e.elements?.map(d) };
    case "intersection":
      return { ...n, name: t, value: e.elements?.map(d) };
    default:
      return { ...n, name: "other", value: t };
  }
}, "convert")));

// ../node_modules/es-toolkit/dist/object/mapValues.mjs
function j(e, t) {
  let r = {}, n = Object.keys(e);
  for (let s = 0; s < n.length; s++) {
    let i = n[s], p = e[i];
    r[i] = t(p, i, e);
  }
  return r;
}
o(j, "mapValues");

// src/docs-tools/argTypes/convert/utils.ts
var W = /^['"]|['"]$/g, Se = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => e.replace(W, ""), "trimQuotes"))), Oe = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => W.test(e), "includesQuo\
tes"))), h = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => {
  let t = Se(e);
  return Oe(e) || Number.isNaN(Number(t)) ? t : Number(t);
}, "parseLiteral")));

// src/docs-tools/argTypes/convert/proptypes/convert.ts
var ve = /^\(.*\) => /, x = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => {
  let { name: t, raw: r, computed: n, value: s } = e, i = {};
  switch (typeof r < "u" && (i.raw = r), t) {
    case "enum": {
      let a = n ? s : s.map((c) => h(c.value));
      return { ...i, name: t, value: a };
    }
    case "string":
    case "number":
    case "symbol":
      return { ...i, name: t };
    case "func":
      return { ...i, name: "function" };
    case "bool":
    case "boolean":
      return { ...i, name: "boolean" };
    case "arrayOf":
    case "array":
      return { ...i, name: "array", value: s && x(s) };
    case "object":
      return { ...i, name: t };
    case "objectOf":
      return { ...i, name: t, value: x(s) };
    case "shape":
    case "exact":
      let p = j(s, (a) => x(a));
      return { ...i, name: "object", value: p };
    case "union":
      return { ...i, name: "union", value: s.map((a) => x(a)) };
    case "instanceOf":
    case "element":
    case "elementType":
    default: {
      if (t?.indexOf("|") > 0)
        try {
          let u = t.split("|").map((m) => JSON.parse(m));
          return { ...i, name: "enum", value: u };
        } catch {
        }
      let a = s ? `${t}(${s})` : t, c = ve.test(t) ? "function" : "other";
      return { ...i, name: c, value: a };
    }
  }
}, "convert")));

// src/docs-tools/argTypes/convert/typescript/convert.ts

var Ee = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => {
  switch (e.type) {
    case "function":
      return { name: "function" };
    case "object":
      let t = {};
      return e.signature.properties.forEach((r) => {
        t[r.key] = D(r.value);
      }), {
        name: "object",
        value: t
      };
    default:
      throw new we({ type: e, language: "Typescript" });
  }
}, "convertSig"))), D = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => {
  let { name: t, raw: r } = e, n = {};
  switch (typeof r < "u" && (n.raw = r), e.name) {
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...n, name: t };
    case "Array":
      return { ...n, name: "array", value: e.elements.map(D) };
    case "signature":
      return { ...n, ...Ee(e) };
    case "union":
      let s;
      return e.elements?.every((i) => i.name === "literal") ? s = {
        ...n,
        name: "enum",
        // @ts-expect-error fix types
        value: e.elements?.map((i) => h(i.value))
      } : s = { ...n, name: t, value: e.elements?.map(D) }, s;
    case "intersection":
      return { ...n, name: t, value: e.elements?.map(D) };
    default:
      return { ...n, name: "other", value: t };
  }
}, "convert")));

// src/docs-tools/argTypes/convert/index.ts
var b = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => {
  let { type: t, tsType: r, flowType: n } = e;
  try {
    if (t != null)
      return x(t);
    if (r != null)
      return D(r);
    if (n != null)
      return d(n);
  } catch (s) {
    console.error(s);
  }
  return null;
}, "convert")));

// src/docs-tools/argTypes/docgen/types.ts
var je = /* @__PURE__ */ ((s) => (s.JAVASCRIPT = "JavaScript", s.FLOW = "Flow", s.TYPESCRIPT = "TypeScript", s.UNKNOWN = "Unknown", s))(je ||
{});

// src/docs-tools/argTypes/docgen/utils/defaultValue.ts
var ke = ["null", "undefined"];
function T(e) {
  return ke.some((t) => t === e);
}
o(T, "isDefaultValueBlacklisted");

// src/docs-tools/argTypes/docgen/utils/string.ts
var M = /* @__PURE__ */ o((e) => {
  if (!e)
    return "";
  if (typeof e == "string")
    return e;
  throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
}, "str");

// src/docs-tools/argTypes/docgen/utils/docgenInfo.ts
function z(e) {
  return !!e.__docgenInfo;
}
o(z, "hasDocgen");
function $(e) {
  return e != null && Object.keys(e).length > 0;
}
o($, "isValidDocgenSection");
function Y(e, t) {
  return z(e) ? e.__docgenInfo[t] : null;
}
o(Y, "getDocgenSection");
function q(e) {
  return z(e) ? M(e.__docgenInfo.description) : "";
}
o(q, "getDocgenDescription");

// ../node_modules/comment-parser/es6/primitives.js
var f;
(function(e) {
  e.start = "/**", e.nostart = "/***", e.delim = "*", e.end = "*/";
})(f = f || (f = {}));

// ../node_modules/comment-parser/es6/util.js
function k(e) {
  return /^\s+$/.test(e);
}
o(k, "isSpace");
function G(e) {
  let t = e.match(/\r+$/);
  return t == null ? ["", e] : [e.slice(-t[0].length), e.slice(0, -t[0].length)];
}
o(G, "splitCR");
function y(e) {
  let t = e.match(/^\s+/);
  return t == null ? ["", e] : [e.slice(0, t[0].length), e.slice(t[0].length)];
}
o(y, "splitSpace");
function K(e) {
  return e.split(/\n/);
}
o(K, "splitLines");
function X(e = {}) {
  return Object.assign({ tag: "", name: "", type: "", optional: !1, description: "", problems: [], source: [] }, e);
}
o(X, "seedSpec");
function F(e = {}) {
  return Object.assign({ start: "", delimiter: "", postDelimiter: "", tag: "", postTag: "", name: "", postName: "", type: "", postType: "", description: "",
  end: "", lineEnd: "" }, e);
}
o(F, "seedTokens");

// ../node_modules/comment-parser/es6/parser/block-parser.js
var Fe = /^@\S+/;
function J({ fence: e = "```" } = {}) {
  let t = Je(e), r = /* @__PURE__ */ o((n, s) => t(n) ? !s : s, "toggleFence");
  return /* @__PURE__ */ o(function(s) {
    let i = [[]], p = !1;
    for (let a of s)
      Fe.test(a.tokens.description) && !p ? i.push([a]) : i[i.length - 1].push(a), p = r(a.tokens.description, p);
    return i;
  }, "parseBlock");
}
o(J, "getParser");
function Je(e) {
  return typeof e == "string" ? (t) => t.split(e).length % 2 === 0 : e;
}
o(Je, "getFencer");

// ../node_modules/comment-parser/es6/parser/source-parser.js
function N({ startLine: e = 0, markers: t = f } = {}) {
  let r = null, n = e;
  return /* @__PURE__ */ o(function(i) {
    let p = i, a = F();
    if ([a.lineEnd, p] = G(p), [a.start, p] = y(p), r === null && p.startsWith(t.start) && !p.startsWith(t.nostart) && (r = [], a.delimiter =
    p.slice(0, t.start.length), p = p.slice(t.start.length), [a.postDelimiter, p] = y(p)), r === null)
      return n++, null;
    let c = p.trimRight().endsWith(t.end);
    if (a.delimiter === "" && p.startsWith(t.delim) && !p.startsWith(t.end) && (a.delimiter = t.delim, p = p.slice(t.delim.length), [a.postDelimiter,
    p] = y(p)), c) {
      let u = p.trimRight();
      a.end = p.slice(u.length - t.end.length), p = u.slice(0, -t.end.length);
    }
    if (a.description = p, r.push({ number: n, source: i, tokens: a }), n++, c) {
      let u = r.slice();
      return r = null, u;
    }
    return null;
  }, "parseSource");
}
o(N, "getParser");

// ../node_modules/comment-parser/es6/parser/spec-parser.js
function R({ tokenizers: e }) {
  return /* @__PURE__ */ o(function(r) {
    var n;
    let s = X({ source: r });
    for (let i of e)
      if (s = i(s), !((n = s.problems[s.problems.length - 1]) === null || n === void 0) && n.critical)
        break;
    return s;
  }, "parseSpec");
}
o(R, "getParser");

// ../node_modules/comment-parser/es6/parser/tokenizers/tag.js
function P() {
  return (e) => {
    let { tokens: t } = e.source[0], r = t.description.match(/\s*(@(\S+))(\s*)/);
    return r === null ? (e.problems.push({
      code: "spec:tag:prefix",
      message: 'tag should start with "@" symbol',
      line: e.source[0].number,
      critical: !0
    }), e) : (t.tag = r[1], t.postTag = r[3], t.description = t.description.slice(r[0].length), e.tag = r[2], e);
  };
}
o(P, "tagTokenizer");

// ../node_modules/comment-parser/es6/parser/tokenizers/type.js
function S(e = "compact") {
  let t = Re(e);
  return (r) => {
    let n = 0, s = [];
    for (let [a, { tokens: c }] of r.source.entries()) {
      let u = "";
      if (a === 0 && c.description[0] !== "{")
        return r;
      for (let m of c.description)
        if (m === "{" && n++, m === "}" && n--, u += m, n === 0)
          break;
      if (s.push([c, u]), n === 0)
        break;
    }
    if (n !== 0)
      return r.problems.push({
        code: "spec:type:unpaired-curlies",
        message: "unpaired curlies",
        line: r.source[0].number,
        critical: !0
      }), r;
    let i = [], p = s[0][0].postDelimiter.length;
    for (let [a, [c, u]] of s.entries())
      c.type = u, a > 0 && (c.type = c.postDelimiter.slice(p) + u, c.postDelimiter = c.postDelimiter.slice(0, p)), [c.postType, c.description] =
      y(c.description.slice(u.length)), i.push(c.type);
    return i[0] = i[0].slice(1), i[i.length - 1] = i[i.length - 1].slice(0, -1), r.type = t(i), r;
  };
}
o(S, "typeTokenizer");
var Ne = /* @__PURE__ */ o((e) => e.trim(), "trim");
function Re(e) {
  return e === "compact" ? (t) => t.map(Ne).join("") : e === "preserve" ? (t) => t.join(`
`) : e;
}
o(Re, "getJoiner");

// ../node_modules/comment-parser/es6/parser/tokenizers/name.js
var Ae = /* @__PURE__ */ o((e) => e && e.startsWith('"') && e.endsWith('"'), "isQuoted");
function O() {
  let e = /* @__PURE__ */ o((t, { tokens: r }, n) => r.type === "" ? t : n, "typeEnd");
  return (t) => {
    let { tokens: r } = t.source[t.source.reduce(e, 0)], n = r.description.trimLeft(), s = n.split('"');
    if (s.length > 1 && s[0] === "" && s.length % 2 === 1)
      return t.name = s[1], r.name = `"${s[1]}"`, [r.postName, r.description] = y(n.slice(r.name.length)), t;
    let i = 0, p = "", a = !1, c;
    for (let m of n) {
      if (i === 0 && k(m))
        break;
      m === "[" && i++, m === "]" && i--, p += m;
    }
    if (i !== 0)
      return t.problems.push({
        code: "spec:name:unpaired-brackets",
        message: "unpaired brackets",
        line: t.source[0].number,
        critical: !0
      }), t;
    let u = p;
    if (p[0] === "[" && p[p.length - 1] === "]") {
      a = !0, p = p.slice(1, -1);
      let m = p.split("=");
      if (p = m[0].trim(), m[1] !== void 0 && (c = m.slice(1).join("=").trim()), p === "")
        return t.problems.push({
          code: "spec:name:empty-name",
          message: "empty name",
          line: t.source[0].number,
          critical: !0
        }), t;
      if (c === "")
        return t.problems.push({
          code: "spec:name:empty-default",
          message: "empty default value",
          line: t.source[0].number,
          critical: !0
        }), t;
      if (!Ae(c) && /=(?!>)/.test(c))
        return t.problems.push({
          code: "spec:name:invalid-default",
          message: "invalid default value syntax",
          line: t.source[0].number,
          critical: !0
        }), t;
    }
    return t.optional = a, t.name = p, r.name = u, c !== void 0 && (t.default = c), [r.postName, r.description] = y(n.slice(r.name.length)),
    t;
  };
}
o(O, "nameTokenizer");

// ../node_modules/comment-parser/es6/parser/tokenizers/description.js
function v(e = "compact", t = f) {
  let r = A(e);
  return (n) => (n.description = r(n.source, t), n);
}
o(v, "descriptionTokenizer");
function A(e) {
  return e === "compact" ? Ve : e === "preserve" ? Be : e;
}
o(A, "getJoiner");
function Ve(e, t = f) {
  return e.map(({ tokens: { description: r } }) => r.trim()).filter((r) => r !== "").join(" ");
}
o(Ve, "compactJoiner");
var Ce = /* @__PURE__ */ o((e, { tokens: t }, r) => t.type === "" ? e : r, "lineNo"), _e = /* @__PURE__ */ o(({ tokens: e }) => (e.delimiter ===
"" ? e.start : e.postDelimiter.slice(1)) + e.description, "getDescription");
function Be(e, t = f) {
  if (e.length === 0)
    return "";
  e[0].tokens.description === "" && e[0].tokens.delimiter === t.start && (e = e.slice(1));
  let r = e[e.length - 1];
  return r !== void 0 && r.tokens.description === "" && r.tokens.end.endsWith(t.end) && (e = e.slice(0, -1)), e = e.slice(e.reduce(Ce, 0)), e.
  map(_e).join(`
`);
}
o(Be, "preserveJoiner");

// ../node_modules/comment-parser/es6/parser/index.js
function V({ startLine: e = 0, fence: t = "```", spacing: r = "compact", markers: n = f, tokenizers: s = [
  P(),
  S(r),
  O(),
  v(r)
] } = {}) {
  if (e < 0 || e % 1 > 0)
    throw new Error("Invalid startLine");
  let i = N({ startLine: e, markers: n }), p = J({ fence: t }), a = R({ tokenizers: s }), c = A(r);
  return function(u) {
    let m = [];
    for (let ge of K(u)) {
      let E = i(ge);
      if (E === null)
        continue;
      let L = p(E), U = L.slice(1).map(a);
      m.push({
        description: c(L[0], n),
        tags: U,
        source: E,
        problems: U.reduce((de, xe) => de.concat(xe.problems), [])
      });
    }
    return m;
  };
}
o(V, "getParser");

// ../node_modules/comment-parser/es6/stringifier/index.js
function Ie(e) {
  return e.start + e.delimiter + e.postDelimiter + e.tag + e.postTag + e.type + e.postType + e.name + e.postName + e.description + e.end + e.
  lineEnd;
}
o(Ie, "join");
function C() {
  return (e) => e.source.map(({ tokens: t }) => Ie(t)).join(`
`);
}
o(C, "getStringifier");

// ../node_modules/comment-parser/es6/stringifier/inspect.js
var Le = {
  line: 0,
  start: 0,
  delimiter: 0,
  postDelimiter: 0,
  tag: 0,
  postTag: 0,
  name: 0,
  postName: 0,
  type: 0,
  postType: 0,
  description: 0,
  end: 0,
  lineEnd: 0
};
var Mr = Object.keys(Le);

// ../node_modules/comment-parser/es6/index.js
function H(e, t = {}) {
  return V(t)(e);
}
o(H, "parse");
var lo = C();

// src/docs-tools/argTypes/jsdocParser.ts

function ze(e) {
  return e != null && e.includes("@");
}
o(ze, "containsJsDoc");
function $e(e) {
  let n = `/**
` + (e ?? "").split(`
`).map((i) => ` * ${i}`).join(`
`) + `
*/`, s = H(n, {
    spacing: "preserve"
  });
  if (!s || s.length === 0)
    throw new Error("Cannot parse JSDoc tags.");
  return s[0];
}
o($e, "parse");
var Ye = {
  tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"]
}, Q = /* @__PURE__ */ o((e, t = Ye) => {
  if (!ze(e))
    return {
      includesJsDoc: !1,
      ignore: !1
    };
  let r = $e(e), n = qe(r, t.tags);
  return n.ignore ? {
    includesJsDoc: !0,
    ignore: !0
  } : {
    includesJsDoc: !0,
    ignore: !1,
    // Always use the parsed description to ensure JSDoc is removed from the description.
    description: r.description.trim(),
    extractedTags: n
  };
}, "parseJsDoc");
function qe(e, t) {
  let r = {
    params: null,
    deprecated: null,
    returns: null,
    ignore: !1
  };
  for (let n of e.tags)
    if (!(t !== void 0 && !t.includes(n.tag)))
      if (n.tag === "ignore") {
        r.ignore = !0;
        break;
      } else
        switch (n.tag) {
          // arg & argument are aliases for param.
          case "param":
          case "arg":
          case "argument": {
            let s = Ke(n);
            s != null && (r.params == null && (r.params = []), r.params.push(s));
            break;
          }
          case "deprecated": {
            let s = Xe(n);
            s != null && (r.deprecated = s);
            break;
          }
          case "returns": {
            let s = He(n);
            s != null && (r.returns = s);
            break;
          }
          default:
            break;
        }
  return r;
}
o(qe, "extractJsDocTags");
function Ge(e) {
  return e.replace(/[\.-]$/, "");
}
o(Ge, "normaliseParamName");
function Ke(e) {
  if (!e.name || e.name === "-")
    return null;
  let t = te(e.type);
  return {
    name: e.name,
    type: t,
    description: ee(e.description),
    getPrettyName: /* @__PURE__ */ o(() => Ge(e.name), "getPrettyName"),
    getTypeName: /* @__PURE__ */ o(() => t ? re(t) : null, "getTypeName")
  };
}
o(Ke, "extractParam");
function Xe(e) {
  return e.name ? Z(e.name, e.description) : null;
}
o(Xe, "extractDeprecated");
function Z(e, t) {
  let r = e === "" ? t : `${e} ${t}`;
  return ee(r);
}
o(Z, "joinNameAndDescription");
function ee(e) {
  let t = e.replace(/^- /g, "").trim();
  return t === "" ? null : t;
}
o(ee, "normaliseDescription");
function He(e) {
  let t = te(e.type);
  return t ? {
    type: t,
    description: Z(e.name, e.description),
    getTypeName: /* @__PURE__ */ o(() => re(t), "getTypeName")
  } : null;
}
o(He, "extractReturns");
var g = (0,jsdoc_type_pratt_parser__WEBPACK_IMPORTED_MODULE_1__.stringifyRules)(), Qe = g.JsdocTypeObject;
g.JsdocTypeAny = () => "any";
g.JsdocTypeObject = (e, t) => `(${Qe(e, t)})`;
g.JsdocTypeOptional = (e, t) => t(e.element);
g.JsdocTypeNullable = (e, t) => t(e.element);
g.JsdocTypeNotNullable = (e, t) => t(e.element);
g.JsdocTypeUnion = (e, t) => e.elements.map(t).join("|");
function te(e) {
  try {
    return (0,jsdoc_type_pratt_parser__WEBPACK_IMPORTED_MODULE_1__.parse)(e, "typescript");
  } catch {
    return null;
  }
}
o(te, "extractType");
function re(e) {
  return (0,jsdoc_type_pratt_parser__WEBPACK_IMPORTED_MODULE_1__.transform)(g, e);
}
o(re, "extractTypeName");

// src/docs-tools/argTypes/utils.ts
var ho = 90, bo = 50;
function B(e) {
  return e.length > 90;
}
o(B, "isTooLongForTypeSummary");
function oe(e) {
  return e.length > 50;
}
o(oe, "isTooLongForDefaultValueSummary");
function l(e, t) {
  return e === t ? { summary: e } : { summary: e, detail: t };
}
o(l, "createSummaryValue");
var Po = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => e.replace(/\\r\\n/g, "\\n"), "normalizeNewlines")));

// src/docs-tools/argTypes/docgen/flow/createDefaultValue.ts
function ne(e, t) {
  if (e != null) {
    let { value: r } = e;
    if (!T(r))
      return oe(r) ? l(t?.name, r) : l(r);
  }
  return null;
}
o(ne, "createDefaultValue");

// src/docs-tools/argTypes/docgen/flow/createType.ts
function se({ name: e, value: t, elements: r, raw: n }) {
  return t ?? (r != null ? r.map(se).join(" | ") : n ?? e);
}
o(se, "generateUnionElement");
function Ze({ name: e, raw: t, elements: r }) {
  return r != null ? l(r.map(se).join(" | ")) : t != null ? l(t.replace(/^\|\s*/, "")) : l(e);
}
o(Ze, "generateUnion");
function et({ type: e, raw: t }) {
  return t != null ? l(t) : l(e);
}
o(et, "generateFuncSignature");
function tt({ type: e, raw: t }) {
  return t != null ? B(t) ? l(e, t) : l(t) : l(e);
}
o(tt, "generateObjectSignature");
function rt(e) {
  let { type: t } = e;
  return t === "object" ? tt(e) : et(e);
}
o(rt, "generateSignature");
function ot({ name: e, raw: t }) {
  return t != null ? B(t) ? l(e, t) : l(t) : l(e);
}
o(ot, "generateDefault");
function ie(e) {
  if (e == null)
    return null;
  switch (e.name) {
    case "union":
      return Ze(e);
    case "signature":
      return rt(e);
    default:
      return ot(e);
  }
}
o(ie, "createType");

// src/docs-tools/argTypes/docgen/flow/createPropDef.ts
var pe = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e, t) => {
  let { flowType: r, description: n, required: s, defaultValue: i } = t;
  return {
    name: e,
    type: ie(r),
    required: s,
    description: n,
    defaultValue: ne(i ?? null, r ?? null)
  };
}, "createFlowPropDef")));

// src/docs-tools/argTypes/docgen/typeScript/createDefaultValue.ts
function ae({ defaultValue: e }) {
  if (e != null) {
    let { value: t } = e;
    if (!T(t))
      return l(t);
  }
  return null;
}
o(ae, "createDefaultValue");

// src/docs-tools/argTypes/docgen/typeScript/createType.ts
function ce({ tsType: e, required: t }) {
  if (e == null)
    return null;
  let r = e.name;
  return t || (r = r.replace(" | undefined", "")), l(
    ["Array", "Record", "signature"].includes(e.name) ? e.raw : r
  );
}
o(ce, "createType");

// src/docs-tools/argTypes/docgen/typeScript/createPropDef.ts
var le = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e, t) => {
  let { description: r, required: n } = t;
  return {
    name: e,
    type: ce(t),
    required: n,
    description: r,
    defaultValue: ae(t)
  };
}, "createTsPropDef")));

// src/docs-tools/argTypes/docgen/createPropDef.ts
function nt(e) {
  return e != null ? l(e.name) : null;
}
o(nt, "createType");
function st(e) {
  let { computed: t, func: r } = e;
  return typeof t > "u" && typeof r > "u";
}
o(st, "isReactDocgenTypescript");
function it(e) {
  return e ? e.name === "string" ? !0 : e.name === "enum" ? Array.isArray(e.value) && e.value.every(
    ({ value: t }) => typeof t == "string" && t[0] === '"' && t[t.length - 1] === '"'
  ) : !1 : !1;
}
o(it, "isStringValued");
function pt(e, t) {
  if (e != null) {
    let { value: r } = e;
    if (!T(r))
      return st(e) && it(t) ? l(JSON.stringify(r)) : l(r);
  }
  return null;
}
o(pt, "createDefaultValue");
function ue(e, t, r) {
  let { description: n, required: s, defaultValue: i } = r;
  return {
    name: e,
    type: nt(t),
    required: s,
    description: n,
    defaultValue: pt(i, t)
  };
}
o(ue, "createBasicPropDef");
function w(e, t) {
  if (t?.includesJsDoc) {
    let { description: r, extractedTags: n } = t;
    r != null && (e.description = t.description);
    let s = {
      ...n,
      params: n?.params?.map(
        (i) => ({
          name: i.getPrettyName(),
          description: i.description
        })
      )
    };
    Object.values(s).filter(Boolean).length > 0 && (e.jsDocTags = s);
  }
  return e;
}
o(w, "applyJsDocResult");
var at = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e, t, r) => {
  let n = ue(e, t.type, t);
  return n.sbType = b(t), w(n, r);
}, "javaScriptFactory"))), ct = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e, t, r) => {
  let n = le(e, t);
  return n.sbType = b(t), w(n, r);
}, "tsFactory"))), lt = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e, t, r) => {
  let n = pe(e, t);
  return n.sbType = b(t), w(n, r);
}, "flowFactory"))), ut = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e, t, r) => {
  let n = ue(e, { name: "unknown" }, t);
  return w(n, r);
}, "unknownFactory"))), I = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => {
  switch (e) {
    case "JavaScript":
      return at;
    case "TypeScript":
      return ct;
    case "Flow":
      return lt;
    default:
      return ut;
  }
}, "getPropDefFactory")));

// src/docs-tools/argTypes/docgen/extractDocgenProps.ts
var me = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => e.type != null ? "JavaScript" : e.flowType != null ? "Flow" : e.tsType != null ? "TypeScript" : "Unknown",
"getTypeSystem"))), mt = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => {
  let t = me(e[0]), r = I(t);
  return e.map((n) => {
    let s = n;
    return n.type?.elements && (s = {
      ...n,
      type: {
        ...n.type,
        value: n.type.elements
      }
    }), fe(s.name, s, t, r);
  });
}, "extractComponentSectionArray"))), ft = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => {
  let t = Object.keys(e), r = me(e[t[0]]), n = I(r);
  return t.map((s) => {
    let i = e[s];
    return i != null ? fe(s, i, r, n) : null;
  }).filter(Boolean);
}, "extractComponentSectionObject"))), on = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e, t) => {
  let r = Y(e, t);
  return $(r) ? Array.isArray(r) ? mt(r) : ft(r) : [];
}, "extractComponentProps")));
function fe(e, t, r, n) {
  let s = Q(t.description);
  return s.includesJsDoc && s.ignore ? null : {
    propDef: n(e, t, s),
    jsDocTags: s.extractedTags,
    docgenInfo: t,
    typeSystem: r
  };
}
o(fe, "extractProp");
function nn(e) {
  return e != null ? q(e) : "";
}
o(nn, "extractComponentDescription");

// src/docs-tools/argTypes/enhanceArgTypes.ts

var cn = /* @__PURE__ */ o((e) => {
  let {
    component: t,
    argTypes: r,
    parameters: { docs: n = {} }
  } = e, { extractArgTypes: s } = n, i = s && t ? s(t) : {};
  return i ? (0,_storybook_core_preview_api__WEBPACK_IMPORTED_MODULE_2__.combineParameters)(i, r) : r;
}, "enhanceArgTypes");

// src/docs-tools/shared.ts
var ye = "storybook/docs", mn = (/* unused pure expression or super */ null && (`${ye}/panel`)), fn = "docs", yn = `${ye}/snippet-rendered`, gt = /* @__PURE__ */ ((n) => (n.AUTO = "auto", n.
CODE = "code", n.DYNAMIC = "dynamic", n))(gt || {});

// src/docs-tools/hasDocsOrControls.ts
var dt = /(addons\/|addon-|addon-essentials\/)(docs|controls)/, dn = /* @__PURE__ */ (/* unused pure expression or super */ null && (o((e) => e.presetsList?.some((t) => dt.test(t.name)), "\
hasDocsOrControls")));



/***/ }),

/***/ "./node_modules/@storybook/html/dist/chunk-CEH6MNVV.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ __export)
/* harmony export */ });
var __defProp=Object.defineProperty;var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0});};




/***/ }),

/***/ "./node_modules/@storybook/html/dist/entry-preview-docs.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   argTypesEnhancers: () => (/* binding */ argTypesEnhancers),
/* harmony export */   decorators: () => (/* binding */ decorators),
/* harmony export */   parameters: () => (/* binding */ parameters)
/* harmony export */ });
/* harmony import */ var _chunk_CEH6MNVV_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@storybook/html/dist/chunk-CEH6MNVV.mjs");
/* harmony import */ var storybook_internal_docs_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@storybook/core/dist/docs-tools/index.js");
/* harmony import */ var storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("storybook/internal/preview-api");
/* harmony import */ var storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_1__);




function skipSourceRender(context){let sourceParams=context?.parameters.docs?.source,isArgsStory=context?.parameters.__isArgsStory;return sourceParams?.type===storybook_internal_docs_tools__WEBPACK_IMPORTED_MODULE_2__/* .SourceType */ .Y1.DYNAMIC?!1:!isArgsStory||sourceParams?.code||sourceParams?.type===storybook_internal_docs_tools__WEBPACK_IMPORTED_MODULE_2__/* .SourceType */ .Y1.CODE}var sourceDecorator=(storyFn,context)=>{let story=storyFn(),renderedForSource=context?.parameters.docs?.source?.excludeDecorators?context.originalStoryFn(context.args,context):story,source;return skipSourceRender(context)||(typeof renderedForSource=="string"?source=renderedForSource:renderedForSource instanceof Element&&(source=renderedForSource.outerHTML)),(0,storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{let{id,unmappedArgs}=context;source&&storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.getChannel().emit(storybook_internal_docs_tools__WEBPACK_IMPORTED_MODULE_2__/* .SNIPPET_RENDERED */ .Op,{id,args:unmappedArgs,source});}),story};var decorators=[sourceDecorator],parameters={docs:{story:{inline:!0},source:{type:storybook_internal_docs_tools__WEBPACK_IMPORTED_MODULE_2__/* .SourceType */ .Y1.DYNAMIC,language:"html",code:void 0,excludeDecorators:void 0}}},argTypesEnhancers=[storybook_internal_docs_tools__WEBPACK_IMPORTED_MODULE_2__/* .enhanceArgTypes */ .C2];




/***/ }),

/***/ "./node_modules/@storybook/html/dist/entry-preview.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  parameters: () => (/* reexport */ parameters),
  render: () => (/* reexport */ render),
  renderToCanvas: () => (/* reexport */ renderToCanvas)
});

// EXTERNAL MODULE: ./node_modules/@storybook/html/dist/chunk-CEH6MNVV.mjs
var chunk_CEH6MNVV = __webpack_require__("./node_modules/@storybook/html/dist/chunk-CEH6MNVV.mjs");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("storybook/internal/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
// EXTERNAL MODULE: ./node_modules/ts-dedent/esm/index.js
var esm = __webpack_require__("./node_modules/ts-dedent/esm/index.js");
;// ./node_modules/@storybook/html/dist/chunk-EVBQXENU.mjs





var entry_preview_exports={};(0,chunk_CEH6MNVV/* __export */.V)(entry_preview_exports,{parameters:()=>parameters,render:()=>render,renderToCanvas:()=>renderToCanvas});var {Node}=external_STORYBOOK_MODULE_GLOBAL_.global,render=(args,context)=>{let{id,component:Component}=context;if(typeof Component=="string"){let output=Component;return Object.keys(args).forEach(key=>{output=output.replace(`{{${key}}}`,args[key]);}),output}if(Component instanceof HTMLElement){let output=Component.cloneNode(!0);return Object.keys(args).forEach(key=>{output.setAttribute(key,typeof args[key]=="string"?args[key]:JSON.stringify(args[key]));}),output}if(typeof Component=="function")return Component(args,context);throw console.warn((0,esm/* dedent */.T)`
    Storybook's HTML renderer only supports rendering DOM elements and strings.
    Received: ${Component}
  `),new Error(`Unable to render story ${id}`)};function renderToCanvas({storyFn,kind,name,showMain,showError,forceRemount},canvasElement){let element=storyFn();if(showMain(),typeof element=="string")canvasElement.innerHTML=element,(0,external_STORYBOOK_MODULE_PREVIEW_API_.simulatePageLoad)(canvasElement);else if(element instanceof Node){if(canvasElement.firstChild===element&&forceRemount===!1)return;canvasElement.innerHTML="",canvasElement.appendChild(element),(0,external_STORYBOOK_MODULE_PREVIEW_API_.simulateDOMContentLoaded)();}else showError({title:`Expecting an HTML snippet or DOM node from the story: "${name}" of "${kind}".`,description:(0,esm/* dedent */.T)`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `});}var parameters={renderer:"html"};



;// ./node_modules/@storybook/html/dist/entry-preview.mjs




/***/ }),

/***/ "./node_modules/jsdoc-type-pratt-parser/dist/index.js":
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    function tokenToString(token) {
        if (token.text !== undefined && token.text !== '') {
            return `'${token.type}' with value '${token.text}'`;
        }
        else {
            return `'${token.type}'`;
        }
    }
    class NoParsletFoundError extends Error {
        constructor(token) {
            super(`No parslet found for token: ${tokenToString(token)}`);
            this.token = token;
            Object.setPrototypeOf(this, NoParsletFoundError.prototype);
        }
        getToken() {
            return this.token;
        }
    }
    class EarlyEndOfParseError extends Error {
        constructor(token) {
            super(`The parsing ended early. The next token was: ${tokenToString(token)}`);
            this.token = token;
            Object.setPrototypeOf(this, EarlyEndOfParseError.prototype);
        }
        getToken() {
            return this.token;
        }
    }
    class UnexpectedTypeError extends Error {
        constructor(result, message) {
            let error = `Unexpected type: '${result.type}'.`;
            if (message !== undefined) {
                error += ` Message: ${message}`;
            }
            super(error);
            Object.setPrototypeOf(this, UnexpectedTypeError.prototype);
        }
    }
    // export class UnexpectedTokenError extends Error {
    //   private expected: Token
    //   private found: Token
    //
    //   constructor (expected: Token, found: Token) {
    //     super(`The parsing ended early. The next token was: ${tokenToString(token)}`)
    //
    //     this.token = token
    //
    //     Object.setPrototypeOf(this, EarlyEndOfParseError.prototype)
    //   }
    //
    //   getToken() {
    //     return this.token
    //   }
    // }

    function makePunctuationRule(type) {
        return text => {
            if (text.startsWith(type)) {
                return { type, text: type };
            }
            else {
                return null;
            }
        };
    }
    function getQuoted(text) {
        let position = 0;
        let char;
        const mark = text[0];
        let escaped = false;
        if (mark !== '\'' && mark !== '"') {
            return null;
        }
        while (position < text.length) {
            position++;
            char = text[position];
            if (!escaped && char === mark) {
                position++;
                break;
            }
            escaped = !escaped && char === '\\';
        }
        if (char !== mark) {
            throw new Error('Unterminated String');
        }
        return text.slice(0, position);
    }
    const identifierStartRegex = /[$_\p{ID_Start}]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u;
    // A hyphen is not technically allowed, but to keep it liberal for now,
    //  adding it here
    const identifierContinueRegex = /[$\-\p{ID_Continue}\u200C\u200D]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u;
    function getIdentifier(text) {
        let char = text[0];
        if (!identifierStartRegex.test(char)) {
            return null;
        }
        let position = 1;
        do {
            char = text[position];
            if (!identifierContinueRegex.test(char)) {
                break;
            }
            position++;
        } while (position < text.length);
        return text.slice(0, position);
    }
    // we are a bit more liberal than TypeScript here and allow `NaN`, `Infinity` and `-Infinity`
    const numberRegex = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/;
    function getNumber(text) {
        var _a, _b;
        return (_b = (_a = numberRegex.exec(text)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    }
    const identifierRule = text => {
        const value = getIdentifier(text);
        if (value == null) {
            return null;
        }
        return {
            type: 'Identifier',
            text: value
        };
    };
    function makeKeyWordRule(type) {
        return text => {
            if (!text.startsWith(type)) {
                return null;
            }
            const prepends = text[type.length];
            if (prepends !== undefined && identifierContinueRegex.test(prepends)) {
                return null;
            }
            return {
                type,
                text: type
            };
        };
    }
    const stringValueRule = text => {
        const value = getQuoted(text);
        if (value == null) {
            return null;
        }
        return {
            type: 'StringValue',
            text: value
        };
    };
    const eofRule = text => {
        if (text.length > 0) {
            return null;
        }
        return {
            type: 'EOF',
            text: ''
        };
    };
    const numberRule = text => {
        const value = getNumber(text);
        if (value === null) {
            return null;
        }
        return {
            type: 'Number',
            text: value
        };
    };
    const rules = [
        eofRule,
        makePunctuationRule('=>'),
        makePunctuationRule('('),
        makePunctuationRule(')'),
        makePunctuationRule('{'),
        makePunctuationRule('}'),
        makePunctuationRule('['),
        makePunctuationRule(']'),
        makePunctuationRule('|'),
        makePunctuationRule('&'),
        makePunctuationRule('<'),
        makePunctuationRule('>'),
        makePunctuationRule(','),
        makePunctuationRule(';'),
        makePunctuationRule('*'),
        makePunctuationRule('?'),
        makePunctuationRule('!'),
        makePunctuationRule('='),
        makePunctuationRule(':'),
        makePunctuationRule('...'),
        makePunctuationRule('.'),
        makePunctuationRule('#'),
        makePunctuationRule('~'),
        makePunctuationRule('/'),
        makePunctuationRule('@'),
        makeKeyWordRule('undefined'),
        makeKeyWordRule('null'),
        makeKeyWordRule('function'),
        makeKeyWordRule('this'),
        makeKeyWordRule('new'),
        makeKeyWordRule('module'),
        makeKeyWordRule('event'),
        makeKeyWordRule('external'),
        makeKeyWordRule('typeof'),
        makeKeyWordRule('keyof'),
        makeKeyWordRule('readonly'),
        makeKeyWordRule('import'),
        makeKeyWordRule('is'),
        makeKeyWordRule('in'),
        makeKeyWordRule('asserts'),
        numberRule,
        identifierRule,
        stringValueRule
    ];
    const breakingWhitespaceRegex = /^\s*\n\s*/;
    class Lexer {
        static create(text) {
            const current = this.read(text);
            text = current.text;
            const next = this.read(text);
            text = next.text;
            return new Lexer(text, undefined, current.token, next.token);
        }
        constructor(text, previous, current, next) {
            this.text = '';
            this.text = text;
            this.previous = previous;
            this.current = current;
            this.next = next;
        }
        static read(text, startOfLine = false) {
            startOfLine = startOfLine || breakingWhitespaceRegex.test(text);
            text = text.trim();
            for (const rule of rules) {
                const partial = rule(text);
                if (partial !== null) {
                    const token = Object.assign(Object.assign({}, partial), { startOfLine });
                    text = text.slice(token.text.length);
                    return { text, token };
                }
            }
            throw new Error('Unexpected Token ' + text);
        }
        advance() {
            const next = Lexer.read(this.text);
            return new Lexer(next.text, this.current, this.next, next.token);
        }
    }

    /**
     * Throws an error if the provided result is not a {@link RootResult}
     */
    function assertRootResult(result) {
        if (result === undefined) {
            throw new Error('Unexpected undefined');
        }
        if (result.type === 'JsdocTypeKeyValue' || result.type === 'JsdocTypeParameterList' ||
            result.type === 'JsdocTypeProperty' || result.type === 'JsdocTypeReadonlyProperty' ||
            result.type === 'JsdocTypeObjectField' || result.type === 'JsdocTypeJsdocObjectField' ||
            result.type === 'JsdocTypeIndexSignature' || result.type === 'JsdocTypeMappedType') {
            throw new UnexpectedTypeError(result);
        }
        return result;
    }
    function assertPlainKeyValueOrRootResult(result) {
        if (result.type === 'JsdocTypeKeyValue') {
            return assertPlainKeyValueResult(result);
        }
        return assertRootResult(result);
    }
    function assertPlainKeyValueOrNameResult(result) {
        if (result.type === 'JsdocTypeName') {
            return result;
        }
        return assertPlainKeyValueResult(result);
    }
    function assertPlainKeyValueResult(result) {
        if (result.type !== 'JsdocTypeKeyValue') {
            throw new UnexpectedTypeError(result);
        }
        return result;
    }
    function assertNumberOrVariadicNameResult(result) {
        var _a;
        if (result.type === 'JsdocTypeVariadic') {
            if (((_a = result.element) === null || _a === void 0 ? void 0 : _a.type) === 'JsdocTypeName') {
                return result;
            }
            throw new UnexpectedTypeError(result);
        }
        if (result.type !== 'JsdocTypeNumber' && result.type !== 'JsdocTypeName') {
            throw new UnexpectedTypeError(result);
        }
        return result;
    }
    function isSquaredProperty(result) {
        return result.type === 'JsdocTypeIndexSignature' || result.type === 'JsdocTypeMappedType';
    }

    // higher precedence = higher importance
    var Precedence;
    (function (Precedence) {
        Precedence[Precedence["ALL"] = 0] = "ALL";
        Precedence[Precedence["PARAMETER_LIST"] = 1] = "PARAMETER_LIST";
        Precedence[Precedence["OBJECT"] = 2] = "OBJECT";
        Precedence[Precedence["KEY_VALUE"] = 3] = "KEY_VALUE";
        Precedence[Precedence["INDEX_BRACKETS"] = 4] = "INDEX_BRACKETS";
        Precedence[Precedence["UNION"] = 5] = "UNION";
        Precedence[Precedence["INTERSECTION"] = 6] = "INTERSECTION";
        Precedence[Precedence["PREFIX"] = 7] = "PREFIX";
        Precedence[Precedence["INFIX"] = 8] = "INFIX";
        Precedence[Precedence["TUPLE"] = 9] = "TUPLE";
        Precedence[Precedence["SYMBOL"] = 10] = "SYMBOL";
        Precedence[Precedence["OPTIONAL"] = 11] = "OPTIONAL";
        Precedence[Precedence["NULLABLE"] = 12] = "NULLABLE";
        Precedence[Precedence["KEY_OF_TYPE_OF"] = 13] = "KEY_OF_TYPE_OF";
        Precedence[Precedence["FUNCTION"] = 14] = "FUNCTION";
        Precedence[Precedence["ARROW"] = 15] = "ARROW";
        Precedence[Precedence["ARRAY_BRACKETS"] = 16] = "ARRAY_BRACKETS";
        Precedence[Precedence["GENERIC"] = 17] = "GENERIC";
        Precedence[Precedence["NAME_PATH"] = 18] = "NAME_PATH";
        Precedence[Precedence["PARENTHESIS"] = 19] = "PARENTHESIS";
        Precedence[Precedence["SPECIAL_TYPES"] = 20] = "SPECIAL_TYPES";
    })(Precedence || (Precedence = {}));

    class Parser {
        constructor(grammar, textOrLexer, baseParser) {
            this.grammar = grammar;
            if (typeof textOrLexer === 'string') {
                this._lexer = Lexer.create(textOrLexer);
            }
            else {
                this._lexer = textOrLexer;
            }
            this.baseParser = baseParser;
        }
        get lexer() {
            return this._lexer;
        }
        /**
         * Parses a given string and throws an error if the parse ended before the end of the string.
         */
        parse() {
            const result = this.parseType(Precedence.ALL);
            if (this.lexer.current.type !== 'EOF') {
                throw new EarlyEndOfParseError(this.lexer.current);
            }
            return result;
        }
        /**
         * Parses with the current lexer and asserts that the result is a {@link RootResult}.
         */
        parseType(precedence) {
            return assertRootResult(this.parseIntermediateType(precedence));
        }
        /**
         * The main parsing function. First it tries to parse the current state in the prefix step, and then it continues
         * to parse the state in the infix step.
         */
        parseIntermediateType(precedence) {
            const result = this.tryParslets(null, precedence);
            if (result === null) {
                throw new NoParsletFoundError(this.lexer.current);
            }
            return this.parseInfixIntermediateType(result, precedence);
        }
        /**
         * In the infix parsing step the parser continues to parse the current state with all parslets until none returns
         * a result.
         */
        parseInfixIntermediateType(left, precedence) {
            let result = this.tryParslets(left, precedence);
            while (result !== null) {
                left = result;
                result = this.tryParslets(left, precedence);
            }
            return left;
        }
        /**
         * Tries to parse the current state with all parslets in the grammar and returns the first non null result.
         */
        tryParslets(left, precedence) {
            for (const parslet of this.grammar) {
                const result = parslet(this, precedence, left);
                if (result !== null) {
                    return result;
                }
            }
            return null;
        }
        /**
         * If the given type equals the current type of the {@link Lexer} advance the lexer. Return true if the lexer was
         * advanced.
         */
        consume(types) {
            if (!Array.isArray(types)) {
                types = [types];
            }
            if (types.includes(this.lexer.current.type)) {
                this._lexer = this.lexer.advance();
                return true;
            }
            else {
                return false;
            }
        }
        acceptLexerState(parser) {
            this._lexer = parser.lexer;
        }
    }

    function isQuestionMarkUnknownType(next) {
        return next === 'EOF' || next === '|' || next === ',' || next === ')' || next === '>';
    }

    const nullableParslet = (parser, precedence, left) => {
        const type = parser.lexer.current.type;
        const next = parser.lexer.next.type;
        const accept = ((left == null) && type === '?' && !isQuestionMarkUnknownType(next)) ||
            ((left != null) && type === '?');
        if (!accept) {
            return null;
        }
        parser.consume('?');
        if (left == null) {
            return {
                type: 'JsdocTypeNullable',
                element: parser.parseType(Precedence.NULLABLE),
                meta: {
                    position: 'prefix'
                }
            };
        }
        else {
            return {
                type: 'JsdocTypeNullable',
                element: assertRootResult(left),
                meta: {
                    position: 'suffix'
                }
            };
        }
    };

    function composeParslet(options) {
        const parslet = (parser, curPrecedence, left) => {
            const type = parser.lexer.current.type;
            const next = parser.lexer.next.type;
            if (left === null) {
                if ('parsePrefix' in options) {
                    if (options.accept(type, next)) {
                        return options.parsePrefix(parser);
                    }
                }
            }
            else {
                if ('parseInfix' in options) {
                    if (options.precedence > curPrecedence && options.accept(type, next)) {
                        return options.parseInfix(parser, left);
                    }
                }
            }
            return null;
        };
        // for debugging
        Object.defineProperty(parslet, 'name', {
            value: options.name
        });
        return parslet;
    }

    const optionalParslet = composeParslet({
        name: 'optionalParslet',
        accept: type => type === '=',
        precedence: Precedence.OPTIONAL,
        parsePrefix: parser => {
            parser.consume('=');
            return {
                type: 'JsdocTypeOptional',
                element: parser.parseType(Precedence.OPTIONAL),
                meta: {
                    position: 'prefix'
                }
            };
        },
        parseInfix: (parser, left) => {
            parser.consume('=');
            return {
                type: 'JsdocTypeOptional',
                element: assertRootResult(left),
                meta: {
                    position: 'suffix'
                }
            };
        }
    });

    const numberParslet = composeParslet({
        name: 'numberParslet',
        accept: type => type === 'Number',
        parsePrefix: parser => {
            const value = parseFloat(parser.lexer.current.text);
            parser.consume('Number');
            return {
                type: 'JsdocTypeNumber',
                value
            };
        }
    });

    const parenthesisParslet = composeParslet({
        name: 'parenthesisParslet',
        accept: type => type === '(',
        parsePrefix: parser => {
            parser.consume('(');
            if (parser.consume(')')) {
                return {
                    type: 'JsdocTypeParameterList',
                    elements: []
                };
            }
            const result = parser.parseIntermediateType(Precedence.ALL);
            if (!parser.consume(')')) {
                throw new Error('Unterminated parenthesis');
            }
            if (result.type === 'JsdocTypeParameterList') {
                return result;
            }
            else if (result.type === 'JsdocTypeKeyValue') {
                return {
                    type: 'JsdocTypeParameterList',
                    elements: [result]
                };
            }
            return {
                type: 'JsdocTypeParenthesis',
                element: assertRootResult(result)
            };
        }
    });

    const specialTypesParslet = composeParslet({
        name: 'specialTypesParslet',
        accept: (type, next) => (type === '?' && isQuestionMarkUnknownType(next)) ||
            type === 'null' || type === 'undefined' || type === '*',
        parsePrefix: parser => {
            if (parser.consume('null')) {
                return {
                    type: 'JsdocTypeNull'
                };
            }
            if (parser.consume('undefined')) {
                return {
                    type: 'JsdocTypeUndefined'
                };
            }
            if (parser.consume('*')) {
                return {
                    type: 'JsdocTypeAny'
                };
            }
            if (parser.consume('?')) {
                return {
                    type: 'JsdocTypeUnknown'
                };
            }
            throw new Error('Unacceptable token: ' + parser.lexer.current.text);
        }
    });

    const notNullableParslet = composeParslet({
        name: 'notNullableParslet',
        accept: type => type === '!',
        precedence: Precedence.NULLABLE,
        parsePrefix: parser => {
            parser.consume('!');
            return {
                type: 'JsdocTypeNotNullable',
                element: parser.parseType(Precedence.NULLABLE),
                meta: {
                    position: 'prefix'
                }
            };
        },
        parseInfix: (parser, left) => {
            parser.consume('!');
            return {
                type: 'JsdocTypeNotNullable',
                element: assertRootResult(left),
                meta: {
                    position: 'suffix'
                }
            };
        }
    });

    function createParameterListParslet({ allowTrailingComma }) {
        return composeParslet({
            name: 'parameterListParslet',
            accept: type => type === ',',
            precedence: Precedence.PARAMETER_LIST,
            parseInfix: (parser, left) => {
                const elements = [
                    assertPlainKeyValueOrRootResult(left)
                ];
                parser.consume(',');
                do {
                    try {
                        const next = parser.parseIntermediateType(Precedence.PARAMETER_LIST);
                        elements.push(assertPlainKeyValueOrRootResult(next));
                    }
                    catch (e) {
                        if (allowTrailingComma && e instanceof NoParsletFoundError) {
                            break;
                        }
                        else {
                            throw e;
                        }
                    }
                } while (parser.consume(','));
                if (elements.length > 0 && elements.slice(0, -1).some(e => e.type === 'JsdocTypeVariadic')) {
                    throw new Error('Only the last parameter may be a rest parameter');
                }
                return {
                    type: 'JsdocTypeParameterList',
                    elements
                };
            }
        });
    }

    const genericParslet = composeParslet({
        name: 'genericParslet',
        accept: (type, next) => type === '<' || (type === '.' && next === '<'),
        precedence: Precedence.GENERIC,
        parseInfix: (parser, left) => {
            const dot = parser.consume('.');
            parser.consume('<');
            const objects = [];
            do {
                objects.push(parser.parseType(Precedence.PARAMETER_LIST));
            } while (parser.consume(','));
            if (!parser.consume('>')) {
                throw new Error('Unterminated generic parameter list');
            }
            return {
                type: 'JsdocTypeGeneric',
                left: assertRootResult(left),
                elements: objects,
                meta: {
                    brackets: 'angle',
                    dot
                }
            };
        }
    });

    const unionParslet = composeParslet({
        name: 'unionParslet',
        accept: type => type === '|',
        precedence: Precedence.UNION,
        parseInfix: (parser, left) => {
            parser.consume('|');
            const elements = [];
            do {
                elements.push(parser.parseType(Precedence.UNION));
            } while (parser.consume('|'));
            return {
                type: 'JsdocTypeUnion',
                elements: [assertRootResult(left), ...elements]
            };
        }
    });

    const baseGrammar = [
        nullableParslet,
        optionalParslet,
        numberParslet,
        parenthesisParslet,
        specialTypesParslet,
        notNullableParslet,
        createParameterListParslet({
            allowTrailingComma: true
        }),
        genericParslet,
        unionParslet,
        optionalParslet
    ];

    function createNamePathParslet({ allowSquareBracketsOnAnyType, allowJsdocNamePaths, pathGrammar }) {
        return function namePathParslet(parser, precedence, left) {
            if ((left == null) || precedence >= Precedence.NAME_PATH) {
                return null;
            }
            const type = parser.lexer.current.type;
            const next = parser.lexer.next.type;
            const accept = (type === '.' && next !== '<') ||
                (type === '[' && (allowSquareBracketsOnAnyType || left.type === 'JsdocTypeName')) ||
                (allowJsdocNamePaths && (type === '~' || type === '#'));
            if (!accept) {
                return null;
            }
            let pathType;
            let brackets = false;
            if (parser.consume('.')) {
                pathType = 'property';
            }
            else if (parser.consume('[')) {
                pathType = 'property-brackets';
                brackets = true;
            }
            else if (parser.consume('~')) {
                pathType = 'inner';
            }
            else {
                parser.consume('#');
                pathType = 'instance';
            }
            const pathParser = pathGrammar !== null
                ? new Parser(pathGrammar, parser.lexer, parser)
                : parser;
            const parsed = pathParser.parseIntermediateType(Precedence.NAME_PATH);
            parser.acceptLexerState(pathParser);
            let right;
            switch (parsed.type) {
                case 'JsdocTypeName':
                    right = {
                        type: 'JsdocTypeProperty',
                        value: parsed.value,
                        meta: {
                            quote: undefined
                        }
                    };
                    break;
                case 'JsdocTypeNumber':
                    right = {
                        type: 'JsdocTypeProperty',
                        value: parsed.value.toString(10),
                        meta: {
                            quote: undefined
                        }
                    };
                    break;
                case 'JsdocTypeStringValue':
                    right = {
                        type: 'JsdocTypeProperty',
                        value: parsed.value,
                        meta: {
                            quote: parsed.meta.quote
                        }
                    };
                    break;
                case 'JsdocTypeSpecialNamePath':
                    if (parsed.specialType === 'event') {
                        right = parsed;
                    }
                    else {
                        throw new UnexpectedTypeError(parsed, 'Type \'JsdocTypeSpecialNamePath\' is only allowed with specialType \'event\'');
                    }
                    break;
                default:
                    throw new UnexpectedTypeError(parsed, 'Expecting \'JsdocTypeName\', \'JsdocTypeNumber\', \'JsdocStringValue\' or \'JsdocTypeSpecialNamePath\'');
            }
            if (brackets && !parser.consume(']')) {
                const token = parser.lexer.current;
                throw new Error(`Unterminated square brackets. Next token is '${token.type}' ` +
                    `with text '${token.text}'`);
            }
            return {
                type: 'JsdocTypeNamePath',
                left: assertRootResult(left),
                right,
                pathType
            };
        };
    }

    function createNameParslet({ allowedAdditionalTokens }) {
        return composeParslet({
            name: 'nameParslet',
            accept: type => type === 'Identifier' || type === 'this' || type === 'new' || allowedAdditionalTokens.includes(type),
            parsePrefix: parser => {
                const { type, text } = parser.lexer.current;
                parser.consume(type);
                return {
                    type: 'JsdocTypeName',
                    value: text
                };
            }
        });
    }

    const stringValueParslet = composeParslet({
        name: 'stringValueParslet',
        accept: type => type === 'StringValue',
        parsePrefix: parser => {
            const text = parser.lexer.current.text;
            parser.consume('StringValue');
            return {
                type: 'JsdocTypeStringValue',
                value: text.slice(1, -1),
                meta: {
                    quote: text[0] === '\'' ? 'single' : 'double'
                }
            };
        }
    });

    function createSpecialNamePathParslet({ pathGrammar, allowedTypes }) {
        return composeParslet({
            name: 'specialNamePathParslet',
            accept: type => allowedTypes.includes(type),
            parsePrefix: parser => {
                const type = parser.lexer.current.type;
                parser.consume(type);
                if (!parser.consume(':')) {
                    return {
                        type: 'JsdocTypeName',
                        value: type
                    };
                }
                let result;
                let token = parser.lexer.current;
                if (parser.consume('StringValue')) {
                    result = {
                        type: 'JsdocTypeSpecialNamePath',
                        value: token.text.slice(1, -1),
                        specialType: type,
                        meta: {
                            quote: token.text[0] === '\'' ? 'single' : 'double'
                        }
                    };
                }
                else {
                    let value = '';
                    const allowed = ['Identifier', '@', '/'];
                    while (allowed.some(type => parser.consume(type))) {
                        value += token.text;
                        token = parser.lexer.current;
                    }
                    result = {
                        type: 'JsdocTypeSpecialNamePath',
                        value,
                        specialType: type,
                        meta: {
                            quote: undefined
                        }
                    };
                }
                const moduleParser = new Parser(pathGrammar, parser.lexer, parser);
                const moduleResult = moduleParser.parseInfixIntermediateType(result, Precedence.ALL);
                parser.acceptLexerState(moduleParser);
                return assertRootResult(moduleResult);
            }
        });
    }

    const basePathGrammar = [
        createNameParslet({
            allowedAdditionalTokens: ['external', 'module']
        }),
        stringValueParslet,
        numberParslet,
        createNamePathParslet({
            allowSquareBracketsOnAnyType: false,
            allowJsdocNamePaths: true,
            pathGrammar: null
        })
    ];
    const pathGrammar = [
        ...basePathGrammar,
        createSpecialNamePathParslet({
            allowedTypes: ['event'],
            pathGrammar: basePathGrammar
        })
    ];

    function getParameters(value) {
        let parameters;
        if (value.type === 'JsdocTypeParameterList') {
            parameters = value.elements;
        }
        else if (value.type === 'JsdocTypeParenthesis') {
            parameters = [value.element];
        }
        else {
            throw new UnexpectedTypeError(value);
        }
        return parameters.map(p => assertPlainKeyValueOrRootResult(p));
    }
    function getUnnamedParameters(value) {
        const parameters = getParameters(value);
        if (parameters.some(p => p.type === 'JsdocTypeKeyValue')) {
            throw new Error('No parameter should be named');
        }
        return parameters;
    }
    function createFunctionParslet({ allowNamedParameters, allowNoReturnType, allowWithoutParenthesis, allowNewAsFunctionKeyword }) {
        return composeParslet({
            name: 'functionParslet',
            accept: (type, next) => type === 'function' || (allowNewAsFunctionKeyword && type === 'new' && next === '('),
            parsePrefix: parser => {
                const newKeyword = parser.consume('new');
                parser.consume('function');
                const hasParenthesis = parser.lexer.current.type === '(';
                if (!hasParenthesis) {
                    if (!allowWithoutParenthesis) {
                        throw new Error('function is missing parameter list');
                    }
                    return {
                        type: 'JsdocTypeName',
                        value: 'function'
                    };
                }
                let result = {
                    type: 'JsdocTypeFunction',
                    parameters: [],
                    arrow: false,
                    constructor: newKeyword,
                    parenthesis: hasParenthesis
                };
                const value = parser.parseIntermediateType(Precedence.FUNCTION);
                if (allowNamedParameters === undefined) {
                    result.parameters = getUnnamedParameters(value);
                }
                else if (newKeyword && value.type === 'JsdocTypeFunction' && value.arrow) {
                    result = value;
                    result.constructor = true;
                    return result;
                }
                else {
                    result.parameters = getParameters(value);
                    for (const p of result.parameters) {
                        if (p.type === 'JsdocTypeKeyValue' && (!allowNamedParameters.includes(p.key))) {
                            throw new Error(`only allowed named parameters are ${allowNamedParameters.join(', ')} but got ${p.type}`);
                        }
                    }
                }
                if (parser.consume(':')) {
                    result.returnType = parser.parseType(Precedence.PREFIX);
                }
                else {
                    if (!allowNoReturnType) {
                        throw new Error('function is missing return type');
                    }
                }
                return result;
            }
        });
    }

    function createVariadicParslet({ allowPostfix, allowEnclosingBrackets }) {
        return composeParslet({
            name: 'variadicParslet',
            accept: type => type === '...',
            precedence: Precedence.PREFIX,
            parsePrefix: parser => {
                parser.consume('...');
                const brackets = allowEnclosingBrackets && parser.consume('[');
                try {
                    const element = parser.parseType(Precedence.PREFIX);
                    if (brackets && !parser.consume(']')) {
                        throw new Error('Unterminated variadic type. Missing \']\'');
                    }
                    return {
                        type: 'JsdocTypeVariadic',
                        element: assertRootResult(element),
                        meta: {
                            position: 'prefix',
                            squareBrackets: brackets
                        }
                    };
                }
                catch (e) {
                    if (e instanceof NoParsletFoundError) {
                        if (brackets) {
                            throw new Error('Empty square brackets for variadic are not allowed.');
                        }
                        return {
                            type: 'JsdocTypeVariadic',
                            meta: {
                                position: undefined,
                                squareBrackets: false
                            }
                        };
                    }
                    else {
                        throw e;
                    }
                }
            },
            parseInfix: allowPostfix
                ? (parser, left) => {
                    parser.consume('...');
                    return {
                        type: 'JsdocTypeVariadic',
                        element: assertRootResult(left),
                        meta: {
                            position: 'suffix',
                            squareBrackets: false
                        }
                    };
                }
                : undefined
        });
    }

    const symbolParslet = composeParslet({
        name: 'symbolParslet',
        accept: type => type === '(',
        precedence: Precedence.SYMBOL,
        parseInfix: (parser, left) => {
            if (left.type !== 'JsdocTypeName') {
                throw new Error('Symbol expects a name on the left side. (Reacting on \'(\')');
            }
            parser.consume('(');
            const result = {
                type: 'JsdocTypeSymbol',
                value: left.value
            };
            if (!parser.consume(')')) {
                const next = parser.parseIntermediateType(Precedence.SYMBOL);
                result.element = assertNumberOrVariadicNameResult(next);
                if (!parser.consume(')')) {
                    throw new Error('Symbol does not end after value');
                }
            }
            return result;
        }
    });

    const arrayBracketsParslet = composeParslet({
        name: 'arrayBracketsParslet',
        precedence: Precedence.ARRAY_BRACKETS,
        accept: (type, next) => type === '[' && next === ']',
        parseInfix: (parser, left) => {
            parser.consume('[');
            parser.consume(']');
            return {
                type: 'JsdocTypeGeneric',
                left: {
                    type: 'JsdocTypeName',
                    value: 'Array'
                },
                elements: [
                    assertRootResult(left)
                ],
                meta: {
                    brackets: 'square',
                    dot: false
                }
            };
        }
    });

    function createObjectParslet({ objectFieldGrammar, allowKeyTypes }) {
        return composeParslet({
            name: 'objectParslet',
            accept: type => type === '{',
            parsePrefix: parser => {
                parser.consume('{');
                const result = {
                    type: 'JsdocTypeObject',
                    meta: {
                        separator: 'comma'
                    },
                    elements: []
                };
                if (!parser.consume('}')) {
                    let separator;
                    const fieldParser = new Parser(objectFieldGrammar, parser.lexer, parser);
                    while (true) {
                        fieldParser.acceptLexerState(parser);
                        let field = fieldParser.parseIntermediateType(Precedence.OBJECT);
                        parser.acceptLexerState(fieldParser);
                        if (field === undefined && allowKeyTypes) {
                            field = parser.parseIntermediateType(Precedence.OBJECT);
                        }
                        let optional = false;
                        if (field.type === 'JsdocTypeNullable') {
                            optional = true;
                            field = field.element;
                        }
                        if (field.type === 'JsdocTypeNumber' || field.type === 'JsdocTypeName' || field.type === 'JsdocTypeStringValue') {
                            let quote;
                            if (field.type === 'JsdocTypeStringValue') {
                                quote = field.meta.quote;
                            }
                            result.elements.push({
                                type: 'JsdocTypeObjectField',
                                key: field.value.toString(),
                                right: undefined,
                                optional,
                                readonly: false,
                                meta: {
                                    quote
                                }
                            });
                        }
                        else if (field.type === 'JsdocTypeObjectField' || field.type === 'JsdocTypeJsdocObjectField') {
                            result.elements.push(field);
                        }
                        else {
                            throw new UnexpectedTypeError(field);
                        }
                        if (parser.lexer.current.startOfLine) {
                            separator = 'linebreak';
                        }
                        else if (parser.consume(',')) {
                            separator = 'comma';
                        }
                        else if (parser.consume(';')) {
                            separator = 'semicolon';
                        }
                        else {
                            break;
                        }
                        const type = parser.lexer.current.type;
                        if (type === '}') {
                            break;
                        }
                    }
                    result.meta.separator = separator !== null && separator !== void 0 ? separator : 'comma'; // TODO: use undefined here
                    if (!parser.consume('}')) {
                        throw new Error('Unterminated record type. Missing \'}\'');
                    }
                }
                return result;
            }
        });
    }

    function createObjectFieldParslet({ allowSquaredProperties, allowKeyTypes, allowReadonly, allowOptional }) {
        return composeParslet({
            name: 'objectFieldParslet',
            precedence: Precedence.KEY_VALUE,
            accept: type => type === ':',
            parseInfix: (parser, left) => {
                var _a;
                let optional = false;
                let readonlyProperty = false;
                if (allowOptional && left.type === 'JsdocTypeNullable') {
                    optional = true;
                    left = left.element;
                }
                if (allowReadonly && left.type === 'JsdocTypeReadonlyProperty') {
                    readonlyProperty = true;
                    left = left.element;
                }
                // object parslet uses a special grammar and for the value we want to switch back to the parent
                const parentParser = (_a = parser.baseParser) !== null && _a !== void 0 ? _a : parser;
                parentParser.acceptLexerState(parser);
                if (left.type === 'JsdocTypeNumber' || left.type === 'JsdocTypeName' || left.type === 'JsdocTypeStringValue' ||
                    isSquaredProperty(left)) {
                    if (isSquaredProperty(left) && !allowSquaredProperties) {
                        throw new UnexpectedTypeError(left);
                    }
                    parentParser.consume(':');
                    let quote;
                    if (left.type === 'JsdocTypeStringValue') {
                        quote = left.meta.quote;
                    }
                    const right = parentParser.parseType(Precedence.KEY_VALUE);
                    parser.acceptLexerState(parentParser);
                    return {
                        type: 'JsdocTypeObjectField',
                        key: isSquaredProperty(left) ? left : left.value.toString(),
                        right,
                        optional,
                        readonly: readonlyProperty,
                        meta: {
                            quote
                        }
                    };
                }
                else {
                    if (!allowKeyTypes) {
                        throw new UnexpectedTypeError(left);
                    }
                    parentParser.consume(':');
                    const right = parentParser.parseType(Precedence.KEY_VALUE);
                    parser.acceptLexerState(parentParser);
                    return {
                        type: 'JsdocTypeJsdocObjectField',
                        left: assertRootResult(left),
                        right
                    };
                }
            }
        });
    }

    function createKeyValueParslet({ allowOptional, allowVariadic }) {
        return composeParslet({
            name: 'keyValueParslet',
            precedence: Precedence.KEY_VALUE,
            accept: type => type === ':',
            parseInfix: (parser, left) => {
                let optional = false;
                let variadic = false;
                if (allowOptional && left.type === 'JsdocTypeNullable') {
                    optional = true;
                    left = left.element;
                }
                if (allowVariadic && left.type === 'JsdocTypeVariadic' && left.element !== undefined) {
                    variadic = true;
                    left = left.element;
                }
                if (left.type !== 'JsdocTypeName') {
                    throw new UnexpectedTypeError(left);
                }
                parser.consume(':');
                const right = parser.parseType(Precedence.KEY_VALUE);
                return {
                    type: 'JsdocTypeKeyValue',
                    key: left.value,
                    right,
                    optional,
                    variadic
                };
            }
        });
    }

    const jsdocBaseGrammar = [
        ...baseGrammar,
        createFunctionParslet({
            allowWithoutParenthesis: true,
            allowNamedParameters: ['this', 'new'],
            allowNoReturnType: true,
            allowNewAsFunctionKeyword: false
        }),
        stringValueParslet,
        createSpecialNamePathParslet({
            allowedTypes: ['module', 'external', 'event'],
            pathGrammar
        }),
        createVariadicParslet({
            allowEnclosingBrackets: true,
            allowPostfix: true
        }),
        createNameParslet({
            allowedAdditionalTokens: ['keyof']
        }),
        symbolParslet,
        arrayBracketsParslet,
        createNamePathParslet({
            allowSquareBracketsOnAnyType: false,
            allowJsdocNamePaths: true,
            pathGrammar
        })
    ];
    const jsdocGrammar = [
        ...jsdocBaseGrammar,
        createObjectParslet({
            // jsdoc syntax allows full types as keys, so we need to pull in the full grammar here
            // we leave out the object type deliberately
            objectFieldGrammar: [
                createNameParslet({
                    allowedAdditionalTokens: ['module', 'in']
                }),
                createObjectFieldParslet({
                    allowSquaredProperties: false,
                    allowKeyTypes: true,
                    allowOptional: false,
                    allowReadonly: false
                }),
                ...jsdocBaseGrammar
            ],
            allowKeyTypes: true
        }),
        createKeyValueParslet({
            allowOptional: true,
            allowVariadic: true
        })
    ];

    const typeOfParslet = composeParslet({
        name: 'typeOfParslet',
        accept: type => type === 'typeof',
        parsePrefix: parser => {
            parser.consume('typeof');
            return {
                type: 'JsdocTypeTypeof',
                element: assertRootResult(parser.parseType(Precedence.KEY_OF_TYPE_OF))
            };
        }
    });

    const objectFieldGrammar$1 = [
        createNameParslet({
            allowedAdditionalTokens: ['module', 'keyof', 'event', 'external', 'in']
        }),
        nullableParslet,
        optionalParslet,
        stringValueParslet,
        numberParslet,
        createObjectFieldParslet({
            allowSquaredProperties: false,
            allowKeyTypes: false,
            allowOptional: false,
            allowReadonly: false
        })
    ];
    const closureGrammar = [
        ...baseGrammar,
        createObjectParslet({
            allowKeyTypes: false,
            objectFieldGrammar: objectFieldGrammar$1
        }),
        createNameParslet({
            allowedAdditionalTokens: ['event', 'external', 'in']
        }),
        typeOfParslet,
        createFunctionParslet({
            allowWithoutParenthesis: false,
            allowNamedParameters: ['this', 'new'],
            allowNoReturnType: true,
            allowNewAsFunctionKeyword: false
        }),
        createVariadicParslet({
            allowEnclosingBrackets: false,
            allowPostfix: false
        }),
        // additional name parslet is needed for some special cases
        createNameParslet({
            allowedAdditionalTokens: ['keyof']
        }),
        createSpecialNamePathParslet({
            allowedTypes: ['module'],
            pathGrammar
        }),
        createNamePathParslet({
            allowSquareBracketsOnAnyType: false,
            allowJsdocNamePaths: true,
            pathGrammar
        }),
        createKeyValueParslet({
            allowOptional: false,
            allowVariadic: false
        }),
        symbolParslet
    ];

    const assertsParslet = composeParslet({
        name: 'assertsParslet',
        accept: type => type === 'asserts',
        parsePrefix: (parser) => {
            parser.consume('asserts');
            const left = parser.parseIntermediateType(Precedence.SYMBOL);
            if (left.type !== 'JsdocTypeName') {
                throw new UnexpectedTypeError(left, 'A typescript asserts always has to have a name on the left side.');
            }
            parser.consume('is');
            return {
                type: 'JsdocTypeAsserts',
                left,
                right: assertRootResult(parser.parseIntermediateType(Precedence.INFIX))
            };
        }
    });

    function createTupleParslet({ allowQuestionMark }) {
        return composeParslet({
            name: 'tupleParslet',
            accept: type => type === '[',
            parsePrefix: parser => {
                parser.consume('[');
                const result = {
                    type: 'JsdocTypeTuple',
                    elements: []
                };
                if (parser.consume(']')) {
                    return result;
                }
                const typeList = parser.parseIntermediateType(Precedence.ALL);
                if (typeList.type === 'JsdocTypeParameterList') {
                    if (typeList.elements[0].type === 'JsdocTypeKeyValue') {
                        result.elements = typeList.elements.map(assertPlainKeyValueResult);
                    }
                    else {
                        result.elements = typeList.elements.map(assertRootResult);
                    }
                }
                else {
                    if (typeList.type === 'JsdocTypeKeyValue') {
                        result.elements = [assertPlainKeyValueResult(typeList)];
                    }
                    else {
                        result.elements = [assertRootResult(typeList)];
                    }
                }
                if (!parser.consume(']')) {
                    throw new Error('Unterminated \'[\'');
                }
                if (!allowQuestionMark && result.elements.some((e) => e.type === 'JsdocTypeUnknown')) {
                    throw new Error('Question mark in tuple not allowed');
                }
                return result;
            }
        });
    }

    const keyOfParslet = composeParslet({
        name: 'keyOfParslet',
        accept: type => type === 'keyof',
        parsePrefix: parser => {
            parser.consume('keyof');
            return {
                type: 'JsdocTypeKeyof',
                element: assertRootResult(parser.parseType(Precedence.KEY_OF_TYPE_OF))
            };
        }
    });

    const importParslet = composeParslet({
        name: 'importParslet',
        accept: type => type === 'import',
        parsePrefix: parser => {
            parser.consume('import');
            if (!parser.consume('(')) {
                throw new Error('Missing parenthesis after import keyword');
            }
            const path = parser.parseType(Precedence.PREFIX);
            if (path.type !== 'JsdocTypeStringValue') {
                throw new Error('Only string values are allowed as paths for imports');
            }
            if (!parser.consume(')')) {
                throw new Error('Missing closing parenthesis after import keyword');
            }
            return {
                type: 'JsdocTypeImport',
                element: path
            };
        }
    });

    const readonlyPropertyParslet = composeParslet({
        name: 'readonlyPropertyParslet',
        accept: type => type === 'readonly',
        parsePrefix: parser => {
            parser.consume('readonly');
            return {
                type: 'JsdocTypeReadonlyProperty',
                element: parser.parseType(Precedence.KEY_VALUE)
            };
        }
    });

    const arrowFunctionParslet = composeParslet({
        name: 'arrowFunctionParslet',
        precedence: Precedence.ARROW,
        accept: type => type === '=>',
        parseInfix: (parser, left) => {
            parser.consume('=>');
            return {
                type: 'JsdocTypeFunction',
                parameters: getParameters(left).map(assertPlainKeyValueOrNameResult),
                arrow: true,
                constructor: false,
                parenthesis: true,
                returnType: parser.parseType(Precedence.OBJECT)
            };
        }
    });

    const intersectionParslet = composeParslet({
        name: 'intersectionParslet',
        accept: type => type === '&',
        precedence: Precedence.INTERSECTION,
        parseInfix: (parser, left) => {
            parser.consume('&');
            const elements = [];
            do {
                elements.push(parser.parseType(Precedence.INTERSECTION));
            } while (parser.consume('&'));
            return {
                type: 'JsdocTypeIntersection',
                elements: [assertRootResult(left), ...elements]
            };
        }
    });

    const predicateParslet = composeParslet({
        name: 'predicateParslet',
        precedence: Precedence.INFIX,
        accept: type => type === 'is',
        parseInfix: (parser, left) => {
            if (left.type !== 'JsdocTypeName') {
                throw new UnexpectedTypeError(left, 'A typescript predicate always has to have a name on the left side.');
            }
            parser.consume('is');
            return {
                type: 'JsdocTypePredicate',
                left,
                right: assertRootResult(parser.parseIntermediateType(Precedence.INFIX))
            };
        }
    });

    const objectSquaredPropertyParslet = composeParslet({
        name: 'objectSquareBracketPropertyParslet',
        accept: type => type === '[',
        parsePrefix: parser => {
            if (parser.baseParser === undefined) {
                throw new Error('Only allowed inside object grammar');
            }
            parser.consume('[');
            const key = parser.lexer.current.text;
            parser.consume('Identifier');
            let result;
            if (parser.consume(':')) {
                const parentParser = parser.baseParser;
                parentParser.acceptLexerState(parser);
                result = {
                    type: 'JsdocTypeIndexSignature',
                    key,
                    right: parentParser.parseType(Precedence.INDEX_BRACKETS)
                };
                parser.acceptLexerState(parentParser);
            }
            else if (parser.consume('in')) {
                const parentParser = parser.baseParser;
                parentParser.acceptLexerState(parser);
                result = {
                    type: 'JsdocTypeMappedType',
                    key,
                    right: parentParser.parseType(Precedence.ARRAY_BRACKETS)
                };
                parser.acceptLexerState(parentParser);
            }
            else {
                throw new Error('Missing \':\' or \'in\' inside square bracketed property.');
            }
            if (!parser.consume(']')) {
                throw new Error('Unterminated square brackets');
            }
            return result;
        }
    });

    const objectFieldGrammar = [
        readonlyPropertyParslet,
        createNameParslet({
            allowedAdditionalTokens: ['module', 'event', 'keyof', 'event', 'external', 'in']
        }),
        nullableParslet,
        optionalParslet,
        stringValueParslet,
        numberParslet,
        createObjectFieldParslet({
            allowSquaredProperties: true,
            allowKeyTypes: false,
            allowOptional: true,
            allowReadonly: true
        }),
        objectSquaredPropertyParslet
    ];
    const typescriptGrammar = [
        ...baseGrammar,
        createObjectParslet({
            allowKeyTypes: false,
            objectFieldGrammar
        }),
        typeOfParslet,
        keyOfParslet,
        importParslet,
        stringValueParslet,
        createFunctionParslet({
            allowWithoutParenthesis: true,
            allowNoReturnType: false,
            allowNamedParameters: ['this', 'new', 'args'],
            allowNewAsFunctionKeyword: true
        }),
        createTupleParslet({
            allowQuestionMark: false
        }),
        createVariadicParslet({
            allowEnclosingBrackets: false,
            allowPostfix: false
        }),
        assertsParslet,
        createNameParslet({
            allowedAdditionalTokens: ['event', 'external', 'in']
        }),
        createSpecialNamePathParslet({
            allowedTypes: ['module'],
            pathGrammar
        }),
        arrayBracketsParslet,
        arrowFunctionParslet,
        createNamePathParslet({
            allowSquareBracketsOnAnyType: true,
            allowJsdocNamePaths: false,
            pathGrammar
        }),
        intersectionParslet,
        predicateParslet,
        createKeyValueParslet({
            allowVariadic: true,
            allowOptional: true
        })
    ];

    /**
     * This function parses the given expression in the given mode and produces a {@link RootResult}.
     * @param expression
     * @param mode
     */
    function parse(expression, mode) {
        switch (mode) {
            case 'closure':
                return (new Parser(closureGrammar, expression)).parse();
            case 'jsdoc':
                return (new Parser(jsdocGrammar, expression)).parse();
            case 'typescript':
                return (new Parser(typescriptGrammar, expression)).parse();
        }
    }
    /**
     * This function tries to parse the given expression in multiple modes and returns the first successful
     * {@link RootResult}. By default it tries `'typescript'`, `'closure'` and `'jsdoc'` in this order. If
     * no mode was successful it throws the error that was produced by the last parsing attempt.
     * @param expression
     * @param modes
     */
    function tryParse(expression, modes = ['typescript', 'closure', 'jsdoc']) {
        let error;
        for (const mode of modes) {
            try {
                return parse(expression, mode);
            }
            catch (e) {
                error = e;
            }
        }
        throw error;
    }

    function transform(rules, parseResult) {
        const rule = rules[parseResult.type];
        if (rule === undefined) {
            throw new Error(`In this set of transform rules exists no rule for type ${parseResult.type}.`);
        }
        return rule(parseResult, aParseResult => transform(rules, aParseResult));
    }
    function notAvailableTransform(parseResult) {
        throw new Error('This transform is not available. Are you trying the correct parsing mode?');
    }
    function extractSpecialParams(source) {
        const result = {
            params: []
        };
        for (const param of source.parameters) {
            if (param.type === 'JsdocTypeKeyValue') {
                if (param.key === 'this') {
                    result.this = param.right;
                }
                else if (param.key === 'new') {
                    result.new = param.right;
                }
                else {
                    result.params.push(param);
                }
            }
            else {
                result.params.push(param);
            }
        }
        return result;
    }

    function applyPosition(position, target, value) {
        return position === 'prefix' ? value + target : target + value;
    }
    function quote(value, quote) {
        switch (quote) {
            case 'double':
                return `"${value}"`;
            case 'single':
                return `'${value}'`;
            case undefined:
                return value;
        }
    }
    function stringifyRules() {
        return {
            JsdocTypeParenthesis: (result, transform) => `(${result.element !== undefined ? transform(result.element) : ''})`,
            JsdocTypeKeyof: (result, transform) => `keyof ${transform(result.element)}`,
            JsdocTypeFunction: (result, transform) => {
                if (!result.arrow) {
                    let stringified = result.constructor ? 'new' : 'function';
                    if (!result.parenthesis) {
                        return stringified;
                    }
                    stringified += `(${result.parameters.map(transform).join(', ')})`;
                    if (result.returnType !== undefined) {
                        stringified += `: ${transform(result.returnType)}`;
                    }
                    return stringified;
                }
                else {
                    if (result.returnType === undefined) {
                        throw new Error('Arrow function needs a return type.');
                    }
                    let stringified = `(${result.parameters.map(transform).join(', ')}) => ${transform(result.returnType)}`;
                    if (result.constructor) {
                        stringified = 'new ' + stringified;
                    }
                    return stringified;
                }
            },
            JsdocTypeName: result => result.value,
            JsdocTypeTuple: (result, transform) => `[${result.elements.map(transform).join(', ')}]`,
            JsdocTypeVariadic: (result, transform) => result.meta.position === undefined
                ? '...'
                : applyPosition(result.meta.position, transform(result.element), '...'),
            JsdocTypeNamePath: (result, transform) => {
                const left = transform(result.left);
                const right = transform(result.right);
                switch (result.pathType) {
                    case 'inner':
                        return `${left}~${right}`;
                    case 'instance':
                        return `${left}#${right}`;
                    case 'property':
                        return `${left}.${right}`;
                    case 'property-brackets':
                        return `${left}[${right}]`;
                }
            },
            JsdocTypeStringValue: result => quote(result.value, result.meta.quote),
            JsdocTypeAny: () => '*',
            JsdocTypeGeneric: (result, transform) => {
                if (result.meta.brackets === 'square') {
                    const element = result.elements[0];
                    const transformed = transform(element);
                    if (element.type === 'JsdocTypeUnion' || element.type === 'JsdocTypeIntersection') {
                        return `(${transformed})[]`;
                    }
                    else {
                        return `${transformed}[]`;
                    }
                }
                else {
                    return `${transform(result.left)}${result.meta.dot ? '.' : ''}<${result.elements.map(transform).join(', ')}>`;
                }
            },
            JsdocTypeImport: (result, transform) => `import(${transform(result.element)})`,
            JsdocTypeObjectField: (result, transform) => {
                let text = '';
                if (result.readonly) {
                    text += 'readonly ';
                }
                if (typeof result.key === 'string') {
                    text += quote(result.key, result.meta.quote);
                }
                else {
                    text += transform(result.key);
                }
                if (result.optional) {
                    text += '?';
                }
                if (result.right === undefined) {
                    return text;
                }
                else {
                    return text + `: ${transform(result.right)}`;
                }
            },
            JsdocTypeJsdocObjectField: (result, transform) => {
                return `${transform(result.left)}: ${transform(result.right)}`;
            },
            JsdocTypeKeyValue: (result, transform) => {
                let text = result.key;
                if (result.optional) {
                    text += '?';
                }
                if (result.variadic) {
                    text = '...' + text;
                }
                if (result.right === undefined) {
                    return text;
                }
                else {
                    return text + `: ${transform(result.right)}`;
                }
            },
            JsdocTypeSpecialNamePath: result => `${result.specialType}:${quote(result.value, result.meta.quote)}`,
            JsdocTypeNotNullable: (result, transform) => applyPosition(result.meta.position, transform(result.element), '!'),
            JsdocTypeNull: () => 'null',
            JsdocTypeNullable: (result, transform) => applyPosition(result.meta.position, transform(result.element), '?'),
            JsdocTypeNumber: result => result.value.toString(),
            JsdocTypeObject: (result, transform) => `{${result.elements.map(transform).join((result.meta.separator === 'comma' ? ',' : ';') + ' ')}}`,
            JsdocTypeOptional: (result, transform) => applyPosition(result.meta.position, transform(result.element), '='),
            JsdocTypeSymbol: (result, transform) => `${result.value}(${result.element !== undefined ? transform(result.element) : ''})`,
            JsdocTypeTypeof: (result, transform) => `typeof ${transform(result.element)}`,
            JsdocTypeUndefined: () => 'undefined',
            JsdocTypeUnion: (result, transform) => result.elements.map(transform).join(' | '),
            JsdocTypeUnknown: () => '?',
            JsdocTypeIntersection: (result, transform) => result.elements.map(transform).join(' & '),
            JsdocTypeProperty: result => quote(result.value, result.meta.quote),
            JsdocTypePredicate: (result, transform) => `${transform(result.left)} is ${transform(result.right)}`,
            JsdocTypeIndexSignature: (result, transform) => `[${result.key}: ${transform(result.right)}]`,
            JsdocTypeMappedType: (result, transform) => `[${result.key} in ${transform(result.right)}]`,
            JsdocTypeAsserts: (result, transform) => `asserts ${transform(result.left)} is ${transform(result.right)}`
        };
    }
    const storedStringifyRules = stringifyRules();
    function stringify(result) {
        return transform(storedStringifyRules, result);
    }

    const reservedWords = [
        'null',
        'true',
        'false',
        'break',
        'case',
        'catch',
        'class',
        'const',
        'continue',
        'debugger',
        'default',
        'delete',
        'do',
        'else',
        'export',
        'extends',
        'finally',
        'for',
        'function',
        'if',
        'import',
        'in',
        'instanceof',
        'new',
        'return',
        'super',
        'switch',
        'this',
        'throw',
        'try',
        'typeof',
        'var',
        'void',
        'while',
        'with',
        'yield'
    ];
    function makeName(value) {
        const result = {
            type: 'NameExpression',
            name: value
        };
        if (reservedWords.includes(value)) {
            result.reservedWord = true;
        }
        return result;
    }
    const catharsisTransformRules = {
        JsdocTypeOptional: (result, transform) => {
            const transformed = transform(result.element);
            transformed.optional = true;
            return transformed;
        },
        JsdocTypeNullable: (result, transform) => {
            const transformed = transform(result.element);
            transformed.nullable = true;
            return transformed;
        },
        JsdocTypeNotNullable: (result, transform) => {
            const transformed = transform(result.element);
            transformed.nullable = false;
            return transformed;
        },
        JsdocTypeVariadic: (result, transform) => {
            if (result.element === undefined) {
                throw new Error('dots without value are not allowed in catharsis mode');
            }
            const transformed = transform(result.element);
            transformed.repeatable = true;
            return transformed;
        },
        JsdocTypeAny: () => ({
            type: 'AllLiteral'
        }),
        JsdocTypeNull: () => ({
            type: 'NullLiteral'
        }),
        JsdocTypeStringValue: result => makeName(quote(result.value, result.meta.quote)),
        JsdocTypeUndefined: () => ({
            type: 'UndefinedLiteral'
        }),
        JsdocTypeUnknown: () => ({
            type: 'UnknownLiteral'
        }),
        JsdocTypeFunction: (result, transform) => {
            const params = extractSpecialParams(result);
            const transformed = {
                type: 'FunctionType',
                params: params.params.map(transform)
            };
            if (params.this !== undefined) {
                transformed.this = transform(params.this);
            }
            if (params.new !== undefined) {
                transformed.new = transform(params.new);
            }
            if (result.returnType !== undefined) {
                transformed.result = transform(result.returnType);
            }
            return transformed;
        },
        JsdocTypeGeneric: (result, transform) => ({
            type: 'TypeApplication',
            applications: result.elements.map(o => transform(o)),
            expression: transform(result.left)
        }),
        JsdocTypeSpecialNamePath: result => makeName(result.specialType + ':' + quote(result.value, result.meta.quote)),
        JsdocTypeName: result => {
            if (result.value !== 'function') {
                return makeName(result.value);
            }
            else {
                return {
                    type: 'FunctionType',
                    params: []
                };
            }
        },
        JsdocTypeNumber: result => makeName(result.value.toString()),
        JsdocTypeObject: (result, transform) => {
            const transformed = {
                type: 'RecordType',
                fields: []
            };
            for (const field of result.elements) {
                if (field.type !== 'JsdocTypeObjectField' && field.type !== 'JsdocTypeJsdocObjectField') {
                    transformed.fields.push({
                        type: 'FieldType',
                        key: transform(field),
                        value: undefined
                    });
                }
                else {
                    transformed.fields.push(transform(field));
                }
            }
            return transformed;
        },
        JsdocTypeObjectField: (result, transform) => {
            if (typeof result.key !== 'string') {
                throw new Error('Index signatures and mapped types are not supported');
            }
            return {
                type: 'FieldType',
                key: makeName(quote(result.key, result.meta.quote)),
                value: result.right === undefined ? undefined : transform(result.right)
            };
        },
        JsdocTypeJsdocObjectField: (result, transform) => ({
            type: 'FieldType',
            key: transform(result.left),
            value: transform(result.right)
        }),
        JsdocTypeUnion: (result, transform) => ({
            type: 'TypeUnion',
            elements: result.elements.map(e => transform(e))
        }),
        JsdocTypeKeyValue: (result, transform) => {
            return {
                type: 'FieldType',
                key: makeName(result.key),
                value: result.right === undefined ? undefined : transform(result.right)
            };
        },
        JsdocTypeNamePath: (result, transform) => {
            const leftResult = transform(result.left);
            let rightValue;
            if (result.right.type === 'JsdocTypeSpecialNamePath') {
                rightValue = transform(result.right).name;
            }
            else {
                rightValue = quote(result.right.value, result.right.meta.quote);
            }
            const joiner = result.pathType === 'inner' ? '~' : result.pathType === 'instance' ? '#' : '.';
            return makeName(`${leftResult.name}${joiner}${rightValue}`);
        },
        JsdocTypeSymbol: result => {
            let value = '';
            let element = result.element;
            let trailingDots = false;
            if ((element === null || element === void 0 ? void 0 : element.type) === 'JsdocTypeVariadic') {
                if (element.meta.position === 'prefix') {
                    value = '...';
                }
                else {
                    trailingDots = true;
                }
                element = element.element;
            }
            if ((element === null || element === void 0 ? void 0 : element.type) === 'JsdocTypeName') {
                value += element.value;
            }
            else if ((element === null || element === void 0 ? void 0 : element.type) === 'JsdocTypeNumber') {
                value += element.value.toString();
            }
            if (trailingDots) {
                value += '...';
            }
            return makeName(`${result.value}(${value})`);
        },
        JsdocTypeParenthesis: (result, transform) => transform(assertRootResult(result.element)),
        JsdocTypeMappedType: notAvailableTransform,
        JsdocTypeIndexSignature: notAvailableTransform,
        JsdocTypeImport: notAvailableTransform,
        JsdocTypeKeyof: notAvailableTransform,
        JsdocTypeTuple: notAvailableTransform,
        JsdocTypeTypeof: notAvailableTransform,
        JsdocTypeIntersection: notAvailableTransform,
        JsdocTypeProperty: notAvailableTransform,
        JsdocTypePredicate: notAvailableTransform,
        JsdocTypeAsserts: notAvailableTransform
    };
    function catharsisTransform(result) {
        return transform(catharsisTransformRules, result);
    }

    function getQuoteStyle(quote) {
        switch (quote) {
            case undefined:
                return 'none';
            case 'single':
                return 'single';
            case 'double':
                return 'double';
        }
    }
    function getMemberType(type) {
        switch (type) {
            case 'inner':
                return 'INNER_MEMBER';
            case 'instance':
                return 'INSTANCE_MEMBER';
            case 'property':
                return 'MEMBER';
            case 'property-brackets':
                return 'MEMBER';
        }
    }
    function nestResults(type, results) {
        if (results.length === 2) {
            return {
                type,
                left: results[0],
                right: results[1]
            };
        }
        else {
            return {
                type,
                left: results[0],
                right: nestResults(type, results.slice(1))
            };
        }
    }
    const jtpRules = {
        JsdocTypeOptional: (result, transform) => ({
            type: 'OPTIONAL',
            value: transform(result.element),
            meta: {
                syntax: result.meta.position === 'prefix' ? 'PREFIX_EQUAL_SIGN' : 'SUFFIX_EQUALS_SIGN'
            }
        }),
        JsdocTypeNullable: (result, transform) => ({
            type: 'NULLABLE',
            value: transform(result.element),
            meta: {
                syntax: result.meta.position === 'prefix' ? 'PREFIX_QUESTION_MARK' : 'SUFFIX_QUESTION_MARK'
            }
        }),
        JsdocTypeNotNullable: (result, transform) => ({
            type: 'NOT_NULLABLE',
            value: transform(result.element),
            meta: {
                syntax: result.meta.position === 'prefix' ? 'PREFIX_BANG' : 'SUFFIX_BANG'
            }
        }),
        JsdocTypeVariadic: (result, transform) => {
            const transformed = {
                type: 'VARIADIC',
                meta: {
                    syntax: result.meta.position === 'prefix'
                        ? 'PREFIX_DOTS'
                        : result.meta.position === 'suffix' ? 'SUFFIX_DOTS' : 'ONLY_DOTS'
                }
            };
            if (result.element !== undefined) {
                transformed.value = transform(result.element);
            }
            return transformed;
        },
        JsdocTypeName: result => ({
            type: 'NAME',
            name: result.value
        }),
        JsdocTypeTypeof: (result, transform) => ({
            type: 'TYPE_QUERY',
            name: transform(result.element)
        }),
        JsdocTypeTuple: (result, transform) => ({
            type: 'TUPLE',
            entries: result.elements.map(transform)
        }),
        JsdocTypeKeyof: (result, transform) => ({
            type: 'KEY_QUERY',
            value: transform(result.element)
        }),
        JsdocTypeImport: result => ({
            type: 'IMPORT',
            path: {
                type: 'STRING_VALUE',
                quoteStyle: getQuoteStyle(result.element.meta.quote),
                string: result.element.value
            }
        }),
        JsdocTypeUndefined: () => ({
            type: 'NAME',
            name: 'undefined'
        }),
        JsdocTypeAny: () => ({
            type: 'ANY'
        }),
        JsdocTypeFunction: (result, transform) => {
            const specialParams = extractSpecialParams(result);
            const transformed = {
                type: result.arrow ? 'ARROW' : 'FUNCTION',
                params: specialParams.params.map(param => {
                    if (param.type === 'JsdocTypeKeyValue') {
                        if (param.right === undefined) {
                            throw new Error('Function parameter without \':\' is not expected to be \'KEY_VALUE\'');
                        }
                        return {
                            type: 'NAMED_PARAMETER',
                            name: param.key,
                            typeName: transform(param.right)
                        };
                    }
                    else {
                        return transform(param);
                    }
                }),
                new: null,
                returns: null
            };
            if (specialParams.this !== undefined) {
                transformed.this = transform(specialParams.this);
            }
            else if (!result.arrow) {
                transformed.this = null;
            }
            if (specialParams.new !== undefined) {
                transformed.new = transform(specialParams.new);
            }
            if (result.returnType !== undefined) {
                transformed.returns = transform(result.returnType);
            }
            return transformed;
        },
        JsdocTypeGeneric: (result, transform) => {
            const transformed = {
                type: 'GENERIC',
                subject: transform(result.left),
                objects: result.elements.map(transform),
                meta: {
                    syntax: result.meta.brackets === 'square' ? 'SQUARE_BRACKET' : result.meta.dot ? 'ANGLE_BRACKET_WITH_DOT' : 'ANGLE_BRACKET'
                }
            };
            if (result.meta.brackets === 'square' && result.elements[0].type === 'JsdocTypeFunction' && !result.elements[0].parenthesis) {
                transformed.objects[0] = {
                    type: 'NAME',
                    name: 'function'
                };
            }
            return transformed;
        },
        JsdocTypeObjectField: (result, transform) => {
            if (typeof result.key !== 'string') {
                throw new Error('Index signatures and mapped types are not supported');
            }
            if (result.right === undefined) {
                return {
                    type: 'RECORD_ENTRY',
                    key: result.key,
                    quoteStyle: getQuoteStyle(result.meta.quote),
                    value: null,
                    readonly: false
                };
            }
            let right = transform(result.right);
            if (result.optional) {
                right = {
                    type: 'OPTIONAL',
                    value: right,
                    meta: {
                        syntax: 'SUFFIX_KEY_QUESTION_MARK'
                    }
                };
            }
            return {
                type: 'RECORD_ENTRY',
                key: result.key.toString(),
                quoteStyle: getQuoteStyle(result.meta.quote),
                value: right,
                readonly: false
            };
        },
        JsdocTypeJsdocObjectField: () => {
            throw new Error('Keys may not be typed in jsdoctypeparser.');
        },
        JsdocTypeKeyValue: (result, transform) => {
            if (result.right === undefined) {
                return {
                    type: 'RECORD_ENTRY',
                    key: result.key,
                    quoteStyle: 'none',
                    value: null,
                    readonly: false
                };
            }
            let right = transform(result.right);
            if (result.optional) {
                right = {
                    type: 'OPTIONAL',
                    value: right,
                    meta: {
                        syntax: 'SUFFIX_KEY_QUESTION_MARK'
                    }
                };
            }
            return {
                type: 'RECORD_ENTRY',
                key: result.key,
                quoteStyle: 'none',
                value: right,
                readonly: false
            };
        },
        JsdocTypeObject: (result, transform) => {
            const entries = [];
            for (const field of result.elements) {
                if (field.type === 'JsdocTypeObjectField' || field.type === 'JsdocTypeJsdocObjectField') {
                    entries.push(transform(field));
                }
            }
            return {
                type: 'RECORD',
                entries
            };
        },
        JsdocTypeSpecialNamePath: result => {
            if (result.specialType !== 'module') {
                throw new Error(`jsdoctypeparser does not support type ${result.specialType} at this point.`);
            }
            return {
                type: 'MODULE',
                value: {
                    type: 'FILE_PATH',
                    quoteStyle: getQuoteStyle(result.meta.quote),
                    path: result.value
                }
            };
        },
        JsdocTypeNamePath: (result, transform) => {
            let hasEventPrefix = false;
            let name;
            let quoteStyle;
            if (result.right.type === 'JsdocTypeSpecialNamePath' && result.right.specialType === 'event') {
                hasEventPrefix = true;
                name = result.right.value;
                quoteStyle = getQuoteStyle(result.right.meta.quote);
            }
            else {
                name = result.right.value;
                quoteStyle = getQuoteStyle(result.right.meta.quote);
            }
            const transformed = {
                type: getMemberType(result.pathType),
                owner: transform(result.left),
                name,
                quoteStyle,
                hasEventPrefix
            };
            if (transformed.owner.type === 'MODULE') {
                const tModule = transformed.owner;
                transformed.owner = transformed.owner.value;
                tModule.value = transformed;
                return tModule;
            }
            else {
                return transformed;
            }
        },
        JsdocTypeUnion: (result, transform) => nestResults('UNION', result.elements.map(transform)),
        JsdocTypeParenthesis: (result, transform) => ({
            type: 'PARENTHESIS',
            value: transform(assertRootResult(result.element))
        }),
        JsdocTypeNull: () => ({
            type: 'NAME',
            name: 'null'
        }),
        JsdocTypeUnknown: () => ({
            type: 'UNKNOWN'
        }),
        JsdocTypeStringValue: result => ({
            type: 'STRING_VALUE',
            quoteStyle: getQuoteStyle(result.meta.quote),
            string: result.value
        }),
        JsdocTypeIntersection: (result, transform) => nestResults('INTERSECTION', result.elements.map(transform)),
        JsdocTypeNumber: result => ({
            type: 'NUMBER_VALUE',
            number: result.value.toString()
        }),
        JsdocTypeSymbol: notAvailableTransform,
        JsdocTypeProperty: notAvailableTransform,
        JsdocTypePredicate: notAvailableTransform,
        JsdocTypeMappedType: notAvailableTransform,
        JsdocTypeIndexSignature: notAvailableTransform,
        JsdocTypeAsserts: notAvailableTransform
    };
    function jtpTransform(result) {
        return transform(jtpRules, result);
    }

    function identityTransformRules() {
        return {
            JsdocTypeIntersection: (result, transform) => ({
                type: 'JsdocTypeIntersection',
                elements: result.elements.map(transform)
            }),
            JsdocTypeGeneric: (result, transform) => ({
                type: 'JsdocTypeGeneric',
                left: transform(result.left),
                elements: result.elements.map(transform),
                meta: {
                    dot: result.meta.dot,
                    brackets: result.meta.brackets
                }
            }),
            JsdocTypeNullable: result => result,
            JsdocTypeUnion: (result, transform) => ({
                type: 'JsdocTypeUnion',
                elements: result.elements.map(transform)
            }),
            JsdocTypeUnknown: result => result,
            JsdocTypeUndefined: result => result,
            JsdocTypeTypeof: (result, transform) => ({
                type: 'JsdocTypeTypeof',
                element: transform(result.element)
            }),
            JsdocTypeSymbol: (result, transform) => {
                const transformed = {
                    type: 'JsdocTypeSymbol',
                    value: result.value
                };
                if (result.element !== undefined) {
                    transformed.element = transform(result.element);
                }
                return transformed;
            },
            JsdocTypeOptional: (result, transform) => ({
                type: 'JsdocTypeOptional',
                element: transform(result.element),
                meta: {
                    position: result.meta.position
                }
            }),
            JsdocTypeObject: (result, transform) => ({
                type: 'JsdocTypeObject',
                meta: {
                    separator: 'comma'
                },
                elements: result.elements.map(transform)
            }),
            JsdocTypeNumber: result => result,
            JsdocTypeNull: result => result,
            JsdocTypeNotNullable: (result, transform) => ({
                type: 'JsdocTypeNotNullable',
                element: transform(result.element),
                meta: {
                    position: result.meta.position
                }
            }),
            JsdocTypeSpecialNamePath: result => result,
            JsdocTypeObjectField: (result, transform) => ({
                type: 'JsdocTypeObjectField',
                key: result.key,
                right: result.right === undefined ? undefined : transform(result.right),
                optional: result.optional,
                readonly: result.readonly,
                meta: result.meta
            }),
            JsdocTypeJsdocObjectField: (result, transform) => ({
                type: 'JsdocTypeJsdocObjectField',
                left: transform(result.left),
                right: transform(result.right)
            }),
            JsdocTypeKeyValue: (result, transform) => {
                return {
                    type: 'JsdocTypeKeyValue',
                    key: result.key,
                    right: result.right === undefined ? undefined : transform(result.right),
                    optional: result.optional,
                    variadic: result.variadic
                };
            },
            JsdocTypeImport: (result, transform) => ({
                type: 'JsdocTypeImport',
                element: transform(result.element)
            }),
            JsdocTypeAny: result => result,
            JsdocTypeStringValue: result => result,
            JsdocTypeNamePath: result => result,
            JsdocTypeVariadic: (result, transform) => {
                const transformed = {
                    type: 'JsdocTypeVariadic',
                    meta: {
                        position: result.meta.position,
                        squareBrackets: result.meta.squareBrackets
                    }
                };
                if (result.element !== undefined) {
                    transformed.element = transform(result.element);
                }
                return transformed;
            },
            JsdocTypeTuple: (result, transform) => ({
                type: 'JsdocTypeTuple',
                elements: result.elements.map(transform)
            }),
            JsdocTypeName: result => result,
            JsdocTypeFunction: (result, transform) => {
                const transformed = {
                    type: 'JsdocTypeFunction',
                    arrow: result.arrow,
                    parameters: result.parameters.map(transform),
                    constructor: result.constructor,
                    parenthesis: result.parenthesis
                };
                if (result.returnType !== undefined) {
                    transformed.returnType = transform(result.returnType);
                }
                return transformed;
            },
            JsdocTypeKeyof: (result, transform) => ({
                type: 'JsdocTypeKeyof',
                element: transform(result.element)
            }),
            JsdocTypeParenthesis: (result, transform) => ({
                type: 'JsdocTypeParenthesis',
                element: transform(result.element)
            }),
            JsdocTypeProperty: result => result,
            JsdocTypePredicate: (result, transform) => ({
                type: 'JsdocTypePredicate',
                left: transform(result.left),
                right: transform(result.right)
            }),
            JsdocTypeIndexSignature: (result, transform) => ({
                type: 'JsdocTypeIndexSignature',
                key: result.key,
                right: transform(result.right)
            }),
            JsdocTypeMappedType: (result, transform) => ({
                type: 'JsdocTypeMappedType',
                key: result.key,
                right: transform(result.right)
            }),
            JsdocTypeAsserts: (result, transform) => ({
                type: 'JsdocTypeAsserts',
                left: transform(result.left),
                right: transform(result.right)
            })
        };
    }

    const visitorKeys = {
        JsdocTypeAny: [],
        JsdocTypeFunction: ['parameters', 'returnType'],
        JsdocTypeGeneric: ['left', 'elements'],
        JsdocTypeImport: [],
        JsdocTypeIndexSignature: ['right'],
        JsdocTypeIntersection: ['elements'],
        JsdocTypeKeyof: ['element'],
        JsdocTypeKeyValue: ['right'],
        JsdocTypeMappedType: ['right'],
        JsdocTypeName: [],
        JsdocTypeNamePath: ['left', 'right'],
        JsdocTypeNotNullable: ['element'],
        JsdocTypeNull: [],
        JsdocTypeNullable: ['element'],
        JsdocTypeNumber: [],
        JsdocTypeObject: ['elements'],
        JsdocTypeObjectField: ['right'],
        JsdocTypeJsdocObjectField: ['left', 'right'],
        JsdocTypeOptional: ['element'],
        JsdocTypeParenthesis: ['element'],
        JsdocTypeSpecialNamePath: [],
        JsdocTypeStringValue: [],
        JsdocTypeSymbol: ['element'],
        JsdocTypeTuple: ['elements'],
        JsdocTypeTypeof: ['element'],
        JsdocTypeUndefined: [],
        JsdocTypeUnion: ['elements'],
        JsdocTypeUnknown: [],
        JsdocTypeVariadic: ['element'],
        JsdocTypeProperty: [],
        JsdocTypePredicate: ['left', 'right'],
        JsdocTypeAsserts: ['left', 'right']
    };

    function _traverse(node, parentNode, property, onEnter, onLeave) {
        onEnter === null || onEnter === void 0 ? void 0 : onEnter(node, parentNode, property);
        const keysToVisit = visitorKeys[node.type];
        for (const key of keysToVisit) {
            const value = node[key];
            if (value !== undefined) {
                if (Array.isArray(value)) {
                    for (const element of value) {
                        _traverse(element, node, key, onEnter, onLeave);
                    }
                }
                else {
                    _traverse(value, node, key, onEnter, onLeave);
                }
            }
        }
        onLeave === null || onLeave === void 0 ? void 0 : onLeave(node, parentNode, property);
    }
    /**
     * A function to traverse an AST. It traverses it depth first.
     * @param node the node to start traversing at.
     * @param onEnter node visitor function that will be called on entering the node. This corresponds to preorder traversing.
     * @param onLeave node visitor function that will be called on leaving the node. This corresponds to postorder traversing.
     */
    function traverse(node, onEnter, onLeave) {
        _traverse(node, undefined, undefined, onEnter, onLeave);
    }

    exports.catharsisTransform = catharsisTransform;
    exports.identityTransformRules = identityTransformRules;
    exports.jtpTransform = jtpTransform;
    exports.parse = parse;
    exports.stringify = stringify;
    exports.stringifyRules = stringifyRules;
    exports.transform = transform;
    exports.traverse = traverse;
    exports.tryParse = tryParse;
    exports.visitorKeys = visitorKeys;

}));


/***/ }),

/***/ "./node_modules/ts-dedent/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ dedent)
/* harmony export */ });
function dedent(templ) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var strings = Array.from(typeof templ === 'string' ? [templ] : templ);
    strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, '');
    var indentLengths = strings.reduce(function (arr, str) {
        var matches = str.match(/\n([\t ]+|(?!\s).)/g);
        if (matches) {
            return arr.concat(matches.map(function (match) { var _a, _b; return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0; }));
        }
        return arr;
    }, []);
    if (indentLengths.length) {
        var pattern_1 = new RegExp("\n[\t ]{" + Math.min.apply(Math, indentLengths) + "}", 'g');
        strings = strings.map(function (str) { return str.replace(pattern_1, '\n'); });
    }
    strings[0] = strings[0].replace(/^\r?\n/, '');
    var string = strings[0];
    values.forEach(function (value, i) {
        var endentations = string.match(/(?:^|\n)( *)$/);
        var endentation = endentations ? endentations[1] : '';
        var indentedValue = value;
        if (typeof value === 'string' && value.includes('\n')) {
            indentedValue = String(value)
                .split('\n')
                .map(function (str, i) {
                return i === 0 ? str : "" + endentation + str;
            })
                .join('\n');
        }
        string += indentedValue + strings[i + 1];
    });
    return string;
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (dedent)));
//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=454.56ce606c.iframe.bundle.js.map