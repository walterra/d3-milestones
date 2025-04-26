"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[837],{

/***/ "./src/stories/example-03-os-category-labels.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  OsCategoryLabels: () => (/* binding */ OsCategoryLabels),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ example_03_os_category_labels_stories)
});

// EXTERNAL MODULE: ./src/stories/milestones.js + 15 modules
var milestones = __webpack_require__("./src/stories/milestones.js");
;// ./src/stories/assets/os-category-labels.json
const os_category_labels_namespaceObject = /*#__PURE__*/JSON.parse('[{"system":"Windows","versions":[{"year":1985,"title":"Windows 1.0"},{"year":1987,"title":"Windows 2.0"},{"year":1988,"title":"Windows 2.10"},{"year":1989,"title":"Windows 2.11"},{"year":1990,"title":"Windows 3.0"},{"year":1991,"title":"Windows 3.0 with Multimedia Extensions"},{"year":1992,"title":"Windows 3.1"},{"year":1992,"title":"Windows for Workgroups 3.1"},{"year":1993,"title":"Windows NT 3.1"},{"year":1993,"title":"Windows for Workgroups 3.11"},{"year":1994,"title":"Windows NT 3.5"},{"year":1995,"title":"Windows NT 3.51"},{"year":1995,"title":"Windows 95"},{"year":1996,"title":"Windows NT 4.0"},{"year":1998,"title":"Windows 98"},{"year":1999,"title":"Windows 98 SE"},{"year":2000,"title":"Windows 2000"},{"year":2000,"title":"Windows ME"},{"year":2001,"title":"Windows XP"},{"year":2003,"title":"Windows Server 2003"},{"year":2005,"title":"Windows XP Professional x64 Edition"},{"year":2006,"title":"Windows Vista"},{"year":2008,"title":"Windows Server 2008"},{"year":2009,"title":"Windows 7"},{"year":2012,"title":"Windows Server 2012"},{"year":2012,"title":"Windows 8"},{"year":2013,"title":"Windows RT"},{"year":2015,"title":"Windows 10"},{"year":2016,"title":"Windows Server 2016"}]},{"system":"Mac","versions":[{"year":1984,"title":"System 1.0"},{"year":1984,"title":"System 1.1"},{"year":1985,"title":"System 2.0"},{"year":1985,"title":"System 2.1"},{"year":1986,"title":"System 3.0"},{"year":1986,"title":"System 3.1"},{"year":1986,"title":"System 3.2"},{"year":1987,"title":"System 4.0"},{"year":1987,"title":"System 4.1"},{"year":1987,"title":"System 5.0"},{"year":1987,"title":"System 5.1"},{"year":1988,"title":"System 6.0"},{"year":1988,"title":"System 6.0.1"},{"year":1988,"title":"System 6.0.2"},{"year":1989,"title":"System 6.0.3"},{"year":1989,"title":"System 6.0.4"},{"year":1990,"title":"System 6.0.5"},{"year":1990,"title":"System 6.0.6"},{"year":1990,"title":"System 6.0.7"},{"year":1991,"title":"System 6.0.8"},{"year":1991,"title":"System 7.0"},{"year":1992,"title":"System 7.1"},{"year":1993,"title":"System 7.1.1"},{"year":1994,"title":"System 7.1.2"},{"year":1994,"title":"System 7.5"},{"year":1995,"title":"System 7.5.1"},{"year":1995,"title":"System 7.5.2"},{"year":1996,"title":"System 7.5.3"},{"year":1996,"title":"System 7.5.5"},{"year":1997,"title":"Mac OS 7.6"},{"year":1997,"title":"Mac OS 7.6.1"},{"year":1997,"title":"Mac OS 8.0"},{"year":1998,"title":"Mac OS 8.1"},{"year":1998,"title":"Mac OS 8.5"},{"year":1998,"title":"Mac OS 8.5.1"},{"year":1999,"title":"Mac OS 8.6"},{"year":1999,"title":"Mac OS 9.0"},{"year":2001,"title":"Mac OS 9.1"},{"year":2001,"title":"Mac OS 9.2"},{"year":2001,"title":"Mac OS X 10.0"},{"year":2001,"title":"Mac OS X 10.1"},{"year":2002,"title":"Mac OS X 10.2"},{"year":2003,"title":"Mac OS X 10.3"},{"year":2005,"title":"Mac OS X 10.4"},{"year":2007,"title":"Mac OS X 10.5"},{"year":2009,"title":"Mac OS X 10.6"},{"year":2011,"title":"Mac OS X 10.7"},{"year":2012,"title":"OS X 10.8"},{"year":2013,"title":"OS X 10.9"},{"year":2014,"title":"OS X 10.10"},{"year":2015,"title":"OS X 10.11"},{"year":2016,"title":"macOS 10.12"},{"year":2017,"title":"macOS 10.13"}]}]');
;// ./src/stories/example-03-os-category-labels.stories.js


/* harmony default export */ const example_03_os_category_labels_stories = ({
  title: 'd3-milestones',
  argTypes: milestones/* argTypes */.U
});
const Template = args => (0,milestones/* createMilestones */.K)('Windows / Mac OS Timelines with Labels', undefined, args);
const OsCategoryLabels = Template.bind({});
OsCategoryLabels.args = {
  optimize: true,
  aggregateBy: 'year',
  parseTime: '%Y',
  mapping: {
    category: 'system',
    entries: 'versions',
    timestamp: 'year',
    text: 'title'
  },
  data: os_category_labels_namespaceObject
};
;
const __namedExportsOrder = ["OsCategoryLabels"];
OsCategoryLabels.parameters = {
  ...OsCategoryLabels.parameters,
  docs: {
    ...OsCategoryLabels.parameters?.docs,
    source: {
      originalSource: "args => createMilestones('Windows / Mac OS Timelines with Labels', undefined, args)",
      ...OsCategoryLabels.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-03-os-category-labels-stories.904057c5.iframe.bundle.js.map