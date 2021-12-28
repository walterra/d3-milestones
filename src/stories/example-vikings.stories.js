import { argTypes, createMilestones } from './milestones';
import { data as dataVikings } from './data-vikings';

export default {
  title: 'd3-milestones',
  argTypes,
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
