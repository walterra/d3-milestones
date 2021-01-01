import { timeParse as d3TimeParse } from 'd3-time-format';

import { aggregateFormats } from './_aggregate_formats';

export function timeParse(f) {
  if (f === '%Y-Q%Q') {
    const quarterParser = d3TimeParse(aggregateFormats.month);
    return (d) => {
      if (d.search('-Q') === -1) {
        const quarter = Math.ceil(parseInt(d.split('-')[1]) / 3);
        const quarterFirstMonthAsString = quarter * 3 - 2 + '';
        const quarterFirstMonthLeadingZero =
          quarterFirstMonthAsString.length < 2
            ? '0' + quarterFirstMonthAsString
            : quarterFirstMonthAsString;
        return quarterParser(
          d.split('-')[0] + '-' + quarterFirstMonthLeadingZero
        );
      } else {
        const monthAsString = parseInt(d.split('-')[1][1]) * 3 + '';
        const monthLeadingZero =
          monthAsString.length < 2 ? '0' + monthAsString : monthAsString;
        return quarterParser(d.split('-')[0] + '-' + monthLeadingZero);
      }
    };
  }
  return d3TimeParse(f);
}
