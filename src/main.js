import * as dom from 'd3-selection';
import * as scale from 'd3-scale';
import { extent, max } from 'd3-array';
import { isoParse } from 'd3-time-format';

import { aggregateFormats } from './_aggregate_formats';
import api from './_api';
import {
  cssPrefix,
  cssCategoryClass,
  cssHorizontalLineClass,
  cssVerticalLineClass,
  cssGroupClass,
  cssBulletClass,
  cssLabelClass,
  cssAboveClass,
  cssTextClass,
  cssTitleClass,
  cssEventClass,
  cssEventHoverClass,
} from './_css';
import { isAbove } from './_is_above';
import { optimize as optimizeFn } from './_optimize';
import { timeFormat } from './_time_format';
import { timeParse } from './_time_parse';
import { transform } from './_transform';

export default function milestones(selector) {
  let distribution = 'top-bottom';
  function setDistribution(d) {
    distribution = d;
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
    text: 'text',
    url: 'url',
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

  let aggregateFormat = timeFormat(aggregateFormats.minute);
  let aggregateFormatParse = timeParse(aggregateFormats.minute);

  function setAggregateBy(d) {
    aggregateFormat = timeFormat(aggregateFormats[d]);
    aggregateFormatParse = timeParse(aggregateFormats[d]);
    setLabelFormat(aggregateFormats[d]);
  }

  window.addEventListener('resize', () =>
    window.requestAnimationFrame(() => render())
  );

  function render(data) {
    const widthAttribute = orientation === 'horizontal' ? 'width' : 'height';
    const marginTimeAttribute =
      orientation === 'horizontal' ? 'margin-left' : 'margin-top';
    const cssLineClass =
      orientation === 'horizontal'
        ? cssHorizontalLineClass
        : cssVerticalLineClass;
    const labelMaxWidth = orientation === 'horizontal' ? 180 : 100;

    const timelineSelection = dom.select(selector).selectAll('.' + cssPrefix);
    const nestedData =
      typeof data !== 'undefined'
        ? transform(aggregateFormat, data, mapping, parseTime)
        : timelineSelection.data();
    const timeline = timelineSelection.data(nestedData);

    const timelineEnter = timeline
      .enter()
      .append('div')
      .attr('class', cssPrefix);

    timeline.exit().remove();

    // rightMargin compensates for the right most bullet position
    const rightMargin = 11;
    const selectorWidth =
      parseFloat(dom.select(selector).style(widthAttribute)) - rightMargin;

    if (typeof mapping.category !== 'undefined') {
      timelineEnter
        .append('div')
        .attr('class', cssCategoryClass)
        .text((d) => d.category);

      timelineEnter
        .append('div')
        .attr('class', 'data-js-timeline')
        .append('div')
        .attr('class', cssLineClass);
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
    timelineMerge
      .selectAll('.data-js-timeline')
      .style(
        marginTimeAttribute,
        maxCategoryLabelWidth + timelineLeftMargin + 'px'
      );
    timelineMerge
      .selectAll('.' + cssLineClass)
      .style(widthAttribute, width + 'px');

    const groupSelector =
      typeof mapping.category === 'undefined'
        ? timelineMerge
        : timelineMerge.selectAll('.data-js-timeline');
    const groupSelection = groupSelector.selectAll('.' + cssGroupClass);

    const group = groupSelection.data((d) => {
      return typeof mapping.category === 'undefined' ? d : d.entries;
    });

    const allKeys = nestedData.reduce((keys, timeline) => {
      const t =
        typeof mapping.category === 'undefined' ? timeline : timeline.entries;
      t.map((d) => keys.push(d.key));
      return keys;
    }, []);

    const domain =
      typeof range !== 'undefined'
        ? range.map(aggregateFormatParse)
        : extent(allKeys, (d) => aggregateFormatParse(d));

    const x = scale
      .scaleTime()
      .rangeRound([0, width])
      // sets oldest and newest date as the scales domain
      .domain(domain);

    const groupEnter = group.enter().append('div').attr('class', cssGroupClass);

    group.exit().remove();

    groupEnter.append('div').attr('class', cssBulletClass);

    const groupMerge = groupEnter
      .merge(group)
      .style(marginTimeAttribute, (d) => x(aggregateFormatParse(d.key)) + 'px');

    if (useLabels) {
      const label = groupMerge
        .selectAll('.' + cssLabelClass + '-' + orientation)
        .data((d) => [d]);

      const labelMerge = label
        .enter()
        .append('div')
        .attr('class', cssLabelClass + '-' + orientation)
        .merge(label)
        // .classed(cssLastClass, (d) => {
        //   const mostRightPosition = Math.round(x.range()[1]);
        //   const currentPosition = x(aggregateFormatParse(d.key));
        //   return (
        //     mostRightPosition === currentPosition &&
        //     orientation === 'horizontal'
        //   );
        // })
        .classed(cssAboveClass + '-' + orientation, (d) =>
          isAbove(d.index, distribution)
        );

      const text = labelMerge
        .selectAll('.' + cssTextClass + '-' + orientation)
        .data((d) => [d]);

      const textEnter = text
        .enter()
        .append('div')
        .attr('class', cssTextClass + '-' + orientation)
        .merge(text)
        .style(widthAttribute, (d) => {
          // calculate the available width
          const offset = x(aggregateFormatParse(d.key));
          // get the next and previous item on the same lane
          let nextItem;
          let previousItem;
          let itemNumTotal;
          const itemNum = d.index + 1;
          const nextCheck = distribution === 'top-bottom' ? 2 : 1;
          if (typeof mapping.category === 'undefined') {
            nextItem = nestedData[d.timelineIndex][d.index + nextCheck];
            previousItem = nestedData[d.timelineIndex][d.index - nextCheck];
            itemNumTotal = nestedData[d.timelineIndex].length;
          } else {
            nextItem = nestedData[d.timelineIndex].entries[d.index + nextCheck];
            previousItem =
              nestedData[d.timelineIndex].entries[d.index - nextCheck];
            itemNumTotal = nestedData[d.timelineIndex].entries.length;
          }

          let availableWidth;
          const compareItem1 =
            orientation === 'horizontal' ? nextItem : previousItem;
          const compareItem2 =
            orientation === 'horizontal' ? previousItem : nextItem;

          if (typeof compareItem1 !== 'undefined') {
            const offsetNextItem = x(aggregateFormatParse(compareItem1.key));
            availableWidth =
              orientation === 'horizontal'
                ? offsetNextItem - offset
                : offset - offsetNextItem;

            if (itemNumTotal - itemNum === 2) {
              availableWidth /= 2;
            }
          } else {
            if (itemNumTotal - itemNum === 1) {
              availableWidth =
                orientation === 'horizontal' ? width - offset : offset;
            } else if (itemNumTotal - itemNum === 0) {
              if (typeof compareItem2 !== 'undefined') {
                const offsetPreviousItem = x(
                  aggregateFormatParse(compareItem2.key)
                );
                availableWidth =
                  orientation === 'horizontal'
                    ? (width - offsetPreviousItem) / 2
                    : offsetPreviousItem / 2;
              } else {
                availableWidth = width;
              }
            }
          }

          const labelRightMargin = 6;
          const availableWidthWithMargin = Math.max(
            0,
            availableWidth - labelRightMargin
          );
          const finalWidth = Math.min(
            orientation === 'horizontal'
              ? labelMaxWidth
              : availableWidthWithMargin,
            availableWidthWithMargin
          );
          return finalWidth + 'px';
        })
        .each(function (d) {
          const above = isAbove(d.index, distribution);

          const wrapper = dom.select(this);
          wrapper.html(null);

          const element = wrapper.append('div').classed('wrapper', true);

          if (!above || orientation === 'vertical') {
            element
              .append('span')
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
            if (
              ['jpg', 'jpeg', 'gif', 'png'].indexOf(t.split('.').pop()) > -1
            ) {
              item = element
                .append('img')
                .classed('milestones-label', true)
                .classed('milestones-image-label', true)
                .attr('height', '100')
                .attr('src', t);
            } else if (v[mapping.url]) {
              item = element
                .append('a')
                .classed('milestones-label', true)
                .classed('milestones-link-label', true)
                .attr('href', v[mapping.url])
                .text(t);
            } else {
              item = element
                .append('span')
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
              typeof callbackClick === 'function' ||
              typeof callBackMouseLeave === 'function' ||
              typeof callBackMouseOver === 'function'
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
            element
              .append('span')
              .classed(cssTitleClass, true)
              .text(labelFormat(aggregateFormatParse(d.key)));
          }
        });

      const textMerge = text.merge(textEnter);

      textMerge.style('padding-top', '0px').style('padding-bottom', '0px');

      if (optimizeLayout) {
        optimizeFn(
          aggregateFormatParse,
          distribution,
          labelMaxWidth,
          mapping,
          nestedData,
          orientation,
          textMerge,
          width,
          widthAttribute,
          x
        );
      }
    } else {
      groupMerge.selectAll('.' + cssLabelClass + '-' + orientation).remove();
    }

    // finally, adjust offset, height and width of the whole timeline
    timelineMerge.each((d, i, node) => {
      const margin = 10;
      const maxAboveHeight = max(
        dom.select(node[i]).selectAll('* .' + cssAboveClass + '-' + orientation)
          ._groups[0],
        (d) => d.offsetHeight
      );
      const maxBelowHeight = max(
        dom
          .select(node[i])
          .selectAll('* :not(.' + cssAboveClass + '-' + orientation + ')')
          ._groups[0],
        (d) => d.offsetHeight
      );

      if (orientation === 'horizontal') {
        dom
          .select(node[i])
          .style('margin-top', margin + (maxAboveHeight || 0) + 'px')
          .style('height', margin + (maxBelowHeight || 0) + 'px');
      } else {
        const percent =
          typeof mapping.category !== 'undefined'
            ? Math.round(100 / (nestedData.length + 1)) * (i + 1)
            : '50';
        dom
          .select(node[i])
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
