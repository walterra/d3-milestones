import { argTypes, createMilestones } from './milestones';
import data from './assets/issue-80.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) => createMilestones(
  'Issue #80 - Spacing with Multiple Items',
  'Years with multiple items (1991: Windows 3.1 + System 7, 2001: Windows XP + Mac OS X + iPod, 2007: Vista + iPhone) should not create extra spacing between the two timelines',
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
