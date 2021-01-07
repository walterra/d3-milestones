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

const isSameDistribution = (index, nextCheck, overlapCheckIndex) => {
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
  x
) => {
  const nestedNodes = nest()
    .key((d) => {
      return dom.selectAll(d).data()[0].timelineIndex;
    })
    .entries(textMerge._groups);

  const nextCheck = distribution === 'top-bottom' ? 2 : 1;

  const runOptimizer = (optimizerRuns) => {
    let updated = 0;

    nestedNodes.forEach((d) => {
      const nodes = d.values;
      nodes.forEach((node) => {
        const d = dom.selectAll(node).data()[0];

        const index =
          orientation === 'horizontal' ? nodes.length - d.index - 1 : d.index;

        const item = dom.selectAll(nodes[index]).data()[0];
        const offset = x(aggregateFormatParse(item.key));
        const currentNode = nodes[index][0];

        const scrollCheckAttribute =
          orientation === 'horizontal' ? 'offsetWidth' : 'offsetHeight';

        const offsetCheckAttribute =
          orientation === 'horizontal' ? 'width' : 'height';

        const offsetComparator = orientation === 'horizontal' ? 60 : 20;

        const offsetCheck = getAttribute(currentNode, offsetCheckAttribute);

        const domElement = dom.selectAll(nodes[index]);

        let backwards = getParentElement(domElement).classed(cssLastClass);

        const offsetAttribute =
          orientation === 'horizontal' ? 'offsetHeight' : 'offsetWidth';

        const paddingAbove =
          orientation === 'horizontal' ? 'padding-bottom' : 'padding-right';

        const paddingBelow =
          orientation === 'horizontal' ? 'padding-top' : 'padding-left';

        const padding = isAbove(index, distribution)
          ? paddingAbove
          : paddingBelow;

        // Because on a resize a previous optimization could already have
        // repositioned items, we reset them on the first optimizer run
        if (optimizerRuns === 0) {
          backwards = false;
          domElement.style(padding, '0px');
          getParentElement(domElement).classed(cssLastClass, backwards);
        }

        const overflow = backwards
          ? offset - offsetCheck < 0
          : offset + offsetCheck > width;

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
              const nextGroupHeight = getNextGroupHeight(
                index,
                nextCheck,
                nodes,
                offsetAttribute,
                orientation
              );

              const previousGroupHeight =
                orientation === 'horizontal'
                  ? getNextGroupHeight(
                      index,
                      nextCheck * -1,
                      nodes,
                      offsetAttribute,
                      orientation
                    )
                  : nextGroupHeight;

              let useNext =
                nextGroupHeight <= previousGroupHeight &&
                nextGroupHeight !== undefined;

              if (!useNext) {
                useNext = offset < offsetComparator;
              }

              const groupHeight = useNext
                ? nextGroupHeight
                : previousGroupHeight;
              const check = useNext ? nextCheck : nextCheck * -1;

              domElement.style(padding, groupHeight + 'px');

              getParentElement(domElement).classed(cssLastClass, !useNext);

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
                useNext
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

            let minPadding = Number.POSITIVE_INFINITY;

            nodes.forEach((overlapCheckNode, overlapCheckIndex) => {
              const overlapCheckItem = dom
                .selectAll(overlapCheckNode)
                .data()[0];

              if (
                overlapCheckItem.key === item.key ||
                isSameDistribution(index, nextCheck, overlapCheckIndex)
              ) {
                return;
              }

              let overlapCheckOffset =
                x(aggregateFormatParse(overlapCheckItem.key)) - 5;
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
            if (minPadding > 0) {
              nodes.forEach((overlapCheckNode, overlapCheckIndex) => {
                const itemRowCheck = index % nextCheck;
                const distributionCheck =
                  (overlapCheckIndex + itemRowCheck) % nextCheck;

                if (distributionCheck !== 0) {
                  return;
                }

                const overlapCheckDomElement = dom.selectAll(
                  nodes[overlapCheckIndex]
                );
                const itemPadding = getIntValueFromPxAttribute(
                  overlapCheckDomElement,
                  padding
                );
                overlapCheckDomElement.style(
                  padding,
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
