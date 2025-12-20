export function isAbove(i, distribution, data) {
  // Support function-based distribution
  if (typeof distribution === 'function') {
    return distribution(data, i);
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
