"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[780],{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./src/stories/example-styles.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.d3Milestones {
  font-family: sans-serif;
}
.timeline {
  height: 900px;
  width: 100%;
  padding: 0 0 20px 0;
}
`, "",{"version":3,"sources":["webpack://./src/stories/example-styles.less"],"names":[],"mappings":"AAAA;EACE,uBAAA;AACF;AAEA;EACE,aAAA;EACA,WAAA;EACA,mBAAA;AAAF","sourcesContent":[".d3Milestones {\n  font-family: sans-serif;\n}\n\n.timeline {\n  height: 900px;\n  width: 100%;\n  padding: 0 0 20px 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./src/styles/styles.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.milestones__category_label {
  display: inline-block;
  text-align: right;
  font-size: 14px;
  line-height: 1;
  position: relative;
  top: calc(4px + 1.5px);
  /* Line margin-top + half line height */
  transform: translateY(50%);
  /* Shift down by half the label's height */
}
.milestones__horizontal_line {
  position: absolute;
  background-color: #000;
  height: 3px;
  margin-top: 4px;
  margin-left: 5.5px;
  border-radius: 1.5px;
}
.milestones__vertical_line {
  position: absolute;
  background-color: #000;
  width: 3px;
  margin-left: 4px;
  margin-bottom: 5.5px;
  border-radius: 1.5px;
}
.milestones__group {
  position: absolute;
  font-family: sans-serif;
  font-size: 10px;
}
.milestones__group__bullet {
  background-color: #fff;
  border: 3px solid #333;
  border-radius: 50%;
  width: 0px;
  height: 0px;
  padding: 2.5px;
  position: relative;
  left: 5.5px;
  /* Center on timeline (margin-left of line) */
  top: 5.5px;
  /* Center on timeline (margin-top + half line height) */
  transform: translate(-50%, -50%);
  /* Center the bullet itself */
}
.milestones__group__label-horizontal,
.milestones__group__label-vertical {
  position: absolute;
  padding: 0;
  color: #666;
}
.milestones__group__label-horizontal {
  border-left: 1px solid #000;
  margin-left: 5.5px;
  /* Align with bullet center */
}
.milestones__group__label-horizontal div {
  position: relative;
  margin-left: 3px;
  display: inline-block;
}
.milestones__group__label-vertical {
  padding-left: 10px;
  padding-bottom: 0px;
  border-bottom: 1px solid #000;
  margin-bottom: -5.5px;
  margin-left: 10px;
  bottom: 100%;
  overflow: visible;
}
.milestones__group__label-vertical .wrapper {
  min-width: 100px;
  max-width: 300px;
  border-left: 1px solid black;
  border-bottom: 1px solid white;
  margin-bottom: -1px;
  padding-left: 5px;
}
.milestones__group__label-above-horizontal {
  bottom: 100%;
}
.milestones__group__label-above-vertical {
  padding-left: 0px;
  padding-right: 10px;
  right: 100%;
  text-align: right;
}
.milestones__group__label-above-vertical .wrapper {
  border-left: 0;
  border-right: 1px solid black;
  padding-left: 0px;
  padding-right: 5px;
}
.milestones__group__label-last {
  right: 100%;
  border-left: 0;
  border-right: 1px solid #000;
  margin-left: 0;
  margin-right: -6px;
  text-align: right;
}
.milestones__group__label-last div {
  margin-left: 0px;
  margin-right: 3px;
}
.milestones__group__label__text-vertical {
  display: table-cell;
  vertical-align: bottom;
}
.milestones__group__label__text__title {
  color: #000;
  font-weight: bold;
  font-size: 11px;
  white-space: nowrap;
}
.milestones__group__label__text__event {
  cursor: pointer;
}
.milestones__group__label__text__event--hover {
  background: #efefef;
  color: #313131;
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.less"],"names":[],"mappings":"AAGE;EACE,qBAAA;EACA,iBAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,sBAAA;EAFF,uCAAuC;EAGrC,0BAAA;EADF,0CAA0C;AAC5C;AAGE;EACE,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,oBAAA;AADJ;AAIE;EACE,kBAAA;EACA,sBAAA;EACA,UAAA;EACA,gBAAA;EACA,oBAAA;EACA,oBAAA;AAFJ;AAKE;EACE,kBAAA;EACA,uBAAA;EACA,eAAA;AAHJ;AAMI;EACE,sBAAA;EACA,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;EAJJ,6CAA6C;EAKzC,UAAA;EAHJ,uDAAuD;EAInD,gCAAA;EAFJ,6BAA6B;AAC/B;AAII;;EACE,kBAAA;EACA,UAAA;EACA,WAAA;AADN;AAKI;EACE,2BAAA;EACA,kBAAA;EAHJ,6BAA6B;AAC/B;AAAI;EAKI,kBAAA;EACA,gBAAA;EACA,qBAAA;AAFR;AAMI;EACE,kBAAA;EACA,mBAAA;EACA,6BAAA;EACA,qBAAA;EACA,iBAAA;EACA,YAAA;EACA,iBAAA;AAJN;AAHI;EASI,gBAAA;EACA,gBAAA;EACA,4BAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;AAHR;AAOM;EACE,YAAA;AALR;AAQM;EACE,iBAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;AANR;AAEM;EAMI,cAAA;EACA,6BAAA;EACA,iBAAA;EACA,kBAAA;AALV;AASM;EACE,WAAA;EACA,cAAA;EACA,4BAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;AAPR;AACM;EASI,gBAAA;EACA,iBAAA;AAPV;AAWM;EACE,mBAAA;EACA,sBAAA;AATR;AAYM;EACE,WAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;AAVR;AAYM;EACE,eAAA;AAVR;AAYM;EACE,mBAAA;EACA,cAAA;AAVR","sourcesContent":[".milestones {\n}\n\n  .milestones__category_label {\n    display: inline-block;\n    text-align: right;\n    font-size: 14px;\n    line-height: 1;\n    position: relative;\n    top: calc(4px + 1.5px); /* Line margin-top + half line height */\n    transform: translateY(50%); /* Shift down by half the label's height */\n  }\n\n  .milestones__horizontal_line {\n    position: absolute;\n    background-color: #000;\n    height: 3px;\n    margin-top: 4px;\n    margin-left: 5.5px;\n    border-radius: 1.5px;\n  }\n\n  .milestones__vertical_line {\n    position: absolute;\n    background-color: #000;\n    width: 3px;\n    margin-left: 4px;\n    margin-bottom: 5.5px;\n    border-radius: 1.5px;\n  }\n\n  .milestones__group {\n    position: absolute;\n    font-family: sans-serif;\n    font-size: 10px;\n  }\n\n    .milestones__group__bullet {\n      background-color: #fff;\n      border: 3px solid #333;\n      border-radius: 50%;\n      width: 0px;\n      height: 0px;\n      padding: 2.5px;\n      position: relative;\n      left: 5.5px; /* Center on timeline (margin-left of line) */\n      top: 5.5px; /* Center on timeline (margin-top + half line height) */\n      transform: translate(-50%, -50%); /* Center the bullet itself */\n    }\n\n    .milestones__group__label-horizontal,.milestones__group__label-vertical {\n      position: absolute;\n      padding: 0;\n      color: #666;\n\n    }\n\n    .milestones__group__label-horizontal {\n      border-left: 1px solid #000;\n      margin-left: 5.5px; /* Align with bullet center */\n\n      div {\n        position: relative;\n        margin-left: 3px;\n        display: inline-block;\n      }\n    }\n\n    .milestones__group__label-vertical {\n      padding-left: 10px;\n      padding-bottom: 0px;\n      border-bottom: 1px solid #000;\n      margin-bottom: -5.5px;\n      margin-left: 10px;\n      bottom: 100%;\n      overflow: visible;\n      .wrapper {\n        min-width: 100px;\n        max-width: 300px;\n        border-left: 1px solid black;\n        border-bottom: 1px solid white;\n        margin-bottom: -1px;\n        padding-left: 5px;\n      }\n  }\n\n      .milestones__group__label-above-horizontal {\n        bottom: 100%;\n      }\n\n      .milestones__group__label-above-vertical {\n        padding-left: 0px;\n        padding-right: 10px;\n        right: 100%;\n        text-align: right;\n        .wrapper {\n          border-left: 0;\n          border-right: 1px solid black;\n          padding-left: 0px;\n          padding-right: 5px;\n        }\n      }\n\n      .milestones__group__label-last {\n        right: 100%;\n        border-left: 0;\n        border-right: 1px solid #000;\n        margin-left: 0;\n        margin-right: -6px;\n        text-align: right;\n\n        div {\n          margin-left: 0px;\n          margin-right: 3px;\n        }\n      }\n\n      .milestones__group__label__text-vertical {\n        display: table-cell;\n        vertical-align: bottom;\n      }\n\n      .milestones__group__label__text__title {\n        color: #000;\n        font-weight: bold;\n        font-size: 11px;\n        white-space: nowrap;\n      }\n      .milestones__group__label__text__event {\n        cursor: pointer;\n      }\n      .milestones__group__label__text__event--hover {\n        background: #efefef;\n        color: #313131;\n      }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/stories/milestones.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ argTypes),
  K: () => (/* binding */ createMilestones)
});

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./src/styles/styles.less
var styles = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./src/styles/styles.less");
;// ./src/styles/styles.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.A, options);




       /* harmony default export */ const styles_styles = (styles/* default */.A && styles/* default */.A.locals ? styles/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./src/stories/example-styles.less
var example_styles = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./src/stories/example-styles.less");
;// ./src/stories/example-styles.less

      
      
      
      
      
      
      
      
      

var example_styles_options = {};

example_styles_options.styleTagTransform = (styleTagTransform_default());
example_styles_options.setAttributes = (setAttributesWithoutAttributes_default());

      example_styles_options.insert = insertBySelector_default().bind(null, "head");
    
example_styles_options.domAPI = (styleDomAPI_default());
example_styles_options.insertStyleElement = (insertStyleElement_default());

var example_styles_update = injectStylesIntoStyleTag_default()(example_styles/* default */.A, example_styles_options);




       /* harmony default export */ const stories_example_styles = (example_styles/* default */.A && example_styles/* default */.A.locals ? example_styles/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/d3-selection/src/select.js
var src_select = __webpack_require__("./node_modules/d3-selection/src/select.js");
// EXTERNAL MODULE: ./node_modules/d3-scale/src/band.js + 3 modules
var band = __webpack_require__("./node_modules/d3-scale/src/band.js");
// EXTERNAL MODULE: ./node_modules/d3-scale/src/time.js + 30 modules
var time = __webpack_require__("./node_modules/d3-scale/src/time.js");
// EXTERNAL MODULE: ./node_modules/d3-array/src/max.js
var max = __webpack_require__("./node_modules/d3-array/src/max.js");
// EXTERNAL MODULE: ./node_modules/d3-array/src/extent.js
var extent = __webpack_require__("./node_modules/d3-array/src/extent.js");
// EXTERNAL MODULE: ./node_modules/d3-time-format/src/isoParse.js + 1 modules
var isoParse = __webpack_require__("./node_modules/d3-time-format/src/isoParse.js");
;// ./src/_aggregate_formats.js
// second, minute, hour, day, week, month, quarter, year
var aggregateFormats = {
  second: '%Y-%m-%d %H:%M:%S',
  minute: '%Y-%m-%d %H:%M',
  hour: '%Y-%m-%d %H:00',
  day: '%Y-%m-%d',
  week: '%Y week %W',
  month: '%Y-%m',
  quarter: '%Y-Q%Q',
  year: '%Y'
};
;// ./src/_api.js
/* harmony default export */ function _api(methods) {
  function methodChainer(wrapper, method) {
    return function (d) {
      method(d);
      return wrapper;
    };
  }
  return Object.keys(methods).reduce(function (API, methodName) {
    API[methodName] = methodChainer(API, methods[methodName]);
    return API;
  }, {});
}
;// ./src/_css.js
var cssPrefix = 'milestones';
var cssCategoryClass = cssPrefix + '__category_label';
var cssHorizontalLineClass = cssPrefix + '__horizontal_line';
var cssVerticalLineClass = cssPrefix + '__vertical_line';
var cssGroupClass = cssPrefix + '__group';
var cssBulletClass = cssGroupClass + '__bullet';
var cssLabelClass = cssGroupClass + '__label';
var cssLastClass = cssLabelClass + '-last';
var cssAboveClass = cssLabelClass + '-above';
var cssTextClass = cssLabelClass + '__text';
var cssTitleClass = cssTextClass + '__title';
var cssEventClass = cssTextClass + '__event';
var cssEventHoverClass = cssEventClass + '--hover';
;// ./src/_defaults.js
var DEFAULTS = {
  DISTRIBUTION: 'top-bottom',
  OPTIMIZE: false,
  ORIENTATION: 'horizontal',
  SCALE_TYPE: 'time',
  MAPPING: {
    category: undefined,
    entries: undefined,
    timestamp: 'timestamp',
    // Used only for time based scales
    value: 'value',
    // Used only for ordinal scale values
    text: 'text',
    url: 'url',
    id: 'id',
    textStyle: 'textStyle',
    titleStyle: 'titleStyle',
    categoryStyle: 'categoryStyle',
    bulletStyle: 'bulletStyle'
  },
  LABEL_FORMAT: '%Y-%m-%d %H:%M',
  USE_LABELS: true,
  AGGREGATE_BY: 'minute',
  AUTO_RESIZE: true,
  URL_TARGET: '_self'
};
;// ./src/_is_above.js
function isAbove(i, distribution) {
  var above = i % 2;
  if (distribution === 'top') {
    above = true;
  } else if (distribution === 'bottom') {
    above = false;
  }
  return above > 0;
}
// EXTERNAL MODULE: ./node_modules/d3-selection/src/selectAll.js
var selectAll = __webpack_require__("./node_modules/d3-selection/src/selectAll.js");
// EXTERNAL MODULE: ./node_modules/d3-collection/src/index.js + 3 modules
var src = __webpack_require__("./node_modules/d3-collection/src/index.js");
;// ./src/_get_attribute.js
function getAttribute(d, attribute) {
  return parseInt(d.style[attribute].replace('px', ''), 10);
}
;// ./src/_get_available_width.js

var labelRightMargin = 6;
var getAvailableWidth = function getAvailableWidth(aggregateFormatParse, currentNode, index, mapping, nestedData, nestedNode, nextCheck, nextGroupHeight, offset, offsetCheckAttribute, offsetAttribute, orientation, textMerge, width, x) {
  var useNext = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : true;
  var scaleType = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : 'time';
  // get the available width until the uber-next group
  var nextTestIndex = orientation === 'horizontal' && useNext ? index + nextCheck : index - nextCheck;
  var nextTestItem;
  do {
    if (orientation === 'horizontal' && useNext) {
      nextTestIndex += nextCheck;
    } else {
      nextTestIndex -= nextCheck;
    }
    nextTestItem = textMerge._groups[nextTestIndex];
    if (typeof nextTestItem === 'undefined') {
      break;
    }
  } while (nextGroupHeight >= nextTestItem[0][offsetAttribute]);
  var uberNextItem;
  if (typeof mapping.category === 'undefined') {
    uberNextItem = nestedData[nestedNode.timelineIndex][nextTestIndex];
  } else {
    uberNextItem = nestedData[nestedNode.timelineIndex].entries[nextTestIndex];
  }
  var availableWidth = getAttribute(currentNode, offsetCheckAttribute);
  if (typeof uberNextItem !== 'undefined') {
    var value = scaleType === 'ordinal' ? uberNextItem.key : aggregateFormatParse(uberNextItem.key);
    var offsetUberNextItem = x(value);
    if (orientation === 'horizontal' & useNext) {
      availableWidth = offsetUberNextItem - offset - labelRightMargin;
    } else if (orientation === 'horizontal' & !useNext) {
      availableWidth = offsetUberNextItem - labelRightMargin;
    } else {
      availableWidth = offset - offsetUberNextItem - labelRightMargin;
    }
  } else {
    if (orientation === 'horizontal' & useNext) {
      availableWidth = width - offset - labelRightMargin;
    } else if (orientation === 'horizontal' & !useNext) {
      availableWidth = offset - labelRightMargin;
    } else {
      availableWidth = offset - labelRightMargin;
    }
  }
  if (nextCheck < 0) {
    return Math.min(offset, availableWidth);
  } else {
    return availableWidth;
  }
};
;// ./src/_get_next_group_height.js
var getNextGroup = function getNextGroup(orientation, nodes, index, nextCheck) {
  var nextGroup = orientation === 'horizontal' ? nodes[index + nextCheck] : nodes[index - nextCheck];
  return nextGroup;
};
var getNextGroupHeight = function getNextGroupHeight(index, nextCheck, nodes, offsetAttribute, orientation) {
  // get the height of the next group
  var defaultPadding = 3;
  var nextGroup = getNextGroup(orientation, nodes, index, nextCheck);
  var nextGroupHeight = 0;
  if (typeof nextGroup !== 'undefined') {
    nextGroupHeight = nextGroup[0][offsetAttribute] + defaultPadding;
  }
  return nextGroupHeight;
};
;// ./src/_optimize.js







var MAX_OPTIMIZER_RUNS = 20;
var getIntValueFromPxAttribute = function getIntValueFromPxAttribute(domElement, attribute) {
  return parseInt(domElement.style(attribute).replace('px', ''), 10);
};
var getParentElement = function getParentElement(domElement) {
  return domElement.select(function () {
    return this.parentNode;
  });
};
var isSameDistribution = function isSameDistribution(index, nextCheck, overlapCheckIndex) {
  var itemRowCheck = index % nextCheck;
  var distributionCheck = (overlapCheckIndex + itemRowCheck) % nextCheck;
  return distributionCheck !== 0;
};
var optimize = function optimize(aggregateFormatParse, distribution, labelMaxWidth, mapping, nestedData, orientation, textMerge, width, widthAttribute, x) {
  var scaleType = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 'time';
  var nestedNodes = (0,src/* nest */.$I)().key(function (d) {
    return selectAll/* default */.A(d).data()[0].timelineIndex;
  }).entries(textMerge._groups);
  var nextCheck = distribution === 'top-bottom' ? 2 : 1;
  var runOptimizer = function runOptimizer(optimizerRuns) {
    var updated = 0;
    nestedNodes.forEach(function (d) {
      var nodes = d.values;
      nodes.forEach(function (node) {
        var d = selectAll/* default */.A(node).data()[0];
        var offsetComparator = orientation === 'horizontal' ? 60 : 20;
        var index = orientation === 'horizontal' ? nodes.length - d.index - 1 : d.index;
        var item = selectAll/* default */.A(nodes[index]).data()[0];
        var value = scaleType === 'ordinal' ? item.key : aggregateFormatParse(item.key);
        var offset = x(value);
        var currentNode = nodes[index][0];
        var isLast = index === nodes.length - 1;
        if (!isLast && distribution === 'top-bottom') {
          isLast = index === nodes.length - 2 && width - offset < 60;
        }
        var scrollCheckAttribute = orientation === 'horizontal' ? 'offsetWidth' : 'offsetHeight';
        var offsetCheckAttribute = orientation === 'horizontal' ? 'width' : 'height';
        var offsetCheck = getAttribute(currentNode, offsetCheckAttribute);
        var domElement = selectAll/* default */.A(nodes[index]);
        var backwards = isLast ? true : getParentElement(domElement).classed(cssLastClass);
        var offsetAttribute = orientation === 'horizontal' ? 'offsetHeight' : 'offsetWidth';
        var paddingAbove = orientation === 'horizontal' ? 'padding-bottom' : 'padding-right';
        var paddingBelow = orientation === 'horizontal' ? 'padding-top' : 'padding-left';
        var padding = isAbove(index, distribution) ? paddingAbove : paddingBelow;
        var overflow = backwards ? offset - offsetCheck < 0 : offset + offsetCheck > width;

        // Because on a resize a previous optimization could already have
        // repositioned items, we reset them on the first optimizer run
        if (optimizerRuns === 0) {
          backwards = isLast ? true : overflow;
          domElement.style(padding, '0px');
          getParentElement(domElement).classed(cssLastClass, backwards);
        }
        if (currentNode[scrollCheckAttribute] > offsetCheck || offsetCheck < offsetComparator || backwards || overflow) {
          var availableWidth = null;
          var runs = 0;
          var nextCheckIterator = orientation === 'horizontal' ? nextCheck - 1 : nextCheck + 1;
          do {
            if (orientation === 'horizontal') {
              nextCheckIterator++;
            } else {
              nextCheckIterator--;
            }
            runs++;
            if (nextCheckIterator > 0) {
              var nextGroupHeight = getNextGroupHeight(index, nextCheck, nodes, offsetAttribute, orientation);
              var previousGroupHeight = orientation === 'horizontal' ? getNextGroupHeight(index, nextCheck * -1, nodes, offsetAttribute, orientation) : nextGroupHeight;
              var useNext = nextGroupHeight <= previousGroupHeight && !isLast;
              if (!useNext && !isLast) {
                useNext = offset < offsetComparator;
              }
              var groupHeight = useNext ? nextGroupHeight : previousGroupHeight;
              if (isLast) {
                groupHeight = 0;
              }
              var check = useNext ? nextCheck : nextCheck * -1;
              domElement.style(padding, groupHeight + 'px');
              getParentElement(domElement).classed(cssLastClass, !useNext);
              availableWidth = getAvailableWidth(aggregateFormatParse, currentNode, index, mapping, nestedData, d, check, groupHeight, offset, offsetCheckAttribute, offsetAttribute, orientation, textMerge, width, x, useNext, scaleType // Pass scale type to getAvailableWidth
              );
            }
          } while (availableWidth < currentNode[scrollCheckAttribute] && runs < MAX_OPTIMIZER_RUNS);
          if (orientation === 'horizontal') {
            availableWidth = Math.min(labelMaxWidth, availableWidth);
          }

          // because labels could be left or right aligned,
          // we shrink the available width to the inner text width
          // so labels facing each other will require less space.
          domElement.style(widthAttribute, availableWidth + 'px');
          var innerWidth = getIntValueFromPxAttribute(domElement.select('.wrapper'), 'width');
          if (innerWidth < availableWidth) {
            availableWidth = innerWidth + 6;
            domElement.style(widthAttribute, availableWidth + 'px');
          }
          if (optimizerRuns > 0 && orientation === 'horizontal') {
            var itemWidth = getIntValueFromPxAttribute(domElement, 'width');
            var checkOffset = backwards ? offset - itemWidth : offset + itemWidth;
            nodes.forEach(function (overlapCheckNode, overlapCheckIndex) {
              var overlapCheckItem = selectAll/* default */.A(overlapCheckNode).data()[0];
              if (overlapCheckItem.key === item.key || isSameDistribution(index, nextCheck, overlapCheckIndex)) {
                return;
              }
              var overlapValue = scaleType === 'ordinal' ? overlapCheckItem.key : aggregateFormatParse(overlapCheckItem.key);
              var overlapCheckOffset = x(overlapValue) - 5;
              var overlapItemOffsetAnchor = overlapCheckOffset;
              var overlapCheckDomElement = selectAll/* default */.A(nodes[overlapCheckIndex]);
              var overlapCheckBackwards = getParentElement(overlapCheckDomElement).classed(cssLastClass);
              if (backwards && !overlapCheckBackwards) {
                var overlapCheckItemWidth = getIntValueFromPxAttribute(overlapCheckDomElement, 'width');
                overlapCheckOffset = overlapCheckOffset + overlapCheckItemWidth + 5;
              }
              if (!backwards && overlapCheckBackwards) {
                var _overlapCheckItemWidth = getIntValueFromPxAttribute(overlapCheckDomElement, 'width');
                overlapCheckOffset = overlapCheckOffset - _overlapCheckItemWidth - 5;
              }
              var overlapCheck1 = backwards ? overlapCheckOffset > checkOffset : checkOffset > overlapItemOffsetAnchor;
              var overlapCheck2 = backwards ? overlapItemOffsetAnchor < offset : overlapItemOffsetAnchor > offset;
              if (overlapCheck1 && overlapCheck2) {
                var overlapCheckHeight = overlapCheckNode[0][offsetAttribute];
                var itemPadding = getIntValueFromPxAttribute(domElement, padding);
                if (itemPadding < overlapCheckHeight) {
                  // offsetComparator
                  // find out if there's enough place to get rid of overlap
                  // by adjusted the items width
                  var checkWidth = backwards ? overlapCheckOffset - checkOffset : checkOffset - overlapItemOffsetAnchor;
                  var currentWidth = getIntValueFromPxAttribute(domElement, widthAttribute);
                  var reducedWidth = currentWidth - checkWidth - 6;
                  if (reducedWidth > offsetComparator) {
                    availableWidth = Math.min(availableWidth, reducedWidth);
                    domElement.style(widthAttribute, "".concat(availableWidth, "px"));
                  } else {
                    domElement.style(padding, "".concat(overlapCheckHeight + 5, "px"));
                  }
                  updated++;
                }
              }
            });

            // The optimizer might push all labels too far up. If all labels
            // have a minimum padding of more than 0, we'll shrink all offsets
            // back so the label with the smallest padding ends up directly
            // at the timeline.

            var minPadding = Number.POSITIVE_INFINITY;
            nodes.forEach(function (overlapCheckNode, overlapCheckIndex) {
              var checkSameOrientation = isAbove(overlapCheckIndex, distribution) ? paddingAbove : paddingBelow;
              if (checkSameOrientation !== padding) {
                return;
              }
              var overlapCheckDomElement = selectAll/* default */.A(nodes[overlapCheckIndex]);
              var itemPadding = getIntValueFromPxAttribute(overlapCheckDomElement, padding);
              minPadding = Math.min(minPadding, itemPadding);
            });
            if (minPadding > 0) {
              nodes.forEach(function (overlapCheckNode, overlapCheckIndex) {
                var itemRowCheck = index % nextCheck;
                var distributionCheck = (overlapCheckIndex + itemRowCheck) % nextCheck;
                if (distributionCheck !== 0) {
                  return;
                }
                var overlapCheckDomElement = selectAll/* default */.A(nodes[overlapCheckIndex]);
                var itemPadding = getIntValueFromPxAttribute(overlapCheckDomElement, padding);
                overlapCheckDomElement.style(padding, "".concat(itemPadding - minPadding, "px"));
              });
            }
          }
        }
      });
    });
    return updated;
  };
  var optimizerRuns = 0;
  var updated = 0;
  do {
    updated = runOptimizer(optimizerRuns);
    optimizerRuns++;

    // make sure we run a second optimizer call
    if (optimizerRuns === 1) {
      updated = 1;
    }
  } while (optimizerRuns < MAX_OPTIMIZER_RUNS && updated > 0);
};
// EXTERNAL MODULE: ./node_modules/d3-time-format/src/defaultLocale.js + 1 modules
var defaultLocale = __webpack_require__("./node_modules/d3-time-format/src/defaultLocale.js");
;// ./src/_time_format.js


function timeFormat(f) {
  if (f === '%Y-Q%Q') {
    var quarterFormatter = (0,defaultLocale/* timeFormat */.DC)(aggregateFormats.month);
    return function (d) {
      var formattedDate = quarterFormatter(d);
      var month = formattedDate.split('-')[1];
      var quarter = Math.ceil(parseInt(month) / 3);
      return formattedDate.split('-')[0] + '-Q' + quarter;
    };
  }
  return (0,defaultLocale/* timeFormat */.DC)(f);
}
;// ./src/_time_parse.js


function timeParse(f) {
  if (f === '%Y-Q%Q') {
    var quarterParser = (0,defaultLocale/* timeParse */.T6)(aggregateFormats.month);
    return function (d) {
      if (d.search('-Q') === -1) {
        var quarter = Math.ceil(parseInt(d.split('-')[1]) / 3);
        var quarterFirstMonthAsString = quarter * 3 - 2 + '';
        var quarterFirstMonthLeadingZero = quarterFirstMonthAsString.length < 2 ? '0' + quarterFirstMonthAsString : quarterFirstMonthAsString;
        return quarterParser(d.split('-')[0] + '-' + quarterFirstMonthLeadingZero);
      } else {
        var monthAsString = parseInt(d.split('-')[1][1]) * 3 + '';
        var monthLeadingZero = monthAsString.length < 2 ? '0' + monthAsString : monthAsString;
        return quarterParser(d.split('-')[0] + '-' + monthLeadingZero);
      }
    };
  }
  return (0,defaultLocale/* timeParse */.T6)(f);
}
// EXTERNAL MODULE: ./node_modules/d3-array/src/ascending.js
var ascending = __webpack_require__("./node_modules/d3-array/src/ascending.js");
;// ./src/_transform.js


function transform(aggregateFormat, data, mapping, parseTime) {
  var scaleType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'time';
  // Choose grouping function based on scale type
  var groupBy = function groupBy(d) {
    if (scaleType === 'ordinal') {
      // For ordinal scales, use the value field directly
      return d[mapping.value];
    } else {
      // For time scales, use the timestamp with formatting
      return aggregateFormat(parseTime(d[mapping.timestamp]));
    }
  };

  // test for different data structures
  if (typeof mapping.category !== 'undefined' && typeof mapping.entries !== 'undefined') {
    data = data.map(function (timeline, timelineIndex) {
      return {
        category: timeline[mapping.category],
        entries: getNestedEntries(timeline[mapping.entries], timelineIndex),
        originalData: timeline // Preserve original data for accessing categoryStyle etc.
      };
    });
    return data;
  } else if (typeof data !== 'undefined' && !Array.isArray(data[0])) {
    data = [data];
  }
  function getNestedEntries(t, tI) {
    // For ordinal scales, we need to preserve the original order
    // For time scales, we want to sort by time (ascending)
    var nested = scaleType === 'ordinal' ? (0,src/* nest */.$I)().key(groupBy).entries(t) // Don't sort keys for ordinal scale
    : (0,src/* nest */.$I)().key(groupBy).sortKeys(ascending/* default */.A).entries(t);

    // Save original data order for ordinal scales
    if (scaleType === 'ordinal') {
      // Create a map of original positions
      var originalPositions = {};
      t.forEach(function (item, index) {
        var key = groupBy(item);
        if (!originalPositions[key] && originalPositions[key] !== 0) {
          originalPositions[key] = index;
        }
      });

      // Sort the nested entries by their original position
      nested.sort(function (a, b) {
        return (originalPositions[a.key] || 0) - (originalPositions[b.key] || 0);
      });
    }
    return nested.map(function (d, dI) {
      d.index = dI;
      d.timelineIndex = tI;
      d.scaleType = scaleType; // Pass the scale type to the data object
      return d;
    });
  }
  return data.map(function (t, tI) {
    return getNestedEntries(t, tI);
  });
}
;// ./src/main.js
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }













function milestones(selector) {
  var distribution = DEFAULTS.DISTRIBUTION;
  function setDistribution(d) {
    distribution = d;
  }
  var optimizeLayout = DEFAULTS.OPTIMIZE;
  function setOptimizeLayout(d) {
    optimizeLayout = d;
  }
  var orientation = DEFAULTS.ORIENTATION;
  function setOrientation(d) {
    orientation = d;
    // purge the DOM to avoid layout issues when switching orientation
    src_select/* default */.A(selector).html('');
  }
  var scaleType = DEFAULTS.SCALE_TYPE;
  function setScaleType(d) {
    if (d === 'time' || d === 'ordinal') {
      scaleType = d;
      // purge the DOM to avoid layout issues when switching scale type
      src_select/* default */.A(selector).html('');
    }
  }
  var parseTime = isoParse/* default */.A;
  function setParseTime(d) {
    parseTime = timeParse(d);
  }
  var mapping = Object.assign({}, DEFAULTS.MAPPING);
  function assignMapping(d) {
    mapping = Object.assign({}, mapping, d);
  }
  var labelFormat;
  function setLabelFormat(d) {
    labelFormat = timeFormat(d);
  }
  setLabelFormat(DEFAULTS.LABEL_FORMAT);
  var range;
  function setRange(d) {
    if (Array.isArray(d) && d.length == 2) {
      range = d;
    }
  }
  var useLabels;
  function setUseLabels(d) {
    useLabels = d;
  }
  setUseLabels(DEFAULTS.USE_LABELS);
  var urlTarget;
  function setUrlTarget(d) {
    if (typeof d === 'string' && ['_blank', '_self', '_parent', '_top'].includes(d.toLowerCase())) {
      urlTarget = d;
    }
  }
  setUrlTarget(DEFAULTS.URL_TARGET);

  // set callback for event mouseover
  var callBackMouseOver;
  function setEventMouseOverCallback(callback) {
    callBackMouseOver = callback;
  }
  function eventMouseOver(d) {
    if (typeof callBackMouseOver === 'function') {
      src_select/* default */.A(this).classed(cssEventHoverClass, true);
      callBackMouseOver(d);
    }
    return d;
  }

  // set callback for event mouseleave
  var callBackMouseLeave;
  function setEventMouseLeaveCallback(callback) {
    callBackMouseLeave = callback;
  }
  function eventMouseLeave(d) {
    if (typeof callBackMouseOver === 'function') {
      src_select/* default */.A(this).classed(cssEventHoverClass, false);
      callBackMouseLeave(d);
    }
    return d;
  }

  // set callback for event click
  var callbackClick;
  function setEventClickCallback(callback) {
    callbackClick = callback;
  }
  function eventClick(d) {
    if (typeof callbackClick === 'function') {
      callbackClick(d);
    }
    return d;
  }

  // set callback for post-render operations
  var callbackRender;
  function renderCallback(callback) {
    callbackRender = callback;
  }
  var aggregateFormat = timeFormat(aggregateFormats[DEFAULTS.AGGREGATE_BY]);
  var aggregateFormatParse = timeParse(aggregateFormats[DEFAULTS.AGGREGATE_BY]);
  function setAggregateBy(d) {
    aggregateFormat = timeFormat(aggregateFormats[d]);
    aggregateFormatParse = timeParse(aggregateFormats[d]);
    setLabelFormat(aggregateFormats[d]);
  }
  var autoResize = {
    current: DEFAULTS.AUTO_RESIZE
  };
  var resizeHandler = function resizeHandler() {
    if (src_select/* default */.A(selector).node() !== null) {
      window.requestAnimationFrame(function () {
        if (autoResize.current) {
          render(); // Render without data parameter to re-render existing data
        }
      });
    }
  };
  var resizeObserver = new ResizeObserver(resizeHandler);
  resizeObserver.observe(typeof selector === 'string' ? document.querySelector(selector) : selector);
  function setAutoResize(d) {
    autoResize.current = d;
  }
  function render(data) {
    // Simple render method with a single data parameter

    var widthAttribute = orientation === 'horizontal' ? 'width' : 'height';
    var marginTimeAttribute = orientation === 'horizontal' ? 'margin-left' : 'margin-top';
    var cssLineClass = orientation === 'horizontal' ? cssHorizontalLineClass : cssVerticalLineClass;
    var labelMaxWidth = orientation === 'horizontal' ? 180 : 100;
    var timelineSelection = src_select/* default */.A(selector).selectAll('.' + cssPrefix);
    var nestedData = typeof data !== 'undefined' ? transform(aggregateFormat, data, mapping, parseTime, scaleType) : timelineSelection.data();
    var timeline = timelineSelection.data(nestedData);
    var timelineEnter = timeline.enter().append('div').attr('class', cssPrefix);
    timeline.exit().remove();

    // rightMargin compensates for the right most bullet position
    var rightMargin = 11;
    var selectorWidth = parseFloat(src_select/* default */.A(selector).style(widthAttribute)) - rightMargin;
    if (typeof mapping.category !== 'undefined') {
      timelineEnter.append('div').attr('class', cssCategoryClass).text(function (d) {
        return d.category;
      });
      timelineEnter.append('div').attr('class', 'data-js-timeline').append('div').attr('class', cssLineClass);
    } else {
      timelineEnter.append('div').attr('class', cssLineClass);
    }
    var timelineMerge = timeline.merge(timelineEnter);
    var categoryLabels = timelineMerge.selectAll('.' + cssCategoryClass);
    // Apply categoryStyle first before calculating widths
    categoryLabels.each(function (d, i, node) {
      var categoryData = d.originalData || d;
      if (categoryData[mapping.categoryStyle]) {
        Object.entries(categoryData[mapping.categoryStyle]).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            prop = _ref2[0],
            val = _ref2[1];
          src_select/* default */.A(node[i]).style(prop, val);
        });
      }
    });

    // Now calculate widths after styles are applied
    var categoryLabelWidths = [];
    categoryLabels.each(function (d, i, node) {
      categoryLabelWidths.push(node[i].offsetWidth);
    });
    var maxCategoryLabelWidth = Math.round((0,max/* default */.A)(categoryLabelWidths) || 0);
    var timelineLeftMargin = 10;
    var width = selectorWidth - maxCategoryLabelWidth - timelineLeftMargin;
    categoryLabels.style('width', maxCategoryLabelWidth + 'px');
    if (orientation === 'vertical') {
      categoryLabels.style('margin-left', '-50%');
      categoryLabels.style('text-align', 'center');
    }
    timelineMerge.selectAll('.data-js-timeline').style(marginTimeAttribute, maxCategoryLabelWidth + timelineLeftMargin + 'px');
    timelineMerge.selectAll('.' + cssLineClass).style(widthAttribute, width + 'px');
    var groupSelector = typeof mapping.category === 'undefined' ? timelineMerge : timelineMerge.selectAll('.data-js-timeline');
    var groupSelection = groupSelector.selectAll('.' + cssGroupClass);
    var group = groupSelection.data(function (d) {
      return typeof mapping.category === 'undefined' ? d : d.entries;
    });
    var allKeys = nestedData.reduce(function (keys, timeline) {
      var t = typeof mapping.category === 'undefined' ? timeline : timeline.entries;
      t.map(function (d) {
        return keys.push(d.key);
      });
      return keys;
    }, []);
    var domain = typeof range !== 'undefined' ? range.map(aggregateFormatParse) : (0,extent/* default */.A)(allKeys, function (d) {
      return aggregateFormatParse(d);
    });

    // Create the appropriate scale based on scaleType
    var x = scaleType === 'ordinal' ? band/* point */.z().range([0, width]).domain(allKeys) // Keep original order for ordinal scales
    : time/* default */.A().rangeRound([0, width])
    // sets oldest and newest date as the scales domain
    .domain(domain);
    var groupEnter = group.enter().append('div').attr('class', cssGroupClass);
    group.exit().remove();
    groupEnter.append('div').attr('class', cssBulletClass);
    var groupMerge = groupEnter.merge(group).style(marginTimeAttribute, function (d) {
      // For ordinal scale, use the key directly; for time scale, parse it
      d.scaleType = scaleType; // Ensure scale type is passed to data
      var value = scaleType === 'ordinal' ? d.key : aggregateFormatParse(d.key);
      return x(value) + 'px';
    });

    // Apply bulletStyle to bullets and calculate bullet radius (including border)
    var bulletRadii = new Map();
    groupMerge.selectAll('.' + cssBulletClass).each(function (d, i, nodes) {
      var _this = this;
      var bulletStyle = d.values.reduce(function (p, c) {
        if (c[mapping.bulletStyle] !== undefined) {
          return Object.assign(p, c[mapping.bulletStyle]);
        }
        return p;
      }, {});
      Object.entries(bulletStyle).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          prop = _ref4[0],
          val = _ref4[1];
        src_select/* default */.A(_this).style(prop, val);
      });

      // Calculate bullet radius after styles are applied (height includes padding + border)
      var bulletElement = nodes[i];
      var bulletHeight = bulletElement.offsetHeight;
      var bulletRadius = bulletHeight / 2;
      bulletRadii.set(d.key, bulletRadius);
    });
    if (useLabels) {
      var label = groupMerge.selectAll('.' + cssLabelClass + '-' + orientation).data(function (d) {
        return [d];
      });
      var labelMerge = label.enter().append('div').attr('class', cssLabelClass + '-' + orientation).merge(label)
      // .classed(cssLastClass, (d) => {
      //   const mostRightPosition = Math.round(x.range()[1]);
      //   const currentPosition = x(aggregateFormatParse(d.key));
      //   return (
      //     mostRightPosition === currentPosition &&
      //     orientation === 'horizontal'
      //   );
      // })
      .classed(cssAboveClass + '-' + orientation, function (d) {
        return isAbove(d.index, distribution);
      }).each(function (d) {
        // Adjust label vertical position to align with bullet edge
        if (orientation === 'horizontal') {
          var bulletRadius = bulletRadii.get(d.key) || 5.5; // Default bullet radius (11px diameter / 2)
          var timelineCenter = 5.5; // margin-top (4px) + half line height (1.5px)
          var above = isAbove(d.index, distribution);
          if (above) {
            // For above labels, position at top edge of bullet
            var topEdge = timelineCenter - bulletRadius;
            src_select/* default */.A(this).style('bottom', "calc(100% - ".concat(topEdge, "px)"));
          } else {
            // For below labels, position at bottom edge of bullet
            var bottomEdge = timelineCenter + bulletRadius;
            src_select/* default */.A(this).style('top', bottomEdge + 'px');
          }
        }
      });
      var text = labelMerge.selectAll('.' + cssTextClass + '-' + orientation).data(function (d) {
        return [d];
      });
      var textEnter = text.enter().append('div').attr('class', cssTextClass + '-' + orientation).merge(text).style(widthAttribute, function (d) {
        // calculate the available width
        d.scaleType = scaleType; // Ensure scale type is passed to data
        var value = scaleType === 'ordinal' ? d.key : aggregateFormatParse(d.key);
        var offset = x(value);
        // get the next and previous item on the same lane
        var nextItem;
        var previousItem;
        var itemNumTotal;
        var itemNum = d.index + 1;
        var nextCheck = distribution === 'top-bottom' ? 2 : 1;
        if (typeof mapping.category === 'undefined') {
          nextItem = nestedData[d.timelineIndex][d.index + nextCheck];
          previousItem = nestedData[d.timelineIndex][d.index - nextCheck];
          itemNumTotal = nestedData[d.timelineIndex].length;
        } else {
          nextItem = nestedData[d.timelineIndex].entries[d.index + nextCheck];
          previousItem = nestedData[d.timelineIndex].entries[d.index - nextCheck];
          itemNumTotal = nestedData[d.timelineIndex].entries.length;
        }
        var availableWidth;
        var compareItem1 = orientation === 'horizontal' ? nextItem : previousItem;
        var compareItem2 = orientation === 'horizontal' ? previousItem : nextItem;
        if (typeof compareItem1 !== 'undefined') {
          // Pass scale type to next item
          compareItem1.scaleType = scaleType;
          var nextValue = scaleType === 'ordinal' ? compareItem1.key : aggregateFormatParse(compareItem1.key);
          var offsetNextItem = x(nextValue);
          availableWidth = orientation === 'horizontal' ? offsetNextItem - offset : offset - offsetNextItem;
          if (itemNumTotal - itemNum === 2) {
            availableWidth /= 2;
          }
        } else {
          if (itemNumTotal - itemNum === 1) {
            availableWidth = orientation === 'horizontal' ? width - offset : offset;
          } else if (itemNumTotal - itemNum === 0) {
            if (typeof compareItem2 !== 'undefined') {
              // Pass scale type to previous item
              compareItem2.scaleType = scaleType;
              var prevValue = scaleType === 'ordinal' ? compareItem2.key : aggregateFormatParse(compareItem2.key);
              var offsetPreviousItem = x(prevValue);
              availableWidth = orientation === 'horizontal' ? (width - offsetPreviousItem) / 2 : offsetPreviousItem / 2;
            } else {
              availableWidth = width;
            }
          }
        }
        var labelRightMargin = 6;
        var availableWidthWithMargin = Math.max(0, availableWidth - labelRightMargin);
        var finalWidth = Math.min(orientation === 'horizontal' ? labelMaxWidth : availableWidthWithMargin, availableWidthWithMargin);
        return finalWidth + 'px';
      }).each(function (d) {
        var above = isAbove(d.index, distribution);
        var wrapper = src_select/* default */.A(this);
        wrapper.html(null);

        // Aggregate titleStyle from all items in group
        var titleStyle = d.values.reduce(function (p, c) {
          if (c[mapping.titleStyle] !== undefined) {
            return Object.assign(p, c[mapping.titleStyle]);
          }
          return p;
        }, {});
        var element = wrapper.append('div').classed('wrapper', true);

        // Render title once per group (before items if not above or vertical)
        if (!above || orientation === 'vertical') {
          var titleSpan = element.append('span').classed(cssTitleClass, true);

          // Format label based on scale type
          if (scaleType === 'ordinal') {
            titleSpan.text(d.key);
          } else {
            titleSpan.text(labelFormat(aggregateFormatParse(d.key)));
          }
          Object.entries(titleStyle).forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
              prop = _ref6[0],
              val = _ref6[1];
            return titleSpan.style(prop, val);
          });
          element.append('br');
        }
        d.values.map(function (v, i) {
          if (i > 0) {
            element.append('br');
          }
          var textStyle = Object.assign({}, v[mapping.textStyle]);
          var t = v[mapping.text];
          var item;
          // test if text is an image filename,
          // if so return an image tag with the filename as the source
          if (['jpg', 'jpeg', 'gif', 'png', 'webp'].indexOf(t.split('.').pop()) > -1) {
            item = element.append('img').classed('milestones-label', true).classed('milestones-image-label', true).attr('height', '100').attr('src', t);
          } else if (v[mapping.url]) {
            item = element.append('a').classed('milestones-label', true).classed('milestones-link-label', true).attr('href', v[mapping.url]).attr('target', urlTarget).text(t);
          } else {
            item = element.append('span').classed('milestones-label', true).classed('milestones-text-label', true).text(t);
          }

          // Apply custom ID if provided
          if (v[mapping.id]) {
            item.attr('id', v[mapping.id]);
          }
          item.datum({
            text: v[mapping.text],
            timestamp: v[mapping.timestamp],
            attributes: v // original value of an object passed to the milestone
          });
          if (typeof callbackClick === 'function' || typeof callBackMouseLeave === 'function' || typeof callBackMouseOver === 'function') {
            item.classed(cssEventClass, true);
          }
          if (typeof callbackClick === 'function') {
            item.on('click', eventClick);
          }
          if (typeof callBackMouseLeave === 'function') {
            item.on('mouseleave', eventMouseLeave);
          }
          if (typeof callBackMouseOver === 'function') {
            item.on('mouseover', eventMouseOver);
          }
          Object.entries(textStyle).forEach(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
              prop = _ref8[0],
              val = _ref8[1];
            return item.style(prop, val);
          });
        });

        // Render title once per group (after items if above in horizontal mode)
        if (above && orientation === 'horizontal') {
          element.append('br');
          var _titleSpan = element.append('span').classed(cssTitleClass, true);

          // Format label based on scale type
          if (scaleType === 'ordinal') {
            _titleSpan.text(d.key);
          } else {
            _titleSpan.text(labelFormat(aggregateFormatParse(d.key)));
          }
          Object.entries(titleStyle).forEach(function (_ref9) {
            var _ref10 = _slicedToArray(_ref9, 2),
              prop = _ref10[0],
              val = _ref10[1];
            return _titleSpan.style(prop, val);
          });
        }
      });
      var textMerge = text.merge(textEnter);
      textMerge.style('padding-top', '0px').style('padding-bottom', '0px');
      if (optimizeLayout) {
        optimize(aggregateFormatParse, distribution, labelMaxWidth, mapping, nestedData, orientation, textMerge, width, widthAttribute, x, scaleType // Pass scale type to optimizer
        );
      }
    } else {
      groupMerge.selectAll('.' + cssLabelClass + '-' + orientation).remove();
    }

    // finally, adjust offset, height and width of the whole timeline
    timelineMerge.each(function (d, i, node) {
      var margin = 10;
      var maxAboveHeight = (0,max/* default */.A)(src_select/* default */.A(node[i]).selectAll('.' + cssLabelClass + '-' + orientation + '.' + cssAboveClass + '-' + orientation)._groups[0], function (d) {
        return d.offsetHeight;
      });
      var maxBelowHeight = (0,max/* default */.A)(src_select/* default */.A(node[i]).selectAll('.' + cssLabelClass + '-' + orientation + ':not(.' + cssAboveClass + '-' + orientation + ')')._groups[0], function (d) {
        return d.offsetHeight;
      });
      if (orientation === 'horizontal') {
        src_select/* default */.A(node[i]).style('margin-top', margin + (maxAboveHeight || 0) + 'px').style('height', margin + (maxBelowHeight || 0) + 'px');
      } else {
        var percent = typeof mapping.category !== 'undefined' ? Math.round(100 / (nestedData.length + 1)) * (i + 1) : '50';
        src_select/* default */.A(node[i]).style('margin-top', '50px').style('margin-left', percent + '%').style('position', 'absolute');
      }
    });

    // Execute render callback if provided
    if (typeof callbackRender === 'function') {
      callbackRender();
    }
  }
  return _api({
    aggregateBy: setAggregateBy,
    mapping: assignMapping,
    optimize: setOptimizeLayout,
    autoResize: setAutoResize,
    orientation: setOrientation,
    distribution: setDistribution,
    scaleType: setScaleType,
    parseTime: setParseTime,
    labelFormat: setLabelFormat,
    urlTarget: setUrlTarget,
    useLabels: setUseLabels,
    range: setRange,
    render: render,
    renderCallback: renderCallback,
    onEventClick: setEventClickCallback,
    onEventMouseLeave: setEventMouseLeaveCallback,
    onEventMouseOver: setEventMouseOverCallback
  });
}
;// ./src/stories/milestones.js




// used to increment the wrapping DIV's id.
var iteration = 0;
var argTypes = {
  optimize: {
    control: {
      type: 'boolean'
    }
  },
  autoResize: {
    control: {
      type: 'boolean'
    }
  },
  distribution: {
    options: ['top-bottom', 'top', 'bottom'],
    control: {
      type: 'radio'
    }
  },
  orientation: {
    options: ['horizontal', 'vertical'],
    control: {
      type: 'radio'
    }
  },
  aggregateBy: {
    options: ['second', 'minute', 'hour', 'day', 'week', 'month', 'quarter', 'year'],
    control: {
      type: 'select'
    }
  },
  parseTime: {
    control: {
      type: 'text'
    }
  },
  mapping: {
    control: {
      type: 'object'
    }
  },
  data: {
    control: {
      type: 'object'
    }
  },
  urlTarget: {
    options: ['_blank', '_self', '_parent', '_top'],
    control: {
      type: 'radio'
    }
  },
  scaleType: {
    options: ['time', 'ordinal'],
    control: {
      type: 'radio'
    }
  }
};
var createMilestones = function createMilestones(title, description, _ref) {
  var aggregateBy = _ref.aggregateBy,
    data = _ref.data,
    distribution = _ref.distribution,
    mapping = _ref.mapping,
    optimize = _ref.optimize,
    onEventClick = _ref.onEventClick,
    onEventMouseOver = _ref.onEventMouseOver,
    onEventMouseLeave = _ref.onEventMouseLeave,
    orientation = _ref.orientation,
    parseTime = _ref.parseTime,
    autoResize = _ref.autoResize,
    urlTarget = _ref.urlTarget,
    scaleType = _ref.scaleType;
  var DIV_ID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'timeline';
  var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  iteration++;
  var divId = "".concat(DIV_ID, "-").concat(iteration);
  function render() {
    var m = milestones("#".concat(divId));
    mapping && m.mapping(mapping);
    aggregateBy && m.aggregateBy(aggregateBy);
    distribution && m.distribution(distribution);
    optimize && m.optimize(optimize);
    onEventClick && m.onEventClick(onEventClick);
    onEventMouseOver && m.onEventMouseOver(onEventMouseOver);
    onEventMouseLeave && m.onEventMouseLeave(onEventMouseLeave);
    orientation && m.orientation(orientation);
    parseTime && m.parseTime(parseTime);
    autoResize && m.autoResize(autoResize);
    urlTarget && m.urlTarget(urlTarget);
    scaleType && m.scaleType(scaleType);
    m.render(data);
  }

  // Wait until the wrapping DIV exists, only then render.
  function checkElement() {
    var wrapper = document.getElementById(divId);
    if (!wrapper) {
      window.setTimeout(checkElement, 100);
    } else {
      render();
    }
  }
  checkElement();
  var timeline = "<div id=\"".concat(divId, "\" class=\"timeline\" style=\"").concat(style, "\"></div>");
  if (!title && !description) {
    return timeline;
  }
  return "\n    <div class=\"d3Milestones\">\n      ".concat(title ? "<h2>".concat(title, "</h2>") : '', "\n      ").concat(description ? "<p>".concat(description, "</p>") : '', "\n      ").concat(timeline, "\n    </div>\n  ");
};

/***/ })

}]);
//# sourceMappingURL=780.2fd274c7.iframe.bundle.js.map