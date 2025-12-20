export function isAbove(i, distribution, data) {
  // Support function-based distribution (advanced use case)
  if (typeof distribution === 'function') {
    return distribution(data, i);
  }

  // Support object-based distribution (declarative configuration)
  if (typeof distribution === 'object' && distribution !== null) {
    const field = distribution.field;
    const topValues = Array.isArray(distribution.top)
      ? distribution.top
      : [distribution.top];
    const bottomValues = Array.isArray(distribution.bottom)
      ? distribution.bottom
      : [distribution.bottom];

    // Check if any value in the group matches the top values
    if (data && data.values && data.values.length > 0) {
      const hasTopValue = data.values.some((item) =>
        topValues.includes(item[field])
      );
      if (hasTopValue) {
        return true;
      }

      const hasBottomValue = data.values.some((item) =>
        bottomValues.includes(item[field])
      );
      if (hasBottomValue) {
        return false;
      }
    }

    // Fallback to alternating if no match
    return i % 2 > 0;
  }

  // Support string-based distribution (backward compatible)
  let above = i % 2;
  if (distribution === 'top') {
    above = true;
  } else if (distribution === 'bottom') {
    above = false;
  }
  return above > 0;
}
