import { createMilestones } from './milestones';
import { os as osData } from './data-os-category-labels';

export default {
  title: 'd3-milestones',
  argTypes: {
    optimize: {
      control: { type: 'boolean' },
    },
    distribution: {
      options: ['top-bottom', 'top', 'bottom'],
      control: { type: 'radio' },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    aggregateBy: {
      options: ['year'],
      control: { type: 'select' },
    },
    parseTime: {
      control: { type: 'text' },
    },
    mapping: {
      control: { type: 'object' },
    },
    data: {
      control: { type: 'object' },
    },
  },
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
