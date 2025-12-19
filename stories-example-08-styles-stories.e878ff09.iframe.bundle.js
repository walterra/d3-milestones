"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[747],{

/***/ "./src/stories/example-08-styles.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Styles: () => (/* binding */ Styles),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ example_08_styles_stories)
});

// EXTERNAL MODULE: ./src/stories/milestones.js + 15 modules
var milestones = __webpack_require__("./src/stories/milestones.js");
;// ./src/stories/assets/styles.json
const styles_namespaceObject = /*#__PURE__*/JSON.parse('[{"text":"Default Title","year":1980},{"text":"Green Title","year":1990,"titleStyle":{"color":"#2BFD00"}},{"text":"Bold text","year":1990,"textStyle":{"font-weight":"bold"}},{"text":"Red Title","year":2000,"titleStyle":{"color":"#E12800"}},{"text":"Blue Title","year":2000,"titleStyle":{"color":"#5BC6FF"}},{"text":"Red Text, Blue Title","year":2010,"textStyle":{"color":"#E12800"},"titleStyle":{"color":"#5BC6FF"}},{"text":"Italic text","year":2010,"textStyle":{"font-style":"italic"}},{"text":"Large font-size","year":2020,"textStyle":{"font-size":"16px"}},{"text":"Small font-size","year":2020,"textStyle":{"font-size":"8px"}}]');
;// ./src/stories/example-08-styles.stories.js


/* harmony default export */ const example_08_styles_stories = ({
  title: 'd3-milestones',
  argTypes: milestones/* argTypes */.U
});
const Template = args => (0,milestones/* createMilestones */.K)('Styles', undefined, args);
const Styles = Template.bind({});
Styles.args = {
  aggregateBy: 'year',
  optimize: true,
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'text'
  },
  data: styles_namespaceObject
};
;
const __namedExportsOrder = ["Styles"];
Styles.parameters = {
  ...Styles.parameters,
  docs: {
    ...Styles.parameters?.docs,
    source: {
      originalSource: "args => createMilestones('Styles', undefined, args)",
      ...Styles.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-08-styles-stories.e878ff09.iframe.bundle.js.map