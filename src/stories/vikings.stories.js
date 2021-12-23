import { createMilestones } from './milestones';
import { data as dataVikings } from './data-vikings';

export default {
  title: 'd3-milestones/Examples',
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
    data: {
      control: { type: 'object' },
    },
  },
};

const Template = (args) => createMilestones(args);

export const Vikings = Template.bind({});
Vikings.args = {
  optimize: true,
  distribution: 'top-bottom',
  orientation: 'horizontal',
  data: dataVikings,
};
