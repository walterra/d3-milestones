import { createMilestones } from './milestones';
import { data as milestonesData } from './data-milestones';

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
      options: [
        'second',
        'minute',
        'hour',
        'day',
        'week',
        'month',
        'quarter',
        'year',
      ],
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

export const MilestonesReleases = Template.bind({});
MilestonesReleases.args = {
  optimize: true,
  aggregateBy: 'day',
  distribution: 'top-bottom',
  orientation: 'horizontal',
  parseTime: '%Y-%m-%dT%H:%M',
  mapping: {
    timestamp: 'timestamp',
    text: 'detail',
    url: 'giturl',
  },
  data: milestonesData,
};
