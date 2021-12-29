import { argTypes, createMilestones } from './milestones';
import { os as osData } from './data-os-category-labels';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) =>
  createMilestones('Windows / Mac OS Timelines with Labels', undefined, args);

export const OsCategoryLabels = Template.bind({});
OsCategoryLabels.args = {
  optimize: true,
  autoResize: true,
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
