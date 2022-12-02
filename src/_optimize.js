import * as dom from 'd3-selection';
import { nest } from 'd3-collection';

import { cssAboveClass, cssBelowClass, cssLastClass } from './_css';

const LABEL_MIN_WIDTH = { horizontal: 60, vertical: 60 };
const ADJUST_PIXEL_STEP = 10;
const DEBUG_CHART = true;
const DEBUG_TIME = true;

const getDebugCanvasContext = (width, height, marginBottom) => {
  if (!DEBUG_CHART) return;

  const canvas = document.getElementById('bitmap');

  const domCanvas = dom.select(canvas);
  domCanvas.attr('width', width);
  domCanvas.attr('height', height);
  domCanvas.style('display', 'block');
  domCanvas.style('margin-bottom', `${marginBottom}px`);

  if (canvas && canvas.getContext) {
    return canvas.getContext('2d');
  }
};

const getTextWidth = (el, isHorizontal) => {
  const range = document.createRange();
  const text = el.childNodes[0];
  range.setStartBefore(text);
  range.setEndAfter(text);
  const clientRect = range.getBoundingClientRect();
  return Math.max(
    LABEL_MIN_WIDTH[isHorizontal ? 'horizontal' : 'vertical'],
    Math.round(clientRect.width)
  );
};

const getParentElement = (domElement) =>
  domElement.select(function () {
    return this.parentNode;
  });

const getBitmap = (width, height, rects, nodes, isHorizontal) => {
  const bitmap = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => false)
  );

  for (const rect of rects) {
    const bitmapIndex = rect.index + 1;

    const rectWidth = isHorizontal ? rect.width : rect.height;
    const rectHeight = isHorizontal ? rect.height : rect.width;

    const rX = Math.round(rect.offset - (rect.backwards ? rectWidth : 0));
    const rY = Math.round(
      bitmap.length -
        rectHeight -
        (rect.padding !== undefined ? rect.padding : 0)
    );

    // const textWidth = getTextWidth(nodes[rect.index][0], isHorizontal);
    const rW = Math.round(rectWidth);
    const rH = Math.round(rectHeight);

    for (const [rowI] of Array(rH).fill(true).entries()) {
      for (const [colI] of Array(rW).fill(true).entries()) {
        if (
          bitmap[rY + rowI - 1] &&
          bitmap[rY + rowI - 1][rX + colI - 1] !== undefined
        ) {
          bitmap[rY + rowI - 1][rX + colI - 1] =
            bitmap[rY + rowI - 1][rX + colI - 1] === false ? bitmapIndex : true;
        }
      }
    }

    const columnHeight = Math.floor(
      rect.padding !== undefined ? rect.padding : 0
    );
    for (const [rowI] of Array(columnHeight).fill(true).entries()) {
      if (bitmap[rY + rH + rowI - 1]) {
        if (
          !rect.backwards &&
          bitmap[rY + rH + rowI - 1][rX - 1] !== undefined
        ) {
          bitmap[rY + rH + rowI - 1][rX - 1] =
            bitmap[rY + rH + rowI - 1][rX - 1] === false ? bitmapIndex : true;
        } else if (
          rect.backwards &&
          bitmap[rY + rH + rowI - 1][rX + rW - 2] !== undefined
        ) {
          bitmap[rY + rH + rowI - 1][rX + rW - 2] =
            bitmap[rY + rH + rowI - 1][rX + rW - 2] === false
              ? bitmapIndex
              : true;
        }
      }
    }
  }

  return bitmap;
};

