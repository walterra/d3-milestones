import api from './_api';

describe('api', () => {
  it('should chain methods', () => {
    let value = 0;
    const increase = (add) => {
      value = value + add;
    };
    const square = () => {
      value = value * value;
    };

    const m = api({ increase, square });
    m.increase(1).increase(2).square();

    expect(value).toBe(9);
  });
});
