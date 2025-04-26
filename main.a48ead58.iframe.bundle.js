(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[792],{

/***/ "./.storybook/preview.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parameters: () => (/* binding */ parameters),
/* harmony export */   tags: () => (/* binding */ tags)
/* harmony export */ });
var parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
var tags = ["autodocs", "autodocs"];

/***/ }),

/***/ "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./stories/README.mdx": [
		"./src/stories/README.mdx",
		303,
		399
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./stories/example-00-milestones.stories": [
		"./src/stories/example-00-milestones.stories.js",
		15,
		780,
		760
	],
	"./stories/example-00-milestones.stories.js": [
		"./src/stories/example-00-milestones.stories.js",
		15,
		780,
		760
	],
	"./stories/example-01-milestones-events.stories": [
		"./src/stories/example-01-milestones-events.stories.js",
		15,
		780,
		667
	],
	"./stories/example-01-milestones-events.stories.js": [
		"./src/stories/example-01-milestones-events.stories.js",
		15,
		780,
		667
	],
	"./stories/example-02-vikings.stories": [
		"./src/stories/example-02-vikings.stories.js",
		15,
		780,
		948
	],
	"./stories/example-02-vikings.stories.js": [
		"./src/stories/example-02-vikings.stories.js",
		15,
		780,
		948
	],
	"./stories/example-03-os-category-labels.stories": [
		"./src/stories/example-03-os-category-labels.stories.js",
		15,
		780,
		837
	],
	"./stories/example-03-os-category-labels.stories.js": [
		"./src/stories/example-03-os-category-labels.stories.js",
		15,
		780,
		837
	],
	"./stories/example-04-covid19.stories": [
		"./src/stories/example-04-covid19.stories.js",
		15,
		780,
		634
	],
	"./stories/example-04-covid19.stories.js": [
		"./src/stories/example-04-covid19.stories.js",
		15,
		780,
		634
	],
	"./stories/example-05-lotr.stories": [
		"./src/stories/example-05-lotr.stories.js",
		15,
		780,
		415
	],
	"./stories/example-05-lotr.stories.js": [
		"./src/stories/example-05-lotr.stories.js",
		15,
		780,
		415
	],
	"./stories/example-06-ultima-series.stories": [
		"./src/stories/example-06-ultima-series.stories.js",
		15,
		780,
		67
	],
	"./stories/example-06-ultima-series.stories.js": [
		"./src/stories/example-06-ultima-series.stories.js",
		15,
		780,
		67
	],
	"./stories/example-07-ultima-series-covers.stories": [
		"./src/stories/example-07-ultima-series-covers.stories.js",
		15,
		780,
		683
	],
	"./stories/example-07-ultima-series-covers.stories.js": [
		"./src/stories/example-07-ultima-series-covers.stories.js",
		15,
		780,
		683
	],
	"./stories/example-08-styles.stories": [
		"./src/stories/example-08-styles.stories.js",
		15,
		780,
		747
	],
	"./stories/example-08-styles.stories.js": [
		"./src/stories/example-08-styles.stories.js",
		15,
		780,
		747
	],
	"./stories/example-09-custom-ids.stories": [
		"./src/stories/example-09-custom-ids.stories.js",
		15,
		780,
		542
	],
	"./stories/example-09-custom-ids.stories.js": [
		"./src/stories/example-09-custom-ids.stories.js",
		15,
		780,
		542
	],
	"./stories/example-10-image-formats.stories": [
		"./src/stories/example-10-image-formats.stories.js",
		15,
		780,
		96
	],
	"./stories/example-10-image-formats.stories.js": [
		"./src/stories/example-10-image-formats.stories.js",
		15,
		780,
		96
	],
	"./stories/example-11-ordinal-scale.stories": [
		"./src/stories/example-11-ordinal-scale.stories.js",
		15,
		780,
		215
	],
	"./stories/example-11-ordinal-scale.stories.js": [
		"./src/stories/example-11-ordinal-scale.stories.js",
		15,
		780,
		215
	],
	"./stories/example-12-ordinal-scale-categories.stories": [
		"./src/stories/example-12-ordinal-scale-categories.stories.js",
		15,
		780,
		645
	],
	"./stories/example-12-ordinal-scale-categories.stories.js": [
		"./src/stories/example-12-ordinal-scale-categories.stories.js",
		15,
		780,
		645
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./storybook-config-entry.js":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: external "__STORYBOOK_MODULE_CHANNELS__"
var external_STORYBOOK_MODULE_CHANNELS_ = __webpack_require__("storybook/internal/channels");
// EXTERNAL MODULE: ./node_modules/@storybook/core/dist/csf/index.js
var csf = __webpack_require__("./node_modules/@storybook/core/dist/csf/index.js");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("storybook/internal/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
;// ./storybook-stories.js
const pipeline = (x) => x();

const importers = [
  async (path) => {
    if (!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(6);
    return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./" + pathRemainder);
  }
  ,
  async (path) => {
    if (!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(6);
    return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./" + pathRemainder);
  }
  
];

async function importFn(path) {
  for (let i = 0; i < importers.length; i++) {
    const moduleExports = await pipeline(() => importers[i](path));
    if (moduleExports) {
      return moduleExports;
    }
  }
}
;// ./storybook-config-entry.js








const getProjectAnnotations = () => {
  const previewAnnotations = [__webpack_require__("./node_modules/@storybook/html/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/html/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./.storybook/preview.js")];
  // the last one in this array is the user preview
  const userPreview = previewAnnotations[previewAnnotations.length - 1]?.default;

  if ((0,csf/* isPreview */.bU)(userPreview)) {
    return userPreview.composed;
  }

  return (0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)(previewAnnotations);
};

const channel = (0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({ page: 'preview' });
external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel);

if (external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE === 'DEVELOPMENT') {
  window.__STORYBOOK_SERVER_CHANNEL__ = channel;
}

const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb(importFn, getProjectAnnotations);

window.__STORYBOOK_PREVIEW__ = preview;
window.__STORYBOOK_STORY_STORE__ = preview.storyStore;
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;

if (false) {}


/***/ }),

/***/ "@storybook/global":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_GLOBAL__;

/***/ }),

/***/ "storybook/internal/channels":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CHANNELS__;

/***/ }),

/***/ "storybook/internal/client-logger":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;

/***/ }),

/***/ "storybook/internal/core-events":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;

/***/ }),

/***/ "storybook/internal/preview-api":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_PREVIEW_API__;

/***/ }),

/***/ "storybook/internal/preview-errors":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [454], () => (__webpack_exec__("./storybook-config-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.a48ead58.iframe.bundle.js.map