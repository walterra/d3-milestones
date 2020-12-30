import * as dom from 'd3-selection';
import * as scale from 'd3-scale';
import { ascending, extent, max } from 'd3-array';
import { nest } from 'd3-collection';
import { isoParse, timeFormat as d3TimeFormat, timeParse as d3TimeParse } from 'd3-time-format';
import api from './_api';

const cssPrefix = 'milestones';
const cssCategoryClass = cssPrefix + '__category_label';
const cssHorizontalLineClass = cssPrefix + '__horizontal_line';
const cssVerticalLineClass = cssPrefix + '__vertical_line';
const cssGroupClass = cssPrefix + '__group';
const cssBulletClass = cssGroupClass + '__bullet';
const cssLabelClass = cssGroupClass + '__label';
const cssLastClass = cssLabelClass + '-last';
const cssAboveClass = cssLabelClass + '-above';
const cssTextClass = cssLabelClass + '__text';
const cssTitleClass = cssTextClass + '__title';
const cssEventClass = cssTextClass + '__event';
const cssEventHoverClass = cssEventClass + '--hover';

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

  let orientation = 'horizontal';
  function setOrientation(d) {
    orientation = d;
    // purge the DOM to avoid layout issues when switching orientation
    dom.select(selector).html('');
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

  // set callback for event mouseover
  let callBackMouseOver;
  function setEventMouseOverCallback(callback) {
    callBackMouseOver = callback;
  }
  function eventMouseOver(d) {
    if (typeof callBackMouseOver === 'function') {
      dom.select(this).classed(cssEventHoverClass, true);
      callBackMouseOver(d);
    }
    return d;
  }

  // set callback for event mouseleave
  let callBackMouseLeave;
  function setEventMouseLeaveCallback(callback) {
    callBackMouseLeave = callback;
  }
  function eventMouseLeave(d) {
    if (typeof callBackMouseOver === 'function') {
      dom.select(this).classed(cssEventHoverClass, false);
      callBackMouseLeave(d);
    }
    return d;
  }

  // set callback for event click
  let callbackClick;
  function setEventClickCallback(callback) {
    callbackClick = callback;
  }
  function eventClick(d) {
    if (typeof callbackClick === 'function') {
      callbackClick(d);
    }
    return d;
  }

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
    const widthAttribute = orientation === 'horizontal' ? 'width' : 'height';
    const marginTimeAttribute = orientation === 'horizontal' ? 'margin-left' : 'margin-top';
    const cssLineClass = orientation === 'horizontal' ? cssHorizontalLineClass : cssVerticalLineClass;
    const labelMaxWidth = orientation === 'horizontal' ? 180 : 100;

    const timelineSelection = dom.select(selector).selectAll('.' + cssPrefix);
    const nestedData = (typeof data !== 'undefined') ? transform(data) : timelineSelection.data();
    const timeline = timelineSelection.data(nestedData);

    const timelineEnter = timeline.enter().append('div')
      .attr('class', cssPrefix);

    timeline.exit().remove();

    // rightMargin compensates for the right most bullet position
    const rightMargin = 11;
    const selectorWidth = parseFloat(dom.select(selector).style(widthAttribute)) - rightMargin;

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
    if (orientation === 'vertical') {
      categoryLabels.style('margin-left', '-50%');
      categoryLabels.style('text-align', 'center');
    }
    timelineMerge.selectAll('.data-js-timeline')
      .style(marginTimeAttribute, (maxCategoryLabelWidth + timelineLeftMargin) + 'px');
    timelineMerge.selectAll('.' + cssLineClass)
      .style(widthAttribute, width + 'px');

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
      .style(marginTimeAttribute, d => x(aggregateFormatParse(d.key)) + 'px');

    if (useLabels) {
      const label = groupMerge.selectAll('.' + cssLabelClass + '-' + orientation).data(d => [d]);

      const labelMerge = label.enter().append('div')
        .attr('class', cssLabelClass + '-' + orientation)
        .merge(label)
        .classed(cssLastClass, d => {
          const mostRightPosition = Math.round(x.range()[1]);
          const currentPosition = x(aggregateFormatParse(d.key));
          return mostRightPosition === currentPosition; // nestedData[d.timelineIndex].length === (d.index + 1);
        })
        .classed(cssAboveClass + '-' + orientation, d => isAbove(d.index));

      const text = labelMerge.selectAll('.' + cssTextClass + '-' + orientation).data(d => [d]);

      const textEnter = text.enter().append('div')
        .attr('class', cssTextClass + '-' + orientation)
        .merge(text)
        .style(widthAttribute, d => {
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
          const compareItem1 = orientation === 'horizontal' ? nextItem : previousItem;
          const compareItem2 = orientation === 'horizontal' ? previousItem : nextItem;

          if (typeof compareItem1 !== 'undefined') {
            const offsetNextItem = x(aggregateFormatParse(compareItem1.key));
            availableWidth = orientation === 'horizontal' ? offsetNextItem - offset : offset - offsetNextItem;

            if ((itemNumTotal - itemNum) === 2) {
              availableWidth /= 2;
            }
          } else {
            if ((itemNumTotal - itemNum) === 1) {
              availableWidth = orientation === 'horizontal' ? width - offset : offset;
            } else if ((itemNumTotal - itemNum) === 0) {
              if (typeof compareItem2 !== 'undefined') {
                const offsetPreviousItem = x(aggregateFormatParse(compareItem2.key));
                availableWidth = orientation === 'horizontal' ? (width - offsetPreviousItem) / 2 : (offsetPreviousItem) / 2;
              } else {
                availableWidth = width;
              }
            }
          }

          const labelRightMargin = 6;
          const availableWidthWithMargin = (Math.max(0, availableWidth - labelRightMargin));
          const finalWidth = Math.min(orientation === 'horizontal' ? labelMaxWidth : availableWidthWithMargin, availableWidthWithMargin);
          return finalWidth + 'px';
        })
        .each(function(d) {
          const above = isAbove(d.index);

          const wrapper = dom.select(this);
          wrapper.html(null);

          const element = wrapper.append('div').classed('wrapper', true);


          if (!above || orientation === 'vertical') {
            element.append('span')
              .classed(cssTitleClass, true)
              .text(labelFormat(aggregateFormatParse(d.key)));
            element.append('br');
          }

          d.values.map((v, i) => {
            if (i > 0) {
              element.append('br');
            }

            const t = v[mapping.text];
            let item;
            // test if text is an image filename,
            // if so return an image tag with the filename as the source
            if (['jpg', 'jpeg', 'gif', 'png'].indexOf(t.split('.').pop()) > -1) {
              item = element.append('img')
                .classed('milestones-label', true)
                .classed('milestones-image-label', true)
                .attr('height', '100')
                .attr('src', t);
            } else {
              item = element.append('span')
                .classed('milestones-label', true)
                .classed('milestones-text-label', true)
                .text(t);
            }

            item.datum({
              text: v[mapping.text],
              timestamp: v[mapping.timestamp],
              attributes: v, // original value of an object passed to the milestone
            });

            if (
              typeof callbackClick === 'function'
              || typeof callBackMouseLeave === 'function'
              || typeof callBackMouseOver === 'function'
            ) {
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
          });

          if (above && orientation === 'horizontal') {
            element.append('br');
            element.append('span')
              .classed(cssTitleClass, true)
              .text(labelFormat(aggregateFormatParse(d.key)));
          }
        });

      const textMerge = text.merge(textEnter);

      textMerge
        .style('padding-top', '0px')
        .style('padding-bottom', '0px');

      if (optimizeLayout) {
        const optimizeFn = () => {
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
              const index = orientation === 'horizontal' ? nodes.length - d.index - 1 : d.index;
              const item = dom.selectAll(nodes[index]).data()[0];
              const offset = x(aggregateFormatParse(item.key));
              const currentNode = nodes[index][0];

              const scrollCheckAttribute = orientation === 'horizontal' ? 'offsetWidth' : 'offsetHeight';
              const offsetCheckAttribute = orientation === 'horizontal' ? 'width' : 'height';
              const offsetComparator = orientation === 'horizontal' ? 60 : 20;

              function getAttribute(d) {
                return parseInt(d.style[offsetCheckAttribute].replace('px', ''), 10);
              }

              const offsetCheck = getAttribute(currentNode);

              if (
                currentNode[scrollCheckAttribute] > offsetCheck ||
                offsetCheck < offsetComparator
              ) {
                optimizations++;

                const domElement = dom.selectAll(nodes[index]);
                const paddingAbove = orientation === 'horizontal' ? 'padding-bottom' : 'padding-right';
                const paddingBelow = orientation === 'horizontal' ? 'padding-top' : 'padding-left';
                const padding = isAbove(index) ? paddingAbove : paddingBelow;
                const offsetAttribute = orientation === 'horizontal' ? 'offsetHeight' : 'offsetWidth';

                const getAvailableWidth = (nextCheck) => {
                  // get the height of the next group
                  const defaultPadding = 3;
                  const nextGroup = orientation === 'horizontal' ? nodes[index + nextCheck] : nodes[index - nextCheck];
                  let nextGroupHeight = 0;
                  if (typeof nextGroup !== 'undefined') {
                    nextGroupHeight = nextGroup[0][offsetAttribute] + defaultPadding;
                  }
                  domElement.style(padding, nextGroupHeight + 'px');

                  // get the available width until the uber-next group
                  let nextTestIndex = orientation === 'horizontal' ? index + nextCheck : index - nextCheck;
                  let nextTestItem;
                  do {
                    if (orientation === 'horizontal') {
                      nextTestIndex += nextCheck;
                    } else {
                      nextTestIndex -= nextCheck;
                    }
                    nextTestItem = textMerge._groups[nextTestIndex];
                    if (typeof nextTestItem === 'undefined') {
                      break;
                    }
                  } while (nextGroupHeight >= (nextTestItem[0][offsetAttribute]));
                  let uberNextItem;
                  if (typeof mapping.category === 'undefined') {
                    uberNextItem = nestedData[d.timelineIndex][nextTestIndex];
                  } else {
                    uberNextItem = nestedData[d.timelineIndex].entries[nextTestIndex];
                  }

                  let availableWidth = getAttribute(currentNode);

                  if (typeof uberNextItem !== 'undefined') {
                    const offsetUberNextItem = x(aggregateFormatParse(uberNextItem.key));
                    if (orientation === 'horizontal') {
                      availableWidth = offsetUberNextItem - offset - labelRightMargin;
                    } else {
                      availableWidth = offset - offsetUberNextItem - labelRightMargin;
                    }
                  } else {
                    if (orientation === 'horizontal') {
                      availableWidth = width - offset - labelRightMargin;
                    } else {
                      availableWidth = offset - labelRightMargin;
                    }

                  }

                  return availableWidth;
                };
                let availableWidth = 0;
                let runs = 0;
                let nextCheckIterator = orientation === 'horizontal' ? nextCheck - 1 : nextCheck + 1;
                do {
                  if (orientation === 'horizontal') {
                    nextCheckIterator++;
                  } else {
                    nextCheckIterator--;
                  }
                  runs++;
                  if (nextCheckIterator > 0) {
                    availableWidth = getAvailableWidth(nextCheckIterator);
                  }
                } while (availableWidth < currentNode[scrollCheckAttribute] && runs < 10);
                if (orientation === 'horizontal') {
                  availableWidth = Math.min(labelMaxWidth, availableWidth);
                }
                domElement.style(widthAttribute, availableWidth + 'px');
              }
            });
          });

          return optimizations;
        };
        optimizeFn();
      }
    } else {
      groupMerge.selectAll('.' + cssLabelClass + '-' + orientation).remove();
    }

    // finally, adjust offset, height and width of the whole timeline
    timelineMerge.each((d, i, node) => {
      const margin = 10;
      const maxAboveHeight = max(dom.select(node[i]).selectAll('* .' + cssAboveClass + '-' + orientation)._groups[0], d => d.offsetHeight);
      const maxBelowHeight = max(dom.select(node[i]).selectAll('* :not(.' + cssAboveClass + '-' + orientation + ')')._groups[0], d => d.offsetHeight);

      if (orientation === 'horizontal') {
        dom.select(node[i])
          .style('margin-top', (margin + (maxAboveHeight || 0)) + 'px')
          .style('height', (margin + (maxBelowHeight || 0)) + 'px');
      } else {
        const percent = typeof mapping.category !== 'undefined' ? Math.round(100 / (nestedData.length + 1)) * (i + 1) : '50';
        dom.select(node[i])
          .style('margin-top', '50px')
          .style('margin-left', percent + '%')
          .style('position', 'absolute');
      }
    });
  }

  return api({
    aggregateBy: setAggregateBy,
    mapping: assignMapping,
    optimize: setOptimizeLayout,
    orientation: setOrientation,
    distribution: setDistribution,
    parseTime: setParseTime,
    labelFormat: setLabelFormat,
    useLabels: setUseLabels,
    range: setRange,
    render: render,
    onEventClick: setEventClickCallback,
    onEventMouseLeave: setEventMouseLeaveCallback,
    onEventMouseOver: setEventMouseOverCallback,
  });
}
