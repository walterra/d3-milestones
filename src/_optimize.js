import * as dom from 'd3-selection';
import { nest } from 'd3-collection';

import { cssAboveClass, cssLastClass } from './_css';
// import { getAttribute } from './_get_attribute';
// import { getAvailableWidth } from './_get_available_width';
// import { getNextGroupHeight } from './_get_next_group_height';
// import { isAbove } from './_is_above';

const MAX_OPTIMIZER_RUNS = 20;
const ADJUST_PIXEL = 10;

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

const LABEL_MIN_WIDTH = 66;

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

  const paddingAbove =
    orientation === 'horizontal' ? 'padding-bottom' : 'padding-right';
  const paddingBelow =
    orientation === 'horizontal' ? 'padding-top' : 'padding-left';
  const padding = paddingAbove;

  const nestedNodes = nest()
    .key((d) => {
      return dom.selectAll(d).data()[0].timelineIndex;
    })
    .entries(textMerge._groups);

  for (const timeline of nestedNodes) {
    let maxHeight = 0;
    let orangeCount = 1;
    let iterations = 0;

    // get all upper nodes
    const aboveNodes = timeline.values.filter((tn) =>
      getParentElement(dom.select(tn[0])).classed(
        `${cssAboveClass}-${orientation}`
      )
    );

    // reset padding and "last" class before starting the optimization
    for (const aboveNode of aboveNodes) {
      const parentElement = getParentElement(dom.selectAll(aboveNode));
      parentElement.classed(cssLastClass, false);
      parentElement.style(padding, '0px');
    }

    while (orangeCount > 0 && iterations < MAX_OPTIMIZER_RUNS) {
      // debugger;
      orangeCount = 0;
      iterations++;

      const boundingsRects = Array(aboveNodes.length);
      let totalHeight = 0;

      for (const [i, aboveNode] of aboveNodes.entries()) {
        const item = dom.selectAll(aboveNode).data()[0];

        const parentElement = getParentElement(dom.selectAll(aboveNode));
        const backwards = parentElement.classed(cssLastClass);
        const paddingPx = parentElement.style(padding);

        const offset = x(aggregateFormatParse(item.key));
        const boundingRect = dom
          .select(aboveNode[0])
          .node()
          .getBoundingClientRect();

        totalHeight += boundingRect.height;
        maxHeight = Math.max(maxHeight, boundingRect.height);

        boundingRect.padding = parseFloat(paddingPx.split('px')[0]);
        boundingRect.backwards = backwards;
        boundingRect.text = item.key;
        boundingRect.index = i;
        boundingRect.offset = offset;
        boundingsRects[i] = boundingRect;
      }

      orangeCount = boundingsRects.reduce((p, c) => {
        return p + (c.width < LABEL_MIN_WIDTH) ? 1 : 0;
      }, 0);

      const bitmap = Array.from({ length: totalHeight }, () =>
        Array.from({ length: width }, () => false)
      );

      const canvas = document.getElementById('bitmap');
      dom.select(canvas).attr('width', width);
      dom.select(canvas).attr('height', bitmap.length);

      if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        const lowestGreen = boundingsRects.reduce((p, c) => {
          const pHeight = p ? p.height + p.padding : Number.POSITIVE_INFINITY;

          if (c.width < LABEL_MIN_WIDTH) return p;
          if (pHeight < c.height + c.padding) return p;

          const leftEl = boundingsRects.find(
            (d) => d.index === c.index - 1 && d.width < LABEL_MIN_WIDTH
          );

          const rightEl = boundingsRects.find(
            (d) =>
              d.index === c.index + 1 &&
              (d.width < LABEL_MIN_WIDTH ||
                (!d.backwards && d.offset + d.width > width))
          );

          return leftEl !== undefined || rightEl !== undefined ? c : p;
        }, undefined);

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
                d.index === lowestGreen.index + 1 &&
                (d.width < LABEL_MIN_WIDTH ||
                  (!d.backwards && d.offset + d.width > width))
            );
            if (
              lowestOrange === undefined ||
              (checkOrange !== undefined &&
                lowestOrange.height + lowestOrange.padding >
                  checkOrange.height + checkOrange.padding)
            ) {
              lowestOrange = checkOrange;
              side = 'after';
            }
          }

          if (lowestOrange !== undefined) {
            // create bitmap of all elements without current lowest orange
            for (const rect of boundingsRects) {
              if (rect.index !== lowestOrange.index) {
                const rX = Math.round(
                  rect.offset - (rect.backwards ? rect.width : 0)
                );
                const rY = Math.round(
                  bitmap.length -
                    rect.height -
                    (rect.padding !== undefined ? rect.padding : 0)
                );
                const rW = Math.round(rect.width);
                const rH = Math.round(rect.height);

                for (const [rowI, rB] of Array(rH).fill(true).entries()) {
                  for (const [colI, cB] of Array(rW).fill(true).entries()) {
                    bitmap[rY + rowI - 1][rX + colI - 1] = true;
                  }
                }

                if (rW >= LABEL_MIN_WIDTH) {
                  const columnHeight = Math.floor(
                    rect.padding !== undefined ? rect.padding : 0
                  );
                  for (const [rowI, cB] of Array(columnHeight)
                    .fill(true)
                    .entries()) {
                    bitmap[rY + rH + rowI - 1][rX - 1] = true;
                    bitmap[rY + rH + rowI - 1][rX + rW - 1] = true;
                  }
                }
              }
            }

            let overlap = true;
            let iterations = 0;
            let newTestWith = labelMaxWidth;
            let newYOffset = Math.round(
              lowestGreen.height + lowestGreen.padding + 2
            );

            while (overlap === true && iterations < 10000) {
              iterations++;

              const loVolume = lowestOrange.width * lowestOrange.height;
              const newHeight = Math.max(
                20,
                Math.round(loVolume / newTestWith)
              );
              const newX = Math.round(
                side === 'before'
                  ? lowestOrange.offset
                  : lowestOrange.offset - newTestWith - 2
              );
              const newY = Math.round(bitmap.length - newYOffset - newHeight);
              const newWidth = Math.round(newTestWith);

              ctx.fillStyle = `rgba(192,0,128,0.1)`;
              ctx.fillRect(newX, newY, newWidth, newHeight);

              overlap = false;

              if (newX + newWidth > width && side === 'after') {
                overlap = true;
              } else if (newX < 0) {
                overlap = true;
              } else {
                for (const [rowI, rB] of Array(newHeight)
                  .fill(true)
                  .entries()) {
                  for (const [colI, cB] of Array(newWidth)
                    .fill(true)
                    .entries()) {
                    if (bitmap[newY + rowI - 1][newX + colI - 1]) {
                      overlap = true;
                      break;
                    }
                  }
                  if (overlap) {
                    break;
                  }
                }
              }

              if (overlap) {
                if (newTestWith - ADJUST_PIXEL >= LABEL_MIN_WIDTH) {
                  newTestWith -= ADJUST_PIXEL;
                } else {
                  newTestWith = labelMaxWidth;
                  newYOffset += ADJUST_PIXEL;
                }
              }
            }

            const backwards = side === 'after';

            const domElement = getParentElement(
              dom.select(aboveNodes[lowestOrange.index][0])
            );

            domElement.classed(cssLastClass, backwards);
            domElement.style(padding, `${newYOffset}px`);
            domElement.style(widthAttribute, `${newTestWith + 5}px`);
            dom
              .select(aboveNodes[lowestOrange.index][0])
              .style(widthAttribute, `${newTestWith}px`);

            boundingsRects[lowestOrange.index].padding =
              lowestGreen.height + lowestGreen.padding;
          }
        }

        const alpha = 0.3;
        ctx.fillStyle = `rgba(0,192,128,${alpha})`;
        bitmap.forEach((row, yIndex) => {
          row.forEach((pixel, xIndex) => {
            if (pixel) {
              ctx.fillRect(xIndex, yIndex, 1, 1);
            }
          });
        });

        if (lowestGreen === undefined) {
          for (const rect of boundingsRects) {
            const alpha = 0.3 + (rect.height / maxHeight) * 0.9;
            if (rect.width >= LABEL_MIN_WIDTH) {
              ctx.fillStyle = `rgba(0,192,128,${alpha})`;
            } else {
              orangeCount++;
              ctx.fillStyle = `rgba(255,128,0,${alpha})`;
            }
            ctx.fillRect(
              rect.offset - (rect.backwards ? rect.width : 0),
              bitmap.length -
                rect.height -
                (rect.padding !== undefined ? rect.padding : 0),
              rect.width,
              rect.height
            );
          }
        }
      }
    }
  }
};
