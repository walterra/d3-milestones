(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[399],{

/***/ "./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ "./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/@storybook/core/dist/components sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@storybook/core/dist/components sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/@storybook/core/dist/theming sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@storybook/core/dist/theming sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./src/stories/README.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs
var dist = __webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs");
;// ./README.md?raw
const READMEraw_namespaceObject = "[![npm](https://img.shields.io/npm/v/d3-milestones.svg?maxAge=2592000)](https://www.npmjs.com/package/d3-milestones)\n[![npm](https://img.shields.io/npm/l/d3-milestones.svg?maxAge=2592000)](https://www.npmjs.com/package/d3-milestones)\n[![npm](https://img.shields.io/npm/dt/d3-milestones.svg?maxAge=2592000)](https://www.npmjs.com/package/d3-milestones)\n[![github ci](https://github.com/walterra/d3-milestones/actions/workflows/ci.yml/badge.svg)](https://github.com/walterra/d3-milestones/actions/workflows/ci.yml)\n\n# d3-milestones\n\nA d3 based timeline visualization.\n\n![The Viking Timeline](https://github.com/walterra/d3-milestones/raw/main/src/stories/assets/vikings.png)\n\n- NPM: https://www.npmjs.com/package/d3-milestones\n- Github: https://github.com/walterra/d3-milestones\n- Storybook demos: https://walterra.github.io/d3-milestones\n\nIf you're using `d3-milestones` out in the wild I'd love to see what you came up with, just ping me on [twitter.com/walterra](https://www.twitter.com/walterra).\n\n## Installing\n\n`yarn add d3-milestones`.\n\nThe most quick way to get going is to use `unpkg.com` as a CDN to include the library directly into your HTML file.\n\n```html\n<link rel=\"stylesheet\" href=\"https://unpkg.com/d3-milestones/build/d3-milestones.css\">\n<script src=\"https://unpkg.com/d3-milestones/build/d3-milestones.min.js\"></script>\n\n<div id=\"timeline\"></div>\n\n<script>\n  milestones('#timeline')\n    .mapping({\n      'timestamp': 'year',\n      'text': 'title'\n    })\n    .parseTime('%Y')\n    .aggregateBy('year')\n    .render([\n      { year: 789, title: 'Vikings begin attacks on England.' },\n      { year: 840, title: 'Vikings found Dublin in Ireland.' }\n      ...\n      { year: 1050, title: 'The city of Oslo is founded in Norway.' },\n      { year: 1066, title: 'Battle of Hastings.' }\n    ]);\n</script>\n```\n\nHead over here to see this example in action: https://beta.observablehq.com/@walterra/vikings-timeline.\n\n## Examples\n\nExamples are included using storybook:\n\n- [Vikings Timeline](https://walterra.github.io/d3-milestones/?path=/story/d3-milestones--vikings)\n- [Windows/macOS Timeline](https://walterra.github.io/d3-milestones/?path=/story/d3-milestones--os-category-labels)\n- [Ordinal Scale Example](https://walterra.github.io/d3-milestones/?path=/story/d3-milestones--ordinal-scale-example) - Demonstrates using an ordinal scale instead of time scale\n- [Ordinal Scale with Categories](https://walterra.github.io/d3-milestones/?path=/story/d3-milestones--ordinal-scale-categories-example) - Shows how to use ordinal scales with multiple categories\n\n## API Reference\n\n### General Usage\n\nTo initialize *d3-milestones*, pass a DOM Id to its main factory:\n\n```javascript\n  const vis = milestones('#wrapper');\n```\n\nThe returned object exposes the following API:\n\n<a name=\"aggregateBy\" href=\"#aggregateBy\">#</a> vis.<b>aggregateBy</b>(<i>interval</i>)\n\nSets the aggregation interval for the event data, where *interval* can be one of `second`, `minute`, `hour`, `day`, `week`, `month`, `quarter` or `year`.\n\n<a name=\"distribution\" href=\"#distribution\">#</a> vis.<b>distribution</b>(<i>string</i>)\n\nSets the label distribution, can be `top-bottom`, `top` or `bottom`. Defaults to `top-bottom`. The options don't change for vertical layouts. `top` refers to labels on the left and `bottom` to labels on the right for that layout.\n\n<a name=\"mapping\" href=\"#mapping\">#</a> vis.<b>mapping</b>(<i>configObject</i>)\n\nSets overrides for the default attributes for the expected data structure of an event. This defaults to:\n\n```js\n  {\n    category: undefined,\n    entries: undefined,\n    timestamp: 'timestamp',  // Used only for time based scales\n    value: 'value',          // Used only for ordinal scale values\n    text: 'text',\n    url: 'url',\n    id: 'id',\n    textStyle: undefined,    // Field name for custom text styling\n    categoryStyle: undefined, // Field name for custom category label styling\n    bulletStyle: undefined   // Field name for custom bullet styling\n  };\n```\n\nThe method allows you to override single or multiple attributes to map them to fields in your original data with a single call like:\n\n```js\n    vis.mapping({\n      'timestamp': 'year',\n      'text': 'title'\n    })\n```\n\n**Custom Styling Fields:**\n\n- `textStyle`: Maps to a field in your data containing an object with CSS property-value pairs for event text labels.\n- `categoryStyle`: Maps to a field in your data containing an object with CSS property-value pairs for category labels.\n- `bulletStyle`: Maps to a field in your data containing an object with CSS property-value pairs for bullets (e.g., `background-color`, `border-color`, `padding`, `border-width`).\n\nExample with custom styling:\n\n```js\nvis.mapping({\n  'timestamp': 'year',\n  'text': 'title',\n  'bulletStyle': 'bulletStyle',\n  'categoryStyle': 'categoryStyle'\n})\n.render([\n  {\n    year: 1990,\n    title: \"Custom Red Bullet\",\n    bulletStyle: { \n      \"background-color\": \"#E12800\", \n      \"border-color\": \"#E12800\", \n      \"padding\": \"10px\" \n    }\n  }\n]);\n```\n\n<a name=\"optimize\" href=\"#optimize\">#</a> vis.<b>optimize</b>(<i>boolean</i>)\n\nEnables/Disables the label optimizer. When enabled, the optimizer attempts to avoid label overlap by vertically displacing labels.\n\n<a name=\"autoResize\" href=\"#autoResize\">#</a> vis.<b>autoResize</b>(<i>boolean</i>)\n\nEnables/Disables auto resizing. Enabled by default, this adds listeners to resizing events of the browser window.\n\n<a name=\"orientation\" href=\"#orientation\">#</a> vis.<b>orientation</b>(<i>string</i>)\n\nSets the orientation of the timeline, can be either `horizontal` or `vertical`. Defaults to `horizontal`.\n\n<a name=\"scaleType\" href=\"#scaleType\">#</a> vis.<b>scaleType</b>(<i>string</i>)\n\nSets the scale type of the timeline, can be either `time` or `ordinal`. Defaults to `time`.\n\n- `time`: Uses a time scale for chronological data with timestamps\n- `ordinal`: Uses an ordinal scale for categorical data without timestamps\n\n<a name=\"parseTime\" href=\"#parseTime\">#</a> vis.<b>parseTime</b>(<i>specifier</i>)\n\nSpecifies the formatter for the timestamp field. The specifier string is expected to resemble a format described here: https://github.com/d3/d3-time-format#locale_format\n\n<a name=\"labelFormat\" href=\"#labelFormat\">#</a> vis.<b>labelFormat</b>(<i>specifier</i>)\n\nThe `labelFormat` for the time label for each milestones defaults to `'%Y-%m-%d %H:%M'`. Using `aggregateBy`, `labelFormat` will be set automatically to a reasonable format corresponding to the aggregation level. Still, this method is available to override this behavior with a custom `labelFormat`.\n\n<a name=\"urlTarget\" href=\"#urlTarget\">#</a> vis.<b>urlTarget</b>(<i>string</i>)\n\nCustomizes the `target` attribute when labels are provided with a URL. Can be `_blank`, `_self`, `_parent` or  `_top`.\n\n<a name=\"useLabels\" href=\"#useLabels\">#</a> vis.<b>useLabels</b>(<i>boolean</i>)\n\nEnables/Disables the display of labels.\n\n<a name=\"render\" href=\"#render\">#</a> vis.<b>render</b>(<i>[data]</i>)\n\nWhen called without `data` this triggers re-rendering the existing visualization.\n\n`data` is expected to be an array of event objects with fields matching either the expected defaults (`timestamp` and `text` attribute) or the provided mapping via `.mapping()`.\n\n<a name=\"renderCallback\" href=\"#renderCallback\">#</a> vis.<b>renderCallback</b>(<i>function</i>)\n\nSets a callback function that is executed after the visualization is fully rendered, allowing you to apply custom styling or modifications to the rendered elements. The callback is called after both initial renders and automatic re-renders due to window resizing.\n\n```js\nvis.renderCallback(function() {\n  // Apply additional customizations after rendering is complete\n  d3.select(\".milestones\").style(\"margin-left\", \"10%\");\n}).render(data);\n```\n\n<a name=\"onEventClick\" href=\"#onEventClick\">#</a> vis.<b>onEventClick</b>(<i>function</i>)\n\nSet a callback which is executed when the text or image is clicked.\n\n```js\n  vis.onEventClick((d) => {\n    console.log('click', d);\n    alert(`\n      ${d.text} | ${d.timestamp}\n      ${JSON.stringify(d.attributes)}\n    `);\n  })\n```\n\n<a name=\"onEventMouseOver\" href=\"#onEventMouseOver\">#</a> vis.<b>onEventMouseOver</b>(<i>function</i>)\n\nSet a callback which is executed when the mouse cursor is over text or image.\n\n```js\n  vis.onEventMouseOver((d) => {\n    console.log('mouseover', d);\n  })\n```\n\n<a name=\"onEventMouseLeave\" href=\"#onEventMouseLeave\">#</a> vis.<b>onEventMouseLeave</b>(<i>function</i>)\n\nSet a callback which is executed when the mouse cursor is leaving text or image.\n\n```js\n  vis.onEventMouseLeave((d) => {\n    console.log('mouseleave', d);\n  })\n```\n\n## Disclaimer on DevOps/CI Observability\n\nThis repository uses [Elastic APM](https://www.elastic.co/observability/application-performance-monitoring) to track performance of functional tests. It uses `@elastic/apm-rum` as a `devDependency` to be run only as part of the tests. No telemetry library is part of the published package.\n\n\n## More\n\n`d3-milestones` is also available as a visualization plugin for Kibana here: https://github.com/walterra/kibana-milestones-vis\n";
;// ./src/stories/README.mdx








function _createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Meta */.W8, {
      title: "d3-milestones/README.md"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Markdown */.oz, {
      children: READMEraw_namespaceObject
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


/***/ })

}]);
//# sourceMappingURL=stories-README-mdx.ddb2a9a2.iframe.bundle.js.map