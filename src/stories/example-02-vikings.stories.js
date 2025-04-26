import { argTypes, createMilestones } from './milestones';
import data from './assets/vikings.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) =>
  createMilestones('The Viking Timeline', undefined, args);

export const Vikings = Template.bind({});
Vikings.args = {
  aggregateBy: 'year',
  optimize: true,
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'title',
    id: 'id',
  },
  data,
};
