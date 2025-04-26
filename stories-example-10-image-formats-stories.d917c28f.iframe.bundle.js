"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[96],{

/***/ "./src/stories/example-10-image-formats.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ImageFormats: () => (/* binding */ ImageFormats),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ example_10_image_formats_stories)
});

// EXTERNAL MODULE: ./src/stories/milestones.js + 15 modules
var milestones = __webpack_require__("./src/stories/milestones.js");
;// ./src/stories/assets/image-formats.json
const image_formats_namespaceObject = /*#__PURE__*/JSON.parse('[{"title":"JPG","img":"/image-formats.jpg","year":1992},{"title":"JPEG","img":"image-formats.jpeg","year":1992},{"title":"PNG","img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/560px-PNG_transparency_demonstration_1.png","year":1994},{"title":"GIF","img":"https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif","year":1987},{"title":"WEBP","img":"https://www.gstatic.com/webp/gallery/1.sm.webp","year":2010}]');
;// ./src/stories/example-10-image-formats.stories.js


/* harmony default export */ const example_10_image_formats_stories = ({
  title: 'd3-milestones',
  argTypes: milestones/* argTypes */.U
});
const Template = args => (0,milestones/* createMilestones */.K)('Image formats', `This example demonstrates the use of different image formats for milestone elements.`, args);
const ImageFormats = Template.bind({});
ImageFormats.args = {
  optimize: true,
  aggregateBy: 'year',
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'img'
  },
  data: image_formats_namespaceObject
};
;
const __namedExportsOrder = ["ImageFormats"];
ImageFormats.parameters = {
  ...ImageFormats.parameters,
  docs: {
    ...ImageFormats.parameters?.docs,
    source: {
      originalSource: "args => createMilestones('Image formats', `This example demonstrates the use of different image formats for milestone elements.`, args)",
      ...ImageFormats.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-10-image-formats-stories.d917c28f.iframe.bundle.js.map