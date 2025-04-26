"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[215],{

/***/ "./src/stories/example-11-ordinal-scale.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdinalScale: () => (/* binding */ OrdinalScale),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _milestones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/stories/milestones.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'd3-milestones',
  argTypes: _milestones__WEBPACK_IMPORTED_MODULE_0__/* .argTypes */ .U
});

// Sample data for an ordinal scale timeline
const ordinalData = [{
  step: 'Step 1',
  detail: 'Planning phase'
}, {
  step: 'Step 2',
  detail: 'Research phase'
}, {
  step: 'Step 3',
  detail: 'Development phase'
}, {
  step: 'Step 4',
  detail: 'Testing phase'
}, {
  step: 'Step 5',
  detail: 'Deployment phase'
}];
const Template = args => (0,_milestones__WEBPACK_IMPORTED_MODULE_0__/* .createMilestones */ .K)('Ordinal Scale', 'This example demonstrates using an ordinal scale instead of time scale', args);
const OrdinalScale = Template.bind({});
OrdinalScale.args = {
  scaleType: 'ordinal',
  optimize: true,
  mapping: {
    value: 'step',
    text: 'detail'
  },
  data: ordinalData
};
;
const __namedExportsOrder = ["OrdinalScale"];
OrdinalScale.parameters = {
  ...OrdinalScale.parameters,
  docs: {
    ...OrdinalScale.parameters?.docs,
    source: {
      originalSource: "args => createMilestones('Ordinal Scale', 'This example demonstrates using an ordinal scale instead of time scale', args)",
      ...OrdinalScale.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-11-ordinal-scale-stories.90861068.iframe.bundle.js.map