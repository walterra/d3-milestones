import { createMilestones } from './milestones';
import { data as dataVikings } from './data-vikings';

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

export const Vikings = Template.bind({});
Vikings.args = {
  aggregateBy: 'year',
  optimize: true,
  distribution: 'top-bottom',
  orientation: 'horizontal',
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'title',
  },
  data: dataVikings,
};
