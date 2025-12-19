import { argTypes, createMilestones } from './milestones';
import data from './assets/issue-80.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) =>
  createMilestones(
    'Issue #80 - Spacing Fix and Category Styling',
    'Year 1991 has 10 items in Windows timeline. The spacing between timelines is now correct (not affected by item count). Categories (Windows/Mac) have individual styling with categoryStyle.',
    args
  );

export const Issue80 = Template.bind({});
Issue80.args = {
  optimize: true,
  aggregateBy: 'year',
  parseTime: '%Y',
  mapping: {
    category: 'system',
    entries: 'versions',
    timestamp: 'year',
    text: 'title',
    titleStyle: 'titleStyle',
    categoryStyle: 'categoryStyle',
  },
  data,
};
