import { timeFormat as d3TimeFormat } from 'd3-time-format';

import { aggregateFormats } from './_aggregate_formats';

export function timeFormat(f) {
  if (f === '%Y-Q%Q') {
    const quarterFormatter = d3TimeFormat(aggregateFormats.month);
    return (d) => {
      const formattedDate = quarterFormatter(d);
      const month = formattedDate.split('-')[1];
      const quarter = Math.ceil(parseInt(month) / 3);
      return formattedDate.split('-')[0] + '-Q' + quarter;
    };
  }
  return d3TimeFormat(f);
}
