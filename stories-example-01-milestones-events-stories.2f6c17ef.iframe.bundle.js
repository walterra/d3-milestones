"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[667],{

/***/ "./src/stories/example-01-milestones-events.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EventsAPI: () => (/* binding */ EventsAPI),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ example_01_milestones_events_stories)
});

// EXTERNAL MODULE: ./src/stories/milestones.js + 15 modules
var milestones = __webpack_require__("./src/stories/milestones.js");
;// ./src/stories/assets/milestones-events.json
const milestones_events_namespaceObject = /*#__PURE__*/JSON.parse('[{"timestamp":"2012-09-09T00:00","detail":"v1.0.0"},{"timestamp":"2012-09-10T00:00","detail":"v1.0.1"},{"timestamp":"2012-09-12T00:00","detail":"v1.1.0"},{"timestamp":"2012-09-15T00:00","detail":"v1.1.1"},{"timestamp":"2012-09-26T00:00","detail":"v1.2.0"},{"timestamp":"2012-10-10T00:00","detail":"v2.0.0"},{"timestamp":"2012-10-31T00:00","detail":"v2.1.0"},{"timestamp":"2012-11-07T00:00","detail":"v2.2.0"},{"timestamp":"2012-11-25T00:00","detail":"v2.2.1"},{"timestamp":"2012-12-01T00:00","detail":"v2.3.0"},{"timestamp":"2012-12-05T00:00","detail":"v2.3.1"},{"timestamp":"2013-01-03T00:00","detail":"v3.0.0"},{"timestamp":"2013-01-09T00:00","detail":"v3.0.1"},{"timestamp":"2013-01-16T00:00","detail":"v3.1.0"},{"timestamp":"2013-01-16T00:00","detail":"v4.0.0"},{"timestamp":"2013-01-17T00:00","detail":"v4.0.1"},{"timestamp":"2013-02-08T00:00","detail":"v4.1.0"},{"timestamp":"2013-03-06T00:00","detail":"v4.1.1"},{"timestamp":"2013-03-06T00:00","detail":"v4.2.0"},{"timestamp":"2013-03-09T00:00","detail":"v4.3.0"},{"timestamp":"2013-03-27T00:00","detail":"v4.4.0"},{"timestamp":"2013-04-13T00:00","detail":"v4.5.0"},{"timestamp":"2013-05-04T00:00","detail":"v5.0.0"},{"timestamp":"2013-07-06T00:00","detail":"v5.0.1"},{"timestamp":"2013-08-01T00:00","detail":"v5.1.0"}]');
;// ./src/stories/example-01-milestones-events.stories.js


/* harmony default export */ const example_01_milestones_events_stories = ({
  title: 'd3-milestones',
  argTypes: Object.assign(milestones/* argTypes */.U, {
    onEventClick: {
      action: 'clicked'
    },
    onEventMouseOver: {
      action: 'mouseover'
    },
    onEventMouseLeave: {
      action: 'mouseleave'
    }
  })
});
const Template = args => (0,milestones/* createMilestones */.K)('Version Milestones with Event API', `The chart is responsive, try resizing the browser window. Use the storybook options to trigger examples of the chart's features. The chart implements click, mouseover, and mouseleave. Hover or click on labels to call the corresponding action.`, args);
const EventsAPI = Template.bind({});
EventsAPI.args = {
  optimize: true,
  aggregateBy: 'day',
  mapping: {
    timestamp: 'timestamp',
    text: 'detail'
  },
  data: milestones_events_namespaceObject
};
;
const __namedExportsOrder = ["EventsAPI"];
EventsAPI.parameters = {
  ...EventsAPI.parameters,
  docs: {
    ...EventsAPI.parameters?.docs,
    source: {
      originalSource: "args => createMilestones('Version Milestones with Event API', `The chart is responsive, try resizing the browser window. Use the storybook options to trigger examples of the chart's features. The chart implements click, mouseover, and mouseleave. Hover or click on labels to call the corresponding action.`, args)",
      ...EventsAPI.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-01-milestones-events-stories.2f6c17ef.iframe.bundle.js.map