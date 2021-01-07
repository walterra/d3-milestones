import { getNextGroupHeight } from './_get_next_group_height';

describe('getNextGroupHeight', () => {
  it('should get the next group height', () => {
    const nodes = [[{ offsetHeight: 0 }], [{ offsetHeight: 100 }]];

    const nextGroupHeight = getNextGroupHeight(
      0,
      1,
      nodes,
      'offsetHeight',
      'horizontal'
    );

    expect(nextGroupHeight).toBe(103);
  });
});
