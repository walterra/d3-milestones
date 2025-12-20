import * as dom from 'd3-selection';
import { nest } from 'd3-collection';

import { cssLastClass } from './_css';
import { getAttribute } from './_get_attribute';
import { getAvailableWidth } from './_get_available_width';
import { getNextGroupHeight } from './_get_next_group_height';
import { isAbove } from './_is_above';

const MAX_OPTIMIZER_RUNS = 20;

const getIntValueFromPxAttribute = (domElement, attribute) => {
  return parseInt(domElement.style(attribute).replace('px', ''), 10);
};

const getParentElement = (domElement) =>
  domElement.select(function () {
    return this.parentNode;
  });

const isSameDistribution = (
  index,
  nextCheck,
  overlapCheckIndex,
  distribution,
  item,
  overlapCheckItem
) => {
  // For custom distribution (object or function), check actual side
  if (
    (typeof distribution === 'object' && distribution !== null) ||
    typeof distribution === 'function'
  ) {
    const itemAbove = isAbove(index, distribution, item);
    const overlapAbove = isAbove(
      overlapCheckIndex,
      distribution,
      overlapCheckItem
    );
    // Return true if they are on DIFFERENT sides (skip overlap check for different sides)
    return itemAbove !== overlapAbove;
  }

  // For string-based distribution, use modulo logic
  const itemRowCheck = index % nextCheck;
  const distributionCheck = (overlapCheckIndex + itemRowCheck) % nextCheck;

  return distributionCheck !== 0;
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
  widthAttribute,
  x,
  scaleType = 'time' // Default to time scale if not provided
) => {
  const nestedNodes = nest()
    .key((d) => {
      return dom.selectAll(d).data()[0].timelineIndex;
    })
    .entries(textMerge._groups);

  // Detect custom distribution
  const isCustomDistribution =
    (typeof distribution === 'object' && distribution !== null) ||
    typeof distribution === 'function';

  const nextCheck = distribution === 'top-bottom' ? 2 : 1;

  const runOptimizer = (optimizerRuns) => {
    let updated = 0;

    nestedNodes.forEach((d) => {
      const nodes = d.values;

      // For custom distributions, process nodes in order (handles split groups)
      // For standard distributions, use reverse index calculation
      const processOrder = [];
      if (isCustomDistribution) {
        // Process in array order, but reverse for horizontal orientation
        for (let i = 0; i < nodes.length; i++) {
          processOrder.push(i);
        }
        if (orientation === 'horizontal') {
          processOrder.reverse();
        }
      } else {
        // Original logic: calculate reverse index
        for (let i = 0; i < nodes.length; i++) {
          const d = dom.selectAll(nodes[i]).data()[0];
          const index =
            orientation === 'horizontal' ? nodes.length - d.index - 1 : d.index;
          processOrder.push(index);
        }
      }

      processOrder.forEach((nodeIndex) => {
        const node = nodes[nodeIndex];
        const d = dom.selectAll(node).data()[0];

        const offsetComparator = orientation === 'horizontal' ? 60 : 20;

        const index = nodeIndex; // Use actual array index
        const item = d;
        const value =
          scaleType === 'ordinal' ? item.key : aggregateFormatParse(item.key);
        const offset = x(value);
        const currentNode = node[0];

        let isLast = index === nodes.length - 1;
        if (!isLast && distribution === 'top-bottom') {
          isLast = index === nodes.length - 2 && width - offset < 60;
        }

        const scrollCheckAttribute =
          orientation === 'horizontal' ? 'offsetWidth' : 'offsetHeight';

        const offsetCheckAttribute =
          orientation === 'horizontal' ? 'width' : 'height';

        const offsetCheck = getAttribute(currentNode, offsetCheckAttribute);

        const domElement = dom.selectAll(nodes[index]);

        let backwards = isLast
          ? true
          : getParentElement(domElement).classed(cssLastClass);

        const offsetAttribute =
          orientation === 'horizontal' ? 'offsetHeight' : 'offsetWidth';

        const paddingAbove =
          orientation === 'horizontal' ? 'padding-bottom' : 'padding-right';

        const paddingBelow =
          orientation === 'horizontal' ? 'padding-top' : 'padding-left';

        // Determine which side this item is on
        const itemIsAbove = isAbove(d.index, distribution, item);
        const padding = itemIsAbove ? paddingAbove : paddingBelow;

        const overflow = backwards
          ? offset - offsetCheck < 0
          : offset + offsetCheck > width;

        // Because on a resize a previous optimization could already have
        // repositioned items, we reset them on the first optimizer run
        if (optimizerRuns === 0) {
          backwards = isLast ? true : overflow;
          domElement.style(padding, '0px');
          getParentElement(domElement).classed(cssLastClass, backwards);
        }

        if (
          currentNode[scrollCheckAttribute] > offsetCheck ||
          offsetCheck < offsetComparator ||
          backwards ||
          overflow
        ) {
          let availableWidth = null;
          let runs = 0;
          let nextCheckIterator =
            orientation === 'horizontal' ? nextCheck - 1 : nextCheck + 1;

          do {
            if (orientation === 'horizontal') {
              nextCheckIterator++;
            } else {
              nextCheckIterator--;
            }

            runs++;

            if (nextCheckIterator > 0) {
              let nextGroupHeight, previousGroupHeight, useNext, groupHeight;
              let check = 0; // Default check value

              if (isCustomDistribution) {
                // For custom distributions, find next/prev on SAME side
                let nextOnSameSide = null;
                let prevOnSameSide = null;
                let nextDistance = 0;
                let prevDistance = 0;

                for (let i = index + 1; i < nodes.length; i++) {
                  const checkItem = dom.selectAll(nodes[i]).data()[0];
                  if (
                    isAbove(checkItem.index, distribution, checkItem) ===
                    itemIsAbove
                  ) {
                    nextOnSameSide = nodes[i];
                    nextDistance = i - index;
                    break;
                  }
                }

                for (let i = index - 1; i >= 0; i--) {
                  const checkItem = dom.selectAll(nodes[i]).data()[0];
                  if (
                    isAbove(checkItem.index, distribution, checkItem) ===
                    itemIsAbove
                  ) {
                    prevOnSameSide = nodes[i];
                    prevDistance = index - i;
                    break;
                  }
                }

                const defaultPadding = 3;
                nextGroupHeight = nextOnSameSide
                  ? nextOnSameSide[0][offsetAttribute] + defaultPadding
                  : 0;
                previousGroupHeight = prevOnSameSide
                  ? prevOnSameSide[0][offsetAttribute] + defaultPadding
                  : 0;

                useNext = nextGroupHeight <= previousGroupHeight && !isLast;
                if (!useNext && !isLast) {
                  useNext = offset < offsetComparator;
                }

                groupHeight = useNext ? nextGroupHeight : previousGroupHeight;
                if (isLast) {
                  groupHeight = 0;
                }
                check = useNext ? nextDistance : -prevDistance;

                domElement.style(padding, groupHeight + 'px');
                getParentElement(domElement).classed(cssLastClass, !useNext);
              } else {
                // Original logic for standard distributions
                nextGroupHeight = getNextGroupHeight(
                  index,
                  nextCheck,
                  nodes,
                  offsetAttribute,
                  orientation
                );

                previousGroupHeight =
                  orientation === 'horizontal'
                    ? getNextGroupHeight(
                        index,
                        nextCheck * -1,
                        nodes,
                        offsetAttribute,
                        orientation
                      )
                    : nextGroupHeight;

                useNext = nextGroupHeight <= previousGroupHeight && !isLast;

                if (!useNext && !isLast) {
                  useNext = offset < offsetComparator;
                }

                groupHeight = useNext ? nextGroupHeight : previousGroupHeight;
                if (isLast) {
                  groupHeight = 0;
                }
                check = useNext ? nextCheck : nextCheck * -1;

                domElement.style(padding, groupHeight + 'px');

                getParentElement(domElement).classed(cssLastClass, !useNext);
              }

              availableWidth = getAvailableWidth(
                aggregateFormatParse,
                currentNode,
                index,
                mapping,
                nestedData,
                d,
                check,
                groupHeight,
                offset,
                offsetCheckAttribute,
                offsetAttribute,
                orientation,
                textMerge,
                width,
                x,
                useNext,
                scaleType // Pass scale type to getAvailableWidth
              );
            }
          } while (
            availableWidth < currentNode[scrollCheckAttribute] &&
            runs < MAX_OPTIMIZER_RUNS
          );

          if (orientation === 'horizontal') {
            availableWidth = Math.min(labelMaxWidth, availableWidth);
          }

          // because labels could be left or right aligned,
          // we shrink the available width to the inner text width
          // so labels facing each other will require less space.
          domElement.style(widthAttribute, availableWidth + 'px');
          const innerWidth = getIntValueFromPxAttribute(
            domElement.select('.wrapper'),
            'width'
          );
          if (innerWidth < availableWidth) {
            availableWidth = innerWidth + 6;
            domElement.style(widthAttribute, availableWidth + 'px');
          }

          if (optimizerRuns > 0 && orientation === 'horizontal') {
            const itemWidth = getIntValueFromPxAttribute(domElement, 'width');
            const checkOffset = backwards
              ? offset - itemWidth
              : offset + itemWidth;

            nodes.forEach((overlapCheckNode, overlapCheckIndex) => {
              const overlapCheckItem = dom
                .selectAll(overlapCheckNode)
                .data()[0];

              // Skip if same item
              if (
                overlapCheckItem.key === item.key &&
                overlapCheckIndex === index
              ) {
                return;
              }

              // For custom distributions, only check overlap with items on SAME side
              if (isCustomDistribution) {
                const overlapIsAbove = isAbove(
                  overlapCheckItem.index,
                  distribution,
                  overlapCheckItem
                );
                if (overlapIsAbove !== itemIsAbove) {
                  return; // Different sides, no overlap possible
                }
              } else {
                // For standard distributions, use original logic
                if (
                  isSameDistribution(
                    index,
                    nextCheck,
                    overlapCheckIndex,
                    distribution,
                    item,
                    overlapCheckItem
                  )
                ) {
                  return;
                }
              }

              const overlapValue =
                scaleType === 'ordinal'
                  ? overlapCheckItem.key
                  : aggregateFormatParse(overlapCheckItem.key);
              let overlapCheckOffset = x(overlapValue) - 5;
              const overlapItemOffsetAnchor = overlapCheckOffset;
              const overlapCheckDomElement = dom.selectAll(
                nodes[overlapCheckIndex]
              );
              const overlapCheckBackwards = getParentElement(
                overlapCheckDomElement
              ).classed(cssLastClass);

              if (backwards && !overlapCheckBackwards) {
                const overlapCheckItemWidth = getIntValueFromPxAttribute(
                  overlapCheckDomElement,
                  'width'
                );
                overlapCheckOffset =
                  overlapCheckOffset + overlapCheckItemWidth + 5;
              }

              if (!backwards && overlapCheckBackwards) {
                const overlapCheckItemWidth = getIntValueFromPxAttribute(
                  overlapCheckDomElement,
                  'width'
                );
                overlapCheckOffset =
                  overlapCheckOffset - overlapCheckItemWidth - 5;
              }

              const overlapCheck1 = backwards
                ? overlapCheckOffset > checkOffset
                : checkOffset > overlapItemOffsetAnchor;

              const overlapCheck2 = backwards
                ? overlapItemOffsetAnchor < offset
                : overlapItemOffsetAnchor > offset;

              if (overlapCheck1 && overlapCheck2) {
                const overlapCheckHeight = overlapCheckNode[0][offsetAttribute];
                const itemPadding = getIntValueFromPxAttribute(
                  domElement,
                  padding
                );

                if (itemPadding < overlapCheckHeight) {
                  // offsetComparator
                  // find out if there's enough place to get rid of overlap
                  // by adjusted the items width
                  const checkWidth = backwards
                    ? overlapCheckOffset - checkOffset
                    : checkOffset - overlapItemOffsetAnchor;
                  const currentWidth = getIntValueFromPxAttribute(
                    domElement,
                    widthAttribute
                  );
                  const reducedWidth = currentWidth - checkWidth - 6;

                  if (reducedWidth > offsetComparator) {
                    availableWidth = Math.min(availableWidth, reducedWidth);
                    domElement.style(widthAttribute, `${availableWidth}px`);
                  } else {
                    domElement.style(padding, `${overlapCheckHeight + 5}px`);
                  }
                  updated++;
                }
              }
            });

            // The optimizer might push all labels too far up. If all labels
            // have a minimum padding of more than 0, we'll shrink all offsets
            // back so the label with the smallest padding ends up directly
            // at the timeline.

            let minPadding = Number.POSITIVE_INFINITY;
            nodes.forEach((overlapCheckNode, overlapCheckIndex) => {
              const overlapCheckItem = dom
                .selectAll(overlapCheckNode)
                .data()[0];

              // Check if this item is on the same side as current item
              const overlapCheckAbove = isAbove(
                overlapCheckItem.index,
                distribution,
                overlapCheckItem
              );

              if (overlapCheckAbove !== itemIsAbove) {
                return; // Different side, skip
              }

              const overlapCheckDomElement = dom.selectAll(
                nodes[overlapCheckIndex]
              );

              const checkPadding = overlapCheckAbove
                ? paddingAbove
                : paddingBelow;
              const itemPadding = getIntValueFromPxAttribute(
                overlapCheckDomElement,
                checkPadding
              );
              minPadding = Math.min(minPadding, itemPadding);
            });

            if (minPadding > 0) {
              nodes.forEach((overlapCheckNode, overlapCheckIndex) => {
                // Check if this node is on the same side (above/below) as the current item
                const overlapCheckItem = dom
                  .selectAll(overlapCheckNode)
                  .data()[0];
                const overlapCheckAbove = isAbove(
                  overlapCheckItem.index,
                  distribution,
                  overlapCheckItem
                );

                // Only adjust padding for items on the same side
                if (overlapCheckAbove !== itemIsAbove) {
                  return;
                }

                const overlapCheckDomElement = dom.selectAll(
                  nodes[overlapCheckIndex]
                );
                const checkPadding = overlapCheckAbove
                  ? paddingAbove
                  : paddingBelow;
                const itemPadding = getIntValueFromPxAttribute(
                  overlapCheckDomElement,
                  checkPadding
                );
                overlapCheckDomElement.style(
                  checkPadding,
                  `${itemPadding - minPadding}px`
                );
              });
            }
          }
        }
      });
    });

    return updated;
  };

  let optimizerRuns = 0;
  let updated = 0;

  do {
    updated = runOptimizer(optimizerRuns);
    optimizerRuns++;

    // make sure we run a second optimizer call
    if (optimizerRuns === 1) {
      updated = 1;
    }
  } while (optimizerRuns < MAX_OPTIMIZER_RUNS && updated > 0);
};
