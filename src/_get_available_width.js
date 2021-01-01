import { getAttribute } from './_get_attribute';

const labelRightMargin = 6;

export const getAvailableWidth = (
  aggregateFormatParse,
  currentNode,
  domElement,
  index, mapping,
  nestedData,
  nestedNode,
  nextCheck,
  nodes,
  offset,
  offsetCheckAttribute,
  offsetAttribute,
  orientation,
  padding,
  textMerge,
  width,
  x
) => {
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
    uberNextItem = nestedData[nestedNode.timelineIndex][nextTestIndex];
  } else {
    uberNextItem = nestedData[nestedNode.timelineIndex].entries[nextTestIndex];
  }

  let availableWidth = getAttribute(currentNode, offsetCheckAttribute);

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
