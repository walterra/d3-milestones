"use strict";
(self["webpackChunkd3_milestones"] = self["webpackChunkd3_milestones"] || []).push([[634],{

/***/ "./src/stories/example-04-covid19.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  COVID19: () => (/* binding */ COVID19),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ example_04_covid19_stories)
});

// EXTERNAL MODULE: ./src/stories/milestones.js + 15 modules
var milestones = __webpack_require__("./src/stories/milestones.js");
;// ./src/stories/assets/covid19.json
const covid19_namespaceObject = /*#__PURE__*/JSON.parse('[{"date":"2020-11-09","title":"\\"Trotz vorgezogener Virensaison (SARS-CoV-2 Welle und Grippewelle) wird es zu keiner Überforderung der Versorgung kommen.\\", Martin Sprenger"},{"date":"2020-11-07","title":"\\"Der (PCR-)Test ist nicht zur Diagnostik zugelassen.\\", Tiroler Tageszeitung"},{"date":"2020-10-12","title":"\\"Die rinnende Nase, haben wir aus der Falldefinition für diese neue Covid-Erkrankung herausgestrichen.\\", Franz Allerberger"},{"date":"2020-10-06","title":"\\"Schweden ist einen sehr guten Weg gegangen.\\", Petra Apfalter"},{"date":"2020-09-29","title":"\\"Wir sollten mehr Normalität wagen\\", \\"mehr Gelassenheit im Umgang mit dem Coronavirus!\\", Günter Weiss"},{"date":"2020-09-26","title":"\\"Welle ist ein Angst-Wort.\\", \\"Generell werden Kinder nicht als Treiber der Epidemie angesehen.\\", Daniela Schmid"},{"date":"2020-09-21","title":"\\"Die Sorge, dass Kinder die Grosseltern infizieren, das kann man heute viel pragmatischer sehen.\\", Franz Allerberger"},{"date":"2020-09-18","title":"\\"Wir haben keine zweite Welle, wir haben einen Labor-Tsunami\\", Petra Apfalter"},{"date":"2020-09-15","title":"\\"Lockdown wäre nicht notwendig gewesen\\", Franz Allerberger"},{"date":"2020-08-28","title":"\\"Es gibt Licht am Ende des Tunnels. Es ist sehr wahrscheinlich, dass diese Corona-Krise kürzer andauern wird, als viele Experten ursprünglich vorhergesagt haben. Wir werden in absehbarer Zeit zur gewohnten Normalität zurückkehren können.\\", Sebastian Kurz"},{"date":"2020-08-22","title":"\\"Eines ist sicher, zu einer Überforderung der Krankenversorgung wird es mit hundertprozentiger Sicherheit nicht kommen.\\", Martin Sprenger"},{"date":"2020-08-21","title":"\\"Bei Covid-19 können wir aber sagen, dass Kinder hier keine Bedeutung haben.\\", AGES FAQ Coronavirus"},{"date":"2020-08-01","title":"\\"Das Virus hat keine Flügel\\", Franz Allerberger"},{"date":"2020-07-27","title":"\\"50 Prozent Durchseuchungsrate in Balkan-Region\\", Franz Allerberger"},{"date":"2020-07-21","title":"\\"Kein Beleg für Maskenpflicht\\", Tiroler Tageszeitung"},{"date":"2020-07-21","title":"\\"Die Gefahr, dass das Virus überhandnimmt und es zu einer zweiten Welle kommt, hält Sönnichsen für äußerst gering.\\", addendum.org"},{"date":"2020-06-13","title":"\\"Nachdem wir die gesundheitlichen Folgen der Krise überstanden haben, müssen wir jetzt angesichts der Weltwirtschaftskrise die Konjunktur in Österreich wieder ankurbeln.\\", Sebastian Kurz"},{"date":"2020-03-30","title":"\\"Leider gibt es nur wenige mutige Länder, etwa Schweden, die einen anderen Weg wagen.\\", \\"diese lächerlichen Masken\\", Claudia Wild"}]');
;// ./src/stories/example-04-covid19.stories.js


/* harmony default export */ const example_04_covid19_stories = ({
  title: 'd3-milestones',
  argTypes: milestones/* argTypes */.U
});
const Template = args => (0,milestones/* createMilestones */.K)('COVID19 Quotes', undefined, args);
const COVID19 = Template.bind({});
COVID19.args = {
  optimize: true,
  aggregateBy: 'day',
  parseTime: '%Y-%m-%d',
  mapping: {
    timestamp: 'date',
    text: 'title'
  },
  data: covid19_namespaceObject
};
;
const __namedExportsOrder = ["COVID19"];
COVID19.parameters = {
  ...COVID19.parameters,
  docs: {
    ...COVID19.parameters?.docs,
    source: {
      originalSource: "args => createMilestones('COVID19 Quotes', undefined, args)",
      ...COVID19.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-04-covid19-stories.8e49e8c8.iframe.bundle.js.map