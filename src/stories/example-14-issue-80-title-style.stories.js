import { argTypes, createMilestones } from './milestones';
import data from './assets/issue-80-title-style.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) =>
  createMilestones(
    'Issue #80 - Individual Item titleStyle Support',
    'Each item can have its own titleStyle (color, font-weight, font-size, etc.) applied to the timestamp labels',
    args
  );

export const Issue80TitleStyle = Template.bind({});
Issue80TitleStyle.args = {
  optimize: true,
  aggregateBy: 'year',
  parseTime: '%Y',
  mapping: {
    category: 'system',
    entries: 'versions',
    timestamp: 'year',
    text: 'title',
    titleStyle: 'titleStyle',
  },
  data,
};
