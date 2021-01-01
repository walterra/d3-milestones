export function getAttribute(d, attribute) {
  return parseInt(d.style[attribute].replace('px', ''), 10);
}
