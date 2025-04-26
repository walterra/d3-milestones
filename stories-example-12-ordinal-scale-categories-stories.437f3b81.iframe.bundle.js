"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[645],{

/***/ "./src/stories/example-12-ordinal-scale-categories.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdinalScaleCategories: () => (/* binding */ OrdinalScaleCategories),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _milestones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/stories/milestones.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'd3-milestones',
  argTypes: _milestones__WEBPACK_IMPORTED_MODULE_0__/* .argTypes */ .U
});

// Sample data for an ordinal scale timeline with categories
const categoriesData = [{
  category: 'Frontend',
  steps: [{
    step: 'Requirements',
    detail: 'Gather interface requirements'
  }, {
    step: 'Wireframes',
    detail: 'Create wireframes and mockups'
  }, {
    step: 'Implementation',
    detail: 'Develop frontend components'
  }, {
    step: 'Testing',
    detail: 'Test frontend components'
  }]
}, {
  category: 'Backend',
  steps: [{
    step: 'Architecture',
    detail: 'Design system architecture'
  }, {
    step: 'Database',
    detail: 'Create database schema'
  }, {
    step: 'API',
    detail: 'Implement API endpoints'
  }, {
    step: 'Integration',
    detail: 'Connect frontend and backend'
  }]
}, {
  category: 'DevOps',
  steps: [{
    step: 'Environment',
    detail: 'Set up development environment'
  }, {
    step: 'CI/CD',
    detail: 'Configure CI/CD pipeline'
  }, {
    step: 'Deployment',
    detail: 'Prepare deployment strategy'
  }, {
    step: 'Monitoring',
    detail: 'Set up monitoring tools'
  }]
}];
const Template = args => (0,_milestones__WEBPACK_IMPORTED_MODULE_0__/* .createMilestones */ .K)('Ordinal Scale with Categories', 'This example demonstrates using an ordinal scale with multiple categories', args);
const OrdinalScaleCategories = Template.bind({});
OrdinalScaleCategories.args = {
  scaleType: 'ordinal',
  optimize: true,
  mapping: {
    category: 'category',
    entries: 'steps',
    value: 'step',
    text: 'detail'
  },
  data: categoriesData
};
;
const __namedExportsOrder = ["OrdinalScaleCategories"];
OrdinalScaleCategories.parameters = {
  ...OrdinalScaleCategories.parameters,
  docs: {
    ...OrdinalScaleCategories.parameters?.docs,
    source: {
      originalSource: "args => createMilestones('Ordinal Scale with Categories', 'This example demonstrates using an ordinal scale with multiple categories', args)",
      ...OrdinalScaleCategories.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-12-ordinal-scale-categories-stories.437f3b81.iframe.bundle.js.map