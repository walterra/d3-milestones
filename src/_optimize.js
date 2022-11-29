import * as dom from 'd3-selection';
import { nest } from 'd3-collection';

import { cssAboveClass } from './_css';
// import { cssLastClass } from './_css';
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
  const nestedNodes = nest()
    .key((d) => {
      return dom.selectAll(d).data()[0].timelineIndex;
    })
    .entries(textMerge._groups);

  // const nextCheck = distribution === 'top-bottom' ? 2 : 1;

  for (const timeline of nestedNodes) {
    // const timelineNodes = timeline.values.map((d) => d[0]);

    const aboveNodes = timeline.values.filter((tn) =>
      getParentElement(dom.select(tn[0])).classed(
        `${cssAboveClass}-${orientation}`
      )
    );

    const startNodeIndex = Math.floor(aboveNodes.length / 2);

    const offsets = Array(aboveNodes.length);
    let totalHeight = 0;

    for (const [i, aboveNode] of aboveNodes.entries()) {
      const item = dom.selectAll(aboveNode).data()[0];
      const offset = x(aggregateFormatParse(item.key));
      const rect = dom.selectAll(aboveNode).node().getBoundingClientRect();

      totalHeight += rect.height;

      offsets[i] = offset;
    }

    const bitmap = Array.from({ length: totalHeight }, () =>
      Array.from({ length: width }, () => false)
    );

    for (const [i, offset] of offsets.entries()) {
      if (i !== startNodeIndex) {
        bitmap[bitmap.length - 1][offset] = true;
      }
    }

    const canvas = document.getElementById('bitmap');
    dom.select(canvas).attr('width', width);
    dom.select(canvas).attr('height', bitmap.length);
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgba(255,0,0,255)';

      bitmap.forEach((row, yIndex) => {
        row.forEach((pixel, xIndex) => {
          // console.log('pixel', xIndex, yIndex, pixel);
          if (pixel) {
            ctx.fillRect(xIndex, yIndex, 1, 1);
          }
        });
      });
    }
  }
};
