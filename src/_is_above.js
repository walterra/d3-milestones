export function isAbove(i, distribution) {
  let above = i % 2;
  if (distribution === 'top') {
    above = true;
  } else if (distribution === 'bottom') {
    above = false;
  }
  return above > 0;
}
