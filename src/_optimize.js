import * as dom from 'd3-selection';
import { nest } from 'd3-collection';

import { cssLastClass } from './_css';
import { getAttribute } from './_get_attribute';
import { getAvailableWidth } from './_get_available_width';
import { getNextGroupHeight } from './_get_next_group_height';
import { isAbove } from './_is_above';

const getIntValueFromPxAttribute = (domElement, attribute) => {
  return parseInt(domElement.style(attribute).replace('px', ''), 10);
};

const getParentElement = (domElement) =>
  domElement.select(function () {
    return this.parentNode;
  });

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
    let updated = false;

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

        const backwards = getParentElement(domElement).classed(cssLastClass);

        const offsetAttribute =
          orientation === 'horizontal' ? 'offsetHeight' : 'offsetWidth';

        const paddingAbove =
          orientation === 'horizontal' ? 'padding-bottom' : 'padding-right';

        const paddingBelow =
          orientation === 'horizontal' ? 'padding-top' : 'padding-left';

        const padding = isAbove(index, distribution)
          ? paddingAbove
          : paddingBelow;

        const overflow = backwards
          ? offset - offsetCheck < 0
          : offset + offsetCheck > width;

        if (
          currentNode[scrollCheckAttribute] > offsetCheck ||
          offsetCheck < offsetComparator ||
          backwards ||
          overflow
        ) {
          let availableWidth = 0;
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

              const existingGroupHeight = getIntValueFromPxAttribute(
                domElement,
                padding
              );
              if (
                existingGroupHeight != groupHeight &&
                nextGroupHeight !== undefined
              ) {
                updated = true;
                domElement.style(padding, groupHeight + 'px');
              }

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
            runs < 10
          );

          if (orientation === 'horizontal') {
            availableWidth = Math.min(labelMaxWidth, availableWidth);
          }

          domElement.style(widthAttribute, availableWidth + 'px');

          // After the first optimizer run,
          // reduce overlaps caused by left/right positioning
          if (optimizerRuns > 0 && backwards && orientation === 'horizontal') {
            const itemWidth = getIntValueFromPxAttribute(domElement, 'width');
            const leftOffset = offset - itemWidth;

            nodes.forEach((overlapCheckNode, overlapCheckIndex) => {
              const itemRowCheck = index % nextCheck;
              const distributionCheck =
                (overlapCheckIndex + itemRowCheck) % nextCheck;

              const overlapCheckItem = dom
                .selectAll(overlapCheckNode)
                .data()[0];

              if (
                overlapCheckItem.key === item.key ||
                distributionCheck !== 0
              ) {
                return;
              }

              let overlapCheckOffset = x(
                aggregateFormatParse(overlapCheckItem.key)
              );
              const overlapItemOffsetAnchor = overlapCheckOffset;
              const overlapCheckDomElement = dom.selectAll(
                nodes[overlapCheckIndex]
              );
              const overlapCheckBackwards = getParentElement(
                overlapCheckDomElement
              ).classed(cssLastClass);

              if (!overlapCheckBackwards) {
                const overlapCheckItemWidth = getIntValueFromPxAttribute(
                  overlapCheckDomElement,
                  'width'
                );
                overlapCheckOffset =
                  overlapCheckOffset + overlapCheckItemWidth + 5;
              }

              if (
                overlapCheckOffset > leftOffset &&
                overlapItemOffsetAnchor < offset
              ) {
                const overlapCheckHeight = overlapCheckNode[0][offsetAttribute];
                const itemPadding = getIntValueFromPxAttribute(
                  domElement,
                  padding
                );

                if (itemPadding < overlapCheckHeight) {
                  // offsetComparator
                  // find out if there's enough place to get rid of overlap
                  // by adjusted the items width
                  const checkWidth = overlapCheckOffset - leftOffset;
                  const currentWidth = getIntValueFromPxAttribute(
                    domElement,
                    widthAttribute
                  );
                  const reducedWidth = currentWidth - checkWidth;

                  if (reducedWidth > offsetComparator) {
                    availableWidth = Math.min(availableWidth, reducedWidth);
                    domElement.style(widthAttribute, availableWidth + 'px');
                    domElement.style(padding, 0 + 'px');
                  } else {
                    domElement.style(padding, overlapCheckHeight + 'px');
                  }
                  updated = true;
                }
              }
            });
          }
        }

        if (optimizerRuns > 0 && !backwards && orientation === 'horizontal') {
          const itemWidth = getIntValueFromPxAttribute(domElement, 'width');
          const rightOffset = offset + itemWidth;
          nodes.forEach((overlapCheckNode, overlapCheckIndex) => {
            const itemRowCheck = index % nextCheck;
            const distributionCheck =
              (overlapCheckIndex + itemRowCheck) % nextCheck;

            const overlapCheckItem = dom.selectAll(overlapCheckNode).data()[0];

            if (overlapCheckItem.key === item.key || distributionCheck !== 0) {
              return;
            }

            let overlapCheckOffset = x(
              aggregateFormatParse(overlapCheckItem.key)
            );
            const overlapItemOffsetAnchor = overlapCheckOffset;
            const overlapCheckDomElement = dom.selectAll(
              nodes[overlapCheckIndex]
            );
            const overlapCheckBackwards = getParentElement(
              overlapCheckDomElement
            ).classed(cssLastClass);

            if (overlapCheckBackwards) {
              const overlapCheckItemWidth = getIntValueFromPxAttribute(
                overlapCheckDomElement,
                'width'
              );
              overlapCheckOffset =
                overlapCheckOffset - overlapCheckItemWidth - 5;
            }

            if (
              rightOffset > overlapItemOffsetAnchor &&
              overlapItemOffsetAnchor > offset
            ) {
              const overlapCheckHeight = overlapCheckNode[0][offsetAttribute];
              const itemPadding = getIntValueFromPxAttribute(
                domElement,
                padding
              );

              if (itemPadding < overlapCheckHeight) {
                // offsetComparator
                // find out if there's enough place to get rid of overlap
                // by adjusted the items width
                const checkWidth = rightOffset - overlapItemOffsetAnchor + 10;
                const currentWidth = getIntValueFromPxAttribute(
                  domElement,
                  widthAttribute
                );
                const reducedWidth = currentWidth - checkWidth;

                if (reducedWidth > offsetComparator) {
                  domElement.style(widthAttribute, reducedWidth + 'px');
                } else {
                  getParentElement(domElement).classed(cssLastClass, true);
                }
                updated = true;
              }
            }
          });
        }
      });
    });

    return updated;
  };

  let optimizerRuns = 0;
  let updated = false;

  do {
    updated = runOptimizer(optimizerRuns);
    optimizerRuns++;
  } while (optimizerRuns < 20 && updated);
};
