import { isAbove } from './_is_above';

describe('isAbove', () => {
  it('should return if the item is above or below', () => {
    expect(isAbove(0)).toBe(false);
    expect(isAbove(1)).toBe(true);
    expect(isAbove(2)).toBe(false);

    expect(isAbove(0, 'top')).toBe(true);
    expect(isAbove(1, 'top')).toBe(true);
    expect(isAbove(2, 'top')).toBe(true);

    expect(isAbove(0, 'bottom')).toBe(false);
    expect(isAbove(1, 'bottom')).toBe(false);
    expect(isAbove(2, 'bottom')).toBe(false);
  });
});
