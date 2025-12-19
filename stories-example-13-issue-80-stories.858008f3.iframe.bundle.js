"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[867],{

/***/ "./src/stories/example-13-issue-80.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Issue80: () => (/* binding */ Issue80),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ example_13_issue_80_stories)
});

// EXTERNAL MODULE: ./src/stories/milestones.js + 15 modules
var milestones = __webpack_require__("./src/stories/milestones.js");
;// ./src/stories/assets/issue-80.json
const issue_80_namespaceObject = /*#__PURE__*/JSON.parse('[{"system":"Windows","categoryStyle":{"color":"#0078D4","font-weight":"bold","font-size":"1.2em"},"versions":[{"year":1985,"title":"Windows 1.0"},{"year":1991,"title":"Item 1 - Demo","titleStyle":{"color":"#0078D4","font-weight":"bold"}},{"year":1991,"title":"Item 2 - Demo","titleStyle":{"color":"#E12800"}},{"year":1991,"title":"Item 3 - Demo"},{"year":1991,"title":"Item 4 - Demo","titleStyle":{"font-style":"italic"}},{"year":1991,"title":"Item 5 - Demo"},{"year":1991,"title":"Item 6 - Demo"},{"year":1991,"title":"Item 7 - Demo","titleStyle":{"color":"#2BFD00"}},{"year":1991,"title":"Item 8 - Demo"},{"year":1991,"title":"Item 9 - Demo"},{"year":1991,"title":"Item 10 - Demo","titleStyle":{"color":"#5BC6FF","font-size":"1.2em"}},{"year":1995,"title":"Windows 95"},{"year":2001,"title":"Windows XP"},{"year":2007,"title":"Windows Vista"},{"year":2012,"title":"Windows 8"}]},{"system":"Mac","categoryStyle":{"color":"#A2AAAD","font-style":"italic","font-size":"1.2em"},"versions":[{"year":1991,"title":"System 7.0","titleStyle":{"color":"#A2AAAD","font-style":"italic"}},{"year":2001,"title":"Mac OS X 10.0"},{"year":2001,"title":"Mac OS X 10.1"},{"year":2007,"title":"Mac OS X 10.5"},{"year":2007,"title":"iPhone Launch"}]}]');
;// ./src/stories/example-13-issue-80.stories.js


/* harmony default export */ const example_13_issue_80_stories = ({
  title: 'd3-milestones',
  argTypes: milestones/* argTypes */.U
});
const Template = args => (0,milestones/* createMilestones */.K)('Issue #80 - Spacing Fix and Category Styling', 'Year 1991 has 10 items in Windows timeline. The spacing between timelines is now correct (not affected by item count). Categories (Windows/Mac) have individual styling with categoryStyle.', args);
const Issue80 = Template.bind({});
Issue80.args = {
  optimize: true,
  aggregateBy: 'year',
  parseTime: '%Y',
  mapping: {
    category: 'system',
    entries: 'versions',
    timestamp: 'year',
    text: 'title',
    titleStyle: 'titleStyle',
    categoryStyle: 'categoryStyle'
  },
  data: issue_80_namespaceObject
};
;
const __namedExportsOrder = ["Issue80"];
Issue80.parameters = {
  ...Issue80.parameters,
  docs: {
    ...Issue80.parameters?.docs,
    source: {
      originalSource: "args => createMilestones('Issue #80 - Spacing Fix and Category Styling', 'Year 1991 has 10 items in Windows timeline. The spacing between timelines is now correct (not affected by item count). Categories (Windows/Mac) have individual styling with categoryStyle.', args)",
      ...Issue80.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-13-issue-80-stories.858008f3.iframe.bundle.js.map