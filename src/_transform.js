import { ascending } from 'd3-array';
import { nest } from 'd3-collection';

export function transform(
  aggregateFormat,
  data,
  mapping,
  parseTime,
  scaleType = 'time'
) {
  // Choose grouping function based on scale type
  const groupBy = function (d) {
    if (scaleType === 'ordinal') {
      // For ordinal scales, use the value field directly
      return d[mapping.value];
    } else {
      // For time scales, use the timestamp with formatting
      return aggregateFormat(parseTime(d[mapping.timestamp]));
    }
  };

  // test for different data structures
  if (
    typeof mapping.category !== 'undefined' &&
    typeof mapping.entries !== 'undefined'
  ) {
    data = data.map((timeline, timelineIndex) => {
      return {
        category: timeline[mapping.category],
        entries: getNestedEntries(timeline[mapping.entries], timelineIndex),
      };
    });
    return data;
  } else if (typeof data !== 'undefined' && !Array.isArray(data[0])) {
    data = [data];
  }

  function getNestedEntries(t, tI) {
    const nested = nest().key(groupBy).sortKeys(ascending).entries(t);
    return nested.map((d, dI) => {
      d.index = dI;
      d.timelineIndex = tI;
      d.scaleType = scaleType; // Pass the scale type to the data object
      return d;
    });
  }

  return data.map((t, tI) => getNestedEntries(t, tI));
}
