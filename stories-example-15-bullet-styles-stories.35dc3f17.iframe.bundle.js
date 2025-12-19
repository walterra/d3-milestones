"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[950],{

/***/ "./src/stories/example-15-bullet-styles.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BulletStyles: () => (/* binding */ BulletStyles),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ example_15_bullet_styles_stories)
});

// EXTERNAL MODULE: ./src/stories/milestones.js + 15 modules
var milestones = __webpack_require__("./src/stories/milestones.js");
;// ./src/stories/assets/bullet-styles.json
const bullet_styles_namespaceObject = /*#__PURE__*/JSON.parse('[{"text":"Default Bullet","year":1980},{"text":"Extra Large Red Bullet","year":1990,"bulletStyle":{"background-color":"#E12800","border-color":"#E12800","padding":"10px","border-width":"5px"}},{"text":"Large Green Border","year":2000,"bulletStyle":{"border-color":"#2BFD00","border-width":"8px","padding":"6px"}},{"text":"Medium Blue","year":2010,"bulletStyle":{"background-color":"#5BC6FF","border-color":"#0078D4","padding":"4px"}},{"text":"Tiny Yellow Bullet","year":2020,"bulletStyle":{"background-color":"#FFD700","border-color":"#FFA500","padding":"0.5px","border-width":"1px"}}]');
;// ./src/stories/example-15-bullet-styles.stories.js


/* harmony default export */ const example_15_bullet_styles_stories = ({
  title: 'd3-milestones',
  argTypes: milestones/* argTypes */.U
});
const Template = args => (0,milestones/* createMilestones */.K)('Bullet Styles', 'Custom bullet colors, sizes, and borders using bulletStyle', args);
const BulletStyles = Template.bind({});
BulletStyles.args = {
  aggregateBy: 'year',
  optimize: true,
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'text',
    bulletStyle: 'bulletStyle'
  },
  data: bullet_styles_namespaceObject
};
;
const __namedExportsOrder = ["BulletStyles"];
BulletStyles.parameters = {
  ...BulletStyles.parameters,
  docs: {
    ...BulletStyles.parameters?.docs,
    source: {
      originalSource: "args => createMilestones('Bullet Styles', 'Custom bullet colors, sizes, and borders using bulletStyle', args)",
      ...BulletStyles.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-15-bullet-styles-stories.35dc3f17.iframe.bundle.js.map