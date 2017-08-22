import * as dom from 'd3-selection';
import * as scale from 'd3-scale';
import { ascending } from 'd3';
import { extent } from 'd3';
import { max } from 'd3';
import { nest } from 'd3';
import { timeFormat as d3TimeFormat } from 'd3';
import { timeParse as d3TimeParse } from 'd3';
import { isoParse } from 'd3';
import api from './_api';

const cssPrefix = 'milestones';
const cssLineClass = cssPrefix + '--horizontal-line';
const cssGroupClass = cssPrefix + '--group';
const cssLabelClass = cssGroupClass + '--label';
const cssLastClass = cssLabelClass + '-last';
const cssAboveClass = cssLabelClass + '-above';
const cssTextClass = cssLabelClass + '--text';
const cssTitleClass = cssTextClass + '--title';

export default function milestones(selector) {
  let optimizeLayout = false;
  function setOptimizeLayout(d) {
    optimizeLayout = d;
  }

  let parseTime = isoParse;
  function setParseTime(d) {
    parseTime = timeParse(d);
  }

  let mapping = {
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

  // second, minute, hour, day, month, year
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
    return data.map((t, tI) => {
      const nested = nest()
        .key(groupBy).sortKeys(ascending)
        .entries(t);
      return nested.map((d, dI) => {
        d.index = dI;
        d.timelineIndex = tI;
        return d;
      });
    });
  }

  function render(data) {
    // test if data is a nested Array (multiple timelines)
    if (typeof data !== 'undefined' && !Array.isArray(data[0])) {
      data = [data];
    }

    const timelineSelection = dom.select(selector).selectAll('.' + cssPrefix);
    const nestedData = (typeof data !== 'undefined') ? transform(data) : timelineSelection.data();
    const timeline = timelineSelection.data(nestedData);


    const timelineEnter = timeline.enter().append('div')
      .attr('class', cssPrefix);

    timeline.exit().remove();

    const width = +dom.select(selector).node().getBoundingClientRect().width - 10;

    timelineEnter.append('div').attr('class', cssLineClass);

    const timelineMerge = timeline.merge(timelineEnter);

    timelineMerge.selectAll('.' + cssLineClass)
      .style('width', width + 'px');

    const groupSelection = timelineMerge.selectAll('.' + cssGroupClass);
    const group = groupSelection.data(d => d);

    const allKeys = nestedData.reduce((keys, t) => {
      t.map(d => keys.push(d.key));
      return keys;
    }, []);
    const x = scale.scaleTime()
      .rangeRound([0, width])
      // sets oldest and newest date as the scales domain
      .domain(extent(allKeys, d => aggregateFormatParse(d)));

    const groupEnter = group.enter().append('div')
      .attr('class', cssGroupClass);

    group.exit().remove();

    groupEnter.append('div')
      .attr('class', cssGroupClass + '--bullet');

    const groupMerge = groupEnter.merge(group)
      .style('margin-left', d => x(aggregateFormatParse(d.key)) + 'px');

    const label = groupMerge.selectAll('.' + cssLabelClass).data(d => [d]);

    const labelMerge = label.enter().append('div')
      .attr('class', cssLabelClass)
      .merge(label)
      .classed(cssLastClass, d => {
        const mostRightPosition = x.range()[1];
        const currentPosition = x(aggregateFormatParse(d.key));
        return mostRightPosition === currentPosition; // nestedData[d.timelineIndex].length === (d.index + 1);
      })
      .classed(cssAboveClass, d => d.index % 2);

    const text = labelMerge.selectAll('.' + cssTextClass).data(d => [d]);

    const textEnter = text.enter().append('div')
      .attr('class', cssTextClass)
      .merge(text)
      .style('width', d => {
        // calculate the available width
        const offset = x(aggregateFormatParse(d.key));
        // get the next and previous item on the same lane
        const nextItem = nestedData[d.timelineIndex][d.index + 2];
        const previousItem = nestedData[d.timelineIndex][d.index - 2];
        const itemNumTotal = nestedData[d.timelineIndex].length;
        const itemNum = d.index + 1;
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

        const rightMargin = 6;
        return (availableWidth - rightMargin) + 'px';
      })
      .html(d => {
        const above = d.index % 2;
        const group = '<span class="' + cssTitleClass + '">' + labelFormat(aggregateFormatParse(d.key)) + '</span>';
        const lines = d.values.map(d => d[mapping.text]);

        (above) ? lines.push(group) : lines.unshift(group);

        return lines.join('<br />');
      });

    const textMerge = text.merge(textEnter);

    textMerge
      .style('padding-top', '0px')
      .style('padding-bottom', '0px');

    if (optimizeLayout) {
      const nestedNodes = nest()
        .key(d => {
          return dom.selectAll(d).data()[0].timelineIndex;
        })
        .entries(textMerge._groups);

      nestedNodes.forEach(d => {
        const nodes = d.values;
        nodes.forEach(node => {
          const d = dom.selectAll(node).data()[0];
          const index = nodes.length - d.index - 1;
          const item = dom.selectAll(nodes[index]).data()[0];
          const currentNode = nodes[index][0];
          if (
            currentNode.scrollWidth > (currentNode.getBoundingClientRect().width + 1)
          ) {
            const domElement = dom.selectAll(nodes[index]);
            const padding = index % 2 ? 'padding-bottom' : 'padding-top';

            // get the height of the next group
            const defaultPadding = 3;
            const nextGroup = nodes[index + 2];
            let nextGroupHeight = 0;
            if (typeof nextGroup !== 'undefined') {
              nextGroupHeight = nextGroup[0].getBoundingClientRect().height + defaultPadding;
            }
            domElement.style(padding, nextGroupHeight + 'px');

            // get the available width until the uber-next group
            let nextTestIndex = index + 2;
            let nextTestItem;
            do {
              nextTestIndex += 2;
              nextTestItem = textMerge._groups[nextTestIndex];
              if (typeof nextTestItem === 'undefined') {
                break;
              }
            } while (nextGroupHeight >= nextTestItem[0].getBoundingClientRect().height);
            const offset = x(aggregateFormatParse(item.key));
            const uberNextItem = nestedData[d.timelineIndex][nextTestIndex];
            const rightMargin = 6;

            let availableWidth = currentNode.getBoundingClientRect().width;

            if (typeof uberNextItem !== 'undefined') {
              const offsetUberNextItem = x(aggregateFormatParse(uberNextItem.key));
              availableWidth = offsetUberNextItem - offset - rightMargin;
            } else {
              availableWidth = width - offset - rightMargin;
            }

            domElement.style('width', availableWidth + 'px');
          }
        });
      });
    }

    // finally, adjust margin-top, height and width of the whole timeline
    timelineMerge.each((d, i, node) => {
      const margin = 10;
      const maxAboveHeight = max(dom.select(node[i]).selectAll('* .' + cssAboveClass)._groups[0], d => d.getBoundingClientRect().height);
      const maxBelowHeight = max(dom.select(node[i]).selectAll('* :not(.' + cssAboveClass + ')')._groups[0], d => d.getBoundingClientRect().height);

      dom.select(node[i])
        .style('margin-top', (margin + maxAboveHeight) + 'px')
        .style('height', (margin + maxBelowHeight) + 'px')
        .style('width', width + 'px');
    });
  }

  return api({
    aggregateBy: setAggregateBy,
    mapping: assignMapping,
    optimize: setOptimizeLayout,
    parseTime: setParseTime,
    labelFormat: setLabelFormat,
    render: render
  });
}
