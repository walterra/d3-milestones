const getNextGroup = (orientation, nodes, index, nextCheck) => {
  const nextGroup =
    orientation === 'horizontal'
      ? nodes[index + nextCheck]
      : nodes[index - nextCheck];

  return nextGroup;
};

export const getNextGroupHeight = (
  index,
  nextCheck,
  nodes,
  offsetAttribute,
  orientation
) => {
  // get the height of the next group
  const defaultPadding = 3;

  const nextGroup = getNextGroup(orientation, nodes, index, nextCheck);

  let nextGroupHeight;

  if (typeof nextGroup !== 'undefined') {
    nextGroupHeight = nextGroup[0][offsetAttribute] + defaultPadding;
  }

  return nextGroupHeight;
};
