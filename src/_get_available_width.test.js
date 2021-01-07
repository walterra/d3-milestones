import * as scale from 'd3-scale';
import { extent } from 'd3-array';

import { aggregateFormats } from './_aggregate_formats';
import { getAvailableWidth } from './_get_available_width';
import { timeParse } from './_time_parse';

describe('getAvailableWidth', () => {
  it('should get the available width', () => {
    const mockElement = {
      style: {
        width: '10px',
      },
    };

    const mapping = {};

    const nestedNode = { timelineIndex: 0 };

    const currentItem = { key: '1990' };
    const nextItem = { key: '2000' };

    const nestedData = [[nextItem]];

    const textMerge = {
      _groups: [currentItem, nextItem],
    };

    let aggregateFormatParse = timeParse(aggregateFormats.year);

    const width = 200;

    const domain = extent(['1980', '1990', '2020'], (d) =>
      aggregateFormatParse(d)
    );

    const x = scale.scaleTime().rangeRound([0, width]).domain(domain);

    const availableWidth = getAvailableWidth(
      aggregateFormatParse,
      mockElement,
      10,
      mapping,
      nestedData,
      nestedNode,
      1,
      100,
      25,
      'width',
      'offsetHeight',
      'horizontal',
      textMerge,
      width,
      x
    );

    expect(availableWidth).toBe(169);
  });
});
