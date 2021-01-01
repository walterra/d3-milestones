import { aggregateFormats } from './_aggregate_formats';

describe('aggregateFormats', () => {
  it('should match', () => {
    expect(Object.keys(aggregateFormats)).toStrictEqual([
      'second',
      'minute',
      'hour',
      'day',
      'week',
      'month',
      'quarter',
      'year',
    ]);
  });
});
