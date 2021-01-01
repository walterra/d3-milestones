import { ascending } from 'd3-array';
import { nest } from 'd3-collection';

export function transform(aggregateFormat, data, mapping, parseTime) {
  const groupBy = function (d) {
    return aggregateFormat(parseTime(d[mapping.timestamp]));
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
      return d;
    });
  }

  return data.map((t, tI) => getNestedEntries(t, tI));
}
