"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[415],{

/***/ "./src/stories/example-05-lotr.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LordOfTheRings: () => (/* binding */ LordOfTheRings),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ example_05_lotr_stories)
});

// EXTERNAL MODULE: ./src/stories/milestones.js + 15 modules
var milestones = __webpack_require__("./src/stories/milestones.js");
;// ./src/stories/assets/lotr.json
const lotr_namespaceObject = /*#__PURE__*/JSON.parse('[{"timestamp":"12.04.3018","character":"Gandalf","text":"Gandalf reaches Hobbiton. Tells Frodo about the ring."},{"timestamp":"12.04.3018","character":"Frodo","text":"Gandalf tells Frodo about the ring."},{"timestamp":"30.06.3018","character":"Gandalf","text":"Gandalf leaves Hobbiton. Leaves for Isengard."},{"timestamp":"20.07.3018","character":"Gandalf","text":"Gandalf imprisoned in Orthanc by Saruman."},{"timestamp":"18.09.3018","character":"Gandalf","text":"Gandalf escapes from Orthanc."},{"timestamp":"19.09.3018","character":"Gandalf","text":"Gandalf comes to Edoras."},{"timestamp":"22.09.3018","character":"Frodo","text":"Frodo\'s birthday party."},{"timestamp":"23.09.3018","character":"Frodo","text":"Fatty and Merry leave in the morning. Frodo, Sam and Pippin in the evening."},{"timestamp":"23.09.3018","character":"Gandalf","text":"Gandalf tames Shadowfax and rides to Hobbiton."},{"timestamp":"25.09.3018","character":"Frodo","text":"The hobbits reunite in Crickhollow."},{"timestamp":"26.09.3018","character":"Frodo","text":"The hobbits stay with Tom Bombadil."},{"timestamp":"28.09.3018","character":"Frodo","text":"Captured by Barrow-wight. Rescued by Tom Bombadil."},{"timestamp":"29.09.3018","character":"Gandalf","text":"Gandalf reaches Hobbiton."},{"timestamp":"29.09.3018","character":"Frodo","text":"Arrival at Bree. Meeting with Strider."},{"timestamp":"30.09.3018","character":"Frodo","text":"Hobbits and Strider leave Bree in the morning."},{"timestamp":"01.10.3018","character":"Gandalf","text":"Gandalf leaves Bree."},{"timestamp":"03.10.3018","character":"Gandalf","text":"Gandalf attacked on Weathertop."},{"timestamp":"06.10.3018","character":"Frodo","text":"Camp attacked at night. Frodo wounded."},{"timestamp":"13.10.3018","character":"Frodo","text":"Group crosses the bridge of Mithreidel."},{"timestamp":"18.10.3018","character":"Gandalf","text":"Gandalf reaches Rivendell."},{"timestamp":"18.10.3018","character":"Frodo","text":"Glorfindel finds Frodo at dusk."},{"timestamp":"20.10.3018","character":"Frodo","text":"Frodo escapes the Ford of Bruinen. Arrival in Rivendell."},{"timestamp":"24.10.3018","character":"Frodo","text":"Frodo awakes in Rivendell."},{"timestamp":"25.10.3018","character":"Gandalf","text":"The Council of Elrond."},{"timestamp":"25.10.3018","character":"Frodo","text":"The Council of Elrond."},{"timestamp":"31.12.3018","character":"Gandalf","text":"The fellowship leaves Rivendell at dawn."},{"timestamp":"31.12.3018","character":"Frodo","text":"The fellowship leaves Rivendell at dawn."}]');
;// ./src/stories/example-05-lotr.stories.js


/* harmony default export */ const example_05_lotr_stories = ({
  title: 'd3-milestones',
  argTypes: milestones/* argTypes */.U
});
const Template = args => {
  const gandalfData = args.data.filter(d => d.character === 'Gandalf');
  const frodoData = args.data.filter(d => d.character === 'Frodo');
  const gandalf = (0,milestones/* createMilestones */.K)('Lord of the Rings Categorical Top/Bottom Timeline', undefined, Object.assign(args, {
    distribution: 'top',
    data: gandalfData
  }), 'timeline-gandalf', 'height: 200px !important');
  const frodo = (0,milestones/* createMilestones */.K)(undefined, undefined, Object.assign(args, {
    distribution: 'bottom',
    data: frodoData
  }), 'timeline-frodo', 'height: 200px !important; margin-top: -200px !important');
  return gandalf + frodo;
};
const LordOfTheRings = Template.bind({});
LordOfTheRings.args = {
  optimize: true,
  aggregateBy: 'day',
  parseTime: '%d.%m.%Y',
  data: lotr_namespaceObject
};
;
const __namedExportsOrder = ["LordOfTheRings"];
LordOfTheRings.parameters = {
  ...LordOfTheRings.parameters,
  docs: {
    ...LordOfTheRings.parameters?.docs,
    source: {
      originalSource: "args => {\n  const gandalfData = args.data.filter(d => d.character === 'Gandalf');\n  const frodoData = args.data.filter(d => d.character === 'Frodo');\n  const gandalf = createMilestones('Lord of the Rings Categorical Top/Bottom Timeline', undefined, Object.assign(args, {\n    distribution: 'top',\n    data: gandalfData\n  }), 'timeline-gandalf', 'height: 200px !important');\n  const frodo = createMilestones(undefined, undefined, Object.assign(args, {\n    distribution: 'bottom',\n    data: frodoData\n  }), 'timeline-frodo', 'height: 200px !important; margin-top: -200px !important');\n  return gandalf + frodo;\n}",
      ...LordOfTheRings.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-05-lotr-stories.ed386341.iframe.bundle.js.map