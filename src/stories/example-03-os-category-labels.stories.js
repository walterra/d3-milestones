import { argTypes, createMilestones } from './milestones';
import data from './assets/os-category-labels.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) =>
  createMilestones('Windows / Mac OS Timelines with Labels', undefined, args);

export const OsCategoryLabels = Template.bind({});
OsCategoryLabels.args = {
  optimize: true,
  aggregateBy: 'year',
  parseTime: '%Y',
  mapping: {
    category: 'system',
    entries: 'versions',
    timestamp: 'year',
    text: 'title',
  },
  data,
};
