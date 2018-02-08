import * as dom from 'd3-selection';
import * as scale from 'd3-scale';
import { ascending } from 'd3-array';
import { extent } from 'd3-array';
import { max } from 'd3-array';
import { nest } from 'd3-collection';
import { timeFormat as d3TimeFormat } from 'd3-time-format';
import { timeParse as d3TimeParse } from 'd3-time-format';
import { isoParse } from 'd3-time-format';
import api from './_api';

const cssPrefix = 'milestones';
const cssCategoryClass = cssPrefix + '__category_label';
const cssLineClass = cssPrefix + '__horizontal_line';
const cssGroupClass = cssPrefix + '__group';
const cssBulletClass = cssGroupClass + '__bullet';
const cssLabelClass = cssGroupClass + '__label';
const cssLastClass = cssLabelClass + '-last';
const cssAboveClass = cssLabelClass + '-above';
const cssTextClass = cssLabelClass + '__text';
const cssTitleClass = cssTextClass + '__title';

const labelMaxWidth = 180;
const labelRightMargin = 6;

export default function milestones(selector) {
  let distribution = 'top-bottom';
  function setDistribution(d) {
    distribution = d;
  }

  function isAbove(i) {
    let above = i % 2;
    if (distribution === 'top') {
      above = true;
    } else if (distribution === 'bottom') {
      above = false;
    }
    return above;
  }

  let optimizeLayout = false;
  function setOptimizeLayout(d) {
    optimizeLayout = d;
  }

  let parseTime = isoParse;
  function setParseTime(d) {
    parseTime = timeParse(d);
  }

  let mapping = {
    category: undefined,
    entries: undefined,
    timestamp: 'timestamp',
    text: 'text'
  };
  function assignMapping(d) {
    mapping = Object.assign(mapping, d);
  }

  let labelFormat;
  function setLabelFormat(d) {
    labelFormat = timeFormat(d);
  }
  setLabelFormat('%Y-%m-%d %H:%M');

  let range;
  function setRange(d) {
    if (Array.isArray(d) && d.length == 2) {
      range = d;
    }
  }

  let useLabels;
  function setUseLabels(d) {
    useLabels = d;
  }
  setUseLabels(true);

  // second, minute, hour, day, month, quarter, year
  const aggregateFormats = {
    second: '%Y-%m-%d %H:%M:%S',
    minute: '%Y-%m-%d %H:%M',
    hour: '%Y-%m-%d %H:00',
    day: '%Y-%m-%d',
    week: '%Y week %W',
    month: '%Y-%m',
    quarter: '%Y-Q%Q',
    year: '%Y'
  };

  function timeFormat(f) {
    if (f === '%Y-Q%Q') {
      const quarterFormatter = d3TimeFormat(aggregateFormats.month);
      return d => {
        const formattedDate = quarterFormatter(d);
        const month = formattedDate.split('-')[1];
        const quarter = Math.ceil(parseInt(month) / 3);
        return formattedDate.split('-')[0] + '-Q' + quarter;
      };
    }
    return d3TimeFormat(f);
  }

  function timeParse(f) {
    if (f === '%Y-Q%Q') {
      const quarterParser = d3TimeParse(aggregateFormats.month);
      return d => {
        if (d.search('-Q') === -1) {
          const quarter = Math.ceil(parseInt(d.split('-')[1]) / 3);
          const quarterFirstMonthAsString = ((quarter * 3) - 2) + '';
          const quarterFirstMonthLeadingZero = quarterFirstMonthAsString.length < 2 ? '0' + quarterFirstMonthAsString : quarterFirstMonthAsString;
          return quarterParser(d.split('-')[0] + '-' + quarterFirstMonthLeadingZero);
        } else {
          const monthAsString = (parseInt(d.split('-')[1][1]) * 3) + '';
          const monthLeadingZero = monthAsString.length < 2 ? '0' + monthAsString : monthAsString;
          return quarterParser(d.split('-')[0] + '-' + monthLeadingZero);
        }
      };
    }
    return d3TimeParse(f);
  }

  let aggregateFormat = timeFormat(aggregateFormats.minute);
  let aggregateFormatParse = timeParse(aggregateFormats.minute);
  const groupBy = function(d) {
    return aggregateFormat(parseTime(d[mapping.timestamp]));
  };

  function setAggregateBy(d) {
    aggregateFormat = timeFormat(aggregateFormats[d]);
    aggregateFormatParse = timeParse(aggregateFormats[d]);
    setLabelFormat(aggregateFormats[d]);
  }


  window.addEventListener('resize', () => window.requestAnimationFrame(() => render()));

  function transform(data) {
    // test for different data structures
    if (typeof mapping.category !== 'undefined' && typeof mapping.entries !== 'undefined') {
      data = data.map((timeline, timelineIndex) => {
        return {
          category: timeline[mapping.category],
          entries: getNestedEntries(timeline[mapping.entries], timelineIndex)
        };
      });
      return data;
    } else if (typeof data !== 'undefined' && !Array.isArray(data[0])) {
      data = [data];
    }

    function getNestedEntries(t, tI) {
      const nested = nest()
        .key(groupBy).sortKeys(ascending)
        .entries(t);
      return nested.map((d, dI) => {
        d.index = dI;
        d.timelineIndex = tI;
        return d;
      });
    }

    return data.map((t, tI) => getNestedEntries(t, tI));
  }

  function render(data) {
    const timelineSelection = dom.select(selector).selectAll('.' + cssPrefix);
    const nestedData = (typeof data !== 'undefined') ? transform(data) : timelineSelection.data();
    const timeline = timelineSelection.data(nestedData);

    const timelineEnter = timeline.enter().append('div')
      .attr('class', cssPrefix);

    timeline.exit().remove();

    // rightMargin compensates for the right most bullet position
    const rightMargin = 11;
    const selectorWidth = parseFloat(dom.select(selector).style('width')) - rightMargin;

    if (typeof mapping.category !== 'undefined') {
      timelineEnter.append('div')
        .attr('class', cssCategoryClass)
        .text(d => d.category);

      timelineEnter.append('div')
        .attr('class', 'data-js-timeline')
        .append('div').attr('class', cssLineClass);
    } else {
      timelineEnter.append('div').attr('class', cssLineClass);
    }
    const timelineMerge = timeline.merge(timelineEnter);

    const categoryLabelWidths = [];
    const categoryLabels = timelineMerge.selectAll('.' + cssCategoryClass);
    categoryLabels.each((d, i, node) => {
      categoryLabelWidths.push(node[i].offsetWidth);
    });
    const maxCategoryLabelWidth = Math.round(max(categoryLabelWidths) || 0);
    const timelineLeftMargin = 10;
    const width = selectorWidth - maxCategoryLabelWidth - timelineLeftMargin;
    categoryLabels.style('width', maxCategoryLabelWidth + 'px');
    timelineMerge.selectAll('.data-js-timeline')
      .style('margin-left', (maxCategoryLabelWidth + timelineLeftMargin) + 'px');
    timelineMerge.selectAll('.' + cssLineClass)
      .style('width', width + 'px');

    const groupSelector = (typeof mapping.category === 'undefined')
      ? timelineMerge
      : timelineMerge.selectAll('.data-js-timeline');
    const groupSelection = groupSelector.selectAll('.' + cssGroupClass);

    const group = groupSelection.data(d => {
      return (typeof mapping.category === 'undefined') ? d : d.entries;
    });

    const allKeys = nestedData.reduce((keys, timeline) => {
      const t = (typeof mapping.category === 'undefined') ? timeline : timeline.entries;
      t.map(d => keys.push(d.key));
      return keys;
    }, []);

    const domain = (typeof range !== 'undefined')
      ? range.map(aggregateFormatParse)
      : extent(allKeys, d => aggregateFormatParse(d));

    const x = scale.scaleTime()
      .rangeRound([0, width])
      // sets oldest and newest date as the scales domain
      .domain(domain);

    const groupEnter = group.enter().append('div')
      .attr('class', cssGroupClass);

    group.exit().remove();

    groupEnter.append('div')
      .attr('class', cssBulletClass);

    const groupMerge = groupEnter.merge(group)
      .style('margin-left', d => x(aggregateFormatParse(d.key)) + 'px');

    if (useLabels) {
      const label = groupMerge.selectAll('.' + cssLabelClass).data(d => [d]);

      const labelMerge = label.enter().append('div')
        .attr('class', cssLabelClass)
        .merge(label)
        .classed(cssLastClass, d => {
          const mostRightPosition = x.range()[1];
          const currentPosition = x(aggregateFormatParse(d.key));
          return mostRightPosition === currentPosition; // nestedData[d.timelineIndex].length === (d.index + 1);
        })
        .classed(cssAboveClass, d => isAbove(d.index));

      const text = labelMerge.selectAll('.' + cssTextClass).data(d => [d]);

      const textEnter = text.enter().append('div')
        .attr('class', cssTextClass)
        .merge(text)
        .style('width', d => {
          // calculate the available width
          const offset = x(aggregateFormatParse(d.key));
          // get the next and previous item on the same lane
          let nextItem;
          let previousItem;
          let itemNumTotal;
          const itemNum = d.index + 1;
          const nextCheck = (distribution === 'top-bottom') ? 2 : 1;
          if (typeof mapping.category === 'undefined') {
            nextItem = nestedData[d.timelineIndex][d.index + nextCheck];
            previousItem = nestedData[d.timelineIndex][d.index - nextCheck];
            itemNumTotal = nestedData[d.timelineIndex].length;
          } else {
            nextItem = nestedData[d.timelineIndex].entries[d.index + nextCheck];
            previousItem = nestedData[d.timelineIndex].entries[d.index - nextCheck];
            itemNumTotal = nestedData[d.timelineIndex].entries.length;
          }

          let availableWidth;

          if (typeof nextItem !== 'undefined') {
            const offsetNextItem = x(aggregateFormatParse(nextItem.key));
            availableWidth = offsetNextItem - offset;

            if ((itemNumTotal - itemNum) === 2) {
              availableWidth /= 2;
            }
          } else {
            if ((itemNumTotal - itemNum) === 1) {
              availableWidth = width - offset;
            } else if ((itemNumTotal - itemNum) === 0) {
              if (typeof previousItem !== 'undefined') {
                const offsetPreviousItem = x(aggregateFormatParse(previousItem.key));
                availableWidth = (width - offsetPreviousItem) / 2;
              } else {
                availableWidth = width;
              }
            }
          }

          const labelRightMargin = 6;
          const finalWidth = Math.min(labelMaxWidth, (Math.max(0, availableWidth - labelRightMargin)));
          return finalWidth + 'px';
        })
        .html(d => {
          const above = isAbove(d.index);

          const group = '<span class="' + cssTitleClass + '">' + labelFormat(aggregateFormatParse(d.key)) + '</span>';
          const lines = d.values.map(d => {
            const t = d[mapping.text];
            // test if text is an image filename,
            // if so return an image tag with the filename as the source
            if (['jpg', 'jpeg', 'gif', 'png'].indexOf(t.split('.').pop()) > -1) {
              return '<img class="milestones-image-label" src="' + t + '" height="100" />';
            }
            return t;
          });

          (above) ? lines.push(group) : lines.unshift(group);

          return lines.join('<br />');
        });

      const textMerge = text.merge(textEnter);

      textMerge
        .style('padding-top', '0px')
        .style('padding-bottom', '0px');

      if (optimizeLayout) {
        function optimizeFn() {
          let optimizations = 0;
          const nestedNodes = nest()
            .key(d => {
              return dom.selectAll(d).data()[0].timelineIndex;
            })
            .entries(textMerge._groups);

          const nextCheck = (distribution === 'top-bottom') ? 2 : 1;
          nestedNodes.forEach(d => {
            const nodes = d.values;
            nodes.forEach(node => {
              const d = dom.selectAll(node).data()[0];
              const index = nodes.length - d.index - 1;
              const item = dom.selectAll(nodes[index]).data()[0];
              const offset = x(aggregateFormatParse(item.key));
              const currentNode = nodes[index][0];
              if (
                currentNode.scrollWidth > currentNode.offsetWidth ||
                currentNode.offsetWidth < 60
              ) {
                optimizations++;

                const domElement = dom.selectAll(nodes[index]);
                const padding = isAbove(index) ? 'padding-bottom' : 'padding-top';

                function getAvailableWidth(nextCheck) {
                  // get the height of the next group
                  const defaultPadding = 3;
                  const nextGroup = nodes[index + nextCheck];
                  let nextGroupHeight = 0;
                  if (typeof nextGroup !== 'undefined') {
                    nextGroupHeight = nextGroup[0].offsetHeight + defaultPadding;
                  }
                  domElement.style(padding, nextGroupHeight + 'px');

                  // get the available width until the uber-next group
                  let nextTestIndex = index + nextCheck;
                  let nextTestItem;
                  do {
                    nextTestIndex += nextCheck;
                    nextTestItem = textMerge._groups[nextTestIndex];
                    if (typeof nextTestItem === 'undefined') {
                      break;
                    }
                  } while (nextGroupHeight >= (nextTestItem[0].offsetHeight));
                  let uberNextItem;
                  if (typeof mapping.category === 'undefined') {
                    uberNextItem = nestedData[d.timelineIndex][nextTestIndex];
                  } else {
                    uberNextItem = nestedData[d.timelineIndex].entries[nextTestIndex];
                  }

                  let availableWidth = currentNode.offsetWidth;

                  if (typeof uberNextItem !== 'undefined') {
                    const offsetUberNextItem = x(aggregateFormatParse(uberNextItem.key));
                    availableWidth = offsetUberNextItem - offset - labelRightMargin;
                  } else {
                    availableWidth = width - offset - labelRightMargin;
                  }

                  return availableWidth;
                }
                let availableWidth = 0;
                let runs = 0;
                let nextCheckIterator = nextCheck - 1;
                do {
                  nextCheckIterator++;
                  runs++;
                  availableWidth = getAvailableWidth(nextCheckIterator);
                } while (availableWidth < currentNode.scrollWidth && runs < 10);
                availableWidth = Math.min(labelMaxWidth, availableWidth);
                domElement.style('width', availableWidth + 'px');
              }
            });
          });

          return optimizations;
        }
        optimizeFn();
      }
    } else {
      groupMerge.selectAll('.' + cssLabelClass).remove();
    }

    // finally, adjust margin-top, height and width of the whole timeline
    timelineMerge.each((d, i, node) => {
      const margin = 10;
      const maxAboveHeight = max(dom.select(node[i]).selectAll('* .' + cssAboveClass)._groups[0], d => d.offsetHeight);
      const maxBelowHeight = max(dom.select(node[i]).selectAll('* :not(.' + cssAboveClass + ')')._groups[0], d => d.offsetHeight);

      dom.select(node[i])
        .style('margin-top', (margin + (maxAboveHeight || 0)) + 'px')
        .style('height', (margin + (maxBelowHeight || 0)) + 'px');
    });
  }

  return api({
    aggregateBy: setAggregateBy,
    mapping: assignMapping,
    optimize: setOptimizeLayout,
    distribution: setDistribution,
    parseTime: setParseTime,
    labelFormat: setLabelFormat,
    useLabels: setUseLabels,
    range: setRange,
    render: render
  });
}
