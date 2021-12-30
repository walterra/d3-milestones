import { argTypes, createMilestones } from './milestones';
import { data as dataVikings } from './data-vikings';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) =>
  createMilestones('The Viking Timeline', undefined, args);

export const Vikings = Template.bind({});
Vikings.args = {
  aggregateBy: 'year',
  optimize: true,
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'title',
  },
  data: dataVikings,
};
