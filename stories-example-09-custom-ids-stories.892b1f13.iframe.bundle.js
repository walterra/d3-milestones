"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[542],{

/***/ "./src/stories/example-09-custom-ids.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CustomIds: () => (/* binding */ CustomIds),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ example_09_custom_ids_stories)
});

// EXTERNAL MODULE: ./src/stories/milestones.js + 15 modules
var milestones = __webpack_require__("./src/stories/milestones.js");
;// ./src/stories/assets/milestones-with-ids.json
const milestones_with_ids_namespaceObject = /*#__PURE__*/JSON.parse('[{"timestamp":"2017-08-22T00:00","detail":"v1.0.0-alpha1","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha1","customId":"milestone-v1-0-0-alpha1"},{"timestamp":"2017-08-24T00:00","detail":"v1.0.0-alpha2","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha2","customId":"milestone-v1-0-0-alpha2"},{"timestamp":"2017-08-30T00:00","detail":"v1.0.0-alpha3","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha3","customId":"milestone-v1-0-0-alpha3"},{"timestamp":"2017-09-03T00:00","detail":"v1.0.0-alpha4","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha4","customId":"milestone-v1-0-0-alpha4"},{"timestamp":"2017-09-06T00:00","detail":"v1.0.0-alpha5","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha5","customId":"milestone-v1-0-0-alpha5"},{"timestamp":"2017-10-16T00:00","detail":"v1.0.0-alpha6","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha6","customId":"milestone-v1-0-0-alpha6"},{"timestamp":"2017-11-02T00:00","detail":"v1.0.0-alpha7","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha7","customId":"milestone-v1-0-0-alpha7"},{"timestamp":"2017-11-03T00:00","detail":"v1.0.0-alpha8","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha8","customId":"milestone-v1-0-0-alpha8"},{"timestamp":"2018-01-05T00:00","detail":"v1.0.0-alpha9","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha9","customId":"milestone-v1-0-0-alpha9"},{"timestamp":"2018-01-30T00:00","detail":"v1.0.0-alpha10","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha10","customId":"milestone-v1-0-0-alpha10"},{"timestamp":"2018-02-19T00:00","detail":"v1.0.0-alpha11","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha11","customId":"milestone-v1-0-0-alpha11"},{"timestamp":"2018-03-28T00:00","detail":"v1.0.0-alpha12","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha12","customId":"milestone-v1-0-0-alpha12"},{"timestamp":"2018-04-27T00:00","detail":"v1.0.0-alpha13","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha13","customId":"milestone-v1-0-0-alpha13"},{"timestamp":"2020-02-18T00:00","detail":"v1.0.0-alpha14","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-alpha14","customId":"milestone-v1-0-0-alpha14"},{"timestamp":"2020-03-14T00:00","detail":"v1.0.0-beta1","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-beta1","customId":"milestone-v1-0-0-beta1"},{"timestamp":"2020-03-17T00:00","detail":"v1.0.0-beta2","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0-beta2","customId":"milestone-v1-0-0-beta2"},{"timestamp":"2020-04-14T00:00","detail":"v1.0.0","giturl":"https://github.com/walterra/d3-milestones/releases/tag/v1.0.0","customId":"milestone-v1-0-0"}]');
;// ./src/stories/example-09-custom-ids.stories.js


/* harmony default export */ const example_09_custom_ids_stories = ({
  title: 'd3-milestones',
  argTypes: milestones/* argTypes */.U
});
const Template = args => (0,milestones/* createMilestones */.K)('Custom ID Attributes', `This example demonstrates the use of custom HTML ID attributes for milestone elements. Each milestone element has a unique ID attribute that can be used for direct DOM access or styling.`, args);
const CustomIds = Template.bind({});
CustomIds.args = {
  optimize: true,
  aggregateBy: 'day',
  mapping: {
    timestamp: 'timestamp',
    text: 'detail',
    url: 'giturl',
    id: 'customId'
  },
  urlTarget: '_blank',
  data: milestones_with_ids_namespaceObject
};
;
const __namedExportsOrder = ["CustomIds"];
CustomIds.parameters = {
  ...CustomIds.parameters,
  docs: {
    ...CustomIds.parameters?.docs,
    source: {
      originalSource: "args => createMilestones('Custom ID Attributes', `This example demonstrates the use of custom HTML ID attributes for milestone elements. Each milestone element has a unique ID attribute that can be used for direct DOM access or styling.`, args)",
      ...CustomIds.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-09-custom-ids-stories.892b1f13.iframe.bundle.js.map