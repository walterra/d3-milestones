import { argTypes, createMilestones } from './milestones';
import { data as postersDataString } from './data-posters';

var json = JSON.parse(postersDataString);
var transformedData = [];
json.responses[0].aggregations['2'].buckets.forEach(function (d) {
  var category = {
    genre: d.key,
    movies: [],
  };
  d['1'].buckets.forEach(function (d) {
    category.movies.push({
      year: d.key_as_string.split('-')[0],
      url: d['3'].buckets[0].key,
    });
    if (d['3'].buckets[1]) {
      category.movies.push({
        year: d.key_as_string.split('-')[0],
        url: d['3'].buckets[1].key,
      });
    }
  });

  transformedData.push(category);
});

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) =>
  createMilestones(
    'Multiple Movie Timelines with Image Labels',
    undefined,
    args
  );

export const MoviePosters = Template.bind({});
MoviePosters.args = {
  optimize: true,
  autoResize: true,
  aggregateBy: 'year',
  distribution: 'top-bottom',
  orientation: 'horizontal',
  parseTime: '%Y',
  mapping: {
    category: 'genre',
    entries: 'movies',
    timestamp: 'year',
    text: 'url',
  },
  data: transformedData,
};
