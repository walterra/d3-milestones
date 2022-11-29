import * as dom from 'd3-selection';
import { nest } from 'd3-collection';

import { cssAboveClass, cssLastClass } from './_css';
// import { getAttribute } from './_get_attribute';
// import { getAvailableWidth } from './_get_available_width';
// import { getNextGroupHeight } from './_get_next_group_height';
// import { isAbove } from './_is_above';

// const MAX_OPTIMIZER_RUNS = 20;

// const getIntValueFromPxAttribute = (domElement, attribute) => {
//   return parseInt(domElement.style(attribute).replace('px', ''), 10);
// };

const getParentElement = (domElement) =>
  domElement.select(function () {
    return this.parentNode;
  });

// const isSameDistribution = (index, nextCheck, overlapCheckIndex) => {
//   const itemRowCheck = index % nextCheck;
//   const distributionCheck = (overlapCheckIndex + itemRowCheck) % nextCheck;

//   return distributionCheck !== 0;
// };

const LABEL_MIN_WIDTH = 60;
const LABEL_MAX_WIDTH = 180;

export const optimize = (
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
) => {
  // console.log('width', width);
  let orangeCount = 1;
  let iterations = 0;

  while (orangeCount > 0 && iterations < 10) {
    // debugger;
    orangeCount = 0;
    iterations++;
    const nestedNodes = nest()
      .key((d) => {
        return dom.selectAll(d).data()[0].timelineIndex;
      })
      .entries(textMerge._groups);

    for (const timeline of nestedNodes) {
      const aboveNodes = timeline.values.filter((tn) =>
        getParentElement(dom.select(tn[0])).classed(
          `${cssAboveClass}-${orientation}`
        )
      );

      const boundingsRects = Array(aboveNodes.length);
      let totalHeight = 0;
      let maxHeight = 0;

      for (const [i, aboveNode] of aboveNodes.entries()) {
        const item = dom.selectAll(aboveNode).data()[0];
        const offset = x(aggregateFormatParse(item.key));
        const boundingRect = getParentElement(dom.select(aboveNode[0]))
          .node()
          .getBoundingClientRect();

        totalHeight += boundingRect.height;
        maxHeight = Math.max(maxHeight, boundingRect.height);

        boundingRect.text = item.key;
        boundingRect.index = i;
        boundingRect.offset = offset;
        boundingsRects[i] = boundingRect;
      }

      const bitmap = Array.from({ length: totalHeight }, () =>
        Array.from({ length: width }, () => false)
      );

      const canvas = document.getElementById('bitmap');
      dom.select(canvas).attr('width', width);
      dom.select(canvas).attr('height', bitmap.length);
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        const lowestGreen = boundingsRects.reduce((p, c) => {
          const pHeight = p ? p.height : maxHeight;

          if (pHeight < c.height) return p;

          const leftEl = boundingsRects.find(
            (d) => d.index === c.index - 1 && d.width < LABEL_MIN_WIDTH
          );

          const rightEl = boundingsRects.find(
            (d) => d.index === c.index + 1 && d.width < LABEL_MIN_WIDTH
          );

          return leftEl !== undefined || rightEl !== undefined ? c : p;
        }, undefined);

        orangeCount = lowestGreen === undefined ? 0 : 1;

        if (lowestGreen !== undefined) {
          let lowestOrange;
          let side;

          if (lowestGreen.index > 0) {
            lowestOrange = boundingsRects.find(
              (d) =>
                d.index === lowestGreen.index - 1 && d.width < LABEL_MIN_WIDTH
            );
            side = 'before';
          }
          if (lowestGreen.index < boundingsRects.length) {
            const checkOrange = boundingsRects.find(
              (d) =>
                d.index === lowestGreen.index + 1 && d.width < LABEL_MIN_WIDTH
            );
            if (
              lowestOrange === undefined ||
              (checkOrange !== undefined &&
                lowestOrange.height > checkOrange.height)
            ) {
              lowestOrange = checkOrange;
              side = 'after';
            }
          }

          const loVolume = lowestOrange.width * lowestOrange.height;
          const newHeight = loVolume / LABEL_MIN_WIDTH;
          const newYOffset = lowestGreen.height + 2;
          const newX =
            side === 'before'
              ? lowestOrange.offset
              : lowestOrange.offset - LABEL_MIN_WIDTH - 2;

          ctx.fillStyle = `rgba(192,0,128,1)`;
          ctx.fillRect(
            newX,
            bitmap.length - newYOffset - newHeight,
            LABEL_MIN_WIDTH,
            newHeight
          );

          const backwards = side === 'after';
          const paddingAbove =
            orientation === 'horizontal' ? 'padding-bottom' : 'padding-right';
          const paddingBelow =
            orientation === 'horizontal' ? 'padding-top' : 'padding-left';
          const padding = paddingAbove;

          const domElement = getParentElement(
            dom.select(aboveNodes[lowestOrange.index][0])
          );

          domElement.classed(cssLastClass, backwards);
          domElement.style(padding, `${lowestGreen.height}px`);
          domElement.style(widthAttribute, `${LABEL_MIN_WIDTH + 5}px`);
          dom
            .select(aboveNodes[lowestOrange.index][0])
            .style(widthAttribute, `${LABEL_MIN_WIDTH}px`);
        }

        for (const rect of boundingsRects) {
          const alpha = 0.3 + (rect.height / maxHeight) * 0.9;

          if (rect.width >= LABEL_MIN_WIDTH) {
            ctx.fillStyle = `rgba(0,192,128,${alpha})`;
          } else {
            orangeCount++;
            ctx.fillStyle = `rgba(255,128,0,${alpha})`;
          }
          ctx.fillRect(
            rect.offset,
            bitmap.length - rect.height,
            rect.width,
            rect.height
          );
        }
      }
    }
  }
};
