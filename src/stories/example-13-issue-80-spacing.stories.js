import { argTypes, createMilestones } from './milestones';
import data from './assets/issue-80.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) =>
  createMilestones(
    'Issue #80 - Spacing with Multiple Items',
    'Year 1991 has 10 items in Windows timeline but only 1 in Mac timeline. The spacing between timelines should not be affected by the number of items.',
    args
  );

export const Issue80Spacing = Template.bind({});
Issue80Spacing.args = {
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
