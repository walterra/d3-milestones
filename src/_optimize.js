import * as dom from 'd3-selection';
import { nest } from 'd3-collection';

import { getAttribute } from './_get_attribute';
import { getAvailableWidth } from './_get_available_width';
import { isAbove} from './_is_above';

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

      const offsetCheck = getAttribute(currentNode, offsetCheckAttribute);

      if (
        currentNode[scrollCheckAttribute] > offsetCheck ||
        offsetCheck < offsetComparator
      ) {
        optimizations++;

        const domElement = dom.selectAll(nodes[index]);
        const paddingAbove = orientation === 'horizontal' ? 'padding-bottom' : 'padding-right';
        const paddingBelow = orientation === 'horizontal' ? 'padding-top' : 'padding-left';
        const padding = isAbove(index, distribution) ? paddingAbove : paddingBelow;
        const offsetAttribute = orientation === 'horizontal' ? 'offsetHeight' : 'offsetWidth';

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
            availableWidth = getAvailableWidth(
              aggregateFormatParse,
              currentNode,
              domElement,
              index,
              mapping,
              nestedData,
              d,
              nextCheckIterator,
              nodes,
              offset,
              offsetCheckAttribute,
              offsetAttribute,
              orientation,
              padding,
              textMerge,
              width,
              x);
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
