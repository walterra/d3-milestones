import { getAttribute } from './_get_attribute';

const labelRightMargin = 6;

export const getAvailableWidth = (
  aggregateFormatParse,
  currentNode,
  index,
  mapping,
  nestedData,
  nestedNode,
  nextCheck,
  nextGroupHeight,
  offset,
  offsetCheckAttribute,
  offsetAttribute,
  orientation,
  textMerge,
  width,
  x,
  useNext = true
) => {
  // get the available width until the uber-next group
  let nextTestIndex =
    orientation === 'horizontal' && useNext
      ? index + nextCheck
      : index - nextCheck;

  let nextTestItem;

  do {
    if (orientation === 'horizontal' && useNext) {
      nextTestIndex += nextCheck;
    } else {
      nextTestIndex -= nextCheck;
    }
    nextTestItem = textMerge._groups[nextTestIndex];
    if (typeof nextTestItem === 'undefined') {
      break;
    }
  } while (nextGroupHeight >= nextTestItem[0][offsetAttribute]);

  let uberNextItem;

  if (typeof mapping.category === 'undefined') {
    uberNextItem = nestedData[nestedNode.timelineIndex][nextTestIndex];
  } else {
    uberNextItem = nestedData[nestedNode.timelineIndex].entries[nextTestIndex];
  }

  let availableWidth = getAttribute(currentNode, offsetCheckAttribute);

  if (typeof uberNextItem !== 'undefined') {
    const offsetUberNextItem = x(aggregateFormatParse(uberNextItem.key));

    if ((orientation === 'horizontal') & useNext) {
      availableWidth = offsetUberNextItem - offset - labelRightMargin;
    } else if ((orientation === 'horizontal') & !useNext) {
      availableWidth = offsetUberNextItem - labelRightMargin;
    } else {
      availableWidth = offset - offsetUberNextItem - labelRightMargin;
    }
  } else {
    if ((orientation === 'horizontal') & useNext) {
      availableWidth = width - offset - labelRightMargin;
    } else if ((orientation === 'horizontal') & !useNext) {
      availableWidth = offset - labelRightMargin;
    } else {
      availableWidth = offset - labelRightMargin;
    }
  }

  if (nextCheck < 0) {
    return Math.min(offset, availableWidth);
  } else {
    return availableWidth;
  }
};
