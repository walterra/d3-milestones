import { argTypes, createMilestones } from './milestones';
import { os as osData } from './data-os-category-labels';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) => createMilestones(args);

export const OsCategoryLabels = Template.bind({});
OsCategoryLabels.args = {
  optimize: true,
  aggregateBy: 'year',
  distribution: 'top-bottom',
  orientation: 'horizontal',
  parseTime: '%Y',
  mapping: {
    category: 'system',
    entries: 'versions',
    timestamp: 'year',
    text: 'title',
  },
  data: osData,
};