export const optimize = (
  aggregateFormatParse,
  distribution,
  labelMaxWidth,
  mapping,
  nestedData,
  orientation,
  textMerge,
  width,
  x
) => {
  if (DEBUG_TIME) {
    console.time('optimize');
  }

  const isHorizontal = orientation === 'horizontal';
  const heightAttr = isHorizontal ? 'height' : 'width';
  const widthAttr = isHorizontal ? 'width' : 'height';

  const paddingAbove = isHorizontal ? 'padding-bottom' : 'padding-right';
  const paddingBelow = isHorizontal ? 'padding-top' : 'padding-left';

  const nestedNodes = nest()
    .key((d) => {
      return dom.selectAll(d).data()[0].timelineIndex;
    })
    .entries(textMerge._groups);

  for (const timeline of nestedNodes) {
    // get all upper nodes
    const aboveNodes = timeline.values.filter((tn) =>
      getParentElement(dom.select(tn[0])).classed(
        `${cssAboveClass}-${orientation}`
      )
    );

    // get all lower nodes
    const belowNodes = timeline.values.filter((tn) =>
      getParentElement(dom.select(tn[0])).classed(
        `${cssBelowClass}-${orientation}`
      )
    );

    const optimizeLayout = (nodes, isAbove) => {
      let orangeCount = 1;
      let iterations = 0;

      const padding = isAbove ? paddingAbove : paddingBelow;

      // reset padding and "last" class before starting the optimization
      for (const node of nodes) {
        const parentElement = getParentElement(dom.selectAll(node));
        parentElement.classed(`${cssLastClass}-${orientation}`, false);
        parentElement.style(padding, isHorizontal ? '0px' : '10px');
      }

      while (orangeCount > 0 && iterations < nodes.length + 10) {
        console.log('iteration', iterations);
        // debugger;
        orangeCount = 0;
        iterations++;
        let totalHeight = 0;
        let maxHeight = 0;

        const boundingsRects = Array(nodes.length);

        for (const [i, node] of nodes.entries()) {
          const item = dom.selectAll(node).data()[0];

          const parentElement = getParentElement(dom.selectAll(node));
          const backwards = parentElement.classed(
            `${cssLastClass}-${orientation}`
          );
          const paddingPx = parentElement.style(padding);

          const offset = x(aggregateFormatParse(item.key));
          const boundingRect = dom
            .select(node[0])
            .node()
            .getBoundingClientRect();

          boundingRect.padding = parseFloat(paddingPx.split('px')[0]);
          boundingRect.backwards = backwards;
          boundingRect.text = item.key;
          boundingRect.index = i;
          boundingRect.offset = offset;
          boundingsRects[i] = boundingRect;

          totalHeight = Math.max(
            totalHeight,
            boundingRect[heightAttr] + boundingRect.padding
          );
          maxHeight = Math.max(maxHeight, boundingRect[heightAttr]);
        }
        totalHeight = totalHeight * 2;

        orangeCount = boundingsRects.reduce((p, c) => {
          return p + (c[widthAttr] < LABEL_MIN_WIDTH[orientation]) ? 1 : 0;
        }, 0);

        // create bitmap of all elements
        const bitmapWidth = width;
        const bitmapHeight = totalHeight;
        const bitmapMarginBottom = Math.round(isHorizontal ? maxHeight : 0);
        const bitmap = getBitmap(
          bitmapWidth,
          bitmapHeight,
          boundingsRects,
          nodes,
          isHorizontal
        );
        const ctx = getDebugCanvasContext(
          bitmapWidth,
          bitmapHeight,
          bitmapMarginBottom
        );
        let lowestOrange;
        let side;

        const lowestGreen = boundingsRects.reduce((p, c) => {
          const pHeight = p
            ? p[heightAttr] + p.padding
            : Number.POSITIVE_INFINITY;

          if (c[widthAttr] < LABEL_MIN_WIDTH[orientation]) return p;
          if (pHeight < c[heightAttr] + c.padding) return p;

          const leftEl = boundingsRects.find(
            (d) =>
              d.index === c.index - 1 &&
              d[widthAttr] < LABEL_MIN_WIDTH[orientation]
          );

          const rightEl = boundingsRects.find(
            (d) =>
              d.index === c.index + 1 &&
              (d[widthAttr] < LABEL_MIN_WIDTH[orientation] ||
                (!d.backwards && d.offset + d[widthAttr] > width))
          );

          return leftEl !== undefined || rightEl !== undefined ? c : p;
        }, undefined);

        if (lowestGreen !== undefined) {
          // get an eventual orange element left of the green one
          if (lowestGreen.index > 0) {
            lowestOrange = boundingsRects.find(
              (d) =>
                d.index === lowestGreen.index - 1 &&
                d[widthAttr] < LABEL_MIN_WIDTH[orientation]
            );
            side = 'before';
          }

          // get an eventual orange element right of the green one
          if (
            lowestOrange === undefined &&
            lowestGreen.index < boundingsRects.length
          ) {
            const checkOrange = boundingsRects.find(
              (d) =>
                d.index === lowestGreen.index + 1 &&
                (d[widthAttr] < LABEL_MIN_WIDTH[orientation] ||
                  (!d.backwards && d.offset + d[widthAttr] > width))
            );

            if (
              lowestOrange === undefined ||
              (checkOrange !== undefined &&
                lowestOrange[heightAttr] + lowestOrange.padding >
                  checkOrange[heightAttr] + checkOrange.padding)
            ) {
              lowestOrange = checkOrange;
              side = 'after';
            }
          }

          if (lowestOrange !== undefined) {
            let overlap = true;
            let resizeIterations = 0;
            let newTestWidth = labelMaxWidth;
            let newYOffset = 0;

            while (overlap === true && resizeIterations < 1000) {
              resizeIterations++;

              const loVolume =
                lowestOrange[widthAttr] * lowestOrange[heightAttr];
              const newHeight = Math.max(
                20,
                Math.round(loVolume / newTestWidth)
              );
              const newX = Math.round(
                side === 'before'
                  ? lowestOrange.offset
                  : lowestOrange.offset - newTestWidth - 2
              );
              const newY = Math.round(bitmapHeight - newYOffset - newHeight);
              const newWidth = Math.round(newTestWidth);

              if (DEBUG_CHART && ctx) {
                ctx.fillStyle = `rgba(192,0,128,0.1)`;
                ctx.fillRect(newX, newY, newWidth, newHeight);
                ctx.fillStyle = `rgba(0,0,0,1)`;
                ctx.fillText(lowestOrange.text, newX + 5, newY + 5);
              }

              overlap = false;

              if (newX + newWidth > width && side === 'after') {
                overlap = true;
              } else if (newX < 0) {
                overlap = true;
              } else {
                for (const [rowI] of Array(newHeight).fill(true).entries()) {
                  for (const [colI] of Array(newWidth).fill(true).entries()) {
                    if (
                      bitmap[newY + rowI - 1] !== undefined &&
                      bitmap[newY + rowI - 1][newX + colI] !== false &&
                      bitmap[newY + rowI - 1][newX + colI] !==
                        lowestOrange.index + 1
                    ) {
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
                if (
                  newTestWidth - ADJUST_PIXEL_STEP >
                  LABEL_MIN_WIDTH[orientation]
                ) {
                  newTestWidth -= ADJUST_PIXEL_STEP;
                } else {
                  newTestWidth = labelMaxWidth;
                  newYOffset += ADJUST_PIXEL_STEP;
                }
              }
            }

            const backwards = side === 'after';

            const domElement = getParentElement(
              dom.select(nodes[lowestOrange.index][0])
            );

            domElement.classed(`${cssLastClass}-${orientation}`, backwards);
            newYOffset = isHorizontal ? newYOffset : newYOffset + 10;
            domElement.style(padding, `${newYOffset}px`);

            // apply the new width to parent and text element
            const widthOffset = isHorizontal ? 5 : 0;
            domElement.style(widthAttr, `${newTestWidth + widthOffset}px`);
            dom
              .select(nodes[lowestOrange.index][0])
              .style(widthAttr, `${newTestWidth}px`);

            // shrink the width to fit the text
            const shrinkedWidth = getTextWidth(nodes[lowestOrange.index][0]);
            if (shrinkedWidth + widthOffset < newTestWidth) {
              domElement.style(widthAttr, `${shrinkedWidth + 10}px`);
              dom
                .select(nodes[lowestOrange.index][0])
                .style(widthAttr, `${shrinkedWidth + widthOffset}px`);
            }

            boundingsRects[lowestOrange.index].padding =
              lowestGreen[heightAttr] + lowestGreen.padding;
          }
        }

        if (DEBUG_CHART && ctx && bitmap) {
          const alpha = 0.3;
          ctx.fillStyle = `rgba(0,192,128,${alpha})`;
          bitmap.forEach((row, yIndex) => {
            row.forEach((pixel, xIndex) => {
              if (pixel) {
                if (
                  lowestOrange === undefined ||
                  pixel !== lowestOrange.index + 1
                ) {
                  ctx.fillStyle = `rgba(0,${50 + pixel * 10},128,${alpha})`;
                } else if (
                  typeof pixel !== 'boolean' &&
                  boundingsRects[pixel - 1][widthAttr] <
                    LABEL_MIN_WIDTH[orientation]
                ) {
                  ctx.fillStyle = `rgba(255,0,0,${alpha})`;
                } else {
                  ctx.fillStyle = `rgba(255,128,0,${alpha})`;
                }
                ctx.fillRect(xIndex, yIndex, 1, 1);
              }
            });
          });

          if (lowestGreen === undefined) {
            for (const rect of boundingsRects) {
              const alpha = 0.3 + (rect[heightAttr] / maxHeight) * 0.9;

              if (rect[widthAttr] >= LABEL_MIN_WIDTH[orientation]) {
                ctx.fillStyle = `rgba(0,192,128,${alpha})`;
              } else {
                ctx.fillStyle = `rgba(255,128,0,${alpha})`;
              }

              const fillRectX =
                rect.offset - (rect.backwards ? rect[widthAttr] : 0);
              const fillRectY =
                bitmapHeight -
                rect[heightAttr] -
                (rect.padding !== undefined ? rect.padding : 0);
              ctx.fillRect(
                fillRectX,
                fillRectY,
                rect[widthAttr],
                rect[heightAttr]
              );
              ctx.fillStyle = `rgba(0,0,0,1)`;
              ctx.fillText(rect.text, fillRectX + 5, fillRectY + 5);
            }
          }
        }

        // if all orange elements are resolved, do another overlap test.
        if (orangeCount === 0) {
          for (const rect of boundingsRects) {
            if (DEBUG_CHART && ctx) {
              ctx.clearRect(0, 0, bitmapWidth, bitmapHeight);
            }

            let overlap = true;
            let overlapRemovalIterations = 0;

            const rX = Math.round(
              rect.offset - (rect.backwards ? rect[widthAttr] : 0)
            );
            const rY = Math.round(
              bitmapHeight -
                rect[heightAttr] -
                (rect.padding !== undefined ? rect.padding : 0)
            );
            const rW = Math.round(rect[widthAttr]);
            const rH = Math.round(rect[heightAttr]);

            if (DEBUG_CHART && ctx) {
              const alpha = 0.3;
              bitmap.forEach((row, yIndex) => {
                row.forEach((pixel, xIndex) => {
                  if (pixel) {
                    ctx.fillStyle = `rgba(0,${50 + pixel * 10},128,${alpha})`;
                    ctx.fillRect(xIndex, yIndex, 1, 1);
                  }
                });
              });
            }
            // debugger;

            while (overlap === true && overlapRemovalIterations < 1000) {
              overlapRemovalIterations++;

              overlap = false;

              for (const [rowI] of Array(rH).fill(true).entries()) {
                for (const [colI] of Array(rW).fill(true).entries()) {
                  if (
                    bitmap[rY + rowI - 1] &&
                    bitmap[rY + rowI - 1][rX + colI] !== false &&
                    bitmap[rY + rowI - 1][rX + colI] !== rect.index + 1
                  ) {
                    overlap = true;
                    break;
                  }
                }
                if (overlap) {
                  break;
                }
              }

              if (!overlap) {
                const columnHeight = Math.floor(
                  rect.padding !== undefined ? rect.padding : 0
                );
                for (const [rowI] of Array(columnHeight).fill(true).entries()) {
                  if (bitmap[rY + rH + rowI - 1]) {
                    if (
                      !rect.backwards &&
                      bitmap[rY + rH + rowI - 1][rX] !== false &&
                      bitmap[rY + rH + rowI - 1][rX] !== rect.index + 1
                    ) {
                      overlap = true;
                      break;
                    } else if (
                      rect.backwards &&
                      bitmap[rY + rH + rowI - 1][rX + rW - 1] !== false &&
                      bitmap[rY + rH + rowI - 1][rX + rW - 1] !== rect.index + 1
                    ) {
                      overlap = true;
                      break;
                    }
                  }
                }
              }

              if (overlap) {
                overlap = false;
                orangeCount++;
                const domElement = getParentElement(
                  dom.select(nodes[rect.index][0])
                );

                domElement.classed(`${cssLastClass}-${orientation}`, false);
                // domElement.style(padding, `0px`);

                // apply the new width to parent and text element
                const widthOffset = isHorizontal ? 5 : 0;
                domElement.style(
                  widthAttr,
                  `${LABEL_MIN_WIDTH[orientation] - 10 + widthOffset}px`
                );
                dom
                  .select(nodes[rect.index][0])
                  .style(widthAttr, `${LABEL_MIN_WIDTH[orientation] - 10}px`);

                boundingsRects[rect.index].padding = 0;
              }
            }
          }
        }
      }
    };

    optimizeLayout(aboveNodes, true);
    optimizeLayout(belowNodes, false);
  }

  if (DEBUG_TIME) {
    console.timeEnd('optimize');
  }
};
