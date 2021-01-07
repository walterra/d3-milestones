import { getAttribute } from './_get_attribute';

describe('getAttribute', () => {
  it('should get the integer value', () => {
    const mockElement = {
      style: {
        width: '10px',
      },
    };

    expect(getAttribute(mockElement, 'width')).toBe(10);
  });
});
