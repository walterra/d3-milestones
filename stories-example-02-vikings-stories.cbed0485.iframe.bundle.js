"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[948],{

/***/ "./src/stories/example-02-vikings.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Vikings: () => (/* binding */ Vikings),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ example_02_vikings_stories)
});

// EXTERNAL MODULE: ./src/stories/milestones.js + 15 modules
var milestones = __webpack_require__("./src/stories/milestones.js");
;// ./src/stories/assets/vikings.json
const vikings_namespaceObject = /*#__PURE__*/JSON.parse('[{"year":789,"title":"Vikings begin attacks on England.","id":"789-attacks-england"},{"year":800,"title":"The Oseberg Viking longship buried","id":"800-oseberg-longship"},{"year":840,"title":"Vikings found Dublin in Ireland.","id":"840-dublin-ireland"},{"year":844,"title":"A Viking raid on Seville is repulsed.","id":"844-seville-raid"},{"year":860,"title":"Rus Vikings attack Constantinople.","id":"860-constantinople-attack"},{"year":862,"title":"Novgorod in Russia is founded by the Rus Viking, Ulrich.","id":"862-novgorod-founded"},{"year":866,"title":"Danish Vikings establish a kingdom in York, England.","id":"866-york-kingdom"},{"year":871,"title":"Danish advance is halted in England.","id":"871-danish-halted"},{"year":872,"title":"Harald I gains control of Norway.","id":"872-harald-norway"},{"year":879,"title":"Rurik establishes Kiev as the center of the Kievan Rus\' domains.","id":"879-kiev-established"},{"year":886,"title":"Alfred divides England with the Danes under the Danelaw pact.","id":"886-danelaw-pact"},{"year":900,"title":"The Vikings raid along the Mediterranean coast.","id":"900-mediterranean-raids"},{"year":911,"title":"The Viking chief Rollo founds Normandy in France.","id":"911-normandy-founded"},{"year":941,"title":"Rus Vikings attack Constantinople(Istanbul).","id":"941-constantinople-attack"},{"year":981,"title":"Viking leader Erik the Red discovers Greenland.","id":"981-greenland-discovery"},{"year":986,"title":"Viking ships sail in Newfoundland waters.","id":"986-newfoundland"},{"year":995,"title":"Olav I conquers Norway and proclaims it a Christian kingdom.","id":"995-olav-norway"},{"year":1000,"title":"Christianity reaches Greenland and Iceland.","id":"1000-christianity-iceland"},{"year":1000,"title":"Leif Eriksson, explores the coast of North America.","id":"1000-leif-north-america"},{"year":1000,"title":"Olav I dies; Norway is ruled by the Danes.","id":"1000-olav-dies"},{"year":1002,"title":"Brian Boru defeats the Norse and becomes the king of Ireland.","id":"1002-brian-boru"},{"year":1013,"title":"The Danes conquer England; Æthelred flees to Normandy.","id":"1013-danes-conquer-england"},{"year":1015,"title":"Vikings abandon the Vinland settlement on the coast of North America.","id":"1015-vinland-abandoned"},{"year":1016,"title":"Olav II regains Norway from the Danes.","id":"1016-olav-norway"},{"year":1016,"title":"The Danes under Knut(Canute) rule England.","id":"1016-knut-england"},{"year":1028,"title":"Knut(Canute), king of England and Denmark, conquers Norway.","id":"1028-knut-norway"},{"year":1042,"title":"Edward the Confessor rules England with the support of the Danes.","id":"1042-edward-confessor"},{"year":1050,"title":"The city of Oslo is founded in Norway.","id":"1050-oslo-founded"},{"year":1066,"title":"Battle of Stamford Bridge","id":"1066-stamford-bridge"},{"year":1066,"title":"Battle of Hastings.","id":"1066-hastings"}]');
;// ./src/stories/example-02-vikings.stories.js


/* harmony default export */ const example_02_vikings_stories = ({
  title: 'd3-milestones',
  argTypes: milestones/* argTypes */.U
});
const Template = args => (0,milestones/* createMilestones */.K)('The Viking Timeline', undefined, args);
const Vikings = Template.bind({});
Vikings.args = {
  aggregateBy: 'year',
  optimize: true,
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'title',
    id: 'id'
  },
  data: vikings_namespaceObject
};
;
const __namedExportsOrder = ["Vikings"];
Vikings.parameters = {
  ...Vikings.parameters,
  docs: {
    ...Vikings.parameters?.docs,
    source: {
      originalSource: "args => createMilestones('The Viking Timeline', undefined, args)",
      ...Vikings.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-02-vikings-stories.cbed0485.iframe.bundle.js.map