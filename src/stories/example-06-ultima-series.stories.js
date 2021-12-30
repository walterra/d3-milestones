import { argTypes, createMilestones } from './milestones';
// from https://www.mobygames.com/game-group/ultima-series/offset,0/so,1d/
import data from './assets/ultima-series.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) => createMilestones('Ultima series', undefined, args);

export const UltimaSeries = Template.bind({});
UltimaSeries.args = {
  aggregateBy: 'year',
  optimize: true,
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'title',
  },
  data,
};
