"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[67],{

/***/ "./src/stories/assets/ultima-series.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"title":"Akalabeth: World of Doom","cover":"https://www.mobygames.com/images/covers/l/51963-akalabeth-world-of-doom-apple-ii-media.jpg","year":1980},{"title":"Ultima","cover":"https://ultimacodex.com/wp-content/uploads/2012/09/Ultima1.jpg","year":1981},{"title":"Ultima II: The Revenge of the Enchantress...","cover":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/On-Line-Systems-Ultima2.jpg/500px-On-Line-Systems-Ultima2.jpg","year":1982},{"title":"Exodus: Ultima III","cover":"https://ultimacodex.com/wp-content/uploads/2012/09/Exodus.jpg","year":1983},{"title":"Ultima IV: Quest of the Avatar","cover":"https://ultimacodex.com/wp-content/uploads/2012/09/ultimaIV.jpg","year":1985},{"title":"Ultima V: Warriors of Destiny","cover":"https://www.mobygames.com/images/covers/l/286483-ultima-v-warriors-of-destiny-windows-front-cover.jpg","year":1988},{"title":"Ultima VI: The False Prophet","cover":"https://upload.wikimedia.org/wikipedia/en/4/4a/Ultima_6_cover.png","year":1990},{"title":"Ultima VII: The Black Gate","cover":"https://ultimacodex.com/wp-content/uploads/2012/09/Ultima7.jpg","year":1992},{"title":"Ultima VII: Part Two - Serpent Isle","cover":"https://www.mobygames.com/images/covers/l/165651-ultima-vii-part-two-serpent-isle-dos-front-cover.jpg","year":1993},{"title":"Pagan: Ultima VIII","cover":"https://www.mobygames.com/images/covers/l/2748-pagan-ultima-viii-dos-front-cover.jpg","year":1994},{"title":"Ultima IX: Ascension","cover":"https://ultimacodex.com/wp-content/uploads/2012/09/Ultima9.jpg","year":1999}]');

/***/ }),

/***/ "./src/stories/example-06-ultima-series.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UltimaSeries: () => (/* binding */ UltimaSeries),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _milestones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/stories/milestones.js");
/* harmony import */ var _assets_ultima_series_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/stories/assets/ultima-series.json");

// from https://www.mobygames.com/game-group/ultima-series/offset,0/so,1d/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'd3-milestones',
  argTypes: _milestones__WEBPACK_IMPORTED_MODULE_0__/* .argTypes */ .U
});
const Template = args => (0,_milestones__WEBPACK_IMPORTED_MODULE_0__/* .createMilestones */ .K)('Ultima series', undefined, args);
const UltimaSeries = Template.bind({});
UltimaSeries.args = {
  aggregateBy: 'year',
  optimize: true,
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'title'
  },
  data: _assets_ultima_series_json__WEBPACK_IMPORTED_MODULE_1__
};
;
const __namedExportsOrder = ["UltimaSeries"];
UltimaSeries.parameters = {
  ...UltimaSeries.parameters,
  docs: {
    ...UltimaSeries.parameters?.docs,
    source: {
      originalSource: "args => createMilestones('Ultima series', undefined, args)",
      ...UltimaSeries.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-06-ultima-series-stories.1c8385de.iframe.bundle.js.map